import { decode } from 'base64-arraybuffer';
import * as FileSystem from 'expo-file-system/legacy';
import { Challenge, Formation, Lineup, Player } from '../data/types';
import { ChallengeRow, LineupRow, Profile } from './database.types';
import { isSupabaseConfigured, supabase } from './supabase';

export interface Community {
  id: string;
  name: string;
  description: string | null;
  iconUrl: string | null;
  creatorId: string | null;
  isPrivate: boolean;
  memberCount: number;
  createdAt: string;
  userRole?: 'owner' | 'admin' | 'member' | null;
  isMember?: boolean;
}

export interface CommunityMember {
  userId: string;
  username: string;
  avatarColor: number;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
}

export interface CommunityInvitation {
  id: string;
  communityId: string;
  communityName: string;
  inviterUsername: string;
  inviteeUsername: string;
  status: 'pending' | 'accepted' | 'declined' | 'revoked';
  expiresAt: string;
  createdAt: string;
}

export interface PublicLineup extends Lineup {
  userId: string;
  username: string;
  avatarColor: number;
  hasVoted?: boolean;
  isFavorited?: boolean;
}

function lineupRowToPublicLineup(row: LineupRow & { profiles?: Profile }, currentUserId?: string): PublicLineup {
  return {
    id: row.id,
    name: row.name,
    formation: row.formation_data as unknown as Formation,
    players: row.players_data as unknown as { [positionId: string]: Player },
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    votes: row.votes_count,
    isPublic: row.is_public,
    userId: row.user_id,
    username: row.profiles?.username || 'Anonymous',
    avatarColor: row.profiles?.avatar_color || 0,
  };
}

function challengeRowToChallenge(row: ChallengeRow, participantCount: number): Challenge {
  const isFeatured = ((row as any).is_featured ?? (row as any).isFeatured) as boolean | undefined;
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    theme: row.theme,
    endDate: row.end_date,
    participants: participantCount,
    isFeatured: !!isFeatured,
  };
}

export interface EnteredChallenge extends Challenge {
  enteredAt: string;
  lineupId: string;
  votesCount?: number;
}

export interface ChallengeVotingEntry {
  challengeId: string;
  challengeTitle: string;
  challengeEndDate: string;
  submittedAt: string;
  lineup: PublicLineup;
}

export interface ChallengeWinner {
  challengeId: string;
  challengeTitle: string;
  challengeTheme: string;
  challengeEndDate: string;
  winnerLineupId: string | null;
  winnerUserId: string | null;
  winnerUsername: string | null;
  winnerAvatarColor: number | null;
  winnerVotesCount: number | null;
  winnerResolvedAt: string | null;
  lineup: PublicLineup | null;
  isLegacy?: boolean;
}

export async function resolveDueChallengeWinners(): Promise<{ success: boolean; resolvedCount: number; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, resolvedCount: 0, error: 'Backend not configured' };
  }

  try {
    const { data, error } = await supabase.rpc('resolve_due_challenge_winners');
    if (error) {
      return { success: false, resolvedCount: 0, error: error.message };
    }
    const resolvedCount = typeof data === 'number' ? data : 0;
    return { success: true, resolvedCount };
  } catch (e: any) {
    return { success: false, resolvedCount: 0, error: e?.message || 'Failed to resolve winners' };
  }
}

async function fetchChallengeWinnerLegacy(challengeId: string): Promise<ChallengeWinner | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  const { data: challenge, error: challengeError } = await supabase
    .from('challenges')
    .select('id,title,theme,end_date')
    .eq('id', challengeId)
    .maybeSingle();

  if (challengeError || !challenge) {
    if (challengeError) {
      console.warn('Error fetching legacy challenge row:', challengeError);
    }
    return null;
  }

  const endDate = (challenge as any).end_date as string;
  const isEnded = !!endDate && new Date(endDate).getTime() <= Date.now();

  if (!isEnded) {
    return {
      challengeId: (challenge as any).id as string,
      challengeTitle: (challenge as any).title as string,
      challengeTheme: (challenge as any).theme as string,
      challengeEndDate: endDate,
      winnerLineupId: null,
      winnerUserId: null,
      winnerUsername: null,
      winnerAvatarColor: null,
      winnerVotesCount: null,
      winnerResolvedAt: null,
      lineup: null,
      isLegacy: true,
    };
  }

  const { data: entryRows, error: entriesError } = await supabase
    .from('challenge_entries')
    .select('lineup_id,user_id,created_at')
    .eq('challenge_id', challengeId);

  if (entriesError) {
    console.warn('Error fetching legacy challenge entries:', entriesError);
    return {
      challengeId: (challenge as any).id as string,
      challengeTitle: (challenge as any).title as string,
      challengeTheme: (challenge as any).theme as string,
      challengeEndDate: endDate,
      winnerLineupId: null,
      winnerUserId: null,
      winnerUsername: null,
      winnerAvatarColor: null,
      winnerVotesCount: null,
      winnerResolvedAt: null,
      lineup: null,
      isLegacy: true,
    };
  }

  const entries = (entryRows || [])
    .map((r: any) => ({
      lineupId: r.lineup_id as string | null | undefined,
      userId: r.user_id as string | null | undefined,
      createdAt: r.created_at as string | null | undefined,
    }))
    .filter((e) => !!e.lineupId) as { lineupId: string; userId?: string | null; createdAt?: string | null }[];

  if (entries.length === 0) {
    return {
      challengeId: (challenge as any).id as string,
      challengeTitle: (challenge as any).title as string,
      challengeTheme: (challenge as any).theme as string,
      challengeEndDate: endDate,
      winnerLineupId: null,
      winnerUserId: null,
      winnerUsername: null,
      winnerAvatarColor: null,
      winnerVotesCount: null,
      winnerResolvedAt: null,
      lineup: null,
      isLegacy: true,
    };
  }

  const lineupIds = [...new Set(entries.map((e) => e.lineupId))];
  const { data: lineupRows, error: lineupsError } = await supabase
    .from('lineups')
    .select('*')
    .in('id', lineupIds);

  if (lineupsError || !lineupRows) {
    if (lineupsError) {
      console.warn('Error fetching legacy winner lineups:', lineupsError);
    }
    return {
      challengeId: (challenge as any).id as string,
      challengeTitle: (challenge as any).title as string,
      challengeTheme: (challenge as any).theme as string,
      challengeEndDate: endDate,
      winnerLineupId: null,
      winnerUserId: null,
      winnerUsername: null,
      winnerAvatarColor: null,
      winnerVotesCount: null,
      winnerResolvedAt: null,
      lineup: null,
      isLegacy: true,
    };
  }

  const lineupMap = new Map<string, any>();
  (lineupRows || []).forEach((row: any) => {
    if (row?.id) lineupMap.set(row.id as string, row);
  });

  const entryMap = new Map<string, { userId?: string | null; createdAt?: string | null }>();
  entries.forEach((e) => entryMap.set(e.lineupId, { userId: e.userId, createdAt: e.createdAt }));

  const ranked = lineupIds
    .map((lineupId) => {
      const lineupRow = lineupMap.get(lineupId);
      if (!lineupRow) return null;
      const entry = entryMap.get(lineupId);
      return {
        lineupId,
        lineupRow,
        votes: typeof lineupRow.votes_count === 'number' ? (lineupRow.votes_count as number) : 0,
        entryCreatedAt: entry?.createdAt || null,
        entryUserId: entry?.userId || null,
      };
    })
    .filter(Boolean) as {
    lineupId: string;
    lineupRow: any;
    votes: number;
    entryCreatedAt: string | null;
    entryUserId: string | null;
  }[];

  if (ranked.length === 0) {
    return {
      challengeId: (challenge as any).id as string,
      challengeTitle: (challenge as any).title as string,
      challengeTheme: (challenge as any).theme as string,
      challengeEndDate: endDate,
      winnerLineupId: null,
      winnerUserId: null,
      winnerUsername: null,
      winnerAvatarColor: null,
      winnerVotesCount: null,
      winnerResolvedAt: null,
      lineup: null,
      isLegacy: true,
    };
  }

  ranked.sort((a, b) => {
    if (b.votes !== a.votes) return b.votes - a.votes;
    const aTime = a.entryCreatedAt ? new Date(a.entryCreatedAt).getTime() : Number.MAX_SAFE_INTEGER;
    const bTime = b.entryCreatedAt ? new Date(b.entryCreatedAt).getTime() : Number.MAX_SAFE_INTEGER;
    if (aTime !== bTime) return aTime - bTime;
    return a.lineupId.localeCompare(b.lineupId);
  });

  const winner = ranked[0];
  const winnerLineupId = winner.lineupId;
  const winnerUserId = (winner.entryUserId || winner.lineupRow.user_id || null) as string | null;

  let winnerProfile: Profile | null = null;
  if (winnerUserId) {
    const { data: profileRow, error: profileError } = await supabase
      .from('profiles')
      .select('id,username,avatar_color')
      .eq('id', winnerUserId)
      .maybeSingle();

    if (profileError) {
      console.warn('Error fetching legacy winner profile:', profileError);
    } else {
      winnerProfile = (profileRow as any) || null;
    }
  }

  const lineupWithProfile = { ...(winner.lineupRow as any), profiles: winnerProfile || undefined } as LineupRow & {
    profiles?: Profile;
  };

  return {
    challengeId: (challenge as any).id as string,
    challengeTitle: (challenge as any).title as string,
    challengeTheme: (challenge as any).theme as string,
    challengeEndDate: endDate,
    winnerLineupId,
    winnerUserId,
    winnerUsername: winnerProfile?.username ?? null,
    winnerAvatarColor: typeof winnerProfile?.avatar_color === 'number' ? winnerProfile.avatar_color : null,
    winnerVotesCount: winner.votes,
    winnerResolvedAt: null,
    lineup: lineupRowToPublicLineup(lineupWithProfile),
    isLegacy: true,
  };
}

export async function fetchChallengeWinner(challengeId: string): Promise<ChallengeWinner | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  if (!challengeId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(challengeId)) {
    return null;
  }

  const { data, error } = await supabase
    .from('challenges')
    .select('id,title,theme,end_date,winner_lineup_id,winner_user_id,winner_votes_count,winner_resolved_at')
    .eq('id', challengeId)
    .maybeSingle();

  if (error) {
    if ((error as any)?.code === '42703') {
      return fetchChallengeWinnerLegacy(challengeId);
    }
    console.warn('Error fetching challenge winner:', error);
    return null;
  }

  if (!data) {
    return null;
  }

  const winnerLineupId = ((data as any).winner_lineup_id as string | null) ?? null;
  const winnerUserId = ((data as any).winner_user_id as string | null) ?? null;

  let winnerProfile: Profile | null = null;
  if (winnerUserId) {
    const { data: profileRow, error: profileError } = await supabase
      .from('profiles')
      .select('id,username,avatar_color')
      .eq('id', winnerUserId)
      .maybeSingle();

    if (profileError) {
      console.error('Error fetching winner profile:', profileError);
    } else {
      winnerProfile = (profileRow as any) || null;
    }
  }

  let lineup: PublicLineup | null = null;
  if (winnerLineupId) {
    const { data: lineupRow, error: lineupError } = await supabase
      .from('lineups')
      .select('*')
      .eq('id', winnerLineupId)
      .maybeSingle();

    if (lineupError) {
      console.error('Error fetching winner lineup:', lineupError);
    } else if (lineupRow) {
      const lineupWithProfile = { ...(lineupRow as any), profiles: winnerProfile || undefined } as LineupRow & {
        profiles?: Profile;
      };
      lineup = lineupRowToPublicLineup(lineupWithProfile);
    }
  }

  return {
    challengeId: (data as any).id as string,
    challengeTitle: (data as any).title as string,
    challengeTheme: (data as any).theme as string,
    challengeEndDate: (data as any).end_date as string,
    winnerLineupId,
    winnerUserId,
    winnerUsername: winnerProfile?.username ?? null,
    winnerAvatarColor: typeof winnerProfile?.avatar_color === 'number' ? winnerProfile.avatar_color : null,
    winnerVotesCount: typeof (data as any).winner_votes_count === 'number' ? (data as any).winner_votes_count : null,
    winnerResolvedAt: ((data as any).winner_resolved_at as string | null) ?? null,
    lineup,
    isLegacy: false,
  };
}

export async function fetchPublicLineups(limit = 20, offset = 0): Promise<PublicLineup[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('lineups')
    .select('*')
    .eq('is_public', true)
    .order('votes_count', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching public lineups:', error);
    return [];
  }

  return (data || []).map(row => lineupRowToPublicLineup(row));
}

export async function fetchTrendingLineups(limit = 10): Promise<PublicLineup[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from('lineups')
    .select('*')
    .eq('is_public', true)
    .gte('created_at', oneDayAgo)
    .order('votes_count', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching trending lineups:', error);
    return [];
  }

  return (data || []).map(row => lineupRowToPublicLineup(row));
}

export async function publishLineup(lineup: Lineup, userId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('lineups')
    .upsert({
      id: lineup.id,
      user_id: userId,
      name: lineup.name,
      formation_id: lineup.formation.id,
      formation_data: lineup.formation,
      players_data: lineup.players,
      is_public: true,
      updated_at: new Date().toISOString(),
    });

  if (error) {
    console.error('Error publishing lineup:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function unpublishLineup(lineupId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('lineups')
    .update({ is_public: false, updated_at: new Date().toISOString() })
    .eq('id', lineupId);

  if (error) {
    console.error('Error unpublishing lineup:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function fetchLineupById(lineupId: string): Promise<Lineup | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from('lineups')
    .select('*')
    .eq('id', lineupId)
    .single();

  if (error || !data) {
    console.error('Error fetching lineup:', error);
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    formation: data.formation_data as unknown as Formation,
    players: (data.players_data as unknown as { [positionId: string]: Player }) || {},
    createdAt: data.created_at,
    updatedAt: data.updated_at,
    votes: data.votes_count,
    isPublic: data.is_public,
  };
}

export async function voteForLineup(lineupId: string, userId: string): Promise<{ success: boolean; newVoteCount?: number; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: existingVote } = await supabase
    .from('votes')
    .select('id')
    .eq('lineup_id', lineupId)
    .eq('user_id', userId)
    .single();

  if (existingVote) {
    return { success: false, error: 'Already voted' };
  }

  const { error: voteError } = await supabase
    .from('votes')
    .insert({ lineup_id: lineupId, user_id: userId });

  if (voteError) {
    console.error('Error voting:', voteError);
    return { success: false, error: voteError.message };
  }

  const { data: lineup, error: updateError } = await supabase
    .from('lineups')
    .select('votes_count, user_id, name')
    .eq('id', lineupId)
    .single();

  if (updateError) {
    console.error('Error updating vote count:', updateError);
  }

  try {
    const recipientUserId = (lineup as any)?.user_id as string | undefined;
    if (recipientUserId && recipientUserId !== userId) {
      const { data: voterProfile } = await supabase
        .from('profiles')
        .select('username')
        .eq('id', userId)
        .maybeSingle();

      const voterUsername = (voterProfile as any)?.username as string | undefined;
      const voterLabel = voterUsername ? `@${voterUsername}` : 'Someone';
      const lineupName = ((lineup as any)?.name as string | undefined) || 'your lineup';

      await supabase.from('notifications').insert({
        user_id: recipientUserId,
        type: 'vote_received',
        title: 'New vote received',
        body: `${voterLabel} voted on ${lineupName}`,
        data: {
          lineupId,
          voterId: userId,
          voterUsername,
        },
      });
    }
  } catch (error) {
    console.error('Error creating vote notification:', error);
  }

  return { success: true, newVoteCount: lineup?.votes_count };
}

export async function removeVote(lineupId: string, userId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('votes')
    .delete()
    .eq('lineup_id', lineupId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error removing vote:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function fetchActiveChallenges(): Promise<Challenge[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const today = new Date().toISOString().slice(0, 10);

  const { data: futureOrToday, error: futureOrTodayError } = await supabase
    .from('challenges')
    .select('*')
    .eq('is_active', true)
    .gte('end_date', today)
    .order('end_date', { ascending: true });

  if (futureOrTodayError) {
    console.error('Error fetching challenges:', futureOrTodayError);
    throw new Error(futureOrTodayError.message);
  }

  const { data: anyActive, error: anyActiveError } =
    (futureOrToday || []).length > 0
      ? { data: futureOrToday, error: null }
      : await supabase
          .from('challenges')
          .select('*')
          .eq('is_active', true)
          .order('end_date', { ascending: true });

  if (anyActiveError) {
    console.error('Error fetching challenges:', anyActiveError);
    throw new Error(anyActiveError.message);
  }

  const challengesWithParticipants = await Promise.all(
    (anyActive || []).map(async (challenge) => {
      const { count, error: countError } = await supabase!
        .from('challenge_entries')
        .select('*', { count: 'exact', head: true })
        .eq('challenge_id', challenge.id);

      if (countError) {
        console.error('Error counting challenge entries:', countError);
      }

      return challengeRowToChallenge(challenge, count || 0);
    })
  );

  return challengesWithParticipants.sort((a, b) => Number(!!b.isFeatured) - Number(!!a.isFeatured));
}

function addDaysIso(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

export async function seedDefaultChallenges(): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { count, error: countError } = await supabase
    .from('challenges')
    .select('id', { count: 'exact', head: true });

  if (countError) {
    return { success: false, error: countError.message };
  }

  if ((count || 0) > 0) {
    return { success: true };
  }

  const defaults = [
    {
      title: 'Best XI of All Time',
      description: 'Build your ultimate dream team with players from any era',
      theme: 'legends',
      start_date: new Date().toISOString(),
      end_date: addDaysIso(7),
      is_active: true,
      is_featured: true,
    },
    {
      title: 'Premier League Legends',
      description: 'Create the best XI from Premier League history',
      theme: 'league',
      start_date: new Date().toISOString(),
      end_date: addDaysIso(10),
      is_active: true,
      is_featured: false,
    },
    {
      title: 'Under 25 Stars',
      description: 'Build a team with only rising stars under 25',
      theme: 'youth',
      start_date: new Date().toISOString(),
      end_date: addDaysIso(14),
      is_active: true,
      is_featured: false,
    },
    {
      title: 'World Cup Winners',
      description: 'Only players who have won the World Cup',
      theme: 'champions',
      start_date: new Date().toISOString(),
      end_date: addDaysIso(21),
      is_active: true,
      is_featured: false,
    },
    {
      title: "Ballon d'Or Dream Team",
      description: "Build a squad featuring Ballon d'Or winners and nominees",
      theme: 'awards',
      start_date: new Date().toISOString(),
      end_date: addDaysIso(28),
      is_active: true,
      is_featured: false,
    },
  ];

  const { error: insertError } = await supabase.from('challenges').insert(defaults);
  if (insertError) {
    return { success: false, error: insertError.message };
  }

  return { success: true };
}

export async function enterChallenge(challengeId: string, lineupId: string, userId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: existing, error: existingError } = await supabase
    .from('challenge_entries')
    .select('id')
    .eq('challenge_id', challengeId)
    .eq('user_id', userId)
    .limit(1)
    .maybeSingle();

  if (existingError) {
    console.error('Error checking existing entry:', existingError);
    return { success: false, error: existingError.message };
  }

  if (existing) {
    return { success: false, error: 'ALREADY_ENTERED' };
  }

  const { error } = await supabase
    .from('challenge_entries')
    .insert({
      challenge_id: challengeId,
      lineup_id: lineupId,
      user_id: userId,
    });

  if (error) {
    if ((error as any).code === '23505') {
      return { success: false, error: 'ALREADY_ENTERED' };
    }
    console.error('Error entering challenge:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function fetchUserChallengeEntry(
  challengeId: string,
  userId: string
): Promise<{ exists: boolean; lineupId?: string; enteredAt?: string; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { exists: false, error: 'Backend not configured' };
  }

  const { data, error } = await supabase
    .from('challenge_entries')
    .select('lineup_id, created_at')
    .eq('challenge_id', challengeId)
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return { exists: false, error: error.message };
  }

  if (!data) {
    return { exists: false };
  }

  return { exists: true, lineupId: data.lineup_id, enteredAt: data.created_at };
}

export async function fetchUserEnteredChallenges(userId: string): Promise<EnteredChallenge[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('challenge_entries')
    .select(`
      created_at,
      lineup_id,
      challenges (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user entered challenges:', error);
    return [];
  }

  const lineupIds = [...new Set((data || []).map((row: any) => row.lineup_id).filter(Boolean))] as string[];
  const voteCountMap = new Map<string, number>();
  if (lineupIds.length > 0) {
    const { data: lineups, error: lineupsError } = await supabase
      .from('lineups')
      .select('id, votes_count')
      .in('id', lineupIds);

    if (lineupsError) {
      console.error('Error fetching lineup vote counts:', lineupsError);
    } else {
      (lineups || []).forEach((l: any) => {
        voteCountMap.set(l.id, l.votes_count || 0);
      });
    }
  }

  const entered = await Promise.all(
    (data || []).map(async (row: any) => {
      const challengeRow = row.challenges as ChallengeRow | null;
      if (!challengeRow) {
        return null;
      }

      const { count } = await supabase!
        .from('challenge_entries')
        .select('*', { count: 'exact', head: true })
        .eq('challenge_id', challengeRow.id);

      const challenge = challengeRowToChallenge(challengeRow, count || 0);

      return {
        ...challenge,
        enteredAt: row.created_at,
        lineupId: row.lineup_id,
        votesCount: voteCountMap.get(row.lineup_id) || 0,
      } as EnteredChallenge;
    })
  );

  return entered.filter(Boolean) as EnteredChallenge[];
}

export async function fetchChallengeVotingEntries(
  userId: string,
  limit = 20,
  offset = 0
): Promise<ChallengeVotingEntry[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('challenge_entries')
    .select(
      `
      created_at,
      challenge_id,
      lineup_id,
      challenges (*),
      lineups:lineup_id!inner (
        *
      )
    `
    )
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('Error fetching challenge voting entries:', error);
    return [];
  }

  const today = new Date().toISOString().slice(0, 10);

  const lineupUserIds = [
    ...new Set(
      (data || [])
        .map((row: any) => row.lineups?.user_id as string | undefined)
        .filter(Boolean)
    ),
  ] as string[];

  const profileMap = new Map<string, Profile>();
  if (lineupUserIds.length > 0) {
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, username, avatar_color')
      .in('id', lineupUserIds);

    if (profilesError) {
      console.error('Error fetching profiles for voting entries:', profilesError);
    } else {
      (profiles || []).forEach((p: any) => {
        profileMap.set(p.id, p as Profile);
      });
    }
  }

  const entries = (data || [])
    .map((row: any) => {
      const challenge = row.challenges as ChallengeRow | null;
      const lineupRow = row.lineups as LineupRow | null;

      if (!challenge || !lineupRow) return null;
      if (lineupRow.user_id === userId) return null;

      const isActive = (challenge as any).is_active ?? true;
      if (!isActive) return null;

      const endDate = (challenge as any).end_date as string | undefined;
      if (!endDate) return null;

      const endDateOnly = endDate.slice(0, 10);
      if (endDateOnly < today) return null;

      const profile = profileMap.get(lineupRow.user_id) || undefined;
      const lineupWithProfile = { ...(lineupRow as any), profiles: profile } as LineupRow & { profiles?: Profile };

      return {
        challengeId: row.challenge_id as string,
        challengeTitle: (challenge as any).title as string,
        challengeEndDate: endDate,
        submittedAt: row.created_at as string,
        lineup: lineupRowToPublicLineup(lineupWithProfile),
      } satisfies ChallengeVotingEntry;
    })
    .filter(Boolean) as ChallengeVotingEntry[];

  if (entries.length === 0) return [];

  const lineupIds = entries.map((e) => e.lineup.id);
  const { data: voteRows, error: votesError } = await supabase
    .from('votes')
    .select('lineup_id')
    .eq('user_id', userId)
    .in('lineup_id', lineupIds);

  if (votesError) {
    console.error('Error fetching voting state:', votesError);
    return entries;
  }

  const votedLineupIds = new Set((voteRows || []).map((v: any) => v.lineup_id));
  return entries.map((entry) => ({
    ...entry,
    lineup: {
      ...entry.lineup,
      hasVoted: votedLineupIds.has(entry.lineup.id),
    },
  }));
}

export async function toggleFavorite(lineupId: string, userId: string): Promise<{ success: boolean; isFavorited: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, isFavorited: false, error: 'Backend not configured' };
  }

  const { data: existing } = await supabase
    .from('favorites')
    .select('id')
    .eq('lineup_id', lineupId)
    .eq('user_id', userId)
    .single();

  if (existing) {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('id', existing.id);

    if (error) {
      return { success: false, isFavorited: true, error: error.message };
    }
    return { success: true, isFavorited: false };
  } else {
    const { error } = await supabase
      .from('favorites')
      .insert({ lineup_id: lineupId, user_id: userId });

    if (error) {
      return { success: false, isFavorited: false, error: error.message };
    }
    return { success: true, isFavorited: true };
  }
}

export async function fetchUserFavorites(userId: string): Promise<PublicLineup[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('favorites')
    .select(`
      lineup_id,
      lineups!inner (
        *,
        profiles:user_id (username, avatar_color)
      )
    `)
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }

  return (data || []).map((fav: any) => ({
    ...lineupRowToPublicLineup(fav.lineups),
    isFavorited: true,
  }));
}

export async function getLeaderboard(limit = 20): Promise<{ userId: string; username: string; avatarColor: number; lineupCount: number; totalVotes: number }[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('lineups')
    .select(`
      user_id,
      votes_count,
      profiles:user_id (username, avatar_color)
    `)
    .eq('is_public', true);

  if (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }

  const userStats = new Map<string, { username: string; avatarColor: number; lineupCount: number; totalVotes: number }>();

  (data || []).forEach((lineup: any) => {
    const existing = userStats.get(lineup.user_id) || {
      username: lineup.profiles?.username || 'Anonymous',
      avatarColor: lineup.profiles?.avatar_color || 0,
      lineupCount: 0,
      totalVotes: 0,
    };

    userStats.set(lineup.user_id, {
      ...existing,
      lineupCount: existing.lineupCount + 1,
      totalVotes: existing.totalVotes + (lineup.votes_count || 0),
    });
  });

  return Array.from(userStats.entries())
    .map(([userId, stats]) => ({ userId, ...stats }))
    .sort((a, b) => b.totalVotes - a.totalVotes)
    .slice(0, limit);
}

// =============================================
// COMMUNITY FUNCTIONS
// =============================================

export async function createCommunity(
  name: string,
  description: string | null,
  userId: string,
  isPrivate: boolean = false
): Promise<{ success: boolean; community?: Community; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: community, error: createError } = await supabase
    .from('communities')
    .insert({
      name,
      description,
      creator_id: userId,
      is_private: isPrivate,
    })
    .select()
    .single();

  if (createError) {
    console.error('Error creating community:', createError);
    return { success: false, error: createError.message };
  }

  const { error: memberError } = await supabase
    .from('community_memberships')
    .insert({
      community_id: community.id,
      user_id: userId,
      role: 'owner',
      status: 'active',
    });

  if (memberError) {
    console.error('Error adding creator as member:', memberError);
    await supabase.from('communities').delete().eq('id', community.id);
    return { success: false, error: memberError.message };
  }

  return {
    success: true,
    community: {
      id: community.id,
      name: community.name,
      description: community.description,
      iconUrl: community.icon_url,
      creatorId: community.creator_id,
      isPrivate: community.is_private,
      memberCount: 1,
      createdAt: community.created_at,
      userRole: 'owner',
      isMember: true,
    },
  };
}

export async function fetchCommunities(userId?: string): Promise<Community[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('communities')
    .select('*')
    .eq('is_private', false)
    .order('member_count', { ascending: false });

  if (error) {
    console.error('Error fetching communities:', error);
    return [];
  }

  let userMemberships: { community_id: string; role: string }[] = [];
  if (userId) {
    const { data: memberships } = await supabase
      .from('community_memberships')
      .select('community_id, role')
      .eq('user_id', userId)
      .eq('status', 'active');
    userMemberships = memberships || [];
  }

  return (data || []).map((c: any) => {
    const membership = userMemberships.find(m => m.community_id === c.id);
    return {
      id: c.id,
      name: c.name,
      description: c.description,
      iconUrl: c.icon_url,
      creatorId: c.creator_id,
      isPrivate: c.is_private,
      memberCount: c.member_count,
      createdAt: c.created_at,
      userRole: membership?.role as 'owner' | 'admin' | 'member' | undefined,
      isMember: !!membership,
    };
  });
}

export async function fetchUserCommunities(userId: string): Promise<Community[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('community_memberships')
    .select(`
      role,
      communities (*)
    `)
    .eq('user_id', userId)
    .eq('status', 'active');

  if (error) {
    console.error('Error fetching user communities:', error);
    return [];
  }

  return (data || []).map((m: any) => ({
    id: m.communities.id,
    name: m.communities.name,
    description: m.communities.description,
    iconUrl: m.communities.icon_url,
    creatorId: m.communities.creator_id,
    isPrivate: m.communities.is_private,
    memberCount: m.communities.member_count,
    createdAt: m.communities.created_at,
    userRole: m.role as 'owner' | 'admin' | 'member',
    isMember: true,
  }));
}

export async function fetchCommunityById(communityId: string, userId?: string): Promise<Community | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  const { data: community, error } = await supabase
    .from('communities')
    .select('*')
    .eq('id', communityId)
    .single();

  if (error || !community) {
    console.error('Error fetching community:', error);
    return null;
  }

  let userRole: 'owner' | 'admin' | 'member' | null = null;
  if (userId) {
    const { data: membership } = await supabase
      .from('community_memberships')
      .select('role')
      .eq('community_id', communityId)
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();
    
    userRole = membership?.role as 'owner' | 'admin' | 'member' | null;
  }

  return {
    id: community.id,
    name: community.name,
    description: community.description,
    iconUrl: community.icon_url,
    creatorId: community.creator_id,
    isPrivate: community.is_private,
    memberCount: community.member_count,
    createdAt: community.created_at,
    userRole,
    isMember: !!userRole,
  };
}

export async function joinCommunity(communityId: string, userId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('community_memberships')
    .insert({
      community_id: communityId,
      user_id: userId,
      role: 'member',
      status: 'active',
    });

  if (error) {
    console.error('Error joining community:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function leaveCommunity(communityId: string, userId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: membership } = await supabase
    .from('community_memberships')
    .select('role')
    .eq('community_id', communityId)
    .eq('user_id', userId)
    .single();

  if (membership?.role === 'owner') {
    return { success: false, error: 'Owners cannot leave their community. Delete the community instead.' };
  }

  const { error } = await supabase
    .from('community_memberships')
    .delete()
    .eq('community_id', communityId)
    .eq('user_id', userId);

  if (error) {
    console.error('Error leaving community:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function fetchCommunityMembers(communityId: string): Promise<CommunityMember[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  try {
    // First, get all memberships for this community
    const { data: memberships, error: membershipsError } = await supabase
      .from('community_memberships')
      .select('user_id, role, joined_at')
      .eq('community_id', communityId)
      .eq('status', 'active')
      .order('joined_at', { ascending: true });

    if (membershipsError) {
      console.error('Error fetching community memberships:', membershipsError);
      return [];
    }

    if (!memberships || memberships.length === 0) {
      return [];
    }

    // Extract user IDs from memberships
    const userIds = memberships.map((m: any) => m.user_id);

    // Then, fetch user profiles for these user IDs
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, username, avatar_color')
      .in('id', userIds);

    if (profilesError) {
      console.error('Error fetching user profiles:', profilesError);
      // Return memberships without profile data if we can't fetch profiles
      return memberships.map((m: any) => ({
        userId: m.user_id,
        username: 'Anonymous',
        avatarColor: 0,
        role: m.role as 'owner' | 'admin' | 'member',
        joinedAt: m.joined_at,
      }));
    }

    // Create a map of user ID to profile for quick lookup
    const profileMap = new Map();
    if (profiles) {
      profiles.forEach((profile: any) => {
        profileMap.set(profile.id, profile);
      });
    }

    // Combine membership data with profile data
    return memberships.map((membership: any) => {
      const profile = profileMap.get(membership.user_id);
      return {
        userId: membership.user_id,
        username: profile?.username || 'Anonymous',
        avatarColor: profile?.avatar_color || 0,
        role: membership.role as 'owner' | 'admin' | 'member',
        joinedAt: membership.joined_at,
      };
    });
  } catch (error) {
    console.error('Error in fetchCommunityMembers:', error);
    return [];
  }
}

export async function inviteUserToCommunity(
  communityId: string,
  inviterUserId: string,
  inviteeUsername: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  // Verify inviter is an owner or admin of the community
  const { data: inviterMembership } = await supabase
    .from('community_memberships')
    .select('role')
    .eq('community_id', communityId)
    .eq('user_id', inviterUserId)
    .eq('status', 'active')
    .single();

  if (!inviterMembership || !['owner', 'admin'].includes(inviterMembership.role)) {
    return { success: false, error: 'Only community owners and admins can send invitations.' };
  }

  const { data: existingUser } = await supabase
    .from('profiles')
    .select('id, username')
    .ilike('username', inviteeUsername)
    .single();

  if (!existingUser) {
    return { success: false, error: 'User not found. Check the username and try again.' };
  }

  const { data: existingMember } = await supabase
    .from('community_memberships')
    .select('id')
    .eq('community_id', communityId)
    .eq('user_id', existingUser.id)
    .single();

  if (existingMember) {
    return { success: false, error: 'User is already a member of this community.' };
  }

  const { data: existingInvite } = await supabase
    .from('community_invitations')
    .select('id')
    .eq('community_id', communityId)
    .eq('invitee_username', existingUser.username)
    .eq('status', 'pending')
    .single();

  if (existingInvite) {
    return { success: false, error: 'User already has a pending invitation to this community.' };
  }

  const { error } = await supabase
    .from('community_invitations')
    .insert({
      community_id: communityId,
      inviter_id: inviterUserId,
      invitee_username: existingUser.username,
      invitee_user_id: existingUser.id,
    });

  if (error) {
    console.error('Error creating invitation:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function fetchPendingInvitations(userId: string): Promise<CommunityInvitation[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('community_invitations')
    .select(`
      *,
      communities:community_id (name)
    `)
    .eq('invitee_user_id', userId)
    .eq('status', 'pending')
    .gt('expires_at', new Date().toISOString());

  if (error) {
    console.error('Error fetching invitations:', error);
    return [];
  }

  if (!data || data.length === 0) return [];

  // Get all unique inviter IDs
  const inviterIds = [...new Set(data.map((inv: any) => inv.inviter_id).filter(Boolean))];
  const profileMap = new Map<string, string>();

  // Fetch all inviter profiles at once
  if (inviterIds.length > 0) {
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, username')
      .in('id', inviterIds);
    
    if (profiles) {
      profiles.forEach((profile: any) => {
        profileMap.set(profile.id, profile.username || 'Unknown');
      });
    }
  }

  return (data || []).map((inv: any) => ({
    id: inv.id,
    communityId: inv.community_id,
    communityName: inv.communities?.name || 'Unknown Community',
    inviterUsername: inv.inviter_id ? (profileMap.get(inv.inviter_id) || 'Unknown') : 'Unknown',
    inviteeUsername: inv.invitee_username,
    status: inv.status,
    expiresAt: inv.expires_at,
    createdAt: inv.created_at,
  }));
}

export async function respondToInvitation(
  invitationId: string,
  userId: string,
  accept: boolean
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: invitation, error: fetchError } = await supabase
    .from('community_invitations')
    .select('community_id, invitee_user_id')
    .eq('id', invitationId)
    .single();

  if (fetchError || !invitation) {
    return { success: false, error: 'Invitation not found.' };
  }

  if (invitation.invitee_user_id !== userId) {
    return { success: false, error: 'You are not authorized to respond to this invitation.' };
  }

  const { error: updateError } = await supabase
    .from('community_invitations')
    .update({ status: accept ? 'accepted' : 'declined' })
    .eq('id', invitationId);

  if (updateError) {
    console.error('Error updating invitation:', updateError);
    return { success: false, error: updateError.message };
  }

  if (accept) {
    const { error: joinError } = await supabase
      .from('community_memberships')
      .insert({
        community_id: invitation.community_id,
        user_id: userId,
        role: 'member',
        status: 'active',
      });

    if (joinError) {
      console.error('Error joining community after accepting:', joinError);
      return { success: false, error: 'Failed to join community.' };
    }
  }

  return { success: true };
}

export async function searchUsersByUsername(query: string, limit = 10): Promise<{ id: string; username: string; avatarColor: number }[]> {
  if (!isSupabaseConfigured() || !supabase || !query.trim()) {
    return [];
  }

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, avatar_color')
    .ilike('username', `%${query}%`)
    .limit(limit);

  if (error) {
    console.error('Error searching users:', error);
    return [];
  }

  return (data || []).map((u: any) => ({
    id: u.id,
    username: u.username || 'Anonymous',
    avatarColor: u.avatar_color || 0,
  }));
}

export async function updateMemberRole(
  communityId: string,
  targetUserId: string,
  newRole: 'admin' | 'member'
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('community_memberships')
    .update({ role: newRole })
    .eq('community_id', communityId)
    .eq('user_id', targetUserId);

  if (error) {
    console.error('Error updating member role:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function updateCommunity(
  communityId: string,
  description?: string | null,
  isPrivate?: boolean
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const updates: any = { updated_at: new Date().toISOString() };
  if (description !== undefined) updates.description = description;
  if (isPrivate !== undefined) updates.is_private = isPrivate;

  const { error } = await supabase
    .from('communities')
    .update(updates)
    .eq('id', communityId);

  if (error) {
    console.error('Error updating community:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function deleteCommunity(communityId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('communities')
    .delete()
    .eq('id', communityId);

  if (error) {
    console.error('Error deleting community:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

// =============================================
// TOPICS AND MESSAGES
// =============================================

export interface Topic {
  id: string;
  communityId: string;
  creatorId: string | null;
  creatorUsername: string;
  creatorAvatarColor: number;
  title: string;
  messageCount: number;
  lastActivityAt: string;
  createdAt: string;
}

export interface LineupSnapshot {
  id: string;
  name: string;
  formationId: string;
  formationName: string;
  playerCount: number;
  imageUrl?: string;
}

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;

export async function uploadLineupImage(
  imageUri: string,
  lineupId: string,
  userId: string
): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  if (!imageUri || !lineupId || !userId) {
    return { success: false, error: 'Missing required parameters' };
  }

  try {
    const fileInfo = await FileSystem.getInfoAsync(imageUri);
    if (!fileInfo.exists) {
      return { success: false, error: 'Image file not found' };
    }

    if (fileInfo.size && fileInfo.size > MAX_IMAGE_SIZE_BYTES) {
      return { success: false, error: 'Image too large (max 5MB)' };
    }

    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
    });

    const arrayBuffer = decode(base64);
    
    const fileName = `lineup-${lineupId}-${Date.now()}.png`;
    const filePath = `lineups/${userId}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('lineup-images')
      .upload(filePath, arrayBuffer, {
        contentType: 'image/png',
        upsert: true,
      });

    if (error) {
      console.error('Error uploading image:', error);
      return { success: false, error: error.message };
    }

    const { data: urlData } = supabase.storage
      .from('lineup-images')
      .getPublicUrl(filePath);

    return { success: true, url: urlData.publicUrl };
  } catch (err: any) {
    console.error('Error uploading lineup image:', err);
    return { success: false, error: err.message || 'Failed to upload image' };
  }
}

export async function uploadChatImage(
  imageUri: string,
  userId: string
): Promise<{ success: boolean; url?: string; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  if (!imageUri || !userId) {
    return { success: false, error: 'Missing required parameters' };
  }

  try {
    const fileInfo = await FileSystem.getInfoAsync(imageUri);
    if (!fileInfo.exists) {
      return { success: false, error: 'Image file not found' };
    }

    if (fileInfo.size && fileInfo.size > MAX_IMAGE_SIZE_BYTES) {
      return { success: false, error: 'Image too large (max 5MB)' };
    }

    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
    });

    const arrayBuffer = decode(base64);
    
    const fileName = `message-${Date.now()}.png`;
    const filePath = `chat-images/${userId}/${fileName}`;

    const { data, error } = await supabase.storage
      .from('lineup-images')
      .upload(filePath, arrayBuffer, {
        contentType: 'image/png',
        upsert: true,
      });

    if (error) {
      console.error('Error uploading chat image:', error);
      return { success: false, error: error.message };
    }

    const { data: urlData } = supabase.storage
      .from('lineup-images')
      .getPublicUrl(filePath);

    return { success: true, url: urlData.publicUrl };
  } catch (err: any) {
    console.error('Error uploading chat image:', err);
    return { success: false, error: err.message || 'Failed to upload image' };
  }
}

export interface TopicMessage {
  id: string;
  topicId: string;
  authorId: string | null;
  authorUsername: string;
  authorAvatarColor: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  lineup?: LineupSnapshot;
  imageUrl?: string;
}

export async function fetchCommunityTopics(communityId: string): Promise<Topic[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('community_topics')
    .select('id, community_id, creator_id, title, message_count, last_activity_at, created_at')
    .eq('community_id', communityId)
    .order('last_activity_at', { ascending: false });

  if (error) {
    console.error('Error fetching topics:', error);
    return [];
  }

  // Fetch all unique creator profiles
  const creatorIds = [...new Set((data || []).map((row: any) => row.creator_id).filter(Boolean))];
  const profileMap = new Map<string, any>();
  
  if (creatorIds.length > 0) {
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, username, avatar_color')
      .in('id', creatorIds);
    
    if (profiles) {
      profiles.forEach((profile: any) => {
        profileMap.set(profile.id, profile);
      });
    }
  }

  return (data || []).map((row: any) => {
    const profile = profileMap.get(row.creator_id) || {};
    return {
      id: row.id,
      communityId: row.community_id,
      creatorId: row.creator_id,
      creatorUsername: profile.username || 'Unknown',
      creatorAvatarColor: profile.avatar_color || 0,
      title: row.title,
      messageCount: row.message_count,
      lastActivityAt: row.last_activity_at,
      createdAt: row.created_at,
    };
  });
}

export async function fetchTopicById(topicId: string): Promise<Topic | null> {
  if (!isSupabaseConfigured() || !supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from('community_topics')
    .select('id, community_id, creator_id, title, message_count, last_activity_at, created_at')
    .eq('id', topicId)
    .single();

  if (error) {
    console.error('Error fetching topic:', error);
    return null;
  }

  const row = data as any;
  
  // Fetch creator profile separately
  let creatorUsername = 'Unknown';
  let creatorAvatarColor = 0;
  if (row.creator_id) {
    const { data: profileData } = await supabase
      .from('profiles')
      .select('username, avatar_color')
      .eq('id', row.creator_id)
      .single();
    if (profileData) {
      creatorUsername = profileData.username || 'Unknown';
      creatorAvatarColor = profileData.avatar_color || 0;
    }
  }

  return {
    id: row.id,
    communityId: row.community_id,
    creatorId: row.creator_id,
    creatorUsername,
    creatorAvatarColor,
    title: row.title,
    messageCount: row.message_count,
    lastActivityAt: row.last_activity_at,
    createdAt: row.created_at,
  };
}

export async function fetchTopicMessages(topicId: string): Promise<TopicMessage[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('topic_messages')
    .select('id, topic_id, author_id, body, created_at, updated_at, lineup_snapshot, image_url')
    .eq('topic_id', topicId)
    .order('created_at', { ascending: true });

  if (error) {
    // Handle missing column gracefully (for backwards compatibility)
    if (error.code === '42703' && error.message.includes('image_url')) {
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('topic_messages')
        .select('id, topic_id, author_id, body, created_at, updated_at, lineup_snapshot')
        .eq('topic_id', topicId)
        .order('created_at', { ascending: true });
      
      if (fallbackError) {
        console.error('Error fetching messages:', fallbackError);
        return [];
      }
      return (fallbackData || []).map((row: any) => ({
        ...row,
        imageUrl: undefined,
      }));
    }
    
    console.error('Error fetching messages:', error);
    return [];
  }

  // Fetch all unique author profiles
  const authorIds = [...new Set((data || []).map((row: any) => row.author_id).filter(Boolean))];
  const profileMap = new Map<string, any>();
  
  if (authorIds.length > 0) {
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, username, avatar_color')
      .in('id', authorIds);
    
    if (profiles) {
      profiles.forEach((profile: any) => {
        profileMap.set(profile.id, profile);
      });
    }
  }

  return (data || []).map((row: any) => {
    const profile = profileMap.get(row.author_id) || {};
    const lineup = row.lineup_snapshot ? row.lineup_snapshot as LineupSnapshot : undefined;
    return {
      id: row.id,
      topicId: row.topic_id,
      authorId: row.author_id,
      authorUsername: profile.username || 'Unknown',
      authorAvatarColor: profile.avatar_color || 0,
      body: row.body,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lineup,
      imageUrl: row.image_url,
    };
  });
}

export async function createTopic(
  communityId: string,
  creatorId: string,
  title: string,
  initialMessage: string
): Promise<{ success: boolean; topicId?: string; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { data: topicData, error: topicError } = await supabase
    .from('community_topics')
    .insert({
      community_id: communityId,
      creator_id: creatorId,
      title: title.trim(),
    })
    .select('id')
    .single();

  if (topicError) {
    console.error('Error creating topic:', topicError);
    return { success: false, error: topicError.message };
  }

  const topicId = topicData.id;

  const { error: messageError } = await supabase
    .from('topic_messages')
    .insert({
      topic_id: topicId,
      author_id: creatorId,
      body: initialMessage.trim(),
    });

  if (messageError) {
    console.error('Error creating initial message:', messageError);
    await supabase.from('community_topics').delete().eq('id', topicId);
    return { success: false, error: messageError.message };
  }

  return { success: true, topicId };
}

export async function postMessage(
  topicId: string,
  authorId: string,
  body: string,
  lineupSnapshot?: LineupSnapshot,
  imageUrl?: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const insertData: any = {
    topic_id: topicId,
    author_id: authorId,
    body: body.trim(),
  };
  
  if (lineupSnapshot) {
    insertData.lineup_snapshot = lineupSnapshot;
  }

  if (imageUrl) {
    insertData.image_url = imageUrl;
  }

  const { data, error } = await supabase
    .from('topic_messages')
    .insert(insertData)
    .select('id')
    .single();

  if (error) {
    console.error('Error posting message:', error);
    return { success: false, error: error.message };
  }

  return { success: true, messageId: data.id };
}

export async function deleteTopic(topicId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('community_topics')
    .delete()
    .eq('id', topicId);

  if (error) {
    console.error('Error deleting topic:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export async function deleteMessage(messageId: string): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Backend not configured' };
  }

  const { error } = await supabase
    .from('topic_messages')
    .delete()
    .eq('id', messageId);

  if (error) {
    console.error('Error deleting message:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  body: string | null;
  data: {
    topicId?: string;
    topicTitle?: string;
    communityName?: string;
    authorUsername?: string;
    lineupId?: string;
    voterId?: string;
    voterUsername?: string;
    challengeId?: string;
    challengeTitle?: string;
  };
  isRead: boolean;
  createdAt: string;
}

export function parseMentions(text: string): string[] {
  const mentionRegex = /@(\w+)/g;
  const mentions: string[] = [];
  let match;
  while ((match = mentionRegex.exec(text)) !== null) {
    mentions.push(match[1].toLowerCase());
  }
  return [...new Set(mentions)];
}

export async function fetchNotifications(userId: string): Promise<Notification[]> {
  if (!isSupabaseConfigured() || !supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);

  if (error) {
    console.error('Error fetching notifications:', error);
    return [];
  }

  return (data || []).map((row: any) => ({
    id: row.id,
    userId: row.user_id,
    type: row.type,
    title: row.title,
    body: row.body,
    data: row.data || {},
    isRead: row.is_read,
    createdAt: row.created_at,
  }));
}

export async function getUnreadNotificationCount(userId: string): Promise<number> {
  if (!isSupabaseConfigured() || !supabase) {
    return 0;
  }

  const { count, error } = await supabase
    .from('notifications')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId)
    .eq('is_read', false);

  if (error) {
    console.error('Error getting unread count:', error);
    return 0;
  }

  return count || 0;
}

export async function markNotificationAsRead(notificationId: string): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('id', notificationId);

  return !error;
}

export async function markAllNotificationsAsRead(userId: string): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('user_id', userId)
    .eq('is_read', false);

  return !error;
}

export async function deleteNotification(notificationId: string): Promise<boolean> {
  if (!isSupabaseConfigured() || !supabase) {
    return false;
  }

  const { error } = await supabase
    .from('notifications')
    .delete()
    .eq('id', notificationId);

  return !error;
}

export async function createMentionNotifications(
  topicId: string,
  authorId: string,
  authorUsername: string,
  messageBody: string,
  topicTitle: string,
  communityName: string
): Promise<void> {
  if (!isSupabaseConfigured() || !supabase) {
    return;
  }

  const mentionedUsernames = parseMentions(messageBody);
  if (mentionedUsernames.length === 0) return;

  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, username')
    .in('username', mentionedUsernames);

  if (!profiles || profiles.length === 0) return;

  const messagePreview = messageBody.length > 100 
    ? messageBody.substring(0, 100) + '...' 
    : messageBody;

  for (const profile of profiles) {
    if (profile.id === authorId) continue;
    
    await supabase.from('notifications').insert({
      user_id: profile.id,
      type: 'mention',
      title: `@${authorUsername} mentioned you`,
      body: messagePreview,
      data: {
        topicId,
        topicTitle,
        communityName,
        authorUsername,
      },
    });
  }
}

export async function searchCommunityMembers(
  communityId: string,
  searchQuery: string
): Promise<{ userId: string; username: string; avatarColor: number }[]> {
  if (!isSupabaseConfigured() || !supabase || !searchQuery.trim()) {
    return [];
  }

  const { data: memberships } = await supabase
    .from('community_memberships')
    .select('user_id')
    .eq('community_id', communityId)
    .eq('status', 'active');

  if (!memberships || memberships.length === 0) return [];

  const memberIds = memberships.map((m: any) => m.user_id);

  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, username, avatar_color')
    .in('id', memberIds)
    .ilike('username', `${searchQuery}%`)
    .limit(5);

  if (!profiles) return [];

  return profiles.map((p: any) => ({
    userId: p.id,
    username: p.username || 'Unknown',
    avatarColor: p.avatar_color || 0,
  }));
}

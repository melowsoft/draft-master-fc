import { API_FOOTBALL_CONFIG } from '@/constants/ApiConfig';
import { League, Player, Position } from '@/data/types';

type SearchApiFootballPlayersParams = {
  query?: string;
  league: League;
  positionHint?: Position;
  signal?: AbortSignal;
};

type ApiFootballResponse<T> = {
  response?: T;
  errors?: unknown;
};

type ApiFootballPlayerResponse = {
  player?: {
    id?: number;
    name?: string;
    age?: number;
    nationality?: string;
    photo?: string;
  };
  statistics?: {
    team?: { name?: string };
    league?: { id?: number; name?: string };
    games?: { position?: string; rating?: string };
  }[];
};

type ApiFootballPlayerProfileResponse = {
  player?: {
    id?: number;
    name?: string;
    age?: number;
    nationality?: string;
    photo?: string;
    position?: string;
  };
};

type ApiFootballTeamSearchResponse = {
  team?: {
    id?: number;
    name?: string;
  };
};

export type ApiFootballPlayerRadarStats = {
  duelsWonPct: number | null;
  possessionsWon: number | null;
  progressiveCarries: number | null;
  forwardPasses: number | null;
  forwardPassPct: number | null;
  keyPasses: number | null;
  progressivePasses: number | null;
};

type ApiFootballPlayerStatsEntry = {
  games?: {
    minutes?: number;
    appearences?: number;
  };
  duels?: {
    total?: number;
    won?: number;
  };
  tackles?: {
    total?: number;
    interceptions?: number;
  };
  dribbles?: {
    attempts?: number;
    success?: number;
    past?: number;
  };
  passes?: {
    total?: number;
    key?: number;
    accuracy?: string | number;
  };
};

type ApiFootballPlayerStatsResponse = {
  player?: { id?: number };
  statistics?: ApiFootballPlayerStatsEntry[];
};

const baseUrl = String(API_FOOTBALL_CONFIG.BASE_URL || 'https://v3.football.api-sports.io')
  .replace(/\/+$/, '')
  .trim();

const apiSportsKey = String(API_FOOTBALL_CONFIG.API_KEY || '').trim();

let requestCounter = 0;
const teamIdCache = new Map<string, number>();

function apiErrorsToMessage(errors: unknown): string | null {
  if (!errors) return null;
  if (Array.isArray(errors)) {
    const items = errors.map((e) => String(e || '').trim()).filter(Boolean);
    return items.length ? items.join(', ') : null;
  }
  if (typeof errors === 'object') {
    const entries = Object.entries(errors as Record<string, unknown>)
      .map(([k, v]) => {
        const value = Array.isArray(v)
          ? v.map((x) => String(x || '').trim()).filter(Boolean).join(', ')
          : String(v || '').trim();
        if (!value) return null;
        return `${k}: ${value}`;
      })
      .filter((x): x is string => Boolean(x));
    return entries.length ? entries.join(' | ') : null;
  }
  const asString = String(errors).trim();
  return asString ? asString : null;
}

function buildHeaders(): Record<string, string> {
  const headers: Record<string, string> = { accept: 'application/json' };
  if (apiSportsKey) headers['x-apisports-key'] = apiSportsKey;
  return headers;
}

export function isApiFootballConfigured(): boolean {
  return Boolean(apiSportsKey);
}

export function getApiFootballConfigWarning(): string {
  if (isApiFootballConfigured()) return '';
  return 'API-Football not configured. Set EXPO_PUBLIC_API_FOOTBALL_KEY in your .env.';
}

function getSeasonYear(): number {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  return month >= 7 ? year : year - 1;
}

function leagueToApiFootballLeagueId(league: League): number | undefined {
  switch (league) {
    case 'Premier League':
      return 39;
    case 'La Liga':
      return 140;
    case 'Serie A':
      return 135;
    case 'Bundesliga':
      return 78;
    case 'Ligue 1':
      return 61;
    case 'Saudi Pro League':
      return 307;
    case 'MLS':
      return 253;
    default:
      return undefined;
  }
}

function apiFootballLeagueIdToLeague(leagueId: number | undefined): League | null {
  switch (leagueId) {
    case 39:
      return 'Premier League';
    case 140:
      return 'La Liga';
    case 135:
      return 'Serie A';
    case 78:
      return 'Bundesliga';
    case 61:
      return 'Ligue 1';
    case 307:
      return 'Saudi Pro League';
    case 253:
      return 'MLS';
    default:
      return null;
  }
}

function normalizeProfilesSearchQuery(query: string | undefined): string | null {
  const raw = (query || '').trim();
  if (!raw) return null;
  const cleaned = raw
    .replace(/[^a-z0-9 ]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned ? cleaned : null;
}

const POSITIONS_DEFENSE: Position[] = ['LB', 'CB', 'RB', 'CDM'];
const POSITIONS_MIDFIELD: Position[] = ['CM', 'CAM', 'LM', 'RM'];
const POSITIONS_ATTACK: Position[] = ['LW', 'RW', 'CF', 'ST'];

function normalizePositionFromApiFootball(raw: string | undefined, positionHint?: Position): Position {
  const text = (raw || '').toLowerCase();
  if (text.includes('goalkeeper') || text === 'gk') return 'GK';
  if (text.includes('defender') || text === 'd') {
    if (positionHint && POSITIONS_DEFENSE.includes(positionHint)) return positionHint;
    return 'CB';
  }
  if (text.includes('midfielder') || text === 'm') {
    if (positionHint && POSITIONS_MIDFIELD.includes(positionHint)) return positionHint;
    return 'CM';
  }
  if (
    text.includes('attacker') ||
    text.includes('forward') ||
    text.includes('striker') ||
    text.includes('winger') ||
    text === 'a'
  ) {
    if (positionHint && POSITIONS_ATTACK.includes(positionHint)) return positionHint;
    return 'ST';
  }
  if (positionHint) return positionHint;
  return 'CM';
}

function ratingFromApiFootball(gamesRating: string | undefined): number {
  if (!gamesRating) return 75;
  const value = Number.parseFloat(gamesRating);
  if (!Number.isFinite(value)) return 75;
  const scaled = Math.round(value * 12.5);
  return Math.max(1, Math.min(99, scaled));
}

function numberFromUnknown(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  const asNumber = typeof value === 'number' ? value : Number(String(value).trim());
  if (!Number.isFinite(asNumber)) return null;
  return asNumber;
}

function pct(numerator: number | null, denominator: number | null): number | null {
  if (numerator === null || denominator === null) return null;
  if (denominator <= 0) return null;
  const value = (numerator / denominator) * 100;
  if (!Number.isFinite(value)) return null;
  return Math.max(0, Math.min(100, value));
}

async function callApiFootball<T>({
  endpoint,
  params,
  signal,
}: {
  endpoint: string;
  params?: Record<string, string>;
  signal?: AbortSignal;
}): Promise<T> {
  const url = new URL(`${baseUrl}${endpoint}`);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null && String(v).length) url.searchParams.set(k, String(v));
    }
  }

  ++requestCounter;
  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: buildHeaders(),
    signal,
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`API-Football request failed (${response.status}) ${body ? `- ${body}` : ''}`.trim());
  }

  const data = (await response.json()) as ApiFootballResponse<T>;
  const apiErrorsMessage = apiErrorsToMessage(data?.errors);
  if (apiErrorsMessage) throw new Error(`API-Football error: ${apiErrorsMessage}`);
  return (data?.response as T) ?? (undefined as unknown as T);
}

async function resolveTeamIdByName(teamName: string, signal?: AbortSignal): Promise<number> {
  if (!isApiFootballConfigured()) {
    throw new Error(getApiFootballConfigWarning());
  }

  const cleaned = String(teamName || '').trim();
  if (!cleaned) throw new Error('Team name is required');

  const key = cleaned.toLowerCase();
  const cached = teamIdCache.get(key);
  if (cached) return cached;

  const results = await callApiFootball<ApiFootballTeamSearchResponse[]>({
    endpoint: '/teams',
    params: { search: cleaned },
    signal,
  });

  const candidates = (Array.isArray(results) ? results : [])
    .map((r) => ({
      id: r?.team?.id,
      name: (r?.team?.name || '').trim(),
    }))
    .filter((t): t is { id: number; name: string } => typeof t.id === 'number' && Number.isFinite(t.id) && Boolean(t.name));

  const wanted = cleaned.toLowerCase();
  const exact = candidates.find((t) => t.name.toLowerCase() === wanted);
  const best = exact ?? candidates[0];
  if (!best) throw new Error(`Team not found: ${cleaned}`);

  teamIdCache.set(key, best.id);
  return best.id;
}

export async function searchApiFootballPlayers({
  query,
  league,
  positionHint,
  signal,
}: SearchApiFootballPlayersParams): Promise<Player[]> {
  if (!isApiFootballConfigured()) {
    throw new Error(getApiFootballConfigWarning());
  }
  if (league === 'Retired') return [];

  const season = getSeasonYear();
  const leagueId = leagueToApiFootballLeagueId(league);

  const response = await callApiFootball<ApiFootballPlayerResponse[]>({
    endpoint: '/players',
    params: {
      season: String(season),
      ...(leagueId ? { league: String(leagueId) } : {}),
      ...(query && query.trim() ? { search: query.trim() } : {}),
    },
    signal,
  });

  const mapped = (Array.isArray(response) ? response : [])
    .map((item): Player | null => {
      const player = item?.player;
      const stats = item?.statistics?.[0];
      const apiId = player?.id;
      const name = player?.name;
      if (!apiId || !name) return null;

      const position = normalizePositionFromApiFootball(stats?.games?.position, positionHint);
      const club = stats?.team?.name || undefined;
      const resolvedLeague =
        league === 'Other' ? apiFootballLeagueIdToLeague(stats?.league?.id) || league : league;

      return {
        id: `af_${apiId}`,
        name,
        position,
        positions: [position],
        nationality: player?.nationality || 'Unknown',
        era: 'Modern',
        league: resolvedLeague,
        rating: ratingFromApiFootball(stats?.games?.rating),
        club,
        age: typeof player?.age === 'number' ? player.age : undefined,
        image: player?.photo || undefined,
      };
    })
    .filter((p): p is Player => Boolean(p));

  const seen = new Set<string>();
  const unique = mapped.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  unique.sort((a, b) => b.rating - a.rating);
  return unique;
}

export async function getApiFootballPlayersByTeamName({
  teamName,
  positionHint,
  signal,
}: {
  teamName: string;
  positionHint?: Position;
  signal?: AbortSignal;
}): Promise<Player[]> {
  if (!isApiFootballConfigured()) {
    throw new Error(getApiFootballConfigWarning());
  }

  const teamId = await resolveTeamIdByName(teamName, signal);
  const season = getSeasonYear();

  const response = await callApiFootball<ApiFootballPlayerResponse[]>({
    endpoint: '/players',
    params: {
      season: String(season),
      team: String(teamId),
    },
    signal,
  });

  const mapped = (Array.isArray(response) ? response : [])
    .map((item): Player | null => {
      const player = item?.player;
      const stats = item?.statistics?.[0];
      const apiId = player?.id;
      const name = player?.name;
      if (!apiId || !name) return null;

      const position = normalizePositionFromApiFootball(stats?.games?.position, positionHint);
      const club = stats?.team?.name || teamName || undefined;
      const league = apiFootballLeagueIdToLeague(stats?.league?.id) || 'Other';

      return {
        id: `af_${apiId}`,
        name,
        position,
        positions: [position],
        nationality: player?.nationality || 'Unknown',
        era: 'Modern',
        league,
        rating: ratingFromApiFootball(stats?.games?.rating),
        club,
        age: typeof player?.age === 'number' ? player.age : undefined,
        image: player?.photo || undefined,
      };
    })
    .filter((p): p is Player => Boolean(p));

  const seen = new Set<string>();
  const unique = mapped.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  unique.sort((a, b) => b.rating - a.rating);
  return unique;
}

export async function searchApiFootballPlayerProfiles({
  query,
  league,
  positionHint,
  signal,
}: SearchApiFootballPlayersParams): Promise<Player[]> {
  if (!isApiFootballConfigured()) {
    throw new Error(getApiFootballConfigWarning());
  }
  if (league === 'Retired') return [];

  const cleanedQuery = normalizeProfilesSearchQuery(query);
  if (!cleanedQuery) return [];

  const profiles = await callApiFootball<ApiFootballPlayerProfileResponse[]>({
    endpoint: '/players/profiles',
    params: { search: cleanedQuery, page: '1' },
    signal,
  });

  const season = getSeasonYear();
  const leagueId = leagueToApiFootballLeagueId(league);
  const candidateIds = (Array.isArray(profiles) ? profiles : [])
    .map((p) => p?.player?.id)
    .filter((id): id is number => typeof id === 'number' && Number.isFinite(id));

  const maxDetailRequests = 8;
  const details = await Promise.all(
    candidateIds.slice(0, maxDetailRequests).map(async (playerId) => {
      const playerDetail = await callApiFootball<ApiFootballPlayerResponse[]>({
        endpoint: '/players',
        params: {
          season: String(season),
          id: String(playerId),
          ...(leagueId ? { league: String(leagueId) } : {}),
        },
        signal,
      });
      const items = Array.isArray(playerDetail) ? playerDetail : [];
      return items[0] ?? null;
    })
  );

  const mapped = details
    .filter((d): d is ApiFootballPlayerResponse => Boolean(d))
    .map((item): Player | null => {
      const player = item?.player;
      const stats = item?.statistics?.[0];
      const apiId = player?.id;
      const name = player?.name;
      if (!apiId || !name) return null;

      const position = normalizePositionFromApiFootball(stats?.games?.position, positionHint);
      const club = stats?.team?.name || undefined;
      const resolvedLeague =
        league === 'Other' ? apiFootballLeagueIdToLeague(stats?.league?.id) || league : league;

      return {
        id: `af_${apiId}`,
        name,
        position,
        positions: [position],
        nationality: player?.nationality || 'Unknown',
        era: 'Modern',
        league: resolvedLeague,
        rating: ratingFromApiFootball(stats?.games?.rating),
        club,
        age: typeof player?.age === 'number' ? player.age : undefined,
        image: player?.photo || undefined,
      };
    })
    .filter((p): p is Player => Boolean(p));

  const seen = new Set<string>();
  const unique = mapped.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });

  unique.sort((a, b) => b.rating - a.rating);
  return unique;
}

export async function getApiFootballPlayerRadarStats({
  playerApiId,
  signal,
}: {
  playerApiId: number;
  signal?: AbortSignal;
}): Promise<ApiFootballPlayerRadarStats> {
  if (!isApiFootballConfigured()) {
    throw new Error(getApiFootballConfigWarning());
  }

  const season = getSeasonYear();
  const response = await callApiFootball<ApiFootballPlayerStatsResponse[]>({
    endpoint: '/players',
    params: { season: String(season), id: String(playerApiId) },
    signal,
  });

  const entry = (Array.isArray(response) ? response : [])[0];
  const statsEntries = Array.isArray(entry?.statistics) ? entry.statistics : [];

  const best = statsEntries.reduce<ApiFootballPlayerStatsEntry | null>((acc, cur) => {
    if (!acc) return cur;
    const accMinutes = numberFromUnknown(acc?.games?.minutes) ?? 0;
    const curMinutes = numberFromUnknown(cur?.games?.minutes) ?? 0;
    if (curMinutes !== accMinutes) return curMinutes > accMinutes ? cur : acc;

    const accApps = numberFromUnknown(acc?.games?.appearences) ?? 0;
    const curApps = numberFromUnknown(cur?.games?.appearences) ?? 0;
    return curApps > accApps ? cur : acc;
  }, null);

  const duelsTotal = numberFromUnknown(best?.duels?.total);
  const duelsWon = numberFromUnknown(best?.duels?.won);

  const tacklesTotal = numberFromUnknown(best?.tackles?.total);
  const tacklesInterceptions = numberFromUnknown(best?.tackles?.interceptions);

  const dribblesSuccess = numberFromUnknown(best?.dribbles?.success);
  const dribblesPast = numberFromUnknown(best?.dribbles?.past);

  const passesTotal = numberFromUnknown(best?.passes?.total);
  const passesKey = numberFromUnknown(best?.passes?.key);
  const passesAccuracy = numberFromUnknown(best?.passes?.accuracy);

  const possessionsWonParts = [duelsWon, tacklesTotal, tacklesInterceptions].filter(
    (v): v is number => typeof v === 'number' && Number.isFinite(v)
  );

  const possessionsWon = possessionsWonParts.length
    ? possessionsWonParts.reduce((sum, v) => sum + v, 0)
    : null;

  const progressiveCarries = dribblesSuccess ?? dribblesPast ?? null;
  const forwardPasses = passesTotal ?? null;
  const forwardPassPct = passesAccuracy !== null ? Math.max(0, Math.min(100, passesAccuracy)) : null;
  const progressivePasses =
    passesTotal !== null && forwardPassPct !== null ? (passesTotal * forwardPassPct) / 100 : null;

  return {
    duelsWonPct: pct(duelsWon, duelsTotal),
    possessionsWon,
    progressiveCarries,
    forwardPasses,
    forwardPassPct,
    keyPasses: passesKey ?? null,
    progressivePasses,
  };
}

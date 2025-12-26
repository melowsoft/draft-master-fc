export type Position = 'GK' | 'CB' | 'LB' | 'RB' | 'CDM' | 'CM' | 'CAM' | 'LM' | 'RM' | 'LW' | 'RW' | 'CF' | 'ST';

export type Era = 'Legends' | 'Modern' | 'Rising Stars';

export type Nationality = string;

export type League = 
  | 'Premier League' | 'La Liga' | 'Serie A' | 'Bundesliga' 
  | 'Ligue 1' | 'Saudi Pro League' | 'MLS' | 'Retired' | 'Other';

export interface PlayerStats {
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  positions: Position[];
  nationality: Nationality;
  era: Era;
  league: League;
  rating: number;
  club?: string;
  age?: number;
  stats?: PlayerStats;
  image?: string;
}

export interface FormationPosition {
  id: string;
  x: number;
  y: number;
  position: Position;
  player?: Player;
}

export interface Formation {
  id: string;
  name: string;
  positions: FormationPosition[];
}

export interface Lineup {
  id: string;
  name: string;
  formation: Formation;
  players: { [positionId: string]: Player };
  createdAt: string;
  updatedAt: string;
  votes?: number;
  isPublic?: boolean;
  badgeUri?: string;
  isChallengeEntry?: boolean;
  challengeId?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  theme: string;
  endDate: string;
  participants: number;
  isFeatured?: boolean;
}

// Add UserData interface for local storage
export interface UserData {
  id: string;
  name: string;
  avatar: number;
  avatarUrl?: string;
  favoriteFormation: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: string;
  title: string;
  body: string | null;
  data: any;
  isRead: boolean;
  createdAt: string;
}

// ================== ADD THIS DEFAULT EXPORT ==================
// This fixes the "missing default export" warning
export default {
  Position: {} as Record<Position, Position>,
  Era: {} as Record<Era, Era>,
  League: {} as Record<League, League>,
  Player: {} as Player,
  Formation: {} as Formation,
  Lineup: {} as Lineup,
  Challenge: {} as Challenge,
  UserData: {} as UserData,
  Notification: {} as Notification,
};

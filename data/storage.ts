import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lineup, Formation, Player } from './types';

const LINEUPS_KEY = '@draftmaster_lineups';
const USER_KEY = '@draftmaster_user';
const CUSTOM_FORMATIONS_KEY = '@draftmaster_custom_formations';
const CUSTOM_PLAYERS_KEY = '@draftmaster_custom_players';

export interface UserData {
  id: string;
  name: string;
  avatar: number;
  avatarUrl?: string;
  favoriteFormation: string;
  appearance?: 'light' | 'dark';
  createdAt: string;
}

export async function saveLineups(lineups: Lineup[]): Promise<void> {
  try {
    await AsyncStorage.setItem(LINEUPS_KEY, JSON.stringify(lineups));
  } catch (error) {
    console.error('Error saving lineups:', error);
    throw error;
  }
}

export async function loadLineups(): Promise<Lineup[]> {
  try {
    const data = await AsyncStorage.getItem(LINEUPS_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading lineups:', error);
    return [];
  }
}

export async function addLineup(lineup: Lineup): Promise<void> {
  const lineups = await loadLineups();
  lineups.unshift(lineup);
  await saveLineups(lineups);
}

export async function updateLineup(lineup: Lineup): Promise<void> {
  const lineups = await loadLineups();
  const index = lineups.findIndex(l => l.id === lineup.id);
  if (index !== -1) {
    lineups[index] = lineup;
    await saveLineups(lineups);
  }
}

export async function deleteLineup(id: string): Promise<void> {
  const lineups = await loadLineups();
  const filtered = lineups.filter(l => l.id !== id);
  await saveLineups(filtered);
}

export async function saveUser(user: UserData): Promise<void> {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user:', error);
    throw error;
  }
}

export async function loadUser(): Promise<UserData | null> {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Error loading user:', error);
    return null;
  }
}

export async function clearAllData(): Promise<void> {
  try {
    await AsyncStorage.multiRemove([LINEUPS_KEY, USER_KEY]);
  } catch (error) {
    console.error('Error clearing data:', error);
    throw error;
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export async function saveCustomFormations(formations: Formation[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CUSTOM_FORMATIONS_KEY, JSON.stringify(formations));
  } catch (error) {
    console.error('Error saving custom formations:', error);
    throw error;
  }
}

export async function loadCustomFormations(): Promise<Formation[]> {
  try {
    const data = await AsyncStorage.getItem(CUSTOM_FORMATIONS_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading custom formations:', error);
    return [];
  }
}

export async function addCustomFormation(formation: Formation): Promise<void> {
  const formations = await loadCustomFormations();
  formations.unshift(formation);
  await saveCustomFormations(formations);
}

export async function updateCustomFormation(formation: Formation): Promise<void> {
  const formations = await loadCustomFormations();
  const index = formations.findIndex(f => f.id === formation.id);
  if (index !== -1) {
    formations[index] = formation;
    await saveCustomFormations(formations);
  }
}

export async function deleteCustomFormation(id: string): Promise<void> {
  const formations = await loadCustomFormations();
  const filtered = formations.filter(f => f.id !== id);
  await saveCustomFormations(filtered);
}

export async function saveCustomPlayers(players: Player[]): Promise<void> {
  try {
    await AsyncStorage.setItem(CUSTOM_PLAYERS_KEY, JSON.stringify(players));
  } catch (error) {
    console.error('Error saving custom players:', error);
    throw error;
  }
}

export async function loadCustomPlayers(): Promise<Player[]> {
  try {
    const data = await AsyncStorage.getItem(CUSTOM_PLAYERS_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading custom players:', error);
    return [];
  }
}

export async function addCustomPlayer(player: Player): Promise<void> {
  const players = await loadCustomPlayers();
  players.unshift(player);
  await saveCustomPlayers(players);
}

export async function deleteCustomPlayer(id: string): Promise<void> {
  const players = await loadCustomPlayers();
  const filtered = players.filter(p => p.id !== id);
  await saveCustomPlayers(filtered);
}

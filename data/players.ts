import { Player } from './types';

export const players: Player[] = [
  // GOALKEEPERS
  { id: 'gk1', name: 'Manuel Neuer', position: 'GK', positions: ['GK'], nationality: 'Germany', era: 'Modern', league: 'Bundesliga', rating: 89 },
  { id: 'gk2', name: 'Gianluigi Buffon', position: 'GK', positions: ['GK'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 92 },
  { id: 'gk3', name: 'Thibaut Courtois', position: 'GK', positions: ['GK'], nationality: 'Belgium', era: 'Modern', league: 'La Liga', rating: 90 },
  { id: 'gk4', name: 'Alisson Becker', position: 'GK', positions: ['GK'], nationality: 'Brazil', era: 'Modern', league: 'Premier League', rating: 89 },
  { id: 'gk5', name: 'Lev Yashin', position: 'GK', positions: ['GK'], nationality: 'Germany', era: 'Legends', league: 'Retired', rating: 94 },

  // CENTER BACKS
  { id: 'cb1', name: 'Virgil van Dijk', position: 'CB', positions: ['CB'], nationality: 'Netherlands', era: 'Modern', league: 'Premier League', rating: 89 },
  { id: 'cb2', name: 'Paolo Maldini', position: 'CB', positions: ['CB', 'LB'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 95 },
  { id: 'cb3', name: 'Franz Beckenbauer', position: 'CB', positions: ['CB', 'CDM'], nationality: 'Germany', era: 'Legends', league: 'Retired', rating: 96 },
  { id: 'cb4', name: 'Sergio Ramos', position: 'CB', positions: ['CB'], nationality: 'Spain', era: 'Modern', league: 'Retired', rating: 90 },
  { id: 'cb5', name: 'Ruben Dias', position: 'CB', positions: ['CB'], nationality: 'Portugal', era: 'Modern', league: 'Premier League', rating: 87 },
  { id: 'cb6', name: 'Antonio Rudiger', position: 'CB', positions: ['CB'], nationality: 'Germany', era: 'Modern', league: 'La Liga', rating: 86 },

  // FULLBACKS
  { id: 'lb1', name: 'Roberto Carlos', position: 'LB', positions: ['LB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 93 },
  { id: 'lb2', name: 'Marcelo', position: 'LB', positions: ['LB'], nationality: 'Brazil', era: 'Modern', league: 'Retired', rating: 88 },
  { id: 'lb3', name: 'Andrew Robertson', position: 'LB', positions: ['LB'], nationality: 'England', era: 'Modern', league: 'Premier League', rating: 85 },
  { id: 'rb1', name: 'Cafu', position: 'RB', positions: ['RB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 93 },
  { id: 'rb2', name: 'Dani Alves', position: 'RB', positions: ['RB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 91 },
  { id: 'rb3', name: 'Trent Alexander-Arnold', position: 'RB', positions: ['RB', 'CM'], nationality: 'England', era: 'Modern', league: 'Premier League', rating: 87 },

  // DEFENSIVE MIDFIELDERS
  { id: 'cdm1', name: 'Claude Makelele', position: 'CDM', positions: ['CDM'], nationality: 'France', era: 'Legends', league: 'Retired', rating: 90 },
  { id: 'cdm2', name: 'N\'Golo Kante', position: 'CDM', positions: ['CDM', 'CM'], nationality: 'France', era: 'Modern', league: 'Saudi Pro League', rating: 88 },
  { id: 'cdm3', name: 'Casemiro', position: 'CDM', positions: ['CDM'], nationality: 'Brazil', era: 'Modern', league: 'Premier League', rating: 86 },
  { id: 'cdm4', name: 'Rodri', position: 'CDM', positions: ['CDM', 'CM'], nationality: 'Spain', era: 'Modern', league: 'Premier League', rating: 91 },

  // CENTRAL MIDFIELDERS
  { id: 'cm1', name: 'Zinedine Zidane', position: 'CM', positions: ['CM', 'CAM'], nationality: 'France', era: 'Legends', league: 'Retired', rating: 96 },
  { id: 'cm2', name: 'Andrea Pirlo', position: 'CM', positions: ['CM', 'CDM'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 92 },
  { id: 'cm3', name: 'Xavi Hernandez', position: 'CM', positions: ['CM'], nationality: 'Spain', era: 'Legends', league: 'Retired', rating: 94 },
  { id: 'cm4', name: 'Andres Iniesta', position: 'CM', positions: ['CM', 'CAM'], nationality: 'Spain', era: 'Legends', league: 'Retired', rating: 94 },
  { id: 'cm5', name: 'Kevin De Bruyne', position: 'CM', positions: ['CM', 'CAM'], nationality: 'Belgium', era: 'Modern', league: 'Premier League', rating: 91 },
  { id: 'cm6', name: 'Luka Modric', position: 'CM', positions: ['CM'], nationality: 'Croatia', era: 'Modern', league: 'La Liga', rating: 88 },
  { id: 'cm7', name: 'Jude Bellingham', position: 'CM', positions: ['CM', 'CAM'], nationality: 'England', era: 'Rising Stars', league: 'La Liga', rating: 90 },
  { id: 'cm8', name: 'Pedri', position: 'CM', positions: ['CM', 'CAM'], nationality: 'Spain', era: 'Rising Stars', league: 'La Liga', rating: 88 },

  // ATTACKING MIDFIELDERS
  { id: 'cam1', name: 'Diego Maradona', position: 'CAM', positions: ['CAM', 'CF'], nationality: 'Argentina', era: 'Legends', league: 'Retired', rating: 97 },
  { id: 'cam2', name: 'Ronaldinho', position: 'CAM', positions: ['CAM', 'LW'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 94 },
  { id: 'cam3', name: 'Kaka', position: 'CAM', positions: ['CAM'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 92 },
  { id: 'cam4', name: 'Bruno Fernandes', position: 'CAM', positions: ['CAM', 'CM'], nationality: 'Portugal', era: 'Modern', league: 'Premier League', rating: 87 },

  // WINGERS
  { id: 'lw1', name: 'Cristiano Ronaldo', position: 'LW', positions: ['LW', 'ST', 'RW'], nationality: 'Portugal', era: 'Modern', league: 'Saudi Pro League', rating: 88 },
  { id: 'lw2', name: 'Neymar Jr', position: 'LW', positions: ['LW', 'CAM'], nationality: 'Brazil', era: 'Modern', league: 'Saudi Pro League', rating: 87 },
  { id: 'lw3', name: 'Vinicius Jr', position: 'LW', positions: ['LW', 'RW'], nationality: 'Brazil', era: 'Rising Stars', league: 'La Liga', rating: 90 },
  { id: 'lw4', name: 'Son Heung-min', position: 'LW', positions: ['LW', 'ST'], nationality: 'England', era: 'Modern', league: 'Premier League', rating: 87 },
  { id: 'rw1', name: 'Lionel Messi', position: 'RW', positions: ['RW', 'CAM', 'CF'], nationality: 'Argentina', era: 'Modern', league: 'MLS', rating: 90 },
  { id: 'rw2', name: 'Mohamed Salah', position: 'RW', positions: ['RW', 'ST'], nationality: 'Egypt', era: 'Modern', league: 'Premier League', rating: 89 },
  { id: 'rw3', name: 'Bukayo Saka', position: 'RW', positions: ['RW', 'LW'], nationality: 'England', era: 'Rising Stars', league: 'Premier League', rating: 87 },
  { id: 'rw4', name: 'Jamal Musiala', position: 'CAM', positions: ['CAM', 'RW', 'LW'], nationality: 'Germany', era: 'Rising Stars', league: 'Bundesliga', rating: 88 },

  // STRIKERS
  { id: 'st1', name: 'Pele', position: 'ST', positions: ['ST', 'CF'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 98 },
  { id: 'st2', name: 'Ronaldo Nazario', position: 'ST', positions: ['ST', 'CF'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 96 },
  { id: 'st3', name: 'Thierry Henry', position: 'ST', positions: ['ST', 'LW'], nationality: 'France', era: 'Legends', league: 'Retired', rating: 93 },
  { id: 'st4', name: 'Marco van Basten', position: 'ST', positions: ['ST', 'CF'], nationality: 'Netherlands', era: 'Legends', league: 'Retired', rating: 95 },
  { id: 'st5', name: 'Erling Haaland', position: 'ST', positions: ['ST'], nationality: 'Norway', era: 'Rising Stars', league: 'Premier League', rating: 91 },
  { id: 'st6', name: 'Kylian Mbappe', position: 'ST', positions: ['ST', 'LW', 'RW'], nationality: 'France', era: 'Rising Stars', league: 'La Liga', rating: 91 },
  { id: 'st7', name: 'Robert Lewandowski', position: 'ST', positions: ['ST'], nationality: 'Poland', era: 'Modern', league: 'La Liga', rating: 88 },
  { id: 'st8', name: 'Harry Kane', position: 'ST', positions: ['ST'], nationality: 'England', era: 'Modern', league: 'Bundesliga', rating: 89 },
  { id: 'st9', name: 'Karim Benzema', position: 'ST', positions: ['ST', 'CF'], nationality: 'France', era: 'Modern', league: 'Saudi Pro League', rating: 88 },
  { id: 'st10', name: 'Romelu Lukaku', position: 'ST', positions: ['ST'], nationality: 'Belgium', era: 'Modern', league: 'Serie A', rating: 85 },
  { id: 'st11', name: 'Lautaro Martinez', position: 'ST', positions: ['ST', 'CF'], nationality: 'Argentina', era: 'Modern', league: 'Serie A', rating: 87 },
  { id: 'st12', name: 'Victor Osimhen', position: 'ST', positions: ['ST'], nationality: 'Nigeria', era: 'Rising Stars', league: 'Ligue 1', rating: 87 },
];

export function getPlayersByPosition(position: string): Player[] {
  if (position === 'ALL') return players;
  return players.filter(p => p.positions.includes(position as any));
}

export function getPlayersByEra(era: string): Player[] {
  if (era === 'ALL') return players;
  return players.filter(p => p.era === era);
}

export function getPlayersByNationality(nationality: string): Player[] {
  if (nationality === 'ALL') return players;
  return players.filter(p => p.nationality === nationality);
}

export function getPlayersByLeague(league: string): Player[] {
  if (league === 'ALL') return players;
  return players.filter(p => p.league === league);
}

export function searchPlayers(query: string): Player[] {
  const lowerQuery = query.toLowerCase();
  return players.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.nationality.toLowerCase().includes(lowerQuery) ||
    p.position.toLowerCase().includes(lowerQuery)
  );
}

export function filterPlayers(
  query: string,
  position: string,
  era: string,
  league: string
): Player[] {
  return players.filter(p => {
    const matchesQuery = query === '' || 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.nationality.toLowerCase().includes(query.toLowerCase());
    const matchesPosition = position === 'ALL' || p.positions.includes(position as any);
    const matchesEra = era === 'ALL' || p.era === era;
    const matchesLeague = league === 'ALL' || p.league === league;
    return matchesQuery && matchesPosition && matchesEra && matchesLeague;
  });
}

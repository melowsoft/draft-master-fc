import { Player } from './types';

// EA Sports FC 24 Player Database - 2000+ players
// Data source: FIFA 24 Player Stats Dataset + Curated Legends

// Additional legendary and famous players not in the FC24 dataset
const legendaryPlayers: Player[] = [
  { id: 'leg1', name: 'Cristiano Ronaldo', position: 'LW', positions: ['LW', 'ST', 'RW'], nationality: 'Portugal', era: 'Modern', league: 'Saudi Pro League', rating: 88, club: 'Al Nassr' },
  { id: 'leg2', name: 'Neymar Jr', position: 'LW', positions: ['LW', 'CAM'], nationality: 'Brazil', era: 'Modern', league: 'Saudi Pro League', rating: 87, club: 'Al Hilal' },
  { id: 'leg3', name: 'Pele', position: 'ST', positions: ['ST', 'CF'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 98, club: 'Santos FC' },
  { id: 'leg4', name: 'Diego Maradona', position: 'CAM', positions: ['CAM', 'CF'], nationality: 'Argentina', era: 'Legends', league: 'Retired', rating: 97, club: 'Napoli' },
  { id: 'leg5', name: 'Zinedine Zidane', position: 'CM', positions: ['CM', 'CAM'], nationality: 'France', era: 'Legends', league: 'Retired', rating: 96, club: 'Real Madrid' },
  { id: 'leg6', name: 'Ronaldo Nazario', position: 'ST', positions: ['ST', 'CF'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 96, club: 'Real Madrid' },
  { id: 'leg7', name: 'Franz Beckenbauer', position: 'CB', positions: ['CB', 'CDM'], nationality: 'Germany', era: 'Legends', league: 'Retired', rating: 96, club: 'Bayern Munich' },
  { id: 'leg8', name: 'Johan Cruyff', position: 'CF', positions: ['CF', 'CAM'], nationality: 'Netherlands', era: 'Legends', league: 'Retired', rating: 96, club: 'Barcelona' },
  { id: 'leg9', name: 'Paolo Maldini', position: 'CB', positions: ['CB', 'LB'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 95, club: 'AC Milan' },
  { id: 'leg10', name: 'Marco van Basten', position: 'ST', positions: ['ST', 'CF'], nationality: 'Netherlands', era: 'Legends', league: 'Retired', rating: 95, club: 'AC Milan' },
  { id: 'leg11', name: 'Ronaldinho', position: 'CAM', positions: ['CAM', 'LW'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 94, club: 'Barcelona' },
  { id: 'leg12', name: 'Xavi Hernandez', position: 'CM', positions: ['CM'], nationality: 'Spain', era: 'Legends', league: 'Retired', rating: 94, club: 'Barcelona' },
  { id: 'leg13', name: 'Andres Iniesta', position: 'CM', positions: ['CM', 'CAM'], nationality: 'Spain', era: 'Legends', league: 'Retired', rating: 94, club: 'Barcelona' },
  { id: 'leg14', name: 'Thierry Henry', position: 'ST', positions: ['ST', 'LW'], nationality: 'France', era: 'Legends', league: 'Retired', rating: 93, club: 'Arsenal' },
  { id: 'leg15', name: 'Roberto Carlos', position: 'LB', positions: ['LB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 93, club: 'Real Madrid' },
  { id: 'leg16', name: 'Cafu', position: 'RB', positions: ['RB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 93, club: 'AC Milan' },
  { id: 'leg17', name: 'Gianluigi Buffon', position: 'GK', positions: ['GK'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 92, club: 'Juventus' },
  { id: 'leg18', name: 'Andrea Pirlo', position: 'CM', positions: ['CM', 'CDM'], nationality: 'Italy', era: 'Legends', league: 'Retired', rating: 92, club: 'Juventus' },
  { id: 'leg19', name: 'Kaka', position: 'CAM', positions: ['CAM'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 92, club: 'AC Milan' },
  { id: 'leg20', name: 'Dani Alves', position: 'RB', positions: ['RB'], nationality: 'Brazil', era: 'Legends', league: 'Retired', rating: 91, club: 'Barcelona' },
];

const fc24PlayersRaw: Player[] = 
[
  {
    "id": "p3556",
    "name": "Lionel Messi",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 93,
    "club": "Paris SG",
    "age": 36,
    "stats": {
      "pace": 82,
      "shooting": 89,
      "passing": 90,
      "dribbling": 94,
      "defending": 25,
      "physical": 63
    }
  },
  {
    "id": "p5230",
    "name": "Kylian Mbappé",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 92,
    "club": "Paris SG",
    "age": 24,
    "stats": {
      "pace": 97,
      "shooting": 87,
      "passing": 79,
      "dribbling": 90,
      "defending": 26,
      "physical": 76
    }
  },
  {
    "id": "p917",
    "name": "Sadio Mané",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 88,
    "club": "FC Bayern München",
    "age": 31,
    "stats": {
      "pace": 89,
      "shooting": 80,
      "passing": 79,
      "dribbling": 89,
      "defending": 29,
      "physical": 80
    }
  },
  {
    "id": "p3629",
    "name": "Ángel Di María",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Serie A",
    "rating": 87,
    "club": "Juventus",
    "age": 35,
    "stats": {
      "pace": 80,
      "shooting": 80,
      "passing": 85,
      "dribbling": 87,
      "defending": 37,
      "physical": 70
    }
  },
  {
    "id": "p3771",
    "name": "Federico Chiesa",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 87,
    "club": "Juventus",
    "age": 25,
    "stats": {
      "pace": 91,
      "shooting": 83,
      "passing": 76,
      "dribbling": 85,
      "defending": 31,
      "physical": 69
    }
  },
  {
    "id": "p858",
    "name": "Romelu Lukaku",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Serie A",
    "rating": 86,
    "club": "Inter",
    "age": 30,
    "stats": {
      "pace": 79,
      "shooting": 82,
      "passing": 74,
      "dribbling": 68,
      "defending": 25,
      "physical": 77
    }
  },
  {
    "id": "p3402",
    "name": "Ronaldo Cabrais",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 86,
    "club": "Brazil",
    "age": 31,
    "stats": {
      "pace": 89,
      "shooting": 78,
      "passing": 83,
      "dribbling": 81,
      "defending": 27,
      "physical": 72
    }
  },
  {
    "id": "p3405",
    "name": "Edinson Cavani",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "La Liga",
    "rating": 86,
    "club": "Valencia CF",
    "age": 36,
    "stats": {
      "pace": 61,
      "shooting": 83,
      "passing": 66,
      "dribbling": 67,
      "defending": 35,
      "physical": 75
    }
  },
  {
    "id": "p4053",
    "name": "Leroy Sané",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 86,
    "club": "FC Bayern München",
    "age": 27,
    "stats": {
      "pace": 90,
      "shooting": 83,
      "passing": 79,
      "dribbling": 85,
      "defending": 25,
      "physical": 66
    }
  },
  {
    "id": "p4212",
    "name": "Virgil van Dijk",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Premier League",
    "rating": 86,
    "club": "Liverpool",
    "age": 32,
    "stats": {
      "pace": 79,
      "shooting": 61,
      "passing": 71,
      "dribbling": 65,
      "defending": 67,
      "physical": 85
    }
  },
  {
    "id": "p2459",
    "name": "Gianluigi Donnarumma",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 85,
    "club": "Paris SG",
    "age": 24,
    "stats": {
      "pace": 53,
      "shooting": 24,
      "passing": 36,
      "dribbling": 40,
      "defending": 14,
      "physical": 52
    }
  },
  {
    "id": "p3444",
    "name": "Raúl García",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 85,
    "club": "Athletic Club",
    "age": 37,
    "stats": {
      "pace": 36,
      "shooting": 81,
      "passing": 82,
      "dribbling": 69,
      "defending": 46,
      "physical": 85
    }
  },
  {
    "id": "p4340",
    "name": "Marco Reus",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 85,
    "club": "Borussia Dortmund",
    "age": 34,
    "stats": {
      "pace": 69,
      "shooting": 85,
      "passing": 84,
      "dribbling": 84,
      "defending": 41,
      "physical": 64
    }
  },
  {
    "id": "p5176",
    "name": "Hirving Lozano",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Mexico",
    "era": "Modern",
    "league": "Serie A",
    "rating": 85,
    "club": "Napoli FC",
    "age": 28,
    "stats": {
      "pace": 93,
      "shooting": 76,
      "passing": 72,
      "dribbling": 84,
      "defending": 27,
      "physical": 65
    }
  },
  {
    "id": "p5189",
    "name": "Rafael Leão",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Serie A",
    "rating": 85,
    "club": "Milan",
    "age": 24,
    "stats": {
      "pace": 91,
      "shooting": 77,
      "passing": 72,
      "dribbling": 84,
      "defending": 17,
      "physical": 70
    }
  },
  {
    "id": "p5674",
    "name": "Rodri",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Premier League",
    "rating": 85,
    "club": "Manchester City",
    "age": 27,
    "stats": {
      "pace": 58,
      "shooting": 74,
      "passing": 79,
      "dribbling": 73,
      "defending": 62,
      "physical": 82
    }
  },
  {
    "id": "p568",
    "name": "Domenico Berardi",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 84,
    "club": "Sassuolo",
    "age": 29,
    "stats": {
      "pace": 82,
      "shooting": 81,
      "passing": 81,
      "dribbling": 88,
      "defending": 21,
      "physical": 72
    }
  },
  {
    "id": "p670",
    "name": "Dries Mertens",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 84,
    "club": "Galatasaray",
    "age": 36,
    "stats": {
      "pace": 80,
      "shooting": 78,
      "passing": 78,
      "dribbling": 87,
      "defending": 29,
      "physical": 55
    }
  },
  {
    "id": "p711",
    "name": "Jamie Vardy",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 84,
    "club": "Leicester City",
    "age": 36,
    "stats": {
      "pace": 84,
      "shooting": 80,
      "passing": 70,
      "dribbling": 77,
      "defending": 38,
      "physical": 74
    }
  },
  {
    "id": "p1482",
    "name": "Ángel Correa",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 84,
    "club": "Atlético de Madrid",
    "age": 28,
    "stats": {
      "pace": 86,
      "shooting": 84,
      "passing": 76,
      "dribbling": 88,
      "defending": 36,
      "physical": 71
    }
  },
  {
    "id": "p1794",
    "name": "Nico Williams",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 84,
    "club": "Athletic Club",
    "age": 21,
    "stats": {
      "pace": 92,
      "shooting": 70,
      "passing": 67,
      "dribbling": 83,
      "defending": 20,
      "physical": 58
    }
  },
  {
    "id": "p2130",
    "name": "Phil Foden",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 84,
    "club": "Manchester City",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 75,
      "passing": 82,
      "dribbling": 90,
      "defending": 41,
      "physical": 61
    }
  },
  {
    "id": "p2628",
    "name": "Julian Brandt",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 84,
    "club": "Borussia Dortmund",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 80,
      "passing": 83,
      "dribbling": 85,
      "defending": 38,
      "physical": 63
    }
  },
  {
    "id": "p2694",
    "name": "Wilfried Zaha",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Premier League",
    "rating": 84,
    "club": "Crystal Palace",
    "age": 30,
    "stats": {
      "pace": 90,
      "shooting": 76,
      "passing": 72,
      "dribbling": 84,
      "defending": 28,
      "physical": 73
    }
  },
  {
    "id": "p3017",
    "name": "Luis Muriel",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 84,
    "club": "Bergamo Calcio",
    "age": 32,
    "stats": {
      "pace": 88,
      "shooting": 82,
      "passing": 71,
      "dribbling": 85,
      "defending": 16,
      "physical": 64
    }
  },
  {
    "id": "p3120",
    "name": "Keylor Navas",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Costa Rica",
    "era": "Legends",
    "league": "Other",
    "rating": 84,
    "club": "Nott'm Forest",
    "age": 36,
    "stats": {
      "pace": 54,
      "shooting": 24,
      "passing": 38,
      "dribbling": 44,
      "defending": 13,
      "physical": 54
    }
  },
  {
    "id": "p3650",
    "name": "João Félix",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 84,
    "club": "Chelsea",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 81,
      "passing": 80,
      "dribbling": 87,
      "defending": 29,
      "physical": 70
    }
  },
  {
    "id": "p4339",
    "name": "Martin Ødegaard",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Premier League",
    "rating": 84,
    "club": "Arsenal",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 78,
      "passing": 87,
      "dribbling": 85,
      "defending": 41,
      "physical": 62
    }
  },
  {
    "id": "p4628",
    "name": "Leon Bailey",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Jamaica",
    "era": "Modern",
    "league": "Premier League",
    "rating": 84,
    "club": "Aston Villa",
    "age": 26,
    "stats": {
      "pace": 93,
      "shooting": 77,
      "passing": 72,
      "dribbling": 84,
      "defending": 16,
      "physical": 64
    }
  },
  {
    "id": "p4710",
    "name": "Luis Sinisterra",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 84,
    "club": "Leeds United",
    "age": 24,
    "stats": {
      "pace": 90,
      "shooting": 74,
      "passing": 73,
      "dribbling": 88,
      "defending": 36,
      "physical": 70
    }
  },
  {
    "id": "p5645",
    "name": "Gabriel Martinelli",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 84,
    "club": "Arsenal",
    "age": 22,
    "stats": {
      "pace": 88,
      "shooting": 73,
      "passing": 69,
      "dribbling": 84,
      "defending": 31,
      "physical": 69
    }
  },
  {
    "id": "p69",
    "name": "Wissam Ben Yedder",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 83,
    "club": "AS Monaco",
    "age": 33,
    "stats": {
      "pace": 82,
      "shooting": 83,
      "passing": 76,
      "dribbling": 89,
      "defending": 26,
      "physical": 70
    }
  },
  {
    "id": "p381",
    "name": "Tammy Abraham",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Serie A",
    "rating": 83,
    "club": "Roma",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 79,
      "passing": 65,
      "dribbling": 69,
      "defending": 19,
      "physical": 76
    }
  },
  {
    "id": "p914",
    "name": "Ibrahim Sangaré",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Other",
    "rating": 83,
    "club": "PSV",
    "age": 25,
    "stats": {
      "pace": 67,
      "shooting": 67,
      "passing": 74,
      "dribbling": 72,
      "defending": 61,
      "physical": 82
    }
  },
  {
    "id": "p1535",
    "name": "Thomas Partey",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Premier League",
    "rating": 83,
    "club": "Arsenal",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 72,
      "passing": 82,
      "dribbling": 71,
      "defending": 61,
      "physical": 83
    }
  },
  {
    "id": "p2764",
    "name": "Koen Casteels",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 83,
    "club": "VfL Wolfsburg",
    "age": 31,
    "stats": {
      "pace": 45,
      "shooting": 26,
      "passing": 32,
      "dribbling": 33,
      "defending": 13,
      "physical": 52
    }
  },
  {
    "id": "p3021",
    "name": "Kevin Volland",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 83,
    "club": "AS Monaco",
    "age": 31,
    "stats": {
      "pace": 70,
      "shooting": 85,
      "passing": 78,
      "dribbling": 78,
      "defending": 33,
      "physical": 82
    }
  },
  {
    "id": "p3241",
    "name": "Nicolas Pépé",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 83,
    "club": "OGC Nice",
    "age": 28,
    "stats": {
      "pace": 88,
      "shooting": 76,
      "passing": 73,
      "dribbling": 82,
      "defending": 24,
      "physical": 61
    }
  },
  {
    "id": "p3452",
    "name": "Yassine Bounou",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "La Liga",
    "rating": 83,
    "club": "Sevilla FC",
    "age": 32,
    "stats": {
      "pace": 38,
      "shooting": 26,
      "passing": 40,
      "dribbling": 27,
      "defending": 11,
      "physical": 46
    }
  },
  {
    "id": "p3547",
    "name": "Sheraldo Becker",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Suriname",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 83,
    "club": "Union Berlin",
    "age": 28,
    "stats": {
      "pace": 94,
      "shooting": 76,
      "passing": 69,
      "dribbling": 78,
      "defending": 28,
      "physical": 67
    }
  },
  {
    "id": "p3606",
    "name": "Mason Mount",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 83,
    "club": "Chelsea",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 80,
      "passing": 84,
      "dribbling": 80,
      "defending": 40,
      "physical": 67
    }
  },
  {
    "id": "p3845",
    "name": "Emre Can",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 83,
    "club": "Borussia Dortmund",
    "age": 29,
    "stats": {
      "pace": 78,
      "shooting": 77,
      "passing": 76,
      "dribbling": 77,
      "defending": 62,
      "physical": 88
    }
  },
  {
    "id": "p4248",
    "name": "Rodrygo",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 83,
    "club": "Real Madrid",
    "age": 22,
    "stats": {
      "pace": 88,
      "shooting": 74,
      "passing": 72,
      "dribbling": 85,
      "defending": 22,
      "physical": 65
    }
  },
  {
    "id": "p4497",
    "name": "Galeno",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 83,
    "club": "FC Porto",
    "age": 25,
    "stats": {
      "pace": 92,
      "shooting": 73,
      "passing": 65,
      "dribbling": 80,
      "defending": 28,
      "physical": 68
    }
  },
  {
    "id": "p4499",
    "name": "Iago Aspas",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 83,
    "club": "RC Celta",
    "age": 36,
    "stats": {
      "pace": 82,
      "shooting": 83,
      "passing": 78,
      "dribbling": 83,
      "defending": 20,
      "physical": 65
    }
  },
  {
    "id": "p5448",
    "name": "Marcus Rashford",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 83,
    "club": "Manchester Utd",
    "age": 25,
    "stats": {
      "pace": 88,
      "shooting": 82,
      "passing": 75,
      "dribbling": 81,
      "defending": 28,
      "physical": 73
    }
  },
  {
    "id": "p40",
    "name": "Kalidou Koulibaly",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Premier League",
    "rating": 82,
    "club": "Chelsea",
    "age": 32,
    "stats": {
      "pace": 78,
      "shooting": 49,
      "passing": 64,
      "dribbling": 56,
      "defending": 65,
      "physical": 82
    }
  },
  {
    "id": "p330",
    "name": "Gerard Moreno",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 82,
    "club": "Villarreal CF",
    "age": 31,
    "stats": {
      "pace": 78,
      "shooting": 84,
      "passing": 77,
      "dribbling": 80,
      "defending": 31,
      "physical": 73
    }
  },
  {
    "id": "p562",
    "name": "Henrikh Mkhitaryan",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Armenia",
    "era": "Legends",
    "league": "Serie A",
    "rating": 82,
    "club": "Inter",
    "age": 34,
    "stats": {
      "pace": 83,
      "shooting": 80,
      "passing": 78,
      "dribbling": 84,
      "defending": 42,
      "physical": 72
    }
  },
  {
    "id": "p613",
    "name": "Wout Weghorst",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Premier League",
    "rating": 82,
    "club": "Manchester Utd",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 78,
      "passing": 59,
      "dribbling": 62,
      "defending": 34,
      "physical": 84
    }
  },
  {
    "id": "p842",
    "name": "Emil Forsberg",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 82,
    "club": "RB Leipzig",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 71,
      "passing": 82,
      "dribbling": 82,
      "defending": 23,
      "physical": 61
    }
  },
  {
    "id": "p1203",
    "name": "Ferran Torres",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 82,
    "club": "FC Barcelona",
    "age": 23,
    "stats": {
      "pace": 84,
      "shooting": 77,
      "passing": 80,
      "dribbling": 82,
      "defending": 22,
      "physical": 68
    }
  },
  {
    "id": "p1563",
    "name": "Morata",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 82,
    "club": "Atlético de Madrid",
    "age": 30,
    "stats": {
      "pace": 83,
      "shooting": 79,
      "passing": 72,
      "dribbling": 74,
      "defending": 15,
      "physical": 79
    }
  },
  {
    "id": "p1581",
    "name": "Eden Hazard",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "La Liga",
    "rating": 82,
    "club": "Real Madrid",
    "age": 32,
    "stats": {
      "pace": 81,
      "shooting": 79,
      "passing": 81,
      "dribbling": 87,
      "defending": 23,
      "physical": 61
    }
  },
  {
    "id": "p2075",
    "name": "Luuk de Jong",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 82,
    "club": "PSV",
    "age": 33,
    "stats": {
      "pace": 45,
      "shooting": 79,
      "passing": 69,
      "dribbling": 64,
      "defending": 30,
      "physical": 76
    }
  },
  {
    "id": "p3417",
    "name": "Lautaro Martínez",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 82,
    "club": "Inter",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 84,
      "passing": 72,
      "dribbling": 86,
      "defending": 30,
      "physical": 86
    }
  },
  {
    "id": "p3516",
    "name": "Maximiliano Gómez",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 82,
    "club": "Trabzonspor",
    "age": 27,
    "stats": {
      "pace": 63,
      "shooting": 78,
      "passing": 67,
      "dribbling": 68,
      "defending": 16,
      "physical": 81
    }
  },
  {
    "id": "p3554",
    "name": "Mehdi Taremi",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Iran",
    "era": "Modern",
    "league": "Other",
    "rating": 82,
    "club": "FC Porto",
    "age": 31,
    "stats": {
      "pace": 78,
      "shooting": 78,
      "passing": 76,
      "dribbling": 76,
      "defending": 22,
      "physical": 71
    }
  },
  {
    "id": "p4128",
    "name": "Daichi Kamada",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 82,
    "club": "Frankfurt",
    "age": 27,
    "stats": {
      "pace": 79,
      "shooting": 70,
      "passing": 82,
      "dribbling": 85,
      "defending": 33,
      "physical": 63
    }
  },
  {
    "id": "p5185",
    "name": "Cody Gakpo",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Premier League",
    "rating": 82,
    "club": "Liverpool",
    "age": 24,
    "stats": {
      "pace": 86,
      "shooting": 82,
      "passing": 77,
      "dribbling": 80,
      "defending": 26,
      "physical": 72
    }
  },
  {
    "id": "p5633",
    "name": "Oyarzabal",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 82,
    "club": "Real Sociedad",
    "age": 26,
    "stats": {
      "pace": 78,
      "shooting": 80,
      "passing": 80,
      "dribbling": 82,
      "defending": 23,
      "physical": 65
    }
  },
  {
    "id": "p108",
    "name": "Gerónimo Rulli",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "Ajax",
    "age": 31,
    "stats": {
      "pace": 54,
      "shooting": 27,
      "passing": 35,
      "dribbling": 34,
      "defending": 13,
      "physical": 52
    }
  },
  {
    "id": "p375",
    "name": "Antony",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 81,
    "club": "Manchester Utd",
    "age": 23,
    "stats": {
      "pace": 84,
      "shooting": 74,
      "passing": 73,
      "dribbling": 88,
      "defending": 32,
      "physical": 69
    }
  },
  {
    "id": "p474",
    "name": "Bruma",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "SC Braga",
    "age": 28,
    "stats": {
      "pace": 90,
      "shooting": 70,
      "passing": 67,
      "dribbling": 84,
      "defending": 23,
      "physical": 63
    }
  },
  {
    "id": "p832",
    "name": "Luis Miguel Rodríguez",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 81,
    "club": "Central Córdoba",
    "age": 38,
    "stats": {
      "pace": 68,
      "shooting": 80,
      "passing": 76,
      "dribbling": 83,
      "defending": 33,
      "physical": 71
    }
  },
  {
    "id": "p1604",
    "name": "Jason Bardeira",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 81,
    "club": "Brazil",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 81,
      "passing": 64,
      "dribbling": 69,
      "defending": 13,
      "physical": 76
    }
  },
  {
    "id": "p1857",
    "name": "Raphaël Varane",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Premier League",
    "rating": 81,
    "club": "Manchester Utd",
    "age": 30,
    "stats": {
      "pace": 80,
      "shooting": 48,
      "passing": 64,
      "dribbling": 59,
      "defending": 63,
      "physical": 78
    }
  },
  {
    "id": "p2255",
    "name": "Ali Musrati",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Libya",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "SC Braga",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 62,
      "passing": 72,
      "dribbling": 62,
      "defending": 60,
      "physical": 78
    }
  },
  {
    "id": "p2261",
    "name": "Matteo Politano",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 81,
    "club": "Napoli FC",
    "age": 30,
    "stats": {
      "pace": 83,
      "shooting": 78,
      "passing": 78,
      "dribbling": 86,
      "defending": 24,
      "physical": 58
    }
  },
  {
    "id": "p2329",
    "name": "Callum Wilson",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 81,
    "club": "Newcastle Utd",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 75,
      "passing": 66,
      "dribbling": 75,
      "defending": 27,
      "physical": 73
    }
  },
  {
    "id": "p2385",
    "name": "Lucas Mantela",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 81,
    "club": "Brazil",
    "age": 23,
    "stats": {
      "pace": 35,
      "shooting": 29,
      "passing": 33,
      "dribbling": 33,
      "defending": 13,
      "physical": 55
    }
  },
  {
    "id": "p2484",
    "name": "Niclas Füllkrug",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 81,
    "club": "SV Werder Bremen",
    "age": 30,
    "stats": {
      "pace": 61,
      "shooting": 79,
      "passing": 65,
      "dribbling": 68,
      "defending": 19,
      "physical": 76
    }
  },
  {
    "id": "p2656",
    "name": "Renato Tapia",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "La Liga",
    "rating": 81,
    "club": "RC Celta",
    "age": 28,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 72,
      "dribbling": 70,
      "defending": 60,
      "physical": 82
    }
  },
  {
    "id": "p2883",
    "name": "Jorginho",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Premier League",
    "rating": 81,
    "club": "Arsenal",
    "age": 31,
    "stats": {
      "pace": 55,
      "shooting": 67,
      "passing": 85,
      "dribbling": 78,
      "defending": 58,
      "physical": 72
    }
  },
  {
    "id": "p3243",
    "name": "Andy Delort",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 81,
    "club": "FC Nantes",
    "age": 31,
    "stats": {
      "pace": 82,
      "shooting": 82,
      "passing": 71,
      "dribbling": 73,
      "defending": 22,
      "physical": 80
    }
  },
  {
    "id": "p3613",
    "name": "Raúl de Tomás",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 81,
    "club": "Rayo Vallecano",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 83,
      "passing": 75,
      "dribbling": 81,
      "defending": 26,
      "physical": 78
    }
  },
  {
    "id": "p3997",
    "name": "Pozuelo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Serie A",
    "rating": 81,
    "club": "Inter Miami CF",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 72,
      "passing": 80,
      "dribbling": 81,
      "defending": 37,
      "physical": 66
    }
  },
  {
    "id": "p4293",
    "name": "Moussa Dembélé",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "OL",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 76,
      "passing": 61,
      "dribbling": 69,
      "defending": 13,
      "physical": 79
    }
  },
  {
    "id": "p4627",
    "name": "Alejandro Remiro Gargallo",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 81,
    "club": "Real Sociedad",
    "age": 28,
    "stats": {
      "pace": 43,
      "shooting": 25,
      "passing": 28,
      "dribbling": 39,
      "defending": 14,
      "physical": 54
    }
  },
  {
    "id": "p4668",
    "name": "Niclas Eliasson",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "AEK Athens",
    "age": 27,
    "stats": {
      "pace": 89,
      "shooting": 61,
      "passing": 68,
      "dribbling": 79,
      "defending": 30,
      "physical": 57
    }
  },
  {
    "id": "p4699",
    "name": "Marten de Roon",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "Bergamo Calcio",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 69,
      "passing": 71,
      "dribbling": 70,
      "defending": 62,
      "physical": 83
    }
  },
  {
    "id": "p4988",
    "name": "Benjamin White",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 81,
    "club": "Arsenal",
    "age": 25,
    "stats": {
      "pace": 72,
      "shooting": 30,
      "passing": 72,
      "dribbling": 68,
      "defending": 62,
      "physical": 78
    }
  },
  {
    "id": "p5288",
    "name": "Carlos Vela",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Mexico",
    "era": "Legends",
    "league": "Other",
    "rating": 81,
    "club": "LAFC",
    "age": 34,
    "stats": {
      "pace": 78,
      "shooting": 80,
      "passing": 75,
      "dribbling": 82,
      "defending": 16,
      "physical": 63
    }
  },
  {
    "id": "p5350",
    "name": "Josué Chiamulera",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 81,
    "club": "Brazil",
    "age": 31,
    "stats": {
      "pace": 78,
      "shooting": 44,
      "passing": 54,
      "dribbling": 65,
      "defending": 63,
      "physical": 79
    }
  },
  {
    "id": "p5577",
    "name": "Aleksandar Mitrović",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Premier League",
    "rating": 81,
    "club": "Fulham",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 78,
      "passing": 56,
      "dribbling": 69,
      "defending": 13,
      "physical": 87
    }
  },
  {
    "id": "p58",
    "name": "Dominic Calvert-Lewin",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Everton",
    "age": 26,
    "stats": {
      "pace": 79,
      "shooting": 74,
      "passing": 62,
      "dribbling": 71,
      "defending": 22,
      "physical": 81
    }
  },
  {
    "id": "p105",
    "name": "Youssouf Fofana",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 80,
    "club": "AS Monaco",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 64,
      "passing": 75,
      "dribbling": 75,
      "defending": 59,
      "physical": 74
    }
  },
  {
    "id": "p144",
    "name": "Kamaldeen Sulemana",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Ghana",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 80,
    "club": "Southampton",
    "age": 21,
    "stats": {
      "pace": 93,
      "shooting": 67,
      "passing": 65,
      "dribbling": 84,
      "defending": 19,
      "physical": 63
    }
  },
  {
    "id": "p308",
    "name": "Justin Kluivert",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Valencia CF",
    "age": 24,
    "stats": {
      "pace": 88,
      "shooting": 73,
      "passing": 68,
      "dribbling": 81,
      "defending": 21,
      "physical": 62
    }
  },
  {
    "id": "p349",
    "name": "Stefan Ortega",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Manchester City",
    "age": 30,
    "stats": {
      "pace": 52,
      "shooting": 26,
      "passing": 45,
      "dribbling": 39,
      "defending": 14,
      "physical": 53
    }
  },
  {
    "id": "p975",
    "name": "Demarai Gray",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Everton",
    "age": 27,
    "stats": {
      "pace": 87,
      "shooting": 72,
      "passing": 69,
      "dribbling": 81,
      "defending": 25,
      "physical": 55
    }
  },
  {
    "id": "p1033",
    "name": "Julián Álvarez",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 80,
    "club": "Manchester City",
    "age": 23,
    "stats": {
      "pace": 79,
      "shooting": 80,
      "passing": 76,
      "dribbling": 85,
      "defending": 36,
      "physical": 76
    }
  },
  {
    "id": "p1167",
    "name": "Jonas Hofmann",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "M'gladbach",
    "age": 31,
    "stats": {
      "pace": 74,
      "shooting": 74,
      "passing": 81,
      "dribbling": 79,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p1270",
    "name": "Marcão",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Sevilla FC",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 37,
      "passing": 60,
      "dribbling": 67,
      "defending": 58,
      "physical": 87
    }
  },
  {
    "id": "p1412",
    "name": "Laure Santeiro",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 80,
    "club": "Brazil",
    "age": 23,
    "stats": {
      "pace": 81,
      "shooting": 70,
      "passing": 78,
      "dribbling": 85,
      "defending": 17,
      "physical": 47
    }
  },
  {
    "id": "p1468",
    "name": "Remo Freuler",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "Nott'm Forest",
    "age": 31,
    "stats": {
      "pace": 66,
      "shooting": 71,
      "passing": 76,
      "dribbling": 73,
      "defending": 58,
      "physical": 71
    }
  },
  {
    "id": "p1519",
    "name": "Gabriel Paulista",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Valencia CF",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 50,
      "passing": 72,
      "dribbling": 65,
      "defending": 61,
      "physical": 80
    }
  },
  {
    "id": "p1532",
    "name": "Nico Schlotterbeck",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 80,
    "club": "Borussia Dortmund",
    "age": 23,
    "stats": {
      "pace": 77,
      "shooting": 59,
      "passing": 67,
      "dribbling": 69,
      "defending": 62,
      "physical": 79
    }
  },
  {
    "id": "p1774",
    "name": "Francis Coquelin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Villarreal CF",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 68,
      "passing": 79,
      "dribbling": 78,
      "defending": 59,
      "physical": 80
    }
  },
  {
    "id": "p1843",
    "name": "Joel Matip",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Liverpool",
    "age": 32,
    "stats": {
      "pace": 61,
      "shooting": 50,
      "passing": 70,
      "dribbling": 61,
      "defending": 63,
      "physical": 77
    }
  },
  {
    "id": "p1992",
    "name": "Maximilian Arnold",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 80,
    "club": "VfL Wolfsburg",
    "age": 29,
    "stats": {
      "pace": 65,
      "shooting": 84,
      "passing": 78,
      "dribbling": 74,
      "defending": 59,
      "physical": 73
    }
  },
  {
    "id": "p2166",
    "name": "Anthony Lopes",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "OL",
    "age": 32,
    "stats": {
      "pace": 64,
      "shooting": 26,
      "passing": 33,
      "dribbling": 41,
      "defending": 13,
      "physical": 59
    }
  },
  {
    "id": "p2598",
    "name": "Ibañez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 80,
    "club": "Roma",
    "age": 24,
    "stats": {
      "pace": 84,
      "shooting": 32,
      "passing": 43,
      "dribbling": 63,
      "defending": 64,
      "physical": 78
    }
  },
  {
    "id": "p2642",
    "name": "Federico Bernardeschi",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "Toronto FC",
    "age": 29,
    "stats": {
      "pace": 77,
      "shooting": 75,
      "passing": 78,
      "dribbling": 82,
      "defending": 46,
      "physical": 62
    }
  },
  {
    "id": "p2720",
    "name": "Benjamin Pavard",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 80,
    "club": "FC Bayern München",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 63,
      "passing": 73,
      "dribbling": 69,
      "defending": 62,
      "physical": 79
    }
  },
  {
    "id": "p2854",
    "name": "Andreas Christensen",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "FC Barcelona",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 30,
      "passing": 67,
      "dribbling": 66,
      "defending": 63,
      "physical": 75
    }
  },
  {
    "id": "p3211",
    "name": "Zubeldia",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Real Sociedad",
    "age": 26,
    "stats": {
      "pace": 64,
      "shooting": 61,
      "passing": 74,
      "dribbling": 71,
      "defending": 59,
      "physical": 81
    }
  },
  {
    "id": "p3453",
    "name": "José Fonte",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 80,
    "club": "LOSC Lille",
    "age": 39,
    "stats": {
      "pace": 31,
      "shooting": 45,
      "passing": 63,
      "dribbling": 54,
      "defending": 60,
      "physical": 78
    }
  },
  {
    "id": "p3661",
    "name": "Diegildo Ramos",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "Flamengo",
    "age": 31,
    "stats": {
      "pace": 30,
      "shooting": 81,
      "passing": 66,
      "dribbling": 55,
      "defending": 15,
      "physical": 60
    }
  },
  {
    "id": "p3682",
    "name": "Willian José",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Real Betis",
    "age": 31,
    "stats": {
      "pace": 62,
      "shooting": 78,
      "passing": 63,
      "dribbling": 64,
      "defending": 24,
      "physical": 77
    }
  },
  {
    "id": "p3873",
    "name": "Anthony Martial",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Manchester Utd",
    "age": 27,
    "stats": {
      "pace": 81,
      "shooting": 78,
      "passing": 72,
      "dribbling": 82,
      "defending": 25,
      "physical": 65
    }
  },
  {
    "id": "p4148",
    "name": "Rafael Tolói",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "Bergamo Calcio",
    "age": 32,
    "stats": {
      "pace": 67,
      "shooting": 52,
      "passing": 58,
      "dribbling": 64,
      "defending": 62,
      "physical": 81
    }
  },
  {
    "id": "p4259",
    "name": "Ellyes Skhiri",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Tunisia",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 80,
    "club": "1. FC Köln",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 70,
      "passing": 72,
      "dribbling": 73,
      "defending": 59,
      "physical": 78
    }
  },
  {
    "id": "p4967",
    "name": "Nemanja Maksimović",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Getafe CF",
    "age": 28,
    "stats": {
      "pace": 52,
      "shooting": 68,
      "passing": 75,
      "dribbling": 67,
      "defending": 58,
      "physical": 77
    }
  },
  {
    "id": "p5017",
    "name": "Abdoulaye Doucouré",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Mali",
    "era": "Modern",
    "league": "Premier League",
    "rating": 80,
    "club": "Everton",
    "age": 30,
    "stats": {
      "pace": 67,
      "shooting": 76,
      "passing": 72,
      "dribbling": 72,
      "defending": 58,
      "physical": 79
    }
  },
  {
    "id": "p5020",
    "name": "Martin Terrier",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "Stade Rennais FC",
    "age": 26,
    "stats": {
      "pace": 85,
      "shooting": 81,
      "passing": 75,
      "dribbling": 76,
      "defending": 23,
      "physical": 72
    }
  },
  {
    "id": "p5187",
    "name": "Erik Lamela",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 80,
    "club": "Sevilla FC",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 77,
      "passing": 77,
      "dribbling": 81,
      "defending": 39,
      "physical": 69
    }
  },
  {
    "id": "p5256",
    "name": "Luimo Boas Santos",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 80,
    "club": "Brazil",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 79,
      "passing": 62,
      "dribbling": 80,
      "defending": 15,
      "physical": 68
    }
  },
  {
    "id": "p5425",
    "name": "Kasper Schmeichel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Denmark",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 80,
    "club": "OGC Nice",
    "age": 36,
    "stats": {
      "pace": 46,
      "shooting": 25,
      "passing": 42,
      "dribbling": 40,
      "defending": 12,
      "physical": 47
    }
  },
  {
    "id": "p5638",
    "name": "Chris Smalling",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Serie A",
    "rating": 80,
    "club": "Roma",
    "age": 33,
    "stats": {
      "pace": 62,
      "shooting": 45,
      "passing": 59,
      "dribbling": 55,
      "defending": 64,
      "physical": 81
    }
  },
  {
    "id": "p5642",
    "name": "Francis Amuzu",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 80,
    "club": "RSC Anderlecht",
    "age": 24,
    "stats": {
      "pace": 91,
      "shooting": 63,
      "passing": 65,
      "dribbling": 80,
      "defending": 29,
      "physical": 67
    }
  },
  {
    "id": "p176",
    "name": "Nikola Vlašić",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Torino",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 77,
      "passing": 75,
      "dribbling": 82,
      "defending": 29,
      "physical": 66
    }
  },
  {
    "id": "p370",
    "name": "Raúl Jiménez",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Mexico",
    "era": "Modern",
    "league": "Premier League",
    "rating": 79,
    "club": "Wolves",
    "age": 32,
    "stats": {
      "pace": 68,
      "shooting": 78,
      "passing": 76,
      "dribbling": 73,
      "defending": 30,
      "physical": 78
    }
  },
  {
    "id": "p399",
    "name": "José Sá",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Premier League",
    "rating": 79,
    "club": "Wolves",
    "age": 30,
    "stats": {
      "pace": 53,
      "shooting": 26,
      "passing": 40,
      "dribbling": 35,
      "defending": 13,
      "physical": 54
    }
  },
  {
    "id": "p483",
    "name": "Luka Jović",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Fiorentina",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 80,
      "passing": 68,
      "dribbling": 76,
      "defending": 16,
      "physical": 71
    }
  },
  {
    "id": "p636",
    "name": "Paul Pogba",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Juventus",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 83,
      "passing": 86,
      "dribbling": 78,
      "defending": 48,
      "physical": 78
    }
  },
  {
    "id": "p732",
    "name": "Harry Maguire",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 79,
    "club": "Manchester Utd",
    "age": 30,
    "stats": {
      "pace": 48,
      "shooting": 58,
      "passing": 69,
      "dribbling": 54,
      "defending": 58,
      "physical": 82
    }
  },
  {
    "id": "p845",
    "name": "António Silva",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 79,
    "club": "SL Benfica",
    "age": 19,
    "stats": {
      "pace": 79,
      "shooting": 31,
      "passing": 65,
      "dribbling": 61,
      "defending": 58,
      "physical": 74
    }
  },
  {
    "id": "p991",
    "name": "Saša Kalajdžić",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Premier League",
    "rating": 79,
    "club": "Wolves",
    "age": 26,
    "stats": {
      "pace": 60,
      "shooting": 73,
      "passing": 69,
      "dribbling": 67,
      "defending": 32,
      "physical": 62
    }
  },
  {
    "id": "p1594",
    "name": "Anton Stach",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 79,
    "club": "1. FSV Mainz 05",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 69,
      "passing": 74,
      "dribbling": 63,
      "defending": 57,
      "physical": 75
    }
  },
  {
    "id": "p1625",
    "name": "Georginio Wijnaldum",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Roma",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 70,
      "passing": 77,
      "dribbling": 83,
      "defending": 57,
      "physical": 78
    }
  },
  {
    "id": "p2015",
    "name": "Mauricio Cuero",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Independiente",
    "age": 30,
    "stats": {
      "pace": 90,
      "shooting": 69,
      "passing": 64,
      "dribbling": 71,
      "defending": 17,
      "physical": 60
    }
  },
  {
    "id": "p2019",
    "name": "Odisseas Vlachodimos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "SL Benfica",
    "age": 29,
    "stats": {
      "pace": 43,
      "shooting": 23,
      "passing": 28,
      "dribbling": 35,
      "defending": 12,
      "physical": 53
    }
  },
  {
    "id": "p2050",
    "name": "Simon Terodde",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 79,
    "club": "FC Schalke 04",
    "age": 35,
    "stats": {
      "pace": 57,
      "shooting": 77,
      "passing": 54,
      "dribbling": 62,
      "defending": 21,
      "physical": 76
    }
  },
  {
    "id": "p2129",
    "name": "Anthony Gordon",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 79,
    "club": "Newcastle Utd",
    "age": 22,
    "stats": {
      "pace": 89,
      "shooting": 65,
      "passing": 71,
      "dribbling": 74,
      "defending": 26,
      "physical": 63
    }
  },
  {
    "id": "p2183",
    "name": "Alexey Miranchuk",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Russia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Torino",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 70,
      "passing": 76,
      "dribbling": 80,
      "defending": 23,
      "physical": 58
    }
  },
  {
    "id": "p2218",
    "name": "Dani de Wit",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "AZ",
    "age": 25,
    "stats": {
      "pace": 64,
      "shooting": 74,
      "passing": 73,
      "dribbling": 67,
      "defending": 53,
      "physical": 88
    }
  },
  {
    "id": "p2231",
    "name": "Burak Yılmaz",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Turkey",
    "era": "Legends",
    "league": "Other",
    "rating": 79,
    "club": "Fortuna Sittard",
    "age": 38,
    "stats": {
      "pace": 73,
      "shooting": 80,
      "passing": 65,
      "dribbling": 62,
      "defending": 22,
      "physical": 71
    }
  },
  {
    "id": "p2308",
    "name": "Grischa Prömel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 79,
    "club": "TSG Hoffenheim",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 71,
      "passing": 70,
      "dribbling": 71,
      "defending": 56,
      "physical": 81
    }
  },
  {
    "id": "p2454",
    "name": "Gabriel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Premier League",
    "rating": 79,
    "club": "Arsenal",
    "age": 25,
    "stats": {
      "pace": 67,
      "shooting": 35,
      "passing": 62,
      "dribbling": 52,
      "defending": 61,
      "physical": 77
    }
  },
  {
    "id": "p2533",
    "name": "Samuel Adegbenro",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Beijing Guoan",
    "age": 27,
    "stats": {
      "pace": 91,
      "shooting": 67,
      "passing": 61,
      "dribbling": 82,
      "defending": 23,
      "physical": 77
    }
  },
  {
    "id": "p2622",
    "name": "Daley Blind",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 79,
    "club": "FC Bayern München",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 65,
      "passing": 83,
      "dribbling": 76,
      "defending": 61,
      "physical": 71
    }
  },
  {
    "id": "p2635",
    "name": "Dominik Livaković",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Dinamo Zagreb",
    "age": 28,
    "stats": {
      "pace": 56,
      "shooting": 21,
      "passing": 46,
      "dribbling": 36,
      "defending": 16,
      "physical": 49
    }
  },
  {
    "id": "p2669",
    "name": "Oriol Romeu",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 79,
    "club": "Girona FC",
    "age": 31,
    "stats": {
      "pace": 48,
      "shooting": 56,
      "passing": 68,
      "dribbling": 62,
      "defending": 59,
      "physical": 78
    }
  },
  {
    "id": "p2815",
    "name": "Anthony Nwakaeme",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Nigeria",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 79,
    "club": "Al Fayha",
    "age": 34,
    "stats": {
      "pace": 75,
      "shooting": 76,
      "passing": 76,
      "dribbling": 77,
      "defending": 28,
      "physical": 74
    }
  },
  {
    "id": "p2850",
    "name": "Emanuel Reynoso",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Minnesota United",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 64,
      "passing": 78,
      "dribbling": 80,
      "defending": 43,
      "physical": 67
    }
  },
  {
    "id": "p2851",
    "name": "Gonçalo Ramos",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 79,
    "club": "SL Benfica",
    "age": 22,
    "stats": {
      "pace": 78,
      "shooting": 76,
      "passing": 65,
      "dribbling": 76,
      "defending": 24,
      "physical": 83
    }
  },
  {
    "id": "p3121",
    "name": "Marco Verratti",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 79,
    "club": "Paris SG",
    "age": 30,
    "stats": {
      "pace": 60,
      "shooting": 61,
      "passing": 88,
      "dribbling": 92,
      "defending": 63,
      "physical": 71
    }
  },
  {
    "id": "p3153",
    "name": "Ahmed Hegazi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Egypt",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 79,
    "club": "Al Ittihad",
    "age": 32,
    "stats": {
      "pace": 46,
      "shooting": 21,
      "passing": 50,
      "dribbling": 49,
      "defending": 58,
      "physical": 82
    }
  },
  {
    "id": "p3424",
    "name": "Mauro Arambarri",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "La Liga",
    "rating": 79,
    "club": "Getafe CF",
    "age": 27,
    "stats": {
      "pace": 61,
      "shooting": 65,
      "passing": 74,
      "dribbling": 71,
      "defending": 60,
      "physical": 73
    }
  },
  {
    "id": "p3504",
    "name": "Hany Mukhtar",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Nashville SC",
    "age": 28,
    "stats": {
      "pace": 82,
      "shooting": 71,
      "passing": 77,
      "dribbling": 83,
      "defending": 33,
      "physical": 66
    }
  },
  {
    "id": "p3587",
    "name": "Amine Gouiri",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 79,
    "club": "Stade Rennais FC",
    "age": 23,
    "stats": {
      "pace": 78,
      "shooting": 81,
      "passing": 75,
      "dribbling": 78,
      "defending": 29,
      "physical": 68
    }
  },
  {
    "id": "p3699",
    "name": "Joaquín Correa",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 79,
    "club": "Inter",
    "age": 29,
    "stats": {
      "pace": 82,
      "shooting": 75,
      "passing": 75,
      "dribbling": 81,
      "defending": 25,
      "physical": 64
    }
  },
  {
    "id": "p3975",
    "name": "Nemanja Gudelj",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "La Liga",
    "rating": 79,
    "club": "Sevilla FC",
    "age": 31,
    "stats": {
      "pace": 55,
      "shooting": 74,
      "passing": 78,
      "dribbling": 64,
      "defending": 56,
      "physical": 80
    }
  },
  {
    "id": "p4510",
    "name": "Viktor Tsygankov",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Ukraine",
    "era": "Modern",
    "league": "La Liga",
    "rating": 79,
    "club": "Girona FC",
    "age": 25,
    "stats": {
      "pace": 85,
      "shooting": 73,
      "passing": 78,
      "dribbling": 79,
      "defending": 29,
      "physical": 60
    }
  },
  {
    "id": "p4643",
    "name": "Paul Ebere Onuachu",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Southampton",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 74,
      "passing": 63,
      "dribbling": 56,
      "defending": 31,
      "physical": 74
    }
  },
  {
    "id": "p4654",
    "name": "Giovanni Reyna",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 79,
    "club": "Borussia Dortmund",
    "age": 20,
    "stats": {
      "pace": 78,
      "shooting": 76,
      "passing": 73,
      "dribbling": 81,
      "defending": 27,
      "physical": 68
    }
  },
  {
    "id": "p5213",
    "name": "Alexandru Mitriță",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 79,
    "club": "Al Raed",
    "age": 28,
    "stats": {
      "pace": 85,
      "shooting": 69,
      "passing": 66,
      "dribbling": 83,
      "defending": 18,
      "physical": 52
    }
  },
  {
    "id": "p5369",
    "name": "Dayot Upamecano",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 79,
    "club": "FC Bayern München",
    "age": 24,
    "stats": {
      "pace": 83,
      "shooting": 42,
      "passing": 64,
      "dribbling": 68,
      "defending": 63,
      "physical": 82
    }
  },
  {
    "id": "p5468",
    "name": "Samir Handanovič",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Slovenia",
    "era": "Legends",
    "league": "Serie A",
    "rating": 79,
    "club": "Inter",
    "age": 39,
    "stats": {
      "pace": 44,
      "shooting": 23,
      "passing": 34,
      "dribbling": 30,
      "defending": 11,
      "physical": 51
    }
  },
  {
    "id": "p5537",
    "name": "Manuel Ugarte",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 79,
    "club": "Sporting CP",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 59,
      "passing": 73,
      "dribbling": 72,
      "defending": 58,
      "physical": 72
    }
  },
  {
    "id": "p5569",
    "name": "Iñigo Martínez Berridi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 79,
    "club": "Athletic Club",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 59,
      "passing": 67,
      "dribbling": 62,
      "defending": 62,
      "physical": 82
    }
  },
  {
    "id": "p5578",
    "name": "Harvey Barnes",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 79,
    "club": "Leicester City",
    "age": 25,
    "stats": {
      "pace": 84,
      "shooting": 76,
      "passing": 74,
      "dribbling": 80,
      "defending": 32,
      "physical": 63
    }
  },
  {
    "id": "p5640",
    "name": "Gerrit Holtmann",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Philippines",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 79,
    "club": "VfL Bochum",
    "age": 28,
    "stats": {
      "pace": 94,
      "shooting": 65,
      "passing": 65,
      "dribbling": 73,
      "defending": 42,
      "physical": 55
    }
  },
  {
    "id": "p31",
    "name": "Siriki Dembélé",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "AJ Auxerre",
    "age": 26,
    "stats": {
      "pace": 89,
      "shooting": 67,
      "passing": 62,
      "dribbling": 80,
      "defending": 25,
      "physical": 51
    }
  },
  {
    "id": "p120",
    "name": "Walter Benítez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "PSV",
    "age": 30,
    "stats": {
      "pace": 48,
      "shooting": 24,
      "passing": 28,
      "dribbling": 33,
      "defending": 15,
      "physical": 53
    }
  },
  {
    "id": "p361",
    "name": "Chiedozie Ogbene",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Rotherham Utd",
    "age": 26,
    "stats": {
      "pace": 92,
      "shooting": 64,
      "passing": 63,
      "dribbling": 71,
      "defending": 43,
      "physical": 72
    }
  },
  {
    "id": "p394",
    "name": "Petros",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 78,
    "club": "Al Fateh",
    "age": 34,
    "stats": {
      "pace": 65,
      "shooting": 66,
      "passing": 71,
      "dribbling": 71,
      "defending": 56,
      "physical": 82
    }
  },
  {
    "id": "p437",
    "name": "Rodrigo",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Leeds United",
    "age": 32,
    "stats": {
      "pace": 77,
      "shooting": 78,
      "passing": 74,
      "dribbling": 77,
      "defending": 29,
      "physical": 71
    }
  },
  {
    "id": "p612",
    "name": "Dominik Kohr",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "1. FSV Mainz 05",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 62,
      "dribbling": 70,
      "defending": 58,
      "physical": 82
    }
  },
  {
    "id": "p675",
    "name": "Gonçalo Inácio",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 78,
    "club": "Sporting CP",
    "age": 22,
    "stats": {
      "pace": 80,
      "shooting": 41,
      "passing": 63,
      "dribbling": 61,
      "defending": 60,
      "physical": 76
    }
  },
  {
    "id": "p765",
    "name": "Ritsu Doan",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "SC Freiburg",
    "age": 25,
    "stats": {
      "pace": 80,
      "shooting": 70,
      "passing": 74,
      "dribbling": 86,
      "defending": 31,
      "physical": 53
    }
  },
  {
    "id": "p769",
    "name": "Neto",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Premier League",
    "rating": 78,
    "club": "AFC Bournemouth",
    "age": 34,
    "stats": {
      "pace": 54,
      "shooting": 26,
      "passing": 33,
      "dribbling": 38,
      "defending": 11,
      "physical": 56
    }
  },
  {
    "id": "p776",
    "name": "Christian Pulisic",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Chelsea",
    "age": 24,
    "stats": {
      "pace": 86,
      "shooting": 70,
      "passing": 72,
      "dribbling": 87,
      "defending": 28,
      "physical": 62
    }
  },
  {
    "id": "p798",
    "name": "Fredditinho",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 78,
    "club": "Palmeiras",
    "age": 35,
    "stats": {
      "pace": 74,
      "shooting": 78,
      "passing": 63,
      "dribbling": 77,
      "defending": 27,
      "physical": 73
    }
  },
  {
    "id": "p899",
    "name": "Chadrac Akolo",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "FC St. Gallen",
    "age": 28,
    "stats": {
      "pace": 84,
      "shooting": 69,
      "passing": 64,
      "dribbling": 79,
      "defending": 20,
      "physical": 59
    }
  },
  {
    "id": "p950",
    "name": "Parejo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 78,
    "club": "Villarreal CF",
    "age": 34,
    "stats": {
      "pace": 51,
      "shooting": 81,
      "passing": 90,
      "dribbling": 76,
      "defending": 55,
      "physical": 63
    }
  },
  {
    "id": "p1133",
    "name": "Kalvin Phillips",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Manchester City",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 65,
      "passing": 77,
      "dribbling": 74,
      "defending": 59,
      "physical": 80
    }
  },
  {
    "id": "p1176",
    "name": "Tyler Adams",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Leeds United",
    "age": 24,
    "stats": {
      "pace": 81,
      "shooting": 45,
      "passing": 70,
      "dribbling": 77,
      "defending": 58,
      "physical": 80
    }
  },
  {
    "id": "p1543",
    "name": "Jarrod Bowen",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "West Ham",
    "age": 26,
    "stats": {
      "pace": 78,
      "shooting": 75,
      "passing": 74,
      "dribbling": 81,
      "defending": 28,
      "physical": 66
    }
  },
  {
    "id": "p1615",
    "name": "Evanilson",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 78,
    "club": "FC Porto",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 75,
      "passing": 62,
      "dribbling": 72,
      "defending": 14,
      "physical": 66
    }
  },
  {
    "id": "p1848",
    "name": "Leonardo Bonucci",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 78,
    "club": "Juventus",
    "age": 36,
    "stats": {
      "pace": 50,
      "shooting": 62,
      "passing": 70,
      "dribbling": 64,
      "defending": 62,
      "physical": 78
    }
  },
  {
    "id": "p1900",
    "name": "Mitchell van Bergen",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 78,
    "club": "Stade de Reims",
    "age": 24,
    "stats": {
      "pace": 87,
      "shooting": 67,
      "passing": 64,
      "dribbling": 77,
      "defending": 17,
      "physical": 56
    }
  },
  {
    "id": "p1936",
    "name": "Rafa Mir",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 78,
    "club": "Sevilla FC",
    "age": 26,
    "stats": {
      "pace": 79,
      "shooting": 79,
      "passing": 65,
      "dribbling": 68,
      "defending": 29,
      "physical": 76
    }
  },
  {
    "id": "p1951",
    "name": "Willian",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Premier League",
    "rating": 78,
    "club": "Fulham",
    "age": 35,
    "stats": {
      "pace": 73,
      "shooting": 73,
      "passing": 76,
      "dribbling": 80,
      "defending": 40,
      "physical": 47
    }
  },
  {
    "id": "p1966",
    "name": "Erling Haaland",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 78,
    "club": "Manchester City",
    "age": 23,
    "stats": {
      "pace": 88,
      "shooting": 91,
      "passing": 62,
      "dribbling": 78,
      "defending": 31,
      "physical": 84
    }
  },
  {
    "id": "p2009",
    "name": "Uğurcan Çakır",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Trabzonspor",
    "age": 27,
    "stats": {
      "pace": 55,
      "shooting": 27,
      "passing": 34,
      "dribbling": 36,
      "defending": 15,
      "physical": 54
    }
  },
  {
    "id": "p2061",
    "name": "Juan Ferney Otero",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "R. Sporting",
    "age": 28,
    "stats": {
      "pace": 91,
      "shooting": 74,
      "passing": 65,
      "dribbling": 76,
      "defending": 23,
      "physical": 70
    }
  },
  {
    "id": "p2121",
    "name": "Victor Lindelöf",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Manchester Utd",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 51,
      "passing": 74,
      "dribbling": 66,
      "defending": 61,
      "physical": 75
    }
  },
  {
    "id": "p2200",
    "name": "Ibrahima Konaté",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Liverpool",
    "age": 24,
    "stats": {
      "pace": 77,
      "shooting": 33,
      "passing": 58,
      "dribbling": 63,
      "defending": 62,
      "physical": 77
    }
  },
  {
    "id": "p2262",
    "name": "Nayef Aguerd",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "West Ham",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 51,
      "passing": 64,
      "dribbling": 62,
      "defending": 61,
      "physical": 78
    }
  },
  {
    "id": "p2327",
    "name": "Ben Davies",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Spurs",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 56,
      "passing": 72,
      "dribbling": 70,
      "defending": 60,
      "physical": 76
    }
  },
  {
    "id": "p2391",
    "name": "Leandro Paredes",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 78,
    "club": "Juventus",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 71,
      "passing": 83,
      "dribbling": 78,
      "defending": 58,
      "physical": 76
    }
  },
  {
    "id": "p2473",
    "name": "Tomáš Vaclík",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Czech Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 78,
    "club": "Huddersfield",
    "age": 34,
    "stats": {
      "pace": 40,
      "shooting": 25,
      "passing": 39,
      "dribbling": 34,
      "defending": 15,
      "physical": 53
    }
  },
  {
    "id": "p2547",
    "name": "Giacomo Raspadori",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 78,
    "club": "Napoli FC",
    "age": 23,
    "stats": {
      "pace": 81,
      "shooting": 77,
      "passing": 67,
      "dribbling": 82,
      "defending": 16,
      "physical": 60
    }
  },
  {
    "id": "p2787",
    "name": "Valentin Castellanos",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 78,
    "club": "Girona FC",
    "age": 24,
    "stats": {
      "pace": 78,
      "shooting": 75,
      "passing": 68,
      "dribbling": 73,
      "defending": 26,
      "physical": 80
    }
  },
  {
    "id": "p2813",
    "name": "Dean Henderson",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Nott'm Forest",
    "age": 26,
    "stats": {
      "pace": 56,
      "shooting": 20,
      "passing": 41,
      "dribbling": 41,
      "defending": 10,
      "physical": 50
    }
  },
  {
    "id": "p2827",
    "name": "Rui Silva",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "La Liga",
    "rating": 78,
    "club": "Real Betis",
    "age": 29,
    "stats": {
      "pace": 31,
      "shooting": 28,
      "passing": 30,
      "dribbling": 25,
      "defending": 14,
      "physical": 44
    }
  },
  {
    "id": "p2938",
    "name": "Lucas Tousart",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "Hertha Berlin",
    "age": 26,
    "stats": {
      "pace": 62,
      "shooting": 55,
      "passing": 67,
      "dribbling": 67,
      "defending": 58,
      "physical": 82
    }
  },
  {
    "id": "p2967",
    "name": "Christoph Kramer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "M'gladbach",
    "age": 32,
    "stats": {
      "pace": 43,
      "shooting": 51,
      "passing": 72,
      "dribbling": 65,
      "defending": 58,
      "physical": 69
    }
  },
  {
    "id": "p2988",
    "name": "Andreas Cornelius",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "F.C. København",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 74,
      "passing": 60,
      "dribbling": 59,
      "defending": 18,
      "physical": 77
    }
  },
  {
    "id": "p3111",
    "name": "Dennis Praet",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Leicester City",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 74,
      "passing": 78,
      "dribbling": 75,
      "defending": 48,
      "physical": 65
    }
  },
  {
    "id": "p3139",
    "name": "Sergio Ramos",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 78,
    "club": "Paris SG",
    "age": 37,
    "stats": {
      "pace": 61,
      "shooting": 69,
      "passing": 73,
      "dribbling": 68,
      "defending": 62,
      "physical": 80
    }
  },
  {
    "id": "p3278",
    "name": "Na Sang Ho",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "FC Seoul",
    "age": 27,
    "stats": {
      "pace": 87,
      "shooting": 66,
      "passing": 61,
      "dribbling": 77,
      "defending": 24,
      "physical": 73
    }
  },
  {
    "id": "p3322",
    "name": "Yoane Wissa",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Brentford",
    "age": 26,
    "stats": {
      "pace": 85,
      "shooting": 73,
      "passing": 66,
      "dribbling": 77,
      "defending": 18,
      "physical": 69
    }
  },
  {
    "id": "p3360",
    "name": "Michel Ange Balikwisha",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Belgium",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 78,
    "club": "Royal Antwerp FC",
    "age": 22,
    "stats": {
      "pace": 86,
      "shooting": 68,
      "passing": 70,
      "dribbling": 79,
      "defending": 31,
      "physical": 69
    }
  },
  {
    "id": "p3408",
    "name": "Pedrão Tofico",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Brazil",
    "age": 27,
    "stats": {
      "pace": 58,
      "shooting": 30,
      "passing": 67,
      "dribbling": 56,
      "defending": 58,
      "physical": 79
    }
  },
  {
    "id": "p3416",
    "name": "Lukas Görtler",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "FC St. Gallen",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 64,
      "passing": 77,
      "dribbling": 69,
      "defending": 42,
      "physical": 80
    }
  },
  {
    "id": "p3520",
    "name": "Guus Til",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "PSV",
    "age": 25,
    "stats": {
      "pace": 69,
      "shooting": 71,
      "passing": 70,
      "dribbling": 69,
      "defending": 46,
      "physical": 76
    }
  },
  {
    "id": "p3532",
    "name": "Emir Sahiti",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Hajduk Split",
    "age": 24,
    "stats": {
      "pace": 84,
      "shooting": 69,
      "passing": 66,
      "dribbling": 80,
      "defending": 28,
      "physical": 64
    }
  },
  {
    "id": "p3583",
    "name": "Danny Ings",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "West Ham",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 81,
      "passing": 69,
      "dribbling": 77,
      "defending": 31,
      "physical": 72
    }
  },
  {
    "id": "p3647",
    "name": "Bernd Leno",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Fulham",
    "age": 31,
    "stats": {
      "pace": 54,
      "shooting": 22,
      "passing": 41,
      "dribbling": 37,
      "defending": 15,
      "physical": 53
    }
  },
  {
    "id": "p3684",
    "name": "Noah Joel Sarenren Bazee",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "FC Augsburg",
    "age": 27,
    "stats": {
      "pace": 87,
      "shooting": 60,
      "passing": 64,
      "dribbling": 75,
      "defending": 22,
      "physical": 49
    }
  },
  {
    "id": "p3828",
    "name": "Przemysław Płacheta",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Norwich",
    "age": 25,
    "stats": {
      "pace": 92,
      "shooting": 58,
      "passing": 59,
      "dribbling": 77,
      "defending": 29,
      "physical": 59
    }
  },
  {
    "id": "p3855",
    "name": "Gonçalo Paciência",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "La Liga",
    "rating": 78,
    "club": "RC Celta",
    "age": 29,
    "stats": {
      "pace": 47,
      "shooting": 76,
      "passing": 58,
      "dribbling": 75,
      "defending": 23,
      "physical": 76
    }
  },
  {
    "id": "p3930",
    "name": "Jan Vertonghen",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 78,
    "club": "RSC Anderlecht",
    "age": 36,
    "stats": {
      "pace": 67,
      "shooting": 63,
      "passing": 72,
      "dribbling": 62,
      "defending": 62,
      "physical": 78
    }
  },
  {
    "id": "p4041",
    "name": "Nicolas Höfler",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "SC Freiburg",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 47,
      "passing": 66,
      "dribbling": 69,
      "defending": 57,
      "physical": 77
    }
  },
  {
    "id": "p4066",
    "name": "Jadsinho Mei",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Flamengo",
    "age": 27,
    "stats": {
      "pace": 58,
      "shooting": 59,
      "passing": 67,
      "dribbling": 58,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p4116",
    "name": "Ibrahima Sissoko",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 78,
    "club": "Strasbourg",
    "age": 25,
    "stats": {
      "pace": 62,
      "shooting": 60,
      "passing": 71,
      "dribbling": 55,
      "defending": 54,
      "physical": 78
    }
  },
  {
    "id": "p4136",
    "name": "Negredo",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 78,
    "club": "Cádiz CF",
    "age": 38,
    "stats": {
      "pace": 54,
      "shooting": 80,
      "passing": 62,
      "dribbling": 68,
      "defending": 22,
      "physical": 74
    }
  },
  {
    "id": "p4283",
    "name": "Claudio Bravo",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Chile",
    "era": "Legends",
    "league": "La Liga",
    "rating": 78,
    "club": "Real Betis",
    "age": 40,
    "stats": {
      "pace": 56,
      "shooting": 26,
      "passing": 51,
      "dribbling": 45,
      "defending": 15,
      "physical": 57
    }
  },
  {
    "id": "p4439",
    "name": "Thiago",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "Liverpool",
    "age": 32,
    "stats": {
      "pace": 62,
      "shooting": 75,
      "passing": 86,
      "dribbling": 90,
      "defending": 58,
      "physical": 75
    }
  },
  {
    "id": "p4504",
    "name": "Thomas Henry",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Serie A",
    "rating": 78,
    "club": "Hellas Verona",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 73,
      "passing": 65,
      "dribbling": 60,
      "defending": 23,
      "physical": 77
    }
  },
  {
    "id": "p4647",
    "name": "Mata",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 78,
    "club": "Getafe CF",
    "age": 34,
    "stats": {
      "pace": 65,
      "shooting": 75,
      "passing": 62,
      "dribbling": 63,
      "defending": 19,
      "physical": 73
    }
  },
  {
    "id": "p4828",
    "name": "Mattia Zaccagni",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Latium",
    "age": 28,
    "stats": {
      "pace": 83,
      "shooting": 72,
      "passing": 75,
      "dribbling": 84,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p4846",
    "name": "Hidemasa Morita",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Sporting CP",
    "age": 28,
    "stats": {
      "pace": 68,
      "shooting": 61,
      "passing": 76,
      "dribbling": 73,
      "defending": 57,
      "physical": 71
    }
  },
  {
    "id": "p4996",
    "name": "Vladimír Coufal",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Premier League",
    "rating": 78,
    "club": "West Ham",
    "age": 31,
    "stats": {
      "pace": 67,
      "shooting": 59,
      "passing": 74,
      "dribbling": 73,
      "defending": 59,
      "physical": 83
    }
  },
  {
    "id": "p5117",
    "name": "Jonjo Shelvey",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Nott'm Forest",
    "age": 31,
    "stats": {
      "pace": 38,
      "shooting": 72,
      "passing": 82,
      "dribbling": 67,
      "defending": 46,
      "physical": 71
    }
  },
  {
    "id": "p5141",
    "name": "Dieumerci Ndongala",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Apoel FC",
    "age": 32,
    "stats": {
      "pace": 84,
      "shooting": 59,
      "passing": 64,
      "dribbling": 82,
      "defending": 20,
      "physical": 57
    }
  },
  {
    "id": "p5255",
    "name": "Alejandro Silva",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "Olimpia",
    "age": 33,
    "stats": {
      "pace": 87,
      "shooting": 65,
      "passing": 72,
      "dribbling": 78,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": "p5559",
    "name": "Sascha Horvath",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 78,
    "club": "LASK",
    "age": 27,
    "stats": {
      "pace": 86,
      "shooting": 69,
      "passing": 68,
      "dribbling": 83,
      "defending": 36,
      "physical": 64
    }
  },
  {
    "id": "p5650",
    "name": "Karim Bellarabi",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 78,
    "club": "Leverkusen",
    "age": 33,
    "stats": {
      "pace": 78,
      "shooting": 77,
      "passing": 72,
      "dribbling": 80,
      "defending": 28,
      "physical": 72
    }
  },
  {
    "id": "p42",
    "name": "Festy Ebosele",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 77,
    "club": "Udinese",
    "age": 21,
    "stats": {
      "pace": 92,
      "shooting": 43,
      "passing": 50,
      "dribbling": 76,
      "defending": 43,
      "physical": 73
    }
  },
  {
    "id": "p113",
    "name": "Pathé Ciss",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "Rayo Vallecano",
    "age": 29,
    "stats": {
      "pace": 64,
      "shooting": 52,
      "passing": 62,
      "dribbling": 61,
      "defending": 55,
      "physical": 84
    }
  },
  {
    "id": "p164",
    "name": "Ivan Provedel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Latium",
    "age": 29,
    "stats": {
      "pace": 42,
      "shooting": 27,
      "passing": 34,
      "dribbling": 30,
      "defending": 16,
      "physical": 42
    }
  },
  {
    "id": "p195",
    "name": "Andrei Cordea",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Romania",
    "age": 24,
    "stats": {
      "pace": 88,
      "shooting": 64,
      "passing": 66,
      "dribbling": 78,
      "defending": 26,
      "physical": 70
    }
  },
  {
    "id": "p229",
    "name": "Nicola Zalewski",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Poland",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 77,
    "club": "Roma",
    "age": 21,
    "stats": {
      "pace": 86,
      "shooting": 59,
      "passing": 70,
      "dribbling": 76,
      "defending": 40,
      "physical": 58
    }
  },
  {
    "id": "p252",
    "name": "Tim Skarke",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "FC Schalke 04",
    "age": 26,
    "stats": {
      "pace": 88,
      "shooting": 68,
      "passing": 60,
      "dribbling": 77,
      "defending": 34,
      "physical": 57
    }
  },
  {
    "id": "p527",
    "name": "Vangelis Pavlidis",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "AZ",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 76,
      "passing": 65,
      "dribbling": 73,
      "defending": 26,
      "physical": 80
    }
  },
  {
    "id": "p544",
    "name": "Ezri Konsa",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 77,
    "club": "Aston Villa",
    "age": 25,
    "stats": {
      "pace": 77,
      "shooting": 40,
      "passing": 64,
      "dribbling": 69,
      "defending": 60,
      "physical": 76
    }
  },
  {
    "id": "p618",
    "name": "Francesco Caputo",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 77,
    "club": "Empoli",
    "age": 36,
    "stats": {
      "pace": 76,
      "shooting": 77,
      "passing": 61,
      "dribbling": 79,
      "defending": 12,
      "physical": 67
    }
  },
  {
    "id": "p789",
    "name": "Rolando Mandragora",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Fiorentina",
    "age": 26,
    "stats": {
      "pace": 55,
      "shooting": 66,
      "passing": 75,
      "dribbling": 73,
      "defending": 56,
      "physical": 74
    }
  },
  {
    "id": "p803",
    "name": "Victor Nelsson",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Galatasaray",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 44,
      "passing": 63,
      "dribbling": 66,
      "defending": 57,
      "physical": 81
    }
  },
  {
    "id": "p877",
    "name": "Joan Jordán",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "Sevilla FC",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 72,
      "passing": 80,
      "dribbling": 70,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p951",
    "name": "Kevin Vogt",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 77,
    "club": "TSG Hoffenheim",
    "age": 31,
    "stats": {
      "pace": 71,
      "shooting": 59,
      "passing": 73,
      "dribbling": 60,
      "defending": 58,
      "physical": 70
    }
  },
  {
    "id": "p971",
    "name": "Lucas Torró",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "CA Osasuna",
    "age": 29,
    "stats": {
      "pace": 51,
      "shooting": 62,
      "passing": 69,
      "dribbling": 62,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p1125",
    "name": "Borja Bastón",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "R. Oviedo",
    "age": 31,
    "stats": {
      "pace": 49,
      "shooting": 76,
      "passing": 64,
      "dribbling": 58,
      "defending": 19,
      "physical": 74
    }
  },
  {
    "id": "p1239",
    "name": "Corey Blackett-Taylor",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Charlton Ath",
    "age": 25,
    "stats": {
      "pace": 91,
      "shooting": 54,
      "passing": 55,
      "dribbling": 78,
      "defending": 39,
      "physical": 65
    }
  },
  {
    "id": "p1265",
    "name": "Dante",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 77,
    "club": "OGC Nice",
    "age": 39,
    "stats": {
      "pace": 32,
      "shooting": 53,
      "passing": 69,
      "dribbling": 60,
      "defending": 59,
      "physical": 74
    }
  },
  {
    "id": "p1302",
    "name": "Amir Rrahmani",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Napoli FC",
    "age": 29,
    "stats": {
      "pace": 61,
      "shooting": 52,
      "passing": 57,
      "dribbling": 56,
      "defending": 61,
      "physical": 77
    }
  },
  {
    "id": "p1509",
    "name": "Teemu Pukki",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Finland",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Norwich",
    "age": 33,
    "stats": {
      "pace": 78,
      "shooting": 74,
      "passing": 62,
      "dribbling": 73,
      "defending": 25,
      "physical": 72
    }
  },
  {
    "id": "p1801",
    "name": "Wout Faes",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Leicester City",
    "age": 25,
    "stats": {
      "pace": 56,
      "shooting": 38,
      "passing": 55,
      "dribbling": 56,
      "defending": 59,
      "physical": 76
    }
  },
  {
    "id": "p1981",
    "name": "Carlos Izquierdoz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 77,
    "club": "R. Sporting",
    "age": 34,
    "stats": {
      "pace": 49,
      "shooting": 56,
      "passing": 55,
      "dribbling": 48,
      "defending": 56,
      "physical": 82
    }
  },
  {
    "id": "p2012",
    "name": "Riqui Puig",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "LA Galaxy",
    "age": 24,
    "stats": {
      "pace": 66,
      "shooting": 63,
      "passing": 74,
      "dribbling": 82,
      "defending": 45,
      "physical": 55
    }
  },
  {
    "id": "p2217",
    "name": "Alessio Cragno",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Monza",
    "age": 29,
    "stats": {
      "pace": 39,
      "shooting": 24,
      "passing": 28,
      "dribbling": 29,
      "defending": 11,
      "physical": 51
    }
  },
  {
    "id": "p2324",
    "name": "Nildo Reisão",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "Atlético Mineiro",
    "age": 27,
    "stats": {
      "pace": 52,
      "shooting": 39,
      "passing": 63,
      "dribbling": 44,
      "defending": 56,
      "physical": 78
    }
  },
  {
    "id": "p2643",
    "name": "Justin Bijlow",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Feyenoord",
    "age": 25,
    "stats": {
      "pace": 58,
      "shooting": 22,
      "passing": 36,
      "dribbling": 30,
      "defending": 9,
      "physical": 47
    }
  },
  {
    "id": "p2714",
    "name": "Pablo Rosario",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 77,
    "club": "OGC Nice",
    "age": 26,
    "stats": {
      "pace": 64,
      "shooting": 64,
      "passing": 70,
      "dribbling": 70,
      "defending": 56,
      "physical": 77
    }
  },
  {
    "id": "p2754",
    "name": "Shon Weissman",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Israel",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "Granada CF",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 77,
      "passing": 64,
      "dribbling": 70,
      "defending": 21,
      "physical": 73
    }
  },
  {
    "id": "p2965",
    "name": "Wes Burns",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Ipswich",
    "age": 28,
    "stats": {
      "pace": 91,
      "shooting": 59,
      "passing": 60,
      "dribbling": 76,
      "defending": 42,
      "physical": 68
    }
  },
  {
    "id": "p3029",
    "name": "David Carmo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "FC Porto",
    "age": 24,
    "stats": {
      "pace": 54,
      "shooting": 29,
      "passing": 56,
      "dribbling": 44,
      "defending": 58,
      "physical": 68
    }
  },
  {
    "id": "p3152",
    "name": "Enzo Le Fée",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 77,
    "club": "FC Lorient",
    "age": 23,
    "stats": {
      "pace": 60,
      "shooting": 55,
      "passing": 78,
      "dribbling": 79,
      "defending": 47,
      "physical": 54
    }
  },
  {
    "id": "p3182",
    "name": "Aïssa Laïdouni",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Tunisia",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 77,
    "club": "Union Berlin",
    "age": 26,
    "stats": {
      "pace": 62,
      "shooting": 53,
      "passing": 67,
      "dribbling": 72,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p3440",
    "name": "Riccardo Orsolini",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Bologna",
    "age": 26,
    "stats": {
      "pace": 79,
      "shooting": 73,
      "passing": 73,
      "dribbling": 81,
      "defending": 23,
      "physical": 61
    }
  },
  {
    "id": "p3533",
    "name": "Alex Meret",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 77,
    "club": "Napoli FC",
    "age": 26,
    "stats": {
      "pace": 45,
      "shooting": 27,
      "passing": 23,
      "dribbling": 32,
      "defending": 14,
      "physical": 46
    }
  },
  {
    "id": "p3605",
    "name": "Kaku",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 77,
    "club": "Al Taawoun",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 66,
      "passing": 78,
      "dribbling": 81,
      "defending": 38,
      "physical": 63
    }
  },
  {
    "id": "p3888",
    "name": "Ollie Watkins",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 77,
    "club": "Aston Villa",
    "age": 27,
    "stats": {
      "pace": 83,
      "shooting": 73,
      "passing": 68,
      "dribbling": 75,
      "defending": 32,
      "physical": 77
    }
  },
  {
    "id": "p3937",
    "name": "Vitaly Janelt",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Premier League",
    "rating": 77,
    "club": "Brentford",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 71,
      "passing": 73,
      "dribbling": 71,
      "defending": 56,
      "physical": 77
    }
  },
  {
    "id": "p4141",
    "name": "Suat Serdar",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 77,
    "club": "Hertha Berlin",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 71,
      "passing": 71,
      "dribbling": 78,
      "defending": 56,
      "physical": 81
    }
  },
  {
    "id": "p4298",
    "name": "Muteb Al Harbi",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Rising Stars",
    "league": "Saudi Pro League",
    "rating": 77,
    "club": "Al Shabab",
    "age": 23,
    "stats": {
      "pace": 90,
      "shooting": 50,
      "passing": 65,
      "dribbling": 73,
      "defending": 43,
      "physical": 62
    }
  },
  {
    "id": "p4358",
    "name": "Nico González",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 77,
    "club": "Valencia CF",
    "age": 21,
    "stats": {
      "pace": 66,
      "shooting": 60,
      "passing": 75,
      "dribbling": 67,
      "defending": 55,
      "physical": 76
    }
  },
  {
    "id": "p4477",
    "name": "Enner Valencia",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Ecuador",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Fenerbahçe",
    "age": 33,
    "stats": {
      "pace": 87,
      "shooting": 73,
      "passing": 65,
      "dribbling": 76,
      "defending": 33,
      "physical": 81
    }
  },
  {
    "id": "p4579",
    "name": "Billy Sharp",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Premier League",
    "rating": 77,
    "club": "Sheffield Utd",
    "age": 37,
    "stats": {
      "pace": 55,
      "shooting": 72,
      "passing": 61,
      "dribbling": 65,
      "defending": 24,
      "physical": 63
    }
  },
  {
    "id": "p4617",
    "name": "Éver Banega",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 77,
    "club": "Al Shabab",
    "age": 35,
    "stats": {
      "pace": 58,
      "shooting": 72,
      "passing": 83,
      "dribbling": 80,
      "defending": 57,
      "physical": 69
    }
  },
  {
    "id": "p4720",
    "name": "Marcus Berg",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Sweden",
    "era": "Legends",
    "league": "Other",
    "rating": 77,
    "club": "IFK Göteborg",
    "age": 37,
    "stats": {
      "pace": 67,
      "shooting": 74,
      "passing": 61,
      "dribbling": 70,
      "defending": 22,
      "physical": 70
    }
  },
  {
    "id": "p4860",
    "name": "Franco Armani",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 77,
    "club": "Argentina",
    "age": 36,
    "stats": {
      "pace": 43,
      "shooting": 25,
      "passing": 34,
      "dribbling": 32,
      "defending": 13,
      "physical": 56
    }
  },
  {
    "id": "p4910",
    "name": "Gaëtan Charbonnier",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 77,
    "club": "AS Saint-Étienne",
    "age": 34,
    "stats": {
      "pace": 31,
      "shooting": 74,
      "passing": 67,
      "dribbling": 62,
      "defending": 23,
      "physical": 57
    }
  },
  {
    "id": "p5102",
    "name": "Christopher Trimmel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Austria",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 77,
    "club": "Union Berlin",
    "age": 36,
    "stats": {
      "pace": 72,
      "shooting": 65,
      "passing": 75,
      "dribbling": 63,
      "defending": 56,
      "physical": 76
    }
  },
  {
    "id": "p5177",
    "name": "Dejan Ljubičić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 77,
    "club": "1. FC Köln",
    "age": 25,
    "stats": {
      "pace": 77,
      "shooting": 67,
      "passing": 73,
      "dribbling": 72,
      "defending": 55,
      "physical": 79
    }
  },
  {
    "id": "p5253",
    "name": "Simon Banza",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "SC Braga",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 76,
      "passing": 53,
      "dribbling": 72,
      "defending": 14,
      "physical": 75
    }
  },
  {
    "id": "p5372",
    "name": "Marcel Halstenberg",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 77,
    "club": "RB Leipzig",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 67,
      "passing": 73,
      "dribbling": 67,
      "defending": 55,
      "physical": 79
    }
  },
  {
    "id": "p5439",
    "name": "Bastián Yáñez",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Chile",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 77,
    "club": "Unión Española",
    "age": 22,
    "stats": {
      "pace": 89,
      "shooting": 58,
      "passing": 61,
      "dribbling": 78,
      "defending": 18,
      "physical": 55
    }
  },
  {
    "id": "p5538",
    "name": "Haris Seferović",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "La Liga",
    "rating": 77,
    "club": "RC Celta",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 77,
      "passing": 66,
      "dribbling": 66,
      "defending": 32,
      "physical": 81
    }
  },
  {
    "id": "p5555",
    "name": "César Montes",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Mexico",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "RCD Espanyol",
    "age": 26,
    "stats": {
      "pace": 61,
      "shooting": 41,
      "passing": 64,
      "dribbling": 64,
      "defending": 58,
      "physical": 80
    }
  },
  {
    "id": "p5571",
    "name": "Trincão",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 77,
    "club": "Sporting CP",
    "age": 23,
    "stats": {
      "pace": 78,
      "shooting": 71,
      "passing": 70,
      "dribbling": 78,
      "defending": 26,
      "physical": 60
    }
  },
  {
    "id": "p5605",
    "name": "Sam Larsson",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 77,
    "club": "Antalyaspor",
    "age": 30,
    "stats": {
      "pace": 76,
      "shooting": 73,
      "passing": 72,
      "dribbling": 80,
      "defending": 30,
      "physical": 58
    }
  },
  {
    "id": "p17",
    "name": "Xavier Chavalerin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "ESTAC Troyes",
    "age": 32,
    "stats": {
      "pace": 59,
      "shooting": 66,
      "passing": 72,
      "dribbling": 71,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p41",
    "name": "Lorenzo Reyes",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 76,
    "club": "Ñublense",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 57,
      "passing": 66,
      "dribbling": 73,
      "defending": 55,
      "physical": 78
    }
  },
  {
    "id": "p60",
    "name": "Badou Ndiaye",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Adana Demirspor",
    "age": 32,
    "stats": {
      "pace": 84,
      "shooting": 70,
      "passing": 69,
      "dribbling": 76,
      "defending": 55,
      "physical": 78
    }
  },
  {
    "id": "p163",
    "name": "Danisco Fachini",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Flamengo",
    "age": 35,
    "stats": {
      "pace": 67,
      "shooting": 45,
      "passing": 66,
      "dribbling": 69,
      "defending": 58,
      "physical": 73
    }
  },
  {
    "id": "p212",
    "name": "Toma Bašić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Latium",
    "age": 26,
    "stats": {
      "pace": 57,
      "shooting": 68,
      "passing": 75,
      "dribbling": 68,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p215",
    "name": "Bruno Petković",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Dinamo Zagreb",
    "age": 28,
    "stats": {
      "pace": 74,
      "shooting": 72,
      "passing": 76,
      "dribbling": 71,
      "defending": 23,
      "physical": 71
    }
  },
  {
    "id": "p218",
    "name": "Azzedine Ounahi",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "OM",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 61,
      "passing": 72,
      "dribbling": 73,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p249",
    "name": "Alejandro Garnacho",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 76,
    "club": "Manchester Utd",
    "age": 19,
    "stats": {
      "pace": 85,
      "shooting": 59,
      "passing": 59,
      "dribbling": 76,
      "defending": 23,
      "physical": 50
    }
  },
  {
    "id": "p285",
    "name": "Josué",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Legia Warszawa",
    "age": 32,
    "stats": {
      "pace": 38,
      "shooting": 70,
      "passing": 77,
      "dribbling": 75,
      "defending": 39,
      "physical": 60
    }
  },
  {
    "id": "p338",
    "name": "Davinson Sánchez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Spurs",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 47,
      "passing": 56,
      "dribbling": 63,
      "defending": 60,
      "physical": 77
    }
  },
  {
    "id": "p347",
    "name": "Roberto Insigne",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 76,
    "club": "Frosinone",
    "age": 29,
    "stats": {
      "pace": 83,
      "shooting": 64,
      "passing": 71,
      "dribbling": 78,
      "defending": 16,
      "physical": 43
    }
  },
  {
    "id": "p514",
    "name": "Konan N'Dri",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Ivory Coast",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "KAS Eupen",
    "age": 22,
    "stats": {
      "pace": 89,
      "shooting": 65,
      "passing": 60,
      "dribbling": 79,
      "defending": 40,
      "physical": 67
    }
  },
  {
    "id": "p625",
    "name": "Alex Král",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "FC Schalke 04",
    "age": 25,
    "stats": {
      "pace": 71,
      "shooting": 71,
      "passing": 72,
      "dribbling": 76,
      "defending": 54,
      "physical": 79
    }
  },
  {
    "id": "p647",
    "name": "Illan Meslier",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Leeds United",
    "age": 23,
    "stats": {
      "pace": 39,
      "shooting": 23,
      "passing": 45,
      "dribbling": 31,
      "defending": 14,
      "physical": 41
    }
  },
  {
    "id": "p677",
    "name": "Leonardo Pavoletti",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 76,
    "club": "Cagliari",
    "age": 34,
    "stats": {
      "pace": 62,
      "shooting": 69,
      "passing": 50,
      "dribbling": 61,
      "defending": 16,
      "physical": 74
    }
  },
  {
    "id": "p699",
    "name": "Marko Grujić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "FC Porto",
    "age": 27,
    "stats": {
      "pace": 61,
      "shooting": 69,
      "passing": 72,
      "dribbling": 71,
      "defending": 54,
      "physical": 80
    }
  },
  {
    "id": "p706",
    "name": "Yvon Mvogo",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 76,
    "club": "FC Lorient",
    "age": 29,
    "stats": {
      "pace": 42,
      "shooting": 25,
      "passing": 29,
      "dribbling": 40,
      "defending": 11,
      "physical": 53
    }
  },
  {
    "id": "p848",
    "name": "Pape Gueye",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Sevilla FC",
    "age": 24,
    "stats": {
      "pace": 63,
      "shooting": 54,
      "passing": 66,
      "dribbling": 60,
      "defending": 56,
      "physical": 77
    }
  },
  {
    "id": "p909",
    "name": "Matías Dituro",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Uni. Católica",
    "age": 36,
    "stats": {
      "pace": 40,
      "shooting": 26,
      "passing": 34,
      "dribbling": 27,
      "defending": 13,
      "physical": 48
    }
  },
  {
    "id": "p1086",
    "name": "Hugo Mallo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "RC Celta",
    "age": 32,
    "stats": {
      "pace": 64,
      "shooting": 41,
      "passing": 69,
      "dribbling": 67,
      "defending": 59,
      "physical": 76
    }
  },
  {
    "id": "p1122",
    "name": "Magnus Eriksson",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Djurgårdens IF",
    "age": 33,
    "stats": {
      "pace": 50,
      "shooting": 68,
      "passing": 76,
      "dribbling": 70,
      "defending": 39,
      "physical": 79
    }
  },
  {
    "id": "p1143",
    "name": "Alexander Barboza",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Libertad",
    "age": 28,
    "stats": {
      "pace": 51,
      "shooting": 56,
      "passing": 60,
      "dribbling": 59,
      "defending": 53,
      "physical": 82
    }
  },
  {
    "id": "p1217",
    "name": "Martín Ojeda",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Orlando City",
    "age": 24,
    "stats": {
      "pace": 83,
      "shooting": 76,
      "passing": 74,
      "dribbling": 79,
      "defending": 25,
      "physical": 59
    }
  },
  {
    "id": "p1392",
    "name": "Paulo Gazzaniga",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Girona FC",
    "age": 31,
    "stats": {
      "pace": 57,
      "shooting": 26,
      "passing": 48,
      "dribbling": 40,
      "defending": 14,
      "physical": 53
    }
  },
  {
    "id": "p1462",
    "name": "Rodrigo Vuarte",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Atlético Mineiro",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 64,
      "passing": 70,
      "dribbling": 64,
      "defending": 57,
      "physical": 73
    }
  },
  {
    "id": "p1553",
    "name": "Sergio Álvarez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "SD Eibar",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 67,
      "passing": 68,
      "dribbling": 65,
      "defending": 54,
      "physical": 79
    }
  },
  {
    "id": "p1668",
    "name": "Hwang Hee Chan",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Wolves",
    "age": 27,
    "stats": {
      "pace": 82,
      "shooting": 75,
      "passing": 71,
      "dribbling": 79,
      "defending": 23,
      "physical": 72
    }
  },
  {
    "id": "p1775",
    "name": "Borja Mayoral",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Getafe CF",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 73,
      "passing": 67,
      "dribbling": 74,
      "defending": 23,
      "physical": 67
    }
  },
  {
    "id": "p1817",
    "name": "Trevoh Chalobah",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Chelsea",
    "age": 24,
    "stats": {
      "pace": 64,
      "shooting": 47,
      "passing": 66,
      "dribbling": 62,
      "defending": 58,
      "physical": 71
    }
  },
  {
    "id": "p1906",
    "name": "Lago Júnior",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Málaga CF",
    "age": 32,
    "stats": {
      "pace": 89,
      "shooting": 68,
      "passing": 62,
      "dribbling": 71,
      "defending": 13,
      "physical": 72
    }
  },
  {
    "id": "p1941",
    "name": "Azor Matusiwa",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 76,
    "club": "Stade de Reims",
    "age": 25,
    "stats": {
      "pace": 56,
      "shooting": 49,
      "passing": 59,
      "dribbling": 72,
      "defending": 57,
      "physical": 82
    }
  },
  {
    "id": "p1985",
    "name": "Christian Kouamé",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Serie A",
    "rating": 76,
    "club": "Fiorentina",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 70,
      "passing": 65,
      "dribbling": 75,
      "defending": 27,
      "physical": 76
    }
  },
  {
    "id": "p2073",
    "name": "Robert Žulj",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "LASK",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 75,
      "passing": 76,
      "dribbling": 69,
      "defending": 23,
      "physical": 68
    }
  },
  {
    "id": "p2102",
    "name": "Remko Pasveer",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Ajax",
    "age": 39,
    "stats": {
      "pace": 42,
      "shooting": 27,
      "passing": 42,
      "dribbling": 33,
      "defending": 13,
      "physical": 50
    }
  },
  {
    "id": "p2291",
    "name": "Lucas Merolla",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Huracán",
    "age": 28,
    "stats": {
      "pace": 47,
      "shooting": 26,
      "passing": 52,
      "dribbling": 44,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p2360",
    "name": "Luciano Acosta",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "FC Cincinnati",
    "age": 29,
    "stats": {
      "pace": 80,
      "shooting": 68,
      "passing": 71,
      "dribbling": 86,
      "defending": 31,
      "physical": 60
    }
  },
  {
    "id": "p2429",
    "name": "Fernando Zampedri",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Uni. Católica",
    "age": 35,
    "stats": {
      "pace": 68,
      "shooting": 76,
      "passing": 56,
      "dribbling": 66,
      "defending": 14,
      "physical": 75
    }
  },
  {
    "id": "p2437",
    "name": "Gonzalo Martínez",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 76,
    "club": "Al Nassr",
    "age": 30,
    "stats": {
      "pace": 78,
      "shooting": 74,
      "passing": 72,
      "dribbling": 83,
      "defending": 21,
      "physical": 56
    }
  },
  {
    "id": "p2474",
    "name": "Hugo Ekitike",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 76,
    "club": "Paris SG",
    "age": 21,
    "stats": {
      "pace": 74,
      "shooting": 72,
      "passing": 59,
      "dribbling": 72,
      "defending": 13,
      "physical": 69
    }
  },
  {
    "id": "p2476",
    "name": "Gustavo Bou",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "New England",
    "age": 33,
    "stats": {
      "pace": 75,
      "shooting": 77,
      "passing": 68,
      "dribbling": 75,
      "defending": 22,
      "physical": 69
    }
  },
  {
    "id": "p2519",
    "name": "Cantero",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Levante UD",
    "age": 23,
    "stats": {
      "pace": 87,
      "shooting": 66,
      "passing": 65,
      "dribbling": 74,
      "defending": 19,
      "physical": 64
    }
  },
  {
    "id": "p2576",
    "name": "Tomáš Chorý",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Viktoria Plzeň",
    "age": 28,
    "stats": {
      "pace": 50,
      "shooting": 71,
      "passing": 58,
      "dribbling": 52,
      "defending": 20,
      "physical": 76
    }
  },
  {
    "id": "p2644",
    "name": "Pascal Struijk",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Leeds United",
    "age": 24,
    "stats": {
      "pace": 59,
      "shooting": 39,
      "passing": 62,
      "dribbling": 60,
      "defending": 58,
      "physical": 76
    }
  },
  {
    "id": "p2660",
    "name": "Iborra",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Levante UD",
    "age": 35,
    "stats": {
      "pace": 51,
      "shooting": 66,
      "passing": 71,
      "dribbling": 57,
      "defending": 54,
      "physical": 77
    }
  },
  {
    "id": "p3022",
    "name": "Baptiste Santamaria",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Stade Rennais FC",
    "age": 28,
    "stats": {
      "pace": 49,
      "shooting": 65,
      "passing": 73,
      "dribbling": 71,
      "defending": 56,
      "physical": 73
    }
  },
  {
    "id": "p3072",
    "name": "Ola Solbakken",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Serie A",
    "rating": 76,
    "club": "Roma",
    "age": 24,
    "stats": {
      "pace": 85,
      "shooting": 64,
      "passing": 65,
      "dribbling": 74,
      "defending": 26,
      "physical": 66
    }
  },
  {
    "id": "p3166",
    "name": "Chiquinho",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "SL Benfica",
    "age": 28,
    "stats": {
      "pace": 74,
      "shooting": 71,
      "passing": 75,
      "dribbling": 77,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p3178",
    "name": "Arnaud Kalimuendo",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Stade Rennais FC",
    "age": 21,
    "stats": {
      "pace": 82,
      "shooting": 75,
      "passing": 57,
      "dribbling": 78,
      "defending": 15,
      "physical": 63
    }
  },
  {
    "id": "p3207",
    "name": "Lukáš Kalvach",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Viktoria Plzeň",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 65,
      "passing": 74,
      "dribbling": 74,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p3240",
    "name": "James Ward-Prowse",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Southampton",
    "age": 28,
    "stats": {
      "pace": 60,
      "shooting": 70,
      "passing": 85,
      "dribbling": 77,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p3280",
    "name": "Fafà Picault",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Nashville SC",
    "age": 32,
    "stats": {
      "pace": 87,
      "shooting": 65,
      "passing": 62,
      "dribbling": 75,
      "defending": 23,
      "physical": 61
    }
  },
  {
    "id": "p3301",
    "name": "Ivan Ordets",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ukraine",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 76,
    "club": "VfL Bochum",
    "age": 31,
    "stats": {
      "pace": 60,
      "shooting": 59,
      "passing": 51,
      "dribbling": 46,
      "defending": 56,
      "physical": 75
    }
  },
  {
    "id": "p3342",
    "name": "Kaoru Mitoma",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Brighton",
    "age": 26,
    "stats": {
      "pace": 84,
      "shooting": 70,
      "passing": 69,
      "dribbling": 82,
      "defending": 43,
      "physical": 64
    }
  },
  {
    "id": "p3347",
    "name": "Roni Gameira",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Athletico-PR",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 74,
      "passing": 57,
      "dribbling": 72,
      "defending": 23,
      "physical": 59
    }
  },
  {
    "id": "p3392",
    "name": "Kamil Jóźwiak",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Charlotte FC",
    "age": 25,
    "stats": {
      "pace": 85,
      "shooting": 53,
      "passing": 61,
      "dribbling": 77,
      "defending": 28,
      "physical": 59
    }
  },
  {
    "id": "p3489",
    "name": "Danylo Ignatenko",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ukraine",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Bordeaux",
    "age": 26,
    "stats": {
      "pace": 51,
      "shooting": 52,
      "passing": 70,
      "dribbling": 61,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p3514",
    "name": "Riechedly Bazoer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "AZ",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 71,
      "passing": 77,
      "dribbling": 76,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p3633",
    "name": "Giorgi Tsitaishvili",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Georgia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Lech Poznań",
    "age": 22,
    "stats": {
      "pace": 87,
      "shooting": 55,
      "passing": 62,
      "dribbling": 81,
      "defending": 25,
      "physical": 46
    }
  },
  {
    "id": "p3676",
    "name": "Martín Rodríguez",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "D.C. United",
    "age": 29,
    "stats": {
      "pace": 83,
      "shooting": 61,
      "passing": 68,
      "dribbling": 76,
      "defending": 33,
      "physical": 62
    }
  },
  {
    "id": "p3751",
    "name": "Jamie Maclaren",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Australia",
    "age": 30,
    "stats": {
      "pace": 82,
      "shooting": 71,
      "passing": 62,
      "dribbling": 77,
      "defending": 27,
      "physical": 80
    }
  },
  {
    "id": "p3784",
    "name": "Portu",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Getafe CF",
    "age": 31,
    "stats": {
      "pace": 87,
      "shooting": 74,
      "passing": 73,
      "dribbling": 79,
      "defending": 41,
      "physical": 78
    }
  },
  {
    "id": "p3817",
    "name": "Danny Welbeck",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Brighton",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 71,
      "passing": 67,
      "dribbling": 71,
      "defending": 26,
      "physical": 70
    }
  },
  {
    "id": "p3931",
    "name": "Pepe Reina",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 76,
    "club": "Villarreal CF",
    "age": 41,
    "stats": {
      "pace": 46,
      "shooting": 25,
      "passing": 38,
      "dribbling": 36,
      "defending": 17,
      "physical": 52
    }
  },
  {
    "id": "p4211",
    "name": "Morgan Gibbs-White",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Nott'm Forest",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 71,
      "passing": 74,
      "dribbling": 79,
      "defending": 43,
      "physical": 65
    }
  },
  {
    "id": "p4227",
    "name": "Ryan Yates",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Nott'm Forest",
    "age": 25,
    "stats": {
      "pace": 62,
      "shooting": 57,
      "passing": 62,
      "dribbling": 63,
      "defending": 54,
      "physical": 85
    }
  },
  {
    "id": "p4231",
    "name": "Luiz Gustavo Dias",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 76,
    "club": "Al Nassr",
    "age": 36,
    "stats": {
      "pace": 53,
      "shooting": 66,
      "passing": 69,
      "dribbling": 67,
      "defending": 57,
      "physical": 79
    }
  },
  {
    "id": "p4335",
    "name": "Kevin Mac Allister",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Argentinos Jrs.",
    "age": 25,
    "stats": {
      "pace": 77,
      "shooting": 51,
      "passing": 63,
      "dribbling": 75,
      "defending": 55,
      "physical": 82
    }
  },
  {
    "id": "p4344",
    "name": "David Raya",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Brentford",
    "age": 27,
    "stats": {
      "pace": 55,
      "shooting": 28,
      "passing": 48,
      "dribbling": 43,
      "defending": 10,
      "physical": 43
    }
  },
  {
    "id": "p4378",
    "name": "Nahuel Leiva",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Śląsk Wrocław",
    "age": 26,
    "stats": {
      "pace": 85,
      "shooting": 68,
      "passing": 66,
      "dribbling": 78,
      "defending": 19,
      "physical": 61
    }
  },
  {
    "id": "p4463",
    "name": "Deniz Undav",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Brighton",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 79,
      "passing": 70,
      "dribbling": 74,
      "defending": 21,
      "physical": 70
    }
  },
  {
    "id": "p4573",
    "name": "Lukas Nmecha",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 76,
    "club": "VfL Wolfsburg",
    "age": 24,
    "stats": {
      "pace": 82,
      "shooting": 75,
      "passing": 65,
      "dribbling": 74,
      "defending": 24,
      "physical": 77
    }
  },
  {
    "id": "p4578",
    "name": "Anastasios Bakasetas",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Trabzonspor",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 79,
      "passing": 77,
      "dribbling": 74,
      "defending": 40,
      "physical": 73
    }
  },
  {
    "id": "p4619",
    "name": "Massimo Coda",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 76,
    "club": "Genoa",
    "age": 34,
    "stats": {
      "pace": 61,
      "shooting": 72,
      "passing": 54,
      "dribbling": 68,
      "defending": 15,
      "physical": 61
    }
  },
  {
    "id": "p4629",
    "name": "Raúl Guti",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Elche CF",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 66,
      "passing": 70,
      "dribbling": 70,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p4702",
    "name": "Martin Braithwaite",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "RCD Espanyol",
    "age": 32,
    "stats": {
      "pace": 81,
      "shooting": 75,
      "passing": 71,
      "dribbling": 77,
      "defending": 21,
      "physical": 76
    }
  },
  {
    "id": "p4704",
    "name": "Jean-Pierre Nsame",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "BSC Young Boys",
    "age": 30,
    "stats": {
      "pace": 77,
      "shooting": 75,
      "passing": 52,
      "dribbling": 67,
      "defending": 13,
      "physical": 79
    }
  },
  {
    "id": "p4711",
    "name": "Catena",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 76,
    "club": "Rayo Vallecano",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 38,
      "passing": 60,
      "dribbling": 53,
      "defending": 58,
      "physical": 79
    }
  },
  {
    "id": "p4712",
    "name": "Iván Marcone",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Independiente",
    "age": 33,
    "stats": {
      "pace": 46,
      "shooting": 61,
      "passing": 74,
      "dribbling": 65,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p4742",
    "name": "Neal Maupay",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Premier League",
    "rating": 76,
    "club": "Everton",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 76,
      "passing": 66,
      "dribbling": 75,
      "defending": 29,
      "physical": 71
    }
  },
  {
    "id": "p4777",
    "name": "Ion Gheorghe",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Romania",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "Sepsi OSK",
    "age": 23,
    "stats": {
      "pace": 87,
      "shooting": 59,
      "passing": 64,
      "dribbling": 75,
      "defending": 31,
      "physical": 64
    }
  },
  {
    "id": "p4808",
    "name": "Oumar Solet",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "RB Salzburg",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 43,
      "passing": 58,
      "dribbling": 60,
      "defending": 55,
      "physical": 79
    }
  },
  {
    "id": "p4814",
    "name": "Erik Sviatchenko",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "FC Midtjylland",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 51,
      "passing": 63,
      "dribbling": 65,
      "defending": 55,
      "physical": 83
    }
  },
  {
    "id": "p4831",
    "name": "Jean-Paul Boëtius",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 76,
    "club": "Hertha Berlin",
    "age": 29,
    "stats": {
      "pace": 73,
      "shooting": 71,
      "passing": 73,
      "dribbling": 79,
      "defending": 31,
      "physical": 65
    }
  },
  {
    "id": "p4922",
    "name": "Benoît Badiashile",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 76,
    "club": "Chelsea",
    "age": 22,
    "stats": {
      "pace": 60,
      "shooting": 47,
      "passing": 68,
      "dribbling": 51,
      "defending": 58,
      "physical": 74
    }
  },
  {
    "id": "p4940",
    "name": "Petros Mantalos",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "AEK Athens",
    "age": 32,
    "stats": {
      "pace": 73,
      "shooting": 68,
      "passing": 79,
      "dribbling": 78,
      "defending": 38,
      "physical": 65
    }
  },
  {
    "id": "p4955",
    "name": "Bart Ramselaar",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "FC Utrecht",
    "age": 27,
    "stats": {
      "pace": 83,
      "shooting": 71,
      "passing": 68,
      "dribbling": 77,
      "defending": 36,
      "physical": 65
    }
  },
  {
    "id": "p4958",
    "name": "Joel Mvuka",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "FK Bodø/Glimt",
    "age": 20,
    "stats": {
      "pace": 89,
      "shooting": 50,
      "passing": 58,
      "dribbling": 79,
      "defending": 29,
      "physical": 48
    }
  },
  {
    "id": "p5002",
    "name": "Serhiy Sydorchuk",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ukraine",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Dynamo Kyiv",
    "age": 32,
    "stats": {
      "pace": 67,
      "shooting": 71,
      "passing": 68,
      "dribbling": 62,
      "defending": 55,
      "physical": 70
    }
  },
  {
    "id": "p5124",
    "name": "Zeke Larrondo",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Bolivia",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "Always Ready",
    "age": 31,
    "stats": {
      "pace": 86,
      "shooting": 56,
      "passing": 61,
      "dribbling": 76,
      "defending": 25,
      "physical": 56
    }
  },
  {
    "id": "p5181",
    "name": "Marco Silvestri",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 76,
    "club": "Udinese",
    "age": 32,
    "stats": {
      "pace": 60,
      "shooting": 25,
      "passing": 25,
      "dribbling": 34,
      "defending": 11,
      "physical": 50
    }
  },
  {
    "id": "p5292",
    "name": "Paolo Guerrero",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Peru",
    "era": "Legends",
    "league": "Other",
    "rating": 76,
    "club": "Racing Club",
    "age": 39,
    "stats": {
      "pace": 53,
      "shooting": 76,
      "passing": 70,
      "dribbling": 66,
      "defending": 19,
      "physical": 61
    }
  },
  {
    "id": "p5384",
    "name": "Castello Lukeba",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 76,
    "club": "OL",
    "age": 20,
    "stats": {
      "pace": 75,
      "shooting": 44,
      "passing": 69,
      "dribbling": 69,
      "defending": 58,
      "physical": 74
    }
  },
  {
    "id": "p5491",
    "name": "Vítor Tormena",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 76,
    "club": "SC Braga",
    "age": 27,
    "stats": {
      "pace": 60,
      "shooting": 36,
      "passing": 60,
      "dribbling": 52,
      "defending": 58,
      "physical": 68
    }
  },
  {
    "id": "p72",
    "name": "Tolga Ciğerci",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "Hertha Berlin",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 70,
      "dribbling": 66,
      "defending": 53,
      "physical": 77
    }
  },
  {
    "id": "p87",
    "name": "Dan-Axel Zagadou",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "VfB Stuttgart",
    "age": 24,
    "stats": {
      "pace": 53,
      "shooting": 36,
      "passing": 62,
      "dribbling": 43,
      "defending": 57,
      "physical": 73
    }
  },
  {
    "id": "p131",
    "name": "Mikkel Damsgaard",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 75,
    "club": "Brentford",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 66,
      "passing": 70,
      "dribbling": 83,
      "defending": 33,
      "physical": 65
    }
  },
  {
    "id": "p182",
    "name": "Yusuf Lawal",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Arouca",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 55,
      "passing": 62,
      "dribbling": 74,
      "defending": 18,
      "physical": 68
    }
  },
  {
    "id": "p332",
    "name": "Luiz Araújo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Atlanta United",
    "age": 27,
    "stats": {
      "pace": 88,
      "shooting": 70,
      "passing": 71,
      "dribbling": 82,
      "defending": 30,
      "physical": 58
    }
  },
  {
    "id": "p372",
    "name": "Amos Pieper",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "SV Werder Bremen",
    "age": 25,
    "stats": {
      "pace": 65,
      "shooting": 32,
      "passing": 53,
      "dribbling": 51,
      "defending": 57,
      "physical": 71
    }
  },
  {
    "id": "p445",
    "name": "Wanderson",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "Pohang Steelers",
    "age": 34,
    "stats": {
      "pace": 89,
      "shooting": 61,
      "passing": 61,
      "dribbling": 73,
      "defending": 41,
      "physical": 73
    }
  },
  {
    "id": "p459",
    "name": "Lucas Martínez Quarta",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 75,
    "club": "Fiorentina",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 56,
      "passing": 71,
      "dribbling": 70,
      "defending": 56,
      "physical": 80
    }
  },
  {
    "id": "p549",
    "name": "Odilon Kossounou",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ivory Coast",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 75,
    "club": "Leverkusen",
    "age": 22,
    "stats": {
      "pace": 76,
      "shooting": 33,
      "passing": 63,
      "dribbling": 64,
      "defending": 58,
      "physical": 76
    }
  },
  {
    "id": "p554",
    "name": "László Bénes",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Hamburger SV",
    "age": 25,
    "stats": {
      "pace": 61,
      "shooting": 73,
      "passing": 78,
      "dribbling": 76,
      "defending": 38,
      "physical": 61
    }
  },
  {
    "id": "p623",
    "name": "Aleñá",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Getafe CF",
    "age": 25,
    "stats": {
      "pace": 69,
      "shooting": 62,
      "passing": 75,
      "dribbling": 73,
      "defending": 45,
      "physical": 58
    }
  },
  {
    "id": "p648",
    "name": "Bertrand Traoré",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Burkina Faso",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "Aston Villa",
    "age": 27,
    "stats": {
      "pace": 77,
      "shooting": 72,
      "passing": 72,
      "dribbling": 78,
      "defending": 33,
      "physical": 66
    }
  },
  {
    "id": "p698",
    "name": "Sikou Niakaté",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "SC Braga",
    "age": 24,
    "stats": {
      "pace": 72,
      "shooting": 39,
      "passing": 50,
      "dribbling": 65,
      "defending": 56,
      "physical": 80
    }
  },
  {
    "id": "p700",
    "name": "John Lundstram",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Rangers",
    "age": 29,
    "stats": {
      "pace": 63,
      "shooting": 71,
      "passing": 73,
      "dribbling": 70,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p805",
    "name": "Salvatore Sirigu",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 75,
    "club": "Fiorentina",
    "age": 36,
    "stats": {
      "pace": 46,
      "shooting": 23,
      "passing": 30,
      "dribbling": 35,
      "defending": 11,
      "physical": 51
    }
  },
  {
    "id": "p870",
    "name": "Gaëtan Perrin",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "AJ Auxerre",
    "age": 27,
    "stats": {
      "pace": 83,
      "shooting": 64,
      "passing": 64,
      "dribbling": 79,
      "defending": 21,
      "physical": 62
    }
  },
  {
    "id": "p924",
    "name": "Thilo Kehrer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "West Ham",
    "age": 26,
    "stats": {
      "pace": 73,
      "shooting": 44,
      "passing": 66,
      "dribbling": 65,
      "defending": 58,
      "physical": 78
    }
  },
  {
    "id": "p1025",
    "name": "Jordan Ferri",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "Montpellier",
    "age": 31,
    "stats": {
      "pace": 57,
      "shooting": 66,
      "passing": 77,
      "dribbling": 75,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p1070",
    "name": "Tiago Djaló",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 75,
    "club": "LOSC Lille",
    "age": 23,
    "stats": {
      "pace": 81,
      "shooting": 42,
      "passing": 62,
      "dribbling": 61,
      "defending": 57,
      "physical": 74
    }
  },
  {
    "id": "p1164",
    "name": "Bruno Valdez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Boca Juniors",
    "age": 30,
    "stats": {
      "pace": 56,
      "shooting": 38,
      "passing": 58,
      "dribbling": 53,
      "defending": 55,
      "physical": 82
    }
  },
  {
    "id": "p1197",
    "name": "Roland Sallai",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "SC Freiburg",
    "age": 26,
    "stats": {
      "pace": 75,
      "shooting": 68,
      "passing": 72,
      "dribbling": 78,
      "defending": 29,
      "physical": 65
    }
  },
  {
    "id": "p1224",
    "name": "Robson Denho",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Atlético-GO",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 56,
      "passing": 71,
      "dribbling": 63,
      "defending": 55,
      "physical": 76
    }
  },
  {
    "id": "p1280",
    "name": "Richard Ortiz",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Olimpia",
    "age": 33,
    "stats": {
      "pace": 73,
      "shooting": 68,
      "passing": 67,
      "dribbling": 76,
      "defending": 53,
      "physical": 82
    }
  },
  {
    "id": "p1430",
    "name": "Pacheco",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "RCD Espanyol",
    "age": 31,
    "stats": {
      "pace": 45,
      "shooting": 24,
      "passing": 31,
      "dribbling": 36,
      "defending": 14,
      "physical": 55
    }
  },
  {
    "id": "p1454",
    "name": "Úmaro Embaló",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "Fortuna Sittard",
    "age": 22,
    "stats": {
      "pace": 84,
      "shooting": 62,
      "passing": 63,
      "dribbling": 78,
      "defending": 20,
      "physical": 61
    }
  },
  {
    "id": "p1711",
    "name": "Hendrik Van Crombrugge",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "RSC Anderlecht",
    "age": 30,
    "stats": {
      "pace": 37,
      "shooting": 25,
      "passing": 43,
      "dribbling": 40,
      "defending": 11,
      "physical": 54
    }
  },
  {
    "id": "p1722",
    "name": "Dario Špikić",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Dinamo Zagreb",
    "age": 24,
    "stats": {
      "pace": 84,
      "shooting": 68,
      "passing": 64,
      "dribbling": 74,
      "defending": 34,
      "physical": 62
    }
  },
  {
    "id": "p1747",
    "name": "Cristian Galano",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Bari",
    "age": 32,
    "stats": {
      "pace": 82,
      "shooting": 69,
      "passing": 63,
      "dribbling": 78,
      "defending": 14,
      "physical": 69
    }
  },
  {
    "id": "p1764",
    "name": "Tarik Tissoudali",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "KAA Gent",
    "age": 30,
    "stats": {
      "pace": 77,
      "shooting": 73,
      "passing": 67,
      "dribbling": 83,
      "defending": 17,
      "physical": 64
    }
  },
  {
    "id": "p1814",
    "name": "Jawad El Yamiq",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "R. Valladolid CF",
    "age": 31,
    "stats": {
      "pace": 86,
      "shooting": 47,
      "passing": 53,
      "dribbling": 62,
      "defending": 56,
      "physical": 81
    }
  },
  {
    "id": "p1903",
    "name": "Oussama Idrissi",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Feyenoord",
    "age": 27,
    "stats": {
      "pace": 79,
      "shooting": 77,
      "passing": 68,
      "dribbling": 77,
      "defending": 24,
      "physical": 60
    }
  },
  {
    "id": "p1949",
    "name": "Dener",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 75,
    "club": "Al Tai",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 67,
      "passing": 67,
      "dribbling": 68,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p1961",
    "name": "Guilson Paiva",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Flamengo",
    "age": 27,
    "stats": {
      "pace": 84,
      "shooting": 69,
      "passing": 75,
      "dribbling": 77,
      "defending": 34,
      "physical": 64
    }
  },
  {
    "id": "p1964",
    "name": "Altay Bayındır",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Fenerbahçe",
    "age": 25,
    "stats": {
      "pace": 31,
      "shooting": 23,
      "passing": 36,
      "dribbling": 25,
      "defending": 9,
      "physical": 47
    }
  },
  {
    "id": "p1972",
    "name": "Alexander Nübel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "AS Monaco",
    "age": 26,
    "stats": {
      "pace": 48,
      "shooting": 26,
      "passing": 24,
      "dribbling": 33,
      "defending": 12,
      "physical": 48
    }
  },
  {
    "id": "p2049",
    "name": "Liu Binbin",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "China PR",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Shandong Taishan",
    "age": 30,
    "stats": {
      "pace": 84,
      "shooting": 64,
      "passing": 64,
      "dribbling": 72,
      "defending": 30,
      "physical": 67
    }
  },
  {
    "id": "p2083",
    "name": "Enzo Copetti",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Charlotte FC",
    "age": 27,
    "stats": {
      "pace": 82,
      "shooting": 68,
      "passing": 64,
      "dribbling": 71,
      "defending": 36,
      "physical": 88
    }
  },
  {
    "id": "p2161",
    "name": "Romarinho",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 75,
    "club": "Al Ittihad",
    "age": 32,
    "stats": {
      "pace": 85,
      "shooting": 72,
      "passing": 71,
      "dribbling": 83,
      "defending": 18,
      "physical": 66
    }
  },
  {
    "id": "p2178",
    "name": "Michel Cruceiro",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Flamengo",
    "age": 31,
    "stats": {
      "pace": 60,
      "shooting": 66,
      "passing": 67,
      "dribbling": 60,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p2184",
    "name": "Tosin Adarabioyo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "Fulham",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 30,
      "passing": 59,
      "dribbling": 57,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p2202",
    "name": "Fran Beltrán",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "RC Celta",
    "age": 24,
    "stats": {
      "pace": 60,
      "shooting": 57,
      "passing": 79,
      "dribbling": 78,
      "defending": 60,
      "physical": 64
    }
  },
  {
    "id": "p2220",
    "name": "Ibrahim Traoré",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ivory Coast",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "Slavia Praha",
    "age": 34,
    "stats": {
      "pace": 62,
      "shooting": 66,
      "passing": 72,
      "dribbling": 73,
      "defending": 53,
      "physical": 78
    }
  },
  {
    "id": "p2471",
    "name": "Jesus Ferreira",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "FC Dallas",
    "age": 22,
    "stats": {
      "pace": 82,
      "shooting": 72,
      "passing": 72,
      "dribbling": 80,
      "defending": 32,
      "physical": 70
    }
  },
  {
    "id": "p2497",
    "name": "Callum Hudson-Odoi",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 75,
    "club": "Leverkusen",
    "age": 22,
    "stats": {
      "pace": 81,
      "shooting": 66,
      "passing": 74,
      "dribbling": 81,
      "defending": 35,
      "physical": 60
    }
  },
  {
    "id": "p2508",
    "name": "David Martínez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "River Plate",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 56,
      "passing": 69,
      "dribbling": 67,
      "defending": 56,
      "physical": 79
    }
  },
  {
    "id": "p2704",
    "name": "Gabriel Ávalos",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Argentinos Jrs.",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 71,
      "passing": 63,
      "dribbling": 72,
      "defending": 29,
      "physical": 80
    }
  },
  {
    "id": "p2739",
    "name": "Teddy Teuma",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Malta",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "R. Union St.-G.",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 77,
      "passing": 78,
      "dribbling": 74,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p2804",
    "name": "Rafał Gikiewicz",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Poland",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 75,
    "club": "FC Augsburg",
    "age": 35,
    "stats": {
      "pace": 28,
      "shooting": 22,
      "passing": 28,
      "dribbling": 29,
      "defending": 10,
      "physical": 44
    }
  },
  {
    "id": "p2830",
    "name": "David Okereke",
    "position": "LW",
    "positions": [
      "LW",
      "RW"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Cremonese",
    "age": 26,
    "stats": {
      "pace": 87,
      "shooting": 64,
      "passing": 52,
      "dribbling": 76,
      "defending": 12,
      "physical": 70
    }
  },
  {
    "id": "p2875",
    "name": "Jeong Jae Hee",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Pohang Steelers",
    "age": 29,
    "stats": {
      "pace": 89,
      "shooting": 61,
      "passing": 57,
      "dribbling": 73,
      "defending": 35,
      "physical": 64
    }
  },
  {
    "id": "p2879",
    "name": "André Ramalho",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "PSV",
    "age": 31,
    "stats": {
      "pace": 47,
      "shooting": 60,
      "passing": 66,
      "dribbling": 66,
      "defending": 56,
      "physical": 78
    }
  },
  {
    "id": "p3198",
    "name": "Georgios Giakoumakis",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Celtic",
    "age": 28,
    "stats": {
      "pace": 70,
      "shooting": 73,
      "passing": 48,
      "dribbling": 65,
      "defending": 15,
      "physical": 76
    }
  },
  {
    "id": "p3222",
    "name": "Takumi Minamino",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "AS Monaco",
    "age": 28,
    "stats": {
      "pace": 79,
      "shooting": 73,
      "passing": 68,
      "dribbling": 84,
      "defending": 28,
      "physical": 67
    }
  },
  {
    "id": "p3259",
    "name": "Valentin Gheorghe",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Ümraniyespor",
    "age": 26,
    "stats": {
      "pace": 84,
      "shooting": 66,
      "passing": 64,
      "dribbling": 74,
      "defending": 31,
      "physical": 65
    }
  },
  {
    "id": "p3260",
    "name": "Martin Baturina",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "Dinamo Zagreb",
    "age": 20,
    "stats": {
      "pace": 76,
      "shooting": 67,
      "passing": 72,
      "dribbling": 78,
      "defending": 44,
      "physical": 63
    }
  },
  {
    "id": "p3348",
    "name": "Stefan Mitrović",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Getafe CF",
    "age": 33,
    "stats": {
      "pace": 31,
      "shooting": 37,
      "passing": 54,
      "dribbling": 45,
      "defending": 54,
      "physical": 79
    }
  },
  {
    "id": "p3378",
    "name": "Andrei Girotto",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "FC Nantes",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 67,
      "passing": 66,
      "dribbling": 65,
      "defending": 60,
      "physical": 74
    }
  },
  {
    "id": "p3391",
    "name": "Onel Hernández",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Cuba",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Norwich",
    "age": 30,
    "stats": {
      "pace": 86,
      "shooting": 65,
      "passing": 61,
      "dribbling": 77,
      "defending": 18,
      "physical": 65
    }
  },
  {
    "id": "p3474",
    "name": "Issa Diop",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "Fulham",
    "age": 26,
    "stats": {
      "pace": 63,
      "shooting": 40,
      "passing": 53,
      "dribbling": 54,
      "defending": 59,
      "physical": 77
    }
  },
  {
    "id": "p3503",
    "name": "Fawaz Al Sagour",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 75,
    "club": "Al Shabab",
    "age": 27,
    "stats": {
      "pace": 91,
      "shooting": 43,
      "passing": 58,
      "dribbling": 72,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p3622",
    "name": "Arijan Ademi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "North Macedonia",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Dinamo Zagreb",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 61,
      "passing": 66,
      "dribbling": 68,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p3672",
    "name": "Gonzalo Plata",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Ecuador",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "R. Valladolid CF",
    "age": 22,
    "stats": {
      "pace": 89,
      "shooting": 70,
      "passing": 69,
      "dribbling": 84,
      "defending": 31,
      "physical": 62
    }
  },
  {
    "id": "p3678",
    "name": "Matt Hedges",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Toronto FC",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 28,
      "passing": 52,
      "dribbling": 53,
      "defending": 52,
      "physical": 80
    }
  },
  {
    "id": "p3794",
    "name": "Marco Richter",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "Hertha Berlin",
    "age": 25,
    "stats": {
      "pace": 76,
      "shooting": 74,
      "passing": 68,
      "dribbling": 79,
      "defending": 25,
      "physical": 57
    }
  },
  {
    "id": "p3809",
    "name": "Alexander Callens",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Girona FC",
    "age": 31,
    "stats": {
      "pace": 70,
      "shooting": 48,
      "passing": 49,
      "dribbling": 58,
      "defending": 57,
      "physical": 78
    }
  },
  {
    "id": "p3851",
    "name": "Ilie Sánchez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "LAFC",
    "age": 32,
    "stats": {
      "pace": 50,
      "shooting": 47,
      "passing": 68,
      "dribbling": 70,
      "defending": 51,
      "physical": 79
    }
  },
  {
    "id": "p3942",
    "name": "Igor",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 75,
    "club": "Fiorentina",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 32,
      "passing": 50,
      "dribbling": 60,
      "defending": 58,
      "physical": 80
    }
  },
  {
    "id": "p3943",
    "name": "Matt Crooks",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Middlesbrough",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 65,
      "passing": 64,
      "dribbling": 63,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p3992",
    "name": "Kelechi Iheanacho",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Leicester City",
    "age": 26,
    "stats": {
      "pace": 72,
      "shooting": 77,
      "passing": 69,
      "dribbling": 75,
      "defending": 25,
      "physical": 67
    }
  },
  {
    "id": "p3994",
    "name": "Joe Ward",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Peterborough",
    "age": 28,
    "stats": {
      "pace": 83,
      "shooting": 53,
      "passing": 63,
      "dribbling": 73,
      "defending": 41,
      "physical": 52
    }
  },
  {
    "id": "p4025",
    "name": "Ryan Gauld",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Whitecaps FC",
    "age": 27,
    "stats": {
      "pace": 84,
      "shooting": 65,
      "passing": 76,
      "dribbling": 86,
      "defending": 38,
      "physical": 62
    }
  },
  {
    "id": "p4052",
    "name": "Jordan Morris",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Sounders FC",
    "age": 28,
    "stats": {
      "pace": 84,
      "shooting": 66,
      "passing": 67,
      "dribbling": 72,
      "defending": 23,
      "physical": 80
    }
  },
  {
    "id": "p4056",
    "name": "Franco Vázquez",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "Parma",
    "age": 34,
    "stats": {
      "pace": 46,
      "shooting": 79,
      "passing": 77,
      "dribbling": 66,
      "defending": 44,
      "physical": 68
    }
  },
  {
    "id": "p4177",
    "name": "Nyasha Mushekwi",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Zimbabwe",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "Zhejiang Pro",
    "age": 36,
    "stats": {
      "pace": 77,
      "shooting": 68,
      "passing": 52,
      "dribbling": 60,
      "defending": 21,
      "physical": 77
    }
  },
  {
    "id": "p4190",
    "name": "Pablo Fornals",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "West Ham",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 75,
      "passing": 79,
      "dribbling": 78,
      "defending": 54,
      "physical": 68
    }
  },
  {
    "id": "p4203",
    "name": "Omar Mascarell",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Elche CF",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 64,
      "passing": 71,
      "dribbling": 74,
      "defending": 55,
      "physical": 72
    }
  },
  {
    "id": "p4204",
    "name": "Luca Waldschmidt",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "VfL Wolfsburg",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 76,
      "passing": 69,
      "dribbling": 77,
      "defending": 16,
      "physical": 61
    }
  },
  {
    "id": "p4214",
    "name": "Imrân Louza",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Watford",
    "age": 24,
    "stats": {
      "pace": 61,
      "shooting": 61,
      "passing": 73,
      "dribbling": 75,
      "defending": 49,
      "physical": 59
    }
  },
  {
    "id": "p4233",
    "name": "Stéphane Diarra",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "FC Lorient",
    "age": 24,
    "stats": {
      "pace": 86,
      "shooting": 54,
      "passing": 65,
      "dribbling": 78,
      "defending": 39,
      "physical": 56
    }
  },
  {
    "id": "p4419",
    "name": "Karol Świderski",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Charlotte FC",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 73,
      "passing": 61,
      "dribbling": 70,
      "defending": 18,
      "physical": 67
    }
  },
  {
    "id": "p4423",
    "name": "Diego López",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 75,
    "club": "Rayo Vallecano",
    "age": 41,
    "stats": {
      "pace": 43,
      "shooting": 22,
      "passing": 29,
      "dribbling": 30,
      "defending": 11,
      "physical": 55
    }
  },
  {
    "id": "p4428",
    "name": "Samu Castillejo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Valencia CF",
    "age": 28,
    "stats": {
      "pace": 80,
      "shooting": 66,
      "passing": 72,
      "dribbling": 83,
      "defending": 31,
      "physical": 56
    }
  },
  {
    "id": "p4479",
    "name": "Elvis Rexhbeçaj",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 75,
    "club": "FC Augsburg",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 63,
      "passing": 72,
      "dribbling": 73,
      "defending": 49,
      "physical": 69
    }
  },
  {
    "id": "p4636",
    "name": "Carlos Augusto",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 75,
    "club": "Monza",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 65,
      "passing": 71,
      "dribbling": 68,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p4778",
    "name": "Facundo Farías",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "Colón",
    "age": 21,
    "stats": {
      "pace": 87,
      "shooting": 73,
      "passing": 70,
      "dribbling": 86,
      "defending": 27,
      "physical": 68
    }
  },
  {
    "id": "p4870",
    "name": "Taxiarchis Fountas",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "D.C. United",
    "age": 27,
    "stats": {
      "pace": 89,
      "shooting": 75,
      "passing": 65,
      "dribbling": 82,
      "defending": 33,
      "physical": 72
    }
  },
  {
    "id": "p4920",
    "name": "Declan John",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Bolton",
    "age": 28,
    "stats": {
      "pace": 88,
      "shooting": 53,
      "passing": 59,
      "dribbling": 74,
      "defending": 43,
      "physical": 63
    }
  },
  {
    "id": "p4938",
    "name": "Nathan Ngoumou",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "M'gladbach",
    "age": 23,
    "stats": {
      "pace": 88,
      "shooting": 64,
      "passing": 64,
      "dribbling": 67,
      "defending": 21,
      "physical": 59
    }
  },
  {
    "id": "p4968",
    "name": "Armando Broja",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Albania",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 75,
    "club": "Chelsea",
    "age": 21,
    "stats": {
      "pace": 77,
      "shooting": 71,
      "passing": 53,
      "dribbling": 71,
      "defending": 19,
      "physical": 70
    }
  },
  {
    "id": "p5037",
    "name": "Franck Honorat",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "Stade Brestois 29",
    "age": 27,
    "stats": {
      "pace": 80,
      "shooting": 76,
      "passing": 72,
      "dribbling": 75,
      "defending": 32,
      "physical": 65
    }
  },
  {
    "id": "p5046",
    "name": "Husein Balić",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "SCR Altach",
    "age": 27,
    "stats": {
      "pace": 89,
      "shooting": 66,
      "passing": 66,
      "dribbling": 69,
      "defending": 22,
      "physical": 60
    }
  },
  {
    "id": "p5048",
    "name": "Marcos Rojo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Boca Juniors",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 60,
      "passing": 66,
      "dribbling": 65,
      "defending": 58,
      "physical": 80
    }
  },
  {
    "id": "p5131",
    "name": "Nathan Redmond",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Beşiktaş",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 71,
      "passing": 69,
      "dribbling": 83,
      "defending": 22,
      "physical": 49
    }
  },
  {
    "id": "p5138",
    "name": "Helton Leite",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Antalyaspor",
    "age": 32,
    "stats": {
      "pace": 53,
      "shooting": 21,
      "passing": 19,
      "dribbling": 28,
      "defending": 7,
      "physical": 50
    }
  },
  {
    "id": "p5235",
    "name": "Rubén Pérez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "Panathinaikos",
    "age": 34,
    "stats": {
      "pace": 50,
      "shooting": 58,
      "passing": 71,
      "dribbling": 65,
      "defending": 56,
      "physical": 75
    }
  },
  {
    "id": "p5286",
    "name": "Julien Laporte",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 75,
    "club": "FC Lorient",
    "age": 29,
    "stats": {
      "pace": 45,
      "shooting": 31,
      "passing": 45,
      "dribbling": 50,
      "defending": 56,
      "physical": 82
    }
  },
  {
    "id": "p5294",
    "name": "Matt O'Riley",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "Celtic",
    "age": 22,
    "stats": {
      "pace": 67,
      "shooting": 62,
      "passing": 73,
      "dribbling": 71,
      "defending": 47,
      "physical": 66
    }
  },
  {
    "id": "p5321",
    "name": "Ryan Kent",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Rangers",
    "age": 26,
    "stats": {
      "pace": 90,
      "shooting": 72,
      "passing": 72,
      "dribbling": 83,
      "defending": 31,
      "physical": 63
    }
  },
  {
    "id": "p5344",
    "name": "Fernando Martínez Rubio",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "UD Almería",
    "age": 33,
    "stats": {
      "pace": 48,
      "shooting": 27,
      "passing": 31,
      "dribbling": 34,
      "defending": 14,
      "physical": 47
    }
  },
  {
    "id": "p5523",
    "name": "Léandre Tawamba",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 75,
    "club": "Al Taawoun",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 73,
      "passing": 55,
      "dribbling": 59,
      "defending": 11,
      "physical": 79
    }
  },
  {
    "id": "p5533",
    "name": "Armando Obispo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "PSV",
    "age": 24,
    "stats": {
      "pace": 76,
      "shooting": 44,
      "passing": 59,
      "dribbling": 67,
      "defending": 56,
      "physical": 79
    }
  },
  {
    "id": "p5554",
    "name": "Mariano",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Dominican Republic",
    "era": "Modern",
    "league": "La Liga",
    "rating": 75,
    "club": "Real Madrid",
    "age": 30,
    "stats": {
      "pace": 74,
      "shooting": 76,
      "passing": 58,
      "dribbling": 72,
      "defending": 30,
      "physical": 81
    }
  },
  {
    "id": "p5570",
    "name": "Jessé Ledeiro",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 75,
    "club": "RB Bragantino",
    "age": 23,
    "stats": {
      "pace": 69,
      "shooting": 63,
      "passing": 74,
      "dribbling": 73,
      "defending": 33,
      "physical": 61
    }
  },
  {
    "id": "p5580",
    "name": "Miguel Veloso",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Legends",
    "league": "Serie A",
    "rating": 75,
    "club": "Hellas Verona",
    "age": 37,
    "stats": {
      "pace": 45,
      "shooting": 73,
      "passing": 80,
      "dribbling": 73,
      "defending": 49,
      "physical": 66
    }
  },
  {
    "id": "p5601",
    "name": "Kristoffer Zachariassen",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Ferencvárosi TC",
    "age": 29,
    "stats": {
      "pace": 74,
      "shooting": 68,
      "passing": 70,
      "dribbling": 71,
      "defending": 50,
      "physical": 78
    }
  },
  {
    "id": "p5624",
    "name": "Leroy Fer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 75,
    "club": "Alanyaspor",
    "age": 33,
    "stats": {
      "pace": 64,
      "shooting": 67,
      "passing": 73,
      "dribbling": 65,
      "defending": 53,
      "physical": 80
    }
  },
  {
    "id": "p5669",
    "name": "Dominic Solanke",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 75,
    "club": "AFC Bournemouth",
    "age": 25,
    "stats": {
      "pace": 71,
      "shooting": 74,
      "passing": 64,
      "dribbling": 70,
      "defending": 17,
      "physical": 77
    }
  },
  {
    "id": "p5673",
    "name": "Sergio León",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 75,
    "club": "R. Valladolid CF",
    "age": 34,
    "stats": {
      "pace": 75,
      "shooting": 75,
      "passing": 65,
      "dribbling": 74,
      "defending": 22,
      "physical": 71
    }
  },
  {
    "id": "p149",
    "name": "Ashley Young",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Premier League",
    "rating": 74,
    "club": "Aston Villa",
    "age": 38,
    "stats": {
      "pace": 68,
      "shooting": 68,
      "passing": 76,
      "dribbling": 75,
      "defending": 57,
      "physical": 71
    }
  },
  {
    "id": "p165",
    "name": "Luiz Adriano",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Antalyaspor",
    "age": 36,
    "stats": {
      "pace": 71,
      "shooting": 75,
      "passing": 65,
      "dribbling": 74,
      "defending": 19,
      "physical": 65
    }
  },
  {
    "id": "p248",
    "name": "Kamal Miller",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "CF Montréal",
    "age": 26,
    "stats": {
      "pace": 82,
      "shooting": 46,
      "passing": 64,
      "dribbling": 60,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p273",
    "name": "Lee Gwang Hyeok",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Suwon FC",
    "age": 27,
    "stats": {
      "pace": 84,
      "shooting": 51,
      "passing": 57,
      "dribbling": 74,
      "defending": 23,
      "physical": 60
    }
  },
  {
    "id": "p309",
    "name": "Boadu Maxwell Acosty",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Suwon Samsung",
    "age": 31,
    "stats": {
      "pace": 83,
      "shooting": 63,
      "passing": 60,
      "dribbling": 73,
      "defending": 26,
      "physical": 64
    }
  },
  {
    "id": "p312",
    "name": "Amin Younes",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "FC Utrecht",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 67,
      "passing": 72,
      "dribbling": 85,
      "defending": 28,
      "physical": 58
    }
  },
  {
    "id": "p346",
    "name": "Walace",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Udinese",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 69,
      "passing": 69,
      "dribbling": 68,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p364",
    "name": "Cédric Brunner",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "FC Schalke 04",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 54,
      "passing": 66,
      "dribbling": 68,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p428",
    "name": "Munas Dabbur",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Israel",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "TSG Hoffenheim",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 74,
      "passing": 63,
      "dribbling": 76,
      "defending": 21,
      "physical": 70
    }
  },
  {
    "id": "p447",
    "name": "Mateo Carabajal",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Independiente DV",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 44,
      "passing": 62,
      "dribbling": 66,
      "defending": 54,
      "physical": 77
    }
  },
  {
    "id": "p491",
    "name": "Joshuando Sá",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Santos",
    "age": 27,
    "stats": {
      "pace": 73,
      "shooting": 43,
      "passing": 64,
      "dribbling": 63,
      "defending": 56,
      "physical": 67
    }
  },
  {
    "id": "p564",
    "name": "Hugo Guillamón",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 74,
    "club": "Valencia CF",
    "age": 23,
    "stats": {
      "pace": 58,
      "shooting": 51,
      "passing": 69,
      "dribbling": 65,
      "defending": 56,
      "physical": 73
    }
  },
  {
    "id": "p567",
    "name": "Emiliano Vecchio",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Racing Club",
    "age": 34,
    "stats": {
      "pace": 68,
      "shooting": 73,
      "passing": 77,
      "dribbling": 73,
      "defending": 46,
      "physical": 64
    }
  },
  {
    "id": "p640",
    "name": "Sander van de Streek",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "FC Utrecht",
    "age": 30,
    "stats": {
      "pace": 61,
      "shooting": 72,
      "passing": 68,
      "dribbling": 70,
      "defending": 43,
      "physical": 71
    }
  },
  {
    "id": "p676",
    "name": "Léo Dubois",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Galatasaray",
    "age": 28,
    "stats": {
      "pace": 70,
      "shooting": 62,
      "passing": 74,
      "dribbling": 69,
      "defending": 57,
      "physical": 71
    }
  },
  {
    "id": "p770",
    "name": "Benjamin Stambouli",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Adana Demirspor",
    "age": 33,
    "stats": {
      "pace": 50,
      "shooting": 49,
      "passing": 64,
      "dribbling": 66,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p827",
    "name": "Alberto Brignoli",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Panathinaikos",
    "age": 32,
    "stats": {
      "pace": 32,
      "shooting": 27,
      "passing": 38,
      "dribbling": 25,
      "defending": 13,
      "physical": 37
    }
  },
  {
    "id": "p852",
    "name": "Florian Neuhaus",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "M'gladbach",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 73,
      "passing": 79,
      "dribbling": 77,
      "defending": 51,
      "physical": 65
    }
  },
  {
    "id": "p919",
    "name": "Esteban Pavez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Colo-Colo",
    "age": 33,
    "stats": {
      "pace": 79,
      "shooting": 66,
      "passing": 68,
      "dribbling": 71,
      "defending": 51,
      "physical": 82
    }
  },
  {
    "id": "p940",
    "name": "Benjamín Berríos",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Everton de Viña",
    "age": 25,
    "stats": {
      "pace": 71,
      "shooting": 50,
      "passing": 66,
      "dribbling": 76,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p973",
    "name": "Moleiro",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "UD Las Palmas",
    "age": 19,
    "stats": {
      "pace": 77,
      "shooting": 63,
      "passing": 74,
      "dribbling": 80,
      "defending": 37,
      "physical": 61
    }
  },
  {
    "id": "p1018",
    "name": "Luis Vázquez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "Boca Juniors",
    "age": 22,
    "stats": {
      "pace": 70,
      "shooting": 67,
      "passing": 62,
      "dribbling": 69,
      "defending": 14,
      "physical": 70
    }
  },
  {
    "id": "p1036",
    "name": "Yari Verschaeren",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "RSC Anderlecht",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 70,
      "passing": 71,
      "dribbling": 83,
      "defending": 33,
      "physical": 54
    }
  },
  {
    "id": "p1039",
    "name": "Luciano Aued",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Unión",
    "age": 36,
    "stats": {
      "pace": 52,
      "shooting": 63,
      "passing": 74,
      "dribbling": 66,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p1168",
    "name": "Ben Godfrey",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Everton",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 46,
      "passing": 62,
      "dribbling": 65,
      "defending": 57,
      "physical": 78
    }
  },
  {
    "id": "p1170",
    "name": "Roman Neustädter",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Russia",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "KVC Westerlo",
    "age": 35,
    "stats": {
      "pace": 36,
      "shooting": 55,
      "passing": 65,
      "dribbling": 60,
      "defending": 55,
      "physical": 71
    }
  },
  {
    "id": "p1194",
    "name": "Garrido",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Cádiz CF",
    "age": 33,
    "stats": {
      "pace": 33,
      "shooting": 47,
      "passing": 56,
      "dribbling": 46,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p1220",
    "name": "Marvelous Nakamba",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Zimbabwe",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Luton Town",
    "age": 29,
    "stats": {
      "pace": 61,
      "shooting": 51,
      "passing": 64,
      "dribbling": 73,
      "defending": 57,
      "physical": 77
    }
  },
  {
    "id": "p1274",
    "name": "Charles Aránguiz",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Chile",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 74,
    "club": "Leverkusen",
    "age": 34,
    "stats": {
      "pace": 34,
      "shooting": 74,
      "passing": 79,
      "dribbling": 79,
      "defending": 57,
      "physical": 70
    }
  },
  {
    "id": "p1305",
    "name": "Francisco Pizzini",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Talleres",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 67,
      "passing": 72,
      "dribbling": 79,
      "defending": 27,
      "physical": 63
    }
  },
  {
    "id": "p1333",
    "name": "Paul Seguin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "Union Berlin",
    "age": 28,
    "stats": {
      "pace": 60,
      "shooting": 59,
      "passing": 71,
      "dribbling": 70,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p1340",
    "name": "Santiago Cáseres",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Vélez Sarsfield",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 56,
      "passing": 69,
      "dribbling": 72,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p1434",
    "name": "Gianluca Lapadula",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Cagliari",
    "age": 33,
    "stats": {
      "pace": 76,
      "shooting": 72,
      "passing": 55,
      "dribbling": 77,
      "defending": 13,
      "physical": 72
    }
  },
  {
    "id": "p1456",
    "name": "Nélson Oliveira",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "PAOK FC",
    "age": 32,
    "stats": {
      "pace": 68,
      "shooting": 73,
      "passing": 64,
      "dribbling": 70,
      "defending": 26,
      "physical": 72
    }
  },
  {
    "id": "p1480",
    "name": "Mattia De Sciglio",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Juventus",
    "age": 30,
    "stats": {
      "pace": 67,
      "shooting": 48,
      "passing": 71,
      "dribbling": 75,
      "defending": 57,
      "physical": 72
    }
  },
  {
    "id": "p1517",
    "name": "Freddie Woodman",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Preston",
    "age": 26,
    "stats": {
      "pace": 48,
      "shooting": 25,
      "passing": 28,
      "dribbling": 30,
      "defending": 17,
      "physical": 42
    }
  },
  {
    "id": "p1588",
    "name": "Marco van Ginkel",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Vitesse",
    "age": 30,
    "stats": {
      "pace": 53,
      "shooting": 73,
      "passing": 74,
      "dribbling": 69,
      "defending": 50,
      "physical": 71
    }
  },
  {
    "id": "p1611",
    "name": "Nicolas Viola",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Cagliari",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 64,
      "passing": 73,
      "dribbling": 70,
      "defending": 44,
      "physical": 69
    }
  },
  {
    "id": "p1649",
    "name": "Jørgen Strand Larsen",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 74,
    "club": "RC Celta",
    "age": 23,
    "stats": {
      "pace": 77,
      "shooting": 71,
      "passing": 55,
      "dribbling": 66,
      "defending": 19,
      "physical": 79
    }
  },
  {
    "id": "p1676",
    "name": "Japhet Tanganga",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Spurs",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 34,
      "passing": 63,
      "dribbling": 69,
      "defending": 56,
      "physical": 80
    }
  },
  {
    "id": "p1716",
    "name": "Nikola Moro",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Bologna",
    "age": 25,
    "stats": {
      "pace": 69,
      "shooting": 71,
      "passing": 74,
      "dribbling": 70,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p1779",
    "name": "Lewis O'Brien",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Nott'm Forest",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 61,
      "passing": 67,
      "dribbling": 78,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p1838",
    "name": "Mikel Villanueva",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Vitória SC",
    "age": 30,
    "stats": {
      "pace": 64,
      "shooting": 44,
      "passing": 59,
      "dribbling": 60,
      "defending": 53,
      "physical": 78
    }
  },
  {
    "id": "p1922",
    "name": "Diallang Jaiyesimi",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "AFC Wimbledon",
    "age": 25,
    "stats": {
      "pace": 90,
      "shooting": 54,
      "passing": 57,
      "dribbling": 69,
      "defending": 37,
      "physical": 64
    }
  },
  {
    "id": "p2003",
    "name": "Alexandru Mățan",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Columbus Crew",
    "age": 24,
    "stats": {
      "pace": 86,
      "shooting": 53,
      "passing": 62,
      "dribbling": 78,
      "defending": 25,
      "physical": 53
    }
  },
  {
    "id": "p2007",
    "name": "Mert Hakan Yandaş",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Fenerbahçe",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 71,
      "passing": 72,
      "dribbling": 74,
      "defending": 48,
      "physical": 69
    }
  },
  {
    "id": "p2034",
    "name": "Kristian Pedersen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "1. FC Köln",
    "age": 29,
    "stats": {
      "pace": 64,
      "shooting": 37,
      "passing": 58,
      "dribbling": 59,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p2069",
    "name": "Jan Hendrik Marx",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Braunschweig",
    "age": 28,
    "stats": {
      "pace": 88,
      "shooting": 47,
      "passing": 54,
      "dribbling": 73,
      "defending": 45,
      "physical": 61
    }
  },
  {
    "id": "p2080",
    "name": "Valère Germain",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 74,
    "club": "Montpellier",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 73,
      "passing": 70,
      "dribbling": 73,
      "defending": 22,
      "physical": 70
    }
  },
  {
    "id": "p2139",
    "name": "Rade Krunić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Milan",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 73,
      "passing": 76,
      "dribbling": 75,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p2228",
    "name": "Adam Sørensen",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "FK Bodø/Glimt",
    "age": 22,
    "stats": {
      "pace": 91,
      "shooting": 45,
      "passing": 60,
      "dribbling": 73,
      "defending": 42,
      "physical": 60
    }
  },
  {
    "id": "p2259",
    "name": "Joffrey Cuffaut",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Valenciennes FC",
    "age": 35,
    "stats": {
      "pace": 68,
      "shooting": 54,
      "passing": 62,
      "dribbling": 67,
      "defending": 53,
      "physical": 82
    }
  },
  {
    "id": "p2285",
    "name": "Emmanuel Gigliotti",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Nacional",
    "age": 36,
    "stats": {
      "pace": 50,
      "shooting": 74,
      "passing": 58,
      "dribbling": 64,
      "defending": 24,
      "physical": 77
    }
  },
  {
    "id": "p2340",
    "name": "Bernard",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Panathinaikos",
    "age": 30,
    "stats": {
      "pace": 80,
      "shooting": 69,
      "passing": 71,
      "dribbling": 87,
      "defending": 27,
      "physical": 47
    }
  },
  {
    "id": "p2417",
    "name": "Daryl Horgan",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Stevenage",
    "age": 31,
    "stats": {
      "pace": 83,
      "shooting": 58,
      "passing": 62,
      "dribbling": 77,
      "defending": 16,
      "physical": 63
    }
  },
  {
    "id": "p2498",
    "name": "Pedro Chirivella",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 74,
    "club": "FC Nantes",
    "age": 26,
    "stats": {
      "pace": 59,
      "shooting": 56,
      "passing": 74,
      "dribbling": 71,
      "defending": 54,
      "physical": 66
    }
  },
  {
    "id": "p2506",
    "name": "Ricky van Wolfswinkel",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Netherlands",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "FC Twente",
    "age": 34,
    "stats": {
      "pace": 67,
      "shooting": 71,
      "passing": 68,
      "dribbling": 66,
      "defending": 28,
      "physical": 69
    }
  },
  {
    "id": "p2594",
    "name": "Charlie Taylor",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Burnley",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 53,
      "passing": 69,
      "dribbling": 69,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p2608",
    "name": "Steven Caulker",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sierra Leone",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Wigan Athletic",
    "age": 31,
    "stats": {
      "pace": 55,
      "shooting": 28,
      "passing": 56,
      "dribbling": 54,
      "defending": 53,
      "physical": 78
    }
  },
  {
    "id": "p2724",
    "name": "Diego Alves",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "La Liga",
    "rating": 74,
    "club": "RC Celta",
    "age": 38,
    "stats": {
      "pace": 55,
      "shooting": 25,
      "passing": 39,
      "dribbling": 39,
      "defending": 12,
      "physical": 58
    }
  },
  {
    "id": "p2750",
    "name": "Papakouli Diop",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "UD Ibiza",
    "age": 37,
    "stats": {
      "pace": 35,
      "shooting": 69,
      "passing": 65,
      "dribbling": 65,
      "defending": 54,
      "physical": 82
    }
  },
  {
    "id": "p2887",
    "name": "Tim Kleindienst",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "Heidenheim",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 73,
      "passing": 55,
      "dribbling": 56,
      "defending": 20,
      "physical": 77
    }
  },
  {
    "id": "p2889",
    "name": "Nick Viergever",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "FC Utrecht",
    "age": 34,
    "stats": {
      "pace": 67,
      "shooting": 52,
      "passing": 66,
      "dribbling": 66,
      "defending": 56,
      "physical": 76
    }
  },
  {
    "id": "p2926",
    "name": "Petar Pušić",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Grasshopper Club",
    "age": 24,
    "stats": {
      "pace": 81,
      "shooting": 51,
      "passing": 63,
      "dribbling": 76,
      "defending": 39,
      "physical": 58
    }
  },
  {
    "id": "p2934",
    "name": "Kristoffer Ajer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Brentford",
    "age": 25,
    "stats": {
      "pace": 67,
      "shooting": 53,
      "passing": 61,
      "dribbling": 61,
      "defending": 56,
      "physical": 73
    }
  },
  {
    "id": "p3003",
    "name": "Alan Velasco",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "FC Dallas",
    "age": 21,
    "stats": {
      "pace": 83,
      "shooting": 67,
      "passing": 70,
      "dribbling": 85,
      "defending": 41,
      "physical": 63
    }
  },
  {
    "id": "p3050",
    "name": "Miloš Veljković",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "SV Werder Bremen",
    "age": 27,
    "stats": {
      "pace": 37,
      "shooting": 33,
      "passing": 54,
      "dribbling": 60,
      "defending": 56,
      "physical": 75
    }
  },
  {
    "id": "p3058",
    "name": "Fabricio Domínguez",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Argentinos Jrs.",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 53,
      "passing": 64,
      "dribbling": 73,
      "defending": 45,
      "physical": 68
    }
  },
  {
    "id": "p3191",
    "name": "Bart Schenkeveld",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Panathinaikos",
    "age": 32,
    "stats": {
      "pace": 72,
      "shooting": 37,
      "passing": 62,
      "dribbling": 65,
      "defending": 56,
      "physical": 75
    }
  },
  {
    "id": "p3214",
    "name": "Ángel",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 74,
    "club": "RCD Mallorca",
    "age": 36,
    "stats": {
      "pace": 69,
      "shooting": 75,
      "passing": 60,
      "dribbling": 74,
      "defending": 17,
      "physical": 67
    }
  },
  {
    "id": "p3279",
    "name": "Zian Flemming",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Millwall",
    "age": 25,
    "stats": {
      "pace": 72,
      "shooting": 74,
      "passing": 71,
      "dribbling": 71,
      "defending": 40,
      "physical": 79
    }
  },
  {
    "id": "p3351",
    "name": "Abderrazak Hamdallah",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Morocco",
    "age": 32,
    "stats": {
      "pace": 70,
      "shooting": 75,
      "passing": 68,
      "dribbling": 68,
      "defending": 16,
      "physical": 70
    }
  },
  {
    "id": "p3361",
    "name": "Puado",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "RCD Espanyol",
    "age": 25,
    "stats": {
      "pace": 84,
      "shooting": 71,
      "passing": 68,
      "dribbling": 78,
      "defending": 31,
      "physical": 76
    }
  },
  {
    "id": "p3385",
    "name": "Mark McKenzie",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "KRC Genk",
    "age": 24,
    "stats": {
      "pace": 80,
      "shooting": 35,
      "passing": 49,
      "dribbling": 64,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p3410",
    "name": "Aleš Mandous",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Slavia Praha",
    "age": 31,
    "stats": {
      "pace": 19,
      "shooting": 20,
      "passing": 30,
      "dribbling": 22,
      "defending": 9,
      "physical": 41
    }
  },
  {
    "id": "p3432",
    "name": "Donny van de Beek",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Manchester Utd",
    "age": 26,
    "stats": {
      "pace": 65,
      "shooting": 78,
      "passing": 75,
      "dribbling": 75,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p3442",
    "name": "Wahbi Khazri",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Tunisia",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 74,
    "club": "Montpellier",
    "age": 32,
    "stats": {
      "pace": 68,
      "shooting": 77,
      "passing": 74,
      "dribbling": 77,
      "defending": 32,
      "physical": 62
    }
  },
  {
    "id": "p3468",
    "name": "Gary Medel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Chile",
    "era": "Legends",
    "league": "Serie A",
    "rating": 74,
    "club": "Bologna",
    "age": 36,
    "stats": {
      "pace": 57,
      "shooting": 55,
      "passing": 63,
      "dribbling": 73,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p3492",
    "name": "Rafael Pérez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "San Lorenzo",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 40,
      "passing": 49,
      "dribbling": 61,
      "defending": 53,
      "physical": 80
    }
  },
  {
    "id": "p3557",
    "name": "Bruno Zuculini",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "River Plate",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 66,
      "passing": 69,
      "dribbling": 69,
      "defending": 55,
      "physical": 81
    }
  },
  {
    "id": "p3596",
    "name": "Filipe Relvas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "Portimonense SC",
    "age": 23,
    "stats": {
      "pace": 63,
      "shooting": 44,
      "passing": 57,
      "dribbling": 53,
      "defending": 54,
      "physical": 76
    }
  },
  {
    "id": "p3611",
    "name": "Puertas",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Granada CF",
    "age": 31,
    "stats": {
      "pace": 76,
      "shooting": 71,
      "passing": 72,
      "dribbling": 73,
      "defending": 28,
      "physical": 73
    }
  },
  {
    "id": "p3627",
    "name": "Tomás Belmonte",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Lanús",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 64,
      "passing": 67,
      "dribbling": 71,
      "defending": 52,
      "physical": 80
    }
  },
  {
    "id": "p3693",
    "name": "Joo Min Kyu",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Ulsan Hyundai",
    "age": 33,
    "stats": {
      "pace": 67,
      "shooting": 73,
      "passing": 52,
      "dribbling": 72,
      "defending": 36,
      "physical": 77
    }
  },
  {
    "id": "p3728",
    "name": "Gastón Suso",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Platense",
    "age": 32,
    "stats": {
      "pace": 52,
      "shooting": 38,
      "passing": 51,
      "dribbling": 54,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p3750",
    "name": "Michele Di Gregorio",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Monza",
    "age": 26,
    "stats": {
      "pace": 44,
      "shooting": 23,
      "passing": 26,
      "dribbling": 35,
      "defending": 10,
      "physical": 49
    }
  },
  {
    "id": "p3757",
    "name": "Glenn Middleton",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Scotland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "Dundee United",
    "age": 23,
    "stats": {
      "pace": 86,
      "shooting": 56,
      "passing": 61,
      "dribbling": 72,
      "defending": 19,
      "physical": 52
    }
  },
  {
    "id": "p3801",
    "name": "Gelson Martins",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 74,
    "club": "AS Monaco",
    "age": 28,
    "stats": {
      "pace": 89,
      "shooting": 72,
      "passing": 68,
      "dribbling": 83,
      "defending": 37,
      "physical": 63
    }
  },
  {
    "id": "p3808",
    "name": "Dani Rochelinhas",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Athletico-PR",
    "age": 31,
    "stats": {
      "pace": 77,
      "shooting": 61,
      "passing": 72,
      "dribbling": 75,
      "defending": 27,
      "physical": 58
    }
  },
  {
    "id": "p3837",
    "name": "Fraser Forster",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Spurs",
    "age": 35,
    "stats": {
      "pace": 31,
      "shooting": 24,
      "passing": 33,
      "dribbling": 35,
      "defending": 12,
      "physical": 56
    }
  },
  {
    "id": "p3926",
    "name": "Nicolás Formido",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 74,
    "club": "Internacional",
    "age": 23,
    "stats": {
      "pace": 68,
      "shooting": 65,
      "passing": 74,
      "dribbling": 71,
      "defending": 26,
      "physical": 64
    }
  },
  {
    "id": "p4000",
    "name": "Joël Piroe",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Swansea City",
    "age": 24,
    "stats": {
      "pace": 66,
      "shooting": 74,
      "passing": 61,
      "dribbling": 67,
      "defending": 19,
      "physical": 67
    }
  },
  {
    "id": "p4119",
    "name": "Arthur Theate",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "Stade Rennais FC",
    "age": 23,
    "stats": {
      "pace": 72,
      "shooting": 44,
      "passing": 56,
      "dribbling": 56,
      "defending": 58,
      "physical": 76
    }
  },
  {
    "id": "p4129",
    "name": "Mathias Pereira Lage",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 74,
    "club": "Stade Brestois 29",
    "age": 26,
    "stats": {
      "pace": 74,
      "shooting": 73,
      "passing": 73,
      "dribbling": 74,
      "defending": 45,
      "physical": 68
    }
  },
  {
    "id": "p4138",
    "name": "Lorenzo De Silvestri",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Serie A",
    "rating": 74,
    "club": "Bologna",
    "age": 35,
    "stats": {
      "pace": 72,
      "shooting": 67,
      "passing": 72,
      "dribbling": 68,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p4245",
    "name": "Riquelme",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 74,
    "club": "Girona FC",
    "age": 23,
    "stats": {
      "pace": 77,
      "shooting": 71,
      "passing": 71,
      "dribbling": 79,
      "defending": 29,
      "physical": 53
    }
  },
  {
    "id": "p4299",
    "name": "Anel Ahmedhodžić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Sheffield Utd",
    "age": 24,
    "stats": {
      "pace": 77,
      "shooting": 39,
      "passing": 60,
      "dribbling": 62,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p4385",
    "name": "Kristian Thorstvedt",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Sassuolo",
    "age": 24,
    "stats": {
      "pace": 63,
      "shooting": 72,
      "passing": 69,
      "dribbling": 64,
      "defending": 49,
      "physical": 77
    }
  },
  {
    "id": "p4440",
    "name": "Carlitos",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Legia Warszawa",
    "age": 33,
    "stats": {
      "pace": 74,
      "shooting": 73,
      "passing": 66,
      "dribbling": 78,
      "defending": 17,
      "physical": 70
    }
  },
  {
    "id": "p4461",
    "name": "Andrea Pinamonti",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Sassuolo",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 76,
      "passing": 50,
      "dribbling": 72,
      "defending": 18,
      "physical": 71
    }
  },
  {
    "id": "p4462",
    "name": "Gonzalo Escalante",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Cádiz CF",
    "age": 30,
    "stats": {
      "pace": 63,
      "shooting": 67,
      "passing": 73,
      "dribbling": 69,
      "defending": 56,
      "physical": 76
    }
  },
  {
    "id": "p4494",
    "name": "Jens Jønsson",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "AEK Athens",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 56,
      "passing": 67,
      "dribbling": 69,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p4526",
    "name": "Kevin Strootman",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Genoa",
    "age": 33,
    "stats": {
      "pace": 46,
      "shooting": 68,
      "passing": 71,
      "dribbling": 67,
      "defending": 54,
      "physical": 70
    }
  },
  {
    "id": "p4626",
    "name": "Tom Krauß",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 74,
    "club": "FC Schalke 04",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 67,
      "passing": 67,
      "dribbling": 71,
      "defending": 54,
      "physical": 78
    }
  },
  {
    "id": "p4664",
    "name": "Ondřej Lingr",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Slavia Praha",
    "age": 24,
    "stats": {
      "pace": 79,
      "shooting": 73,
      "passing": 69,
      "dribbling": 80,
      "defending": 31,
      "physical": 79
    }
  },
  {
    "id": "p4672",
    "name": "Matheus Henrique",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Sassuolo",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 60,
      "passing": 77,
      "dribbling": 78,
      "defending": 42,
      "physical": 66
    }
  },
  {
    "id": "p4686",
    "name": "Sergio Peña",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Malmö FF",
    "age": 27,
    "stats": {
      "pace": 55,
      "shooting": 68,
      "passing": 77,
      "dribbling": 80,
      "defending": 39,
      "physical": 62
    }
  },
  {
    "id": "p4738",
    "name": "Jhon Lucumí",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Bologna",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 28,
      "passing": 60,
      "dribbling": 62,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p4835",
    "name": "Umar Sadiq",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "La Liga",
    "rating": 74,
    "club": "Real Sociedad",
    "age": 26,
    "stats": {
      "pace": 84,
      "shooting": 74,
      "passing": 58,
      "dribbling": 65,
      "defending": 15,
      "physical": 72
    }
  },
  {
    "id": "p4845",
    "name": "Manor Solomon",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Israel",
    "era": "Modern",
    "league": "Premier League",
    "rating": 74,
    "club": "Fulham",
    "age": 24,
    "stats": {
      "pace": 81,
      "shooting": 66,
      "passing": 74,
      "dribbling": 80,
      "defending": 29,
      "physical": 54
    }
  },
  {
    "id": "p4997",
    "name": "Sebastian Andersson",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "1. FC Köln",
    "age": 32,
    "stats": {
      "pace": 45,
      "shooting": 71,
      "passing": 52,
      "dribbling": 59,
      "defending": 20,
      "physical": 65
    }
  },
  {
    "id": "p5033",
    "name": "Yassine Benrahou",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Hajduk Split",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 66,
      "passing": 72,
      "dribbling": 84,
      "defending": 30,
      "physical": 54
    }
  },
  {
    "id": "p5051",
    "name": "Ricardo Rodríguez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Serie A",
    "rating": 74,
    "club": "Torino",
    "age": 31,
    "stats": {
      "pace": 66,
      "shooting": 69,
      "passing": 73,
      "dribbling": 72,
      "defending": 57,
      "physical": 72
    }
  },
  {
    "id": "p5078",
    "name": "Miles Robinson",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Atlanta United",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 35,
      "passing": 56,
      "dribbling": 62,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p5114",
    "name": "Joshua King",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Fenerbahçe",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 75,
      "passing": 70,
      "dribbling": 76,
      "defending": 25,
      "physical": 73
    }
  },
  {
    "id": "p5268",
    "name": "Adam Armstrong",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Southampton",
    "age": 26,
    "stats": {
      "pace": 81,
      "shooting": 73,
      "passing": 64,
      "dribbling": 75,
      "defending": 22,
      "physical": 73
    }
  },
  {
    "id": "p5338",
    "name": "Romain Hamouma",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "AC Ajaccio",
    "age": 36,
    "stats": {
      "pace": 68,
      "shooting": 75,
      "passing": 72,
      "dribbling": 77,
      "defending": 30,
      "physical": 61
    }
  },
  {
    "id": "p5398",
    "name": "Leonardo Sigali",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 74,
    "club": "Racing Club",
    "age": 36,
    "stats": {
      "pace": 66,
      "shooting": 47,
      "passing": 60,
      "dribbling": 62,
      "defending": 58,
      "physical": 78
    }
  },
  {
    "id": "p5431",
    "name": "Samuel Piette",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "CF Montréal",
    "age": 28,
    "stats": {
      "pace": 53,
      "shooting": 34,
      "passing": 58,
      "dribbling": 67,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p5457",
    "name": "Michael O'Halloran",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "St. Johnstone",
    "age": 32,
    "stats": {
      "pace": 89,
      "shooting": 57,
      "passing": 57,
      "dribbling": 70,
      "defending": 37,
      "physical": 63
    }
  },
  {
    "id": "p5527",
    "name": "Reece Oxford",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 74,
    "club": "FC Augsburg",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 36,
      "passing": 54,
      "dribbling": 59,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p5618",
    "name": "Liam Cooper",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 74,
    "club": "Leeds United",
    "age": 32,
    "stats": {
      "pace": 49,
      "shooting": 37,
      "passing": 57,
      "dribbling": 58,
      "defending": 58,
      "physical": 77
    }
  },
  {
    "id": "p66",
    "name": "Mats Knoester",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Ferencvárosi TC",
    "age": 24,
    "stats": {
      "pace": 58,
      "shooting": 31,
      "passing": 50,
      "dribbling": 55,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p135",
    "name": "Harry Souttar",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Leicester City",
    "age": 24,
    "stats": {
      "pace": 41,
      "shooting": 27,
      "passing": 51,
      "dribbling": 52,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p139",
    "name": "Jefferson Duque",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Colombia",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Atl. Nacional",
    "age": 36,
    "stats": {
      "pace": 62,
      "shooting": 70,
      "passing": 56,
      "dribbling": 65,
      "defending": 18,
      "physical": 67
    }
  },
  {
    "id": "p155",
    "name": "Maxime Crépeau",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "LAFC",
    "age": 29,
    "stats": {
      "pace": 49,
      "shooting": 26,
      "passing": 39,
      "dribbling": 37,
      "defending": 14,
      "physical": 51
    }
  },
  {
    "id": "p159",
    "name": "Maxime Crépeau",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "LAFC",
    "age": 29,
    "stats": {
      "pace": 49,
      "shooting": 26,
      "passing": 39,
      "dribbling": 37,
      "defending": 14,
      "physical": 51
    }
  },
  {
    "id": "p235",
    "name": "Óscar Sielva",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "SD Huesca",
    "age": 32,
    "stats": {
      "pace": 63,
      "shooting": 71,
      "passing": 71,
      "dribbling": 71,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p239",
    "name": "Oli McBurnie",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 73,
    "club": "Sheffield Utd",
    "age": 27,
    "stats": {
      "pace": 54,
      "shooting": 69,
      "passing": 58,
      "dribbling": 62,
      "defending": 19,
      "physical": 76
    }
  },
  {
    "id": "p247",
    "name": "Toni Villa",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 73,
    "club": "Girona FC",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 61,
      "passing": 74,
      "dribbling": 80,
      "defending": 41,
      "physical": 52
    }
  },
  {
    "id": "p354",
    "name": "Francesco Forte",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Ascoli",
    "age": 30,
    "stats": {
      "pace": 54,
      "shooting": 67,
      "passing": 62,
      "dribbling": 66,
      "defending": 19,
      "physical": 68
    }
  },
  {
    "id": "p471",
    "name": "Gustavo",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Jeonbuk Hyundai",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 71,
      "passing": 48,
      "dribbling": 63,
      "defending": 16,
      "physical": 79
    }
  },
  {
    "id": "p559",
    "name": "Isaac Success",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Udinese",
    "age": 27,
    "stats": {
      "pace": 73,
      "shooting": 68,
      "passing": 66,
      "dribbling": 72,
      "defending": 22,
      "physical": 66
    }
  },
  {
    "id": "p561",
    "name": "CJ Hamilton",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Blackpool",
    "age": 28,
    "stats": {
      "pace": 91,
      "shooting": 60,
      "passing": 60,
      "dribbling": 66,
      "defending": 41,
      "physical": 64
    }
  },
  {
    "id": "p578",
    "name": "Leandro Díaz",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Lanús",
    "age": 31,
    "stats": {
      "pace": 69,
      "shooting": 68,
      "passing": 63,
      "dribbling": 68,
      "defending": 15,
      "physical": 74
    }
  },
  {
    "id": "p582",
    "name": "Nahuel Bustos",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Talleres",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 71,
      "passing": 65,
      "dribbling": 79,
      "defending": 22,
      "physical": 70
    }
  },
  {
    "id": "p663",
    "name": "Aitor Buñuel",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "CD Tenerife",
    "age": 25,
    "stats": {
      "pace": 84,
      "shooting": 37,
      "passing": 59,
      "dribbling": 75,
      "defending": 46,
      "physical": 71
    }
  },
  {
    "id": "p683",
    "name": "Maxim Leitsch",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "1. FSV Mainz 05",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 38,
      "passing": 57,
      "dribbling": 58,
      "defending": 58,
      "physical": 70
    }
  },
  {
    "id": "p712",
    "name": "Pietro Beruatto",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Pisa",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 46,
      "passing": 59,
      "dribbling": 65,
      "defending": 59,
      "physical": 69
    }
  },
  {
    "id": "p744",
    "name": "Brayan Riascos",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Marítimo",
    "age": 28,
    "stats": {
      "pace": 83,
      "shooting": 69,
      "passing": 63,
      "dribbling": 69,
      "defending": 25,
      "physical": 76
    }
  },
  {
    "id": "p760",
    "name": "Ron-Robert Zieler",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Hannover 96",
    "age": 34,
    "stats": {
      "pace": 48,
      "shooting": 22,
      "passing": 26,
      "dribbling": 30,
      "defending": 12,
      "physical": 47
    }
  },
  {
    "id": "p834",
    "name": "Gian Marco Ferrari",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Sassuolo",
    "age": 31,
    "stats": {
      "pace": 50,
      "shooting": 25,
      "passing": 41,
      "dribbling": 48,
      "defending": 56,
      "physical": 77
    }
  },
  {
    "id": "p859",
    "name": "Jurgen Ekkelenkamp",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "Royal Antwerp FC",
    "age": 23,
    "stats": {
      "pace": 59,
      "shooting": 66,
      "passing": 70,
      "dribbling": 69,
      "defending": 43,
      "physical": 71
    }
  },
  {
    "id": "p932",
    "name": "Cucho Hernández",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Columbus Crew",
    "age": 24,
    "stats": {
      "pace": 83,
      "shooting": 74,
      "passing": 67,
      "dribbling": 77,
      "defending": 27,
      "physical": 75
    }
  },
  {
    "id": "p944",
    "name": "Milan Pavkov",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 73,
    "club": "Al Fayha",
    "age": 29,
    "stats": {
      "pace": 51,
      "shooting": 71,
      "passing": 49,
      "dribbling": 50,
      "defending": 15,
      "physical": 80
    }
  },
  {
    "id": "p972",
    "name": "Romaine Sawyers",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "St Kitts Nevis",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Cardiff City",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 62,
      "passing": 71,
      "dribbling": 75,
      "defending": 42,
      "physical": 60
    }
  },
  {
    "id": "p999",
    "name": "Connor Pain",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Western United",
    "age": 29,
    "stats": {
      "pace": 85,
      "shooting": 58,
      "passing": 59,
      "dribbling": 73,
      "defending": 44,
      "physical": 73
    }
  },
  {
    "id": "p1017",
    "name": "Samuel Lino",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 73,
    "club": "Valencia CF",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 68,
      "passing": 68,
      "dribbling": 78,
      "defending": 22,
      "physical": 64
    }
  },
  {
    "id": "p1064",
    "name": "Abdallah Sima",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Senegal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "Angers SCO",
    "age": 22,
    "stats": {
      "pace": 87,
      "shooting": 73,
      "passing": 63,
      "dribbling": 67,
      "defending": 28,
      "physical": 72
    }
  },
  {
    "id": "p1072",
    "name": "Samuel Gustafson",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "BK Häcken",
    "age": 28,
    "stats": {
      "pace": 56,
      "shooting": 57,
      "passing": 70,
      "dribbling": 69,
      "defending": 49,
      "physical": 63
    }
  },
  {
    "id": "p1162",
    "name": "Iván Sánchez Aguayo",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "R. Valladolid CF",
    "age": 30,
    "stats": {
      "pace": 76,
      "shooting": 64,
      "passing": 70,
      "dribbling": 83,
      "defending": 23,
      "physical": 57
    }
  },
  {
    "id": "p1185",
    "name": "Luciano Vietto",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 73,
    "club": "Al Hilal",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 72,
      "passing": 71,
      "dribbling": 80,
      "defending": 29,
      "physical": 67
    }
  },
  {
    "id": "p1204",
    "name": "Berkan Kutlu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Galatasaray",
    "age": 25,
    "stats": {
      "pace": 75,
      "shooting": 59,
      "passing": 62,
      "dribbling": 64,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p1238",
    "name": "Norman Theuerkauf",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 73,
    "club": "Heidenheim",
    "age": 36,
    "stats": {
      "pace": 62,
      "shooting": 57,
      "passing": 63,
      "dribbling": 64,
      "defending": 51,
      "physical": 77
    }
  },
  {
    "id": "p1310",
    "name": "Maxime Dupé",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Toulouse FC",
    "age": 30,
    "stats": {
      "pace": 45,
      "shooting": 21,
      "passing": 27,
      "dribbling": 27,
      "defending": 11,
      "physical": 45
    }
  },
  {
    "id": "p1317",
    "name": "David von Ballmoos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "BSC Young Boys",
    "age": 28,
    "stats": {
      "pace": 50,
      "shooting": 27,
      "passing": 30,
      "dribbling": 38,
      "defending": 16,
      "physical": 51
    }
  },
  {
    "id": "p1338",
    "name": "Miguel Ángel Merentiel",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Boca Juniors",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 70,
      "passing": 48,
      "dribbling": 73,
      "defending": 16,
      "physical": 69
    }
  },
  {
    "id": "p1343",
    "name": "Edon Zhegrova",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "LOSC Lille",
    "age": 24,
    "stats": {
      "pace": 80,
      "shooting": 66,
      "passing": 67,
      "dribbling": 80,
      "defending": 15,
      "physical": 62
    }
  },
  {
    "id": "p1368",
    "name": "Federico Bonazzoli",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Salernitana",
    "age": 26,
    "stats": {
      "pace": 70,
      "shooting": 74,
      "passing": 54,
      "dribbling": 68,
      "defending": 19,
      "physical": 57
    }
  },
  {
    "id": "p1449",
    "name": "Andries Noppert",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "sc Heerenveen",
    "age": 29,
    "stats": {
      "pace": 48,
      "shooting": 27,
      "passing": 28,
      "dribbling": 36,
      "defending": 11,
      "physical": 50
    }
  },
  {
    "id": "p1453",
    "name": "Rayan Cherki",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "OL",
    "age": 20,
    "stats": {
      "pace": 71,
      "shooting": 66,
      "passing": 68,
      "dribbling": 82,
      "defending": 15,
      "physical": 53
    }
  },
  {
    "id": "p1557",
    "name": "Chidozie Awaziem",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Hajduk Split",
    "age": 26,
    "stats": {
      "pace": 72,
      "shooting": 39,
      "passing": 49,
      "dribbling": 60,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p1571",
    "name": "Jean-Kévin Duverne",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Stade Brestois 29",
    "age": 26,
    "stats": {
      "pace": 63,
      "shooting": 39,
      "passing": 62,
      "dribbling": 68,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p1652",
    "name": "Carl Starfelt",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Celtic",
    "age": 28,
    "stats": {
      "pace": 73,
      "shooting": 32,
      "passing": 54,
      "dribbling": 67,
      "defending": 55,
      "physical": 76
    }
  },
  {
    "id": "p1654",
    "name": "Hakim Guenouche",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "SC Austria",
    "age": 23,
    "stats": {
      "pace": 84,
      "shooting": 38,
      "passing": 55,
      "dribbling": 76,
      "defending": 42,
      "physical": 56
    }
  },
  {
    "id": "p1695",
    "name": "Robert Berić",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Tianjin JMT FC",
    "age": 32,
    "stats": {
      "pace": 57,
      "shooting": 70,
      "passing": 63,
      "dribbling": 61,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p1782",
    "name": "Tiago Dantas",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "PAOK FC",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 55,
      "passing": 71,
      "dribbling": 81,
      "defending": 36,
      "physical": 53
    }
  },
  {
    "id": "p1819",
    "name": "Salis Abdul Samed",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ghana",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 73,
    "club": "RC Lens",
    "age": 23,
    "stats": {
      "pace": 52,
      "shooting": 45,
      "passing": 63,
      "dribbling": 63,
      "defending": 55,
      "physical": 71
    }
  },
  {
    "id": "p1862",
    "name": "Łukasz Skorupski",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Bologna",
    "age": 32,
    "stats": {
      "pace": 51,
      "shooting": 22,
      "passing": 27,
      "dribbling": 32,
      "defending": 10,
      "physical": 47
    }
  },
  {
    "id": "p1873",
    "name": "Brendan Chardonnet",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Stade Brestois 29",
    "age": 28,
    "stats": {
      "pace": 54,
      "shooting": 43,
      "passing": 54,
      "dribbling": 61,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p1907",
    "name": "Matt Godden",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Coventry City",
    "age": 32,
    "stats": {
      "pace": 58,
      "shooting": 71,
      "passing": 52,
      "dribbling": 69,
      "defending": 21,
      "physical": 70
    }
  },
  {
    "id": "p1914",
    "name": "Christian Fassnacht",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "BSC Young Boys",
    "age": 29,
    "stats": {
      "pace": 82,
      "shooting": 69,
      "passing": 70,
      "dribbling": 74,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p1921",
    "name": "Radja Nainggolan",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "SPAL",
    "age": 35,
    "stats": {
      "pace": 66,
      "shooting": 82,
      "passing": 75,
      "dribbling": 74,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p1938",
    "name": "Pedro Gallese",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Orlando City",
    "age": 33,
    "stats": {
      "pace": 47,
      "shooting": 26,
      "passing": 39,
      "dribbling": 33,
      "defending": 16,
      "physical": 40
    }
  },
  {
    "id": "p2090",
    "name": "Jack Stephens",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 73,
    "club": "AFC Bournemouth",
    "age": 29,
    "stats": {
      "pace": 43,
      "shooting": 42,
      "passing": 60,
      "dribbling": 64,
      "defending": 56,
      "physical": 70
    }
  },
  {
    "id": "p2106",
    "name": "Sebastian Lletget",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "FC Dallas",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 63,
      "passing": 70,
      "dribbling": 73,
      "defending": 45,
      "physical": 67
    }
  },
  {
    "id": "p2107",
    "name": "Victor Pálsson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Iceland",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "D.C. United",
    "age": 32,
    "stats": {
      "pace": 72,
      "shooting": 57,
      "passing": 58,
      "dribbling": 61,
      "defending": 54,
      "physical": 84
    }
  },
  {
    "id": "p2110",
    "name": "Benson Manuel",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Premier League",
    "rating": 73,
    "club": "Burnley",
    "age": 26,
    "stats": {
      "pace": 85,
      "shooting": 68,
      "passing": 69,
      "dribbling": 82,
      "defending": 27,
      "physical": 66
    }
  },
  {
    "id": "p2127",
    "name": "Obinna Nwobodo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "FC Cincinnati",
    "age": 26,
    "stats": {
      "pace": 82,
      "shooting": 65,
      "passing": 62,
      "dribbling": 73,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p2154",
    "name": "Max Christiansen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Fürth",
    "age": 26,
    "stats": {
      "pace": 62,
      "shooting": 50,
      "passing": 64,
      "dribbling": 64,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p2158",
    "name": "Ben Sheaf",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Coventry City",
    "age": 25,
    "stats": {
      "pace": 50,
      "shooting": 51,
      "passing": 69,
      "dribbling": 64,
      "defending": 54,
      "physical": 73
    }
  },
  {
    "id": "p2212",
    "name": "Ibrahim Amadou",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Angers SCO",
    "age": 30,
    "stats": {
      "pace": 63,
      "shooting": 58,
      "passing": 64,
      "dribbling": 67,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p2295",
    "name": "Dennis Jastrzembski",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Poland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "Śląsk Wrocław",
    "age": 23,
    "stats": {
      "pace": 88,
      "shooting": 57,
      "passing": 60,
      "dribbling": 72,
      "defending": 19,
      "physical": 60
    }
  },
  {
    "id": "p2358",
    "name": "Rashaan Fernandes",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Go Ahead Eagles",
    "age": 25,
    "stats": {
      "pace": 82,
      "shooting": 61,
      "passing": 56,
      "dribbling": 71,
      "defending": 15,
      "physical": 54
    }
  },
  {
    "id": "p2395",
    "name": "Albin Ekdal",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "La Spezia",
    "age": 34,
    "stats": {
      "pace": 42,
      "shooting": 67,
      "passing": 75,
      "dribbling": 65,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p2404",
    "name": "Jaume",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 73,
    "club": "Valencia CF",
    "age": 32,
    "stats": {
      "pace": 58,
      "shooting": 24,
      "passing": 46,
      "dribbling": 41,
      "defending": 15,
      "physical": 50
    }
  },
  {
    "id": "p2464",
    "name": "Joshua Brillante",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Melb. Victory",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 55,
      "passing": 64,
      "dribbling": 67,
      "defending": 50,
      "physical": 82
    }
  },
  {
    "id": "p2513",
    "name": "Elye Wahi",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Montpellier",
    "age": 20,
    "stats": {
      "pace": 83,
      "shooting": 75,
      "passing": 64,
      "dribbling": 76,
      "defending": 20,
      "physical": 68
    }
  },
  {
    "id": "p2676",
    "name": "Zinho Gano",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Guinea Bissau",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Zulte Waregem",
    "age": 29,
    "stats": {
      "pace": 54,
      "shooting": 69,
      "passing": 51,
      "dribbling": 53,
      "defending": 18,
      "physical": 72
    }
  },
  {
    "id": "p2800",
    "name": "Marko Jevtović",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Gaziantep",
    "age": 30,
    "stats": {
      "pace": 49,
      "shooting": 59,
      "passing": 61,
      "dribbling": 54,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p2836",
    "name": "Genki Haraguchi",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "VfB Stuttgart",
    "age": 32,
    "stats": {
      "pace": 70,
      "shooting": 62,
      "passing": 70,
      "dribbling": 81,
      "defending": 31,
      "physical": 58
    }
  },
  {
    "id": "p2861",
    "name": "Mamadou Loum",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Reading",
    "age": 26,
    "stats": {
      "pace": 45,
      "shooting": 57,
      "passing": 59,
      "dribbling": 59,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p2881",
    "name": "Manu García",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "CD Mirandés",
    "age": 37,
    "stats": {
      "pace": 39,
      "shooting": 63,
      "passing": 71,
      "dribbling": 63,
      "defending": 54,
      "physical": 73
    }
  },
  {
    "id": "p2904",
    "name": "Ianis Hagi",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Rangers",
    "age": 24,
    "stats": {
      "pace": 69,
      "shooting": 71,
      "passing": 73,
      "dribbling": 75,
      "defending": 24,
      "physical": 60
    }
  },
  {
    "id": "p2942",
    "name": "Michele Castagnetti",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Cremonese",
    "age": 33,
    "stats": {
      "pace": 57,
      "shooting": 73,
      "passing": 68,
      "dribbling": 69,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p3013",
    "name": "Ivo Rodrigues",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "FC Famalicão",
    "age": 28,
    "stats": {
      "pace": 75,
      "shooting": 70,
      "passing": 68,
      "dribbling": 76,
      "defending": 33,
      "physical": 68
    }
  },
  {
    "id": "p3063",
    "name": "Romain Alessandrini",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Shenzhen FC",
    "age": 34,
    "stats": {
      "pace": 80,
      "shooting": 78,
      "passing": 70,
      "dribbling": 79,
      "defending": 30,
      "physical": 68
    }
  },
  {
    "id": "p3075",
    "name": "Anthony Partipilo",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Ternana",
    "age": 28,
    "stats": {
      "pace": 84,
      "shooting": 66,
      "passing": 70,
      "dribbling": 70,
      "defending": 30,
      "physical": 59
    }
  },
  {
    "id": "p3076",
    "name": "Olivier Kemen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Kayserispor",
    "age": 27,
    "stats": {
      "pace": 77,
      "shooting": 65,
      "passing": 66,
      "dribbling": 74,
      "defending": 51,
      "physical": 82
    }
  },
  {
    "id": "p3104",
    "name": "Samuel Bastien",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Premier League",
    "rating": 73,
    "club": "Burnley",
    "age": 26,
    "stats": {
      "pace": 74,
      "shooting": 68,
      "passing": 69,
      "dribbling": 75,
      "defending": 46,
      "physical": 74
    }
  },
  {
    "id": "p3283",
    "name": "Javier Burrai",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 73,
    "club": "Barcelona SC",
    "age": 32,
    "stats": {
      "pace": 44,
      "shooting": 26,
      "passing": 32,
      "dribbling": 34,
      "defending": 14,
      "physical": 50
    }
  },
  {
    "id": "p3362",
    "name": "Marash Kumbulla",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Albania",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 73,
    "club": "Roma",
    "age": 23,
    "stats": {
      "pace": 48,
      "shooting": 34,
      "passing": 55,
      "dribbling": 55,
      "defending": 56,
      "physical": 77
    }
  },
  {
    "id": "p3375",
    "name": "Leandro González Pirez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "River Plate",
    "age": 31,
    "stats": {
      "pace": 70,
      "shooting": 48,
      "passing": 62,
      "dribbling": 64,
      "defending": 53,
      "physical": 80
    }
  },
  {
    "id": "p3397",
    "name": "Jean-Victor Makengo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "FC Lorient",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 69,
      "passing": 72,
      "dribbling": 71,
      "defending": 55,
      "physical": 68
    }
  },
  {
    "id": "p3399",
    "name": "Joseph Lopy",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Nîmes Olympique",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 59,
      "passing": 62,
      "dribbling": 65,
      "defending": 50,
      "physical": 81
    }
  },
  {
    "id": "p3475",
    "name": "Sebastian Ernst",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Hannover 96",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 57,
      "passing": 67,
      "dribbling": 77,
      "defending": 44,
      "physical": 71
    }
  },
  {
    "id": "p3493",
    "name": "Yoann Barbet",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Bordeaux",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 54,
      "passing": 68,
      "dribbling": 61,
      "defending": 54,
      "physical": 72
    }
  },
  {
    "id": "p3539",
    "name": "Jeando Fuchs",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Peterborough",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 54,
      "passing": 63,
      "dribbling": 75,
      "defending": 52,
      "physical": 84
    }
  },
  {
    "id": "p3552",
    "name": "Mickel Miller",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Plymouth Argyle",
    "age": 27,
    "stats": {
      "pace": 84,
      "shooting": 60,
      "passing": 57,
      "dribbling": 72,
      "defending": 40,
      "physical": 58
    }
  },
  {
    "id": "p3593",
    "name": "Erick Evaldes",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Bolivia",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Always Ready",
    "age": 35,
    "stats": {
      "pace": 68,
      "shooting": 55,
      "passing": 59,
      "dribbling": 62,
      "defending": 54,
      "physical": 73
    }
  },
  {
    "id": "p3600",
    "name": "Milan Havel",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Viktoria Plzeň",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 51,
      "passing": 68,
      "dribbling": 69,
      "defending": 54,
      "physical": 76
    }
  },
  {
    "id": "p3617",
    "name": "Leonardo Morales",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Gimnasia",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 30,
      "passing": 54,
      "dribbling": 63,
      "defending": 56,
      "physical": 74
    }
  },
  {
    "id": "p3636",
    "name": "Robin Zentner",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "1. FSV Mainz 05",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 22,
      "passing": 24,
      "dribbling": 26,
      "defending": 12,
      "physical": 52
    }
  },
  {
    "id": "p3690",
    "name": "Dániel Sallói",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Sporting KC",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 74,
      "passing": 68,
      "dribbling": 72,
      "defending": 23,
      "physical": 68
    }
  },
  {
    "id": "p3694",
    "name": "Rúben Vezo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Levante UD",
    "age": 29,
    "stats": {
      "pace": 72,
      "shooting": 55,
      "passing": 65,
      "dribbling": 66,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p3796",
    "name": "Cristian Lema",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Lanús",
    "age": 33,
    "stats": {
      "pace": 35,
      "shooting": 50,
      "passing": 55,
      "dribbling": 37,
      "defending": 55,
      "physical": 76
    }
  },
  {
    "id": "p3814",
    "name": "Asmir Begović",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Legends",
    "league": "Premier League",
    "rating": 73,
    "club": "Everton",
    "age": 36,
    "stats": {
      "pace": 32,
      "shooting": 25,
      "passing": 27,
      "dribbling": 29,
      "defending": 11,
      "physical": 49
    }
  },
  {
    "id": "p3880",
    "name": "Eltildo Correia",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 73,
    "club": "Atlético Mineiro",
    "age": 31,
    "stats": {
      "pace": 56,
      "shooting": 52,
      "passing": 62,
      "dribbling": 47,
      "defending": 56,
      "physical": 78
    }
  },
  {
    "id": "p3987",
    "name": "Vanja Milinković-Savić",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Torino",
    "age": 26,
    "stats": {
      "pace": 43,
      "shooting": 35,
      "passing": 34,
      "dribbling": 27,
      "defending": 14,
      "physical": 50
    }
  },
  {
    "id": "p4003",
    "name": "Alessandro Diamanti",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Western United",
    "age": 40,
    "stats": {
      "pace": 57,
      "shooting": 71,
      "passing": 77,
      "dribbling": 72,
      "defending": 23,
      "physical": 62
    }
  },
  {
    "id": "p4031",
    "name": "Saad Bguir",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Tunisia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Abha Club",
    "age": 29,
    "stats": {
      "pace": 70,
      "shooting": 67,
      "passing": 71,
      "dribbling": 74,
      "defending": 25,
      "physical": 63
    }
  },
  {
    "id": "p4072",
    "name": "Richard Schunke",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Independiente DV",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 34,
      "passing": 52,
      "dribbling": 56,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p4134",
    "name": "Danny Ward",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Leicester City",
    "age": 30,
    "stats": {
      "pace": 47,
      "shooting": 23,
      "passing": 32,
      "dribbling": 34,
      "defending": 15,
      "physical": 46
    }
  },
  {
    "id": "p4137",
    "name": "Ajdin Hrustić",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Hellas Verona",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 70,
      "passing": 73,
      "dribbling": 73,
      "defending": 42,
      "physical": 68
    }
  },
  {
    "id": "p4143",
    "name": "Jason Berthomier",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Valenciennes FC",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 71,
      "passing": 75,
      "dribbling": 74,
      "defending": 40,
      "physical": 67
    }
  },
  {
    "id": "p4189",
    "name": "Zainadine",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Mozambique",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Marítimo",
    "age": 35,
    "stats": {
      "pace": 71,
      "shooting": 52,
      "passing": 55,
      "dribbling": 64,
      "defending": 55,
      "physical": 81
    }
  },
  {
    "id": "p4232",
    "name": "Ahmed Sharahili",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 73,
    "club": "Al Ittihad",
    "age": 29,
    "stats": {
      "pace": 75,
      "shooting": 28,
      "passing": 56,
      "dribbling": 65,
      "defending": 51,
      "physical": 78
    }
  },
  {
    "id": "p4257",
    "name": "Ștefan Radu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Latium",
    "age": 36,
    "stats": {
      "pace": 55,
      "shooting": 65,
      "passing": 66,
      "dribbling": 67,
      "defending": 59,
      "physical": 68
    }
  },
  {
    "id": "p4279",
    "name": "Mark-Anthony Kaye",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Toronto FC",
    "age": 28,
    "stats": {
      "pace": 71,
      "shooting": 52,
      "passing": 67,
      "dribbling": 68,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p4347",
    "name": "Pablo Piatti",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Estudiantes",
    "age": 34,
    "stats": {
      "pace": 76,
      "shooting": 73,
      "passing": 71,
      "dribbling": 78,
      "defending": 31,
      "physical": 57
    }
  },
  {
    "id": "p4348",
    "name": "Florian Müller",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "VfB Stuttgart",
    "age": 25,
    "stats": {
      "pace": 43,
      "shooting": 22,
      "passing": 28,
      "dribbling": 31,
      "defending": 11,
      "physical": 46
    }
  },
  {
    "id": "p4427",
    "name": "Rhys Healey",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Toulouse FC",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 74,
      "passing": 58,
      "dribbling": 74,
      "defending": 17,
      "physical": 62
    }
  },
  {
    "id": "p4436",
    "name": "Wesley Saïd",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "RC Lens",
    "age": 28,
    "stats": {
      "pace": 74,
      "shooting": 73,
      "passing": 67,
      "dribbling": 79,
      "defending": 18,
      "physical": 58
    }
  },
  {
    "id": "p4528",
    "name": "Murray Wallace",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Millwall",
    "age": 30,
    "stats": {
      "pace": 58,
      "shooting": 28,
      "passing": 57,
      "dribbling": 58,
      "defending": 53,
      "physical": 77
    }
  },
  {
    "id": "p4531",
    "name": "Uroš Matić",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Abha Club",
    "age": 33,
    "stats": {
      "pace": 67,
      "shooting": 64,
      "passing": 68,
      "dribbling": 72,
      "defending": 45,
      "physical": 77
    }
  },
  {
    "id": "p4570",
    "name": "Jonas Martin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "LOSC Lille",
    "age": 33,
    "stats": {
      "pace": 55,
      "shooting": 66,
      "passing": 75,
      "dribbling": 71,
      "defending": 53,
      "physical": 68
    }
  },
  {
    "id": "p4598",
    "name": "Micky van de Ven",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 73,
    "club": "VfL Wolfsburg",
    "age": 22,
    "stats": {
      "pace": 84,
      "shooting": 46,
      "passing": 61,
      "dribbling": 60,
      "defending": 57,
      "physical": 74
    }
  },
  {
    "id": "p4600",
    "name": "Cote",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "R. Sporting",
    "age": 33,
    "stats": {
      "pace": 64,
      "shooting": 54,
      "passing": 75,
      "dribbling": 68,
      "defending": 56,
      "physical": 68
    }
  },
  {
    "id": "p4630",
    "name": "Ansgar Knauff",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 73,
    "club": "Frankfurt",
    "age": 21,
    "stats": {
      "pace": 87,
      "shooting": 63,
      "passing": 69,
      "dribbling": 78,
      "defending": 36,
      "physical": 61
    }
  },
  {
    "id": "p4791",
    "name": "Nicolas Cozza",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "VfL Wolfsburg",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 39,
      "passing": 62,
      "dribbling": 69,
      "defending": 57,
      "physical": 72
    }
  },
  {
    "id": "p4886",
    "name": "Hillal Soudani",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Algeria",
    "era": "Legends",
    "league": "Other",
    "rating": 73,
    "club": "Damac FC",
    "age": 35,
    "stats": {
      "pace": 74,
      "shooting": 71,
      "passing": 70,
      "dribbling": 74,
      "defending": 28,
      "physical": 73
    }
  },
  {
    "id": "p4905",
    "name": "Gabriel Strefezza",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 73,
    "club": "Lecce",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 61,
      "passing": 73,
      "dribbling": 81,
      "defending": 21,
      "physical": 55
    }
  },
  {
    "id": "p4906",
    "name": "Oualid El Hajjam",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 73,
    "club": "Havre AC",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 46,
      "passing": 66,
      "dribbling": 66,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p4956",
    "name": "Benjamin Šeško",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Slovenia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "RB Salzburg",
    "age": 20,
    "stats": {
      "pace": 81,
      "shooting": 73,
      "passing": 59,
      "dribbling": 71,
      "defending": 27,
      "physical": 75
    }
  },
  {
    "id": "p4961",
    "name": "Stanley Nsoki",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "TSG Hoffenheim",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 37,
      "passing": 64,
      "dribbling": 65,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p4986",
    "name": "Marc Roca",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Leeds United",
    "age": 26,
    "stats": {
      "pace": 59,
      "shooting": 59,
      "passing": 78,
      "dribbling": 71,
      "defending": 55,
      "physical": 67
    }
  },
  {
    "id": "p5009",
    "name": "Octavio Moraseca",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Sport Boys",
    "age": 27,
    "stats": {
      "pace": 65,
      "shooting": 45,
      "passing": 67,
      "dribbling": 59,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p5036",
    "name": "Thijmen Goppel",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Wehen Wiesbaden",
    "age": 26,
    "stats": {
      "pace": 87,
      "shooting": 54,
      "passing": 60,
      "dribbling": 71,
      "defending": 38,
      "physical": 67
    }
  },
  {
    "id": "p5109",
    "name": "Kerem Aktürkoğlu",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Galatasaray",
    "age": 24,
    "stats": {
      "pace": 85,
      "shooting": 67,
      "passing": 66,
      "dribbling": 77,
      "defending": 27,
      "physical": 54
    }
  },
  {
    "id": "p5295",
    "name": "Joel Robles",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Leeds United",
    "age": 33,
    "stats": {
      "pace": 51,
      "shooting": 22,
      "passing": 24,
      "dribbling": 33,
      "defending": 12,
      "physical": 44
    }
  },
  {
    "id": "p5306",
    "name": "Jacob Rinne",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 73,
    "club": "Al Fateh",
    "age": 30,
    "stats": {
      "pace": 47,
      "shooting": 25,
      "passing": 41,
      "dribbling": 32,
      "defending": 11,
      "physical": 47
    }
  },
  {
    "id": "p5383",
    "name": "Sandelas Júnior",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "Santos",
    "age": 31,
    "stats": {
      "pace": 61,
      "shooting": 55,
      "passing": 66,
      "dribbling": 63,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p5391",
    "name": "Zervandro",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "Brazil",
    "age": 23,
    "stats": {
      "pace": 68,
      "shooting": 47,
      "passing": 61,
      "dribbling": 54,
      "defending": 59,
      "physical": 78
    }
  },
  {
    "id": "p5484",
    "name": "Tomáš Čvančara",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Czech Republic",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 73,
    "club": "Sparta Praha",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 69,
      "passing": 55,
      "dribbling": 64,
      "defending": 14,
      "physical": 70
    }
  },
  {
    "id": "p5525",
    "name": "Leo Vimieiro",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "São Paulo",
    "age": 27,
    "stats": {
      "pace": 73,
      "shooting": 54,
      "passing": 66,
      "dribbling": 71,
      "defending": 56,
      "physical": 71
    }
  },
  {
    "id": "p5628",
    "name": "Dominick Drexler",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 73,
    "club": "FC Schalke 04",
    "age": 33,
    "stats": {
      "pace": 64,
      "shooting": 62,
      "passing": 72,
      "dribbling": 74,
      "defending": 34,
      "physical": 62
    }
  },
  {
    "id": "p5639",
    "name": "Niko Gießelmann",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 73,
    "club": "Union Berlin",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 60,
      "passing": 71,
      "dribbling": 68,
      "defending": 53,
      "physical": 77
    }
  },
  {
    "id": "p6",
    "name": "Cláudio Ramos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FC Porto",
    "age": 31,
    "stats": {
      "pace": 55,
      "shooting": 22,
      "passing": 28,
      "dribbling": 41,
      "defending": 13,
      "physical": 55
    }
  },
  {
    "id": "p154",
    "name": "Stuart Armstrong",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Southampton",
    "age": 31,
    "stats": {
      "pace": 70,
      "shooting": 75,
      "passing": 73,
      "dribbling": 73,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p162",
    "name": "Vinicius Cardenha",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Fluminense",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 46,
      "passing": 60,
      "dribbling": 68,
      "defending": 54,
      "physical": 72
    }
  },
  {
    "id": "p224",
    "name": "Durval Dutría",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Cuiabá",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 67,
      "passing": 70,
      "dribbling": 67,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p258",
    "name": "Itumeleng Khune",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "South Africa",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Kaizer Chiefs",
    "age": 36,
    "stats": {
      "pace": 35,
      "shooting": 29,
      "passing": 43,
      "dribbling": 41,
      "defending": 14,
      "physical": 50
    }
  },
  {
    "id": "p259",
    "name": "Iñaki Peña",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 72,
    "club": "FC Barcelona",
    "age": 24,
    "stats": {
      "pace": 36,
      "shooting": 19,
      "passing": 35,
      "dribbling": 33,
      "defending": 7,
      "physical": 41
    }
  },
  {
    "id": "p271",
    "name": "Josep Señé",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "CD Lugo",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 62,
      "passing": 71,
      "dribbling": 70,
      "defending": 42,
      "physical": 62
    }
  },
  {
    "id": "p281",
    "name": "Johann Lepenant",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "OL",
    "age": 20,
    "stats": {
      "pace": 73,
      "shooting": 45,
      "passing": 68,
      "dribbling": 74,
      "defending": 53,
      "physical": 70
    }
  },
  {
    "id": "p355",
    "name": "Loren",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "UD Las Palmas",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 72,
      "passing": 58,
      "dribbling": 66,
      "defending": 17,
      "physical": 71
    }
  },
  {
    "id": "p357",
    "name": "Dax McCarty",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "United States",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Nashville SC",
    "age": 36,
    "stats": {
      "pace": 45,
      "shooting": 56,
      "passing": 65,
      "dribbling": 67,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p362",
    "name": "Takefusa Kubo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Japan",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 72,
    "club": "Real Sociedad",
    "age": 22,
    "stats": {
      "pace": 80,
      "shooting": 63,
      "passing": 67,
      "dribbling": 82,
      "defending": 30,
      "physical": 54
    }
  },
  {
    "id": "p363",
    "name": "Elvir Koljić",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Univ. Craiova",
    "age": 28,
    "stats": {
      "pace": 58,
      "shooting": 67,
      "passing": 49,
      "dribbling": 58,
      "defending": 21,
      "physical": 72
    }
  },
  {
    "id": "p441",
    "name": "Gautier Larsonneur",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "AS Saint-Étienne",
    "age": 26,
    "stats": {
      "pace": 52,
      "shooting": 26,
      "passing": 26,
      "dribbling": 43,
      "defending": 12,
      "physical": 48
    }
  },
  {
    "id": "p478",
    "name": "Jonathan Schmid",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "SC Freiburg",
    "age": 33,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 74,
      "dribbling": 76,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p580",
    "name": "Marcelo Lopes",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Cape Verde",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FC Voluntari",
    "age": 29,
    "stats": {
      "pace": 83,
      "shooting": 58,
      "passing": 62,
      "dribbling": 69,
      "defending": 17,
      "physical": 52
    }
  },
  {
    "id": "p624",
    "name": "Édundo Oliveira",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "RB Bragantino",
    "age": 31,
    "stats": {
      "pace": 56,
      "shooting": 50,
      "passing": 60,
      "dribbling": 52,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p638",
    "name": "Václav Jurečka",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Slavia Praha",
    "age": 29,
    "stats": {
      "pace": 75,
      "shooting": 71,
      "passing": 60,
      "dribbling": 69,
      "defending": 18,
      "physical": 76
    }
  },
  {
    "id": "p657",
    "name": "Freder Cabral",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 72,
    "club": "Atlético Mineiro",
    "age": 31,
    "stats": {
      "pace": 48,
      "shooting": 23,
      "passing": 29,
      "dribbling": 30,
      "defending": 10,
      "physical": 38
    }
  },
  {
    "id": "p721",
    "name": "Jeong Seung Hyun",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Ulsan Hyundai",
    "age": 29,
    "stats": {
      "pace": 43,
      "shooting": 29,
      "passing": 51,
      "dribbling": 41,
      "defending": 54,
      "physical": 79
    }
  },
  {
    "id": "p754",
    "name": "Adrián Burnabão",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "América Mineiro",
    "age": 27,
    "stats": {
      "pace": 61,
      "shooting": 68,
      "passing": 74,
      "dribbling": 74,
      "defending": 19,
      "physical": 62
    }
  },
  {
    "id": "p793",
    "name": "Stephen Kingsley",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hearts",
    "age": 29,
    "stats": {
      "pace": 63,
      "shooting": 55,
      "passing": 69,
      "dribbling": 71,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p807",
    "name": "Alan Pulido",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Mexico",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Sporting KC",
    "age": 32,
    "stats": {
      "pace": 73,
      "shooting": 70,
      "passing": 65,
      "dribbling": 71,
      "defending": 24,
      "physical": 70
    }
  },
  {
    "id": "p809",
    "name": "Toni Borevković",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hajduk Split",
    "age": 26,
    "stats": {
      "pace": 48,
      "shooting": 31,
      "passing": 46,
      "dribbling": 42,
      "defending": 53,
      "physical": 70
    }
  },
  {
    "id": "p810",
    "name": "Jean-Luc Dompé",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hamburger SV",
    "age": 28,
    "stats": {
      "pace": 77,
      "shooting": 74,
      "passing": 71,
      "dribbling": 80,
      "defending": 31,
      "physical": 59
    }
  },
  {
    "id": "p839",
    "name": "Odei",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hyderabad FC",
    "age": 33,
    "stats": {
      "pace": 57,
      "shooting": 36,
      "passing": 47,
      "dribbling": 51,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p846",
    "name": "Rafael Martins",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Casa Pia AC",
    "age": 34,
    "stats": {
      "pace": 71,
      "shooting": 74,
      "passing": 56,
      "dribbling": 69,
      "defending": 16,
      "physical": 68
    }
  },
  {
    "id": "p934",
    "name": "Silviu Lung",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Romania",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 72,
    "club": "Al Raed",
    "age": 34,
    "stats": {
      "pace": 37,
      "shooting": 24,
      "passing": 35,
      "dribbling": 42,
      "defending": 12,
      "physical": 45
    }
  },
  {
    "id": "p943",
    "name": "Tony Jantschke",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "M'gladbach",
    "age": 33,
    "stats": {
      "pace": 64,
      "shooting": 41,
      "passing": 64,
      "dribbling": 65,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p945",
    "name": "Ernesto Torregrossa",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Pisa",
    "age": 31,
    "stats": {
      "pace": 73,
      "shooting": 67,
      "passing": 53,
      "dribbling": 69,
      "defending": 17,
      "physical": 73
    }
  },
  {
    "id": "p996",
    "name": "Dedryck Boyata",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Club Brugge",
    "age": 32,
    "stats": {
      "pace": 67,
      "shooting": 36,
      "passing": 54,
      "dribbling": 60,
      "defending": 56,
      "physical": 74
    }
  },
  {
    "id": "p1045",
    "name": "Alminho Boas",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 72,
    "club": "Atlético Mineiro",
    "age": 27,
    "stats": {
      "pace": 60,
      "shooting": 36,
      "passing": 61,
      "dribbling": 72,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p1102",
    "name": "Dave Bulthuis",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Suwon Samsung",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 39,
      "passing": 56,
      "dribbling": 51,
      "defending": 53,
      "physical": 84
    }
  },
  {
    "id": "p1132",
    "name": "Christian Kabasele",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Watford",
    "age": 32,
    "stats": {
      "pace": 58,
      "shooting": 51,
      "passing": 51,
      "dribbling": 57,
      "defending": 55,
      "physical": 75
    }
  },
  {
    "id": "p1146",
    "name": "Ezequiel Cañete",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Unión",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 70,
      "passing": 70,
      "dribbling": 73,
      "defending": 38,
      "physical": 67
    }
  },
  {
    "id": "p1205",
    "name": "Omar El Kaddouri",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "PAOK FC",
    "age": 33,
    "stats": {
      "pace": 70,
      "shooting": 70,
      "passing": 74,
      "dribbling": 66,
      "defending": 44,
      "physical": 67
    }
  },
  {
    "id": "p1211",
    "name": "Lucas Hoyos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Newell's",
    "age": 34,
    "stats": {
      "pace": 62,
      "shooting": 26,
      "passing": 36,
      "dribbling": 48,
      "defending": 19,
      "physical": 55
    }
  },
  {
    "id": "p1251",
    "name": "Giorgos Athanasiadis",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "AEK Athens",
    "age": 30,
    "stats": {
      "pace": 32,
      "shooting": 19,
      "passing": 22,
      "dribbling": 27,
      "defending": 8,
      "physical": 50
    }
  },
  {
    "id": "p1254",
    "name": "Caoimhin Kelleher",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 72,
    "club": "Liverpool",
    "age": 24,
    "stats": {
      "pace": 42,
      "shooting": 20,
      "passing": 33,
      "dribbling": 33,
      "defending": 9,
      "physical": 42
    }
  },
  {
    "id": "p1278",
    "name": "Bastian Oczipka",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Arminia Bielefeld",
    "age": 34,
    "stats": {
      "pace": 65,
      "shooting": 59,
      "passing": 70,
      "dribbling": 63,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p1331",
    "name": "Brandon Vazquez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FC Cincinnati",
    "age": 24,
    "stats": {
      "pace": 76,
      "shooting": 70,
      "passing": 52,
      "dribbling": 64,
      "defending": 20,
      "physical": 75
    }
  },
  {
    "id": "p1336",
    "name": "José Andrés Martínez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Philadelphia",
    "age": 29,
    "stats": {
      "pace": 72,
      "shooting": 42,
      "passing": 61,
      "dribbling": 72,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p1363",
    "name": "Dries Wouters",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "KV Mechelen",
    "age": 26,
    "stats": {
      "pace": 47,
      "shooting": 40,
      "passing": 57,
      "dribbling": 55,
      "defending": 51,
      "physical": 66
    }
  },
  {
    "id": "p1457",
    "name": "Luís Neto",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Sporting CP",
    "age": 35,
    "stats": {
      "pace": 62,
      "shooting": 38,
      "passing": 54,
      "dribbling": 59,
      "defending": 59,
      "physical": 75
    }
  },
  {
    "id": "p1458",
    "name": "Taylor Harwood-Bellis",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 72,
    "club": "Burnley",
    "age": 21,
    "stats": {
      "pace": 67,
      "shooting": 37,
      "passing": 60,
      "dribbling": 62,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p1478",
    "name": "Roderick Miranda",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Melb. Victory",
    "age": 32,
    "stats": {
      "pace": 39,
      "shooting": 41,
      "passing": 52,
      "dribbling": 44,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p1499",
    "name": "Christian D'Urso",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Cosenza",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 52,
      "passing": 69,
      "dribbling": 76,
      "defending": 35,
      "physical": 55
    }
  },
  {
    "id": "p1560",
    "name": "Michy Batshuayi",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Fenerbahçe",
    "age": 29,
    "stats": {
      "pace": 78,
      "shooting": 78,
      "passing": 59,
      "dribbling": 75,
      "defending": 21,
      "physical": 76
    }
  },
  {
    "id": "p1597",
    "name": "Bilal Hussein",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "AIK",
    "age": 23,
    "stats": {
      "pace": 69,
      "shooting": 58,
      "passing": 71,
      "dribbling": 76,
      "defending": 48,
      "physical": 74
    }
  },
  {
    "id": "p1619",
    "name": "Alessandro Bellemo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Como",
    "age": 28,
    "stats": {
      "pace": 54,
      "shooting": 54,
      "passing": 63,
      "dribbling": 67,
      "defending": 49,
      "physical": 70
    }
  },
  {
    "id": "p1620",
    "name": "Marc-Oliver Kempf",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "Hertha Berlin",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 43,
      "passing": 57,
      "dribbling": 62,
      "defending": 57,
      "physical": 79
    }
  },
  {
    "id": "p1622",
    "name": "Martín Campaña",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Al Batin",
    "age": 34,
    "stats": {
      "pace": 45,
      "shooting": 25,
      "passing": 35,
      "dribbling": 34,
      "defending": 16,
      "physical": 49
    }
  },
  {
    "id": "p1626",
    "name": "Fayçal Fajr",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 72,
    "club": "Al Wehda",
    "age": 35,
    "stats": {
      "pace": 60,
      "shooting": 72,
      "passing": 77,
      "dribbling": 75,
      "defending": 51,
      "physical": 61
    }
  },
  {
    "id": "p1677",
    "name": "Sebastiaan Bornauw",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "VfL Wolfsburg",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 43,
      "passing": 61,
      "dribbling": 53,
      "defending": 56,
      "physical": 76
    }
  },
  {
    "id": "p1756",
    "name": "Anfernee Dijksteel",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Middlesbrough",
    "age": 26,
    "stats": {
      "pace": 78,
      "shooting": 36,
      "passing": 58,
      "dribbling": 67,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p1761",
    "name": "Joël Drommel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "PSV",
    "age": 26,
    "stats": {
      "pace": 51,
      "shooting": 25,
      "passing": 37,
      "dribbling": 44,
      "defending": 12,
      "physical": 53
    }
  },
  {
    "id": "p1845",
    "name": "Jeppe Andersen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Sarpsborg 08",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 62,
      "passing": 65,
      "dribbling": 69,
      "defending": 47,
      "physical": 81
    }
  },
  {
    "id": "p1886",
    "name": "Jordan Torunarigha",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "KAA Gent",
    "age": 26,
    "stats": {
      "pace": 85,
      "shooting": 34,
      "passing": 67,
      "dribbling": 64,
      "defending": 57,
      "physical": 73
    }
  },
  {
    "id": "p1890",
    "name": "Lee Evans",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Ipswich",
    "age": 29,
    "stats": {
      "pace": 53,
      "shooting": 66,
      "passing": 68,
      "dribbling": 65,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p1912",
    "name": "Olisa Ndah",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Orlando Pirates",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 45,
      "passing": 54,
      "dribbling": 60,
      "defending": 56,
      "physical": 76
    }
  },
  {
    "id": "p1926",
    "name": "Quentin Bernard",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Niort",
    "age": 34,
    "stats": {
      "pace": 56,
      "shooting": 52,
      "passing": 70,
      "dribbling": 63,
      "defending": 50,
      "physical": 79
    }
  },
  {
    "id": "p2078",
    "name": "Viktor Gyökeres",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Coventry City",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 71,
      "passing": 61,
      "dribbling": 74,
      "defending": 17,
      "physical": 75
    }
  },
  {
    "id": "p2173",
    "name": "Chris Führich",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "VfB Stuttgart",
    "age": 25,
    "stats": {
      "pace": 83,
      "shooting": 65,
      "passing": 70,
      "dribbling": 80,
      "defending": 39,
      "physical": 63
    }
  },
  {
    "id": "p2199",
    "name": "Christopher Lenz",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "Frankfurt",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 42,
      "passing": 66,
      "dribbling": 70,
      "defending": 55,
      "physical": 69
    }
  },
  {
    "id": "p2278",
    "name": "Alexander Milošević",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "AIK",
    "age": 31,
    "stats": {
      "pace": 52,
      "shooting": 54,
      "passing": 58,
      "dribbling": 55,
      "defending": 53,
      "physical": 71
    }
  },
  {
    "id": "p2282",
    "name": "Benjamin Verbič",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Panathinaikos",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 69,
      "passing": 66,
      "dribbling": 77,
      "defending": 28,
      "physical": 69
    }
  },
  {
    "id": "p2332",
    "name": "Juan Gabriel Rodríguez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Talleres",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 39,
      "passing": 58,
      "dribbling": 62,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p2343",
    "name": "Yoel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "SD Eibar",
    "age": 35,
    "stats": {
      "pace": 39,
      "shooting": 24,
      "passing": 34,
      "dribbling": 29,
      "defending": 11,
      "physical": 51
    }
  },
  {
    "id": "p2374",
    "name": "Breno Bausa",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Ceará SC",
    "age": 27,
    "stats": {
      "pace": 45,
      "shooting": 59,
      "passing": 64,
      "dribbling": 69,
      "defending": 51,
      "physical": 65
    }
  },
  {
    "id": "p2427",
    "name": "Lukas Grgic",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hajduk Split",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 44,
      "passing": 62,
      "dribbling": 61,
      "defending": 49,
      "physical": 79
    }
  },
  {
    "id": "p2433",
    "name": "Emmanuel Boateng",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Rio Ave FC",
    "age": 27,
    "stats": {
      "pace": 92,
      "shooting": 72,
      "passing": 57,
      "dribbling": 78,
      "defending": 26,
      "physical": 80
    }
  },
  {
    "id": "p2493",
    "name": "Sergio Barreto",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Independiente",
    "age": 24,
    "stats": {
      "pace": 76,
      "shooting": 31,
      "passing": 47,
      "dribbling": 54,
      "defending": 53,
      "physical": 82
    }
  },
  {
    "id": "p2509",
    "name": "Moi Gómez",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 72,
    "club": "CA Osasuna",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 72,
      "passing": 80,
      "dribbling": 77,
      "defending": 37,
      "physical": 63
    }
  },
  {
    "id": "p2517",
    "name": "Bartol Franjić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 72,
    "club": "VfL Wolfsburg",
    "age": 23,
    "stats": {
      "pace": 78,
      "shooting": 51,
      "passing": 64,
      "dribbling": 63,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p2530",
    "name": "Dominique Heintz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "VfL Bochum",
    "age": 30,
    "stats": {
      "pace": 54,
      "shooting": 39,
      "passing": 60,
      "dribbling": 53,
      "defending": 54,
      "physical": 73
    }
  },
  {
    "id": "p2540",
    "name": "Agustín Álvarez Martínez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 72,
    "club": "Sassuolo",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 73,
      "passing": 59,
      "dribbling": 70,
      "defending": 24,
      "physical": 68
    }
  },
  {
    "id": "p2565",
    "name": "Lazar Marković",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Gaziantep",
    "age": 29,
    "stats": {
      "pace": 83,
      "shooting": 65,
      "passing": 69,
      "dribbling": 81,
      "defending": 31,
      "physical": 54
    }
  },
  {
    "id": "p2674",
    "name": "Felipe Silva",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Rongcheng FC",
    "age": 30,
    "stats": {
      "pace": 76,
      "shooting": 72,
      "passing": 58,
      "dribbling": 67,
      "defending": 11,
      "physical": 81
    }
  },
  {
    "id": "p2675",
    "name": "João Basso",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Arouca",
    "age": 26,
    "stats": {
      "pace": 55,
      "shooting": 50,
      "passing": 56,
      "dribbling": 56,
      "defending": 55,
      "physical": 71
    }
  },
  {
    "id": "p2712",
    "name": "Anthony Briançon",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "AS Saint-Étienne",
    "age": 28,
    "stats": {
      "pace": 49,
      "shooting": 51,
      "passing": 56,
      "dribbling": 55,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p2771",
    "name": "Paulinho",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 72,
    "club": "Al Fayha",
    "age": 26,
    "stats": {
      "pace": 77,
      "shooting": 64,
      "passing": 67,
      "dribbling": 79,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p2797",
    "name": "Antonio Caracciolo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Pisa",
    "age": 33,
    "stats": {
      "pace": 58,
      "shooting": 28,
      "passing": 49,
      "dribbling": 64,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p2829",
    "name": "Ahmed Jahouh",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Mumbai City FC",
    "age": 35,
    "stats": {
      "pace": 37,
      "shooting": 58,
      "passing": 73,
      "dribbling": 57,
      "defending": 47,
      "physical": 81
    }
  },
  {
    "id": "p2896",
    "name": "Santiago Colombatto",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FC Famalicão",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 63,
      "passing": 69,
      "dribbling": 71,
      "defending": 48,
      "physical": 72
    }
  },
  {
    "id": "p2905",
    "name": "Kosuke Nakamura",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Portimonense SC",
    "age": 28,
    "stats": {
      "pace": 39,
      "shooting": 21,
      "passing": 24,
      "dribbling": 36,
      "defending": 9,
      "physical": 46
    }
  },
  {
    "id": "p2915",
    "name": "Lasse Berg Johnsen",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Randers FC",
    "age": 24,
    "stats": {
      "pace": 67,
      "shooting": 54,
      "passing": 64,
      "dribbling": 71,
      "defending": 50,
      "physical": 74
    }
  },
  {
    "id": "p2947",
    "name": "Nilson Alfarinho",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "La Liga",
    "rating": 72,
    "club": "Atlético-GO",
    "age": 39,
    "stats": {
      "pace": 37,
      "shooting": 21,
      "passing": 38,
      "dribbling": 28,
      "defending": 12,
      "physical": 46
    }
  },
  {
    "id": "p2950",
    "name": "Murildo Kauê",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Palmeiras",
    "age": 23,
    "stats": {
      "pace": 81,
      "shooting": 59,
      "passing": 73,
      "dribbling": 74,
      "defending": 28,
      "physical": 61
    }
  },
  {
    "id": "p2996",
    "name": "Juan Portillo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Talleres",
    "age": 23,
    "stats": {
      "pace": 78,
      "shooting": 56,
      "passing": 67,
      "dribbling": 73,
      "defending": 52,
      "physical": 81
    }
  },
  {
    "id": "p2999",
    "name": "Kevin Möhwald",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "Union Berlin",
    "age": 30,
    "stats": {
      "pace": 44,
      "shooting": 75,
      "passing": 74,
      "dribbling": 70,
      "defending": 43,
      "physical": 70
    }
  },
  {
    "id": "p3060",
    "name": "Simone Bastoni",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "La Spezia",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 57,
      "passing": 72,
      "dribbling": 70,
      "defending": 54,
      "physical": 66
    }
  },
  {
    "id": "p3065",
    "name": "Júnior Negão",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Changchun Yatai",
    "age": 36,
    "stats": {
      "pace": 77,
      "shooting": 73,
      "passing": 58,
      "dribbling": 66,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p3080",
    "name": "Greg Taylor",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Celtic",
    "age": 25,
    "stats": {
      "pace": 72,
      "shooting": 49,
      "passing": 71,
      "dribbling": 76,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p3096",
    "name": "Rubem Esteiro",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Palmeiras",
    "age": 35,
    "stats": {
      "pace": 76,
      "shooting": 64,
      "passing": 75,
      "dribbling": 77,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p3127",
    "name": "Facundo Pérez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Lanús",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 61,
      "passing": 70,
      "dribbling": 73,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p3133",
    "name": "Mark Travers",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 72,
    "club": "AFC Bournemouth",
    "age": 24,
    "stats": {
      "pace": 40,
      "shooting": 23,
      "passing": 39,
      "dribbling": 30,
      "defending": 11,
      "physical": 44
    }
  },
  {
    "id": "p3144",
    "name": "Sebastián Viera",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Junior",
    "age": 40,
    "stats": {
      "pace": 39,
      "shooting": 21,
      "passing": 33,
      "dribbling": 32,
      "defending": 10,
      "physical": 47
    }
  },
  {
    "id": "p3145",
    "name": "Frankie Amaya",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Red Bulls",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 54,
      "passing": 66,
      "dribbling": 75,
      "defending": 49,
      "physical": 68
    }
  },
  {
    "id": "p3150",
    "name": "Kenny McLean",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Norwich",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 67,
      "passing": 67,
      "dribbling": 69,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p3161",
    "name": "Dario Šarić",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Palermo",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 64,
      "passing": 67,
      "dribbling": 69,
      "defending": 37,
      "physical": 69
    }
  },
  {
    "id": "p3174",
    "name": "Brenner",
    "position": "CAM",
    "positions": [
      "CAM",
      "RW",
      "LW"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "FC Cincinnati",
    "age": 23,
    "stats": {
      "pace": 80,
      "shooting": 70,
      "passing": 63,
      "dribbling": 77,
      "defending": 20,
      "physical": 56
    }
  },
  {
    "id": "p3204",
    "name": "Joe Worrall",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Nott'm Forest",
    "age": 26,
    "stats": {
      "pace": 52,
      "shooting": 27,
      "passing": 51,
      "dribbling": 45,
      "defending": 56,
      "physical": 74
    }
  },
  {
    "id": "p3208",
    "name": "Josip Drmić",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Dinamo Zagreb",
    "age": 31,
    "stats": {
      "pace": 74,
      "shooting": 72,
      "passing": 63,
      "dribbling": 69,
      "defending": 28,
      "physical": 69
    }
  },
  {
    "id": "p3219",
    "name": "Vincent Vermeij",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "SC Freiburg II",
    "age": 29,
    "stats": {
      "pace": 41,
      "shooting": 67,
      "passing": 59,
      "dribbling": 49,
      "defending": 21,
      "physical": 67
    }
  },
  {
    "id": "p3264",
    "name": "Dany Mota",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Serie A",
    "rating": 72,
    "club": "Monza",
    "age": 25,
    "stats": {
      "pace": 80,
      "shooting": 72,
      "passing": 64,
      "dribbling": 76,
      "defending": 20,
      "physical": 64
    }
  },
  {
    "id": "p3326",
    "name": "Jackson Muleka",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "DR Congo",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Beşiktaş",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 70,
      "passing": 57,
      "dribbling": 75,
      "defending": 21,
      "physical": 72
    }
  },
  {
    "id": "p3372",
    "name": "Oleksandr Syrota",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ukraine",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Dynamo Kyiv",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 26,
      "passing": 40,
      "dribbling": 58,
      "defending": 53,
      "physical": 74
    }
  },
  {
    "id": "p3431",
    "name": "Clavería",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "CD Lugo",
    "age": 27,
    "stats": {
      "pace": 75,
      "shooting": 63,
      "passing": 62,
      "dribbling": 67,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p3451",
    "name": "João Victor",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 72,
    "club": "FC Nantes",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 49,
      "passing": 52,
      "dribbling": 56,
      "defending": 56,
      "physical": 78
    }
  },
  {
    "id": "p3459",
    "name": "Mitchell Dijks",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Vitesse",
    "age": 30,
    "stats": {
      "pace": 60,
      "shooting": 42,
      "passing": 64,
      "dribbling": 55,
      "defending": 52,
      "physical": 65
    }
  },
  {
    "id": "p3461",
    "name": "Javi Muñoz",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "SD Eibar",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 62,
      "passing": 68,
      "dribbling": 70,
      "defending": 48,
      "physical": 65
    }
  },
  {
    "id": "p3490",
    "name": "Nicklas Shipnoski",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Jahn Regensburg",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 59,
      "passing": 59,
      "dribbling": 72,
      "defending": 20,
      "physical": 50
    }
  },
  {
    "id": "p3645",
    "name": "Andrés Mosquera",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Indep. Medellín",
    "age": 31,
    "stats": {
      "pace": 44,
      "shooting": 23,
      "passing": 26,
      "dribbling": 32,
      "defending": 15,
      "physical": 44
    }
  },
  {
    "id": "p3654",
    "name": "Marcel Büchel",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Liechtenstein",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Ascoli",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 60,
      "passing": 68,
      "dribbling": 75,
      "defending": 47,
      "physical": 70
    }
  },
  {
    "id": "p3698",
    "name": "Jean-Manuel Mbom",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 72,
    "club": "SV Werder Bremen",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 57,
      "passing": 68,
      "dribbling": 70,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p3763",
    "name": "Lukáš Haraslín",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Sparta Praha",
    "age": 27,
    "stats": {
      "pace": 80,
      "shooting": 67,
      "passing": 69,
      "dribbling": 81,
      "defending": 31,
      "physical": 60
    }
  },
  {
    "id": "p3786",
    "name": "Mariano Andújar",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Estudiantes",
    "age": 40,
    "stats": {
      "pace": 45,
      "shooting": 21,
      "passing": 26,
      "dribbling": 29,
      "defending": 14,
      "physical": 55
    }
  },
  {
    "id": "p3846",
    "name": "M'Baye Niang",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "AJ Auxerre",
    "age": 28,
    "stats": {
      "pace": 73,
      "shooting": 75,
      "passing": 64,
      "dribbling": 69,
      "defending": 19,
      "physical": 65
    }
  },
  {
    "id": "p3875",
    "name": "Marius Ștefănescu",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Sepsi OSK",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 59,
      "passing": 62,
      "dribbling": 70,
      "defending": 44,
      "physical": 70
    }
  },
  {
    "id": "p3889",
    "name": "CJ Sapong",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "United States",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Nashville SC",
    "age": 34,
    "stats": {
      "pace": 71,
      "shooting": 66,
      "passing": 60,
      "dribbling": 65,
      "defending": 29,
      "physical": 83
    }
  },
  {
    "id": "p3902",
    "name": "Ross Barkley",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 72,
    "club": "OGC Nice",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 73,
      "passing": 73,
      "dribbling": 70,
      "defending": 41,
      "physical": 67
    }
  },
  {
    "id": "p3903",
    "name": "Mahamé Siby",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Mali",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Malmö FF",
    "age": 27,
    "stats": {
      "pace": 54,
      "shooting": 49,
      "passing": 62,
      "dribbling": 60,
      "defending": 50,
      "physical": 75
    }
  },
  {
    "id": "p3905",
    "name": "Karl Darlow",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Hull City",
    "age": 32,
    "stats": {
      "pace": 57,
      "shooting": 23,
      "passing": 29,
      "dribbling": 43,
      "defending": 12,
      "physical": 47
    }
  },
  {
    "id": "p3944",
    "name": "Stefano Beltrame",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Marítimo",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 67,
      "passing": 72,
      "dribbling": 74,
      "defending": 30,
      "physical": 60
    }
  },
  {
    "id": "p3949",
    "name": "Dani Cárdenas",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Levante UD",
    "age": 26,
    "stats": {
      "pace": 44,
      "shooting": 18,
      "passing": 33,
      "dribbling": 32,
      "defending": 8,
      "physical": 42
    }
  },
  {
    "id": "p3969",
    "name": "Sondre Fet",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FK Bodø/Glimt",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 54,
      "passing": 65,
      "dribbling": 68,
      "defending": 47,
      "physical": 75
    }
  },
  {
    "id": "p4083",
    "name": "Nicolás Orsini",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Boca Juniors",
    "age": 28,
    "stats": {
      "pace": 77,
      "shooting": 69,
      "passing": 58,
      "dribbling": 70,
      "defending": 17,
      "physical": 72
    }
  },
  {
    "id": "p4093",
    "name": "Rodrigo Becão",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 72,
    "club": "Udinese",
    "age": 27,
    "stats": {
      "pace": 49,
      "shooting": 33,
      "passing": 56,
      "dribbling": 48,
      "defending": 59,
      "physical": 70
    }
  },
  {
    "id": "p4112",
    "name": "Mirko Pigliacelli",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Palermo",
    "age": 30,
    "stats": {
      "pace": 48,
      "shooting": 29,
      "passing": 50,
      "dribbling": 35,
      "defending": 16,
      "physical": 46
    }
  },
  {
    "id": "p4152",
    "name": "José Callejón",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 72,
    "club": "Granada CF",
    "age": 36,
    "stats": {
      "pace": 75,
      "shooting": 76,
      "passing": 74,
      "dribbling": 78,
      "defending": 30,
      "physical": 62
    }
  },
  {
    "id": "p4180",
    "name": "Gregory Wüthrich",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "SK Sturm Graz",
    "age": 28,
    "stats": {
      "pace": 53,
      "shooting": 35,
      "passing": 52,
      "dribbling": 50,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p4234",
    "name": "Yoann Court",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "SM Caen",
    "age": 33,
    "stats": {
      "pace": 68,
      "shooting": 59,
      "passing": 73,
      "dribbling": 76,
      "defending": 34,
      "physical": 72
    }
  },
  {
    "id": "p4241",
    "name": "Wayne Hennessey",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Wales",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Nott'm Forest",
    "age": 36,
    "stats": {
      "pace": 41,
      "shooting": 22,
      "passing": 35,
      "dribbling": 33,
      "defending": 13,
      "physical": 40
    }
  },
  {
    "id": "p4242",
    "name": "Ivanildo Fernandes",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FC Vizela",
    "age": 27,
    "stats": {
      "pace": 59,
      "shooting": 30,
      "passing": 48,
      "dribbling": 40,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p4341",
    "name": "Marcel Schuhen",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "SV Darmstadt 98",
    "age": 30,
    "stats": {
      "pace": 53,
      "shooting": 25,
      "passing": 33,
      "dribbling": 36,
      "defending": 13,
      "physical": 52
    }
  },
  {
    "id": "p4354",
    "name": "Benedikt Gimber",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Jahn Regensburg",
    "age": 26,
    "stats": {
      "pace": 65,
      "shooting": 47,
      "passing": 61,
      "dribbling": 59,
      "defending": 53,
      "physical": 81
    }
  },
  {
    "id": "p4366",
    "name": "Pol Lozano",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 72,
    "club": "Granada CF",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 58,
      "passing": 69,
      "dribbling": 73,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p4381",
    "name": "Santiago Rojas",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Tigre",
    "age": 27,
    "stats": {
      "pace": 25,
      "shooting": 18,
      "passing": 29,
      "dribbling": 26,
      "defending": 10,
      "physical": 45
    }
  },
  {
    "id": "p4437",
    "name": "Jannik Vestergaard",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Leicester City",
    "age": 31,
    "stats": {
      "pace": 32,
      "shooting": 48,
      "passing": 63,
      "dribbling": 40,
      "defending": 56,
      "physical": 73
    }
  },
  {
    "id": "p4456",
    "name": "Brede Mathias Moe",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "FK Bodø/Glimt",
    "age": 31,
    "stats": {
      "pace": 67,
      "shooting": 45,
      "passing": 52,
      "dribbling": 58,
      "defending": 52,
      "physical": 80
    }
  },
  {
    "id": "p4475",
    "name": "Paul Jaeckel",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 72,
    "club": "Union Berlin",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 35,
      "passing": 52,
      "dribbling": 55,
      "defending": 58,
      "physical": 70
    }
  },
  {
    "id": "p4571",
    "name": "Mohammed Kanno",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 72,
    "club": "Al Hilal",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 67,
      "passing": 71,
      "dribbling": 70,
      "defending": 49,
      "physical": 73
    }
  },
  {
    "id": "p4594",
    "name": "Filip Panák",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Sparta Praha",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 52,
      "passing": 67,
      "dribbling": 64,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p4620",
    "name": "Armando Izzo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 72,
    "club": "Monza",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 38,
      "passing": 48,
      "dribbling": 64,
      "defending": 57,
      "physical": 76
    }
  },
  {
    "id": "p4679",
    "name": "Loïc Nestor",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Grenoble Foot 38",
    "age": 34,
    "stats": {
      "pace": 50,
      "shooting": 45,
      "passing": 58,
      "dribbling": 62,
      "defending": 52,
      "physical": 83
    }
  },
  {
    "id": "p4682",
    "name": "Javi López",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Adelaide United",
    "age": 37,
    "stats": {
      "pace": 66,
      "shooting": 51,
      "passing": 67,
      "dribbling": 67,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p4728",
    "name": "Giorgi Kvilitaia",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Georgia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Apoel FC",
    "age": 29,
    "stats": {
      "pace": 64,
      "shooting": 72,
      "passing": 58,
      "dribbling": 64,
      "defending": 24,
      "physical": 71
    }
  },
  {
    "id": "p4734",
    "name": "Joaquín Pereyra",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 72,
    "club": "Atlético Tucumán",
    "age": 24,
    "stats": {
      "pace": 67,
      "shooting": 64,
      "passing": 72,
      "dribbling": 70,
      "defending": 44,
      "physical": 66
    }
  },
  {
    "id": "p4739",
    "name": "Javier Báez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Independiente",
    "age": 32,
    "stats": {
      "pace": 70,
      "shooting": 52,
      "passing": 66,
      "dribbling": 66,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p4765",
    "name": "James Sands",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Rangers",
    "age": 23,
    "stats": {
      "pace": 48,
      "shooting": 47,
      "passing": 62,
      "dribbling": 63,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p4826",
    "name": "Tolgay Arslan",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Serie A",
    "rating": 72,
    "club": "Udinese",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 73,
      "passing": 73,
      "dribbling": 76,
      "defending": 55,
      "physical": 66
    }
  },
  {
    "id": "p4829",
    "name": "Diego Godín",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Vélez Sarsfield",
    "age": 37,
    "stats": {
      "pace": 49,
      "shooting": 50,
      "passing": 62,
      "dribbling": 57,
      "defending": 55,
      "physical": 78
    }
  },
  {
    "id": "p4858",
    "name": "Daizen Maeda",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Celtic",
    "age": 25,
    "stats": {
      "pace": 91,
      "shooting": 71,
      "passing": 61,
      "dribbling": 77,
      "defending": 35,
      "physical": 72
    }
  },
  {
    "id": "p4923",
    "name": "Krépin Diatta",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 72,
    "club": "AS Monaco",
    "age": 24,
    "stats": {
      "pace": 91,
      "shooting": 70,
      "passing": 67,
      "dribbling": 80,
      "defending": 33,
      "physical": 73
    }
  },
  {
    "id": "p4944",
    "name": "Danilo",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Feyenoord",
    "age": 24,
    "stats": {
      "pace": 77,
      "shooting": 72,
      "passing": 58,
      "dribbling": 76,
      "defending": 14,
      "physical": 72
    }
  },
  {
    "id": "p4970",
    "name": "Javi Llabrés",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "CD Mirandés",
    "age": 21,
    "stats": {
      "pace": 82,
      "shooting": 57,
      "passing": 57,
      "dribbling": 75,
      "defending": 23,
      "physical": 49
    }
  },
  {
    "id": "p5015",
    "name": "Chris Basham",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Premier League",
    "rating": 72,
    "club": "Sheffield Utd",
    "age": 35,
    "stats": {
      "pace": 53,
      "shooting": 47,
      "passing": 62,
      "dribbling": 59,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p5041",
    "name": "Ludovit Reis",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Hamburger SV",
    "age": 23,
    "stats": {
      "pace": 75,
      "shooting": 60,
      "passing": 69,
      "dribbling": 76,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p5063",
    "name": "Jérémy Doku",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Stade Rennais FC",
    "age": 21,
    "stats": {
      "pace": 92,
      "shooting": 63,
      "passing": 66,
      "dribbling": 84,
      "defending": 18,
      "physical": 65
    }
  },
  {
    "id": "p5067",
    "name": "Tom Lockyer",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Premier League",
    "rating": 72,
    "club": "Luton Town",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 33,
      "passing": 55,
      "dribbling": 63,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p5092",
    "name": "Lior Refaelov",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Israel",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "RSC Anderlecht",
    "age": 37,
    "stats": {
      "pace": 60,
      "shooting": 75,
      "passing": 74,
      "dribbling": 73,
      "defending": 38,
      "physical": 60
    }
  },
  {
    "id": "p5145",
    "name": "Andrei Burcă",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Serie A",
    "rating": 72,
    "club": "Romania",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 25,
      "passing": 44,
      "dribbling": 53,
      "defending": 53,
      "physical": 77
    }
  },
  {
    "id": "p5147",
    "name": "Bruno Bianchi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "La Liga",
    "rating": 72,
    "club": "Atlético Tucumán",
    "age": 34,
    "stats": {
      "pace": 59,
      "shooting": 36,
      "passing": 59,
      "dribbling": 56,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p5153",
    "name": "Geny Catamo",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Mozambique",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 72,
    "club": "Marítimo",
    "age": 22,
    "stats": {
      "pace": 84,
      "shooting": 57,
      "passing": 55,
      "dribbling": 72,
      "defending": 26,
      "physical": 42
    }
  },
  {
    "id": "p5201",
    "name": "Djaniny",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Cape Verde",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Trabzonspor",
    "age": 32,
    "stats": {
      "pace": 79,
      "shooting": 70,
      "passing": 68,
      "dribbling": 73,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p5204",
    "name": "Ewerton",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Slavia Praha",
    "age": 26,
    "stats": {
      "pace": 82,
      "shooting": 68,
      "passing": 67,
      "dribbling": 82,
      "defending": 20,
      "physical": 60
    }
  },
  {
    "id": "p5228",
    "name": "Samuel Oum Gouet",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "KV Mechelen",
    "age": 25,
    "stats": {
      "pace": 55,
      "shooting": 54,
      "passing": 64,
      "dribbling": 63,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p5237",
    "name": "Amadou Diawara",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Guinea",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "RSC Anderlecht",
    "age": 26,
    "stats": {
      "pace": 57,
      "shooting": 54,
      "passing": 70,
      "dribbling": 73,
      "defending": 54,
      "physical": 66
    }
  },
  {
    "id": "p5263",
    "name": "Adam Smith",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 72,
    "club": "AFC Bournemouth",
    "age": 32,
    "stats": {
      "pace": 67,
      "shooting": 59,
      "passing": 69,
      "dribbling": 69,
      "defending": 54,
      "physical": 70
    }
  },
  {
    "id": "p5353",
    "name": "Yimmi Chará",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Portland Timbers",
    "age": 32,
    "stats": {
      "pace": 90,
      "shooting": 67,
      "passing": 66,
      "dribbling": 83,
      "defending": 41,
      "physical": 74
    }
  },
  {
    "id": "p5409",
    "name": "Patrik Hrošovský",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "KRC Genk",
    "age": 31,
    "stats": {
      "pace": 67,
      "shooting": 73,
      "passing": 74,
      "dribbling": 77,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p5515",
    "name": "Sergi Gómez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "RCD Espanyol",
    "age": 31,
    "stats": {
      "pace": 59,
      "shooting": 46,
      "passing": 62,
      "dribbling": 56,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p5551",
    "name": "Jefferson Savarino",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Real Salt Lake",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 71,
      "passing": 67,
      "dribbling": 81,
      "defending": 26,
      "physical": 63
    }
  },
  {
    "id": "p5641",
    "name": "Gojko Cimirot",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 72,
    "club": "Standard Liège",
    "age": 30,
    "stats": {
      "pace": 63,
      "shooting": 62,
      "passing": 67,
      "dribbling": 70,
      "defending": 51,
      "physical": 71
    }
  },
  {
    "id": "p5648",
    "name": "Hakan Arslan",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Legends",
    "league": "Other",
    "rating": 72,
    "club": "Sivasspor",
    "age": 35,
    "stats": {
      "pace": 60,
      "shooting": 67,
      "passing": 66,
      "dribbling": 68,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p33",
    "name": "Michael Boxall",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "New Zealand",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Minnesota United",
    "age": 35,
    "stats": {
      "pace": 55,
      "shooting": 46,
      "passing": 58,
      "dribbling": 53,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p147",
    "name": "Patrick Sontheimer",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 71,
    "club": "Viktoria Köln",
    "age": 25,
    "stats": {
      "pace": 65,
      "shooting": 50,
      "passing": 65,
      "dribbling": 78,
      "defending": 48,
      "physical": 69
    }
  },
  {
    "id": "p184",
    "name": "Pablo Pérez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Newell's",
    "age": 38,
    "stats": {
      "pace": 55,
      "shooting": 69,
      "passing": 73,
      "dribbling": 69,
      "defending": 53,
      "physical": 74
    }
  },
  {
    "id": "p200",
    "name": "Bobby Decordova-Reid",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Jamaica",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Fulham",
    "age": 30,
    "stats": {
      "pace": 78,
      "shooting": 72,
      "passing": 69,
      "dribbling": 80,
      "defending": 43,
      "physical": 67
    }
  },
  {
    "id": "p222",
    "name": "Milton Menceiros",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Ceará SC",
    "age": 31,
    "stats": {
      "pace": 70,
      "shooting": 51,
      "passing": 56,
      "dribbling": 60,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p243",
    "name": "Bartholomew Ogbeche",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Nigeria",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Hyderabad FC",
    "age": 38,
    "stats": {
      "pace": 63,
      "shooting": 72,
      "passing": 53,
      "dribbling": 64,
      "defending": 20,
      "physical": 77
    }
  },
  {
    "id": "p270",
    "name": "Ismaël Chester Diallo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "AC Ajaccio",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 39,
      "passing": 54,
      "dribbling": 69,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p295",
    "name": "Nicola Bellomo",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Bari",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 64,
      "passing": 67,
      "dribbling": 73,
      "defending": 47,
      "physical": 68
    }
  },
  {
    "id": "p311",
    "name": "Javi Martínez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "SD Huesca",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 60,
      "passing": 63,
      "dribbling": 68,
      "defending": 43,
      "physical": 69
    }
  },
  {
    "id": "p339",
    "name": "Cican Stanković",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "AEK Athens",
    "age": 30,
    "stats": {
      "pace": 43,
      "shooting": 20,
      "passing": 24,
      "dribbling": 37,
      "defending": 13,
      "physical": 50
    }
  },
  {
    "id": "p341",
    "name": "Alexis Martín Arias",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Argentinos Jrs.",
    "age": 31,
    "stats": {
      "pace": 51,
      "shooting": 24,
      "passing": 25,
      "dribbling": 35,
      "defending": 15,
      "physical": 50
    }
  },
  {
    "id": "p397",
    "name": "Martin Ádám",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Hungary",
    "age": 28,
    "stats": {
      "pace": 62,
      "shooting": 74,
      "passing": 46,
      "dribbling": 56,
      "defending": 16,
      "physical": 68
    }
  },
  {
    "id": "p404",
    "name": "Luíz Carlos",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Paços Ferreira",
    "age": 38,
    "stats": {
      "pace": 54,
      "shooting": 65,
      "passing": 69,
      "dribbling": 70,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p407",
    "name": "Roberto Piccoli",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 71,
    "club": "Empoli",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 66,
      "passing": 49,
      "dribbling": 61,
      "defending": 24,
      "physical": 64
    }
  },
  {
    "id": "p415",
    "name": "Sinan Bolat",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "KVC Westerlo",
    "age": 34,
    "stats": {
      "pace": 43,
      "shooting": 23,
      "passing": 42,
      "dribbling": 33,
      "defending": 10,
      "physical": 50
    }
  },
  {
    "id": "p454",
    "name": "Emre Kılınç",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "MKE Ankaragücü",
    "age": 29,
    "stats": {
      "pace": 73,
      "shooting": 66,
      "passing": 67,
      "dribbling": 78,
      "defending": 40,
      "physical": 56
    }
  },
  {
    "id": "p475",
    "name": "Sandi Ogrinec",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "WSG Tirol",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 56,
      "passing": 67,
      "dribbling": 69,
      "defending": 38,
      "physical": 66
    }
  },
  {
    "id": "p539",
    "name": "Tom Davies",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Everton",
    "age": 25,
    "stats": {
      "pace": 65,
      "shooting": 61,
      "passing": 74,
      "dribbling": 71,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p569",
    "name": "Dejan Petrovič",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SK Rapid Wien",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 53,
      "passing": 70,
      "dribbling": 70,
      "defending": 45,
      "physical": 69
    }
  },
  {
    "id": "p577",
    "name": "Manuel Gulde",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 71,
    "club": "SC Freiburg",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 44,
      "passing": 51,
      "dribbling": 58,
      "defending": 56,
      "physical": 73
    }
  },
  {
    "id": "p590",
    "name": "David Simão",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Arouca",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 66,
      "passing": 73,
      "dribbling": 68,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p656",
    "name": "Oliver Berg",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Djurgårdens IF",
    "age": 30,
    "stats": {
      "pace": 75,
      "shooting": 66,
      "passing": 65,
      "dribbling": 72,
      "defending": 41,
      "physical": 74
    }
  },
  {
    "id": "p684",
    "name": "Papy Djilobodji",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Gaziantep",
    "age": 34,
    "stats": {
      "pace": 58,
      "shooting": 49,
      "passing": 54,
      "dribbling": 53,
      "defending": 53,
      "physical": 79
    }
  },
  {
    "id": "p688",
    "name": "Won Du Jae",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Gimcheon Sangmu",
    "age": 25,
    "stats": {
      "pace": 63,
      "shooting": 50,
      "passing": 62,
      "dribbling": 59,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p736",
    "name": "Billy Mitchell",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Millwall",
    "age": 22,
    "stats": {
      "pace": 68,
      "shooting": 53,
      "passing": 63,
      "dribbling": 69,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p816",
    "name": "Dimitry Bertaud",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Montpellier",
    "age": 25,
    "stats": {
      "pace": 54,
      "shooting": 27,
      "passing": 28,
      "dribbling": 35,
      "defending": 16,
      "physical": 51
    }
  },
  {
    "id": "p820",
    "name": "Edu Bedia",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "FC Goa",
    "age": 34,
    "stats": {
      "pace": 45,
      "shooting": 55,
      "passing": 68,
      "dribbling": 65,
      "defending": 34,
      "physical": 73
    }
  },
  {
    "id": "p841",
    "name": "Santiago Rodríguez",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "New York City FC",
    "age": 23,
    "stats": {
      "pace": 77,
      "shooting": 60,
      "passing": 68,
      "dribbling": 76,
      "defending": 29,
      "physical": 53
    }
  },
  {
    "id": "p864",
    "name": "Sebastian Holmén",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "IF Elfsborg",
    "age": 31,
    "stats": {
      "pace": 56,
      "shooting": 38,
      "passing": 50,
      "dribbling": 52,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p916",
    "name": "Pascal Stenzel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 71,
    "club": "VfB Stuttgart",
    "age": 27,
    "stats": {
      "pace": 52,
      "shooting": 58,
      "passing": 66,
      "dribbling": 65,
      "defending": 54,
      "physical": 69
    }
  },
  {
    "id": "p922",
    "name": "John Ruddy",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Birmingham City",
    "age": 36,
    "stats": {
      "pace": 41,
      "shooting": 22,
      "passing": 25,
      "dribbling": 20,
      "defending": 11,
      "physical": 50
    }
  },
  {
    "id": "p995",
    "name": "Damien Le Tallec",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FCSM",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 59,
      "passing": 66,
      "dribbling": 64,
      "defending": 53,
      "physical": 74
    }
  },
  {
    "id": "p1073",
    "name": "Bebé",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Cape Verde",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Real Zaragoza",
    "age": 33,
    "stats": {
      "pace": 81,
      "shooting": 78,
      "passing": 71,
      "dribbling": 69,
      "defending": 20,
      "physical": 79
    }
  },
  {
    "id": "p1085",
    "name": "Kevin Cordesia",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Colombia",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "América de Cali",
    "age": 35,
    "stats": {
      "pace": 77,
      "shooting": 68,
      "passing": 71,
      "dribbling": 73,
      "defending": 25,
      "physical": 62
    }
  },
  {
    "id": "p1104",
    "name": "Juan Andrada",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Godoy Cruz",
    "age": 28,
    "stats": {
      "pace": 56,
      "shooting": 54,
      "passing": 67,
      "dribbling": 64,
      "defending": 48,
      "physical": 71
    }
  },
  {
    "id": "p1112",
    "name": "César Pinares",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Uni. Católica",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 64,
      "passing": 71,
      "dribbling": 75,
      "defending": 38,
      "physical": 66
    }
  },
  {
    "id": "p1123",
    "name": "Song Si Woo",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Incheon United",
    "age": 30,
    "stats": {
      "pace": 83,
      "shooting": 63,
      "passing": 57,
      "dribbling": 67,
      "defending": 28,
      "physical": 61
    }
  },
  {
    "id": "p1142",
    "name": "Mikael Ishak",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Lech Poznań",
    "age": 30,
    "stats": {
      "pace": 72,
      "shooting": 72,
      "passing": 56,
      "dribbling": 65,
      "defending": 30,
      "physical": 77
    }
  },
  {
    "id": "p1175",
    "name": "Germán Pezzella",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Real Betis",
    "age": 32,
    "stats": {
      "pace": 51,
      "shooting": 48,
      "passing": 47,
      "dribbling": 49,
      "defending": 58,
      "physical": 73
    }
  },
  {
    "id": "p1189",
    "name": "John Fleck",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Sheffield Utd",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 73,
      "passing": 73,
      "dribbling": 77,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p1208",
    "name": "Jackson Yueill",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SJ Earthquakes",
    "age": 26,
    "stats": {
      "pace": 59,
      "shooting": 64,
      "passing": 68,
      "dribbling": 67,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p1272",
    "name": "Nicolai Poulsen",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "AGF",
    "age": 30,
    "stats": {
      "pace": 59,
      "shooting": 52,
      "passing": 68,
      "dribbling": 70,
      "defending": 47,
      "physical": 75
    }
  },
  {
    "id": "p1314",
    "name": "Pedro Mendes",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Montpellier",
    "age": 32,
    "stats": {
      "pace": 59,
      "shooting": 39,
      "passing": 49,
      "dribbling": 56,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p1318",
    "name": "Martin Erlić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Sassuolo",
    "age": 25,
    "stats": {
      "pace": 64,
      "shooting": 35,
      "passing": 49,
      "dribbling": 48,
      "defending": 56,
      "physical": 69
    }
  },
  {
    "id": "p1321",
    "name": "Alex Wilkinson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Sydney FC",
    "age": 39,
    "stats": {
      "pace": 32,
      "shooting": 49,
      "passing": 54,
      "dribbling": 50,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p1334",
    "name": "Lee Yeong Jae",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Gimcheon Sangmu",
    "age": 28,
    "stats": {
      "pace": 75,
      "shooting": 56,
      "passing": 65,
      "dribbling": 76,
      "defending": 40,
      "physical": 67
    }
  },
  {
    "id": "p1358",
    "name": "Václav Pilař",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Viktoria Plzeň",
    "age": 34,
    "stats": {
      "pace": 81,
      "shooting": 69,
      "passing": 68,
      "dribbling": 82,
      "defending": 30,
      "physical": 64
    }
  },
  {
    "id": "p1404",
    "name": "Lovre Kalinić",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Hajduk Split",
    "age": 33,
    "stats": {
      "pace": 39,
      "shooting": 22,
      "passing": 23,
      "dribbling": 19,
      "defending": 14,
      "physical": 52
    }
  },
  {
    "id": "p1452",
    "name": "Juan Carlos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "La Liga",
    "rating": 71,
    "club": "Girona FC",
    "age": 35,
    "stats": {
      "pace": 60,
      "shooting": 25,
      "passing": 31,
      "dribbling": 37,
      "defending": 16,
      "physical": 49
    }
  },
  {
    "id": "p1460",
    "name": "Filip Stojković",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Montenegro",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "LASK",
    "age": 30,
    "stats": {
      "pace": 70,
      "shooting": 44,
      "passing": 69,
      "dribbling": 68,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p1470",
    "name": "Víctor Chust",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 71,
    "club": "Cádiz CF",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 29,
      "passing": 52,
      "dribbling": 52,
      "defending": 57,
      "physical": 68
    }
  },
  {
    "id": "p1487",
    "name": "Nikolas Nartey",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 71,
    "club": "VfB Stuttgart",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 44,
      "passing": 68,
      "dribbling": 75,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p1528",
    "name": "Gus Outomouro",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Internacional",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 73,
      "passing": 68,
      "dribbling": 75,
      "defending": 17,
      "physical": 63
    }
  },
  {
    "id": "p1550",
    "name": "Alan Ruiz",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Arouca",
    "age": 30,
    "stats": {
      "pace": 54,
      "shooting": 74,
      "passing": 75,
      "dribbling": 74,
      "defending": 31,
      "physical": 61
    }
  },
  {
    "id": "p1578",
    "name": "Jóhann Berg Guðmundsson",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Iceland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Burnley",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 72,
      "passing": 73,
      "dribbling": 72,
      "defending": 45,
      "physical": 67
    }
  },
  {
    "id": "p1580",
    "name": "Ki Sung Yueng",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Korea Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "FC Seoul",
    "age": 34,
    "stats": {
      "pace": 46,
      "shooting": 67,
      "passing": 78,
      "dribbling": 66,
      "defending": 49,
      "physical": 72
    }
  },
  {
    "id": "p1616",
    "name": "Admir Mehmedi",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Antalyaspor",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 75,
      "passing": 69,
      "dribbling": 76,
      "defending": 30,
      "physical": 65
    }
  },
  {
    "id": "p1663",
    "name": "Jan Kopic",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Viktoria Plzeň",
    "age": 33,
    "stats": {
      "pace": 77,
      "shooting": 72,
      "passing": 72,
      "dribbling": 74,
      "defending": 25,
      "physical": 60
    }
  },
  {
    "id": "p1669",
    "name": "Naouirou Ahamada",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 71,
    "club": "Crystal Palace",
    "age": 21,
    "stats": {
      "pace": 72,
      "shooting": 59,
      "passing": 66,
      "dribbling": 77,
      "defending": 47,
      "physical": 65
    }
  },
  {
    "id": "p1702",
    "name": "Aleksandar Sedlar",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "D. Alavés",
    "age": 31,
    "stats": {
      "pace": 48,
      "shooting": 38,
      "passing": 50,
      "dribbling": 57,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p1709",
    "name": "Lucas Biglia",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Başakşehir",
    "age": 37,
    "stats": {
      "pace": 34,
      "shooting": 70,
      "passing": 78,
      "dribbling": 77,
      "defending": 57,
      "physical": 63
    }
  },
  {
    "id": "p1730",
    "name": "Lebo Mothiba",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Strasbourg",
    "age": 27,
    "stats": {
      "pace": 66,
      "shooting": 71,
      "passing": 59,
      "dribbling": 67,
      "defending": 13,
      "physical": 64
    }
  },
  {
    "id": "p1751",
    "name": "André Poko",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Gabon",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 71,
    "club": "Al Khaleej",
    "age": 30,
    "stats": {
      "pace": 74,
      "shooting": 55,
      "passing": 63,
      "dribbling": 72,
      "defending": 51,
      "physical": 78
    }
  },
  {
    "id": "p1787",
    "name": "Joshua Zirkzee",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 71,
    "club": "Bologna",
    "age": 22,
    "stats": {
      "pace": 69,
      "shooting": 72,
      "passing": 60,
      "dribbling": 70,
      "defending": 11,
      "physical": 64
    }
  },
  {
    "id": "p1795",
    "name": "Cole Bassett",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Colorado Rapids",
    "age": 22,
    "stats": {
      "pace": 68,
      "shooting": 55,
      "passing": 67,
      "dribbling": 71,
      "defending": 42,
      "physical": 65
    }
  },
  {
    "id": "p1831",
    "name": "Fabian Frei",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "FC Basel 1893",
    "age": 34,
    "stats": {
      "pace": 51,
      "shooting": 70,
      "passing": 70,
      "dribbling": 64,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p1840",
    "name": "Jeremy Ebobisse",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SJ Earthquakes",
    "age": 26,
    "stats": {
      "pace": 77,
      "shooting": 66,
      "passing": 63,
      "dribbling": 70,
      "defending": 23,
      "physical": 78
    }
  },
  {
    "id": "p1881",
    "name": "Ritchie De Laet",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Royal Antwerp FC",
    "age": 34,
    "stats": {
      "pace": 73,
      "shooting": 48,
      "passing": 64,
      "dribbling": 66,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p1967",
    "name": "Daniel Bentley",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Wolves",
    "age": 30,
    "stats": {
      "pace": 46,
      "shooting": 22,
      "passing": 34,
      "dribbling": 35,
      "defending": 12,
      "physical": 49
    }
  },
  {
    "id": "p1969",
    "name": "Jake Bidwell",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Coventry City",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 50,
      "passing": 67,
      "dribbling": 64,
      "defending": 50,
      "physical": 75
    }
  },
  {
    "id": "p2063",
    "name": "Markus Pink",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Austria Klagenfurt",
    "age": 32,
    "stats": {
      "pace": 50,
      "shooting": 68,
      "passing": 54,
      "dribbling": 56,
      "defending": 15,
      "physical": 73
    }
  },
  {
    "id": "p2072",
    "name": "Rémy Dugimont",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "AJ Auxerre",
    "age": 37,
    "stats": {
      "pace": 54,
      "shooting": 73,
      "passing": 70,
      "dribbling": 69,
      "defending": 24,
      "physical": 81
    }
  },
  {
    "id": "p2104",
    "name": "Panutche Camará",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Guinea Bissau",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Ipswich",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 57,
      "passing": 63,
      "dribbling": 65,
      "defending": 48,
      "physical": 64
    }
  },
  {
    "id": "p2176",
    "name": "Adil Aouchiche",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 71,
    "club": "FC Lorient",
    "age": 21,
    "stats": {
      "pace": 69,
      "shooting": 61,
      "passing": 71,
      "dribbling": 72,
      "defending": 40,
      "physical": 60
    }
  },
  {
    "id": "p2230",
    "name": "Omenuke Mfulu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "UD Las Palmas",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 52,
      "passing": 61,
      "dribbling": 66,
      "defending": 51,
      "physical": 74
    }
  },
  {
    "id": "p2236",
    "name": "Jorge Meré",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Cádiz CF",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 37,
      "passing": 53,
      "dribbling": 66,
      "defending": 55,
      "physical": 74
    }
  },
  {
    "id": "p2270",
    "name": "Alexander Fransson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "AEK Athens",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 65,
      "passing": 67,
      "dribbling": 73,
      "defending": 49,
      "physical": 73
    }
  },
  {
    "id": "p2279",
    "name": "Victor Lekhal",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Havre AC",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 48,
      "passing": 61,
      "dribbling": 65,
      "defending": 49,
      "physical": 80
    }
  },
  {
    "id": "p2284",
    "name": "Jonathan Hogg",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Huddersfield",
    "age": 34,
    "stats": {
      "pace": 55,
      "shooting": 53,
      "passing": 60,
      "dribbling": 67,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p2290",
    "name": "Robin Krauße",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Braunschweig",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 42,
      "passing": 63,
      "dribbling": 65,
      "defending": 51,
      "physical": 84
    }
  },
  {
    "id": "p2319",
    "name": "Marin Pongračić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Lecce",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 27,
      "passing": 53,
      "dribbling": 61,
      "defending": 56,
      "physical": 74
    }
  },
  {
    "id": "p2357",
    "name": "Antonio Cambrillo",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Bolivia",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Always Ready",
    "age": 35,
    "stats": {
      "pace": 68,
      "shooting": 70,
      "passing": 57,
      "dribbling": 72,
      "defending": 15,
      "physical": 64
    }
  },
  {
    "id": "p2406",
    "name": "Rúnar Már Sigurjónsson",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Iceland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Voluntari",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 71,
      "passing": 69,
      "dribbling": 70,
      "defending": 37,
      "physical": 77
    }
  },
  {
    "id": "p2456",
    "name": "Bernardo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "RB Salzburg",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 58,
      "passing": 61,
      "dribbling": 68,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p2461",
    "name": "Lucas Lima",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Başakşehir",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 61,
      "passing": 70,
      "dribbling": 72,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p2577",
    "name": "Dominik Greif",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "RCD Mallorca",
    "age": 26,
    "stats": {
      "pace": 19,
      "shooting": 19,
      "passing": 23,
      "dribbling": 17,
      "defending": 9,
      "physical": 33
    }
  },
  {
    "id": "p2590",
    "name": "Sonny Kittel",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Hamburger SV",
    "age": 30,
    "stats": {
      "pace": 76,
      "shooting": 70,
      "passing": 73,
      "dribbling": 79,
      "defending": 20,
      "physical": 49
    }
  },
  {
    "id": "p2665",
    "name": "Hugo Magnetti",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Stade Brestois 29",
    "age": 25,
    "stats": {
      "pace": 53,
      "shooting": 49,
      "passing": 68,
      "dribbling": 72,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p2715",
    "name": "Michał Helik",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Huddersfield",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 49,
      "passing": 47,
      "dribbling": 54,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p2732",
    "name": "Dorian Dessoleil",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "KV Kortrijk",
    "age": 31,
    "stats": {
      "pace": 53,
      "shooting": 47,
      "passing": 55,
      "dribbling": 53,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p2745",
    "name": "Pedro Obiang",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Equatorial Guinea",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Sassuolo",
    "age": 31,
    "stats": {
      "pace": 56,
      "shooting": 62,
      "passing": 70,
      "dribbling": 67,
      "defending": 54,
      "physical": 71
    }
  },
  {
    "id": "p2768",
    "name": "Jeison Murillo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Sampdoria",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 43,
      "passing": 62,
      "dribbling": 65,
      "defending": 54,
      "physical": 79
    }
  },
  {
    "id": "p2780",
    "name": "Aketxe",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SD Eibar",
    "age": 29,
    "stats": {
      "pace": 60,
      "shooting": 76,
      "passing": 79,
      "dribbling": 78,
      "defending": 35,
      "physical": 53
    }
  },
  {
    "id": "p2848",
    "name": "Kenneth Omeruo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "CD Leganés",
    "age": 29,
    "stats": {
      "pace": 64,
      "shooting": 34,
      "passing": 51,
      "dribbling": 56,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p2874",
    "name": "Cristian Álvarez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Real Zaragoza",
    "age": 37,
    "stats": {
      "pace": 47,
      "shooting": 23,
      "passing": 29,
      "dribbling": 38,
      "defending": 13,
      "physical": 47
    }
  },
  {
    "id": "p2895",
    "name": "Ezequiel Lorcado",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Peru",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Ayacucho",
    "age": 23,
    "stats": {
      "pace": 51,
      "shooting": 37,
      "passing": 64,
      "dribbling": 52,
      "defending": 52,
      "physical": 67
    }
  },
  {
    "id": "p2966",
    "name": "Juan Cala",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Cádiz CF",
    "age": 33,
    "stats": {
      "pace": 50,
      "shooting": 56,
      "passing": 60,
      "dribbling": 58,
      "defending": 51,
      "physical": 78
    }
  },
  {
    "id": "p2980",
    "name": "Jeppe Tverskov",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Odense BK",
    "age": 30,
    "stats": {
      "pace": 47,
      "shooting": 42,
      "passing": 55,
      "dribbling": 59,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p3024",
    "name": "Nick Bätzner",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "KV Oostende",
    "age": 23,
    "stats": {
      "pace": 72,
      "shooting": 60,
      "passing": 72,
      "dribbling": 77,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p3067",
    "name": "Juanpe",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Girona FC",
    "age": 32,
    "stats": {
      "pace": 54,
      "shooting": 34,
      "passing": 56,
      "dribbling": 42,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p3087",
    "name": "Pablo Villarronda",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Peru",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Cienciano",
    "age": 35,
    "stats": {
      "pace": 66,
      "shooting": 57,
      "passing": 60,
      "dribbling": 66,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p3094",
    "name": "Seny Dieng",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "QPR",
    "age": 28,
    "stats": {
      "pace": 40,
      "shooting": 19,
      "passing": 37,
      "dribbling": 24,
      "defending": 9,
      "physical": 45
    }
  },
  {
    "id": "p3137",
    "name": "Jhonder Cádiz",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Famalicão",
    "age": 28,
    "stats": {
      "pace": 62,
      "shooting": 67,
      "passing": 52,
      "dribbling": 62,
      "defending": 20,
      "physical": 73
    }
  },
  {
    "id": "p3143",
    "name": "Kristoffer Olsson",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Midtjylland",
    "age": 28,
    "stats": {
      "pace": 68,
      "shooting": 61,
      "passing": 73,
      "dribbling": 76,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p3154",
    "name": "Sven Michel",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 71,
    "club": "Union Berlin",
    "age": 33,
    "stats": {
      "pace": 74,
      "shooting": 74,
      "passing": 64,
      "dribbling": 75,
      "defending": 21,
      "physical": 73
    }
  },
  {
    "id": "p3162",
    "name": "Christopher Cvetko",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Austria Klagenfurt",
    "age": 26,
    "stats": {
      "pace": 60,
      "shooting": 59,
      "passing": 62,
      "dribbling": 62,
      "defending": 47,
      "physical": 72
    }
  },
  {
    "id": "p3228",
    "name": "Darren Randolph",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Republic of Ireland",
    "era": "Legends",
    "league": "Premier League",
    "rating": 71,
    "club": "AFC Bournemouth",
    "age": 36,
    "stats": {
      "pace": 43,
      "shooting": 24,
      "passing": 28,
      "dribbling": 35,
      "defending": 12,
      "physical": 45
    }
  },
  {
    "id": "p3235",
    "name": "Afonso Sousa",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Lech Poznań",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 62,
      "passing": 67,
      "dribbling": 76,
      "defending": 43,
      "physical": 55
    }
  },
  {
    "id": "p3321",
    "name": "Leo Østigård",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 71,
    "club": "Napoli FC",
    "age": 23,
    "stats": {
      "pace": 68,
      "shooting": 38,
      "passing": 50,
      "dribbling": 62,
      "defending": 53,
      "physical": 83
    }
  },
  {
    "id": "p3359",
    "name": "Jalil Elías",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "San Lorenzo",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 56,
      "passing": 69,
      "dribbling": 70,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p3369",
    "name": "Iván Martín",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Girona FC",
    "age": 24,
    "stats": {
      "pace": 76,
      "shooting": 64,
      "passing": 71,
      "dribbling": 74,
      "defending": 31,
      "physical": 54
    }
  },
  {
    "id": "p3373",
    "name": "Pedro Bigas Rigo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Elche CF",
    "age": 32,
    "stats": {
      "pace": 63,
      "shooting": 51,
      "passing": 65,
      "dribbling": 62,
      "defending": 55,
      "physical": 73
    }
  },
  {
    "id": "p3412",
    "name": "Ryan Manning",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Swansea City",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 55,
      "passing": 69,
      "dribbling": 74,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p3507",
    "name": "Victor Vinícius Coelho dos Santos",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Ettifaq FC",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 74,
      "passing": 71,
      "dribbling": 76,
      "defending": 31,
      "physical": 63
    }
  },
  {
    "id": "p3570",
    "name": "Benedikt Zech",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Pogoń Szczecin",
    "age": 32,
    "stats": {
      "pace": 81,
      "shooting": 29,
      "passing": 56,
      "dribbling": 59,
      "defending": 54,
      "physical": 72
    }
  },
  {
    "id": "p3581",
    "name": "Scott Hogan",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Birmingham City",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 69,
      "passing": 53,
      "dribbling": 68,
      "defending": 20,
      "physical": 56
    }
  },
  {
    "id": "p3602",
    "name": "Jarosław Kubicki",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Lechia Gdańsk",
    "age": 28,
    "stats": {
      "pace": 71,
      "shooting": 55,
      "passing": 63,
      "dribbling": 69,
      "defending": 48,
      "physical": 76
    }
  },
  {
    "id": "p3662",
    "name": "Elijah Adebayo",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Luton Town",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 69,
      "passing": 49,
      "dribbling": 67,
      "defending": 30,
      "physical": 76
    }
  },
  {
    "id": "p3683",
    "name": "Zhang Xizhe",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "China PR",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Beijing Guoan",
    "age": 32,
    "stats": {
      "pace": 75,
      "shooting": 62,
      "passing": 67,
      "dribbling": 72,
      "defending": 35,
      "physical": 61
    }
  },
  {
    "id": "p3701",
    "name": "Andrew Hughes",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Preston",
    "age": 31,
    "stats": {
      "pace": 63,
      "shooting": 39,
      "passing": 57,
      "dribbling": 61,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p3703",
    "name": "Axel Tuanzebe",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Stoke City",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 39,
      "passing": 65,
      "dribbling": 67,
      "defending": 55,
      "physical": 71
    }
  },
  {
    "id": "p3727",
    "name": "Richard Ofori",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Orlando Pirates",
    "age": 29,
    "stats": {
      "pace": 43,
      "shooting": 27,
      "passing": 36,
      "dribbling": 46,
      "defending": 16,
      "physical": 58
    }
  },
  {
    "id": "p3769",
    "name": "Matěj Vydra",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Viktoria Plzeň",
    "age": 31,
    "stats": {
      "pace": 80,
      "shooting": 73,
      "passing": 67,
      "dribbling": 76,
      "defending": 23,
      "physical": 68
    }
  },
  {
    "id": "p3772",
    "name": "Filippo Ranocchia",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 71,
    "club": "Monza",
    "age": 22,
    "stats": {
      "pace": 66,
      "shooting": 66,
      "passing": 69,
      "dribbling": 68,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p3831",
    "name": "Facundo Altamirano",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "San Lorenzo",
    "age": 27,
    "stats": {
      "pace": 45,
      "shooting": 24,
      "passing": 27,
      "dribbling": 28,
      "defending": 17,
      "physical": 50
    }
  },
  {
    "id": "p3908",
    "name": "Jérémy Le Douaron",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Stade Brestois 29",
    "age": 25,
    "stats": {
      "pace": 69,
      "shooting": 67,
      "passing": 65,
      "dribbling": 67,
      "defending": 35,
      "physical": 71
    }
  },
  {
    "id": "p3921",
    "name": "Karlo Muhar",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "CFR 1907 Cluj",
    "age": 27,
    "stats": {
      "pace": 65,
      "shooting": 48,
      "passing": 56,
      "dribbling": 59,
      "defending": 49,
      "physical": 78
    }
  },
  {
    "id": "p3955",
    "name": "Felipe Barridos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Ecuador",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "LDU Quito",
    "age": 35,
    "stats": {
      "pace": 33,
      "shooting": 22,
      "passing": 29,
      "dribbling": 26,
      "defending": 9,
      "physical": 55
    }
  },
  {
    "id": "p3998",
    "name": "Ádám Nagy",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Pisa",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 58,
      "passing": 70,
      "dribbling": 76,
      "defending": 54,
      "physical": 64
    }
  },
  {
    "id": "p4156",
    "name": "Lucien Agoumé",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "ESTAC Troyes",
    "age": 21,
    "stats": {
      "pace": 65,
      "shooting": 53,
      "passing": 69,
      "dribbling": 69,
      "defending": 50,
      "physical": 66
    }
  },
  {
    "id": "p4175",
    "name": "Marcelo Moreno Martins",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Bolivia",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "Cerro Porteño",
    "age": 36,
    "stats": {
      "pace": 51,
      "shooting": 75,
      "passing": 62,
      "dribbling": 65,
      "defending": 18,
      "physical": 74
    }
  },
  {
    "id": "p4191",
    "name": "Rubén Sobrino",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Cádiz CF",
    "age": 31,
    "stats": {
      "pace": 77,
      "shooting": 73,
      "passing": 60,
      "dribbling": 71,
      "defending": 21,
      "physical": 64
    }
  },
  {
    "id": "p4225",
    "name": "Alex das Freitas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "América Mineiro",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 57,
      "passing": 60,
      "dribbling": 66,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p4228",
    "name": "Hamad Al Yami",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 71,
    "club": "Al Hilal",
    "age": 24,
    "stats": {
      "pace": 85,
      "shooting": 54,
      "passing": 56,
      "dribbling": 69,
      "defending": 42,
      "physical": 57
    }
  },
  {
    "id": "p4240",
    "name": "Valentín Vada",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Real Zaragoza",
    "age": 27,
    "stats": {
      "pace": 64,
      "shooting": 67,
      "passing": 68,
      "dribbling": 70,
      "defending": 48,
      "physical": 71
    }
  },
  {
    "id": "p4262",
    "name": "Pedro Ferreira",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "AaB",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 43,
      "passing": 58,
      "dribbling": 62,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p4269",
    "name": "Zaydou Youssouf",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Famalicão",
    "age": 24,
    "stats": {
      "pace": 64,
      "shooting": 58,
      "passing": 70,
      "dribbling": 75,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p4304",
    "name": "Henk Veerman",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Volendam",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 64,
      "passing": 46,
      "dribbling": 46,
      "defending": 17,
      "physical": 71
    }
  },
  {
    "id": "p4333",
    "name": "Luquinha",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Portimonense SC",
    "age": 22,
    "stats": {
      "pace": 76,
      "shooting": 61,
      "passing": 74,
      "dribbling": 82,
      "defending": 23,
      "physical": 50
    }
  },
  {
    "id": "p4376",
    "name": "Davy Roef",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "KAA Gent",
    "age": 29,
    "stats": {
      "pace": 51,
      "shooting": 23,
      "passing": 39,
      "dribbling": 34,
      "defending": 10,
      "physical": 49
    }
  },
  {
    "id": "p4395",
    "name": "Sven Kums",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 71,
    "club": "KAA Gent",
    "age": 35,
    "stats": {
      "pace": 48,
      "shooting": 69,
      "passing": 75,
      "dribbling": 72,
      "defending": 51,
      "physical": 65
    }
  },
  {
    "id": "p4438",
    "name": "Manuel De Luca",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Sampdoria",
    "age": 25,
    "stats": {
      "pace": 45,
      "shooting": 67,
      "passing": 52,
      "dribbling": 58,
      "defending": 19,
      "physical": 64
    }
  },
  {
    "id": "p4546",
    "name": "Luis Muñoz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Málaga CF",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 62,
      "passing": 62,
      "dribbling": 61,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p4631",
    "name": "Liam Millar",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Canada",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Canada",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 61,
      "passing": 60,
      "dribbling": 71,
      "defending": 15,
      "physical": 57
    }
  },
  {
    "id": "p4678",
    "name": "Francisco Conceição",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Ajax",
    "age": 20,
    "stats": {
      "pace": 82,
      "shooting": 62,
      "passing": 69,
      "dribbling": 85,
      "defending": 23,
      "physical": 45
    }
  },
  {
    "id": "p4729",
    "name": "Lewis Holtby",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Holstein Kiel",
    "age": 32,
    "stats": {
      "pace": 64,
      "shooting": 67,
      "passing": 73,
      "dribbling": 76,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p4749",
    "name": "Jean-Philippe Gbamin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Trabzonspor",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 61,
      "passing": 72,
      "dribbling": 69,
      "defending": 56,
      "physical": 72
    }
  },
  {
    "id": "p4752",
    "name": "Max Power",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Wigan Athletic",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 64,
      "passing": 68,
      "dribbling": 67,
      "defending": 48,
      "physical": 80
    }
  },
  {
    "id": "p4786",
    "name": "Ronny Rodelin",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Servette FC",
    "age": 33,
    "stats": {
      "pace": 55,
      "shooting": 72,
      "passing": 69,
      "dribbling": 68,
      "defending": 26,
      "physical": 75
    }
  },
  {
    "id": "p4789",
    "name": "Miha Blažič",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Angers SCO",
    "age": 30,
    "stats": {
      "pace": 61,
      "shooting": 35,
      "passing": 56,
      "dribbling": 51,
      "defending": 55,
      "physical": 69
    }
  },
  {
    "id": "p4811",
    "name": "Timothée Kolodziejczak",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "FC Schalke 04",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 38,
      "passing": 67,
      "dribbling": 60,
      "defending": 51,
      "physical": 78
    }
  },
  {
    "id": "p4861",
    "name": "Koki Machida",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "R. Union St.-G.",
    "age": 26,
    "stats": {
      "pace": 79,
      "shooting": 33,
      "passing": 59,
      "dribbling": 49,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p4883",
    "name": "Joseph Attamah",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Kayserispor",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 55,
      "passing": 57,
      "dribbling": 62,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p4894",
    "name": "Eddie Nketiah",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 71,
    "club": "Arsenal",
    "age": 24,
    "stats": {
      "pace": 81,
      "shooting": 71,
      "passing": 55,
      "dribbling": 77,
      "defending": 14,
      "physical": 66
    }
  },
  {
    "id": "p4896",
    "name": "Juan Infante",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Platense",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 49,
      "passing": 60,
      "dribbling": 68,
      "defending": 53,
      "physical": 70
    }
  },
  {
    "id": "p4927",
    "name": "Tony Muttinho",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Fortaleza",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 48,
      "passing": 65,
      "dribbling": 64,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p4928",
    "name": "Jannis Nikolaou",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Braunschweig",
    "age": 30,
    "stats": {
      "pace": 64,
      "shooting": 43,
      "passing": 62,
      "dribbling": 60,
      "defending": 52,
      "physical": 78
    }
  },
  {
    "id": "p4949",
    "name": "Sebastián Ferreira",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Houston Dynamo",
    "age": 25,
    "stats": {
      "pace": 71,
      "shooting": 69,
      "passing": 54,
      "dribbling": 71,
      "defending": 26,
      "physical": 65
    }
  },
  {
    "id": "p5012",
    "name": "Rasmus Lauritsen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Brøndby IF",
    "age": 27,
    "stats": {
      "pace": 58,
      "shooting": 39,
      "passing": 58,
      "dribbling": 53,
      "defending": 54,
      "physical": 77
    }
  },
  {
    "id": "p5045",
    "name": "Yunus Akgün",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Galatasaray",
    "age": 23,
    "stats": {
      "pace": 85,
      "shooting": 66,
      "passing": 64,
      "dribbling": 81,
      "defending": 18,
      "physical": 55
    }
  },
  {
    "id": "p5066",
    "name": "José Ángel",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "CD Tenerife",
    "age": 31,
    "stats": {
      "pace": 60,
      "shooting": 58,
      "passing": 64,
      "dribbling": 61,
      "defending": 45,
      "physical": 72
    }
  },
  {
    "id": "p5119",
    "name": "Loïs Diony",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Angers SCO",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 71,
      "passing": 63,
      "dribbling": 69,
      "defending": 15,
      "physical": 70
    }
  },
  {
    "id": "p5186",
    "name": "Andrea Cistana",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Brescia",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 49,
      "passing": 56,
      "dribbling": 67,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p5214",
    "name": "Ko Seung Beom",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Suwon Samsung",
    "age": 29,
    "stats": {
      "pace": 72,
      "shooting": 62,
      "passing": 66,
      "dribbling": 73,
      "defending": 48,
      "physical": 76
    }
  },
  {
    "id": "p5245",
    "name": "Alexander Merkel",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Kazakhstan",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Gaziantep",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 65,
      "passing": 71,
      "dribbling": 71,
      "defending": 46,
      "physical": 64
    }
  },
  {
    "id": "p5248",
    "name": "Filip Benković",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Braunschweig",
    "age": 26,
    "stats": {
      "pace": 58,
      "shooting": 42,
      "passing": 53,
      "dribbling": 51,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p5266",
    "name": "Stefan Nutz",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SV Ried",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 68,
      "passing": 70,
      "dribbling": 71,
      "defending": 41,
      "physical": 64
    }
  },
  {
    "id": "p5302",
    "name": "Erik Morán",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "SD Ponferradina",
    "age": 32,
    "stats": {
      "pace": 41,
      "shooting": 51,
      "passing": 67,
      "dribbling": 61,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p5356",
    "name": "Fabrizio Caligara",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 71,
    "club": "Ascoli",
    "age": 23,
    "stats": {
      "pace": 65,
      "shooting": 62,
      "passing": 64,
      "dribbling": 70,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p5366",
    "name": "Ronaldo Vieira",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Torino",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 58,
      "passing": 65,
      "dribbling": 74,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p5390",
    "name": "Irvin Cardona",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 71,
    "club": "FC Augsburg",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 74,
      "passing": 65,
      "dribbling": 70,
      "defending": 15,
      "physical": 62
    }
  },
  {
    "id": "p5401",
    "name": "Matías Kranevitter",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "River Plate",
    "age": 30,
    "stats": {
      "pace": 67,
      "shooting": 49,
      "passing": 66,
      "dribbling": 65,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p5408",
    "name": "Daniel Alexis Leite Figueira",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Estoril Praia",
    "age": 25,
    "stats": {
      "pace": 28,
      "shooting": 19,
      "passing": 26,
      "dribbling": 25,
      "defending": 10,
      "physical": 39
    }
  },
  {
    "id": "p5418",
    "name": "Günay Güvenç",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Gaziantep",
    "age": 32,
    "stats": {
      "pace": 56,
      "shooting": 25,
      "passing": 39,
      "dribbling": 39,
      "defending": 13,
      "physical": 51
    }
  },
  {
    "id": "p5438",
    "name": "Mick van Buren",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Slavia Praha",
    "age": 31,
    "stats": {
      "pace": 78,
      "shooting": 70,
      "passing": 61,
      "dribbling": 71,
      "defending": 23,
      "physical": 75
    }
  },
  {
    "id": "p5450",
    "name": "Younes Namli",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Sparta Rotterdam",
    "age": 29,
    "stats": {
      "pace": 74,
      "shooting": 60,
      "passing": 70,
      "dribbling": 77,
      "defending": 35,
      "physical": 56
    }
  },
  {
    "id": "p5466",
    "name": "Fali",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 71,
    "club": "Cádiz CF",
    "age": 30,
    "stats": {
      "pace": 52,
      "shooting": 54,
      "passing": 69,
      "dribbling": 58,
      "defending": 55,
      "physical": 83
    }
  },
  {
    "id": "p5505",
    "name": "Lukáš Juliš",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "UD Ibiza",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 68,
      "passing": 60,
      "dribbling": 66,
      "defending": 20,
      "physical": 68
    }
  },
  {
    "id": "p5547",
    "name": "Luca Mazzitelli",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 71,
    "club": "Frosinone",
    "age": 27,
    "stats": {
      "pace": 53,
      "shooting": 64,
      "passing": 73,
      "dribbling": 68,
      "defending": 52,
      "physical": 68
    }
  },
  {
    "id": "p5598",
    "name": "Moussa Diarra",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Mali",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 71,
    "club": "Toulouse FC",
    "age": 22,
    "stats": {
      "pace": 69,
      "shooting": 29,
      "passing": 56,
      "dribbling": 61,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p5651",
    "name": "Julián Fernández",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 71,
    "club": "Lanús",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 51,
      "passing": 62,
      "dribbling": 66,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p9",
    "name": "Famara Diédhiou",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "La Liga",
    "rating": 70,
    "club": "Granada CF",
    "age": 30,
    "stats": {
      "pace": 61,
      "shooting": 67,
      "passing": 46,
      "dribbling": 63,
      "defending": 15,
      "physical": 69
    }
  },
  {
    "id": "p30",
    "name": "Andrew",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Gil Vicente",
    "age": 22,
    "stats": {
      "pace": 44,
      "shooting": 20,
      "passing": 37,
      "dribbling": 23,
      "defending": 8,
      "physical": 38
    }
  },
  {
    "id": "p39",
    "name": "Pedrão",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Portimonense SC",
    "age": 26,
    "stats": {
      "pace": 54,
      "shooting": 32,
      "passing": 43,
      "dribbling": 44,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p45",
    "name": "Ovidiu Popescu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FCSB",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 59,
      "passing": 63,
      "dribbling": 66,
      "defending": 49,
      "physical": 79
    }
  },
  {
    "id": "p88",
    "name": "Camora",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Legends",
    "league": "Serie A",
    "rating": 70,
    "club": "Romania",
    "age": 36,
    "stats": {
      "pace": 68,
      "shooting": 56,
      "passing": 68,
      "dribbling": 67,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p114",
    "name": "Tibor Halilović",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "sc Heerenveen",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 59,
      "passing": 66,
      "dribbling": 71,
      "defending": 46,
      "physical": 69
    }
  },
  {
    "id": "p146",
    "name": "Carlos Benavídez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "D. Alavés",
    "age": 25,
    "stats": {
      "pace": 67,
      "shooting": 44,
      "passing": 64,
      "dribbling": 62,
      "defending": 54,
      "physical": 72
    }
  },
  {
    "id": "p150",
    "name": "Salvi Sánchez",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 70,
    "club": "Rayo Vallecano",
    "age": 32,
    "stats": {
      "pace": 83,
      "shooting": 64,
      "passing": 73,
      "dribbling": 77,
      "defending": 30,
      "physical": 52
    }
  },
  {
    "id": "p178",
    "name": "Ignacio Schor",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Platense",
    "age": 23,
    "stats": {
      "pace": 73,
      "shooting": 60,
      "passing": 69,
      "dribbling": 71,
      "defending": 37,
      "physical": 62
    }
  },
  {
    "id": "p179",
    "name": "Amato Ciciretti",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ascoli",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 69,
      "passing": 71,
      "dribbling": 77,
      "defending": 26,
      "physical": 48
    }
  },
  {
    "id": "p185",
    "name": "Rúnar Alex Rúnarsson",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Iceland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Alanyaspor",
    "age": 28,
    "stats": {
      "pace": 46,
      "shooting": 25,
      "passing": 37,
      "dribbling": 36,
      "defending": 12,
      "physical": 45
    }
  },
  {
    "id": "p233",
    "name": "Facundo Torres",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Orlando City",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 70,
      "passing": 69,
      "dribbling": 74,
      "defending": 25,
      "physical": 55
    }
  },
  {
    "id": "p240",
    "name": "Tasos Douvikas",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FC Utrecht",
    "age": 24,
    "stats": {
      "pace": 81,
      "shooting": 67,
      "passing": 61,
      "dribbling": 70,
      "defending": 23,
      "physical": 72
    }
  },
  {
    "id": "p293",
    "name": "Ian Harkes",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Dundee United",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 65,
      "passing": 64,
      "dribbling": 67,
      "defending": 44,
      "physical": 73
    }
  },
  {
    "id": "p315",
    "name": "Kevin Wimmer",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SK Rapid Wien",
    "age": 30,
    "stats": {
      "pace": 50,
      "shooting": 28,
      "passing": 60,
      "dribbling": 60,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p329",
    "name": "Amara Condé",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "1. FC Magdeburg",
    "age": 26,
    "stats": {
      "pace": 74,
      "shooting": 57,
      "passing": 66,
      "dribbling": 77,
      "defending": 49,
      "physical": 75
    }
  },
  {
    "id": "p334",
    "name": "Tiago Maria Antunes Gouveia",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Estoril Praia",
    "age": 22,
    "stats": {
      "pace": 85,
      "shooting": 63,
      "passing": 67,
      "dribbling": 74,
      "defending": 21,
      "physical": 54
    }
  },
  {
    "id": "p342",
    "name": "Patrick William",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Rio Ave FC",
    "age": 26,
    "stats": {
      "pace": 57,
      "shooting": 68,
      "passing": 62,
      "dribbling": 53,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p365",
    "name": "Andrew Omobamidele",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Norwich",
    "age": 21,
    "stats": {
      "pace": 74,
      "shooting": 27,
      "passing": 49,
      "dribbling": 58,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p443",
    "name": "Othmane Boussaid",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "FC Utrecht",
    "age": 23,
    "stats": {
      "pace": 79,
      "shooting": 63,
      "passing": 67,
      "dribbling": 80,
      "defending": 35,
      "physical": 59
    }
  },
  {
    "id": "p460",
    "name": "Damián Musto",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "FC Cartagena",
    "age": 36,
    "stats": {
      "pace": 41,
      "shooting": 50,
      "passing": 62,
      "dribbling": 54,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p500",
    "name": "Nesta Guinness-Walker",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Reading",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 33,
      "passing": 59,
      "dribbling": 63,
      "defending": 43,
      "physical": 66
    }
  },
  {
    "id": "p529",
    "name": "Dinei Peixo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Corinthians",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 64,
      "passing": 69,
      "dribbling": 74,
      "defending": 42,
      "physical": 76
    }
  },
  {
    "id": "p614",
    "name": "Benjamin Tetteh",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hull City",
    "age": 26,
    "stats": {
      "pace": 79,
      "shooting": 66,
      "passing": 60,
      "dribbling": 66,
      "defending": 19,
      "physical": 73
    }
  },
  {
    "id": "p621",
    "name": "Leonardo Campana",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Ecuador",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 70,
    "club": "Inter Miami CF",
    "age": 23,
    "stats": {
      "pace": 67,
      "shooting": 68,
      "passing": 48,
      "dribbling": 65,
      "defending": 18,
      "physical": 63
    }
  },
  {
    "id": "p629",
    "name": "Lee Seung Gi",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Korea Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Jeonbuk Hyundai",
    "age": 35,
    "stats": {
      "pace": 66,
      "shooting": 66,
      "passing": 70,
      "dribbling": 71,
      "defending": 39,
      "physical": 60
    }
  },
  {
    "id": "p666",
    "name": "Tomáš Suslov",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Slovakia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "FC Groningen",
    "age": 21,
    "stats": {
      "pace": 74,
      "shooting": 65,
      "passing": 69,
      "dribbling": 76,
      "defending": 35,
      "physical": 59
    }
  },
  {
    "id": "p668",
    "name": "Thiago Vecino",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Unión",
    "age": 24,
    "stats": {
      "pace": 63,
      "shooting": 69,
      "passing": 59,
      "dribbling": 62,
      "defending": 21,
      "physical": 64
    }
  },
  {
    "id": "p673",
    "name": "José Amo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SD Ponferradina",
    "age": 25,
    "stats": {
      "pace": 60,
      "shooting": 40,
      "passing": 54,
      "dribbling": 61,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p720",
    "name": "Víctor Ruiz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 70,
    "club": "Al Fayha",
    "age": 29,
    "stats": {
      "pace": 70,
      "shooting": 62,
      "passing": 68,
      "dribbling": 78,
      "defending": 38,
      "physical": 50
    }
  },
  {
    "id": "p724",
    "name": "Justen Glad",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Real Salt Lake",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 35,
      "passing": 50,
      "dribbling": 53,
      "defending": 51,
      "physical": 74
    }
  },
  {
    "id": "p729",
    "name": "Anthony Gonçalves",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Stade Lavallois",
    "age": 37,
    "stats": {
      "pace": 45,
      "shooting": 47,
      "passing": 65,
      "dribbling": 68,
      "defending": 48,
      "physical": 80
    }
  },
  {
    "id": "p746",
    "name": "Allano",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Santa Clara",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 60,
      "passing": 67,
      "dribbling": 75,
      "defending": 36,
      "physical": 63
    }
  },
  {
    "id": "p790",
    "name": "Sessi D'Almeida",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Benin",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Pau FC",
    "age": 27,
    "stats": {
      "pace": 79,
      "shooting": 54,
      "passing": 61,
      "dribbling": 71,
      "defending": 46,
      "physical": 85
    }
  },
  {
    "id": "p833",
    "name": "Anatoliy Trubin",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Ukraine",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Shakhtar Donetsk",
    "age": 22,
    "stats": {
      "pace": 37,
      "shooting": 18,
      "passing": 34,
      "dribbling": 31,
      "defending": 8,
      "physical": 42
    }
  },
  {
    "id": "p875",
    "name": "François Moubandje",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FC Sion",
    "age": 33,
    "stats": {
      "pace": 68,
      "shooting": 49,
      "passing": 64,
      "dribbling": 69,
      "defending": 50,
      "physical": 79
    }
  },
  {
    "id": "p910",
    "name": "Ben Rienstra",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SC Cambuur",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 62,
      "passing": 62,
      "dribbling": 67,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p918",
    "name": "Franco Fragapane",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Minnesota United",
    "age": 30,
    "stats": {
      "pace": 88,
      "shooting": 67,
      "passing": 67,
      "dribbling": 82,
      "defending": 25,
      "physical": 56
    }
  },
  {
    "id": "p952",
    "name": "Lewis Baker",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Stoke City",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 72,
      "passing": 72,
      "dribbling": 72,
      "defending": 50,
      "physical": 70
    }
  },
  {
    "id": "p954",
    "name": "James Léa Siliki",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Estoril Praia",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 64,
      "passing": 69,
      "dribbling": 72,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p964",
    "name": "Leo Štulac",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Palermo",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 65,
      "passing": 67,
      "dribbling": 70,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p1057",
    "name": "Jack Taylor",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Peterborough",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 65,
      "passing": 65,
      "dribbling": 69,
      "defending": 48,
      "physical": 64
    }
  },
  {
    "id": "p1095",
    "name": "Ivor Pandur",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Fortuna Sittard",
    "age": 23,
    "stats": {
      "pace": 39,
      "shooting": 17,
      "passing": 27,
      "dribbling": 24,
      "defending": 8,
      "physical": 36
    }
  },
  {
    "id": "p1098",
    "name": "Jonathan Panzo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Coventry City",
    "age": 22,
    "stats": {
      "pace": 70,
      "shooting": 44,
      "passing": 64,
      "dribbling": 64,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p1105",
    "name": "Malik Tchokounté",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Nîmes Olympique",
    "age": 34,
    "stats": {
      "pace": 40,
      "shooting": 68,
      "passing": 52,
      "dribbling": 60,
      "defending": 16,
      "physical": 74
    }
  },
  {
    "id": "p1128",
    "name": "Luuk Brouwers",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FC Utrecht",
    "age": 25,
    "stats": {
      "pace": 61,
      "shooting": 57,
      "passing": 64,
      "dribbling": 64,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p1138",
    "name": "Gastón Ávila",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Royal Antwerp FC",
    "age": 21,
    "stats": {
      "pace": 75,
      "shooting": 42,
      "passing": 63,
      "dribbling": 66,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p1177",
    "name": "Erik Palmer-Brown",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "ESTAC Troyes",
    "age": 26,
    "stats": {
      "pace": 64,
      "shooting": 34,
      "passing": 51,
      "dribbling": 53,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p1244",
    "name": "Miloš Pantović",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 70,
    "club": "Union Berlin",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 70,
      "passing": 68,
      "dribbling": 73,
      "defending": 28,
      "physical": 57
    }
  },
  {
    "id": "p1295",
    "name": "Vadim Rață",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Moldova",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FC Voluntari",
    "age": 30,
    "stats": {
      "pace": 71,
      "shooting": 63,
      "passing": 63,
      "dribbling": 74,
      "defending": 48,
      "physical": 77
    }
  },
  {
    "id": "p1303",
    "name": "Leonardo Jara",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Vélez Sarsfield",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 59,
      "passing": 68,
      "dribbling": 62,
      "defending": 53,
      "physical": 76
    }
  },
  {
    "id": "p1304",
    "name": "Steven Moreira",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Columbus Crew",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 33,
      "passing": 68,
      "dribbling": 68,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p1309",
    "name": "Robin Quaison",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Sweden",
    "age": 29,
    "stats": {
      "pace": 70,
      "shooting": 70,
      "passing": 65,
      "dribbling": 74,
      "defending": 36,
      "physical": 65
    }
  },
  {
    "id": "p1339",
    "name": "Stanislav Tecl",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Slavia Praha",
    "age": 33,
    "stats": {
      "pace": 78,
      "shooting": 66,
      "passing": 66,
      "dribbling": 73,
      "defending": 24,
      "physical": 75
    }
  },
  {
    "id": "p1381",
    "name": "Brandley Kuwas",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Curacao",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Giresunspor",
    "age": 30,
    "stats": {
      "pace": 78,
      "shooting": 72,
      "passing": 65,
      "dribbling": 75,
      "defending": 19,
      "physical": 62
    }
  },
  {
    "id": "p1389",
    "name": "Reiss Nelson",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 70,
    "club": "Arsenal",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 61,
      "passing": 67,
      "dribbling": 79,
      "defending": 29,
      "physical": 52
    }
  },
  {
    "id": "p1399",
    "name": "Stefan Šćepović",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Brisbane Roar",
    "age": 33,
    "stats": {
      "pace": 57,
      "shooting": 69,
      "passing": 51,
      "dribbling": 60,
      "defending": 24,
      "physical": 68
    }
  },
  {
    "id": "p1418",
    "name": "Dan Nistor",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Romania",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Univ. Craiova",
    "age": 35,
    "stats": {
      "pace": 64,
      "shooting": 67,
      "passing": 69,
      "dribbling": 71,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": "p1421",
    "name": "Guillermo Burdisso",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Uni. Católica",
    "age": 34,
    "stats": {
      "pace": 43,
      "shooting": 42,
      "passing": 54,
      "dribbling": 50,
      "defending": 51,
      "physical": 74
    }
  },
  {
    "id": "p1423",
    "name": "Scott Fraser",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Charlton Ath",
    "age": 28,
    "stats": {
      "pace": 70,
      "shooting": 59,
      "passing": 65,
      "dribbling": 69,
      "defending": 42,
      "physical": 62
    }
  },
  {
    "id": "p1545",
    "name": "Sébastien Thill",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Luxembourg",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hansa Rostock",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 66,
      "passing": 66,
      "dribbling": 74,
      "defending": 28,
      "physical": 59
    }
  },
  {
    "id": "p1552",
    "name": "Alberto Cerri",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Como",
    "age": 27,
    "stats": {
      "pace": 51,
      "shooting": 71,
      "passing": 49,
      "dribbling": 53,
      "defending": 19,
      "physical": 67
    }
  },
  {
    "id": "p1656",
    "name": "Ricardo Centurión",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Barracas Central",
    "age": 30,
    "stats": {
      "pace": 78,
      "shooting": 64,
      "passing": 67,
      "dribbling": 80,
      "defending": 30,
      "physical": 61
    }
  },
  {
    "id": "p1707",
    "name": "Jayson Malhue",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Bolivia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Royal Pari",
    "age": 19,
    "stats": {
      "pace": 74,
      "shooting": 55,
      "passing": 69,
      "dribbling": 71,
      "defending": 35,
      "physical": 58
    }
  },
  {
    "id": "p1735",
    "name": "Carlos Alcaraz",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Southampton",
    "age": 20,
    "stats": {
      "pace": 82,
      "shooting": 65,
      "passing": 65,
      "dribbling": 80,
      "defending": 33,
      "physical": 70
    }
  },
  {
    "id": "p1736",
    "name": "Luildo Simões",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Corinthians",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 69,
      "passing": 69,
      "dribbling": 64,
      "defending": 34,
      "physical": 58
    }
  },
  {
    "id": "p1788",
    "name": "Vincent Sasso",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Boavista FC",
    "age": 32,
    "stats": {
      "pace": 37,
      "shooting": 27,
      "passing": 52,
      "dribbling": 47,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p1808",
    "name": "Aarón",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "FC Cartagena",
    "age": 27,
    "stats": {
      "pace": 37,
      "shooting": 25,
      "passing": 29,
      "dribbling": 35,
      "defending": 15,
      "physical": 47
    }
  },
  {
    "id": "p1815",
    "name": "Kevin Nisbet",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hibernian",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 69,
      "passing": 63,
      "dribbling": 68,
      "defending": 27,
      "physical": 69
    }
  },
  {
    "id": "p1834",
    "name": "Marvin Pieringer",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "SC Paderborn 07",
    "age": 23,
    "stats": {
      "pace": 62,
      "shooting": 68,
      "passing": 51,
      "dribbling": 66,
      "defending": 18,
      "physical": 64
    }
  },
  {
    "id": "p1872",
    "name": "Adam Karabec",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Czech Republic",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Sparta Praha",
    "age": 20,
    "stats": {
      "pace": 74,
      "shooting": 65,
      "passing": 69,
      "dribbling": 74,
      "defending": 28,
      "physical": 58
    }
  },
  {
    "id": "p1901",
    "name": "Muhamed Bešić",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ferencvárosi TC",
    "age": 30,
    "stats": {
      "pace": 52,
      "shooting": 52,
      "passing": 65,
      "dribbling": 73,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p1929",
    "name": "Mateusz Lis",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "ESTAC Troyes",
    "age": 26,
    "stats": {
      "pace": 27,
      "shooting": 19,
      "passing": 23,
      "dribbling": 24,
      "defending": 7,
      "physical": 37
    }
  },
  {
    "id": "p1987",
    "name": "Faouzi Ghoulam",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Angers SCO",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 64,
      "passing": 74,
      "dribbling": 71,
      "defending": 56,
      "physical": 69
    }
  },
  {
    "id": "p2064",
    "name": "Paul-José Mpoku",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Incheon United",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 72,
      "passing": 73,
      "dribbling": 70,
      "defending": 36,
      "physical": 67
    }
  },
  {
    "id": "p2142",
    "name": "Waldo Santerilone",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "América de Cali",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 74,
      "passing": 55,
      "dribbling": 67,
      "defending": 15,
      "physical": 62
    }
  },
  {
    "id": "p2169",
    "name": "Warren O'Hora",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "MK Dons",
    "age": 24,
    "stats": {
      "pace": 54,
      "shooting": 39,
      "passing": 52,
      "dribbling": 49,
      "defending": 49,
      "physical": 72
    }
  },
  {
    "id": "p2209",
    "name": "Zanka",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Premier League",
    "rating": 70,
    "club": "Brentford",
    "age": 33,
    "stats": {
      "pace": 52,
      "shooting": 42,
      "passing": 59,
      "dribbling": 56,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p2264",
    "name": "Shkodran Mustafi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Levante UD",
    "age": 31,
    "stats": {
      "pace": 53,
      "shooting": 57,
      "passing": 61,
      "dribbling": 61,
      "defending": 54,
      "physical": 74
    }
  },
  {
    "id": "p2289",
    "name": "Yehvann Diouf",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 70,
    "club": "Stade de Reims",
    "age": 23,
    "stats": {
      "pace": 45,
      "shooting": 19,
      "passing": 30,
      "dribbling": 27,
      "defending": 11,
      "physical": 49
    }
  },
  {
    "id": "p2378",
    "name": "Tomi Horvat",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SK Sturm Graz",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 67,
      "passing": 69,
      "dribbling": 71,
      "defending": 39,
      "physical": 65
    }
  },
  {
    "id": "p2383",
    "name": "Steven Alzate",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Standard Liège",
    "age": 24,
    "stats": {
      "pace": 69,
      "shooting": 58,
      "passing": 70,
      "dribbling": 77,
      "defending": 49,
      "physical": 66
    }
  },
  {
    "id": "p2392",
    "name": "Barrenetxea",
    "position": "CAM",
    "positions": [
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 70,
    "club": "Real Sociedad",
    "age": 21,
    "stats": {
      "pace": 79,
      "shooting": 69,
      "passing": 63,
      "dribbling": 82,
      "defending": 11,
      "physical": 55
    }
  },
  {
    "id": "p2394",
    "name": "Sead Hakšabanović",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Montenegro",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Celtic",
    "age": 24,
    "stats": {
      "pace": 76,
      "shooting": 66,
      "passing": 68,
      "dribbling": 78,
      "defending": 21,
      "physical": 61
    }
  },
  {
    "id": "p2443",
    "name": "Javi Hernández",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 70,
    "club": "Girona FC",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 52,
      "passing": 64,
      "dribbling": 66,
      "defending": 51,
      "physical": 71
    }
  },
  {
    "id": "p2453",
    "name": "Reto Ziegler",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "FC Sion",
    "age": 37,
    "stats": {
      "pace": 47,
      "shooting": 63,
      "passing": 72,
      "dribbling": 59,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p2481",
    "name": "Jhon Mosquera",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Viktoria Plzeň",
    "age": 33,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 70,
      "dribbling": 69,
      "defending": 41,
      "physical": 76
    }
  },
  {
    "id": "p2522",
    "name": "Andrey Galabinov",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Bulgaria",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Reggina",
    "age": 34,
    "stats": {
      "pace": 33,
      "shooting": 70,
      "passing": 54,
      "dribbling": 50,
      "defending": 10,
      "physical": 69
    }
  },
  {
    "id": "p2541",
    "name": "Reece Burke",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 70,
    "club": "Luton Town",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 38,
      "passing": 56,
      "dribbling": 58,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p2542",
    "name": "Maurice Cova",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Dep. Táchira",
    "age": 31,
    "stats": {
      "pace": 69,
      "shooting": 61,
      "passing": 72,
      "dribbling": 70,
      "defending": 35,
      "physical": 62
    }
  },
  {
    "id": "p2579",
    "name": "Abdul-Aziz Yakubu",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Rio Ave FC",
    "age": 24,
    "stats": {
      "pace": 85,
      "shooting": 68,
      "passing": 52,
      "dribbling": 68,
      "defending": 12,
      "physical": 66
    }
  },
  {
    "id": "p2589",
    "name": "Ali Alipour",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Iran",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Gil Vicente",
    "age": 27,
    "stats": {
      "pace": 78,
      "shooting": 69,
      "passing": 53,
      "dribbling": 66,
      "defending": 12,
      "physical": 66
    }
  },
  {
    "id": "p2636",
    "name": "Federico Ricci",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Reggina",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 67,
      "dribbling": 79,
      "defending": 36,
      "physical": 47
    }
  },
  {
    "id": "p2792",
    "name": "Gustavo Velázquez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Newell's",
    "age": 32,
    "stats": {
      "pace": 75,
      "shooting": 30,
      "passing": 46,
      "dribbling": 58,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p2814",
    "name": "Fran Villalba",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Málaga CF",
    "age": 25,
    "stats": {
      "pace": 72,
      "shooting": 61,
      "passing": 71,
      "dribbling": 77,
      "defending": 36,
      "physical": 43
    }
  },
  {
    "id": "p2860",
    "name": "Liam Boyce",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Northern Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hearts",
    "age": 32,
    "stats": {
      "pace": 68,
      "shooting": 67,
      "passing": 60,
      "dribbling": 71,
      "defending": 19,
      "physical": 75
    }
  },
  {
    "id": "p2871",
    "name": "Giacomo Calò",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Cosenza",
    "age": 26,
    "stats": {
      "pace": 65,
      "shooting": 41,
      "passing": 63,
      "dribbling": 61,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p2943",
    "name": "Kye Rowles",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hearts",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 27,
      "passing": 46,
      "dribbling": 51,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p3023",
    "name": "Vincent Pule",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Orlando Pirates",
    "age": 31,
    "stats": {
      "pace": 83,
      "shooting": 73,
      "passing": 61,
      "dribbling": 76,
      "defending": 27,
      "physical": 53
    }
  },
  {
    "id": "p3035",
    "name": "Fernando Niño Rodríguez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 70,
    "club": "Villarreal CF B",
    "age": 22,
    "stats": {
      "pace": 65,
      "shooting": 71,
      "passing": 58,
      "dribbling": 66,
      "defending": 23,
      "physical": 67
    }
  },
  {
    "id": "p3048",
    "name": "Luca Kerber",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Saarbrücken",
    "age": 21,
    "stats": {
      "pace": 69,
      "shooting": 51,
      "passing": 64,
      "dribbling": 74,
      "defending": 47,
      "physical": 66
    }
  },
  {
    "id": "p3089",
    "name": "Oussama Haddadi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Tunisia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Fürth",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 43,
      "passing": 61,
      "dribbling": 59,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p3106",
    "name": "Dirk Abels",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Sparta Rotterdam",
    "age": 26,
    "stats": {
      "pace": 61,
      "shooting": 41,
      "passing": 55,
      "dribbling": 62,
      "defending": 50,
      "physical": 74
    }
  },
  {
    "id": "p3223",
    "name": "Nicolas Gavory",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Düsseldorf",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 63,
      "passing": 70,
      "dribbling": 70,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p3242",
    "name": "Josh Vela",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Fleetwood Town",
    "age": 29,
    "stats": {
      "pace": 62,
      "shooting": 59,
      "passing": 64,
      "dribbling": 64,
      "defending": 47,
      "physical": 83
    }
  },
  {
    "id": "p3286",
    "name": "Diego Rodríguez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Godoy Cruz",
    "age": 34,
    "stats": {
      "pace": 45,
      "shooting": 27,
      "passing": 32,
      "dribbling": 35,
      "defending": 14,
      "physical": 47
    }
  },
  {
    "id": "p3291",
    "name": "Alberto Paleari",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Benevento",
    "age": 31,
    "stats": {
      "pace": 32,
      "shooting": 20,
      "passing": 29,
      "dribbling": 25,
      "defending": 9,
      "physical": 35
    }
  },
  {
    "id": "p3293",
    "name": "Jörg Siebenhandl",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SK Sturm Graz",
    "age": 33,
    "stats": {
      "pace": 47,
      "shooting": 24,
      "passing": 28,
      "dribbling": 41,
      "defending": 17,
      "physical": 52
    }
  },
  {
    "id": "p3304",
    "name": "Ricardo Pepi",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "FC Groningen",
    "age": 20,
    "stats": {
      "pace": 71,
      "shooting": 65,
      "passing": 52,
      "dribbling": 66,
      "defending": 24,
      "physical": 61
    }
  },
  {
    "id": "p3312",
    "name": "Mamadou Mbacke",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 70,
    "club": "Villarreal CF B",
    "age": 21,
    "stats": {
      "pace": 68,
      "shooting": 30,
      "passing": 47,
      "dribbling": 58,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p3325",
    "name": "Diber Cambindo",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Indep. Medellín",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 70,
      "passing": 44,
      "dribbling": 68,
      "defending": 14,
      "physical": 71
    }
  },
  {
    "id": "p3387",
    "name": "Lewis Cook",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 70,
    "club": "AFC Bournemouth",
    "age": 26,
    "stats": {
      "pace": 61,
      "shooting": 62,
      "passing": 75,
      "dribbling": 78,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p3390",
    "name": "Talles Magno",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "New York City FC",
    "age": 21,
    "stats": {
      "pace": 83,
      "shooting": 62,
      "passing": 60,
      "dribbling": 79,
      "defending": 24,
      "physical": 62
    }
  },
  {
    "id": "p3445",
    "name": "Léo Leroy",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 70,
    "club": "Montpellier",
    "age": 23,
    "stats": {
      "pace": 58,
      "shooting": 55,
      "passing": 68,
      "dribbling": 66,
      "defending": 45,
      "physical": 64
    }
  },
  {
    "id": "p3447",
    "name": "Enzo Loiodice",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "UD Las Palmas",
    "age": 22,
    "stats": {
      "pace": 66,
      "shooting": 58,
      "passing": 67,
      "dribbling": 76,
      "defending": 52,
      "physical": 68
    }
  },
  {
    "id": "p3454",
    "name": "Bernardo Avileda",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ayacucho",
    "age": 27,
    "stats": {
      "pace": 64,
      "shooting": 62,
      "passing": 68,
      "dribbling": 61,
      "defending": 17,
      "physical": 64
    }
  },
  {
    "id": "p3550",
    "name": "Mario Antonio Rancoret",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "América de Cali",
    "age": 31,
    "stats": {
      "pace": 51,
      "shooting": 44,
      "passing": 55,
      "dribbling": 59,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p3607",
    "name": "Moustafa Zeidan",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Malmö FF",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 64,
      "passing": 69,
      "dribbling": 80,
      "defending": 41,
      "physical": 68
    }
  },
  {
    "id": "p3619",
    "name": "Valentín Gómez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Vélez Sarsfield",
    "age": 20,
    "stats": {
      "pace": 78,
      "shooting": 31,
      "passing": 59,
      "dribbling": 64,
      "defending": 55,
      "physical": 72
    }
  },
  {
    "id": "p3637",
    "name": "Clint Leemans",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Viborg FF",
    "age": 27,
    "stats": {
      "pace": 54,
      "shooting": 74,
      "passing": 71,
      "dribbling": 61,
      "defending": 43,
      "physical": 67
    }
  },
  {
    "id": "p3641",
    "name": "Maurits Kjaergaard",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "RB Salzburg",
    "age": 20,
    "stats": {
      "pace": 74,
      "shooting": 67,
      "passing": 68,
      "dribbling": 68,
      "defending": 47,
      "physical": 70
    }
  },
  {
    "id": "p3710",
    "name": "Kim Kee Hee",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Ulsan Hyundai",
    "age": 34,
    "stats": {
      "pace": 63,
      "shooting": 44,
      "passing": 60,
      "dribbling": 53,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p3711",
    "name": "André Hansen",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Rosenborg BK",
    "age": 33,
    "stats": {
      "pace": 33,
      "shooting": 25,
      "passing": 42,
      "dribbling": 34,
      "defending": 13,
      "physical": 47
    }
  },
  {
    "id": "p3722",
    "name": "Karim El Berkaoui",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 70,
    "club": "Al Raed",
    "age": 28,
    "stats": {
      "pace": 88,
      "shooting": 72,
      "passing": 53,
      "dribbling": 79,
      "defending": 15,
      "physical": 68
    }
  },
  {
    "id": "p3810",
    "name": "Nigel Thomas",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Paços Ferreira",
    "age": 21,
    "stats": {
      "pace": 83,
      "shooting": 58,
      "passing": 57,
      "dribbling": 70,
      "defending": 20,
      "physical": 48
    }
  },
  {
    "id": "p3816",
    "name": "Wuilker Faríñez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 70,
    "club": "RC Lens",
    "age": 25,
    "stats": {
      "pace": 53,
      "shooting": 26,
      "passing": 35,
      "dribbling": 43,
      "defending": 14,
      "physical": 48
    }
  },
  {
    "id": "p3832",
    "name": "Niklas Moisander",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Finland",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Malmö FF",
    "age": 37,
    "stats": {
      "pace": 44,
      "shooting": 51,
      "passing": 69,
      "dribbling": 65,
      "defending": 54,
      "physical": 69
    }
  },
  {
    "id": "p3838",
    "name": "Robert Gojani",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Kalmar FF",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 46,
      "passing": 66,
      "dribbling": 75,
      "defending": 35,
      "physical": 70
    }
  },
  {
    "id": "p3858",
    "name": "Mathieu Maertens",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "OH Leuven",
    "age": 28,
    "stats": {
      "pace": 73,
      "shooting": 69,
      "passing": 70,
      "dribbling": 70,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p3868",
    "name": "Nicolás Domingo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Patronato",
    "age": 38,
    "stats": {
      "pace": 41,
      "shooting": 61,
      "passing": 69,
      "dribbling": 71,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p3907",
    "name": "Ross Stewart",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Sunderland",
    "age": 27,
    "stats": {
      "pace": 75,
      "shooting": 67,
      "passing": 56,
      "dribbling": 59,
      "defending": 19,
      "physical": 72
    }
  },
  {
    "id": "p4008",
    "name": "Dennis Dressel",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hansa Rostock",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 66,
      "passing": 65,
      "dribbling": 67,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": "p4013",
    "name": "Johan Hove",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "FC Groningen",
    "age": 22,
    "stats": {
      "pace": 74,
      "shooting": 63,
      "passing": 66,
      "dribbling": 75,
      "defending": 45,
      "physical": 70
    }
  },
  {
    "id": "p4033",
    "name": "Mustapha Yatabaré",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Mali",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Sivasspor",
    "age": 37,
    "stats": {
      "pace": 53,
      "shooting": 70,
      "passing": 60,
      "dribbling": 60,
      "defending": 12,
      "physical": 70
    }
  },
  {
    "id": "p4038",
    "name": "Dominik Baumgartner",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Wolfsberger AC",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 34,
      "passing": 53,
      "dribbling": 55,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p4090",
    "name": "Etrit Berisha",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Albania",
    "era": "Legends",
    "league": "Serie A",
    "rating": 70,
    "club": "Torino",
    "age": 34,
    "stats": {
      "pace": 28,
      "shooting": 22,
      "passing": 25,
      "dribbling": 24,
      "defending": 11,
      "physical": 46
    }
  },
  {
    "id": "p4091",
    "name": "Dylan Levitt",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Dundee United",
    "age": 22,
    "stats": {
      "pace": 65,
      "shooting": 66,
      "passing": 70,
      "dribbling": 71,
      "defending": 46,
      "physical": 59
    }
  },
  {
    "id": "p4095",
    "name": "Jed Steer",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 70,
    "club": "Aston Villa",
    "age": 30,
    "stats": {
      "pace": 50,
      "shooting": 22,
      "passing": 30,
      "dribbling": 32,
      "defending": 11,
      "physical": 45
    }
  },
  {
    "id": "p4099",
    "name": "Gianni Bruno",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "STVV",
    "age": 32,
    "stats": {
      "pace": 72,
      "shooting": 71,
      "passing": 65,
      "dribbling": 71,
      "defending": 25,
      "physical": 66
    }
  },
  {
    "id": "p4100",
    "name": "Alfie Jones",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Hull City",
    "age": 25,
    "stats": {
      "pace": 61,
      "shooting": 40,
      "passing": 57,
      "dribbling": 58,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p4104",
    "name": "Alexandre Frandeira",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 70,
    "club": "Atlético-GO",
    "age": 23,
    "stats": {
      "pace": 49,
      "shooting": 45,
      "passing": 53,
      "dribbling": 47,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p4108",
    "name": "Cameron Archer",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Middlesbrough",
    "age": 21,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 53,
      "dribbling": 75,
      "defending": 15,
      "physical": 67
    }
  },
  {
    "id": "p4110",
    "name": "Sekou Koita",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Mali",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "RB Salzburg",
    "age": 23,
    "stats": {
      "pace": 92,
      "shooting": 73,
      "passing": 60,
      "dribbling": 82,
      "defending": 24,
      "physical": 76
    }
  },
  {
    "id": "p4144",
    "name": "Yuri Matias",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "CFR 1907 Cluj",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 33,
      "passing": 47,
      "dribbling": 52,
      "defending": 50,
      "physical": 79
    }
  },
  {
    "id": "p4149",
    "name": "Gabriel Sara",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Norwich",
    "age": 24,
    "stats": {
      "pace": 77,
      "shooting": 71,
      "passing": 69,
      "dribbling": 73,
      "defending": 39,
      "physical": 71
    }
  },
  {
    "id": "p4161",
    "name": "Patrick Drewes",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SV Sandhausen",
    "age": 30,
    "stats": {
      "pace": 30,
      "shooting": 23,
      "passing": 27,
      "dribbling": 27,
      "defending": 13,
      "physical": 48
    }
  },
  {
    "id": "p4164",
    "name": "Justin Lonwijk",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Dynamo Kyiv",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 62,
      "passing": 65,
      "dribbling": 66,
      "defending": 44,
      "physical": 70
    }
  },
  {
    "id": "p4173",
    "name": "Albian Ajeti",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SK Sturm Graz",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 69,
      "passing": 55,
      "dribbling": 69,
      "defending": 13,
      "physical": 66
    }
  },
  {
    "id": "p4222",
    "name": "Kim Jong Woo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Pohang Steelers",
    "age": 29,
    "stats": {
      "pace": 72,
      "shooting": 62,
      "passing": 67,
      "dribbling": 69,
      "defending": 43,
      "physical": 60
    }
  },
  {
    "id": "p4230",
    "name": "Wilfried Gnonto",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Leeds United",
    "age": 19,
    "stats": {
      "pace": 87,
      "shooting": 67,
      "passing": 63,
      "dribbling": 82,
      "defending": 16,
      "physical": 64
    }
  },
  {
    "id": "p4280",
    "name": "Jayson Molumby",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "West Brom",
    "age": 24,
    "stats": {
      "pace": 64,
      "shooting": 50,
      "passing": 64,
      "dribbling": 67,
      "defending": 47,
      "physical": 62
    }
  },
  {
    "id": "p4290",
    "name": "Tom Bradshaw",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Millwall",
    "age": 31,
    "stats": {
      "pace": 79,
      "shooting": 67,
      "passing": 50,
      "dribbling": 75,
      "defending": 19,
      "physical": 70
    }
  },
  {
    "id": "p4310",
    "name": "Luke Woolfenden",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ipswich",
    "age": 24,
    "stats": {
      "pace": 67,
      "shooting": 32,
      "passing": 58,
      "dribbling": 53,
      "defending": 50,
      "physical": 74
    }
  },
  {
    "id": "p4357",
    "name": "Leon Flach",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Philadelphia",
    "age": 22,
    "stats": {
      "pace": 82,
      "shooting": 53,
      "passing": 63,
      "dribbling": 70,
      "defending": 53,
      "physical": 65
    }
  },
  {
    "id": "p4412",
    "name": "Sam Clucas",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Stoke City",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 69,
      "passing": 70,
      "dribbling": 67,
      "defending": 49,
      "physical": 74
    }
  },
  {
    "id": "p4450",
    "name": "Kyle Dempsey",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Bolton",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 58,
      "passing": 64,
      "dribbling": 68,
      "defending": 46,
      "physical": 75
    }
  },
  {
    "id": "p4453",
    "name": "Giannis Michailidis",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Greece",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "PAOK FC",
    "age": 23,
    "stats": {
      "pace": 69,
      "shooting": 56,
      "passing": 64,
      "dribbling": 61,
      "defending": 54,
      "physical": 73
    }
  },
  {
    "id": "p4505",
    "name": "Mads Juel Andersen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Barnsley",
    "age": 25,
    "stats": {
      "pace": 47,
      "shooting": 35,
      "passing": 44,
      "dribbling": 49,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p4530",
    "name": "Luca Sosa",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 70,
    "club": "Barcelona SC",
    "age": 29,
    "stats": {
      "pace": 70,
      "shooting": 38,
      "passing": 57,
      "dribbling": 56,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p4534",
    "name": "Jonathan Sabbatini",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "FC Lugano",
    "age": 35,
    "stats": {
      "pace": 58,
      "shooting": 62,
      "passing": 70,
      "dribbling": 71,
      "defending": 46,
      "physical": 67
    }
  },
  {
    "id": "p4539",
    "name": "Ryan Kitto",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Adelaide United",
    "age": 29,
    "stats": {
      "pace": 82,
      "shooting": 52,
      "passing": 59,
      "dribbling": 66,
      "defending": 42,
      "physical": 67
    }
  },
  {
    "id": "p4592",
    "name": "Wiliam Santinho",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Fluminense",
    "age": 27,
    "stats": {
      "pace": 36,
      "shooting": 20,
      "passing": 27,
      "dribbling": 18,
      "defending": 13,
      "physical": 56
    }
  },
  {
    "id": "p4634",
    "name": "Bruno Fagundeiro",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Cuiabá",
    "age": 23,
    "stats": {
      "pace": 65,
      "shooting": 68,
      "passing": 70,
      "dribbling": 71,
      "defending": 40,
      "physical": 55
    }
  },
  {
    "id": "p4674",
    "name": "Pacheco",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 70,
    "club": "Real Sociedad",
    "age": 22,
    "stats": {
      "pace": 54,
      "shooting": 22,
      "passing": 51,
      "dribbling": 52,
      "defending": 54,
      "physical": 69
    }
  },
  {
    "id": "p4683",
    "name": "Julien Faussurier",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "FCSM",
    "age": 36,
    "stats": {
      "pace": 50,
      "shooting": 56,
      "passing": 74,
      "dribbling": 69,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p4763",
    "name": "Elio Capradossi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 70,
    "club": "Cagliari",
    "age": 27,
    "stats": {
      "pace": 60,
      "shooting": 38,
      "passing": 50,
      "dribbling": 57,
      "defending": 56,
      "physical": 71
    }
  },
  {
    "id": "p4769",
    "name": "Koba Leïn Koindredi",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "R. Oviedo",
    "age": 21,
    "stats": {
      "pace": 64,
      "shooting": 70,
      "passing": 70,
      "dribbling": 68,
      "defending": 40,
      "physical": 63
    }
  },
  {
    "id": "p4774",
    "name": "Patryk Sokołowski",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Legia Warszawa",
    "age": 28,
    "stats": {
      "pace": 61,
      "shooting": 47,
      "passing": 62,
      "dribbling": 66,
      "defending": 49,
      "physical": 68
    }
  },
  {
    "id": "p4802",
    "name": "Andrés Cubas",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Whitecaps FC",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 51,
      "passing": 69,
      "dribbling": 80,
      "defending": 57,
      "physical": 68
    }
  },
  {
    "id": "p4810",
    "name": "Konstantin Kerschbaumer",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Wolfsberger AC",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 63,
      "passing": 64,
      "dribbling": 69,
      "defending": 45,
      "physical": 76
    }
  },
  {
    "id": "p4865",
    "name": "Daniel Høegh",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Randers FC",
    "age": 32,
    "stats": {
      "pace": 35,
      "shooting": 42,
      "passing": 51,
      "dribbling": 51,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p4880",
    "name": "Bálint Vécsei",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ferencvárosi TC",
    "age": 30,
    "stats": {
      "pace": 59,
      "shooting": 69,
      "passing": 67,
      "dribbling": 73,
      "defending": 42,
      "physical": 70
    }
  },
  {
    "id": "p4911",
    "name": "Lucas Possignolo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Zhejiang Pro",
    "age": 29,
    "stats": {
      "pace": 50,
      "shooting": 40,
      "passing": 44,
      "dribbling": 52,
      "defending": 53,
      "physical": 78
    }
  },
  {
    "id": "p4932",
    "name": "Thomas Didillon",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 70,
    "club": "AS Monaco",
    "age": 27,
    "stats": {
      "pace": 56,
      "shooting": 24,
      "passing": 41,
      "dribbling": 31,
      "defending": 13,
      "physical": 44
    }
  },
  {
    "id": "p4954",
    "name": "Kortney Hause",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Watford",
    "age": 28,
    "stats": {
      "pace": 59,
      "shooting": 47,
      "passing": 62,
      "dribbling": 57,
      "defending": 54,
      "physical": 75
    }
  },
  {
    "id": "p4987",
    "name": "Philipp Sander",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Holstein Kiel",
    "age": 25,
    "stats": {
      "pace": 67,
      "shooting": 56,
      "passing": 65,
      "dribbling": 71,
      "defending": 45,
      "physical": 64
    }
  },
  {
    "id": "p4999",
    "name": "Majid Hosseini",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Iran",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Kayserispor",
    "age": 27,
    "stats": {
      "pace": 64,
      "shooting": 30,
      "passing": 48,
      "dribbling": 55,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p5021",
    "name": "Connor Metcalfe",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Australia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "FC St. Pauli",
    "age": 23,
    "stats": {
      "pace": 64,
      "shooting": 57,
      "passing": 65,
      "dribbling": 69,
      "defending": 45,
      "physical": 79
    }
  },
  {
    "id": "p5042",
    "name": "Min Sang Gi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Suwon Samsung",
    "age": 32,
    "stats": {
      "pace": 72,
      "shooting": 46,
      "passing": 54,
      "dribbling": 61,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p5133",
    "name": "Mattia Viviani",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Benevento",
    "age": 22,
    "stats": {
      "pace": 74,
      "shooting": 56,
      "passing": 70,
      "dribbling": 69,
      "defending": 48,
      "physical": 63
    }
  },
  {
    "id": "p5151",
    "name": "Pedro Mendes",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Ascoli",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 72,
      "passing": 54,
      "dribbling": 68,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p5192",
    "name": "Jordan Lefort",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 70,
    "club": "Paris FC",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 24,
      "passing": 60,
      "dribbling": 60,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p5194",
    "name": "Jun Amano",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Jeonbuk Hyundai",
    "age": 32,
    "stats": {
      "pace": 74,
      "shooting": 61,
      "passing": 67,
      "dribbling": 73,
      "defending": 41,
      "physical": 67
    }
  },
  {
    "id": "p5225",
    "name": "Sebastián Moyano",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Unión",
    "age": 33,
    "stats": {
      "pace": 51,
      "shooting": 26,
      "passing": 29,
      "dribbling": 39,
      "defending": 15,
      "physical": 52
    }
  },
  {
    "id": "p5232",
    "name": "Edoardo Bove",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 70,
    "club": "Roma",
    "age": 21,
    "stats": {
      "pace": 61,
      "shooting": 62,
      "passing": 66,
      "dribbling": 68,
      "defending": 47,
      "physical": 64
    }
  },
  {
    "id": "p5243",
    "name": "Joaquín Laso",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Independiente",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 41,
      "passing": 52,
      "dribbling": 55,
      "defending": 52,
      "physical": 79
    }
  },
  {
    "id": "p5262",
    "name": "Tom Lowery",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Portsmouth",
    "age": 25,
    "stats": {
      "pace": 75,
      "shooting": 56,
      "passing": 64,
      "dribbling": 79,
      "defending": 46,
      "physical": 64
    }
  },
  {
    "id": "p5281",
    "name": "Meseguer",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 70,
    "club": "Granada CF",
    "age": 24,
    "stats": {
      "pace": 63,
      "shooting": 55,
      "passing": 67,
      "dribbling": 64,
      "defending": 52,
      "physical": 68
    }
  },
  {
    "id": "p5343",
    "name": "Cho Gue Sung",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Jeonbuk Hyundai",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 68,
      "passing": 49,
      "dribbling": 68,
      "defending": 15,
      "physical": 78
    }
  },
  {
    "id": "p5361",
    "name": "Kevin Gutiérrez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Defensa",
    "age": 26,
    "stats": {
      "pace": 76,
      "shooting": 57,
      "passing": 66,
      "dribbling": 77,
      "defending": 49,
      "physical": 76
    }
  },
  {
    "id": "p5410",
    "name": "Enrique Bologna",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 70,
    "club": "Defensa",
    "age": 41,
    "stats": {
      "pace": 42,
      "shooting": 23,
      "passing": 32,
      "dribbling": 36,
      "defending": 14,
      "physical": 50
    }
  },
  {
    "id": "p5453",
    "name": "Knowledge Musona",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Zimbabwe",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 70,
    "club": "Al Tai",
    "age": 33,
    "stats": {
      "pace": 75,
      "shooting": 70,
      "passing": 68,
      "dribbling": 75,
      "defending": 33,
      "physical": 74
    }
  },
  {
    "id": "p5487",
    "name": "Joe Morrell",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Portsmouth",
    "age": 26,
    "stats": {
      "pace": 70,
      "shooting": 48,
      "passing": 66,
      "dribbling": 78,
      "defending": 42,
      "physical": 58
    }
  },
  {
    "id": "p5499",
    "name": "Pietro Ceccaroni",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 70,
    "club": "Lecce",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 28,
      "passing": 53,
      "dribbling": 57,
      "defending": 55,
      "physical": 71
    }
  },
  {
    "id": "p5526",
    "name": "Alex Smithies",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Leicester City",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 22,
      "passing": 29,
      "dribbling": 29,
      "defending": 13,
      "physical": 56
    }
  },
  {
    "id": "p5574",
    "name": "Conor Townsend",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "West Brom",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 44,
      "passing": 64,
      "dribbling": 69,
      "defending": 51,
      "physical": 69
    }
  },
  {
    "id": "p5581",
    "name": "Christoph Klarer",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 70,
    "club": "Düsseldorf",
    "age": 23,
    "stats": {
      "pace": 57,
      "shooting": 36,
      "passing": 48,
      "dribbling": 49,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p5582",
    "name": "Melle Meulensteen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Vitesse",
    "age": 24,
    "stats": {
      "pace": 72,
      "shooting": 55,
      "passing": 63,
      "dribbling": 67,
      "defending": 51,
      "physical": 72
    }
  },
  {
    "id": "p5600",
    "name": "Sebastián Pérez",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Boavista FC",
    "age": 30,
    "stats": {
      "pace": 68,
      "shooting": 62,
      "passing": 63,
      "dribbling": 68,
      "defending": 54,
      "physical": 61
    }
  },
  {
    "id": "p5649",
    "name": "Dennis Geiger",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 70,
    "club": "TSG Hoffenheim",
    "age": 25,
    "stats": {
      "pace": 55,
      "shooting": 55,
      "passing": 77,
      "dribbling": 82,
      "defending": 51,
      "physical": 65
    }
  },
  {
    "id": "p5668",
    "name": "Christoph Knasmüllner",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "SK Rapid Wien",
    "age": 31,
    "stats": {
      "pace": 74,
      "shooting": 63,
      "passing": 67,
      "dribbling": 71,
      "defending": 34,
      "physical": 67
    }
  },
  {
    "id": "p5675",
    "name": "Mert Çetin",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 70,
    "club": "Adana Demirspor",
    "age": 26,
    "stats": {
      "pace": 60,
      "shooting": 46,
      "passing": 54,
      "dribbling": 50,
      "defending": 53,
      "physical": 73
    }
  },
  {
    "id": "p2",
    "name": "Silaldo Taffarel",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Corinthians",
    "age": 31,
    "stats": {
      "pace": 66,
      "shooting": 60,
      "passing": 63,
      "dribbling": 62,
      "defending": 46,
      "physical": 74
    }
  },
  {
    "id": "p16",
    "name": "John Souttar",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Rangers",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 42,
      "passing": 58,
      "dribbling": 62,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p51",
    "name": "Andrea Barberis",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 69,
    "club": "Monza",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 53,
      "passing": 70,
      "dribbling": 71,
      "defending": 53,
      "physical": 66
    }
  },
  {
    "id": "p71",
    "name": "Mauro Luna Diale",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Unión",
    "age": 24,
    "stats": {
      "pace": 82,
      "shooting": 69,
      "passing": 66,
      "dribbling": 78,
      "defending": 31,
      "physical": 60
    }
  },
  {
    "id": "p173",
    "name": "Anders Hagelskjær",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "AaB",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 47,
      "passing": 63,
      "dribbling": 59,
      "defending": 50,
      "physical": 66
    }
  },
  {
    "id": "p210",
    "name": "Yannik Keitel",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 69,
    "club": "SC Freiburg",
    "age": 23,
    "stats": {
      "pace": 64,
      "shooting": 48,
      "passing": 64,
      "dribbling": 65,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p236",
    "name": "Efkan Bekiroglu",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Alanyaspor",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 62,
      "passing": 67,
      "dribbling": 70,
      "defending": 37,
      "physical": 64
    }
  },
  {
    "id": "p328",
    "name": "Yoon Bit Garam",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Suwon FC",
    "age": 33,
    "stats": {
      "pace": 69,
      "shooting": 66,
      "passing": 70,
      "dribbling": 70,
      "defending": 41,
      "physical": 64
    }
  },
  {
    "id": "p389",
    "name": "Emiliano Viviano",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Karagümrük SK",
    "age": 37,
    "stats": {
      "pace": 17,
      "shooting": 25,
      "passing": 36,
      "dribbling": 26,
      "defending": 8,
      "physical": 47
    }
  },
  {
    "id": "p400",
    "name": "Constantin Budescu",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Romania",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "FC Petrolul",
    "age": 34,
    "stats": {
      "pace": 44,
      "shooting": 72,
      "passing": 75,
      "dribbling": 67,
      "defending": 21,
      "physical": 50
    }
  },
  {
    "id": "p444",
    "name": "Christian Groß",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 69,
    "club": "SV Werder Bremen",
    "age": 34,
    "stats": {
      "pace": 55,
      "shooting": 49,
      "passing": 61,
      "dribbling": 62,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p466",
    "name": "Arthur Desmas",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 69,
    "club": "Havre AC",
    "age": 29,
    "stats": {
      "pace": 36,
      "shooting": 26,
      "passing": 26,
      "dribbling": 24,
      "defending": 11,
      "physical": 34
    }
  },
  {
    "id": "p484",
    "name": "Grego Sierra",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Burgos CF",
    "age": 30,
    "stats": {
      "pace": 53,
      "shooting": 46,
      "passing": 54,
      "dribbling": 57,
      "defending": 51,
      "physical": 64
    }
  },
  {
    "id": "p505",
    "name": "Mehdi Zerkane",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Nîmes Olympique",
    "age": 24,
    "stats": {
      "pace": 63,
      "shooting": 60,
      "passing": 68,
      "dribbling": 69,
      "defending": 44,
      "physical": 66
    }
  },
  {
    "id": "p532",
    "name": "Leonardo Mancuso",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Como",
    "age": 31,
    "stats": {
      "pace": 75,
      "shooting": 68,
      "passing": 62,
      "dribbling": 77,
      "defending": 20,
      "physical": 67
    }
  },
  {
    "id": "p535",
    "name": "Felix Platte",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SC Paderborn 07",
    "age": 27,
    "stats": {
      "pace": 77,
      "shooting": 68,
      "passing": 52,
      "dribbling": 61,
      "defending": 15,
      "physical": 70
    }
  },
  {
    "id": "p548",
    "name": "Déiber Caicedo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Whitecaps FC",
    "age": 23,
    "stats": {
      "pace": 85,
      "shooting": 65,
      "passing": 65,
      "dribbling": 83,
      "defending": 27,
      "physical": 55
    }
  },
  {
    "id": "p556",
    "name": "Álvaro García",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "Rayo Vallecano",
    "age": 30,
    "stats": {
      "pace": 92,
      "shooting": 63,
      "passing": 72,
      "dribbling": 83,
      "defending": 25,
      "physical": 57
    }
  },
  {
    "id": "p600",
    "name": "Maxime Le Marchand",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 69,
    "club": "Strasbourg",
    "age": 33,
    "stats": {
      "pace": 59,
      "shooting": 41,
      "passing": 70,
      "dribbling": 64,
      "defending": 54,
      "physical": 69
    }
  },
  {
    "id": "p603",
    "name": "Graham Zusi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Sporting KC",
    "age": 37,
    "stats": {
      "pace": 55,
      "shooting": 70,
      "passing": 73,
      "dribbling": 69,
      "defending": 49,
      "physical": 70
    }
  },
  {
    "id": "p633",
    "name": "Thierry Ambrose",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "KV Oostende",
    "age": 26,
    "stats": {
      "pace": 82,
      "shooting": 67,
      "passing": 61,
      "dribbling": 75,
      "defending": 18,
      "physical": 68
    }
  },
  {
    "id": "p655",
    "name": "Rodrigo Ely",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "UD Almería",
    "age": 29,
    "stats": {
      "pace": 48,
      "shooting": 31,
      "passing": 44,
      "dribbling": 47,
      "defending": 56,
      "physical": 68
    }
  },
  {
    "id": "p679",
    "name": "Mathias Greve",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Brøndby IF",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 61,
      "passing": 65,
      "dribbling": 67,
      "defending": 39,
      "physical": 66
    }
  },
  {
    "id": "p749",
    "name": "Filippo Melegoni",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Standard Liège",
    "age": 24,
    "stats": {
      "pace": 56,
      "shooting": 53,
      "passing": 68,
      "dribbling": 68,
      "defending": 47,
      "physical": 54
    }
  },
  {
    "id": "p813",
    "name": "Marquinhos",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Norwich",
    "age": 20,
    "stats": {
      "pace": 80,
      "shooting": 60,
      "passing": 66,
      "dribbling": 77,
      "defending": 24,
      "physical": 53
    }
  },
  {
    "id": "p828",
    "name": "Sipho Mbule",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Mamelodi Sundowns",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 49,
      "passing": 64,
      "dribbling": 67,
      "defending": 37,
      "physical": 59
    }
  },
  {
    "id": "p843",
    "name": "Marko Poletanović",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Zagłębie Lubin",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 65,
      "passing": 65,
      "dribbling": 63,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p850",
    "name": "Nico Melamed",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "RCD Espanyol",
    "age": 22,
    "stats": {
      "pace": 79,
      "shooting": 66,
      "passing": 72,
      "dribbling": 80,
      "defending": 29,
      "physical": 59
    }
  },
  {
    "id": "p929",
    "name": "Petter Strand",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Vålerenga Fotball",
    "age": 29,
    "stats": {
      "pace": 78,
      "shooting": 60,
      "passing": 62,
      "dribbling": 72,
      "defending": 48,
      "physical": 72
    }
  },
  {
    "id": "p956",
    "name": "Jérôme Prior",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Pau FC",
    "age": 28,
    "stats": {
      "pace": 52,
      "shooting": 25,
      "passing": 34,
      "dribbling": 32,
      "defending": 13,
      "physical": 52
    }
  },
  {
    "id": "p974",
    "name": "Maciej Domański",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Stal Mielec",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 64,
      "passing": 66,
      "dribbling": 73,
      "defending": 36,
      "physical": 68
    }
  },
  {
    "id": "p998",
    "name": "Craig Noone",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Macarthur FC",
    "age": 35,
    "stats": {
      "pace": 69,
      "shooting": 65,
      "passing": 69,
      "dribbling": 72,
      "defending": 42,
      "physical": 68
    }
  },
  {
    "id": "p1013",
    "name": "Lewis Bate",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Oxford United",
    "age": 20,
    "stats": {
      "pace": 75,
      "shooting": 51,
      "passing": 66,
      "dribbling": 73,
      "defending": 44,
      "physical": 58
    }
  },
  {
    "id": "p1046",
    "name": "Jamie Jacobs",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SC Cambuur",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 64,
      "passing": 67,
      "dribbling": 69,
      "defending": 45,
      "physical": 63
    }
  },
  {
    "id": "p1092",
    "name": "Axel Werner",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Elche CF",
    "age": 27,
    "stats": {
      "pace": 45,
      "shooting": 26,
      "passing": 27,
      "dribbling": 28,
      "defending": 14,
      "physical": 49
    }
  },
  {
    "id": "p1093",
    "name": "Nick Powell",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Stoke City",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 68,
      "passing": 69,
      "dribbling": 72,
      "defending": 37,
      "physical": 70
    }
  },
  {
    "id": "p1114",
    "name": "Sarpreet Singh",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "New Zealand",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Jahn Regensburg",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 65,
      "passing": 70,
      "dribbling": 76,
      "defending": 35,
      "physical": 56
    }
  },
  {
    "id": "p1147",
    "name": "Mile Svilar",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 69,
    "club": "Roma",
    "age": 24,
    "stats": {
      "pace": 58,
      "shooting": 24,
      "passing": 34,
      "dribbling": 40,
      "defending": 13,
      "physical": 48
    }
  },
  {
    "id": "p1152",
    "name": "Alson Botelho",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "RB Bragantino",
    "age": 23,
    "stats": {
      "pace": 61,
      "shooting": 45,
      "passing": 56,
      "dribbling": 65,
      "defending": 56,
      "physical": 70
    }
  },
  {
    "id": "p1198",
    "name": "Matías Soulé",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 69,
    "club": "Juventus",
    "age": 20,
    "stats": {
      "pace": 75,
      "shooting": 66,
      "passing": 68,
      "dribbling": 80,
      "defending": 25,
      "physical": 48
    }
  },
  {
    "id": "p1202",
    "name": "Santiago Moreno",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Portland Timbers",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 64,
      "passing": 62,
      "dribbling": 79,
      "defending": 42,
      "physical": 61
    }
  },
  {
    "id": "p1221",
    "name": "Josh Knight",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Peterborough",
    "age": 25,
    "stats": {
      "pace": 57,
      "shooting": 51,
      "passing": 57,
      "dribbling": 60,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p1261",
    "name": "Aimar Oroz",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 69,
    "club": "CA Osasuna",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 68,
      "passing": 67,
      "dribbling": 71,
      "defending": 35,
      "physical": 62
    }
  },
  {
    "id": "p1342",
    "name": "Chris Durkin",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "D.C. United",
    "age": 23,
    "stats": {
      "pace": 56,
      "shooting": 58,
      "passing": 67,
      "dribbling": 64,
      "defending": 48,
      "physical": 73
    }
  },
  {
    "id": "p1345",
    "name": "Benjamin Uphoff",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 69,
    "club": "SC Freiburg",
    "age": 30,
    "stats": {
      "pace": 38,
      "shooting": 19,
      "passing": 24,
      "dribbling": 24,
      "defending": 9,
      "physical": 41
    }
  },
  {
    "id": "p1382",
    "name": "Jony",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "R. Sporting",
    "age": 32,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 71,
      "dribbling": 74,
      "defending": 38,
      "physical": 58
    }
  },
  {
    "id": "p1407",
    "name": "Manfred Fischer",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FK Austria Wien",
    "age": 28,
    "stats": {
      "pace": 71,
      "shooting": 65,
      "passing": 65,
      "dribbling": 71,
      "defending": 33,
      "physical": 74
    }
  },
  {
    "id": "p1414",
    "name": "Bilal El Khannouss",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Morocco",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "KRC Genk",
    "age": 19,
    "stats": {
      "pace": 73,
      "shooting": 50,
      "passing": 71,
      "dribbling": 78,
      "defending": 27,
      "physical": 52
    }
  },
  {
    "id": "p1420",
    "name": "Tsuyoshi Watanabe",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Japan",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "KV Kortrijk",
    "age": 26,
    "stats": {
      "pace": 75,
      "shooting": 29,
      "passing": 47,
      "dribbling": 53,
      "defending": 51,
      "physical": 74
    }
  },
  {
    "id": "p1429",
    "name": "İsmail Yüksek",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Fenerbahçe",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 58,
      "passing": 67,
      "dribbling": 70,
      "defending": 50,
      "physical": 70
    }
  },
  {
    "id": "p1459",
    "name": "Vicente Pizarro",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Chile",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Colo-Colo",
    "age": 20,
    "stats": {
      "pace": 68,
      "shooting": 47,
      "passing": 65,
      "dribbling": 72,
      "defending": 49,
      "physical": 66
    }
  },
  {
    "id": "p1471",
    "name": "David Affengruber",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "SK Sturm Graz",
    "age": 22,
    "stats": {
      "pace": 73,
      "shooting": 40,
      "passing": 52,
      "dribbling": 60,
      "defending": 52,
      "physical": 73
    }
  },
  {
    "id": "p1490",
    "name": "Tom Trybull",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Blackpool",
    "age": 30,
    "stats": {
      "pace": 59,
      "shooting": 52,
      "passing": 64,
      "dribbling": 66,
      "defending": 50,
      "physical": 73
    }
  },
  {
    "id": "p1497",
    "name": "Josh Scowen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Wycombe",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 55,
      "passing": 62,
      "dribbling": 69,
      "defending": 50,
      "physical": 80
    }
  },
  {
    "id": "p1529",
    "name": "Jonathan Ring",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Jeju United",
    "age": 31,
    "stats": {
      "pace": 81,
      "shooting": 64,
      "passing": 68,
      "dribbling": 73,
      "defending": 36,
      "physical": 69
    }
  },
  {
    "id": "p1538",
    "name": "Erik Marxen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Nordsjælland",
    "age": 32,
    "stats": {
      "pace": 54,
      "shooting": 55,
      "passing": 61,
      "dribbling": 61,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p1575",
    "name": "Antolín Alcáraz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Olimpia",
    "age": 41,
    "stats": {
      "pace": 32,
      "shooting": 42,
      "passing": 52,
      "dribbling": 55,
      "defending": 54,
      "physical": 69
    }
  },
  {
    "id": "p1621",
    "name": "William Cuesta",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Deportes Tolima",
    "age": 30,
    "stats": {
      "pace": 47,
      "shooting": 22,
      "passing": 24,
      "dribbling": 24,
      "defending": 12,
      "physical": 46
    }
  },
  {
    "id": "p1655",
    "name": "Theocharis Tsingaras",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Greece",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 69,
    "club": "Toulouse FC",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 56,
      "passing": 63,
      "dribbling": 71,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p1685",
    "name": "Nwankwo Obiora",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "GD Chaves",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 61,
      "passing": 59,
      "dribbling": 62,
      "defending": 49,
      "physical": 77
    }
  },
  {
    "id": "p1692",
    "name": "Toni Domgjoni",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Vitesse",
    "age": 24,
    "stats": {
      "pace": 61,
      "shooting": 60,
      "passing": 65,
      "dribbling": 70,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p1705",
    "name": "Jon McLaughlin",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Scotland",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Rangers",
    "age": 35,
    "stats": {
      "pace": 52,
      "shooting": 26,
      "passing": 34,
      "dribbling": 40,
      "defending": 12,
      "physical": 49
    }
  },
  {
    "id": "p1740",
    "name": "Joshua Kitolano",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Sparta Rotterdam",
    "age": 22,
    "stats": {
      "pace": 77,
      "shooting": 52,
      "passing": 62,
      "dribbling": 75,
      "defending": 45,
      "physical": 74
    }
  },
  {
    "id": "p1754",
    "name": "Dominik Kotarski",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "PAOK FC",
    "age": 23,
    "stats": {
      "pace": 32,
      "shooting": 18,
      "passing": 26,
      "dribbling": 35,
      "defending": 9,
      "physical": 39
    }
  },
  {
    "id": "p1800",
    "name": "Denys Bain",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "AJ Auxerre",
    "age": 30,
    "stats": {
      "pace": 55,
      "shooting": 27,
      "passing": 47,
      "dribbling": 49,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p1818",
    "name": "Dániel Gazdag",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Hungary",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Philadelphia",
    "age": 27,
    "stats": {
      "pace": 77,
      "shooting": 70,
      "passing": 67,
      "dribbling": 75,
      "defending": 44,
      "physical": 67
    }
  },
  {
    "id": "p1837",
    "name": "Erik",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Changchun Yatai",
    "age": 29,
    "stats": {
      "pace": 86,
      "shooting": 71,
      "passing": 65,
      "dribbling": 80,
      "defending": 14,
      "physical": 60
    }
  },
  {
    "id": "p1853",
    "name": "Jimmy Roye",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Stade Lavallois",
    "age": 34,
    "stats": {
      "pace": 65,
      "shooting": 64,
      "passing": 65,
      "dribbling": 71,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p1919",
    "name": "Pablo López",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "River Plate",
    "age": 26,
    "stats": {
      "pace": 73,
      "shooting": 63,
      "passing": 67,
      "dribbling": 79,
      "defending": 29,
      "physical": 55
    }
  },
  {
    "id": "p1927",
    "name": "Barış Ekincier",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Azerbaijan",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SV Waldhof",
    "age": 24,
    "stats": {
      "pace": 85,
      "shooting": 58,
      "passing": 59,
      "dribbling": 67,
      "defending": 29,
      "physical": 50
    }
  },
  {
    "id": "p1978",
    "name": "Glen Rea",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Cheltenham Town",
    "age": 28,
    "stats": {
      "pace": 63,
      "shooting": 34,
      "passing": 55,
      "dribbling": 60,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p1979",
    "name": "Josh Onomah",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Preston",
    "age": 26,
    "stats": {
      "pace": 65,
      "shooting": 63,
      "passing": 65,
      "dribbling": 75,
      "defending": 42,
      "physical": 67
    }
  },
  {
    "id": "p2013",
    "name": "Michael Rose",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Coventry City",
    "age": 27,
    "stats": {
      "pace": 70,
      "shooting": 38,
      "passing": 59,
      "dribbling": 59,
      "defending": 51,
      "physical": 72
    }
  },
  {
    "id": "p2021",
    "name": "Liam McCarron",
    "position": "LM",
    "positions": [
      "LM",
      "LW",
      "RW"
    ],
    "nationality": "Scotland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Port Vale",
    "age": 22,
    "stats": {
      "pace": 82,
      "shooting": 52,
      "passing": 54,
      "dribbling": 66,
      "defending": 40,
      "physical": 48
    }
  },
  {
    "id": "p2026",
    "name": "Gabriele Moncini",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SPAL",
    "age": 27,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 54,
      "dribbling": 68,
      "defending": 24,
      "physical": 67
    }
  },
  {
    "id": "p2054",
    "name": "Alfonso Parot",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Uni. Católica",
    "age": 33,
    "stats": {
      "pace": 69,
      "shooting": 60,
      "passing": 64,
      "dribbling": 64,
      "defending": 51,
      "physical": 77
    }
  },
  {
    "id": "p2092",
    "name": "Sheriff Sinyan",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Gambia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Molde FK",
    "age": 27,
    "stats": {
      "pace": 73,
      "shooting": 43,
      "passing": 54,
      "dribbling": 60,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p2156",
    "name": "Maarten Paes",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Dallas",
    "age": 25,
    "stats": {
      "pace": 32,
      "shooting": 20,
      "passing": 25,
      "dribbling": 26,
      "defending": 10,
      "physical": 43
    }
  },
  {
    "id": "p2162",
    "name": "Yunus Mallı",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Kasımpaşa",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 71,
      "dribbling": 76,
      "defending": 24,
      "physical": 54
    }
  },
  {
    "id": "p2167",
    "name": "Adrien Hunou",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Angers SCO",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 70,
      "passing": 67,
      "dribbling": 73,
      "defending": 37,
      "physical": 69
    }
  },
  {
    "id": "p2168",
    "name": "Denis Huseinbašić",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 69,
    "club": "1. FC Köln",
    "age": 22,
    "stats": {
      "pace": 68,
      "shooting": 55,
      "passing": 63,
      "dribbling": 66,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": "p2177",
    "name": "Massimo Luongo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Ipswich",
    "age": 30,
    "stats": {
      "pace": 62,
      "shooting": 60,
      "passing": 62,
      "dribbling": 70,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p2180",
    "name": "Ľubomír Šatka",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Lech Poznań",
    "age": 27,
    "stats": {
      "pace": 63,
      "shooting": 31,
      "passing": 55,
      "dribbling": 56,
      "defending": 51,
      "physical": 71
    }
  },
  {
    "id": "p2240",
    "name": "Thomas Delaney",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 69,
    "club": "TSG Hoffenheim",
    "age": 31,
    "stats": {
      "pace": 72,
      "shooting": 72,
      "passing": 74,
      "dribbling": 73,
      "defending": 61,
      "physical": 84
    }
  },
  {
    "id": "p2328",
    "name": "Franck Yannick Kessié",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Ivory Coast",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "FC Barcelona",
    "age": 26,
    "stats": {
      "pace": 78,
      "shooting": 74,
      "passing": 75,
      "dribbling": 77,
      "defending": 62,
      "physical": 84
    }
  },
  {
    "id": "p2352",
    "name": "Franco Fagúndez",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Nacional",
    "age": 23,
    "stats": {
      "pace": 73,
      "shooting": 73,
      "passing": 66,
      "dribbling": 69,
      "defending": 18,
      "physical": 58
    }
  },
  {
    "id": "p2389",
    "name": "Craig Cathcart",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Northern Ireland",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Watford",
    "age": 34,
    "stats": {
      "pace": 35,
      "shooting": 39,
      "passing": 56,
      "dribbling": 50,
      "defending": 53,
      "physical": 68
    }
  },
  {
    "id": "p2483",
    "name": "Jordan Thompson",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Northern Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Stoke City",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 53,
      "passing": 68,
      "dribbling": 73,
      "defending": 46,
      "physical": 66
    }
  },
  {
    "id": "p2488",
    "name": "Oberdan",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Pohang Steelers",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 62,
      "passing": 65,
      "dribbling": 66,
      "defending": 47,
      "physical": 61
    }
  },
  {
    "id": "p2504",
    "name": "Dominik Furman",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Wisła Płock",
    "age": 31,
    "stats": {
      "pace": 66,
      "shooting": 62,
      "passing": 68,
      "dribbling": 67,
      "defending": 48,
      "physical": 75
    }
  },
  {
    "id": "p2575",
    "name": "Augusto Batalla",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "San Lorenzo",
    "age": 27,
    "stats": {
      "pace": 43,
      "shooting": 23,
      "passing": 23,
      "dribbling": 28,
      "defending": 15,
      "physical": 46
    }
  },
  {
    "id": "p2637",
    "name": "Philipp Köhn",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "RB Salzburg",
    "age": 25,
    "stats": {
      "pace": 46,
      "shooting": 18,
      "passing": 33,
      "dribbling": 33,
      "defending": 10,
      "physical": 40
    }
  },
  {
    "id": "p2662",
    "name": "Musa Al-Tamari",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Jordan",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "OH Leuven",
    "age": 26,
    "stats": {
      "pace": 83,
      "shooting": 62,
      "passing": 60,
      "dribbling": 83,
      "defending": 32,
      "physical": 64
    }
  },
  {
    "id": "p2667",
    "name": "Atienza",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Burgos CF",
    "age": 24,
    "stats": {
      "pace": 57,
      "shooting": 53,
      "passing": 62,
      "dribbling": 62,
      "defending": 50,
      "physical": 66
    }
  },
  {
    "id": "p2723",
    "name": "Tomás Silva",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "FC Vizela",
    "age": 23,
    "stats": {
      "pace": 72,
      "shooting": 52,
      "passing": 69,
      "dribbling": 70,
      "defending": 43,
      "physical": 56
    }
  },
  {
    "id": "p2725",
    "name": "Strahil Popov",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Bulgaria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Ümraniyespor",
    "age": 33,
    "stats": {
      "pace": 71,
      "shooting": 52,
      "passing": 63,
      "dribbling": 61,
      "defending": 48,
      "physical": 72
    }
  },
  {
    "id": "p2776",
    "name": "Michael Cooper",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Plymouth Argyle",
    "age": 23,
    "stats": {
      "pace": 33,
      "shooting": 18,
      "passing": 45,
      "dribbling": 27,
      "defending": 10,
      "physical": 39
    }
  },
  {
    "id": "p2795",
    "name": "Rodrigo Saravia",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Peñarol",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 51,
      "passing": 61,
      "dribbling": 59,
      "defending": 51,
      "physical": 69
    }
  },
  {
    "id": "p2873",
    "name": "Írven Ávila",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Sporting Cristal",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 69,
      "passing": 61,
      "dribbling": 76,
      "defending": 18,
      "physical": 58
    }
  },
  {
    "id": "p2890",
    "name": "Ezequiel Centurión",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "River Plate",
    "age": 26,
    "stats": {
      "pace": 49,
      "shooting": 20,
      "passing": 26,
      "dribbling": 33,
      "defending": 10,
      "physical": 53
    }
  },
  {
    "id": "p2908",
    "name": "Ardon Jashari",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Switzerland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "FC Luzern",
    "age": 21,
    "stats": {
      "pace": 66,
      "shooting": 62,
      "passing": 65,
      "dribbling": 68,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p2913",
    "name": "Ryan Bertrand",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Leicester City",
    "age": 34,
    "stats": {
      "pace": 64,
      "shooting": 52,
      "passing": 71,
      "dribbling": 70,
      "defending": 54,
      "physical": 68
    }
  },
  {
    "id": "p2933",
    "name": "Veljko Birmančević",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 69,
    "club": "Toulouse FC",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 64,
      "passing": 65,
      "dribbling": 77,
      "defending": 27,
      "physical": 57
    }
  },
  {
    "id": "p2957",
    "name": "Matthieu Dreyer",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "AS Saint-Étienne",
    "age": 34,
    "stats": {
      "pace": 50,
      "shooting": 23,
      "passing": 25,
      "dribbling": 31,
      "defending": 11,
      "physical": 48
    }
  },
  {
    "id": "p2959",
    "name": "Vasilios Barkas",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Utrecht",
    "age": 29,
    "stats": {
      "pace": 47,
      "shooting": 20,
      "passing": 33,
      "dribbling": 27,
      "defending": 10,
      "physical": 52
    }
  },
  {
    "id": "p2968",
    "name": "Hákon Arnar Haraldsson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Iceland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "F.C. København",
    "age": 20,
    "stats": {
      "pace": 74,
      "shooting": 60,
      "passing": 64,
      "dribbling": 77,
      "defending": 42,
      "physical": 66
    }
  },
  {
    "id": "p2971",
    "name": "Brian Ocampo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "Cádiz CF",
    "age": 24,
    "stats": {
      "pace": 84,
      "shooting": 67,
      "passing": 69,
      "dribbling": 77,
      "defending": 38,
      "physical": 62
    }
  },
  {
    "id": "p2982",
    "name": "Onur Ergün",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Hatayspor",
    "age": 30,
    "stats": {
      "pace": 58,
      "shooting": 62,
      "passing": 63,
      "dribbling": 64,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p2997",
    "name": "Gilles Dewaele",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Standard Liège",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 56,
      "passing": 61,
      "dribbling": 61,
      "defending": 49,
      "physical": 70
    }
  },
  {
    "id": "p3005",
    "name": "Damjan Đoković",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 69,
    "club": "Al Raed",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 63,
      "passing": 67,
      "dribbling": 64,
      "defending": 49,
      "physical": 77
    }
  },
  {
    "id": "p3078",
    "name": "Víctor Moreno",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Indep. Medellín",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 42,
      "passing": 52,
      "dribbling": 58,
      "defending": 52,
      "physical": 77
    }
  },
  {
    "id": "p3122",
    "name": "Salman Al Faraj",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 69,
    "club": "Al Hilal",
    "age": 34,
    "stats": {
      "pace": 51,
      "shooting": 68,
      "passing": 78,
      "dribbling": 73,
      "defending": 49,
      "physical": 65
    }
  },
  {
    "id": "p3157",
    "name": "Florian Flick",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "1. FC Nürnberg",
    "age": 23,
    "stats": {
      "pace": 61,
      "shooting": 48,
      "passing": 66,
      "dribbling": 59,
      "defending": 49,
      "physical": 69
    }
  },
  {
    "id": "p3183",
    "name": "Rodrigo Muniz",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Middlesbrough",
    "age": 22,
    "stats": {
      "pace": 70,
      "shooting": 70,
      "passing": 55,
      "dribbling": 69,
      "defending": 22,
      "physical": 70
    }
  },
  {
    "id": "p3189",
    "name": "Marco Grüll",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SK Rapid Wien",
    "age": 25,
    "stats": {
      "pace": 86,
      "shooting": 69,
      "passing": 64,
      "dribbling": 74,
      "defending": 16,
      "physical": 63
    }
  },
  {
    "id": "p3270",
    "name": "Patrick Osterhage",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 69,
    "club": "VfL Bochum",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 50,
      "passing": 67,
      "dribbling": 71,
      "defending": 51,
      "physical": 67
    }
  },
  {
    "id": "p3306",
    "name": "Conor Coventry",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Rotherham Utd",
    "age": 23,
    "stats": {
      "pace": 65,
      "shooting": 52,
      "passing": 65,
      "dribbling": 72,
      "defending": 47,
      "physical": 68
    }
  },
  {
    "id": "p3344",
    "name": "Reinaldo Lenis",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Al Adalah",
    "age": 31,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 67,
      "dribbling": 72,
      "defending": 27,
      "physical": 53
    }
  },
  {
    "id": "p3380",
    "name": "Jonas Föhrenbach",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 69,
    "club": "Heidenheim",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 40,
      "passing": 57,
      "dribbling": 62,
      "defending": 52,
      "physical": 74
    }
  },
  {
    "id": "p3386",
    "name": "Adam Davies",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Sheffield Utd",
    "age": 31,
    "stats": {
      "pace": 40,
      "shooting": 22,
      "passing": 23,
      "dribbling": 27,
      "defending": 11,
      "physical": 38
    }
  },
  {
    "id": "p3394",
    "name": "Lauro Revéz",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Peru",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Sport Boys",
    "age": 35,
    "stats": {
      "pace": 69,
      "shooting": 59,
      "passing": 62,
      "dribbling": 62,
      "defending": 32,
      "physical": 59
    }
  },
  {
    "id": "p3404",
    "name": "Lamine Diack",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "MKE Ankaragücü",
    "age": 22,
    "stats": {
      "pace": 75,
      "shooting": 59,
      "passing": 60,
      "dribbling": 66,
      "defending": 51,
      "physical": 73
    }
  },
  {
    "id": "p3425",
    "name": "Archie Collins",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Exeter City",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 56,
      "passing": 63,
      "dribbling": 74,
      "defending": 47,
      "physical": 74
    }
  },
  {
    "id": "p3525",
    "name": "Gonzalo Castro",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "River Plate",
    "age": 38,
    "stats": {
      "pace": 53,
      "shooting": 76,
      "passing": 78,
      "dribbling": 71,
      "defending": 36,
      "physical": 52
    }
  },
  {
    "id": "p3531",
    "name": "Mamadou Coulibaly",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Ternana",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 58,
      "passing": 65,
      "dribbling": 69,
      "defending": 48,
      "physical": 71
    }
  },
  {
    "id": "p3546",
    "name": "Michael Lang",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Basel 1893",
    "age": 32,
    "stats": {
      "pace": 57,
      "shooting": 64,
      "passing": 65,
      "dribbling": 61,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p3563",
    "name": "Rodolfo Moguerna",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Unión La Calera",
    "age": 27,
    "stats": {
      "pace": 68,
      "shooting": 37,
      "passing": 62,
      "dribbling": 66,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p3565",
    "name": "Moussa Soumano",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "AC Ajaccio",
    "age": 18,
    "stats": {
      "pace": 77,
      "shooting": 68,
      "passing": 50,
      "dribbling": 62,
      "defending": 16,
      "physical": 63
    }
  },
  {
    "id": "p3582",
    "name": "Steven Vitória",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Canada",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Canada",
    "age": 36,
    "stats": {
      "pace": 34,
      "shooting": 56,
      "passing": 51,
      "dribbling": 41,
      "defending": 54,
      "physical": 64
    }
  },
  {
    "id": "p3589",
    "name": "Lucas Pratto",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Vélez Sarsfield",
    "age": 35,
    "stats": {
      "pace": 67,
      "shooting": 71,
      "passing": 70,
      "dribbling": 59,
      "defending": 48,
      "physical": 77
    }
  },
  {
    "id": "p3679",
    "name": "Adam Dźwigała",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC St. Pauli",
    "age": 27,
    "stats": {
      "pace": 64,
      "shooting": 44,
      "passing": 51,
      "dribbling": 59,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p3742",
    "name": "Will Vaulks",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Sheffield Wed",
    "age": 29,
    "stats": {
      "pace": 54,
      "shooting": 65,
      "passing": 66,
      "dribbling": 63,
      "defending": 50,
      "physical": 76
    }
  },
  {
    "id": "p3793",
    "name": "Georgios Tzavellas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Greece",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "AEK Athens",
    "age": 35,
    "stats": {
      "pace": 66,
      "shooting": 56,
      "passing": 57,
      "dribbling": 62,
      "defending": 51,
      "physical": 75
    }
  },
  {
    "id": "p3892",
    "name": "Petr Hronek",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Slavia Praha",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 58,
      "passing": 65,
      "dribbling": 67,
      "defending": 45,
      "physical": 60
    }
  },
  {
    "id": "p3938",
    "name": "Idrissa Touré",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Pisa",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 48,
      "passing": 62,
      "dribbling": 69,
      "defending": 45,
      "physical": 77
    }
  },
  {
    "id": "p3976",
    "name": "Víctor Cabrera",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Tigre",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 39,
      "passing": 58,
      "dribbling": 59,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p4007",
    "name": "Pablo Larrea",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "CD Tenerife",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 60,
      "passing": 64,
      "dribbling": 71,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p4022",
    "name": "Tyrese Fornah",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Reading",
    "age": 23,
    "stats": {
      "pace": 73,
      "shooting": 60,
      "passing": 64,
      "dribbling": 70,
      "defending": 49,
      "physical": 73
    }
  },
  {
    "id": "p4057",
    "name": "Josep Martínez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Serie A",
    "rating": 69,
    "club": "Genoa",
    "age": 25,
    "stats": {
      "pace": 27,
      "shooting": 17,
      "passing": 29,
      "dribbling": 18,
      "defending": 10,
      "physical": 40
    }
  },
  {
    "id": "p4077",
    "name": "Ethan Horvath",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Luton Town",
    "age": 28,
    "stats": {
      "pace": 49,
      "shooting": 23,
      "passing": 31,
      "dribbling": 31,
      "defending": 7,
      "physical": 46
    }
  },
  {
    "id": "p4096",
    "name": "Aaron Morley",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Bolton",
    "age": 23,
    "stats": {
      "pace": 68,
      "shooting": 60,
      "passing": 66,
      "dribbling": 67,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p4113",
    "name": "Antoine Makoumbou",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Congo",
    "era": "Modern",
    "league": "Serie A",
    "rating": 69,
    "club": "Cagliari",
    "age": 25,
    "stats": {
      "pace": 76,
      "shooting": 49,
      "passing": 65,
      "dribbling": 68,
      "defending": 50,
      "physical": 74
    }
  },
  {
    "id": "p4182",
    "name": "Alex Roldan",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "El Salvador",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Sounders FC",
    "age": 27,
    "stats": {
      "pace": 73,
      "shooting": 53,
      "passing": 66,
      "dribbling": 69,
      "defending": 46,
      "physical": 71
    }
  },
  {
    "id": "p4236",
    "name": "Emiliano Marcondes",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Nordsjælland",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 66,
      "passing": 67,
      "dribbling": 72,
      "defending": 31,
      "physical": 62
    }
  },
  {
    "id": "p4271",
    "name": "Rodrigo Guth",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Fortuna Sittard",
    "age": 22,
    "stats": {
      "pace": 65,
      "shooting": 38,
      "passing": 51,
      "dribbling": 55,
      "defending": 52,
      "physical": 68
    }
  },
  {
    "id": "p4278",
    "name": "Nelson Palacio",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Atl. Nacional",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 58,
      "passing": 64,
      "dribbling": 68,
      "defending": 49,
      "physical": 65
    }
  },
  {
    "id": "p4297",
    "name": "Eric Martel",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 69,
    "club": "1. FC Köln",
    "age": 21,
    "stats": {
      "pace": 66,
      "shooting": 45,
      "passing": 61,
      "dribbling": 65,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p4306",
    "name": "George Byers",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Sheffield Wed",
    "age": 27,
    "stats": {
      "pace": 59,
      "shooting": 61,
      "passing": 62,
      "dribbling": 68,
      "defending": 46,
      "physical": 62
    }
  },
  {
    "id": "p4343",
    "name": "Christian Mathenia",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "1. FC Nürnberg",
    "age": 31,
    "stats": {
      "pace": 45,
      "shooting": 21,
      "passing": 28,
      "dribbling": 28,
      "defending": 11,
      "physical": 49
    }
  },
  {
    "id": "p4351",
    "name": "Luis Cardozo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Libertad",
    "age": 34,
    "stats": {
      "pace": 77,
      "shooting": 35,
      "passing": 45,
      "dribbling": 58,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p4360",
    "name": "Leôncio Lobeiro",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Flamengo",
    "age": 23,
    "stats": {
      "pace": 83,
      "shooting": 64,
      "passing": 61,
      "dribbling": 77,
      "defending": 20,
      "physical": 65
    }
  },
  {
    "id": "p4365",
    "name": "Nelson Deossa",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Atl. Nacional",
    "age": 23,
    "stats": {
      "pace": 67,
      "shooting": 55,
      "passing": 62,
      "dribbling": 67,
      "defending": 49,
      "physical": 66
    }
  },
  {
    "id": "p4377",
    "name": "Yusuf Demir",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Austria",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Galatasaray",
    "age": 20,
    "stats": {
      "pace": 83,
      "shooting": 62,
      "passing": 64,
      "dribbling": 83,
      "defending": 12,
      "physical": 58
    }
  },
  {
    "id": "p4434",
    "name": "Iván Rossi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Platense",
    "age": 29,
    "stats": {
      "pace": 71,
      "shooting": 53,
      "passing": 63,
      "dribbling": 67,
      "defending": 54,
      "physical": 70
    }
  },
  {
    "id": "p4519",
    "name": "Ryan Porteous",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Watford",
    "age": 24,
    "stats": {
      "pace": 65,
      "shooting": 43,
      "passing": 64,
      "dribbling": 59,
      "defending": 52,
      "physical": 81
    }
  },
  {
    "id": "p4543",
    "name": "Ignasi Miquel",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "Granada CF",
    "age": 30,
    "stats": {
      "pace": 54,
      "shooting": 34,
      "passing": 57,
      "dribbling": 53,
      "defending": 52,
      "physical": 67
    }
  },
  {
    "id": "p4646",
    "name": "Joost van Aken",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "sc Heerenveen",
    "age": 29,
    "stats": {
      "pace": 61,
      "shooting": 37,
      "passing": 58,
      "dribbling": 59,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p4657",
    "name": "Romain Thomas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "SM Caen",
    "age": 35,
    "stats": {
      "pace": 33,
      "shooting": 35,
      "passing": 54,
      "dribbling": 44,
      "defending": 56,
      "physical": 68
    }
  },
  {
    "id": "p4675",
    "name": "Hidde ter Avest",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FC Utrecht",
    "age": 26,
    "stats": {
      "pace": 73,
      "shooting": 47,
      "passing": 67,
      "dribbling": 68,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p4744",
    "name": "Gjermund Åsen",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 69,
    "club": "Lillestrøm SK",
    "age": 32,
    "stats": {
      "pace": 59,
      "shooting": 65,
      "passing": 70,
      "dribbling": 69,
      "defending": 35,
      "physical": 66
    }
  },
  {
    "id": "p4750",
    "name": "Andreas Linde",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Fürth",
    "age": 30,
    "stats": {
      "pace": 49,
      "shooting": 24,
      "passing": 28,
      "dribbling": 25,
      "defending": 12,
      "physical": 43
    }
  },
  {
    "id": "p4790",
    "name": "Carlton Morris",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Luton Town",
    "age": 27,
    "stats": {
      "pace": 75,
      "shooting": 65,
      "passing": 53,
      "dribbling": 65,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p4816",
    "name": "Paul Anton",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "UTA Arad",
    "age": 32,
    "stats": {
      "pace": 65,
      "shooting": 63,
      "passing": 64,
      "dribbling": 63,
      "defending": 48,
      "physical": 73
    }
  },
  {
    "id": "p4859",
    "name": "Sofiane Feghouli",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Karagümrük SK",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 72,
      "passing": 75,
      "dribbling": 74,
      "defending": 24,
      "physical": 62
    }
  },
  {
    "id": "p4984",
    "name": "Cristian Dell'Orco",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Perugia",
    "age": 29,
    "stats": {
      "pace": 61,
      "shooting": 47,
      "passing": 57,
      "dribbling": 66,
      "defending": 52,
      "physical": 67
    }
  },
  {
    "id": "p5022",
    "name": "Oliver Hüsing",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Arminia Bielefeld",
    "age": 30,
    "stats": {
      "pace": 50,
      "shooting": 35,
      "passing": 45,
      "dribbling": 47,
      "defending": 53,
      "physical": 71
    }
  },
  {
    "id": "p5024",
    "name": "Curtis Thompson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Wycombe",
    "age": 29,
    "stats": {
      "pace": 74,
      "shooting": 57,
      "passing": 63,
      "dribbling": 72,
      "defending": 49,
      "physical": 79
    }
  },
  {
    "id": "p5120",
    "name": "Mattijs Branderhorst",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "N.E.C. Nijmegen",
    "age": 29,
    "stats": {
      "pace": 40,
      "shooting": 26,
      "passing": 28,
      "dribbling": 31,
      "defending": 10,
      "physical": 45
    }
  },
  {
    "id": "p5136",
    "name": "Carlos Manuel Cardoso Mané",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Kayserispor",
    "age": 29,
    "stats": {
      "pace": 90,
      "shooting": 70,
      "passing": 65,
      "dribbling": 83,
      "defending": 29,
      "physical": 55
    }
  },
  {
    "id": "p5139",
    "name": "Tomáš Koubek",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 69,
    "club": "FC Augsburg",
    "age": 31,
    "stats": {
      "pace": 41,
      "shooting": 25,
      "passing": 22,
      "dribbling": 23,
      "defending": 10,
      "physical": 49
    }
  },
  {
    "id": "p5163",
    "name": "Zaid Romero",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Estudiantes",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 29,
      "passing": 48,
      "dribbling": 59,
      "defending": 50,
      "physical": 71
    }
  },
  {
    "id": "p5197",
    "name": "Alberto Grassi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 69,
    "club": "Empoli",
    "age": 28,
    "stats": {
      "pace": 61,
      "shooting": 64,
      "passing": 71,
      "dribbling": 70,
      "defending": 51,
      "physical": 63
    }
  },
  {
    "id": "p5264",
    "name": "Ertaç Özbir",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Adana Demirspor",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 24,
      "passing": 19,
      "dribbling": 28,
      "defending": 12,
      "physical": 46
    }
  },
  {
    "id": "p5277",
    "name": "Pablo Ruiz",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Real Salt Lake",
    "age": 24,
    "stats": {
      "pace": 66,
      "shooting": 55,
      "passing": 65,
      "dribbling": 71,
      "defending": 54,
      "physical": 59
    }
  },
  {
    "id": "p5309",
    "name": "Rafael da Silva",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Jeonbuk Hyundai",
    "age": 31,
    "stats": {
      "pace": 85,
      "shooting": 71,
      "passing": 68,
      "dribbling": 73,
      "defending": 22,
      "physical": 68
    }
  },
  {
    "id": "p5315",
    "name": "Shane Duffy",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 69,
    "club": "Fulham",
    "age": 31,
    "stats": {
      "pace": 34,
      "shooting": 45,
      "passing": 50,
      "dribbling": 42,
      "defending": 55,
      "physical": 77
    }
  },
  {
    "id": "p5322",
    "name": "Louka Prip",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "AaB",
    "age": 26,
    "stats": {
      "pace": 77,
      "shooting": 68,
      "passing": 66,
      "dribbling": 74,
      "defending": 35,
      "physical": 63
    }
  },
  {
    "id": "p5346",
    "name": "Crivellaro",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Other",
    "rating": 69,
    "club": "Jamshedpur FC",
    "age": 34,
    "stats": {
      "pace": 49,
      "shooting": 65,
      "passing": 69,
      "dribbling": 66,
      "defending": 37,
      "physical": 57
    }
  },
  {
    "id": "p5355",
    "name": "Sebastian Kowalczyk",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Pogoń Szczecin",
    "age": 25,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 63,
      "dribbling": 80,
      "defending": 30,
      "physical": 58
    }
  },
  {
    "id": "p5512",
    "name": "Sam Field",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "QPR",
    "age": 25,
    "stats": {
      "pace": 59,
      "shooting": 54,
      "passing": 66,
      "dribbling": 65,
      "defending": 50,
      "physical": 64
    }
  },
  {
    "id": "p5539",
    "name": "Samuel Kalu",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Watford",
    "age": 26,
    "stats": {
      "pace": 86,
      "shooting": 61,
      "passing": 67,
      "dribbling": 78,
      "defending": 23,
      "physical": 64
    }
  },
  {
    "id": "p5553",
    "name": "Christopher Wooh",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Cameroon",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 69,
    "club": "Stade Rennais FC",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 43,
      "passing": 56,
      "dribbling": 55,
      "defending": 53,
      "physical": 72
    }
  },
  {
    "id": "p5568",
    "name": "Ebou Adams",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Gambia",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "Cardiff City",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 56,
      "passing": 61,
      "dribbling": 69,
      "defending": 49,
      "physical": 86
    }
  },
  {
    "id": "p5575",
    "name": "Simon Thern",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "IFK Göteborg",
    "age": 30,
    "stats": {
      "pace": 75,
      "shooting": 66,
      "passing": 66,
      "dribbling": 74,
      "defending": 45,
      "physical": 62
    }
  },
  {
    "id": "p5576",
    "name": "Chris Ramos",
    "position": "ST",
    "positions": [
      "ST",
      "CF",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 69,
    "club": "Cádiz CF",
    "age": 26,
    "stats": {
      "pace": 84,
      "shooting": 68,
      "passing": 59,
      "dribbling": 66,
      "defending": 19,
      "physical": 65
    }
  },
  {
    "id": "p5596",
    "name": "James McClean",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Legends",
    "league": "La Liga",
    "rating": 69,
    "club": "Wigan Athletic",
    "age": 34,
    "stats": {
      "pace": 70,
      "shooting": 64,
      "passing": 65,
      "dribbling": 72,
      "defending": 45,
      "physical": 77
    }
  },
  {
    "id": "p5610",
    "name": "Younès Kaabouni",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "FCSM",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 52,
      "passing": 63,
      "dribbling": 72,
      "defending": 44,
      "physical": 70
    }
  },
  {
    "id": "p5627",
    "name": "Sven Köhler",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "VfL Osnabrück",
    "age": 26,
    "stats": {
      "pace": 64,
      "shooting": 61,
      "passing": 63,
      "dribbling": 64,
      "defending": 47,
      "physical": 74
    }
  },
  {
    "id": "p5656",
    "name": "Anton Salétros",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 69,
    "club": "SM Caen",
    "age": 27,
    "stats": {
      "pace": 63,
      "shooting": 57,
      "passing": 69,
      "dribbling": 68,
      "defending": 47,
      "physical": 69
    }
  },
  {
    "id": "p3",
    "name": "Thomas Dähne",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Holstein Kiel",
    "age": 29,
    "stats": {
      "pace": 47,
      "shooting": 25,
      "passing": 29,
      "dribbling": 29,
      "defending": 12,
      "physical": 48
    }
  },
  {
    "id": "p35",
    "name": "Federico Lanzillotta",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Argentinos Jrs.",
    "age": 30,
    "stats": {
      "pace": 45,
      "shooting": 25,
      "passing": 26,
      "dribbling": 32,
      "defending": 10,
      "physical": 51
    }
  },
  {
    "id": "p64",
    "name": "Mark O'Hara",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "St. Mirren",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 55,
      "passing": 63,
      "dribbling": 67,
      "defending": 47,
      "physical": 72
    }
  },
  {
    "id": "p68",
    "name": "Rodrigo Zagareda",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Bolivia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Royal Pari",
    "age": 31,
    "stats": {
      "pace": 61,
      "shooting": 58,
      "passing": 69,
      "dribbling": 63,
      "defending": 20,
      "physical": 59
    }
  },
  {
    "id": "p89",
    "name": "Mauricio Zanega",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Wanderers",
    "age": 27,
    "stats": {
      "pace": 64,
      "shooting": 54,
      "passing": 64,
      "dribbling": 69,
      "defending": 40,
      "physical": 53
    }
  },
  {
    "id": "p130",
    "name": "Alejandro Duarte",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Sporting Cristal",
    "age": 29,
    "stats": {
      "pace": 25,
      "shooting": 18,
      "passing": 28,
      "dribbling": 24,
      "defending": 11,
      "physical": 40
    }
  },
  {
    "id": "p145",
    "name": "Tyler Morton",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Blackburn Rovers",
    "age": 20,
    "stats": {
      "pace": 65,
      "shooting": 46,
      "passing": 69,
      "dribbling": 66,
      "defending": 46,
      "physical": 63
    }
  },
  {
    "id": "p203",
    "name": "David Wotherspoon",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "St. Johnstone",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 63,
      "passing": 69,
      "dribbling": 71,
      "defending": 44,
      "physical": 66
    }
  },
  {
    "id": "p274",
    "name": "Pablo Pérez Rodríguez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Bengaluru FC",
    "age": 30,
    "stats": {
      "pace": 59,
      "shooting": 63,
      "passing": 67,
      "dribbling": 60,
      "defending": 38,
      "physical": 68
    }
  },
  {
    "id": "p296",
    "name": "Taylan Duman",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "1. FC Nürnberg",
    "age": 26,
    "stats": {
      "pace": 62,
      "shooting": 69,
      "passing": 66,
      "dribbling": 74,
      "defending": 41,
      "physical": 62
    }
  },
  {
    "id": "p446",
    "name": "Nolaskoain",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SD Eibar",
    "age": 24,
    "stats": {
      "pace": 51,
      "shooting": 56,
      "passing": 65,
      "dribbling": 64,
      "defending": 51,
      "physical": 67
    }
  },
  {
    "id": "p487",
    "name": "Rémy Riou",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "OL",
    "age": 36,
    "stats": {
      "pace": 49,
      "shooting": 22,
      "passing": 35,
      "dribbling": 31,
      "defending": 13,
      "physical": 49
    }
  },
  {
    "id": "p520",
    "name": "Andrea Bertolacci",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Karagümrük SK",
    "age": 32,
    "stats": {
      "pace": 55,
      "shooting": 71,
      "passing": 73,
      "dribbling": 74,
      "defending": 53,
      "physical": 65
    }
  },
  {
    "id": "p540",
    "name": "Alan Medina",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Premier League",
    "rating": 68,
    "club": "Liverpool",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 68,
      "passing": 66,
      "dribbling": 75,
      "defending": 33,
      "physical": 55
    }
  },
  {
    "id": "p592",
    "name": "Gavin Kilkenny",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Charlton Ath",
    "age": 23,
    "stats": {
      "pace": 62,
      "shooting": 53,
      "passing": 66,
      "dribbling": 69,
      "defending": 47,
      "physical": 58
    }
  },
  {
    "id": "p597",
    "name": "Carleto Costinha",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Fluminense",
    "age": 31,
    "stats": {
      "pace": 83,
      "shooting": 60,
      "passing": 70,
      "dribbling": 75,
      "defending": 33,
      "physical": 54
    }
  },
  {
    "id": "p605",
    "name": "Vladimir Screciu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Univ. Craiova",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 38,
      "passing": 58,
      "dribbling": 61,
      "defending": 51,
      "physical": 74
    }
  },
  {
    "id": "p609",
    "name": "Gianfranco Chávez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Sporting Cristal",
    "age": 25,
    "stats": {
      "pace": 62,
      "shooting": 27,
      "passing": 47,
      "dribbling": 58,
      "defending": 51,
      "physical": 72
    }
  },
  {
    "id": "p627",
    "name": "Ofir Marciano",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Israel",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Feyenoord",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 21,
      "passing": 25,
      "dribbling": 35,
      "defending": 10,
      "physical": 53
    }
  },
  {
    "id": "p658",
    "name": "Daniel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SJ Earthquakes",
    "age": 29,
    "stats": {
      "pace": 23,
      "shooting": 18,
      "passing": 23,
      "dribbling": 31,
      "defending": 9,
      "physical": 40
    }
  },
  {
    "id": "p672",
    "name": "Vitor Marlão",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Fortaleza",
    "age": 27,
    "stats": {
      "pace": 66,
      "shooting": 45,
      "passing": 61,
      "dribbling": 53,
      "defending": 52,
      "physical": 55
    }
  },
  {
    "id": "p674",
    "name": "Jeong Jae Yong",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Suwon FC",
    "age": 32,
    "stats": {
      "pace": 49,
      "shooting": 63,
      "passing": 63,
      "dribbling": 61,
      "defending": 47,
      "physical": 79
    }
  },
  {
    "id": "p709",
    "name": "Darwin Cuero",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Ecuador",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "U. Católica",
    "age": 28,
    "stats": {
      "pace": 45,
      "shooting": 21,
      "passing": 19,
      "dribbling": 39,
      "defending": 13,
      "physical": 37
    }
  },
  {
    "id": "p738",
    "name": "Gustav Ludwigson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Ulsan Hyundai",
    "age": 29,
    "stats": {
      "pace": 86,
      "shooting": 63,
      "passing": 61,
      "dribbling": 69,
      "defending": 19,
      "physical": 81
    }
  },
  {
    "id": "p743",
    "name": "David Gil",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 68,
    "club": "Cádiz CF",
    "age": 29,
    "stats": {
      "pace": 47,
      "shooting": 23,
      "passing": 28,
      "dribbling": 36,
      "defending": 14,
      "physical": 48
    }
  },
  {
    "id": "p757",
    "name": "Olarenwaju Kayode",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Ümraniyespor",
    "age": 30,
    "stats": {
      "pace": 88,
      "shooting": 66,
      "passing": 57,
      "dribbling": 78,
      "defending": 24,
      "physical": 73
    }
  },
  {
    "id": "p774",
    "name": "Maikel Mesa",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Albacete BP",
    "age": 32,
    "stats": {
      "pace": 70,
      "shooting": 65,
      "passing": 66,
      "dribbling": 70,
      "defending": 48,
      "physical": 74
    }
  },
  {
    "id": "p808",
    "name": "Kieran Lee",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Bolton",
    "age": 35,
    "stats": {
      "pace": 51,
      "shooting": 61,
      "passing": 67,
      "dribbling": 68,
      "defending": 46,
      "physical": 67
    }
  },
  {
    "id": "p817",
    "name": "Benjamin Siegrist",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Celtic",
    "age": 31,
    "stats": {
      "pace": 34,
      "shooting": 21,
      "passing": 25,
      "dribbling": 24,
      "defending": 13,
      "physical": 51
    }
  },
  {
    "id": "p821",
    "name": "Dominik Reimann",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "1. FC Magdeburg",
    "age": 26,
    "stats": {
      "pace": 45,
      "shooting": 19,
      "passing": 40,
      "dribbling": 36,
      "defending": 10,
      "physical": 42
    }
  },
  {
    "id": "p957",
    "name": "Matías Morello",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Aldosivi",
    "age": 22,
    "stats": {
      "pace": 67,
      "shooting": 52,
      "passing": 65,
      "dribbling": 69,
      "defending": 44,
      "physical": 60
    }
  },
  {
    "id": "p976",
    "name": "Merlin Röhl",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 68,
    "club": "SC Freiburg",
    "age": 21,
    "stats": {
      "pace": 75,
      "shooting": 48,
      "passing": 66,
      "dribbling": 66,
      "defending": 44,
      "physical": 64
    }
  },
  {
    "id": "p1010",
    "name": "Oleksandr Andrievskyi",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Ukraine",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Dynamo Kyiv",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 53,
      "passing": 64,
      "dribbling": 60,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p1028",
    "name": "Jevani Brown",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Jamaica",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Exeter City",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 63,
      "dribbling": 71,
      "defending": 32,
      "physical": 69
    }
  },
  {
    "id": "p1054",
    "name": "Ismaël Koné",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Canada",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Watford",
    "age": 21,
    "stats": {
      "pace": 78,
      "shooting": 56,
      "passing": 60,
      "dribbling": 65,
      "defending": 42,
      "physical": 65
    }
  },
  {
    "id": "p1056",
    "name": "Mathias Autret",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "AJ Auxerre",
    "age": 32,
    "stats": {
      "pace": 63,
      "shooting": 69,
      "passing": 75,
      "dribbling": 74,
      "defending": 36,
      "physical": 60
    }
  },
  {
    "id": "p1067",
    "name": "Vlad Chiricheș",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Cremonese",
    "age": 33,
    "stats": {
      "pace": 54,
      "shooting": 67,
      "passing": 57,
      "dribbling": 60,
      "defending": 56,
      "physical": 66
    }
  },
  {
    "id": "p1081",
    "name": "Bradley Danger",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Rodez AF",
    "age": 25,
    "stats": {
      "pace": 75,
      "shooting": 46,
      "passing": 62,
      "dribbling": 64,
      "defending": 46,
      "physical": 72
    }
  },
  {
    "id": "p1145",
    "name": "Kevin Ehlers",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Dynamo Dresden",
    "age": 22,
    "stats": {
      "pace": 63,
      "shooting": 31,
      "passing": 52,
      "dribbling": 56,
      "defending": 51,
      "physical": 67
    }
  },
  {
    "id": "p1154",
    "name": "Erce Kardeşler",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Hatayspor",
    "age": 29,
    "stats": {
      "pace": 41,
      "shooting": 17,
      "passing": 27,
      "dribbling": 21,
      "defending": 10,
      "physical": 41
    }
  },
  {
    "id": "p1191",
    "name": "Stefan Schimmer",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 68,
    "club": "Heidenheim",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 67,
      "passing": 41,
      "dribbling": 63,
      "defending": 17,
      "physical": 73
    }
  },
  {
    "id": "p1299",
    "name": "Kristoffer Løkberg",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Viking FK",
    "age": 31,
    "stats": {
      "pace": 66,
      "shooting": 64,
      "passing": 64,
      "dribbling": 74,
      "defending": 48,
      "physical": 77
    }
  },
  {
    "id": "p1413",
    "name": "Vladan Kovacević",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Raków",
    "age": 25,
    "stats": {
      "pace": 38,
      "shooting": 18,
      "passing": 40,
      "dribbling": 23,
      "defending": 8,
      "physical": 41
    }
  },
  {
    "id": "p1435",
    "name": "Niklas Schmidt",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 68,
    "club": "SV Werder Bremen",
    "age": 25,
    "stats": {
      "pace": 58,
      "shooting": 68,
      "passing": 72,
      "dribbling": 69,
      "defending": 32,
      "physical": 58
    }
  },
  {
    "id": "p1489",
    "name": "Robert Wagner",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 68,
    "club": "SC Freiburg",
    "age": 20,
    "stats": {
      "pace": 68,
      "shooting": 45,
      "passing": 64,
      "dribbling": 66,
      "defending": 46,
      "physical": 62
    }
  },
  {
    "id": "p1496",
    "name": "Park Jin Sub",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Jeonbuk Hyundai",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 53,
      "passing": 59,
      "dribbling": 57,
      "defending": 49,
      "physical": 73
    }
  },
  {
    "id": "p1515",
    "name": "Louis Thompson",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Portsmouth",
    "age": 28,
    "stats": {
      "pace": 70,
      "shooting": 50,
      "passing": 64,
      "dribbling": 68,
      "defending": 48,
      "physical": 75
    }
  },
  {
    "id": "p1525",
    "name": "Maxence Prévot",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FCSM",
    "age": 26,
    "stats": {
      "pace": 35,
      "shooting": 17,
      "passing": 25,
      "dribbling": 24,
      "defending": 8,
      "physical": 42
    }
  },
  {
    "id": "p1537",
    "name": "Fashion Sakala",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Zambia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Rangers",
    "age": 26,
    "stats": {
      "pace": 91,
      "shooting": 68,
      "passing": 59,
      "dribbling": 75,
      "defending": 23,
      "physical": 71
    }
  },
  {
    "id": "p1603",
    "name": "Fatih Aksoy",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Alanyaspor",
    "age": 25,
    "stats": {
      "pace": 38,
      "shooting": 40,
      "passing": 56,
      "dribbling": 56,
      "defending": 53,
      "physical": 66
    }
  },
  {
    "id": "p1614",
    "name": "Yeo Reum",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Korea Republic",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Incheon United",
    "age": 34,
    "stats": {
      "pace": 66,
      "shooting": 59,
      "passing": 66,
      "dribbling": 71,
      "defending": 45,
      "physical": 71
    }
  },
  {
    "id": "p1637",
    "name": "Postigo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Levante UD",
    "age": 34,
    "stats": {
      "pace": 65,
      "shooting": 44,
      "passing": 54,
      "dribbling": 52,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p1646",
    "name": "Juan Sánchez Miño",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Lanús",
    "age": 33,
    "stats": {
      "pace": 67,
      "shooting": 67,
      "passing": 70,
      "dribbling": 68,
      "defending": 49,
      "physical": 64
    }
  },
  {
    "id": "p1678",
    "name": "Andújar",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Tianjin JMT FC",
    "age": 32,
    "stats": {
      "pace": 55,
      "shooting": 34,
      "passing": 49,
      "dribbling": 55,
      "defending": 51,
      "physical": 76
    }
  },
  {
    "id": "p1682",
    "name": "Deng Hanwen",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "China PR",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Wuhan 3 Towns",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 51,
      "passing": 64,
      "dribbling": 70,
      "defending": 48,
      "physical": 71
    }
  },
  {
    "id": "p1684",
    "name": "Bryan Goncalves",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Stade Lavallois",
    "age": 27,
    "stats": {
      "pace": 69,
      "shooting": 41,
      "passing": 45,
      "dribbling": 48,
      "defending": 50,
      "physical": 74
    }
  },
  {
    "id": "p1689",
    "name": "Mourad Batna",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 68,
    "club": "Al Fateh",
    "age": 33,
    "stats": {
      "pace": 75,
      "shooting": 71,
      "passing": 70,
      "dribbling": 72,
      "defending": 25,
      "physical": 70
    }
  },
  {
    "id": "p1708",
    "name": "Matěj Pulkrab",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SV Sandhausen",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 68,
      "passing": 53,
      "dribbling": 61,
      "defending": 21,
      "physical": 75
    }
  },
  {
    "id": "p1723",
    "name": "Tommaso Milanese",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Venezia",
    "age": 21,
    "stats": {
      "pace": 67,
      "shooting": 55,
      "passing": 67,
      "dribbling": 71,
      "defending": 27,
      "physical": 48
    }
  },
  {
    "id": "p1757",
    "name": "César Araújo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Orlando City",
    "age": 22,
    "stats": {
      "pace": 63,
      "shooting": 50,
      "passing": 58,
      "dribbling": 64,
      "defending": 48,
      "physical": 69
    }
  },
  {
    "id": "p1759",
    "name": "Joaquín Indacoechea",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Aldosivi",
    "age": 22,
    "stats": {
      "pace": 73,
      "shooting": 48,
      "passing": 62,
      "dribbling": 70,
      "defending": 44,
      "physical": 64
    }
  },
  {
    "id": "p1778",
    "name": "Kim Dong Joon",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Jeju United",
    "age": 28,
    "stats": {
      "pace": 43,
      "shooting": 25,
      "passing": 31,
      "dribbling": 32,
      "defending": 14,
      "physical": 45
    }
  },
  {
    "id": "p1841",
    "name": "Branko Jovičić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "LASK",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 51,
      "passing": 60,
      "dribbling": 66,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p1859",
    "name": "Necip Uysal",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Beşiktaş",
    "age": 32,
    "stats": {
      "pace": 55,
      "shooting": 52,
      "passing": 64,
      "dribbling": 65,
      "defending": 52,
      "physical": 76
    }
  },
  {
    "id": "p1867",
    "name": "Đorđe Petrović",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Serbia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "New England",
    "age": 23,
    "stats": {
      "pace": 31,
      "shooting": 17,
      "passing": 29,
      "dribbling": 24,
      "defending": 9,
      "physical": 48
    }
  },
  {
    "id": "p1869",
    "name": "Mounaïm El Idrissy",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "AC Ajaccio",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 70,
      "passing": 63,
      "dribbling": 68,
      "defending": 16,
      "physical": 61
    }
  },
  {
    "id": "p1888",
    "name": "Eden Karzev",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Israel",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Başakşehir",
    "age": 23,
    "stats": {
      "pace": 67,
      "shooting": 68,
      "passing": 64,
      "dribbling": 68,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p1908",
    "name": "Cameron McGeehan",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Northern Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "KV Oostende",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 60,
      "passing": 64,
      "dribbling": 70,
      "defending": 47,
      "physical": 72
    }
  },
  {
    "id": "p2000",
    "name": "Han-Noah Massengo",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "AJ Auxerre",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 49,
      "passing": 66,
      "dribbling": 78,
      "defending": 50,
      "physical": 65
    }
  },
  {
    "id": "p2008",
    "name": "Matthieu Huard",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Brescia",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 40,
      "passing": 57,
      "dribbling": 67,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p2043",
    "name": "Mothobi Mvala",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Mamelodi Sundowns",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 39,
      "passing": 59,
      "dribbling": 65,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p2067",
    "name": "Fabian de Keijzer",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "FC Utrecht",
    "age": 23,
    "stats": {
      "pace": 31,
      "shooting": 18,
      "passing": 29,
      "dribbling": 25,
      "defending": 9,
      "physical": 47
    }
  },
  {
    "id": "p2120",
    "name": "Ouparine Djoco",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 68,
    "club": "Clermont Foot 63",
    "age": 25,
    "stats": {
      "pace": 26,
      "shooting": 20,
      "passing": 22,
      "dribbling": 19,
      "defending": 8,
      "physical": 43
    }
  },
  {
    "id": "p2140",
    "name": "Fotis Ioannidis",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Greece",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Panathinaikos",
    "age": 23,
    "stats": {
      "pace": 69,
      "shooting": 68,
      "passing": 53,
      "dribbling": 67,
      "defending": 17,
      "physical": 68
    }
  },
  {
    "id": "p2181",
    "name": "Kacper Kozłowski",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Vitesse",
    "age": 19,
    "stats": {
      "pace": 74,
      "shooting": 58,
      "passing": 62,
      "dribbling": 78,
      "defending": 45,
      "physical": 69
    }
  },
  {
    "id": "p2194",
    "name": "Felipe",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Orlando City",
    "age": 32,
    "stats": {
      "pace": 50,
      "shooting": 66,
      "passing": 68,
      "dribbling": 71,
      "defending": 46,
      "physical": 63
    }
  },
  {
    "id": "p2244",
    "name": "An Byong Jun",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Korea DPR",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Suwon Samsung",
    "age": 33,
    "stats": {
      "pace": 66,
      "shooting": 65,
      "passing": 48,
      "dribbling": 64,
      "defending": 14,
      "physical": 66
    }
  },
  {
    "id": "p2253",
    "name": "Martín",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Famalicão",
    "age": 27,
    "stats": {
      "pace": 63,
      "shooting": 34,
      "passing": 62,
      "dribbling": 68,
      "defending": 52,
      "physical": 63
    }
  },
  {
    "id": "p2254",
    "name": "Matt Butcher",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Plymouth Argyle",
    "age": 26,
    "stats": {
      "pace": 58,
      "shooting": 60,
      "passing": 63,
      "dribbling": 59,
      "defending": 46,
      "physical": 73
    }
  },
  {
    "id": "p2296",
    "name": "Viktor Fischer",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "AIK",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 66,
      "passing": 71,
      "dribbling": 74,
      "defending": 23,
      "physical": 60
    }
  },
  {
    "id": "p2309",
    "name": "Mike Frantz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Saarbrücken",
    "age": 36,
    "stats": {
      "pace": 54,
      "shooting": 61,
      "passing": 66,
      "dribbling": 66,
      "defending": 49,
      "physical": 68
    }
  },
  {
    "id": "p2353",
    "name": "Ryan Donk",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Suriname",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Kasımpaşa",
    "age": 37,
    "stats": {
      "pace": 34,
      "shooting": 62,
      "passing": 68,
      "dribbling": 52,
      "defending": 52,
      "physical": 68
    }
  },
  {
    "id": "p2390",
    "name": "Sphelele Mkhulise",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Mamelodi Sundowns",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 52,
      "passing": 66,
      "dribbling": 71,
      "defending": 25,
      "physical": 53
    }
  },
  {
    "id": "p2426",
    "name": "Marko Ilić",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "KV Kortrijk",
    "age": 25,
    "stats": {
      "pace": 39,
      "shooting": 17,
      "passing": 24,
      "dribbling": 23,
      "defending": 10,
      "physical": 49
    }
  },
  {
    "id": "p2430",
    "name": "Marc Cardona",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "UD Las Palmas",
    "age": 28,
    "stats": {
      "pace": 79,
      "shooting": 69,
      "passing": 61,
      "dribbling": 70,
      "defending": 13,
      "physical": 68
    }
  },
  {
    "id": "p2518",
    "name": "Cristian Ansaldi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Parma",
    "age": 36,
    "stats": {
      "pace": 64,
      "shooting": 66,
      "passing": 73,
      "dribbling": 70,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p2525",
    "name": "Matheus Rossetto",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Atlanta United",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 60,
      "passing": 65,
      "dribbling": 70,
      "defending": 36,
      "physical": 56
    }
  },
  {
    "id": "p2550",
    "name": "Maxime Barthelmé",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "France",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "En Avant Guingamp",
    "age": 34,
    "stats": {
      "pace": 66,
      "shooting": 59,
      "passing": 67,
      "dribbling": 70,
      "defending": 50,
      "physical": 62
    }
  },
  {
    "id": "p2612",
    "name": "Alberto Perea",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 68,
    "club": "Granada CF",
    "age": 32,
    "stats": {
      "pace": 72,
      "shooting": 69,
      "passing": 68,
      "dribbling": 75,
      "defending": 22,
      "physical": 62
    }
  },
  {
    "id": "p2618",
    "name": "João Moutinho",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "La Spezia",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 41,
      "passing": 62,
      "dribbling": 66,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p2630",
    "name": "Álvaro Jiménez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "UD Las Palmas",
    "age": 28,
    "stats": {
      "pace": 80,
      "shooting": 69,
      "passing": 66,
      "dribbling": 72,
      "defending": 30,
      "physical": 63
    }
  },
  {
    "id": "p2700",
    "name": "Andreas Hansen",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Nordsjælland",
    "age": 28,
    "stats": {
      "pace": 48,
      "shooting": 25,
      "passing": 40,
      "dribbling": 39,
      "defending": 14,
      "physical": 46
    }
  },
  {
    "id": "p2791",
    "name": "Robert Murić",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Konyaspor",
    "age": 27,
    "stats": {
      "pace": 75,
      "shooting": 64,
      "passing": 58,
      "dribbling": 75,
      "defending": 20,
      "physical": 48
    }
  },
  {
    "id": "p2793",
    "name": "Ignacio Ramírez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Nacional",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 69,
      "passing": 49,
      "dribbling": 64,
      "defending": 13,
      "physical": 62
    }
  },
  {
    "id": "p2825",
    "name": "Domingos Quina",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Rotherham Utd",
    "age": 23,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 67,
      "dribbling": 76,
      "defending": 35,
      "physical": 53
    }
  },
  {
    "id": "p2856",
    "name": "Maximiliano Pereira",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "River Plate",
    "age": 39,
    "stats": {
      "pace": 49,
      "shooting": 62,
      "passing": 70,
      "dribbling": 64,
      "defending": 56,
      "physical": 63
    }
  },
  {
    "id": "p2918",
    "name": "Christopher Buchtmann",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "VfB Oldenburg",
    "age": 31,
    "stats": {
      "pace": 60,
      "shooting": 64,
      "passing": 68,
      "dribbling": 72,
      "defending": 44,
      "physical": 55
    }
  },
  {
    "id": "p2981",
    "name": "Joe Lumley",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Reading",
    "age": 28,
    "stats": {
      "pace": 45,
      "shooting": 25,
      "passing": 29,
      "dribbling": 31,
      "defending": 16,
      "physical": 47
    }
  },
  {
    "id": "p3015",
    "name": "Alessio Da Cruz",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Cape Verde",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "KV Mechelen",
    "age": 26,
    "stats": {
      "pace": 76,
      "shooting": 68,
      "passing": 60,
      "dribbling": 72,
      "defending": 21,
      "physical": 61
    }
  },
  {
    "id": "p3026",
    "name": "Luke Le Roux",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Varbergs BoIS",
    "age": 23,
    "stats": {
      "pace": 75,
      "shooting": 51,
      "passing": 62,
      "dribbling": 73,
      "defending": 45,
      "physical": 73
    }
  },
  {
    "id": "p3027",
    "name": "Jacob Ortmark",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "IFK Norrköping",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 59,
      "passing": 64,
      "dribbling": 72,
      "defending": 43,
      "physical": 70
    }
  },
  {
    "id": "p3051",
    "name": "Jonathan Villagra",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Chile",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Unión Española",
    "age": 22,
    "stats": {
      "pace": 66,
      "shooting": 23,
      "passing": 42,
      "dribbling": 50,
      "defending": 51,
      "physical": 72
    }
  },
  {
    "id": "p3097",
    "name": "Brandon O'Neill",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Premier League",
    "rating": 68,
    "club": "Newcastle Jets",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 60,
      "passing": 65,
      "dribbling": 67,
      "defending": 49,
      "physical": 75
    }
  },
  {
    "id": "p3159",
    "name": "Jake Doyle-Hayes",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Hibernian",
    "age": 24,
    "stats": {
      "pace": 71,
      "shooting": 59,
      "passing": 65,
      "dribbling": 69,
      "defending": 48,
      "physical": 66
    }
  },
  {
    "id": "p3177",
    "name": "Tiago Casasola",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Perugia",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 45,
      "passing": 69,
      "dribbling": 63,
      "defending": 53,
      "physical": 75
    }
  },
  {
    "id": "p3179",
    "name": "Ezequiel Bullaude",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Feyenoord",
    "age": 22,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 63,
      "dribbling": 73,
      "defending": 21,
      "physical": 61
    }
  },
  {
    "id": "p3181",
    "name": "Musa Araz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Sion",
    "age": 29,
    "stats": {
      "pace": 75,
      "shooting": 62,
      "passing": 63,
      "dribbling": 79,
      "defending": 36,
      "physical": 55
    }
  },
  {
    "id": "p3274",
    "name": "Marc Mateu",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SD Huesca",
    "age": 33,
    "stats": {
      "pace": 64,
      "shooting": 70,
      "passing": 71,
      "dribbling": 69,
      "defending": 49,
      "physical": 63
    }
  },
  {
    "id": "p3315",
    "name": "Fortune Makaringe",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Orlando Pirates",
    "age": 30,
    "stats": {
      "pace": 74,
      "shooting": 59,
      "passing": 68,
      "dribbling": 63,
      "defending": 34,
      "physical": 65
    }
  },
  {
    "id": "p3341",
    "name": "Patrik Wålemark",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Feyenoord",
    "age": 21,
    "stats": {
      "pace": 77,
      "shooting": 65,
      "passing": 66,
      "dribbling": 76,
      "defending": 22,
      "physical": 58
    }
  },
  {
    "id": "p3345",
    "name": "Luca Connell",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Barnsley",
    "age": 22,
    "stats": {
      "pace": 67,
      "shooting": 57,
      "passing": 66,
      "dribbling": 67,
      "defending": 45,
      "physical": 62
    }
  },
  {
    "id": "p3349",
    "name": "Erik Zenga",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SV Sandhausen",
    "age": 30,
    "stats": {
      "pace": 78,
      "shooting": 54,
      "passing": 67,
      "dribbling": 71,
      "defending": 50,
      "physical": 71
    }
  },
  {
    "id": "p3363",
    "name": "Simone Scuffet",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "CFR 1907 Cluj",
    "age": 27,
    "stats": {
      "pace": 50,
      "shooting": 25,
      "passing": 30,
      "dribbling": 35,
      "defending": 16,
      "physical": 53
    }
  },
  {
    "id": "p3382",
    "name": "William Balikwisha",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Standard Liège",
    "age": 24,
    "stats": {
      "pace": 78,
      "shooting": 55,
      "passing": 64,
      "dribbling": 78,
      "defending": 29,
      "physical": 62
    }
  },
  {
    "id": "p3409",
    "name": "Robert Navarro",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 68,
    "club": "Real Sociedad",
    "age": 21,
    "stats": {
      "pace": 75,
      "shooting": 61,
      "passing": 63,
      "dribbling": 75,
      "defending": 28,
      "physical": 63
    }
  },
  {
    "id": "p3443",
    "name": "Nikola Vasilj",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC St. Pauli",
    "age": 27,
    "stats": {
      "pace": 33,
      "shooting": 18,
      "passing": 33,
      "dribbling": 24,
      "defending": 10,
      "physical": 47
    }
  },
  {
    "id": "p3464",
    "name": "Niklas Hauptmann",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Dynamo Dresden",
    "age": 27,
    "stats": {
      "pace": 58,
      "shooting": 54,
      "passing": 66,
      "dribbling": 76,
      "defending": 41,
      "physical": 60
    }
  },
  {
    "id": "p3480",
    "name": "Jay Fulton",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Swansea City",
    "age": 29,
    "stats": {
      "pace": 63,
      "shooting": 53,
      "passing": 62,
      "dribbling": 67,
      "defending": 53,
      "physical": 70
    }
  },
  {
    "id": "p3491",
    "name": "Federico Mattiello",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Go Ahead Eagles",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 68,
      "passing": 69,
      "dribbling": 72,
      "defending": 52,
      "physical": 60
    }
  },
  {
    "id": "p3517",
    "name": "Seydouba Cisse",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Guinea",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "CD Leganés",
    "age": 22,
    "stats": {
      "pace": 60,
      "shooting": 59,
      "passing": 64,
      "dribbling": 63,
      "defending": 46,
      "physical": 59
    }
  },
  {
    "id": "p3561",
    "name": "Sebastian Hausner",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "IFK Göteborg",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 34,
      "passing": 50,
      "dribbling": 62,
      "defending": 48,
      "physical": 75
    }
  },
  {
    "id": "p3584",
    "name": "Kosmas Gkezos",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Austria Klagenfurt",
    "age": 31,
    "stats": {
      "pace": 50,
      "shooting": 45,
      "passing": 56,
      "dribbling": 53,
      "defending": 49,
      "physical": 74
    }
  },
  {
    "id": "p3630",
    "name": "Mario Hermoso",
    "position": "LB",
    "positions": [
      "LB"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 68,
    "club": "Atlético de Madrid",
    "age": 28,
    "stats": {
      "pace": 75,
      "shooting": 49,
      "passing": 74,
      "dribbling": 68,
      "defending": 60,
      "physical": 80
    }
  },
  {
    "id": "p3665",
    "name": "Josh Bowler",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Blackpool",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 62,
      "passing": 63,
      "dribbling": 78,
      "defending": 26,
      "physical": 50
    }
  },
  {
    "id": "p3859",
    "name": "Andreas Eines Hopmark",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Kristiansund BK",
    "age": 32,
    "stats": {
      "pace": 34,
      "shooting": 45,
      "passing": 55,
      "dribbling": 46,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p3904",
    "name": "Arno Verschueren",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Sparta Rotterdam",
    "age": 26,
    "stats": {
      "pace": 67,
      "shooting": 54,
      "passing": 63,
      "dribbling": 68,
      "defending": 48,
      "physical": 69
    }
  },
  {
    "id": "p3913",
    "name": "Jari Vlak",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Emmen",
    "age": 25,
    "stats": {
      "pace": 64,
      "shooting": 55,
      "passing": 58,
      "dribbling": 61,
      "defending": 47,
      "physical": 72
    }
  },
  {
    "id": "p4028",
    "name": "Oscar Wendt",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "IFK Göteborg",
    "age": 37,
    "stats": {
      "pace": 59,
      "shooting": 60,
      "passing": 69,
      "dribbling": 66,
      "defending": 50,
      "physical": 68
    }
  },
  {
    "id": "p4032",
    "name": "Nkosi Tafari",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Dallas",
    "age": 26,
    "stats": {
      "pace": 58,
      "shooting": 33,
      "passing": 49,
      "dribbling": 53,
      "defending": 48,
      "physical": 73
    }
  },
  {
    "id": "p4047",
    "name": "Connor Barron",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Aberdeen",
    "age": 21,
    "stats": {
      "pace": 69,
      "shooting": 58,
      "passing": 64,
      "dribbling": 64,
      "defending": 49,
      "physical": 69
    }
  },
  {
    "id": "p4060",
    "name": "David Ayala",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Portland Timbers",
    "age": 21,
    "stats": {
      "pace": 72,
      "shooting": 46,
      "passing": 63,
      "dribbling": 73,
      "defending": 49,
      "physical": 60
    }
  },
  {
    "id": "p4098",
    "name": "Zoran Arsenić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Raków",
    "age": 29,
    "stats": {
      "pace": 69,
      "shooting": 42,
      "passing": 57,
      "dribbling": 62,
      "defending": 51,
      "physical": 77
    }
  },
  {
    "id": "p4158",
    "name": "Paolo Faragò",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Como",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 52,
      "passing": 71,
      "dribbling": 58,
      "defending": 47,
      "physical": 63
    }
  },
  {
    "id": "p4181",
    "name": "Giulio Donati",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 68,
    "club": "Monza",
    "age": 33,
    "stats": {
      "pace": 65,
      "shooting": 46,
      "passing": 64,
      "dribbling": 63,
      "defending": 55,
      "physical": 68
    }
  },
  {
    "id": "p4188",
    "name": "Charlie Patino",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Blackpool",
    "age": 19,
    "stats": {
      "pace": 65,
      "shooting": 46,
      "passing": 65,
      "dribbling": 68,
      "defending": 48,
      "physical": 62
    }
  },
  {
    "id": "p4217",
    "name": "Michael Obafemi",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 68,
    "club": "Burnley",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 66,
      "passing": 55,
      "dribbling": 77,
      "defending": 13,
      "physical": 64
    }
  },
  {
    "id": "p4224",
    "name": "Raúl Navarro",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Burgos CF",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 54,
      "passing": 66,
      "dribbling": 69,
      "defending": 49,
      "physical": 68
    }
  },
  {
    "id": "p4314",
    "name": "Yéiler Góez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Atl. Nacional",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 49,
      "passing": 68,
      "dribbling": 69,
      "defending": 48,
      "physical": 68
    }
  },
  {
    "id": "p4392",
    "name": "Bilal Boutobba",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Niort",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 69,
      "passing": 69,
      "dribbling": 83,
      "defending": 10,
      "physical": 39
    }
  },
  {
    "id": "p4397",
    "name": "Florian Kastenmeier",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Düsseldorf",
    "age": 26,
    "stats": {
      "pace": 26,
      "shooting": 18,
      "passing": 22,
      "dribbling": 20,
      "defending": 11,
      "physical": 42
    }
  },
  {
    "id": "p4465",
    "name": "Claudio Aquino",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Cerro Porteño",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 69,
      "passing": 69,
      "dribbling": 74,
      "defending": 26,
      "physical": 65
    }
  },
  {
    "id": "p4554",
    "name": "Arthur Gomes",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Sporting CP",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 64,
      "passing": 68,
      "dribbling": 72,
      "defending": 14,
      "physical": 48
    }
  },
  {
    "id": "p4591",
    "name": "Kang Hyeon Mu",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Gimcheon Sangmu",
    "age": 28,
    "stats": {
      "pace": 45,
      "shooting": 22,
      "passing": 32,
      "dribbling": 30,
      "defending": 15,
      "physical": 38
    }
  },
  {
    "id": "p4595",
    "name": "Jérémy Frick",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Switzerland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Servette FC",
    "age": 30,
    "stats": {
      "pace": 45,
      "shooting": 18,
      "passing": 23,
      "dribbling": 31,
      "defending": 13,
      "physical": 46
    }
  },
  {
    "id": "p4611",
    "name": "Youcef Belaïli",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "AC Ajaccio",
    "age": 31,
    "stats": {
      "pace": 79,
      "shooting": 75,
      "passing": 71,
      "dribbling": 79,
      "defending": 19,
      "physical": 62
    }
  },
  {
    "id": "p4637",
    "name": "Nemanja Radonjić",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Serie A",
    "rating": 68,
    "club": "Torino",
    "age": 27,
    "stats": {
      "pace": 89,
      "shooting": 74,
      "passing": 69,
      "dribbling": 72,
      "defending": 19,
      "physical": 55
    }
  },
  {
    "id": "p4638",
    "name": "Vid Belec",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Apoel FC",
    "age": 33,
    "stats": {
      "pace": 48,
      "shooting": 21,
      "passing": 22,
      "dribbling": 30,
      "defending": 11,
      "physical": 44
    }
  },
  {
    "id": "p4640",
    "name": "Jean Ermeño",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Bolivia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Always Ready",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 55,
      "passing": 66,
      "dribbling": 62,
      "defending": 47,
      "physical": 71
    }
  },
  {
    "id": "p4703",
    "name": "Hugo Pamanez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Wanderers",
    "age": 31,
    "stats": {
      "pace": 24,
      "shooting": 20,
      "passing": 26,
      "dribbling": 24,
      "defending": 11,
      "physical": 36
    }
  },
  {
    "id": "p4748",
    "name": "Eíran Cashin",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Derby County",
    "age": 21,
    "stats": {
      "pace": 62,
      "shooting": 35,
      "passing": 56,
      "dribbling": 60,
      "defending": 52,
      "physical": 72
    }
  },
  {
    "id": "p4770",
    "name": "René Klingenburg",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Kaiserslautern",
    "age": 29,
    "stats": {
      "pace": 51,
      "shooting": 62,
      "passing": 63,
      "dribbling": 65,
      "defending": 43,
      "physical": 77
    }
  },
  {
    "id": "p4804",
    "name": "Anthony Mandrea",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Algeria",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SM Caen",
    "age": 26,
    "stats": {
      "pace": 45,
      "shooting": 24,
      "passing": 19,
      "dribbling": 31,
      "defending": 15,
      "physical": 41
    }
  },
  {
    "id": "p4809",
    "name": "Ruud Boffin",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Antalyaspor",
    "age": 35,
    "stats": {
      "pace": 57,
      "shooting": 25,
      "passing": 21,
      "dribbling": 30,
      "defending": 12,
      "physical": 55
    }
  },
  {
    "id": "p4821",
    "name": "Ross Callachan",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Ross County",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 64,
      "passing": 65,
      "dribbling": 66,
      "defending": 46,
      "physical": 74
    }
  },
  {
    "id": "p4837",
    "name": "El Mehdi Moubarik",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Morocco",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 68,
    "club": "Al Ain FC",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 39,
      "passing": 65,
      "dribbling": 63,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p4839",
    "name": "Juanpe",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "CD Lugo",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 61,
      "passing": 69,
      "dribbling": 65,
      "defending": 42,
      "physical": 72
    }
  },
  {
    "id": "p4855",
    "name": "Hamadi Al Ghaddioui",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "SV Sandhausen",
    "age": 32,
    "stats": {
      "pace": 53,
      "shooting": 68,
      "passing": 51,
      "dribbling": 57,
      "defending": 15,
      "physical": 67
    }
  },
  {
    "id": "p4903",
    "name": "Adrián Sánchez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 68,
    "club": "Atlético Tucumán",
    "age": 24,
    "stats": {
      "pace": 64,
      "shooting": 47,
      "passing": 66,
      "dribbling": 66,
      "defending": 46,
      "physical": 65
    }
  },
  {
    "id": "p4946",
    "name": "Patrick Herrmann",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "M'gladbach",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 73,
      "passing": 70,
      "dribbling": 74,
      "defending": 28,
      "physical": 62
    }
  },
  {
    "id": "p4953",
    "name": "Dimitri Lavalée",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "KV Mechelen",
    "age": 26,
    "stats": {
      "pace": 64,
      "shooting": 29,
      "passing": 64,
      "dribbling": 64,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p4957",
    "name": "Jón Guðni Fjóluson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Iceland",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Hammarby IF",
    "age": 34,
    "stats": {
      "pace": 34,
      "shooting": 52,
      "passing": 58,
      "dribbling": 43,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p4971",
    "name": "Fredrik Oldrup Jensen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Vålerenga Fotball",
    "age": 30,
    "stats": {
      "pace": 52,
      "shooting": 51,
      "passing": 62,
      "dribbling": 60,
      "defending": 48,
      "physical": 67
    }
  },
  {
    "id": "p5030",
    "name": "Tony Mauricio",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FCSM",
    "age": 29,
    "stats": {
      "pace": 81,
      "shooting": 66,
      "passing": 65,
      "dribbling": 81,
      "defending": 23,
      "physical": 57
    }
  },
  {
    "id": "p5038",
    "name": "Ousseynou Thioune",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Dijon FCO",
    "age": 29,
    "stats": {
      "pace": 47,
      "shooting": 56,
      "passing": 64,
      "dribbling": 63,
      "defending": 46,
      "physical": 70
    }
  },
  {
    "id": "p5137",
    "name": "Joshua Kimmich",
    "position": "RB",
    "positions": [
      "RB",
      "LB"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 68,
    "club": "FC Bayern München",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 75,
      "passing": 88,
      "dribbling": 84,
      "defending": 62,
      "physical": 83
    }
  },
  {
    "id": "p5148",
    "name": "Johan Carbonero",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Racing Club",
    "age": 24,
    "stats": {
      "pace": 88,
      "shooting": 63,
      "passing": 59,
      "dribbling": 78,
      "defending": 20,
      "physical": 59
    }
  },
  {
    "id": "p5161",
    "name": "Philipp Pentke",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Bundesliga",
    "rating": 68,
    "club": "TSG Hoffenheim",
    "age": 38,
    "stats": {
      "pace": 37,
      "shooting": 24,
      "passing": 29,
      "dribbling": 31,
      "defending": 13,
      "physical": 56
    }
  },
  {
    "id": "p5162",
    "name": "Dan Gosling",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Watford",
    "age": 33,
    "stats": {
      "pace": 50,
      "shooting": 67,
      "passing": 70,
      "dribbling": 67,
      "defending": 52,
      "physical": 65
    }
  },
  {
    "id": "p5174",
    "name": "Hao Junmin",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "China PR",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Guangzhou FC",
    "age": 36,
    "stats": {
      "pace": 59,
      "shooting": 68,
      "passing": 71,
      "dribbling": 69,
      "defending": 45,
      "physical": 61
    }
  },
  {
    "id": "p5195",
    "name": "Lasse Nilsen",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Tromsø IL",
    "age": 28,
    "stats": {
      "pace": 81,
      "shooting": 54,
      "passing": 54,
      "dribbling": 66,
      "defending": 43,
      "physical": 65
    }
  },
  {
    "id": "p5314",
    "name": "Halil İbrahim Dervişoğlu",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Turkey",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 68,
    "club": "Burnley",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 68,
      "passing": 62,
      "dribbling": 71,
      "defending": 27,
      "physical": 62
    }
  },
  {
    "id": "p5363",
    "name": "Salih Uçan",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Beşiktaş",
    "age": 29,
    "stats": {
      "pace": 61,
      "shooting": 70,
      "passing": 76,
      "dribbling": 76,
      "defending": 49,
      "physical": 63
    }
  },
  {
    "id": "p5381",
    "name": "Horațiu Moldovan",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "FC Rapid 1923",
    "age": 25,
    "stats": {
      "pace": 43,
      "shooting": 24,
      "passing": 30,
      "dribbling": 34,
      "defending": 10,
      "physical": 44
    }
  },
  {
    "id": "p5454",
    "name": "Stefanos Kapino",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Miedź Legnica",
    "age": 29,
    "stats": {
      "pace": 42,
      "shooting": 25,
      "passing": 28,
      "dribbling": 36,
      "defending": 10,
      "physical": 51
    }
  },
  {
    "id": "p5543",
    "name": "Cristian Buonaiuto",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Cremonese",
    "age": 30,
    "stats": {
      "pace": 77,
      "shooting": 70,
      "passing": 68,
      "dribbling": 72,
      "defending": 26,
      "physical": 60
    }
  },
  {
    "id": "p5549",
    "name": "Olaus Jair Skarsem",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Rosenborg BK",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 55,
      "passing": 62,
      "dribbling": 76,
      "defending": 42,
      "physical": 65
    }
  },
  {
    "id": "p5552",
    "name": "Enis Çokaj",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Albania",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Panathinaikos",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 60,
      "passing": 65,
      "dribbling": 70,
      "defending": 51,
      "physical": 67
    }
  },
  {
    "id": "p5579",
    "name": "Marcus Danielson",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Legends",
    "league": "Other",
    "rating": 68,
    "club": "Djurgårdens IF",
    "age": 34,
    "stats": {
      "pace": 47,
      "shooting": 32,
      "passing": 50,
      "dribbling": 48,
      "defending": 55,
      "physical": 65
    }
  },
  {
    "id": "p5607",
    "name": "Guridi",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "D. Alavés",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 60,
      "passing": 70,
      "dribbling": 76,
      "defending": 51,
      "physical": 52
    }
  },
  {
    "id": "p5652",
    "name": "Luke Amos",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "QPR",
    "age": 26,
    "stats": {
      "pace": 56,
      "shooting": 53,
      "passing": 67,
      "dribbling": 67,
      "defending": 49,
      "physical": 64
    }
  },
  {
    "id": "p5662",
    "name": "Luka Krajnc",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 68,
    "club": "Hannover 96",
    "age": 28,
    "stats": {
      "pace": 63,
      "shooting": 34,
      "passing": 53,
      "dribbling": 61,
      "defending": 50,
      "physical": 75
    }
  },
  {
    "id": "p19",
    "name": "Jérémie Broh",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Palermo",
    "age": 26,
    "stats": {
      "pace": 80,
      "shooting": 60,
      "passing": 64,
      "dribbling": 69,
      "defending": 49,
      "physical": 69
    }
  },
  {
    "id": "p110",
    "name": "Fabian Klos",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Arminia Bielefeld",
    "age": 35,
    "stats": {
      "pace": 53,
      "shooting": 71,
      "passing": 61,
      "dribbling": 52,
      "defending": 21,
      "physical": 76
    }
  },
  {
    "id": "p153",
    "name": "Ben Stevenson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Forest Green",
    "age": 26,
    "stats": {
      "pace": 71,
      "shooting": 60,
      "passing": 64,
      "dribbling": 68,
      "defending": 44,
      "physical": 67
    }
  },
  {
    "id": "p196",
    "name": "Matías Palacios",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Al Ain FC",
    "age": 21,
    "stats": {
      "pace": 69,
      "shooting": 60,
      "passing": 69,
      "dribbling": 75,
      "defending": 32,
      "physical": 51
    }
  },
  {
    "id": "p276",
    "name": "Ștefan Târnovanu",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Romania",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "FCSB",
    "age": 23,
    "stats": {
      "pace": 42,
      "shooting": 25,
      "passing": 28,
      "dribbling": 31,
      "defending": 11,
      "physical": 39
    }
  },
  {
    "id": "p304",
    "name": "Caio Milaçar",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Ceará SC",
    "age": 27,
    "stats": {
      "pace": 66,
      "shooting": 66,
      "passing": 68,
      "dribbling": 78,
      "defending": 26,
      "physical": 51
    }
  },
  {
    "id": "p353",
    "name": "Karl-Johan Johnsson",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "F.C. København",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 24,
      "passing": 35,
      "dribbling": 30,
      "defending": 13,
      "physical": 45
    }
  },
  {
    "id": "p373",
    "name": "Luka Zahović",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Slovenia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Pogoń Szczecin",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 62,
      "passing": 59,
      "dribbling": 76,
      "defending": 16,
      "physical": 54
    }
  },
  {
    "id": "p430",
    "name": "Cristian Herrera",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "UD Ibiza",
    "age": 32,
    "stats": {
      "pace": 71,
      "shooting": 67,
      "passing": 65,
      "dribbling": 55,
      "defending": 25,
      "physical": 78
    }
  },
  {
    "id": "p492",
    "name": "Rasmus Jönsson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Helsingborgs IF",
    "age": 33,
    "stats": {
      "pace": 69,
      "shooting": 63,
      "passing": 62,
      "dribbling": 61,
      "defending": 26,
      "physical": 55
    }
  },
  {
    "id": "p494",
    "name": "Nahuel Meriga",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Wanderers",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 54,
      "passing": 65,
      "dribbling": 65,
      "defending": 41,
      "physical": 54
    }
  },
  {
    "id": "p593",
    "name": "João Graça",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Rio Ave FC",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 54,
      "passing": 64,
      "dribbling": 68,
      "defending": 43,
      "physical": 59
    }
  },
  {
    "id": "p598",
    "name": "Reece Brown",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Forest Green",
    "age": 27,
    "stats": {
      "pace": 80,
      "shooting": 60,
      "passing": 64,
      "dribbling": 74,
      "defending": 45,
      "physical": 69
    }
  },
  {
    "id": "p606",
    "name": "Juan Canderio",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "América de Cali",
    "age": 31,
    "stats": {
      "pace": 67,
      "shooting": 64,
      "passing": 66,
      "dribbling": 72,
      "defending": 41,
      "physical": 53
    }
  },
  {
    "id": "p622",
    "name": "Rodrigo Andrade",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Marítimo",
    "age": 21,
    "stats": {
      "pace": 65,
      "shooting": 47,
      "passing": 65,
      "dribbling": 66,
      "defending": 42,
      "physical": 64
    }
  },
  {
    "id": "p705",
    "name": "Lourival Dinisco",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Fortaleza",
    "age": 23,
    "stats": {
      "pace": 61,
      "shooting": 50,
      "passing": 54,
      "dribbling": 50,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p750",
    "name": "Fabian Bredlow",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 67,
    "club": "VfB Stuttgart",
    "age": 28,
    "stats": {
      "pace": 39,
      "shooting": 16,
      "passing": 18,
      "dribbling": 32,
      "defending": 8,
      "physical": 42
    }
  },
  {
    "id": "p766",
    "name": "Leonardo Heredia",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Argentinos Jrs.",
    "age": 27,
    "stats": {
      "pace": 66,
      "shooting": 68,
      "passing": 67,
      "dribbling": 66,
      "defending": 25,
      "physical": 63
    }
  },
  {
    "id": "p792",
    "name": "Ionuț Vînă",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Univ. Craiova",
    "age": 28,
    "stats": {
      "pace": 73,
      "shooting": 60,
      "passing": 60,
      "dribbling": 71,
      "defending": 48,
      "physical": 74
    }
  },
  {
    "id": "p804",
    "name": "Gonzalo Piñeiro",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Estudiantes",
    "age": 22,
    "stats": {
      "pace": 63,
      "shooting": 56,
      "passing": 65,
      "dribbling": 63,
      "defending": 35,
      "physical": 61
    }
  },
  {
    "id": "p831",
    "name": "Kevin Bonifazi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 67,
    "club": "Bologna",
    "age": 27,
    "stats": {
      "pace": 52,
      "shooting": 36,
      "passing": 50,
      "dribbling": 56,
      "defending": 57,
      "physical": 66
    }
  },
  {
    "id": "p853",
    "name": "Erick Ferigra",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ecuador",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Paços Ferreira",
    "age": 24,
    "stats": {
      "pace": 69,
      "shooting": 32,
      "passing": 48,
      "dribbling": 55,
      "defending": 50,
      "physical": 69
    }
  },
  {
    "id": "p866",
    "name": "Grigoris Kastanos",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Cyprus",
    "era": "Modern",
    "league": "Serie A",
    "rating": 67,
    "club": "Salernitana",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 65,
      "passing": 66,
      "dribbling": 74,
      "defending": 21,
      "physical": 52
    }
  },
  {
    "id": "p876",
    "name": "Jeremy Ngakia",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Watford",
    "age": 22,
    "stats": {
      "pace": 74,
      "shooting": 27,
      "passing": 53,
      "dribbling": 68,
      "defending": 53,
      "physical": 65
    }
  },
  {
    "id": "p878",
    "name": "Diego Alexander Gómez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Paraguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Libertad",
    "age": 20,
    "stats": {
      "pace": 73,
      "shooting": 56,
      "passing": 61,
      "dribbling": 69,
      "defending": 38,
      "physical": 62
    }
  },
  {
    "id": "p890",
    "name": "Anton Tanghe",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "KV Oostende",
    "age": 24,
    "stats": {
      "pace": 60,
      "shooting": 26,
      "passing": 52,
      "dribbling": 54,
      "defending": 52,
      "physical": 66
    }
  },
  {
    "id": "p958",
    "name": "Marcelo Ortíz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 67,
    "club": "Atlético Tucumán",
    "age": 29,
    "stats": {
      "pace": 65,
      "shooting": 26,
      "passing": 54,
      "dribbling": 56,
      "defending": 50,
      "physical": 71
    }
  },
  {
    "id": "p1030",
    "name": "Vito van Crooij",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sparta Rotterdam",
    "age": 27,
    "stats": {
      "pace": 78,
      "shooting": 68,
      "passing": 64,
      "dribbling": 70,
      "defending": 28,
      "physical": 72
    }
  },
  {
    "id": "p1116",
    "name": "Joey Pelupessy",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "FC Groningen",
    "age": 30,
    "stats": {
      "pace": 62,
      "shooting": 52,
      "passing": 60,
      "dribbling": 68,
      "defending": 49,
      "physical": 72
    }
  },
  {
    "id": "p1127",
    "name": "Jesús Vázquez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 67,
    "club": "Valencia CF",
    "age": 20,
    "stats": {
      "pace": 69,
      "shooting": 55,
      "passing": 68,
      "dribbling": 65,
      "defending": 52,
      "physical": 62
    }
  },
  {
    "id": "p1173",
    "name": "Mehdi Chahiri",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 67,
    "club": "Paris FC",
    "age": 27,
    "stats": {
      "pace": 74,
      "shooting": 59,
      "passing": 67,
      "dribbling": 69,
      "defending": 32,
      "physical": 58
    }
  },
  {
    "id": "p1178",
    "name": "Kingsley Sarfo",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Ghana",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Apoel FC",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 57,
      "passing": 62,
      "dribbling": 85,
      "defending": 35,
      "physical": 60
    }
  },
  {
    "id": "p1223",
    "name": "Gökhan Töre",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Adana Demirspor",
    "age": 31,
    "stats": {
      "pace": 76,
      "shooting": 65,
      "passing": 66,
      "dribbling": 78,
      "defending": 28,
      "physical": 62
    }
  },
  {
    "id": "p1255",
    "name": "Jordy Bruijn",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "N.E.C. Nijmegen",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 58,
      "passing": 65,
      "dribbling": 73,
      "defending": 45,
      "physical": 67
    }
  },
  {
    "id": "p1256",
    "name": "Denis Linsmayer",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "FC Ingolstadt 04",
    "age": 31,
    "stats": {
      "pace": 48,
      "shooting": 48,
      "passing": 62,
      "dribbling": 63,
      "defending": 48,
      "physical": 74
    }
  },
  {
    "id": "p1285",
    "name": "Tom Nichols",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Gillingham",
    "age": 30,
    "stats": {
      "pace": 79,
      "shooting": 61,
      "passing": 58,
      "dribbling": 70,
      "defending": 16,
      "physical": 68
    }
  },
  {
    "id": "p1324",
    "name": "Vojtěch Vorel",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Czech Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sparta Praha",
    "age": 27,
    "stats": {
      "pace": 35,
      "shooting": 19,
      "passing": 19,
      "dribbling": 22,
      "defending": 8,
      "physical": 30
    }
  },
  {
    "id": "p1337",
    "name": "Abdussalam Magashy",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "AIK",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 59,
      "passing": 61,
      "dribbling": 74,
      "defending": 45,
      "physical": 80
    }
  },
  {
    "id": "p1348",
    "name": "Harrinson Mancilla",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sarmiento",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 35,
      "passing": 63,
      "dribbling": 58,
      "defending": 47,
      "physical": 78
    }
  },
  {
    "id": "p1400",
    "name": "Gabriel Pereira",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "New York City FC",
    "age": 22,
    "stats": {
      "pace": 79,
      "shooting": 61,
      "passing": 64,
      "dribbling": 72,
      "defending": 24,
      "physical": 56
    }
  },
  {
    "id": "p1523",
    "name": "Harvey White",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Derby County",
    "age": 21,
    "stats": {
      "pace": 67,
      "shooting": 62,
      "passing": 67,
      "dribbling": 70,
      "defending": 44,
      "physical": 58
    }
  },
  {
    "id": "p1540",
    "name": "Dario Melnjak",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Croatia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Hajduk Split",
    "age": 30,
    "stats": {
      "pace": 69,
      "shooting": 66,
      "passing": 64,
      "dribbling": 68,
      "defending": 51,
      "physical": 67
    }
  },
  {
    "id": "p1547",
    "name": "Jacob Karlstrøm",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Molde FK",
    "age": 26,
    "stats": {
      "pace": 38,
      "shooting": 19,
      "passing": 31,
      "dribbling": 32,
      "defending": 9,
      "physical": 46
    }
  },
  {
    "id": "p1551",
    "name": "Pierre Sagna",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Santa Clara",
    "age": 33,
    "stats": {
      "pace": 73,
      "shooting": 43,
      "passing": 67,
      "dribbling": 69,
      "defending": 50,
      "physical": 68
    }
  },
  {
    "id": "p1596",
    "name": "Sebastián Sosa Sánchez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Banfield",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 62,
      "passing": 43,
      "dribbling": 62,
      "defending": 13,
      "physical": 66
    }
  },
  {
    "id": "p1659",
    "name": "Daniel Wein",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "1860 München",
    "age": 29,
    "stats": {
      "pace": 60,
      "shooting": 51,
      "passing": 62,
      "dribbling": 60,
      "defending": 47,
      "physical": 72
    }
  },
  {
    "id": "p1662",
    "name": "Amidou Diop",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Aalesunds FK",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 62,
      "passing": 63,
      "dribbling": 66,
      "defending": 46,
      "physical": 63
    }
  },
  {
    "id": "p1699",
    "name": "Antoine Batisse",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Pau FC",
    "age": 28,
    "stats": {
      "pace": 45,
      "shooting": 42,
      "passing": 64,
      "dribbling": 61,
      "defending": 49,
      "physical": 75
    }
  },
  {
    "id": "p1718",
    "name": "Noguera",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Mumbai City FC",
    "age": 33,
    "stats": {
      "pace": 73,
      "shooting": 60,
      "passing": 66,
      "dribbling": 74,
      "defending": 43,
      "physical": 60
    }
  },
  {
    "id": "p1720",
    "name": "Javairô Dilrosun",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Feyenoord",
    "age": 25,
    "stats": {
      "pace": 88,
      "shooting": 62,
      "passing": 66,
      "dribbling": 81,
      "defending": 28,
      "physical": 49
    }
  },
  {
    "id": "p1752",
    "name": "Carlos Arce",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Barracas Central",
    "age": 32,
    "stats": {
      "pace": 69,
      "shooting": 64,
      "passing": 64,
      "dribbling": 67,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p1791",
    "name": "Braian Rivero",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Premier League",
    "rating": 67,
    "club": "Arsenal",
    "age": 27,
    "stats": {
      "pace": 60,
      "shooting": 43,
      "passing": 62,
      "dribbling": 67,
      "defending": 48,
      "physical": 67
    }
  },
  {
    "id": "p1821",
    "name": "Faïz Selemani",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Comoros",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "KV Kortrijk",
    "age": 29,
    "stats": {
      "pace": 83,
      "shooting": 71,
      "passing": 71,
      "dribbling": 77,
      "defending": 43,
      "physical": 63
    }
  },
  {
    "id": "p1860",
    "name": "Wagner Leonardo",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Portimonense SC",
    "age": 24,
    "stats": {
      "pace": 59,
      "shooting": 32,
      "passing": 45,
      "dribbling": 52,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p1887",
    "name": "Iván Jaime",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "FC Famalicão",
    "age": 22,
    "stats": {
      "pace": 73,
      "shooting": 70,
      "passing": 67,
      "dribbling": 72,
      "defending": 38,
      "physical": 58
    }
  },
  {
    "id": "p1894",
    "name": "Haris Duljević",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Bosnia & Herzegovina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Hansa Rostock",
    "age": 29,
    "stats": {
      "pace": 76,
      "shooting": 63,
      "passing": 61,
      "dribbling": 76,
      "defending": 28,
      "physical": 66
    }
  },
  {
    "id": "p1895",
    "name": "Mads Christiansen",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 67,
    "club": "Lillestrøm SK",
    "age": 22,
    "stats": {
      "pace": 46,
      "shooting": 25,
      "passing": 34,
      "dribbling": 30,
      "defending": 11,
      "physical": 44
    }
  },
  {
    "id": "p1963",
    "name": "Dani Ramírez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Zulte Waregem",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 62,
      "passing": 68,
      "dribbling": 72,
      "defending": 26,
      "physical": 54
    }
  },
  {
    "id": "p1996",
    "name": "Simon Lorenz",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Holstein Kiel",
    "age": 26,
    "stats": {
      "pace": 72,
      "shooting": 39,
      "passing": 50,
      "dribbling": 56,
      "defending": 52,
      "physical": 75
    }
  },
  {
    "id": "p2030",
    "name": "Christian Cappis",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Brøndby IF",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 49,
      "passing": 63,
      "dribbling": 65,
      "defending": 46,
      "physical": 65
    }
  },
  {
    "id": "p2047",
    "name": "Bersant Celina",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Kosovo",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Stoke City",
    "age": 26,
    "stats": {
      "pace": 78,
      "shooting": 64,
      "passing": 66,
      "dribbling": 75,
      "defending": 15,
      "physical": 57
    }
  },
  {
    "id": "p2095",
    "name": "Bowen Huang",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "China PR",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Guangzhou FC",
    "age": 36,
    "stats": {
      "pace": 63,
      "shooting": 62,
      "passing": 70,
      "dribbling": 64,
      "defending": 46,
      "physical": 62
    }
  },
  {
    "id": "p2099",
    "name": "Róbert Mak",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Slovakia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sydney FC",
    "age": 32,
    "stats": {
      "pace": 74,
      "shooting": 70,
      "passing": 65,
      "dribbling": 72,
      "defending": 29,
      "physical": 58
    }
  },
  {
    "id": "p2123",
    "name": "Youri Regeer",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Ajax",
    "age": 20,
    "stats": {
      "pace": 69,
      "shooting": 52,
      "passing": 65,
      "dribbling": 68,
      "defending": 46,
      "physical": 63
    }
  },
  {
    "id": "p2133",
    "name": "Gabriel Silva",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Santa Clara",
    "age": 21,
    "stats": {
      "pace": 76,
      "shooting": 65,
      "passing": 65,
      "dribbling": 72,
      "defending": 18,
      "physical": 55
    }
  },
  {
    "id": "p2135",
    "name": "Wilfrid Kaptoum",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Cameroon",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "UD Las Palmas",
    "age": 27,
    "stats": {
      "pace": 55,
      "shooting": 56,
      "passing": 65,
      "dribbling": 74,
      "defending": 44,
      "physical": 62
    }
  },
  {
    "id": "p2144",
    "name": "Cristian Zabala",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Tigre",
    "age": 25,
    "stats": {
      "pace": 65,
      "shooting": 53,
      "passing": 64,
      "dribbling": 61,
      "defending": 42,
      "physical": 65
    }
  },
  {
    "id": "p2145",
    "name": "Tim Siersleben",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 67,
    "club": "Heidenheim",
    "age": 23,
    "stats": {
      "pace": 61,
      "shooting": 35,
      "passing": 48,
      "dribbling": 56,
      "defending": 53,
      "physical": 69
    }
  },
  {
    "id": "p2163",
    "name": "Joe Allen",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Swansea City",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 59,
      "passing": 67,
      "dribbling": 77,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p2189",
    "name": "Jesús Pretell",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sporting Cristal",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 53,
      "passing": 63,
      "dribbling": 70,
      "defending": 46,
      "physical": 66
    }
  },
  {
    "id": "p2204",
    "name": "Victor Jensen",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "FC Utrecht",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 58,
      "passing": 65,
      "dribbling": 74,
      "defending": 43,
      "physical": 58
    }
  },
  {
    "id": "p2229",
    "name": "Ilija Vukotić",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Montenegro",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Boavista FC",
    "age": 24,
    "stats": {
      "pace": 62,
      "shooting": 57,
      "passing": 65,
      "dribbling": 61,
      "defending": 48,
      "physical": 67
    }
  },
  {
    "id": "p2249",
    "name": "Sten Michael Grytebust",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Aalesunds FK",
    "age": 33,
    "stats": {
      "pace": 47,
      "shooting": 22,
      "passing": 37,
      "dribbling": 37,
      "defending": 13,
      "physical": 48
    }
  },
  {
    "id": "p2252",
    "name": "Andrea Poli",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Modena",
    "age": 33,
    "stats": {
      "pace": 56,
      "shooting": 66,
      "passing": 71,
      "dribbling": 71,
      "defending": 51,
      "physical": 66
    }
  },
  {
    "id": "p2281",
    "name": "Marco D'Alessandro",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 67,
    "club": "Monza",
    "age": 32,
    "stats": {
      "pace": 86,
      "shooting": 63,
      "passing": 65,
      "dribbling": 81,
      "defending": 24,
      "physical": 47
    }
  },
  {
    "id": "p2294",
    "name": "André Moreira",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Grasshopper Club",
    "age": 27,
    "stats": {
      "pace": 36,
      "shooting": 24,
      "passing": 28,
      "dribbling": 27,
      "defending": 14,
      "physical": 48
    }
  },
  {
    "id": "p2318",
    "name": "Tim Rönning",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "IF Elfsborg",
    "age": 24,
    "stats": {
      "pace": 18,
      "shooting": 25,
      "passing": 38,
      "dribbling": 25,
      "defending": 8,
      "physical": 43
    }
  },
  {
    "id": "p2364",
    "name": "Charles Kaboré",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Burkina Faso",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Niort",
    "age": 35,
    "stats": {
      "pace": 58,
      "shooting": 51,
      "passing": 66,
      "dribbling": 62,
      "defending": 52,
      "physical": 69
    }
  },
  {
    "id": "p2370",
    "name": "Yahia Fofana",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Angers SCO",
    "age": 23,
    "stats": {
      "pace": 42,
      "shooting": 17,
      "passing": 20,
      "dribbling": 21,
      "defending": 9,
      "physical": 47
    }
  },
  {
    "id": "p2381",
    "name": "Lehlogonolo Matlou",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Kaizer Chiefs",
    "age": 25,
    "stats": {
      "pace": 76,
      "shooting": 56,
      "passing": 64,
      "dribbling": 67,
      "defending": 37,
      "physical": 66
    }
  },
  {
    "id": "p2408",
    "name": "Gabri Veiga",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 67,
    "club": "RC Celta",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 64,
      "passing": 65,
      "dribbling": 72,
      "defending": 34,
      "physical": 58
    }
  },
  {
    "id": "p2412",
    "name": "Luciano Boggio",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Lanús",
    "age": 24,
    "stats": {
      "pace": 67,
      "shooting": 50,
      "passing": 64,
      "dribbling": 69,
      "defending": 44,
      "physical": 60
    }
  },
  {
    "id": "p2438",
    "name": "Rarmani Edmonds-Green",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Huddersfield",
    "age": 24,
    "stats": {
      "pace": 72,
      "shooting": 31,
      "passing": 55,
      "dribbling": 62,
      "defending": 51,
      "physical": 71
    }
  },
  {
    "id": "p2449",
    "name": "Daniel James",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Premier League",
    "rating": 67,
    "club": "Fulham",
    "age": 25,
    "stats": {
      "pace": 96,
      "shooting": 67,
      "passing": 65,
      "dribbling": 78,
      "defending": 30,
      "physical": 71
    }
  },
  {
    "id": "p2458",
    "name": "Timothée Dieng",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Gillingham",
    "age": 31,
    "stats": {
      "pace": 60,
      "shooting": 53,
      "passing": 60,
      "dribbling": 61,
      "defending": 47,
      "physical": 79
    }
  },
  {
    "id": "p2478",
    "name": "Sebastian Adelos",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Guaireña",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 51,
      "passing": 64,
      "dribbling": 64,
      "defending": 47,
      "physical": 68
    }
  },
  {
    "id": "p2495",
    "name": "Botelhinonsa",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 67,
    "club": "Athletico-PR",
    "age": 23,
    "stats": {
      "pace": 62,
      "shooting": 54,
      "passing": 58,
      "dribbling": 56,
      "defending": 50,
      "physical": 72
    }
  },
  {
    "id": "p2564",
    "name": "David Tavares",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "FC Famalicão",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 57,
      "passing": 61,
      "dribbling": 71,
      "defending": 47,
      "physical": 70
    }
  },
  {
    "id": "p2567",
    "name": "Rico Benatelli",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Austria Klagenfurt",
    "age": 31,
    "stats": {
      "pace": 47,
      "shooting": 60,
      "passing": 66,
      "dribbling": 68,
      "defending": 46,
      "physical": 58
    }
  },
  {
    "id": "p2620",
    "name": "Franco Soldano",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Gimnasia",
    "age": 28,
    "stats": {
      "pace": 69,
      "shooting": 65,
      "passing": 55,
      "dribbling": 66,
      "defending": 28,
      "physical": 77
    }
  },
  {
    "id": "p2736",
    "name": "Zakaria Aboukhlal",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Morocco",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 67,
    "club": "Toulouse FC",
    "age": 23,
    "stats": {
      "pace": 87,
      "shooting": 68,
      "passing": 68,
      "dribbling": 77,
      "defending": 24,
      "physical": 71
    }
  },
  {
    "id": "p2757",
    "name": "Enrique Serje",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Colombia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Junior",
    "age": 27,
    "stats": {
      "pace": 61,
      "shooting": 47,
      "passing": 54,
      "dribbling": 62,
      "defending": 50,
      "physical": 70
    }
  },
  {
    "id": "p2763",
    "name": "Musa Juwara",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Gambia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Odense BK",
    "age": 21,
    "stats": {
      "pace": 82,
      "shooting": 61,
      "passing": 56,
      "dribbling": 76,
      "defending": 21,
      "physical": 54
    }
  },
  {
    "id": "p2775",
    "name": "Stipe Biuk",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "LAFC",
    "age": 20,
    "stats": {
      "pace": 81,
      "shooting": 57,
      "passing": 65,
      "dribbling": 69,
      "defending": 29,
      "physical": 61
    }
  },
  {
    "id": "p2816",
    "name": "Ellis Simms",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 67,
    "club": "Everton",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 65,
      "passing": 50,
      "dribbling": 65,
      "defending": 16,
      "physical": 69
    }
  },
  {
    "id": "p2833",
    "name": "Alessandro Murgia",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "SPAL",
    "age": 27,
    "stats": {
      "pace": 42,
      "shooting": 64,
      "passing": 67,
      "dribbling": 63,
      "defending": 51,
      "physical": 57
    }
  },
  {
    "id": "p2902",
    "name": "Juan Foyth",
    "position": "LB",
    "positions": [
      "LB"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "La Liga",
    "rating": 67,
    "club": "Villarreal CF",
    "age": 25,
    "stats": {
      "pace": 72,
      "shooting": 46,
      "passing": 70,
      "dribbling": 72,
      "defending": 60,
      "physical": 76
    }
  },
  {
    "id": "p2910",
    "name": "He Chao",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "China PR",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Wuhan 3 Towns",
    "age": 28,
    "stats": {
      "pace": 72,
      "shooting": 52,
      "passing": 64,
      "dribbling": 69,
      "defending": 44,
      "physical": 74
    }
  },
  {
    "id": "p2922",
    "name": "Soner Dikmen",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Konyaspor",
    "age": 30,
    "stats": {
      "pace": 66,
      "shooting": 54,
      "passing": 58,
      "dribbling": 63,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p2927",
    "name": "Jérôme Deom",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "KAS Eupen",
    "age": 24,
    "stats": {
      "pace": 74,
      "shooting": 50,
      "passing": 64,
      "dribbling": 76,
      "defending": 45,
      "physical": 63
    }
  },
  {
    "id": "p2929",
    "name": "Kai Pröger",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Hansa Rostock",
    "age": 31,
    "stats": {
      "pace": 88,
      "shooting": 71,
      "passing": 55,
      "dribbling": 77,
      "defending": 27,
      "physical": 61
    }
  },
  {
    "id": "p3039",
    "name": "Xavier Mous",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "sc Heerenveen",
    "age": 28,
    "stats": {
      "pace": 39,
      "shooting": 25,
      "passing": 25,
      "dribbling": 30,
      "defending": 15,
      "physical": 43
    }
  },
  {
    "id": "p3103",
    "name": "Chris Maxwell",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Blackpool",
    "age": 33,
    "stats": {
      "pace": 42,
      "shooting": 24,
      "passing": 23,
      "dribbling": 34,
      "defending": 12,
      "physical": 44
    }
  },
  {
    "id": "p3169",
    "name": "Luis Alejandro Munesos",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Bolivia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Royal Pari",
    "age": 31,
    "stats": {
      "pace": 63,
      "shooting": 63,
      "passing": 69,
      "dribbling": 73,
      "defending": 32,
      "physical": 63
    }
  },
  {
    "id": "p3199",
    "name": "Danny Vukovic",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Australia",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Australia",
    "age": 38,
    "stats": {
      "pace": 50,
      "shooting": 22,
      "passing": 21,
      "dribbling": 32,
      "defending": 11,
      "physical": 54
    }
  },
  {
    "id": "p3206",
    "name": "Roko Jureskin",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Croatia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Benevento",
    "age": 22,
    "stats": {
      "pace": 81,
      "shooting": 53,
      "passing": 62,
      "dribbling": 66,
      "defending": 46,
      "physical": 61
    }
  },
  {
    "id": "p3218",
    "name": "Jack McGlynn",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Philadelphia",
    "age": 20,
    "stats": {
      "pace": 70,
      "shooting": 50,
      "passing": 65,
      "dribbling": 68,
      "defending": 42,
      "physical": 59
    }
  },
  {
    "id": "p3269",
    "name": "Martin Hansen",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Odense BK",
    "age": 33,
    "stats": {
      "pace": 50,
      "shooting": 24,
      "passing": 19,
      "dribbling": 34,
      "defending": 13,
      "physical": 48
    }
  },
  {
    "id": "p3298",
    "name": "Charles",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "FC Midtjylland",
    "age": 27,
    "stats": {
      "pace": 76,
      "shooting": 59,
      "passing": 63,
      "dribbling": 67,
      "defending": 47,
      "physical": 68
    }
  },
  {
    "id": "p3327",
    "name": "Douglas Friedrich",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Brazil",
    "era": "Legends",
    "league": "Saudi Pro League",
    "rating": 67,
    "club": "Al Khaleej",
    "age": 34,
    "stats": {
      "pace": 23,
      "shooting": 15,
      "passing": 23,
      "dribbling": 20,
      "defending": 7,
      "physical": 38
    }
  },
  {
    "id": "p3376",
    "name": "Melker Hallberg",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "St. Johnstone",
    "age": 27,
    "stats": {
      "pace": 66,
      "shooting": 66,
      "passing": 65,
      "dribbling": 68,
      "defending": 47,
      "physical": 68
    }
  },
  {
    "id": "p3400",
    "name": "Connor McLennan",
    "position": "RW",
    "positions": [
      "RW",
      "LW",
      "LM"
    ],
    "nationality": "Scotland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "St. Johnstone",
    "age": 23,
    "stats": {
      "pace": 81,
      "shooting": 59,
      "passing": 60,
      "dribbling": 66,
      "defending": 33,
      "physical": 60
    }
  },
  {
    "id": "p3420",
    "name": "Loret Sadiku",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Albania",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Hammarby IF",
    "age": 32,
    "stats": {
      "pace": 41,
      "shooting": 60,
      "passing": 57,
      "dribbling": 63,
      "defending": 49,
      "physical": 71
    }
  },
  {
    "id": "p3437",
    "name": "Riki",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Albacete BP",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 63,
      "passing": 66,
      "dribbling": 72,
      "defending": 45,
      "physical": 55
    }
  },
  {
    "id": "p3439",
    "name": "Osame Sahraoui",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "sc Heerenveen",
    "age": 22,
    "stats": {
      "pace": 80,
      "shooting": 53,
      "passing": 64,
      "dribbling": 84,
      "defending": 35,
      "physical": 57
    }
  },
  {
    "id": "p3473",
    "name": "Morten Bjørlo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Rosenborg BK",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 50,
      "passing": 64,
      "dribbling": 69,
      "defending": 46,
      "physical": 64
    }
  },
  {
    "id": "p3524",
    "name": "Antony Iannarilli",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Ternana",
    "age": 32,
    "stats": {
      "pace": 44,
      "shooting": 27,
      "passing": 27,
      "dribbling": 38,
      "defending": 19,
      "physical": 49
    }
  },
  {
    "id": "p3529",
    "name": "Alejandro Meleán",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Bolivia",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Guabirá",
    "age": 36,
    "stats": {
      "pace": 54,
      "shooting": 42,
      "passing": 61,
      "dribbling": 55,
      "defending": 49,
      "physical": 67
    }
  },
  {
    "id": "p3537",
    "name": "Juanfran",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "R. Oviedo",
    "age": 34,
    "stats": {
      "pace": 68,
      "shooting": 66,
      "passing": 64,
      "dribbling": 68,
      "defending": 47,
      "physical": 70
    }
  },
  {
    "id": "p3540",
    "name": "Emanuel Maciel",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Aldosivi",
    "age": 26,
    "stats": {
      "pace": 54,
      "shooting": 49,
      "passing": 65,
      "dribbling": 63,
      "defending": 46,
      "physical": 67
    }
  },
  {
    "id": "p3591",
    "name": "Ben Amos",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "La Liga",
    "rating": 67,
    "club": "Wigan Athletic",
    "age": 33,
    "stats": {
      "pace": 48,
      "shooting": 24,
      "passing": 42,
      "dribbling": 36,
      "defending": 12,
      "physical": 44
    }
  },
  {
    "id": "p3652",
    "name": "Sebastiano Esposito",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Bari",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 69,
      "passing": 69,
      "dribbling": 71,
      "defending": 26,
      "physical": 61
    }
  },
  {
    "id": "p3663",
    "name": "Ipalibo Jack",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Nigeria",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Strømsgodset IF",
    "age": 25,
    "stats": {
      "pace": 64,
      "shooting": 48,
      "passing": 58,
      "dribbling": 64,
      "defending": 48,
      "physical": 74
    }
  },
  {
    "id": "p3716",
    "name": "Andy Irving",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Austria Klagenfurt",
    "age": 23,
    "stats": {
      "pace": 53,
      "shooting": 61,
      "passing": 69,
      "dribbling": 67,
      "defending": 46,
      "physical": 61
    }
  },
  {
    "id": "p3764",
    "name": "David Lazar",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Univ. Craiova",
    "age": 32,
    "stats": {
      "pace": 54,
      "shooting": 23,
      "passing": 31,
      "dribbling": 40,
      "defending": 14,
      "physical": 51
    }
  },
  {
    "id": "p3777",
    "name": "Boy Waterman",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Netherlands",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "PSV",
    "age": 39,
    "stats": {
      "pace": 47,
      "shooting": 24,
      "passing": 30,
      "dribbling": 35,
      "defending": 13,
      "physical": 47
    }
  },
  {
    "id": "p3778",
    "name": "André Bukia",
    "position": "CAM",
    "positions": [
      "CAM",
      "CM"
    ],
    "nationality": "DR Congo",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Al Batin",
    "age": 28,
    "stats": {
      "pace": 85,
      "shooting": 63,
      "passing": 57,
      "dribbling": 80,
      "defending": 20,
      "physical": 58
    }
  },
  {
    "id": "p3798",
    "name": "Maximilian Beier",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Germany",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Hannover 96",
    "age": 20,
    "stats": {
      "pace": 86,
      "shooting": 65,
      "passing": 61,
      "dribbling": 74,
      "defending": 15,
      "physical": 59
    }
  },
  {
    "id": "p3864",
    "name": "Federico Valverde",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "La Liga",
    "rating": 67,
    "club": "Real Madrid",
    "age": 25,
    "stats": {
      "pace": 88,
      "shooting": 81,
      "passing": 84,
      "dribbling": 78,
      "defending": 61,
      "physical": 78
    }
  },
  {
    "id": "p3866",
    "name": "Mukhtar Ali",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 67,
    "club": "Al Tai",
    "age": 25,
    "stats": {
      "pace": 65,
      "shooting": 51,
      "passing": 59,
      "dribbling": 67,
      "defending": 42,
      "physical": 65
    }
  },
  {
    "id": "p3887",
    "name": "Thiago Cardozo",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Peñarol",
    "age": 27,
    "stats": {
      "pace": 38,
      "shooting": 23,
      "passing": 15,
      "dribbling": 22,
      "defending": 12,
      "physical": 50
    }
  },
  {
    "id": "p3960",
    "name": "Dan Potts",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Premier League",
    "rating": 67,
    "club": "Luton Town",
    "age": 29,
    "stats": {
      "pace": 67,
      "shooting": 34,
      "passing": 59,
      "dribbling": 66,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p3979",
    "name": "Aleksa Pejić",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "SK Rapid Wien",
    "age": 24,
    "stats": {
      "pace": 53,
      "shooting": 44,
      "passing": 56,
      "dribbling": 54,
      "defending": 47,
      "physical": 66
    }
  },
  {
    "id": "p4004",
    "name": "Matheus Reis",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sporting CP",
    "age": 28,
    "stats": {
      "pace": 73,
      "shooting": 52,
      "passing": 66,
      "dribbling": 70,
      "defending": 60,
      "physical": 82
    }
  },
  {
    "id": "p4015",
    "name": "Matt Ritchie",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 67,
    "club": "Newcastle Utd",
    "age": 33,
    "stats": {
      "pace": 61,
      "shooting": 73,
      "passing": 74,
      "dribbling": 74,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p4058",
    "name": "Christopher Ikonomidis",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Melb. Victory",
    "age": 28,
    "stats": {
      "pace": 78,
      "shooting": 66,
      "passing": 66,
      "dribbling": 72,
      "defending": 38,
      "physical": 64
    }
  },
  {
    "id": "p4063",
    "name": "Maik Nawrocki",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Poland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Legia Warszawa",
    "age": 22,
    "stats": {
      "pace": 77,
      "shooting": 50,
      "passing": 58,
      "dribbling": 57,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p4111",
    "name": "Ronnie Edwards",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Peterborough",
    "age": 20,
    "stats": {
      "pace": 69,
      "shooting": 30,
      "passing": 53,
      "dribbling": 62,
      "defending": 52,
      "physical": 66
    }
  },
  {
    "id": "p4140",
    "name": "Natinho Mestres",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "São Paulo",
    "age": 31,
    "stats": {
      "pace": 78,
      "shooting": 60,
      "passing": 65,
      "dribbling": 72,
      "defending": 25,
      "physical": 50
    }
  },
  {
    "id": "p4159",
    "name": "Julian Günther-Schmidt",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Saarbrücken",
    "age": 28,
    "stats": {
      "pace": 71,
      "shooting": 64,
      "passing": 64,
      "dribbling": 69,
      "defending": 17,
      "physical": 71
    }
  },
  {
    "id": "p4187",
    "name": "Mollejo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Real Zaragoza",
    "age": 22,
    "stats": {
      "pace": 81,
      "shooting": 60,
      "passing": 65,
      "dribbling": 74,
      "defending": 32,
      "physical": 70
    }
  },
  {
    "id": "p4220",
    "name": "Giuseppe Carriero",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Cittadella",
    "age": 25,
    "stats": {
      "pace": 64,
      "shooting": 56,
      "passing": 62,
      "dribbling": 67,
      "defending": 38,
      "physical": 65
    }
  },
  {
    "id": "p4266",
    "name": "Bradley Dack",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Blackburn Rovers",
    "age": 29,
    "stats": {
      "pace": 71,
      "shooting": 67,
      "passing": 69,
      "dribbling": 76,
      "defending": 40,
      "physical": 66
    }
  },
  {
    "id": "p4292",
    "name": "Pablo Chavarría",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "Málaga CF",
    "age": 35,
    "stats": {
      "pace": 65,
      "shooting": 65,
      "passing": 66,
      "dribbling": 67,
      "defending": 28,
      "physical": 75
    }
  },
  {
    "id": "p4295",
    "name": "Landry Dimata",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "N.E.C. Nijmegen",
    "age": 26,
    "stats": {
      "pace": 77,
      "shooting": 69,
      "passing": 64,
      "dribbling": 69,
      "defending": 25,
      "physical": 77
    }
  },
  {
    "id": "p4311",
    "name": "Alejandro Sola López-Ocaña",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 67,
    "club": "Real Sociedad",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 52,
      "passing": 60,
      "dribbling": 69,
      "defending": 47,
      "physical": 76
    }
  },
  {
    "id": "p4313",
    "name": "Franck Elimane Kanouté",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "FCSM",
    "age": 24,
    "stats": {
      "pace": 61,
      "shooting": 59,
      "passing": 60,
      "dribbling": 68,
      "defending": 48,
      "physical": 71
    }
  },
  {
    "id": "p4316",
    "name": "Ryan Broom",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Cheltenham Town",
    "age": 26,
    "stats": {
      "pace": 84,
      "shooting": 58,
      "passing": 64,
      "dribbling": 73,
      "defending": 45,
      "physical": 64
    }
  },
  {
    "id": "p4334",
    "name": "Lee Jin Yong",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Daegu FC",
    "age": 22,
    "stats": {
      "pace": 60,
      "shooting": 44,
      "passing": 57,
      "dribbling": 62,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p4370",
    "name": "Sergiu Hanca",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Univ. Craiova",
    "age": 31,
    "stats": {
      "pace": 79,
      "shooting": 63,
      "passing": 66,
      "dribbling": 76,
      "defending": 43,
      "physical": 70
    }
  },
  {
    "id": "p4374",
    "name": "Daniel Rojas",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Bolivia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "O. Petrolero",
    "age": 23,
    "stats": {
      "pace": 52,
      "shooting": 62,
      "passing": 59,
      "dribbling": 65,
      "defending": 46,
      "physical": 73
    }
  },
  {
    "id": "p4409",
    "name": "Marwane Saadane",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 67,
    "club": "Al Fateh",
    "age": 31,
    "stats": {
      "pace": 58,
      "shooting": 49,
      "passing": 61,
      "dribbling": 62,
      "defending": 49,
      "physical": 82
    }
  },
  {
    "id": "p4410",
    "name": "Marc-Aurèle Caillard",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 67,
    "club": "FC Metz",
    "age": 29,
    "stats": {
      "pace": 44,
      "shooting": 20,
      "passing": 22,
      "dribbling": 29,
      "defending": 10,
      "physical": 47
    }
  },
  {
    "id": "p4411",
    "name": "Rafał Kurzawa",
    "position": "CM",
    "positions": [
      "CM",
      "CDM",
      "CAM"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Pogoń Szczecin",
    "age": 30,
    "stats": {
      "pace": 52,
      "shooting": 65,
      "passing": 69,
      "dribbling": 68,
      "defending": 47,
      "physical": 56
    }
  },
  {
    "id": "p4469",
    "name": "Claudio Gomes",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Palermo",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 57,
      "passing": 65,
      "dribbling": 71,
      "defending": 48,
      "physical": 66
    }
  },
  {
    "id": "p4503",
    "name": "Neil Etheridge",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Philippines",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Birmingham City",
    "age": 33,
    "stats": {
      "pace": 47,
      "shooting": 20,
      "passing": 31,
      "dribbling": 41,
      "defending": 13,
      "physical": 43
    }
  },
  {
    "id": "p4560",
    "name": "Roberto Nicolás Fernández",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Godoy Cruz",
    "age": 25,
    "stats": {
      "pace": 66,
      "shooting": 58,
      "passing": 62,
      "dribbling": 67,
      "defending": 47,
      "physical": 69
    }
  },
  {
    "id": "p4565",
    "name": "Lamine Gueye",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Senegal",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 67,
    "club": "FC Metz",
    "age": 25,
    "stats": {
      "pace": 78,
      "shooting": 69,
      "passing": 67,
      "dribbling": 71,
      "defending": 15,
      "physical": 60
    }
  },
  {
    "id": "p4580",
    "name": "Corry Evans",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Northern Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Sunderland",
    "age": 33,
    "stats": {
      "pace": 47,
      "shooting": 56,
      "passing": 60,
      "dribbling": 61,
      "defending": 49,
      "physical": 66
    }
  },
  {
    "id": "p4601",
    "name": "Oriol Rey",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "CD Mirandés",
    "age": 25,
    "stats": {
      "pace": 58,
      "shooting": 50,
      "passing": 63,
      "dribbling": 67,
      "defending": 45,
      "physical": 65
    }
  },
  {
    "id": "p4624",
    "name": "Kevin Ortiz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Rosario Central",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 53,
      "passing": 60,
      "dribbling": 65,
      "defending": 48,
      "physical": 69
    }
  },
  {
    "id": "p4663",
    "name": "Andy Diouf",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "FC Basel 1893",
    "age": 20,
    "stats": {
      "pace": 67,
      "shooting": 57,
      "passing": 64,
      "dribbling": 69,
      "defending": 45,
      "physical": 69
    }
  },
  {
    "id": "p4669",
    "name": "Carlos Arrua",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Colón",
    "age": 26,
    "stats": {
      "pace": 70,
      "shooting": 63,
      "passing": 62,
      "dribbling": 66,
      "defending": 50,
      "physical": 62
    }
  },
  {
    "id": "p4680",
    "name": "Fabio González",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "UD Las Palmas",
    "age": 26,
    "stats": {
      "pace": 60,
      "shooting": 53,
      "passing": 62,
      "dribbling": 69,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p4737",
    "name": "Miguel Baeza",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Rio Ave FC",
    "age": 23,
    "stats": {
      "pace": 65,
      "shooting": 61,
      "passing": 71,
      "dribbling": 70,
      "defending": 34,
      "physical": 55
    }
  },
  {
    "id": "p4764",
    "name": "Leonel Picco",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Colón",
    "age": 24,
    "stats": {
      "pace": 54,
      "shooting": 55,
      "passing": 61,
      "dribbling": 59,
      "defending": 50,
      "physical": 70
    }
  },
  {
    "id": "p4773",
    "name": "Saúl",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "R. Racing Club",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 46,
      "passing": 63,
      "dribbling": 65,
      "defending": 52,
      "physical": 61
    }
  },
  {
    "id": "p4779",
    "name": "Giovanni Sio",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Ivory Coast",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "FC Sion",
    "age": 34,
    "stats": {
      "pace": 71,
      "shooting": 72,
      "passing": 66,
      "dribbling": 71,
      "defending": 12,
      "physical": 70
    }
  },
  {
    "id": "p4787",
    "name": "Théo Pellenard",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "AJ Auxerre",
    "age": 29,
    "stats": {
      "pace": 57,
      "shooting": 36,
      "passing": 63,
      "dribbling": 62,
      "defending": 50,
      "physical": 68
    }
  },
  {
    "id": "p4844",
    "name": "Hamilton Acuria",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Ecuador",
    "era": "Legends",
    "league": "Other",
    "rating": 67,
    "club": "LDU Quito",
    "age": 35,
    "stats": {
      "pace": 13,
      "shooting": 23,
      "passing": 19,
      "dribbling": 22,
      "defending": 7,
      "physical": 29
    }
  },
  {
    "id": "p4902",
    "name": "Heorhii Sudakov",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Ukraine",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Shakhtar Donetsk",
    "age": 21,
    "stats": {
      "pace": 71,
      "shooting": 62,
      "passing": 64,
      "dribbling": 73,
      "defending": 28,
      "physical": 62
    }
  },
  {
    "id": "p4930",
    "name": "Nené",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Jagiellonia",
    "age": 28,
    "stats": {
      "pace": 63,
      "shooting": 65,
      "passing": 63,
      "dribbling": 64,
      "defending": 49,
      "physical": 75
    }
  },
  {
    "id": "p4934",
    "name": "Jack Rudoni",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Huddersfield",
    "age": 22,
    "stats": {
      "pace": 72,
      "shooting": 60,
      "passing": 62,
      "dribbling": 66,
      "defending": 45,
      "physical": 68
    }
  },
  {
    "id": "p4937",
    "name": "Christoph Kobald",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Karlsruher SC",
    "age": 26,
    "stats": {
      "pace": 68,
      "shooting": 27,
      "passing": 56,
      "dribbling": 57,
      "defending": 52,
      "physical": 71
    }
  },
  {
    "id": "p4969",
    "name": "Javi Pérez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Burgos CF",
    "age": 28,
    "stats": {
      "pace": 45,
      "shooting": 57,
      "passing": 60,
      "dribbling": 54,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p4978",
    "name": "Cas Odenthal",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Como",
    "age": 22,
    "stats": {
      "pace": 60,
      "shooting": 31,
      "passing": 55,
      "dribbling": 57,
      "defending": 50,
      "physical": 67
    }
  },
  {
    "id": "p5032",
    "name": "Renato Veiga",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Bundesliga",
    "rating": 67,
    "club": "FC Augsburg",
    "age": 20,
    "stats": {
      "pace": 67,
      "shooting": 36,
      "passing": 63,
      "dribbling": 62,
      "defending": 47,
      "physical": 65
    }
  },
  {
    "id": "p5059",
    "name": "Eddy Gnahoré",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Ascoli",
    "age": 29,
    "stats": {
      "pace": 56,
      "shooting": 64,
      "passing": 64,
      "dribbling": 63,
      "defending": 46,
      "physical": 72
    }
  },
  {
    "id": "p5061",
    "name": "Sakarias Opsahl",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Tromsø IL",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 58,
      "passing": 65,
      "dribbling": 66,
      "defending": 45,
      "physical": 65
    }
  },
  {
    "id": "p5140",
    "name": "Tiago Pombeira",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 67,
    "club": "Atlético Mineiro",
    "age": 23,
    "stats": {
      "pace": 74,
      "shooting": 64,
      "passing": 67,
      "dribbling": 77,
      "defending": 25,
      "physical": 49
    }
  },
  {
    "id": "p5207",
    "name": "Raúl García",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "CD Mirandés",
    "age": 22,
    "stats": {
      "pace": 62,
      "shooting": 68,
      "passing": 50,
      "dribbling": 57,
      "defending": 15,
      "physical": 53
    }
  },
  {
    "id": "p5269",
    "name": "Richard van der Venne",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Melbourne City",
    "age": 31,
    "stats": {
      "pace": 68,
      "shooting": 60,
      "passing": 63,
      "dribbling": 70,
      "defending": 43,
      "physical": 72
    }
  },
  {
    "id": "p5513",
    "name": "Colin Coosemans",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "RSC Anderlecht",
    "age": 31,
    "stats": {
      "pace": 45,
      "shooting": 24,
      "passing": 34,
      "dribbling": 33,
      "defending": 12,
      "physical": 49
    }
  },
  {
    "id": "p5522",
    "name": "Matija Šarkić",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Montenegro",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Stoke City",
    "age": 26,
    "stats": {
      "pace": 37,
      "shooting": 23,
      "passing": 23,
      "dribbling": 25,
      "defending": 10,
      "physical": 34
    }
  },
  {
    "id": "p5528",
    "name": "Liam Kelly",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Motherwell",
    "age": 27,
    "stats": {
      "pace": 39,
      "shooting": 27,
      "passing": 27,
      "dribbling": 35,
      "defending": 13,
      "physical": 37
    }
  },
  {
    "id": "p5561",
    "name": "Park Yong Woo",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Ulsan Hyundai",
    "age": 29,
    "stats": {
      "pace": 59,
      "shooting": 58,
      "passing": 62,
      "dribbling": 59,
      "defending": 46,
      "physical": 74
    }
  },
  {
    "id": "p5595",
    "name": "Córdoba",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 67,
    "club": "Burgos CF",
    "age": 28,
    "stats": {
      "pace": 60,
      "shooting": 37,
      "passing": 48,
      "dribbling": 52,
      "defending": 52,
      "physical": 70
    }
  },
  {
    "id": "p5657",
    "name": "Hugo Larsson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 67,
    "club": "Malmö FF",
    "age": 19,
    "stats": {
      "pace": 76,
      "shooting": 55,
      "passing": 57,
      "dribbling": 65,
      "defending": 43,
      "physical": 69
    }
  },
  {
    "id": "p61",
    "name": "Hugo Anglada Gutiérrez",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "SD Huesca",
    "age": 19,
    "stats": {
      "pace": 64,
      "shooting": 35,
      "passing": 49,
      "dribbling": 59,
      "defending": 48,
      "physical": 68
    }
  },
  {
    "id": "p119",
    "name": "Giuseppe Mastinu",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Pisa",
    "age": 31,
    "stats": {
      "pace": 64,
      "shooting": 65,
      "passing": 63,
      "dribbling": 68,
      "defending": 23,
      "physical": 47
    }
  },
  {
    "id": "p168",
    "name": "Gustavo Klismahn",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Portimonense SC",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 67,
      "passing": 65,
      "dribbling": 62,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p198",
    "name": "Robbie D'Haese",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "KV Oostende",
    "age": 24,
    "stats": {
      "pace": 78,
      "shooting": 56,
      "passing": 64,
      "dribbling": 73,
      "defending": 40,
      "physical": 56
    }
  },
  {
    "id": "p199",
    "name": "Louis Reed",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Mansfield Town",
    "age": 26,
    "stats": {
      "pace": 66,
      "shooting": 55,
      "passing": 61,
      "dribbling": 73,
      "defending": 46,
      "physical": 72
    }
  },
  {
    "id": "p241",
    "name": "Fabio Vázquez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Patronato",
    "age": 29,
    "stats": {
      "pace": 57,
      "shooting": 48,
      "passing": 60,
      "dribbling": 62,
      "defending": 46,
      "physical": 70
    }
  },
  {
    "id": "p374",
    "name": "Max Stryjek",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Poland",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Wycombe",
    "age": 27,
    "stats": {
      "pace": 43,
      "shooting": 22,
      "passing": 25,
      "dribbling": 29,
      "defending": 14,
      "physical": 42
    }
  },
  {
    "id": "p392",
    "name": "Cristo González",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "R. Sporting",
    "age": 25,
    "stats": {
      "pace": 74,
      "shooting": 66,
      "passing": 62,
      "dribbling": 74,
      "defending": 24,
      "physical": 64
    }
  },
  {
    "id": "p413",
    "name": "Estevãtinho",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Fluminense",
    "age": 31,
    "stats": {
      "pace": 44,
      "shooting": 56,
      "passing": 74,
      "dribbling": 66,
      "defending": 23,
      "physical": 56
    }
  },
  {
    "id": "p448",
    "name": "Alexi Pitu",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Romania",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Bordeaux",
    "age": 21,
    "stats": {
      "pace": 81,
      "shooting": 56,
      "passing": 65,
      "dribbling": 75,
      "defending": 21,
      "physical": 55
    }
  },
  {
    "id": "p456",
    "name": "Mauro Méndez",
    "position": "ST",
    "positions": [
      "ST",
      "CF"
    ],
    "nationality": "Uruguay",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Estudiantes",
    "age": 24,
    "stats": {
      "pace": 72,
      "shooting": 67,
      "passing": 62,
      "dribbling": 66,
      "defending": 23,
      "physical": 55
    }
  },
  {
    "id": "p467",
    "name": "Tristan Muyumba",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "En Avant Guingamp",
    "age": 26,
    "stats": {
      "pace": 75,
      "shooting": 45,
      "passing": 61,
      "dribbling": 73,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p468",
    "name": "Baltasar Barcia",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Uruguay",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Independiente",
    "age": 22,
    "stats": {
      "pace": 74,
      "shooting": 63,
      "passing": 61,
      "dribbling": 63,
      "defending": 41,
      "physical": 61
    }
  },
  {
    "id": "p498",
    "name": "Borja Sainz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Giresunspor",
    "age": 22,
    "stats": {
      "pace": 78,
      "shooting": 56,
      "passing": 63,
      "dribbling": 71,
      "defending": 28,
      "physical": 53
    }
  },
  {
    "id": "p518",
    "name": "Memo Rodriguez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "LA Galaxy",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 62,
      "passing": 67,
      "dribbling": 75,
      "defending": 36,
      "physical": 60
    }
  },
  {
    "id": "p551",
    "name": "Ali Hazazi",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Ettifaq FC",
    "age": 29,
    "stats": {
      "pace": 63,
      "shooting": 41,
      "passing": 63,
      "dribbling": 67,
      "defending": 47,
      "physical": 70
    }
  },
  {
    "id": "p595",
    "name": "Pervis Estupiñán",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Ecuador",
    "era": "Modern",
    "league": "Premier League",
    "rating": 66,
    "club": "Brighton",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 42,
      "passing": 69,
      "dribbling": 73,
      "defending": 59,
      "physical": 74
    }
  },
  {
    "id": "p610",
    "name": "Matthew Pennington",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Shrewsbury",
    "age": 28,
    "stats": {
      "pace": 65,
      "shooting": 34,
      "passing": 54,
      "dribbling": 53,
      "defending": 49,
      "physical": 74
    }
  },
  {
    "id": "p616",
    "name": "Erlend Segberg",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Aalesunds FK",
    "age": 26,
    "stats": {
      "pace": 56,
      "shooting": 53,
      "passing": 62,
      "dribbling": 63,
      "defending": 43,
      "physical": 73
    }
  },
  {
    "id": "p626",
    "name": "Miloš Ninković",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Serbia",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "WS Wanderers",
    "age": 38,
    "stats": {
      "pace": 59,
      "shooting": 65,
      "passing": 68,
      "dribbling": 71,
      "defending": 42,
      "physical": 63
    }
  },
  {
    "id": "p717",
    "name": "Baba Alhassan",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Ghana",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "FC Hermannstadt",
    "age": 23,
    "stats": {
      "pace": 82,
      "shooting": 66,
      "passing": 58,
      "dribbling": 68,
      "defending": 45,
      "physical": 79
    }
  },
  {
    "id": "p741",
    "name": "Salih Özcan",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Turkey",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 66,
    "club": "Borussia Dortmund",
    "age": 25,
    "stats": {
      "pace": 76,
      "shooting": 59,
      "passing": 73,
      "dribbling": 79,
      "defending": 58,
      "physical": 81
    }
  },
  {
    "id": "p771",
    "name": "Philippe Sandler",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Netherlands",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "N.E.C. Nijmegen",
    "age": 26,
    "stats": {
      "pace": 63,
      "shooting": 42,
      "passing": 63,
      "dribbling": 63,
      "defending": 52,
      "physical": 66
    }
  },
  {
    "id": "p788",
    "name": "Javi López",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "D. Alavés",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 26,
      "passing": 53,
      "dribbling": 59,
      "defending": 51,
      "physical": 62
    }
  },
  {
    "id": "p837",
    "name": "Nuno da Costa",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Cape Verde",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "AJ Auxerre",
    "age": 32,
    "stats": {
      "pace": 82,
      "shooting": 67,
      "passing": 62,
      "dribbling": 74,
      "defending": 19,
      "physical": 67
    }
  },
  {
    "id": "p931",
    "name": "Esteban Rolón",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Boca Juniors",
    "age": 28,
    "stats": {
      "pace": 66,
      "shooting": 57,
      "passing": 63,
      "dribbling": 66,
      "defending": 49,
      "physical": 67
    }
  },
  {
    "id": "p935",
    "name": "Lee Seung Mo",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Korea Republic",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Pohang Steelers",
    "age": 25,
    "stats": {
      "pace": 71,
      "shooting": 56,
      "passing": 58,
      "dribbling": 66,
      "defending": 43,
      "physical": 73
    }
  },
  {
    "id": "p966",
    "name": "Roberto Garcés",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Ecuador",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "CS Emelec",
    "age": 30,
    "stats": {
      "pace": 64,
      "shooting": 47,
      "passing": 59,
      "dribbling": 61,
      "defending": 48,
      "physical": 62
    }
  },
  {
    "id": "p980",
    "name": "Samir Ujkani",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Kosovo",
    "era": "Legends",
    "league": "Serie A",
    "rating": 66,
    "club": "Empoli",
    "age": 35,
    "stats": {
      "pace": 50,
      "shooting": 22,
      "passing": 26,
      "dribbling": 35,
      "defending": 8,
      "physical": 44
    }
  },
  {
    "id": "p984",
    "name": "Timothy Derijck",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Zulte Waregem",
    "age": 36,
    "stats": {
      "pace": 33,
      "shooting": 43,
      "passing": 49,
      "dribbling": 51,
      "defending": 52,
      "physical": 59
    }
  },
  {
    "id": "p1003",
    "name": "Nasser Al Dawsari",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 66,
    "club": "Al Hilal",
    "age": 24,
    "stats": {
      "pace": 68,
      "shooting": 57,
      "passing": 69,
      "dribbling": 71,
      "defending": 45,
      "physical": 61
    }
  },
  {
    "id": "p1049",
    "name": "Samuel Şahin-Radlinger",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "SV Ried",
    "age": 30,
    "stats": {
      "pace": 51,
      "shooting": 20,
      "passing": 27,
      "dribbling": 28,
      "defending": 11,
      "physical": 40
    }
  },
  {
    "id": "p1058",
    "name": "Villahermosa",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "RCD Espanyol",
    "age": 22,
    "stats": {
      "pace": 66,
      "shooting": 59,
      "passing": 65,
      "dribbling": 72,
      "defending": 44,
      "physical": 58
    }
  },
  {
    "id": "p1071",
    "name": "Žan Kolmanič",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Slovenia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Austin FC",
    "age": 23,
    "stats": {
      "pace": 66,
      "shooting": 36,
      "passing": 66,
      "dribbling": 61,
      "defending": 42,
      "physical": 64
    }
  },
  {
    "id": "p1079",
    "name": "Daniel Crowley",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Morecambe",
    "age": 26,
    "stats": {
      "pace": 72,
      "shooting": 61,
      "passing": 67,
      "dribbling": 74,
      "defending": 37,
      "physical": 56
    }
  },
  {
    "id": "p1115",
    "name": "Pascal Breier",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Hansa Rostock",
    "age": 31,
    "stats": {
      "pace": 74,
      "shooting": 64,
      "passing": 59,
      "dribbling": 68,
      "defending": 21,
      "physical": 72
    }
  },
  {
    "id": "p1148",
    "name": "Matías Campos",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Chile",
    "era": "Modern",
    "league": "Premier League",
    "rating": 66,
    "club": "Everton de Viña",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 66,
      "passing": 46,
      "dribbling": 63,
      "defending": 20,
      "physical": 65
    }
  },
  {
    "id": "p1174",
    "name": "Andrew Robertson",
    "position": "RB",
    "positions": [
      "RB",
      "LB"
    ],
    "nationality": "Scotland",
    "era": "Modern",
    "league": "Premier League",
    "rating": 66,
    "club": "Liverpool",
    "age": 29,
    "stats": {
      "pace": 80,
      "shooting": 57,
      "passing": 81,
      "dribbling": 78,
      "defending": 62,
      "physical": 77
    }
  },
  {
    "id": "p1190",
    "name": "Dejan Stojanović",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "North Macedonia",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Jahn Regensburg",
    "age": 30,
    "stats": {
      "pace": 38,
      "shooting": 23,
      "passing": 23,
      "dribbling": 27,
      "defending": 12,
      "physical": 45
    }
  },
  {
    "id": "p1206",
    "name": "Alessio Iovine",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Como",
    "age": 32,
    "stats": {
      "pace": 63,
      "shooting": 52,
      "passing": 63,
      "dribbling": 69,
      "defending": 43,
      "physical": 55
    }
  },
  {
    "id": "p1292",
    "name": "Joe Wildsmith",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Derby County",
    "age": 27,
    "stats": {
      "pace": 42,
      "shooting": 24,
      "passing": 43,
      "dribbling": 38,
      "defending": 16,
      "physical": 51
    }
  },
  {
    "id": "p1298",
    "name": "Charlie Mulgrew",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Scotland",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Dundee United",
    "age": 37,
    "stats": {
      "pace": 42,
      "shooting": 63,
      "passing": 67,
      "dribbling": 56,
      "defending": 52,
      "physical": 65
    }
  },
  {
    "id": "p1356",
    "name": "Patrik Myslovič",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Slovakia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Aberdeen",
    "age": 22,
    "stats": {
      "pace": 64,
      "shooting": 64,
      "passing": 66,
      "dribbling": 64,
      "defending": 31,
      "physical": 58
    }
  },
  {
    "id": "p1361",
    "name": "Eduard Florescu",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FC Botoșani",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 68,
      "passing": 65,
      "dribbling": 65,
      "defending": 41,
      "physical": 62
    }
  },
  {
    "id": "p1362",
    "name": "Kelvin Leerdam",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Suriname",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "LA Galaxy",
    "age": 33,
    "stats": {
      "pace": 70,
      "shooting": 55,
      "passing": 63,
      "dribbling": 69,
      "defending": 48,
      "physical": 75
    }
  },
  {
    "id": "p1386",
    "name": "Morlaye Sylla",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Guinea",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Arouca",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 64,
      "passing": 66,
      "dribbling": 69,
      "defending": 46,
      "physical": 64
    }
  },
  {
    "id": "p1398",
    "name": "Stefan Bajcetic",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Premier League",
    "rating": 66,
    "club": "Liverpool",
    "age": 18,
    "stats": {
      "pace": 66,
      "shooting": 48,
      "passing": 62,
      "dribbling": 67,
      "defending": 49,
      "physical": 61
    }
  },
  {
    "id": "p1406",
    "name": "Nicolás Stefanelli",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Serie A",
    "rating": 66,
    "club": "Inter Miami CF",
    "age": 28,
    "stats": {
      "pace": 83,
      "shooting": 66,
      "passing": 59,
      "dribbling": 81,
      "defending": 21,
      "physical": 76
    }
  },
  {
    "id": "p1424",
    "name": "Cristian Menéndez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Legends",
    "league": "La Liga",
    "rating": 66,
    "club": "Atlético Tucumán",
    "age": 35,
    "stats": {
      "pace": 65,
      "shooting": 68,
      "passing": 60,
      "dribbling": 67,
      "defending": 28,
      "physical": 71
    }
  },
  {
    "id": "p1510",
    "name": "Leon Jensen",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Karlsruher SC",
    "age": 26,
    "stats": {
      "pace": 69,
      "shooting": 62,
      "passing": 64,
      "dribbling": 73,
      "defending": 38,
      "physical": 55
    }
  },
  {
    "id": "p1531",
    "name": "Thomas Eisfeld",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Rot-Weiss Essen",
    "age": 30,
    "stats": {
      "pace": 64,
      "shooting": 61,
      "passing": 67,
      "dribbling": 70,
      "defending": 24,
      "physical": 58
    }
  },
  {
    "id": "p1533",
    "name": "Russell Teibert",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Canada",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Whitecaps FC",
    "age": 30,
    "stats": {
      "pace": 44,
      "shooting": 51,
      "passing": 66,
      "dribbling": 70,
      "defending": 45,
      "physical": 59
    }
  },
  {
    "id": "p1548",
    "name": "David Stockdale",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Premier League",
    "rating": 66,
    "club": "Sheffield Wed",
    "age": 37,
    "stats": {
      "pace": 31,
      "shooting": 23,
      "passing": 37,
      "dribbling": 24,
      "defending": 13,
      "physical": 44
    }
  },
  {
    "id": "p1555",
    "name": "Jair Aldunsate",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Venezuela",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Dep. La Guaira",
    "age": 27,
    "stats": {
      "pace": 62,
      "shooting": 55,
      "passing": 62,
      "dribbling": 61,
      "defending": 47,
      "physical": 69
    }
  },
  {
    "id": "p1584",
    "name": "Dennis Srbeny",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "SC Paderborn 07",
    "age": 29,
    "stats": {
      "pace": 68,
      "shooting": 65,
      "passing": 58,
      "dribbling": 63,
      "defending": 21,
      "physical": 71
    }
  },
  {
    "id": "p1628",
    "name": "Denis Petrić",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Slovenia",
    "era": "Legends",
    "league": "Ligue 1",
    "rating": 66,
    "club": "FC Nantes",
    "age": 35,
    "stats": {
      "pace": 44,
      "shooting": 22,
      "passing": 17,
      "dribbling": 28,
      "defending": 10,
      "physical": 41
    }
  },
  {
    "id": "p1658",
    "name": "Curtis Good",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Australia",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Melbourne City",
    "age": 30,
    "stats": {
      "pace": 57,
      "shooting": 35,
      "passing": 58,
      "dribbling": 59,
      "defending": 51,
      "physical": 78
    }
  },
  {
    "id": "p1670",
    "name": "Luciano Vega",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Marítimo",
    "age": 24,
    "stats": {
      "pace": 65,
      "shooting": 52,
      "passing": 66,
      "dribbling": 60,
      "defending": 39,
      "physical": 62
    }
  },
  {
    "id": "p1679",
    "name": "Thorsten Röcher",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Wolfsberger AC",
    "age": 32,
    "stats": {
      "pace": 68,
      "shooting": 69,
      "passing": 64,
      "dribbling": 71,
      "defending": 10,
      "physical": 67
    }
  },
  {
    "id": "p1737",
    "name": "Jannik Rochelt",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "SV Elversberg",
    "age": 24,
    "stats": {
      "pace": 80,
      "shooting": 56,
      "passing": 65,
      "dribbling": 71,
      "defending": 36,
      "physical": 64
    }
  },
  {
    "id": "p1760",
    "name": "Yuki Kobayashi",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Japan",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Celtic",
    "age": 23,
    "stats": {
      "pace": 60,
      "shooting": 41,
      "passing": 54,
      "dribbling": 56,
      "defending": 48,
      "physical": 65
    }
  },
  {
    "id": "p1804",
    "name": "Nicolò Cambiaghi",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Rising Stars",
    "league": "Serie A",
    "rating": 66,
    "club": "Empoli",
    "age": 22,
    "stats": {
      "pace": 77,
      "shooting": 66,
      "passing": 60,
      "dribbling": 74,
      "defending": 26,
      "physical": 60
    }
  },
  {
    "id": "p1891",
    "name": "Jake Reeves",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Stevenage",
    "age": 30,
    "stats": {
      "pace": 72,
      "shooting": 56,
      "passing": 62,
      "dribbling": 71,
      "defending": 43,
      "physical": 71
    }
  },
  {
    "id": "p1924",
    "name": "Elliott Bennett",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Shrewsbury",
    "age": 34,
    "stats": {
      "pace": 64,
      "shooting": 60,
      "passing": 64,
      "dribbling": 65,
      "defending": 47,
      "physical": 61
    }
  },
  {
    "id": "p1962",
    "name": "Óliver Torres",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "La Liga",
    "rating": 66,
    "club": "Sevilla FC",
    "age": 28,
    "stats": {
      "pace": 60,
      "shooting": 67,
      "passing": 78,
      "dribbling": 80,
      "defending": 48,
      "physical": 54
    }
  },
  {
    "id": "p2010",
    "name": "Sumayhan Al Nabit",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 66,
    "club": "Al Taawoun",
    "age": 27,
    "stats": {
      "pace": 80,
      "shooting": 57,
      "passing": 63,
      "dribbling": 77,
      "defending": 19,
      "physical": 63
    }
  },
  {
    "id": "p2033",
    "name": "Tomeu Nadal Mesquida",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "R. Oviedo",
    "age": 34,
    "stats": {
      "pace": 36,
      "shooting": 23,
      "passing": 28,
      "dribbling": 26,
      "defending": 12,
      "physical": 49
    }
  },
  {
    "id": "p2153",
    "name": "Pedro Vite",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Ecuador",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Whitecaps FC",
    "age": 21,
    "stats": {
      "pace": 72,
      "shooting": 50,
      "passing": 58,
      "dribbling": 73,
      "defending": 43,
      "physical": 54
    }
  },
  {
    "id": "p2196",
    "name": "Ricardinho",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Santa Clara",
    "age": 25,
    "stats": {
      "pace": 70,
      "shooting": 63,
      "passing": 66,
      "dribbling": 69,
      "defending": 26,
      "physical": 55
    }
  },
  {
    "id": "p2197",
    "name": "Odin Luraas Bjørtuft",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FK Bodø/Glimt",
    "age": 24,
    "stats": {
      "pace": 62,
      "shooting": 30,
      "passing": 50,
      "dribbling": 52,
      "defending": 49,
      "physical": 70
    }
  },
  {
    "id": "p2225",
    "name": "Tião Couteira",
    "position": "CM",
    "positions": [
      "CM",
      "CAM"
    ],
    "nationality": "Brazil",
    "era": "Rising Stars",
    "league": "La Liga",
    "rating": 66,
    "club": "Athletico-PR",
    "age": 23,
    "stats": {
      "pace": 75,
      "shooting": 60,
      "passing": 71,
      "dribbling": 72,
      "defending": 33,
      "physical": 55
    }
  },
  {
    "id": "p2245",
    "name": "Luke Southwood",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Northern Ireland",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Cheltenham Town",
    "age": 25,
    "stats": {
      "pace": 56,
      "shooting": 19,
      "passing": 43,
      "dribbling": 45,
      "defending": 11,
      "physical": 46
    }
  },
  {
    "id": "p2246",
    "name": "Cătălin Căbuz",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Romania",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "AFC Chindia",
    "age": 27,
    "stats": {
      "pace": 35,
      "shooting": 18,
      "passing": 30,
      "dribbling": 27,
      "defending": 9,
      "physical": 47
    }
  },
  {
    "id": "p2273",
    "name": "Saïdou Sow",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Guinea",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "AS Saint-Étienne",
    "age": 21,
    "stats": {
      "pace": 63,
      "shooting": 39,
      "passing": 54,
      "dribbling": 58,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p2303",
    "name": "Lee Soo Bin",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Korea Republic",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Jeonbuk Hyundai",
    "age": 23,
    "stats": {
      "pace": 56,
      "shooting": 45,
      "passing": 59,
      "dribbling": 66,
      "defending": 43,
      "physical": 60
    }
  },
  {
    "id": "p2338",
    "name": "Krzysztof Kubica",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Poland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Benevento",
    "age": 23,
    "stats": {
      "pace": 59,
      "shooting": 57,
      "passing": 56,
      "dribbling": 58,
      "defending": 47,
      "physical": 75
    }
  },
  {
    "id": "p2368",
    "name": "Danny Ward",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Huddersfield",
    "age": 32,
    "stats": {
      "pace": 66,
      "shooting": 71,
      "passing": 62,
      "dribbling": 68,
      "defending": 23,
      "physical": 73
    }
  },
  {
    "id": "p2379",
    "name": "Vincenzo Fiorillo",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 66,
    "club": "Salernitana",
    "age": 33,
    "stats": {
      "pace": 39,
      "shooting": 19,
      "passing": 27,
      "dribbling": 31,
      "defending": 9,
      "physical": 44
    }
  },
  {
    "id": "p2440",
    "name": "Dario Van den Buijs",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Belgium",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "RKC Waalwijk",
    "age": 27,
    "stats": {
      "pace": 60,
      "shooting": 58,
      "passing": 61,
      "dribbling": 57,
      "defending": 49,
      "physical": 67
    }
  },
  {
    "id": "p2505",
    "name": "Albie Morgan",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Charlton Ath",
    "age": 23,
    "stats": {
      "pace": 71,
      "shooting": 55,
      "passing": 65,
      "dribbling": 64,
      "defending": 43,
      "physical": 60
    }
  },
  {
    "id": "p2523",
    "name": "Adam Phillips",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Barnsley",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 59,
      "passing": 63,
      "dribbling": 67,
      "defending": 43,
      "physical": 61
    }
  },
  {
    "id": "p2536",
    "name": "Leo Bolgado",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Brazil",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Casa Pia AC",
    "age": 25,
    "stats": {
      "pace": 62,
      "shooting": 39,
      "passing": 46,
      "dribbling": 43,
      "defending": 53,
      "physical": 67
    }
  },
  {
    "id": "p2592",
    "name": "Dušan Kuciak",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Slovakia",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Lechia Gdańsk",
    "age": 38,
    "stats": {
      "pace": 37,
      "shooting": 19,
      "passing": 23,
      "dribbling": 30,
      "defending": 11,
      "physical": 53
    }
  },
  {
    "id": "p2605",
    "name": "Mads Sande",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FK Haugesund",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 49,
      "passing": 58,
      "dribbling": 64,
      "defending": 39,
      "physical": 65
    }
  },
  {
    "id": "p2631",
    "name": "Obed Vargas",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Sounders FC",
    "age": 18,
    "stats": {
      "pace": 71,
      "shooting": 44,
      "passing": 62,
      "dribbling": 73,
      "defending": 40,
      "physical": 58
    }
  },
  {
    "id": "p2652",
    "name": "Cao Yunding",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "China PR",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Shanghai Shenhua",
    "age": 33,
    "stats": {
      "pace": 82,
      "shooting": 63,
      "passing": 66,
      "dribbling": 75,
      "defending": 26,
      "physical": 69
    }
  },
  {
    "id": "p2672",
    "name": "Tan Long",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "China PR",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "China PR",
    "age": 35,
    "stats": {
      "pace": 76,
      "shooting": 68,
      "passing": 62,
      "dribbling": 69,
      "defending": 24,
      "physical": 72
    }
  },
  {
    "id": "p2689",
    "name": "Dirk Proper",
    "position": "CDM",
    "positions": [
      "CDM",
      "CM"
    ],
    "nationality": "Netherlands",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "N.E.C. Nijmegen",
    "age": 21,
    "stats": {
      "pace": 65,
      "shooting": 49,
      "passing": 63,
      "dribbling": 73,
      "defending": 50,
      "physical": 59
    }
  },
  {
    "id": "p2722",
    "name": "Tommy Thompson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "SJ Earthquakes",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 52,
      "passing": 59,
      "dribbling": 74,
      "defending": 44,
      "physical": 61
    }
  },
  {
    "id": "p2731",
    "name": "Juan Pérez",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "SD Huesca",
    "age": 27,
    "stats": {
      "pace": 34,
      "shooting": 24,
      "passing": 24,
      "dribbling": 25,
      "defending": 14,
      "physical": 41
    }
  },
  {
    "id": "p2759",
    "name": "Kei Kamara",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sierra Leone",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "CF Montréal",
    "age": 39,
    "stats": {
      "pace": 69,
      "shooting": 68,
      "passing": 63,
      "dribbling": 68,
      "defending": 22,
      "physical": 77
    }
  },
  {
    "id": "p2863",
    "name": "Óscar Clemente",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "UD Las Palmas",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 49,
      "passing": 69,
      "dribbling": 65,
      "defending": 31,
      "physical": 50
    }
  },
  {
    "id": "p2870",
    "name": "Enzo Basilio",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "En Avant Guingamp",
    "age": 28,
    "stats": {
      "pace": 47,
      "shooting": 22,
      "passing": 23,
      "dribbling": 35,
      "defending": 12,
      "physical": 40
    }
  },
  {
    "id": "p2906",
    "name": "Soufiane Bidaoui",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Morocco",
    "era": "Modern",
    "league": "Serie A",
    "rating": 66,
    "club": "Frosinone",
    "age": 33,
    "stats": {
      "pace": 77,
      "shooting": 61,
      "passing": 60,
      "dribbling": 79,
      "defending": 25,
      "physical": 53
    }
  },
  {
    "id": "p2907",
    "name": "Ignacio Martín Gómez",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "R. Sporting",
    "age": 21,
    "stats": {
      "pace": 70,
      "shooting": 47,
      "passing": 63,
      "dribbling": 68,
      "defending": 46,
      "physical": 60
    }
  },
  {
    "id": "p2909",
    "name": "Manuel Romero",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Paraguay",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Gral. Caballero",
    "age": 30,
    "stats": {
      "pace": 54,
      "shooting": 26,
      "passing": 43,
      "dribbling": 50,
      "defending": 47,
      "physical": 69
    }
  },
  {
    "id": "p2944",
    "name": "Patric Alejandrez",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Peru",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Sport Boys",
    "age": 31,
    "stats": {
      "pace": 79,
      "shooting": 52,
      "passing": 66,
      "dribbling": 70,
      "defending": 43,
      "physical": 64
    }
  },
  {
    "id": "p2969",
    "name": "Bernabé",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Spain",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Albacete BP",
    "age": 30,
    "stats": {
      "pace": 46,
      "shooting": 25,
      "passing": 22,
      "dribbling": 30,
      "defending": 14,
      "physical": 47
    }
  },
  {
    "id": "p3008",
    "name": "Dominik Fitz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Austria",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FK Austria Wien",
    "age": 24,
    "stats": {
      "pace": 70,
      "shooting": 65,
      "passing": 67,
      "dribbling": 75,
      "defending": 26,
      "physical": 59
    }
  },
  {
    "id": "p3069",
    "name": "Nélson da Luz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Angola",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Vitória SC",
    "age": 25,
    "stats": {
      "pace": 79,
      "shooting": 65,
      "passing": 60,
      "dribbling": 74,
      "defending": 27,
      "physical": 57
    }
  },
  {
    "id": "p3083",
    "name": "Anthony Knockaert",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Huddersfield",
    "age": 31,
    "stats": {
      "pace": 69,
      "shooting": 66,
      "passing": 67,
      "dribbling": 76,
      "defending": 30,
      "physical": 63
    }
  },
  {
    "id": "p3095",
    "name": "Uran Bislimi",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Kosovo",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "FC Lugano",
    "age": 23,
    "stats": {
      "pace": 70,
      "shooting": 51,
      "passing": 61,
      "dribbling": 66,
      "defending": 41,
      "physical": 71
    }
  },
  {
    "id": "p3113",
    "name": "Simon Tibbling",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Sarpsborg 08",
    "age": 28,
    "stats": {
      "pace": 64,
      "shooting": 54,
      "passing": 63,
      "dribbling": 70,
      "defending": 38,
      "physical": 58
    }
  },
  {
    "id": "p3136",
    "name": "Nouh Al Mousa",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Saudi Arabia",
    "era": "Modern",
    "league": "Saudi Pro League",
    "rating": 66,
    "club": "Al Fateh",
    "age": 32,
    "stats": {
      "pace": 50,
      "shooting": 50,
      "passing": 64,
      "dribbling": 65,
      "defending": 46,
      "physical": 69
    }
  },
  {
    "id": "p3167",
    "name": "Bandile Shandu",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "South Africa",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Orlando Pirates",
    "age": 28,
    "stats": {
      "pace": 75,
      "shooting": 59,
      "passing": 67,
      "dribbling": 69,
      "defending": 43,
      "physical": 67
    }
  },
  {
    "id": "p3266",
    "name": "Aimen Moueffek",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "AS Saint-Étienne",
    "age": 22,
    "stats": {
      "pace": 68,
      "shooting": 52,
      "passing": 65,
      "dribbling": 71,
      "defending": 49,
      "physical": 62
    }
  },
  {
    "id": "p3290",
    "name": "Rodrigo Gomes",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Portugal",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "SC Braga",
    "age": 20,
    "stats": {
      "pace": 79,
      "shooting": 58,
      "passing": 58,
      "dribbling": 74,
      "defending": 39,
      "physical": 56
    }
  },
  {
    "id": "p3313",
    "name": "Filip Jørgensen",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Odds BK",
    "age": 21,
    "stats": {
      "pace": 74,
      "shooting": 49,
      "passing": 61,
      "dribbling": 72,
      "defending": 42,
      "physical": 67
    }
  },
  {
    "id": "p3406",
    "name": "Jordan Marié",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Dijon FCO",
    "age": 31,
    "stats": {
      "pace": 38,
      "shooting": 53,
      "passing": 66,
      "dribbling": 67,
      "defending": 51,
      "physical": 62
    }
  },
  {
    "id": "p3423",
    "name": "Boban Nikolov",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "North Macedonia",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FCSB",
    "age": 29,
    "stats": {
      "pace": 63,
      "shooting": 59,
      "passing": 65,
      "dribbling": 66,
      "defending": 44,
      "physical": 65
    }
  },
  {
    "id": "p3433",
    "name": "Malik Tillman",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "United States",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Rangers",
    "age": 21,
    "stats": {
      "pace": 81,
      "shooting": 62,
      "passing": 60,
      "dribbling": 70,
      "defending": 21,
      "physical": 60
    }
  },
  {
    "id": "p3438",
    "name": "Finn Azaz",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Republic of Ireland",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Plymouth Argyle",
    "age": 22,
    "stats": {
      "pace": 71,
      "shooting": 63,
      "passing": 63,
      "dribbling": 72,
      "defending": 42,
      "physical": 63
    }
  },
  {
    "id": "p3466",
    "name": "Imanol",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "SD Eibar",
    "age": 23,
    "stats": {
      "pace": 67,
      "shooting": 49,
      "passing": 66,
      "dribbling": 69,
      "defending": 51,
      "physical": 58
    }
  },
  {
    "id": "p3575",
    "name": "Ismaël Doukouré",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "France",
    "era": "Rising Stars",
    "league": "Ligue 1",
    "rating": 66,
    "club": "Strasbourg",
    "age": 20,
    "stats": {
      "pace": 64,
      "shooting": 29,
      "passing": 50,
      "dribbling": 57,
      "defending": 51,
      "physical": 66
    }
  },
  {
    "id": "p3625",
    "name": "Magnus Mattsson",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Denmark",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "N.E.C. Nijmegen",
    "age": 24,
    "stats": {
      "pace": 75,
      "shooting": 61,
      "passing": 61,
      "dribbling": 75,
      "defending": 21,
      "physical": 60
    }
  },
  {
    "id": "p3648",
    "name": "Nicolás Contin",
    "position": "ST",
    "positions": [
      "ST"
    ],
    "nationality": "Argentina",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Gimnasia",
    "age": 27,
    "stats": {
      "pace": 67,
      "shooting": 61,
      "passing": 52,
      "dribbling": 63,
      "defending": 16,
      "physical": 66
    }
  },
  {
    "id": "p3653",
    "name": "Tayo Edun",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Blackburn Rovers",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 44,
      "passing": 60,
      "dribbling": 73,
      "defending": 47,
      "physical": 74
    }
  },
  {
    "id": "p3685",
    "name": "Zlatan Alomerović",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Serbia",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Jagiellonia",
    "age": 32,
    "stats": {
      "pace": 37,
      "shooting": 20,
      "passing": 26,
      "dribbling": 29,
      "defending": 9,
      "physical": 48
    }
  },
  {
    "id": "p3723",
    "name": "Daniel Batty",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Fleetwood Town",
    "age": 25,
    "stats": {
      "pace": 68,
      "shooting": 56,
      "passing": 64,
      "dribbling": 69,
      "defending": 48,
      "physical": 70
    }
  },
  {
    "id": "p3766",
    "name": "Matías Aguirregaray",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Uruguay",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Peñarol",
    "age": 34,
    "stats": {
      "pace": 67,
      "shooting": 62,
      "passing": 66,
      "dribbling": 67,
      "defending": 51,
      "physical": 68
    }
  },
  {
    "id": "p3812",
    "name": "Alessandro De Vitis",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Pisa",
    "age": 31,
    "stats": {
      "pace": 65,
      "shooting": 63,
      "passing": 62,
      "dribbling": 68,
      "defending": 46,
      "physical": 73
    }
  },
  {
    "id": "p3852",
    "name": "João Cancelo",
    "position": "RB",
    "positions": [
      "RB",
      "LB"
    ],
    "nationality": "Portugal",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 66,
    "club": "FC Bayern München",
    "age": 29,
    "stats": {
      "pace": 85,
      "shooting": 73,
      "passing": 85,
      "dribbling": 82,
      "defending": 61,
      "physical": 75
    }
  },
  {
    "id": "p3910",
    "name": "Sebastián Meza",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Argentina",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Sarmiento",
    "age": 23,
    "stats": {
      "pace": 33,
      "shooting": 19,
      "passing": 25,
      "dribbling": 27,
      "defending": 10,
      "physical": 49
    }
  },
  {
    "id": "p3951",
    "name": "Yáser Asprilla",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Colombia",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Watford",
    "age": 19,
    "stats": {
      "pace": 67,
      "shooting": 57,
      "passing": 67,
      "dribbling": 63,
      "defending": 34,
      "physical": 55
    }
  },
  {
    "id": "p3964",
    "name": "Christos Zafeiris",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Norway",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "Slavia Praha",
    "age": 20,
    "stats": {
      "pace": 77,
      "shooting": 50,
      "passing": 65,
      "dribbling": 76,
      "defending": 43,
      "physical": 75
    }
  },
  {
    "id": "p3972",
    "name": "Raúl Navas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "CD Mirandés",
    "age": 35,
    "stats": {
      "pace": 41,
      "shooting": 48,
      "passing": 58,
      "dribbling": 51,
      "defending": 51,
      "physical": 70
    }
  },
  {
    "id": "p3982",
    "name": "Mark Harris",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Wales",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Cardiff City",
    "age": 24,
    "stats": {
      "pace": 83,
      "shooting": 60,
      "passing": 60,
      "dribbling": 71,
      "defending": 29,
      "physical": 68
    }
  },
  {
    "id": "p4014",
    "name": "Alexandre Olliero",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "France",
    "era": "Modern",
    "league": "Ligue 1",
    "rating": 66,
    "club": "Stade de Reims",
    "age": 27,
    "stats": {
      "pace": 46,
      "shooting": 26,
      "passing": 21,
      "dribbling": 30,
      "defending": 13,
      "physical": 44
    }
  },
  {
    "id": "p4017",
    "name": "Jesús Meza",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Venezuela",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Est. de Mérida",
    "age": 37,
    "stats": {
      "pace": 71,
      "shooting": 65,
      "passing": 61,
      "dribbling": 73,
      "defending": 41,
      "physical": 51
    }
  },
  {
    "id": "p4050",
    "name": "Harrison Biggins",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Doncaster",
    "age": 27,
    "stats": {
      "pace": 54,
      "shooting": 53,
      "passing": 57,
      "dribbling": 68,
      "defending": 45,
      "physical": 62
    }
  },
  {
    "id": "p4109",
    "name": "Giovanni Di Lorenzo",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Italy",
    "era": "Modern",
    "league": "Serie A",
    "rating": 66,
    "club": "Napoli FC",
    "age": 30,
    "stats": {
      "pace": 85,
      "shooting": 66,
      "passing": 73,
      "dribbling": 77,
      "defending": 59,
      "physical": 81
    }
  },
  {
    "id": "p4305",
    "name": "Lukas Daschner",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Germany",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FC St. Pauli",
    "age": 24,
    "stats": {
      "pace": 73,
      "shooting": 60,
      "passing": 63,
      "dribbling": 72,
      "defending": 32,
      "physical": 65
    }
  },
  {
    "id": "p4336",
    "name": "Dimitris Limnios",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Bundesliga",
    "rating": 66,
    "club": "1. FC Köln",
    "age": 25,
    "stats": {
      "pace": 73,
      "shooting": 68,
      "passing": 64,
      "dribbling": 76,
      "defending": 25,
      "physical": 57
    }
  },
  {
    "id": "p4388",
    "name": "Grant Ward",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Bristol Rovers",
    "age": 28,
    "stats": {
      "pace": 70,
      "shooting": 59,
      "passing": 65,
      "dribbling": 68,
      "defending": 44,
      "physical": 62
    }
  },
  {
    "id": "p4404",
    "name": "William Kenndal",
    "position": "CM",
    "positions": [
      "CM",
      "CDM"
    ],
    "nationality": "Sweden",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "IFK Värnamo",
    "age": 27,
    "stats": {
      "pace": 71,
      "shooting": 47,
      "passing": 63,
      "dribbling": 68,
      "defending": 46,
      "physical": 63
    }
  },
  {
    "id": "p4431",
    "name": "Yves Bissouma",
    "position": "LB",
    "positions": [
      "LB",
      "RB"
    ],
    "nationality": "Mali",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Spurs",
    "age": 27,
    "stats": {
      "pace": 72,
      "shooting": 71,
      "passing": 74,
      "dribbling": 77,
      "defending": 61,
      "physical": 77
    }
  },
  {
    "id": "p4447",
    "name": "Josh Ruffels",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "England",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Huddersfield",
    "age": 29,
    "stats": {
      "pace": 66,
      "shooting": 49,
      "passing": 62,
      "dribbling": 67,
      "defending": 47,
      "physical": 67
    }
  },
  {
    "id": "p4482",
    "name": "Nebojša Kosović",
    "position": "CM",
    "positions": [
      "CM"
    ],
    "nationality": "Montenegro",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "Meizhou Hakka",
    "age": 28,
    "stats": {
      "pace": 67,
      "shooting": 65,
      "passing": 65,
      "dribbling": 70,
      "defending": 43,
      "physical": 49
    }
  },
  {
    "id": "p4491",
    "name": "Thorsten Kirschbaum",
    "position": "GK",
    "positions": [
      "GK"
    ],
    "nationality": "Germany",
    "era": "Legends",
    "league": "Other",
    "rating": 66,
    "club": "Jahn Regensburg",
    "age": 36,
    "stats": {
      "pace": 26,
      "shooting": 21,
      "passing": 28,
      "dribbling": 26,
      "defending": 7,
      "physical": 47
    }
  },
  {
    "id": "p4527",
    "name": "Arnau Comas",
    "position": "CDM",
    "positions": [
      "CDM"
    ],
    "nationality": "Spain",
    "era": "Rising Stars",
    "league": "Other",
    "rating": 66,
    "club": "FC Basel 1893",
    "age": 23,
    "stats": {
      "pace": 76,
      "shooting": 35,
      "passing": 54,
      "dribbling": 58,
      "defending": 50,
      "physical": 66
    }
  },
  {
    "id": "p4642",
    "name": "Christos Albanis",
    "position": "ST",
    "positions": [
      "ST",
      "LW",
      "RW"
    ],
    "nationality": "Greece",
    "era": "Modern",
    "league": "Other",
    "rating": 66,
    "club": "FC Andorra",
    "age": 28,
    "stats": {
      "pace": 76,
      "shooting": 69,
      "passing": 62,
      "dribbling": 69,
      "defending": 24,
      "physical": 61
    }
  }
];

// Merge legendary players with FC24 players, with legends sorted by rating at the top
export const fc24Players: Player[] = [...legendaryPlayers, ...fc24PlayersRaw].sort((a, b) => b.rating - a.rating);

export function getAllPlayers(): Player[] {
  return fc24Players;
}

export function getPlayersByPosition(position: string): Player[] {
  if (position === 'ALL') return fc24Players;
  return fc24Players.filter(p => p.positions.includes(position as any));
}

export function getPlayersByEra(era: string): Player[] {
  if (era === 'ALL') return fc24Players;
  return fc24Players.filter(p => p.era === era);
}

export function getPlayersByNationality(nationality: string): Player[] {
  if (nationality === 'ALL') return fc24Players;
  return fc24Players.filter(p => p.nationality === nationality);
}

export function getPlayersByLeague(league: string): Player[] {
  if (league === 'ALL') return fc24Players;
  return fc24Players.filter(p => p.league === league);
}

export function searchPlayers(query: string): Player[] {
  const lowerQuery = query.toLowerCase();
  return fc24Players.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.nationality.toLowerCase().includes(lowerQuery) ||
    (p.club && p.club.toLowerCase().includes(lowerQuery)) ||
    p.position.toLowerCase().includes(lowerQuery)
  );
}

export function filterPlayers(
  query: string,
  position: string,
  era: string,
  league: string
): Player[] {
  return fc24Players.filter(p => {
    const matchesQuery = query === '' || 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.nationality.toLowerCase().includes(query.toLowerCase()) ||
      (p.club && p.club.toLowerCase().includes(query.toLowerCase()));
    const matchesPosition = position === 'ALL' || p.positions.includes(position as any);
    const matchesEra = era === 'ALL' || p.era === era;
    const matchesLeague = league === 'ALL' || p.league === league;
    return matchesQuery && matchesPosition && matchesEra && matchesLeague;
  });
}

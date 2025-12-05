import { Formation, FormationPosition, Position } from './types';

const createPosition = (id: string, x: number, y: number, position: Position): FormationPosition => ({
  id,
  x,
  y,
  position,
});

export const formations: Formation[] = [
  {
    id: '4-3-3',
    name: '4-3-3',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('lb', 15, 70, 'LB'),
      createPosition('cb1', 35, 75, 'CB'),
      createPosition('cb2', 65, 75, 'CB'),
      createPosition('rb', 85, 70, 'RB'),
      createPosition('cm1', 30, 50, 'CM'),
      createPosition('cm2', 50, 55, 'CM'),
      createPosition('cm3', 70, 50, 'CM'),
      createPosition('lw', 15, 25, 'LW'),
      createPosition('st', 50, 15, 'ST'),
      createPosition('rw', 85, 25, 'RW'),
    ],
  },
  {
    id: '4-4-2',
    name: '4-4-2',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('lb', 15, 70, 'LB'),
      createPosition('cb1', 35, 75, 'CB'),
      createPosition('cb2', 65, 75, 'CB'),
      createPosition('rb', 85, 70, 'RB'),
      createPosition('lm', 15, 45, 'LM'),
      createPosition('cm1', 35, 50, 'CM'),
      createPosition('cm2', 65, 50, 'CM'),
      createPosition('rm', 85, 45, 'RM'),
      createPosition('st1', 35, 18, 'ST'),
      createPosition('st2', 65, 18, 'ST'),
    ],
  },
  {
    id: '3-5-2',
    name: '3-5-2',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('cb1', 25, 75, 'CB'),
      createPosition('cb2', 50, 78, 'CB'),
      createPosition('cb3', 75, 75, 'CB'),
      createPosition('lm', 10, 45, 'LM'),
      createPosition('cm1', 30, 52, 'CM'),
      createPosition('cdm', 50, 58, 'CDM'),
      createPosition('cm2', 70, 52, 'CM'),
      createPosition('rm', 90, 45, 'RM'),
      createPosition('st1', 35, 18, 'ST'),
      createPosition('st2', 65, 18, 'ST'),
    ],
  },
  {
    id: '4-2-3-1',
    name: '4-2-3-1',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('lb', 15, 70, 'LB'),
      createPosition('cb1', 35, 75, 'CB'),
      createPosition('cb2', 65, 75, 'CB'),
      createPosition('rb', 85, 70, 'RB'),
      createPosition('cdm1', 35, 55, 'CDM'),
      createPosition('cdm2', 65, 55, 'CDM'),
      createPosition('lw', 20, 35, 'LW'),
      createPosition('cam', 50, 35, 'CAM'),
      createPosition('rw', 80, 35, 'RW'),
      createPosition('st', 50, 15, 'ST'),
    ],
  },
  {
    id: '5-3-2',
    name: '5-3-2',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('lwb', 10, 60, 'LB'),
      createPosition('cb1', 25, 75, 'CB'),
      createPosition('cb2', 50, 78, 'CB'),
      createPosition('cb3', 75, 75, 'CB'),
      createPosition('rwb', 90, 60, 'RB'),
      createPosition('cm1', 30, 45, 'CM'),
      createPosition('cm2', 50, 48, 'CM'),
      createPosition('cm3', 70, 45, 'CM'),
      createPosition('st1', 35, 18, 'ST'),
      createPosition('st2', 65, 18, 'ST'),
    ],
  },
  {
    id: '4-1-4-1',
    name: '4-1-4-1',
    positions: [
      createPosition('gk', 50, 90, 'GK'),
      createPosition('lb', 15, 70, 'LB'),
      createPosition('cb1', 35, 75, 'CB'),
      createPosition('cb2', 65, 75, 'CB'),
      createPosition('rb', 85, 70, 'RB'),
      createPosition('cdm', 50, 58, 'CDM'),
      createPosition('lm', 15, 40, 'LM'),
      createPosition('cm1', 35, 42, 'CM'),
      createPosition('cm2', 65, 42, 'CM'),
      createPosition('rm', 85, 40, 'RM'),
      createPosition('st', 50, 15, 'ST'),
    ],
  },
];

export function getFormationById(id: string): Formation | undefined {
  return formations.find(f => f.id === id);
}

export function getDefaultFormation(): Formation {
  return formations[0];
}

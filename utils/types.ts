export type RootStackParamList = {
  '(tabs)': undefined;
  '(auth)': undefined;
  'modal': undefined;
  'lineup/create': { editLineup?: any } | undefined;
  'lineup/[id]': { id: string };
  'player/comparison': undefined;
  'community/create': undefined;
  'community/[id]': { id: string };
  'community/[id]/edit': { id: string };
  'community/[id]/topics': { id: string };
  'community/[id]/topics/create': { id: string };
  'community/[id]/invite': { id: string };
  'notifications': undefined;
  'formation/custom': { editFormation?: any } | undefined;
};
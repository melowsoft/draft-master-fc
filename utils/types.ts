export type RootStackParamList = {
  '(tabs)': undefined;
  '(auth)': undefined;
  'modal': undefined;
  'lineup/create': { editLineup?: any } | undefined;
  'lineup/[id]': { id: string };
  'player/comparison': undefined;
  'player-comparison': undefined;
  'community/create': undefined;
  'community/[id]': { id: string };
  'community/[id]/edit': { id: string };
  'community/[id]/topics': { id: string };
  'community/[id]/topics/create': { id: string };
  'community/[id]/invite': { id: string };
  'notifications': undefined;
  'formation/custom': { editFormation?: any } | undefined;

  CommunityDetail: { communityId: string };
  CreateCommunity: undefined;
  EditCommunity: { communityId: string };
  InviteMembers: { communityId: string; communityName?: string };
  CreateTopic: { communityId: string; communityName: string };
  TopicDetail: { topicId: string };
  LineupDetail: { lineup: any; isOwner?: boolean };
  CreateLineup: { editLineup?: any } | undefined;
  PlayerComparison: undefined;
  CustomFormation: { editFormation?: any } | undefined;
};

export type CommunitiesStackParamList = {
  Communities: undefined;
};

export type MyLineupsStackParamList = {
  MyLineups: undefined;
};

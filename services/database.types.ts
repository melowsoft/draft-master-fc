export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          avatar_url: string | null;
          avatar_color: number;
          favorite_formation: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          avatar_color?: number;
          favorite_formation?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          avatar_url?: string | null;
          avatar_color?: number;
          favorite_formation?: string;
          updated_at?: string;
        };
      };
      lineups: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          formation_id: string;
          formation_data: Record<string, unknown>;
          players_data: Record<string, unknown>;
          is_public: boolean;
          votes_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          formation_id: string;
          formation_data: Record<string, unknown>;
          players_data: Record<string, unknown>;
          is_public?: boolean;
          votes_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          name?: string;
          formation_id?: string;
          formation_data?: Record<string, unknown>;
          players_data?: Record<string, unknown>;
          is_public?: boolean;
          votes_count?: number;
          updated_at?: string;
        };
      };
      votes: {
        Row: {
          id: string;
          user_id: string;
          lineup_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lineup_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          lineup_id?: string;
        };
      };
      challenges: {
        Row: {
          id: string;
          title: string;
          description: string;
          theme: string;
          start_date: string;
          end_date: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          theme: string;
          start_date: string;
          end_date: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string;
          theme?: string;
          start_date?: string;
          end_date?: string;
          is_active?: boolean;
        };
      };
      challenge_entries: {
        Row: {
          id: string;
          challenge_id: string;
          lineup_id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          challenge_id: string;
          lineup_id: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          challenge_id?: string;
          lineup_id?: string;
          user_id?: string;
        };
      };
      favorites: {
        Row: {
          id: string;
          user_id: string;
          lineup_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lineup_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          lineup_id?: string;
        };
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type LineupRow = Database['public']['Tables']['lineups']['Row'];
export type Vote = Database['public']['Tables']['votes']['Row'];
export type ChallengeRow = Database['public']['Tables']['challenges']['Row'];
export type ChallengeEntry = Database['public']['Tables']['challenge_entries']['Row'];
export type Favorite = Database['public']['Tables']['favorites']['Row'];

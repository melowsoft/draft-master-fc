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
          winnings_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          avatar_color?: number;
          favorite_formation?: string;
          winnings_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          avatar_url?: string | null;
          avatar_color?: number;
          favorite_formation?: string;
          winnings_count?: number;
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
          is_featured: boolean;
          winner_lineup_id: string | null;
          winner_user_id: string | null;
          winner_votes_count: number | null;
          winner_resolved_at: string | null;
          winner_awarded_at: string | null;
          winner_notified_at: string | null;
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
          is_featured?: boolean;
          winner_lineup_id?: string | null;
          winner_user_id?: string | null;
          winner_votes_count?: number | null;
          winner_resolved_at?: string | null;
          winner_awarded_at?: string | null;
          winner_notified_at?: string | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          description?: string;
          theme?: string;
          start_date?: string;
          end_date?: string;
          is_active?: boolean;
          is_featured?: boolean;
          winner_lineup_id?: string | null;
          winner_user_id?: string | null;
          winner_votes_count?: number | null;
          winner_resolved_at?: string | null;
          winner_awarded_at?: string | null;
          winner_notified_at?: string | null;
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

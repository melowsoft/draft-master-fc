-- DraftMaster FC Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor > New Query)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  avatar_url TEXT,
  avatar_color INTEGER DEFAULT 0,
  favorite_formation TEXT DEFAULT '4-3-3',
  winnings_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lineups table
CREATE TABLE IF NOT EXISTS public.lineups (
  id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  formation_id TEXT NOT NULL,
  formation_data JSONB NOT NULL,
  players_data JSONB NOT NULL,
  is_public BOOLEAN DEFAULT FALSE,
  votes_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Votes table (one vote per user per lineup)
CREATE TABLE IF NOT EXISTS public.votes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lineup_id TEXT REFERENCES public.lineups(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lineup_id)
);

-- Challenges table
CREATE TABLE IF NOT EXISTS public.challenges (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  theme TEXT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE NOT NULL,
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  winner_lineup_id TEXT REFERENCES public.lineups(id) ON DELETE SET NULL,
  winner_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  winner_votes_count INTEGER,
  winner_resolved_at TIMESTAMP WITH TIME ZONE,
  winner_awarded_at TIMESTAMP WITH TIME ZONE,
  winner_notified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Challenge entries table
CREATE TABLE IF NOT EXISTS public.challenge_entries (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  challenge_id UUID REFERENCES public.challenges(id) ON DELETE CASCADE NOT NULL,
  lineup_id TEXT REFERENCES public.lineups(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(challenge_id, user_id)
);

-- Favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  lineup_id TEXT REFERENCES public.lineups(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lineup_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_lineups_user_id ON public.lineups(user_id);
CREATE INDEX IF NOT EXISTS idx_lineups_is_public ON public.lineups(is_public);
CREATE INDEX IF NOT EXISTS idx_lineups_votes_count ON public.lineups(votes_count DESC);
CREATE INDEX IF NOT EXISTS idx_votes_lineup_id ON public.votes(lineup_id);
CREATE INDEX IF NOT EXISTS idx_votes_user_id ON public.votes(user_id);
CREATE INDEX IF NOT EXISTS idx_challenges_is_active ON public.challenges(is_active);
CREATE INDEX IF NOT EXISTS idx_challenge_entries_challenge_id ON public.challenge_entries(challenge_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lineups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Profiles policies
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;
CREATE POLICY "Users can view all profiles" ON public.profiles
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Lineups policies
DROP POLICY IF EXISTS "Anyone can view public lineups" ON public.lineups;
CREATE POLICY "Anyone can view public lineups" ON public.lineups
  FOR SELECT USING (is_public = true OR auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own lineups" ON public.lineups;
CREATE POLICY "Users can insert own lineups" ON public.lineups
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own lineups" ON public.lineups;
CREATE POLICY "Users can update own lineups" ON public.lineups
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own lineups" ON public.lineups;
CREATE POLICY "Users can delete own lineups" ON public.lineups
  FOR DELETE USING (auth.uid() = user_id);

-- Votes policies
DROP POLICY IF EXISTS "Anyone can view votes" ON public.votes;
CREATE POLICY "Anyone can view votes" ON public.votes
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can vote" ON public.votes;
CREATE POLICY "Authenticated users can vote" ON public.votes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can remove own votes" ON public.votes;
CREATE POLICY "Users can remove own votes" ON public.votes
  FOR DELETE USING (auth.uid() = user_id);

-- Challenges policies
DROP POLICY IF EXISTS "Anyone can view active challenges" ON public.challenges;
CREATE POLICY "Anyone can view active challenges" ON public.challenges
  FOR SELECT USING (true);

-- Challenge entries policies
DROP POLICY IF EXISTS "Anyone can view challenge entries" ON public.challenge_entries;
CREATE POLICY "Anyone can view challenge entries" ON public.challenge_entries
  FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can enter challenges" ON public.challenge_entries;
CREATE POLICY "Authenticated users can enter challenges" ON public.challenge_entries
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Favorites policies
DROP POLICY IF EXISTS "Users can view own favorites" ON public.favorites;
CREATE POLICY "Users can view own favorites" ON public.favorites
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can add favorites" ON public.favorites;
CREATE POLICY "Users can add favorites" ON public.favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can remove own favorites" ON public.favorites;
CREATE POLICY "Users can remove own favorites" ON public.favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Function to auto-update votes_count when votes change
CREATE OR REPLACE FUNCTION update_lineup_votes_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.lineups 
    SET votes_count = votes_count + 1 
    WHERE id = NEW.lineup_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.lineups 
    SET votes_count = GREATEST(votes_count - 1, 0) 
    WHERE id = OLD.lineup_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for auto vote count
DROP TRIGGER IF EXISTS on_vote_change ON public.votes;
CREATE TRIGGER on_vote_change
  AFTER INSERT OR DELETE ON public.votes
  FOR EACH ROW EXECUTE FUNCTION update_lineup_votes_count();

-- Function to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_color, created_at, updated_at)
  VALUES (
    NEW.id,
    'User' || floor(random() * 10000)::TEXT,
    floor(random() * 3)::INTEGER,
    NOW(),
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for auto profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample challenges (optional)
INSERT INTO public.challenges (title, description, theme, start_date, end_date, is_active)
VALUES 
  ('Best XI: Premier League', 'Build your ultimate Premier League lineup', 'Premier League', NOW(), NOW() + INTERVAL '7 days', true),
  ('Legends Only', 'Create a team using only legendary players', 'Legends', NOW(), NOW() + INTERVAL '5 days', true),
  ('Under 25 Stars', 'Rising stars only - players under 25', 'Rising Stars', NOW(), NOW() + INTERVAL '10 days', true),
  ('National Pride', 'Build a lineup from a single nation', 'Nationality', NOW(), NOW() + INTERVAL '14 days', true)
ON CONFLICT DO NOTHING;

-- =============================================
-- COMMUNITIES FEATURE TABLES
-- =============================================

-- Communities table
CREATE TABLE IF NOT EXISTS public.communities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  creator_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  is_private BOOLEAN DEFAULT FALSE,
  member_count INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community memberships table
CREATE TABLE IF NOT EXISTS public.community_memberships (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  community_id UUID REFERENCES public.communities(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'pending', 'banned')),
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(community_id, user_id)
);

-- Community invitations table
CREATE TABLE IF NOT EXISTS public.community_invitations (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  community_id UUID REFERENCES public.communities(id) ON DELETE CASCADE NOT NULL,
  inviter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  invitee_username TEXT NOT NULL,
  invitee_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'revoked')),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '7 days',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for communities
CREATE INDEX IF NOT EXISTS idx_communities_creator_id ON public.communities(creator_id);
CREATE INDEX IF NOT EXISTS idx_communities_name ON public.communities(name);
CREATE INDEX IF NOT EXISTS idx_community_memberships_community_id ON public.community_memberships(community_id);
CREATE INDEX IF NOT EXISTS idx_community_memberships_user_id ON public.community_memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_community_invitations_invitee_user_id ON public.community_invitations(invitee_user_id);
CREATE INDEX IF NOT EXISTS idx_community_invitations_invitee_username ON public.community_invitations(invitee_username);
CREATE INDEX IF NOT EXISTS idx_community_invitations_community_id ON public.community_invitations(community_id);

-- Enable RLS for community tables
ALTER TABLE public.communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_invitations ENABLE ROW LEVEL SECURITY;

-- Helper function to check community membership (with SECURITY DEFINER to avoid RLS recursion)
CREATE OR REPLACE FUNCTION is_community_member(p_community_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.community_memberships 
    WHERE community_id = p_community_id AND user_id = p_user_id AND status = 'active'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if user is owner or admin
CREATE OR REPLACE FUNCTION is_community_admin(p_community_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.community_memberships 
    WHERE community_id = p_community_id AND user_id = p_user_id AND role IN ('owner', 'admin') AND status = 'active'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if user is owner
CREATE OR REPLACE FUNCTION is_community_owner(p_community_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.community_memberships 
    WHERE community_id = p_community_id AND user_id = p_user_id AND role = 'owner' AND status = 'active'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Communities policies
DROP POLICY IF EXISTS "Anyone can view public communities" ON public.communities;
CREATE POLICY "Anyone can view public communities" ON public.communities
  FOR SELECT USING (is_private = false OR is_community_member(id, auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can create communities" ON public.communities;
CREATE POLICY "Authenticated users can create communities" ON public.communities
  FOR INSERT WITH CHECK (auth.uid() = creator_id);

DROP POLICY IF EXISTS "Owners and admins can update communities" ON public.communities;
CREATE POLICY "Owners and admins can update communities" ON public.communities
  FOR UPDATE USING (is_community_admin(id, auth.uid()));

DROP POLICY IF EXISTS "Only owners can delete communities" ON public.communities;
CREATE POLICY "Only owners can delete communities" ON public.communities
  FOR DELETE USING (is_community_owner(id, auth.uid()));

-- Community memberships policies
DROP POLICY IF EXISTS "Members can view memberships of their communities" ON public.community_memberships;
CREATE POLICY "Members can view memberships of their communities" ON public.community_memberships
  FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Admins can view all memberships" ON public.community_memberships;
CREATE POLICY "Admins can view all memberships" ON public.community_memberships
  FOR SELECT USING (is_community_admin(community_id, auth.uid()));

DROP POLICY IF EXISTS "Users can join public communities" ON public.community_memberships;
CREATE POLICY "Users can join public communities" ON public.community_memberships
  FOR INSERT WITH CHECK (
    auth.uid() = user_id AND (
      NOT EXISTS (SELECT 1 FROM public.communities WHERE id = community_id AND is_private = true) OR
      EXISTS (SELECT 1 FROM public.community_invitations WHERE community_id = community_id AND invitee_user_id = auth.uid() AND status = 'accepted')
    )
  );

DROP POLICY IF EXISTS "Users can leave communities" ON public.community_memberships;
CREATE POLICY "Users can leave communities" ON public.community_memberships
  FOR DELETE USING (auth.uid() = user_id AND role != 'owner');

DROP POLICY IF EXISTS "Admins can update memberships" ON public.community_memberships;
CREATE POLICY "Admins can update memberships" ON public.community_memberships
  FOR UPDATE USING (is_community_admin(community_id, auth.uid()));

-- Community invitations policies
DROP POLICY IF EXISTS "Users can view their invitations" ON public.community_invitations;
CREATE POLICY "Users can view their invitations" ON public.community_invitations
  FOR SELECT USING (invitee_user_id = auth.uid() OR inviter_id = auth.uid() OR is_community_admin(community_id, auth.uid()));

DROP POLICY IF EXISTS "Admins can create invitations" ON public.community_invitations;
CREATE POLICY "Admins can create invitations" ON public.community_invitations
  FOR INSERT WITH CHECK (auth.uid() = inviter_id AND is_community_admin(community_id, auth.uid()));

DROP POLICY IF EXISTS "Invitees can update invitation status" ON public.community_invitations;
CREATE POLICY "Invitees can update invitation status" ON public.community_invitations
  FOR UPDATE USING (invitee_user_id = auth.uid() OR inviter_id = auth.uid());

-- Function to update member count
CREATE OR REPLACE FUNCTION update_community_member_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' AND NEW.status = 'active' THEN
    UPDATE public.communities 
    SET member_count = member_count + 1, updated_at = NOW()
    WHERE id = NEW.community_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' AND OLD.status = 'active' THEN
    UPDATE public.communities 
    SET member_count = GREATEST(member_count - 1, 0), updated_at = NOW()
    WHERE id = OLD.community_id;
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.status != 'active' AND NEW.status = 'active' THEN
      UPDATE public.communities 
      SET member_count = member_count + 1, updated_at = NOW()
      WHERE id = NEW.community_id;
    ELSIF OLD.status = 'active' AND NEW.status != 'active' THEN
      UPDATE public.communities 
      SET member_count = GREATEST(member_count - 1, 0), updated_at = NOW()
      WHERE id = NEW.community_id;
    END IF;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for member count
DROP TRIGGER IF EXISTS on_membership_change ON public.community_memberships;
CREATE TRIGGER on_membership_change
  AFTER INSERT OR DELETE OR UPDATE ON public.community_memberships
  FOR EACH ROW EXECUTE FUNCTION update_community_member_count();

-- Function to resolve invitee_user_id from username
CREATE OR REPLACE FUNCTION resolve_invitation_user_id()
RETURNS TRIGGER AS $$
BEGIN
  SELECT id INTO NEW.invitee_user_id
  FROM public.profiles
  WHERE LOWER(username) = LOWER(NEW.invitee_username);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to auto-resolve invitee
DROP TRIGGER IF EXISTS on_invitation_insert ON public.community_invitations;
CREATE TRIGGER on_invitation_insert
  BEFORE INSERT ON public.community_invitations
  FOR EACH ROW EXECUTE FUNCTION resolve_invitation_user_id();

-- =============================================
-- COMMUNITY TOPICS AND MESSAGES
-- =============================================

-- Community topics table
CREATE TABLE IF NOT EXISTS public.community_topics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  community_id UUID REFERENCES public.communities(id) ON DELETE CASCADE NOT NULL,
  creator_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  message_count INTEGER DEFAULT 1,
  last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Topic messages table
CREATE TABLE IF NOT EXISTS public.topic_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  topic_id UUID REFERENCES public.community_topics(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  body TEXT NOT NULL,
  lineup_snapshot JSONB DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add lineup_snapshot column if it doesn't exist (for existing installations)
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'topic_messages' 
    AND column_name = 'lineup_snapshot'
  ) THEN
    ALTER TABLE public.topic_messages ADD COLUMN lineup_snapshot JSONB DEFAULT NULL;
  END IF;
END $$;

-- Create indexes for topics
CREATE INDEX IF NOT EXISTS idx_community_topics_community_id ON public.community_topics(community_id);
CREATE INDEX IF NOT EXISTS idx_community_topics_last_activity ON public.community_topics(community_id, last_activity_at DESC);
CREATE INDEX IF NOT EXISTS idx_topic_messages_topic_id ON public.topic_messages(topic_id);
CREATE INDEX IF NOT EXISTS idx_topic_messages_created_at ON public.topic_messages(topic_id, created_at ASC);

-- Enable RLS for topic tables
ALTER TABLE public.community_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topic_messages ENABLE ROW LEVEL SECURITY;

-- Topics policies: Community members can view topics
DROP POLICY IF EXISTS "Community members can view topics" ON public.community_topics;
CREATE POLICY "Community members can view topics" ON public.community_topics
  FOR SELECT USING (is_community_member(community_id, auth.uid()));

-- Topics policies: Community members can create topics
DROP POLICY IF EXISTS "Community members can create topics" ON public.community_topics;
CREATE POLICY "Community members can create topics" ON public.community_topics
  FOR INSERT WITH CHECK (auth.uid() = creator_id AND is_community_member(community_id, auth.uid()));

-- Topics policies: Creators and admins can update topics
DROP POLICY IF EXISTS "Topic owners and admins can update topics" ON public.community_topics;
CREATE POLICY "Topic owners and admins can update topics" ON public.community_topics
  FOR UPDATE USING (creator_id = auth.uid() OR is_community_admin(community_id, auth.uid()));

-- Topics policies: Creators and admins can delete topics
DROP POLICY IF EXISTS "Topic owners and admins can delete topics" ON public.community_topics;
CREATE POLICY "Topic owners and admins can delete topics" ON public.community_topics
  FOR DELETE USING (creator_id = auth.uid() OR is_community_admin(community_id, auth.uid()));

-- Helper function to check topic membership
CREATE OR REPLACE FUNCTION is_topic_member(p_topic_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.community_topics t
    WHERE t.id = p_topic_id AND is_community_member(t.community_id, p_user_id)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if user is topic community admin
CREATE OR REPLACE FUNCTION is_topic_admin(p_topic_id UUID, p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.community_topics t
    WHERE t.id = p_topic_id AND is_community_admin(t.community_id, p_user_id)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Messages policies: Community members can view messages
DROP POLICY IF EXISTS "Community members can view messages" ON public.topic_messages;
CREATE POLICY "Community members can view messages" ON public.topic_messages
  FOR SELECT USING (is_topic_member(topic_id, auth.uid()));

-- Messages policies: Community members can post messages
DROP POLICY IF EXISTS "Community members can post messages" ON public.topic_messages;
CREATE POLICY "Community members can post messages" ON public.topic_messages
  FOR INSERT WITH CHECK (auth.uid() = author_id AND is_topic_member(topic_id, auth.uid()));

-- Messages policies: Authors can update their own messages
DROP POLICY IF EXISTS "Authors can update own messages" ON public.topic_messages;
CREATE POLICY "Authors can update own messages" ON public.topic_messages
  FOR UPDATE USING (author_id = auth.uid());

-- Messages policies: Authors and admins can delete messages
DROP POLICY IF EXISTS "Authors and admins can delete messages" ON public.topic_messages;
CREATE POLICY "Authors and admins can delete messages" ON public.topic_messages
  FOR DELETE USING (author_id = auth.uid() OR is_topic_admin(topic_id, auth.uid()));

-- Function to update topic message count and last activity
CREATE OR REPLACE FUNCTION update_topic_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.community_topics 
    SET message_count = message_count + 1, last_activity_at = NOW()
    WHERE id = NEW.topic_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.community_topics 
    SET message_count = GREATEST(message_count - 1, 0)
    WHERE id = OLD.topic_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for topic stats
DROP TRIGGER IF EXISTS on_message_change ON public.topic_messages;
CREATE TRIGGER on_message_change
  AFTER INSERT OR DELETE ON public.topic_messages
  FOR EACH ROW EXECUTE FUNCTION update_topic_stats();

-- =====================================================
-- NOTIFICATIONS SYSTEM (for @mentions)
-- =====================================================

-- Notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type TEXT NOT NULL DEFAULT 'mention',
  title TEXT NOT NULL,
  body TEXT,
  data JSONB DEFAULT '{}',
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for notifications
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON public.notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON public.notifications(created_at DESC);

-- Enable RLS on notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Notifications policies
DROP POLICY IF EXISTS "Users can view own notifications" ON public.notifications;
CREATE POLICY "Users can view own notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own notifications" ON public.notifications;
CREATE POLICY "Users can update own notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own notifications" ON public.notifications;
CREATE POLICY "Users can delete own notifications" ON public.notifications
  FOR DELETE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Authenticated users can create notifications" ON public.notifications;
CREATE POLICY "Authenticated users can create notifications" ON public.notifications
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE OR REPLACE FUNCTION resolve_due_challenge_winners()
RETURNS INTEGER AS $$
DECLARE
  v_challenge RECORD;
  v_winner RECORD;
  v_resolved_count INTEGER := 0;
BEGIN
  LOOP
    SELECT *
    INTO v_challenge
    FROM public.challenges
    WHERE is_active = true
      AND end_date <= NOW()
      AND winner_resolved_at IS NULL
    ORDER BY end_date ASC
    LIMIT 1
    FOR UPDATE SKIP LOCKED;

    EXIT WHEN NOT FOUND;

    SELECT
      ce.lineup_id,
      ce.user_id,
      l.votes_count,
      ce.created_at
    INTO v_winner
    FROM public.challenge_entries ce
    JOIN public.lineups l ON l.id = ce.lineup_id
    WHERE ce.challenge_id = v_challenge.id
    ORDER BY l.votes_count DESC, ce.created_at ASC, ce.lineup_id ASC
    LIMIT 1;

    UPDATE public.challenges
    SET
      is_active = false,
      winner_lineup_id = COALESCE(v_winner.lineup_id, NULL),
      winner_user_id = COALESCE(v_winner.user_id, NULL),
      winner_votes_count = COALESCE(v_winner.votes_count, NULL),
      winner_resolved_at = NOW(),
      winner_awarded_at = CASE WHEN v_winner.user_id IS NOT NULL THEN NOW() ELSE NULL END,
      winner_notified_at = CASE WHEN v_winner.user_id IS NOT NULL THEN NOW() ELSE NULL END
    WHERE id = v_challenge.id;

    IF v_winner.user_id IS NOT NULL THEN
      UPDATE public.profiles
      SET winnings_count = COALESCE(winnings_count, 0) + 1,
          updated_at = NOW()
      WHERE id = v_winner.user_id;

      INSERT INTO public.notifications (user_id, type, title, body, data)
      VALUES (
        v_winner.user_id,
        'challenge_winner',
        'You won a challenge!',
        'Tap to view your winning entry.',
        jsonb_build_object(
          'challengeId', v_challenge.id,
          'challengeTitle', v_challenge.title,
          'lineupId', v_winner.lineup_id
        )
      );
    END IF;

    v_resolved_count := v_resolved_count + 1;
  END LOOP;

  RETURN v_resolved_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Function to create mention notifications
CREATE OR REPLACE FUNCTION create_mention_notification(
  p_mentioned_user_id UUID,
  p_author_username TEXT,
  p_topic_id UUID,
  p_topic_title TEXT,
  p_community_name TEXT,
  p_message_preview TEXT
)
RETURNS UUID AS $$
DECLARE
  notification_id UUID;
BEGIN
  INSERT INTO public.notifications (user_id, type, title, body, data)
  VALUES (
    p_mentioned_user_id,
    'mention',
    p_author_username || ' mentioned you',
    p_message_preview,
    jsonb_build_object(
      'topicId', p_topic_id,
      'topicTitle', p_topic_title,
      'communityName', p_community_name,
      'authorUsername', p_author_username
    )
  )
  RETURNING id INTO notification_id;
  
  RETURN notification_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- =====================================================
-- STORAGE SETUP FOR LINEUP IMAGES
-- =====================================================
-- NOTE: Storage buckets must be created via the Supabase Dashboard.
-- Go to: Dashboard > Storage > New Bucket
-- 
-- Create a bucket named: lineup-images
-- Settings:
--   - Public bucket: YES (so images can be viewed without authentication)
--   - File size limit: 5MB
--   - Allowed MIME types: image/png, image/jpeg
--
-- After creating the bucket, add these storage policies:

-- Policy: Allow authenticated users to upload images
-- Name: authenticated_uploads
-- Allowed operation: INSERT
-- Target roles: authenticated
-- Policy definition: (auth.uid())::text = (storage.foldername(name))[1]

-- Policy: Allow public read access
-- Name: public_read
-- Allowed operation: SELECT  
-- Target roles: anon, authenticated
-- Policy definition: true

-- Alternative: Run these SQL commands after creating the bucket:
-- (Uncomment if you prefer SQL-based policy setup)

-- CREATE POLICY "Allow authenticated uploads to lineup-images" ON storage.objects
--   FOR INSERT WITH CHECK (
--     bucket_id = 'lineup-images' 
--     AND auth.role() = 'authenticated'
--   );

-- CREATE POLICY "Allow public read on lineup-images" ON storage.objects
--   FOR SELECT USING (bucket_id = 'lineup-images');

-- CREATE POLICY "Allow users to delete own images" ON storage.objects
--   FOR DELETE USING (
--     bucket_id = 'lineup-images' 
--     AND auth.uid()::text = (storage.foldername(name))[2]
--   );

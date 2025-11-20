-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create media type enum
CREATE TYPE public.media_type AS ENUM ('video', 'audio', 'image');

-- Create media table for storing metadata
CREATE TABLE public.media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  media_type media_type NOT NULL,
  file_path TEXT NOT NULL,
  thumbnail_path TEXT,
  duration INTEGER,
  category TEXT,
  order_index INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on media
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- RLS policies for media (everyone can read, only admins can write)
CREATE POLICY "Anyone can view media"
  ON public.media
  FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert media"
  ON public.media
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update media"
  ON public.media
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete media"
  ON public.media
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS policies for user_roles (admins can manage, users can view their own)
CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert roles"
  ON public.user_roles
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete roles"
  ON public.user_roles
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('videos', 'videos', true),
  ('audios', 'audios', true),
  ('images', 'images', true);

-- Storage policies for videos bucket
CREATE POLICY "Anyone can view videos"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'videos');

CREATE POLICY "Only admins can upload videos"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update videos"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete videos"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'videos' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for audios bucket
CREATE POLICY "Anyone can view audios"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'audios');

CREATE POLICY "Only admins can upload audios"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'audios' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update audios"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'audios' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete audios"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'audios' AND public.has_role(auth.uid(), 'admin'));

-- Storage policies for images bucket
CREATE POLICY "Anyone can view images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'images');

CREATE POLICY "Only admins can upload images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update images"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete images"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'images' AND public.has_role(auth.uid(), 'admin'));

-- Create trigger function for updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for media table
CREATE TRIGGER update_media_updated_at
  BEFORE UPDATE ON public.media
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();
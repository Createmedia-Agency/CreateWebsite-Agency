-- Supabase Schema for CREATE. Website

-- 1. LEADS TABLE
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    company TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    website TEXT,
    service TEXT,
    project_type TEXT,
    budget TEXT,
    message TEXT NOT NULL,
    source TEXT DEFAULT 'CREATE Website',
    status TEXT DEFAULT 'NEW', -- NEW, CONTACTED, QUALIFIED, IN_PROGRESS, CONVERTED, CLOSED
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PORTFOLIO TABLE
CREATE TABLE IF NOT EXISTS public.portfolio (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    client TEXT,
    organisation TEXT,
    category TEXT,
    division TEXT, -- CREATE. Studio, Labs, Social, Events
    description TEXT,
    brief TEXT,
    services TEXT[],
    budget TEXT,
    timeline TEXT,
    year TEXT,
    cover_image TEXT,
    gallery TEXT[],
    youtube_url TEXT,
    video_aspect_ratio TEXT DEFAULT '16:9', -- 16:9, 9:16, 1:1
    featured BOOLEAN DEFAULT false,
    published BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TEAM TABLE
CREATE TABLE IF NOT EXISTS public.team (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    bio TEXT,
    photo_url TEXT,
    social_links JSONB,
    display_order INTEGER DEFAULT 0,
    published BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. INSIGHTS / CONTENT TABLE
CREATE TABLE IF NOT EXISTS public.content (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    body TEXT,
    client TEXT,
    division TEXT,
    platform TEXT,
    content_type TEXT,
    caption TEXT,
    media_url TEXT,
    thumbnail_url TEXT,
    campaign TEXT,
    assigned_person TEXT,
    tags TEXT[],
    internal_notes TEXT,
    status TEXT DEFAULT 'DRAFT', -- IDEA, DRAFT, REVIEW, APPROVED, SCHEDULED, PUBLISHED, ARCHIVED
    visibility TEXT DEFAULT 'INTERNAL', -- INTERNAL, PUBLIC
    publish_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS) Setup
-- Enable RLS on all tables
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published portfolio, team, and public content
CREATE POLICY "Public can view published portfolio" ON public.portfolio FOR SELECT USING (published = true);
CREATE POLICY "Public can view published team" ON public.team FOR SELECT USING (published = true);
CREATE POLICY "Public can view public content" ON public.content FOR SELECT USING (visibility = 'PUBLIC' AND status = 'PUBLISHED');

-- Allow anon to insert leads
CREATE POLICY "Anyone can insert leads" ON public.leads FOR INSERT WITH CHECK (true);

-- Authenticated Admin/Owner users can do everything
CREATE POLICY "Admins have full access to leads" ON public.leads FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to portfolio" ON public.portfolio FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to team" ON public.team FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admins have full access to content" ON public.content FOR ALL USING (auth.role() = 'authenticated');

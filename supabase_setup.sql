-- Add consent tracking to leads table
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_given BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_timestamp TIMESTAMPTZ;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS consent_policy_version TEXT;

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Deny all public anon access by dropping any existing open policies.
-- The API uses the SUPABASE_SERVICE_ROLE_KEY, which automatically bypasses RLS.
-- This ensures that anonymous users on the frontend CANNOT read, insert, update, or delete.
DROP POLICY IF EXISTS "Enable insert for public" ON leads;
DROP POLICY IF EXISTS "Enable read for public" ON leads;
DROP POLICY IF EXISTS "Enable update for public" ON leads;
DROP POLICY IF EXISTS "Enable delete for public" ON leads;
DROP POLICY IF EXISTS "Enable read access for all users" ON leads;
DROP POLICY IF EXISTS "Enable insert access for all users" ON leads;

-- To verify security in the Supabase Dashboard:
-- 1. Go to Authentication -> Policies
-- 2. Verify 'leads' table shows 'Row Level Security Enabled'
-- 3. Verify there are NO active policies allowing 'anon' access.

-- Modifier les policies pour permettre l'upload à tous (page secrète)
DROP POLICY IF EXISTS "Only admins can insert media" ON public.media;
DROP POLICY IF EXISTS "Only admins can update media" ON public.media;
DROP POLICY IF EXISTS "Only admins can delete media" ON public.media;

-- Nouvelles policies ouvertes
CREATE POLICY "Anyone can insert media"
ON public.media
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Anyone can update media"
ON public.media
FOR UPDATE
TO public
USING (true);

CREATE POLICY "Anyone can delete media"
ON public.media
FOR DELETE
TO public
USING (true);
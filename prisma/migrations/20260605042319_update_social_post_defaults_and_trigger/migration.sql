-- AlterTable
ALTER TABLE "SocialPost" ALTER COLUMN "userName" SET DEFAULT 'Envios DosRuedas',
ALTER COLUMN "userAvatar" SET DEFAULT '/LogoEnviosDosRuedas.webp',
ALTER COLUMN "likes" SET DEFAULT floor(random() * 100)::integer,
ALTER COLUMN "comments" SET DEFAULT floor(random() * 50)::integer,
ALTER COLUMN "shares" SET DEFAULT floor(random() * 20)::integer;

-- Create trigger function to set userUrl based on platform
CREATE OR REPLACE FUNCTION set_social_post_user_url()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW."userUrl" IS NULL THEN
    IF NEW.platform = 'instagram' THEN
      NEW."userUrl" := 'https://www.instagram.com/enviosdosruedas/';
    ELSIF NEW.platform = 'facebook' THEN
      NEW."userUrl" := 'https://facebook.com/enviosdosruedas';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger on SocialPost BEFORE INSERT
CREATE TRIGGER trigger_set_social_post_user_url
BEFORE INSERT ON "SocialPost"
FOR EACH ROW
EXECUTE FUNCTION set_social_post_user_url();

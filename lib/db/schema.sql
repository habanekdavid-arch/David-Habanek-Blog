CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  rating NUMERIC(2, 1) NOT NULL DEFAULT 5.0,
  cat_sk TEXT NOT NULL,
  cat_en TEXT NOT NULL,
  image_url TEXT,
  title_sk TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_sk TEXT NOT NULL,
  excerpt_en TEXT NOT NULL,
  meta_sk TEXT NOT NULL,
  meta_en TEXT NOT NULL,
  place BOOLEAN NOT NULL DEFAULT false,
  city TEXT,
  address TEXT,
  hours_sk TEXT,
  hours_en TEXT,
  price TEXT,
  body_sk JSONB NOT NULL DEFAULT '[]',
  body_en JSONB NOT NULL DEFAULT '[]',
  images JSONB NOT NULL DEFAULT '[]',
  featured_order INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE articles ADD COLUMN IF NOT EXISTS images JSONB NOT NULL DEFAULT '[]';

CREATE INDEX IF NOT EXISTS articles_featured_order_idx ON articles (featured_order);

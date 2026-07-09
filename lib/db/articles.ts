import { getPool } from "@/lib/db";
import { Article, stripeForSeed } from "@/lib/content";

interface ArticleRow {
  id: number;
  slug: string;
  rating: string;
  cat_sk: string;
  cat_en: string;
  image_url: string | null;
  title_sk: string;
  title_en: string;
  excerpt_sk: string;
  excerpt_en: string;
  meta_sk: string;
  meta_en: string;
  place: boolean;
  city: string | null;
  address: string | null;
  hours_sk: string | null;
  hours_en: string | null;
  price: string | null;
  body_sk: string[];
  body_en: string[];
  images: string[];
  featured_order: number | null;
  created_at: string;
}

export interface ArticleInput {
  slug: string;
  rating: number;
  catSk: string;
  catEn: string;
  imageUrl?: string | null;
  images?: string[];
  titleSk: string;
  titleEn: string;
  excerptSk: string;
  excerptEn: string;
  metaSk: string;
  metaEn: string;
  place: boolean;
  city?: string | null;
  address?: string | null;
  hoursSk?: string | null;
  hoursEn?: string | null;
  price?: string | null;
  bodySk: string[];
  bodyEn: string[];
  featuredOrder?: number | null;
}

export interface AdminArticleListItem {
  id: number;
  slug: string;
  titleSk: string;
  titleEn: string;
  catSk: string;
  place: boolean;
  featuredOrder: number | null;
  createdAt: string;
}

function rowToArticle(row: ArticleRow): Article {
  return {
    slug: row.slug,
    rating: Number(row.rating),
    cat: { sk: row.cat_sk, en: row.cat_en },
    img: row.image_url ? "" : `foto · ${row.slug}`,
    bg: stripeForSeed(row.slug),
    imageUrl: row.image_url ?? undefined,
    images: row.images ?? [],
    title: { sk: row.title_sk, en: row.title_en },
    excerpt: { sk: row.excerpt_sk, en: row.excerpt_en },
    meta: { sk: row.meta_sk, en: row.meta_en },
    place: row.place,
    city: row.city ?? undefined,
    address: row.address ?? undefined,
    hours: row.place ? { sk: row.hours_sk ?? "", en: row.hours_en ?? "" } : undefined,
    price: row.price ?? undefined,
    body: { sk: row.body_sk ?? [], en: row.body_en ?? [] },
  };
}

export async function listFeaturedArticles(): Promise<Article[]> {
  const { rows } = await getPool().query<ArticleRow>(
    "SELECT * FROM articles ORDER BY featured_order ASC NULLS LAST, created_at DESC"
  );
  return rows.map(rowToArticle);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { rows } = await getPool().query<ArticleRow>("SELECT * FROM articles WHERE slug = $1", [slug]);
  return rows[0] ? rowToArticle(rows[0]) : null;
}

export async function listArticlesForAdmin(): Promise<AdminArticleListItem[]> {
  const { rows } = await getPool().query<ArticleRow>(
    "SELECT * FROM articles ORDER BY featured_order ASC NULLS LAST, created_at DESC"
  );
  return rows.map((r) => ({
    id: r.id,
    slug: r.slug,
    titleSk: r.title_sk,
    titleEn: r.title_en,
    catSk: r.cat_sk,
    place: r.place,
    featuredOrder: r.featured_order,
    createdAt: r.created_at,
  }));
}

export async function getArticleForAdmin(id: number): Promise<(ArticleInput & { id: number }) | null> {
  const { rows } = await getPool().query<ArticleRow>("SELECT * FROM articles WHERE id = $1", [id]);
  const row = rows[0];
  if (!row) return null;
  return {
    id: row.id,
    slug: row.slug,
    rating: Number(row.rating),
    catSk: row.cat_sk,
    catEn: row.cat_en,
    imageUrl: row.image_url,
    images: row.images ?? [],
    titleSk: row.title_sk,
    titleEn: row.title_en,
    excerptSk: row.excerpt_sk,
    excerptEn: row.excerpt_en,
    metaSk: row.meta_sk,
    metaEn: row.meta_en,
    place: row.place,
    city: row.city,
    address: row.address,
    hoursSk: row.hours_sk,
    hoursEn: row.hours_en,
    price: row.price,
    bodySk: row.body_sk ?? [],
    bodyEn: row.body_en ?? [],
    featuredOrder: row.featured_order,
  };
}

export async function createArticle(input: ArticleInput): Promise<number> {
  const { rows } = await getPool().query<{ id: number }>(
    `INSERT INTO articles
      (slug, rating, cat_sk, cat_en, image_url, title_sk, title_en, excerpt_sk, excerpt_en,
       meta_sk, meta_en, place, city, address, hours_sk, hours_en, price, body_sk, body_en, images, featured_order)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)
     RETURNING id`,
    [
      input.slug,
      input.rating,
      input.catSk,
      input.catEn,
      input.imageUrl ?? null,
      input.titleSk,
      input.titleEn,
      input.excerptSk,
      input.excerptEn,
      input.metaSk,
      input.metaEn,
      input.place,
      input.city ?? null,
      input.address ?? null,
      input.hoursSk ?? null,
      input.hoursEn ?? null,
      input.price ?? null,
      JSON.stringify(input.bodySk),
      JSON.stringify(input.bodyEn),
      JSON.stringify(input.images ?? []),
      input.featuredOrder ?? null,
    ]
  );
  return rows[0].id;
}

export async function updateArticle(id: number, input: ArticleInput): Promise<void> {
  await getPool().query(
    `UPDATE articles SET
       slug = $1, rating = $2, cat_sk = $3, cat_en = $4, image_url = $5,
       title_sk = $6, title_en = $7, excerpt_sk = $8, excerpt_en = $9,
       meta_sk = $10, meta_en = $11, place = $12, city = $13, address = $14,
       hours_sk = $15, hours_en = $16, price = $17, body_sk = $18, body_en = $19,
       images = $20, featured_order = $21, updated_at = now()
     WHERE id = $22`,
    [
      input.slug,
      input.rating,
      input.catSk,
      input.catEn,
      input.imageUrl ?? null,
      input.titleSk,
      input.titleEn,
      input.excerptSk,
      input.excerptEn,
      input.metaSk,
      input.metaEn,
      input.place,
      input.city ?? null,
      input.address ?? null,
      input.hoursSk ?? null,
      input.hoursEn ?? null,
      input.price ?? null,
      JSON.stringify(input.bodySk),
      JSON.stringify(input.bodyEn),
      JSON.stringify(input.images ?? []),
      input.featuredOrder ?? null,
      id,
    ]
  );
}

export async function deleteArticle(id: number): Promise<void> {
  await getPool().query("DELETE FROM articles WHERE id = $1", [id]);
}

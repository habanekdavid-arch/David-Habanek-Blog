import { getPool } from "../lib/db";
import { ARTICLES, FEATURED_ORDER } from "../lib/content";
import { createArticle } from "../lib/db/articles";

async function main() {
  const pool = getPool();
  const { rows } = await pool.query<{ count: string }>("SELECT count(*)::text FROM articles");
  if (Number(rows[0].count) > 0) {
    console.log("articles table is not empty, skipping seed.");
    await pool.end();
    return;
  }

  for (const a of ARTICLES) {
    const featuredOrder = FEATURED_ORDER.includes(a.slug) ? FEATURED_ORDER.indexOf(a.slug) : null;
    await createArticle({
      slug: a.slug,
      rating: a.rating,
      catSk: a.cat.sk,
      catEn: a.cat.en,
      imageUrl: null,
      titleSk: a.title.sk,
      titleEn: a.title.en,
      excerptSk: a.excerpt.sk,
      excerptEn: a.excerpt.en,
      metaSk: a.meta.sk,
      metaEn: a.meta.en,
      place: a.place,
      city: a.city ?? null,
      address: a.address ?? null,
      hoursSk: a.hours?.sk ?? null,
      hoursEn: a.hours?.en ?? null,
      price: a.price ?? null,
      bodySk: a.body.sk,
      bodyEn: a.body.en,
      featuredOrder,
    });
    console.log(`seeded: ${a.slug}`);
  }

  await pool.end();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

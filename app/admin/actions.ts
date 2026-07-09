"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { auth, ADMIN_EMAIL } from "@/lib/auth";
import { ALL_CATEGORIES } from "@/lib/content";
import { createArticle, updateArticle, deleteArticle, ArticleInput } from "@/lib/db/articles";

async function requireAdmin() {
  const session = await auth();
  if (session?.user?.email !== ADMIN_EMAIL) {
    throw new Error("Unauthorized");
  }
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

function slugify(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseImages(raw: FormDataEntryValue | null): string[] {
  if (typeof raw !== "string" || !raw.trim()) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((u): u is string => typeof u === "string" && u.trim() !== "") : [];
  } catch {
    return [];
  }
}

function parseForm(formData: FormData): ArticleInput {
  const catIndex = Number(formData.get("categoryIndex") ?? 0);
  const cat = ALL_CATEGORIES[catIndex] ?? ALL_CATEGORIES[0];
  const place = formData.get("place") === "on";
  const featuredOrderRaw = String(formData.get("featuredOrder") ?? "").trim();

  return {
    slug: slugify(String(formData.get("slug") ?? "")),
    rating: Number(formData.get("rating") ?? 5),
    catSk: cat.sk,
    catEn: cat.en,
    imageUrl: String(formData.get("imageUrl") ?? "").trim() || null,
    images: parseImages(formData.get("images")),
    titleSk: String(formData.get("titleSk") ?? "").trim(),
    titleEn: String(formData.get("titleEn") ?? "").trim(),
    excerptSk: String(formData.get("excerptSk") ?? "").trim(),
    excerptEn: String(formData.get("excerptEn") ?? "").trim(),
    metaSk: String(formData.get("metaSk") ?? "").trim(),
    metaEn: String(formData.get("metaEn") ?? "").trim(),
    place,
    city: place ? String(formData.get("city") ?? "").trim() || null : null,
    address: place ? String(formData.get("address") ?? "").trim() || null : null,
    hoursSk: place ? String(formData.get("hoursSk") ?? "").trim() || null : null,
    hoursEn: place ? String(formData.get("hoursEn") ?? "").trim() || null : null,
    price: place ? String(formData.get("price") ?? "").trim() || null : null,
    bodySk: splitParagraphs(String(formData.get("bodySk") ?? "")),
    bodyEn: splitParagraphs(String(formData.get("bodyEn") ?? "")),
    featuredOrder: featuredOrderRaw === "" ? null : Number(featuredOrderRaw),
  };
}

export async function createArticleAction(formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  await createArticle(input);
  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateArticleAction(id: number, formData: FormData) {
  await requireAdmin();
  const input = parseForm(formData);
  await updateArticle(id, input);
  revalidatePath("/");
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteArticleAction(id: number, slug: string) {
  await requireAdmin();
  await deleteArticle(id);
  revalidatePath("/");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin");
  redirect("/admin");
}

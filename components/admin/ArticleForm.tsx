"use client";

import { useState } from "react";
import { ALL_CATEGORIES } from "@/lib/content";
import { ArticleInput } from "@/lib/db/articles";
import ImageUploadField from "./ImageUploadField";
import MultiImageUploadField from "./MultiImageUploadField";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid rgba(20,18,15,.16)",
  borderRadius: 8,
  padding: "9px 12px",
  fontFamily: "inherit",
  fontSize: 14,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12.5,
  fontWeight: 600,
  color: "#6E6960",
  marginBottom: 5,
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

export default function ArticleForm({
  initial,
  action,
  deleteAction,
}: {
  initial?: (ArticleInput & { id: number }) | null;
  action: (formData: FormData) => void;
  deleteAction?: (formData: FormData) => void;
}) {
  const initialCatIndex = initial ? ALL_CATEGORIES.findIndex((c) => c.sk === initial.catSk) : 0;
  const [place, setPlace] = useState(initial?.place ?? false);

  return (
    <form action={action} style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 640 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Slug (url, napr. moj-clanok)">
          <input name="slug" required defaultValue={initial?.slug} style={inputStyle} />
        </Field>
        <Field label="Kategória">
          <select name="categoryIndex" defaultValue={initialCatIndex >= 0 ? initialCatIndex : 0} style={inputStyle}>
            {ALL_CATEGORIES.map((c, i) => (
              <option key={i} value={i}>
                {c.sk} / {c.en}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Hodnotenie (0–5, po 0,5)">
          <input name="rating" type="number" min={0} max={5} step={0.5} required defaultValue={initial?.rating ?? 5} style={inputStyle} />
        </Field>
        <Field label="Poradie na homepage (prázdne = podľa dátumu)">
          <input name="featuredOrder" type="number" defaultValue={initial?.featuredOrder ?? ""} style={inputStyle} />
        </Field>
      </div>

      <Field label="Titulná fotka">
        <ImageUploadField name="imageUrl" defaultValue={initial?.imageUrl ?? undefined} />
      </Field>

      <Field label="Ďalšie fotky v článku">
        <MultiImageUploadField name="images" defaultValue={initial?.images ?? []} />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Názov (SK)">
          <input name="titleSk" required defaultValue={initial?.titleSk} style={inputStyle} />
        </Field>
        <Field label="Title (EN)">
          <input name="titleEn" required defaultValue={initial?.titleEn} style={inputStyle} />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Perex (SK)">
          <textarea name="excerptSk" required rows={2} defaultValue={initial?.excerptSk} style={inputStyle} />
        </Field>
        <Field label="Excerpt (EN)">
          <textarea name="excerptEn" required rows={2} defaultValue={initial?.excerptEn} style={inputStyle} />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <Field label="Meta text (SK), napr. 8 min · Bratislava">
          <input name="metaSk" required defaultValue={initial?.metaSk} style={inputStyle} />
        </Field>
        <Field label="Meta text (EN)">
          <input name="metaEn" required defaultValue={initial?.metaEn} style={inputStyle} />
        </Field>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600 }}>
        <input type="checkbox" name="place" checked={place} onChange={(e) => setPlace(e.target.checked)} />
        Toto je podnik/miesto (zobrazí mapku a adresu)
      </label>

      {place && (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, background: "#F3F1EC", borderRadius: 12, padding: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Mesto">
              <input name="city" defaultValue={initial?.city ?? ""} style={inputStyle} />
            </Field>
            <Field label="Cenová úroveň (napr. €€)">
              <input name="price" defaultValue={initial?.price ?? ""} style={inputStyle} />
            </Field>
          </div>
          <Field label="Adresa">
            <input name="address" defaultValue={initial?.address ?? ""} style={inputStyle} />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            <Field label="Otváracie hodiny (SK)">
              <input name="hoursSk" defaultValue={initial?.hoursSk ?? ""} style={inputStyle} />
            </Field>
            <Field label="Opening hours (EN)">
              <input name="hoursEn" defaultValue={initial?.hoursEn ?? ""} style={inputStyle} />
            </Field>
          </div>
        </div>
      )}

      <Field label="Text článku (SK) — odseky oddeľuj prázdnym riadkom">
        <textarea name="bodySk" required rows={8} defaultValue={initial?.bodySk?.join("\n\n")} style={inputStyle} />
      </Field>
      <Field label="Article body (EN) — separate paragraphs with a blank line">
        <textarea name="bodyEn" required rows={8} defaultValue={initial?.bodyEn?.join("\n\n")} style={inputStyle} />
      </Field>

      <div style={{ display: "flex", gap: 12, justifyContent: "space-between" }}>
        <button
          type="submit"
          style={{
            border: "none",
            cursor: "pointer",
            borderRadius: 999,
            padding: "12px 22px",
            fontFamily: "inherit",
            fontWeight: 600,
            fontSize: 14,
            background: "#1F8A5B",
            color: "#fff",
          }}
        >
          {initial ? "Uložiť zmeny" : "Vytvoriť článok"}
        </button>
        {deleteAction && (
          <button
            formAction={deleteAction}
            style={{
              border: "1px solid rgba(178,38,30,.4)",
              cursor: "pointer",
              borderRadius: 999,
              padding: "12px 22px",
              fontFamily: "inherit",
              fontWeight: 600,
              fontSize: 14,
              background: "#fff",
              color: "#B3261E",
            }}
          >
            Vymazať článok
          </button>
        )}
      </div>
    </form>
  );
}

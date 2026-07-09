"use client";

import { useState } from "react";
import { upload } from "@vercel/blob/client";

export default function MultiImageUploadField({ name, defaultValue }: { name: string; defaultValue?: string[] }) {
  const [urls, setUrls] = useState<string[]>(defaultValue ?? []);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;
    setUploading(true);
    setError("");
    try {
      const uploaded: string[] = [];
      for (const file of files) {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/admin/upload",
        });
        uploaded.push(blob.url);
      }
      setUrls((prev) => [...prev, ...uploaded]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  function removeAt(index: number) {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input type="hidden" name={name} value={JSON.stringify(urls)} />
      <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={uploading} />
      {uploading && <p style={{ fontSize: 13, color: "#6E6960" }}>Nahrávam…</p>}
      {error && <p style={{ fontSize: 13, color: "#B3261E" }}>{error}</p>}
      {urls.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
          {urls.map((url, i) => (
            <div key={url + i} style={{ position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- admin-only preview of an already-uploaded, arbitrary-origin blob URL */}
              <img src={url} alt="" style={{ width: 110, height: 110, objectFit: "cover", borderRadius: 8, display: "block" }} />
              <button
                type="button"
                onClick={() => removeAt(i)}
                aria-label="Odstrániť fotku"
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "none",
                  background: "#16140F",
                  color: "#fff",
                  fontSize: 13,
                  lineHeight: "22px",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

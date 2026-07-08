"use client";

import { useState } from "react";
import { upload } from "@vercel/blob/client";

export default function ImageUploadField({ name, defaultValue }: { name: string; defaultValue?: string }) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/admin/upload",
      });
      setUrl(blob.url);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <input type="hidden" name={name} value={url} />
      <input type="file" accept="image/*" onChange={handleFile} disabled={uploading} />
      {uploading && <p style={{ fontSize: 13, color: "#6E6960" }}>Nahrávam…</p>}
      {error && <p style={{ fontSize: 13, color: "#B3261E" }}>{error}</p>}
      {url && !uploading && (
        // eslint-disable-next-line @next/next/no-img-element -- admin-only preview of an already-uploaded, arbitrary-origin blob URL
        <img src={url} alt="" style={{ maxWidth: 240, borderRadius: 8, marginTop: 8, display: "block" }} />
      )}
    </div>
  );
}

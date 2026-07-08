import { starColors } from "@/lib/content";

export default function StarRow({ rating, size = 15, gap = 2 }: { rating: number; size?: number; gap?: number }) {
  const colors = starColors(rating);
  return (
    <div style={{ display: "flex", gap }}>
      {colors.map((color, i) => (
        <span key={i} style={{ fontSize: size, lineHeight: 1, color }}>
          ★
        </span>
      ))}
    </div>
  );
}

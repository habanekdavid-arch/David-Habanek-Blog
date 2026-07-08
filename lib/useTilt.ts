"use client";

import { useEffect, useRef } from "react";

export const TILT_STRENGTH = 16;

export function useTilt<TCard extends HTMLElement = HTMLDivElement, TLayer extends HTMLElement = HTMLDivElement>(
  strength: number = TILT_STRENGTH
) {
  const cardRef = useRef<TCard | null>(null);
  const layerRef = useRef<TLayer | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const layer = layerRef.current;

    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform .08s linear";
      el.style.transform = `rotateY(${px * strength}deg) rotateX(${-py * strength}deg) translateZ(0)`;
      if (layer) {
        layer.style.transition = "transform .08s linear";
        layer.style.transform = `translate3d(${px * -20}px, ${py * -20}px, 46px)`;
      }
    };
    const leave = () => {
      el.style.transition = "transform .55s cubic-bezier(.2,.8,.2,1)";
      el.style.transform = "rotateX(0) rotateY(0)";
      if (layer) {
        layer.style.transition = "transform .55s cubic-bezier(.2,.8,.2,1)";
        layer.style.transform = "translate3d(0,0,0)";
      }
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return { cardRef, layerRef };
}

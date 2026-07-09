"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

interface CategoryFilterContextValue {
  selected: string[];
  toggle: (catKey: string) => void;
  isSelected: (catKey: string) => boolean;
}

const CategoryFilterContext = createContext<CategoryFilterContextValue | null>(null);

export function CategoryFilterProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const value = useMemo<CategoryFilterContextValue>(() => {
    const toggle = (catKey: string) =>
      setSelected((prev) => (prev.includes(catKey) ? prev.filter((c) => c !== catKey) : [...prev, catKey]));
    return {
      selected,
      toggle,
      isSelected: (catKey: string) => selected.includes(catKey),
    };
  }, [selected]);

  return <CategoryFilterContext.Provider value={value}>{children}</CategoryFilterContext.Provider>;
}

export function useCategoryFilter(): CategoryFilterContextValue {
  const ctx = useContext(CategoryFilterContext);
  if (!ctx) throw new Error("useCategoryFilter must be used within a CategoryFilterProvider");
  return ctx;
}

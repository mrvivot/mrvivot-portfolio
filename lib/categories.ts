import type { BlogCategory } from "./blog";

export const CATEGORY_LABELS: Record<BlogCategory, { es: string; en: string }> = {
  ux: { es: "UX", en: "UX" },
  producto: { es: "Producto", en: "Product" },
  filosofia: { es: "Filosofía", en: "Philosophy" },
  docencia: { es: "Docencia", en: "Teaching" },
};

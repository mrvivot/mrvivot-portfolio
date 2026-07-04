"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import type { BlogPostMeta } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  variant?: "default" | "featured";
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const { lang } = useLanguage();

  const title = post.title[lang];
  const description = post.description[lang];

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "es" ? "es-AR" : "en-US",
    { day: "numeric", month: "short", year: "numeric" }
  );

  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/blog/${post.slug}`}
      aria-label={`${title} — ${post.category.join(", ")}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent"
    >
      <div
        className={`relative overflow-hidden bg-surface ${
          isFeatured ? "h-40 md:h-56" : "h-28"
        }`}
      >
        {/* placeholder: reemplazar por next/image cuando haya coverImage real */}
        <div className="flex h-full w-full items-center justify-center text-text-secondary opacity-40 transition-transform duration-200 group-hover:scale-[1.03]">
          <span className="text-xs">imagen</span>
        </div>
      </div>

      <div className={isFeatured ? "p-5" : "p-3.5"}>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {post.category.map((cat) => (
            <span
              key={cat}
              className="rounded-md px-2 py-0.5 text-[11px] text-accent"
              style={{ backgroundColor: "rgba(45,204,143,0.15)" }}
            >
              {cat}
            </span>
          ))}
        </div>

        <h3
          className={`text-text-primary font-medium leading-snug ${
            isFeatured ? "mb-2 text-lg md:text-xl" : "mb-1.5 text-sm"
          }`}
        >
          {title}
        </h3>

        {isFeatured && (
          <p className="mb-2.5 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        )}

        <p className="text-xs text-text-secondary opacity-70">
          {formattedDate} · {post.readingTime} min
        </p>
      </div>
    </Link>
  );
}

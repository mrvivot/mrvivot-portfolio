"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { BlogPostMeta } from "@/lib/blog";
import { CATEGORY_LABELS } from "@/lib/categories";

const MotionLink = motion.create(Link);

interface BlogCardProps {
  post: BlogPostMeta;
  variant?: "default" | "featured";
}

export default function BlogCard({ post, variant = "default" }: BlogCardProps) {
  const { lang } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const title = post.title[lang];
  const description = post.description[lang];

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "es" ? "es-AR" : "en-US",
    { day: "numeric", month: "short", year: "numeric" }
  );

  const isFeatured = variant === "featured";
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionLink
      href={`/blog/${post.slug}`}
      aria-label={`${title} — ${post.category.join(", ")}`}
      className="group block overflow-hidden rounded-xl border border-border bg-surface transition-colors hover-fine:border-accent"
      whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.1 }}
    >
      <div
        className={`relative overflow-hidden bg-surface ${
          isFeatured ? "h-40 md:h-56" : "h-28"
        }`}
      >
        {!imgError ? (
          <Image
            src={post.coverImage}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full" style={{ backgroundColor: "var(--surface)" }} />
        )}
      </div>

      <div className={isFeatured ? "p-5" : "p-3.5"}>
        <div className="mb-2 flex flex-wrap gap-1.5">
          {post.category.map((cat) => (
            <span
              key={cat}
              className="rounded-md px-2 py-0.5 text-[11px] text-accent-chip"
              style={{ backgroundColor: "rgba(45,204,143,0.15)" }}
            >
              {CATEGORY_LABELS[cat][lang]}
            </span>
          ))}
        </div>

        <h3
          className={`text-text-primary font-medium leading-snug ${
            isFeatured ? "mb-2" : "mb-1.5"
          }`}
          style={{ fontSize: "20px" }}
        >
          {title}
        </h3>

        {isFeatured && (
          <p className="mb-2.5 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        )}

        <p className="text-[11px] text-text-secondary">
          {formattedDate} · {post.readingTime} min
        </p>
      </div>
    </MotionLink>
  );
}

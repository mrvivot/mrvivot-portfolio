'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/lib/LanguageContext"
import type { BlogPostMeta } from "@/lib/blog"

interface Props {
  post: BlogPostMeta
  children: React.ReactNode
}

export default function BlogPostClient({ post, children }: Props) {
  const { lang } = useLanguage()
  const [imgError, setImgError] = useState(false)

  const title = post.title[lang]
  const description = post.description[lang]

  const formattedDate = new Date(post.date).toLocaleDateString(
    lang === "es" ? "es-AR" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  )

  return (
    <main
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        paddingTop: "80px",
        paddingBottom: "96px",
        paddingLeft: "clamp(24px, 5vw, 48px)",
        paddingRight: "clamp(24px, 5vw, 48px)",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "680px", marginBottom: "48px" }}>
        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "20px" }}>
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

        <h1
          className="text-text-primary"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          {title}
        </h1>

        <p
          className="text-text-secondary"
          style={{ fontSize: "17px", lineHeight: 1.6, marginBottom: "16px" }}
        >
          {description}
        </p>

        <p className="text-text-secondary" style={{ fontSize: "13px" }}>
          {formattedDate} · {post.readingTime} min
        </p>

        {lang === "en" && (
          <p
            className="text-text-secondary"
            style={{
              fontSize: "13px",
              marginTop: "16px",
              padding: "10px 14px",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            This article is available in Spanish only.
          </p>
        )}
      </div>

      {/* Cover image */}
      <div
        style={{
          maxWidth: "680px",
          marginBottom: "48px",
          borderRadius: "16px",
          overflow: "hidden",
          position: "relative",
          aspectRatio: "16/9",
          backgroundColor: "var(--surface)",
        }}
      >
        {!imgError && (
          <Image
            src={post.coverImage}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* MDX body */}
      <div className="mdx-prose" style={{ maxWidth: "680px" }}>
        {children}
        <div className="mt-10 border-t border-border pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            {lang === "es" ? "Ver más artículos" : "Read more articles"} →
          </Link>
        </div>
      </div>
    </main>
  )
}

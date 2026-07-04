import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogCategory = "ux" | "producto" | "filosofia" | "docencia";

export interface BlogPostMeta {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  date: string;
  category: BlogCategory[];
  coverImage: string;
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function getSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    ...(data as BlogPostMeta),
    slug,
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getSlugs()
    .map((slug) => {
      const { content, ...meta } = getPost(slug);
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getFeaturedPost(): BlogPostMeta {
  return getAllPosts()[0];
}

export function getRemainingPosts(): BlogPostMeta[] {
  return getAllPosts().slice(1);
}

export function getPostsByCategory(category: BlogCategory): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category.includes(category));
}

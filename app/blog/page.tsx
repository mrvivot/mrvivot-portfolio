import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/sections/BlogCard";

export const metadata = {
  title: "Blog | Manuel Rojo Vivot",
  description: "Notas sobre UX/UI, producto, filosofía y docencia.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="px-6 md:px-12 pt-12 md:pt-24 pb-24">
      <h1
        className="mb-10 text-text-primary font-bold"
        style={{ fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.1 }}
      >
        Blog
      </h1>

      {posts.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}

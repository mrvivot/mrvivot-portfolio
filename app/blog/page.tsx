import { getFeaturedPost, getRemainingPosts } from "@/lib/blog";
import BlogCard from "@/components/sections/BlogCard";

export const metadata = {
  title: "Blog | Manuel Rojo Vivot",
  description: "Notas sobre UX/UI, producto, filosofía y docencia.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const remaining = getRemainingPosts();

  return (
    <main className="px-6 md:px-12 pt-12 md:pt-24 pb-24">
      <h1 className="mb-10 text-2xl font-medium text-text-primary md:text-3xl">
        Blog
      </h1>

      {featured && (
        <div className="mb-10">
          <BlogCard post={featured} variant="featured" />
        </div>
      )}

      {remaining.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {remaining.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}

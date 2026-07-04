import { notFound } from "next/navigation"
import { getAllPosts, getPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import BlogPostClient from "@/components/sections/BlogPostClient"

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const post = getPost(slug)
    return {
      title: `${post.title.es} | Manuel Rojo Vivot`,
      description: post.description.es,
      openGraph: {
        title: post.title.es,
        description: post.description.es,
        url: `https://www.mrvivot.com/blog/${post.slug}`,
        siteName: "Manuel Rojo Vivot",
        images: [{ url: post.coverImage, width: 1200, height: 630 }],
        locale: "es_AR",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.es,
        description: post.description.es,
        images: [post.coverImage],
      },
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  return (
    <BlogPostClient post={post}>
      <MDXRemote source={post.content} />
    </BlogPostClient>
  )
}

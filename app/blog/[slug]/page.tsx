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

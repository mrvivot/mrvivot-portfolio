import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'
import { getAllPosts } from '@/lib/blog'

const baseUrl = 'https://www.mrvivot.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['', '/work', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects()
    .filter((project) => !project.password)
    .map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
    }))

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}

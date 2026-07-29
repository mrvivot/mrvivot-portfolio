import { MetadataRoute } from 'next'
import { getAllProjects } from '@/lib/projects'

export default function robots(): MetadataRoute.Robots {
  const protectedRoutes = getAllProjects()
    .filter((project) => project.password)
    .map((project) => `/work/${project.slug}`)

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: protectedRoutes,
    },
    sitemap: 'https://www.mrvivot.com/sitemap.xml',
  }
}

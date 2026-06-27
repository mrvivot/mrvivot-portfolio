import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDir = path.join(process.cwd(), 'content/projects')

export interface Project {
  slug: string
  title?: string
  titleEn?: string
  category?: string
  categoryEn?: string
  description?: string
  descriptionEn?: string
  year?: string
  client?: string
  role?: string
  password?: boolean
  comingSoon?: boolean
  coverImage?: string
  coverColor?: string
  order?: number
  next?: string
  metric?: string
  metricLabel?: string
  metricLabelEn?: string
  content: string
  [key: string]: any
}

export function getProject(slug: string): Project {
  const filePath = path.join(projectsDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { ...data, content, slug }
}

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace('.mdx', '')
      return getProject(slug)
    })
}

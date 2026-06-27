import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDir = path.join(process.cwd(), 'content/projects')

export function getProject(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { ...data, content, slug }
}

export function getAllProjects() {
  const files = fs.readdirSync(projectsDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(f => {
      const slug = f.replace('.mdx', '')
      return getProject(slug)
    })
}

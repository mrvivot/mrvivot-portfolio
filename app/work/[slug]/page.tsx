import { getProject, getAllProjects } from '@/lib/projects'
import ProjectClient from './ProjectClient'

export function generateStaticParams() {
  return getAllProjects().map((p: any) => ({ slug: String(p.slug) }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  let nextProject = null
  if (project.next) {
    try {
      nextProject = getProject(project.next as string)
    } catch {}
  }

  return <ProjectClient project={project as any} nextProject={nextProject as any} />
}

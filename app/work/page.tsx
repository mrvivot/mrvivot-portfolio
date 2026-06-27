import { getAllProjects } from '@/lib/projects'
import WorkPageClient from '@/components/sections/WorkPageClient'

export default function WorkPage() {
  const projects = getAllProjects().sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
  return <WorkPageClient projects={projects} />
}

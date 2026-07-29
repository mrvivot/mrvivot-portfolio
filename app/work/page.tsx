import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/projects'
import WorkPageClient from '@/components/sections/WorkPageClient'

export const metadata: Metadata = {
  title: 'Todos los proyectos | Manuel Rojo Vivot',
  description: 'Diseño de producto, UX/UI y desarrollo front-end.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Todos los proyectos | Manuel Rojo Vivot',
    description: 'Diseño de producto, UX/UI y desarrollo front-end.',
    url: 'https://www.mrvivot.com/work',
  },
}

export default function WorkPage() {
  const projects = getAllProjects().sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
  return <WorkPageClient projects={projects} />
}

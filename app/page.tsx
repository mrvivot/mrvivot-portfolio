import type { Metadata } from 'next'
import { getAllProjects } from '@/lib/projects'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Manuel Rojo Vivot — Product & UX Designer',
  description:
    'Diseño experiencias digitales que conectan usuarios con negocios reales.',
  openGraph: {
    title: 'Manuel Rojo Vivot — Product & UX Designer',
    description:
      'Diseño experiencias digitales que conectan usuarios con negocios reales.',
    url: 'https://www.mrvivot.com',
  },
}

export default function Home() {
  const projects = getAllProjects()
    .filter(p => p.homeOrder != null)
    .sort((a, b) => (a.homeOrder ?? 99) - (b.homeOrder ?? 99))

  return (
    <main>
      <Hero />
      <Portfolio projects={projects} />
      <About />
      <Contact />
    </main>
  )
}

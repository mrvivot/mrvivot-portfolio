import { getAllProjects } from '@/lib/projects'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

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

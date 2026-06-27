import { getAllProjects } from '@/lib/projects'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  const projects = getAllProjects()
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
    .slice(0, 3)

  return (
    <main>
      <Hero />
      <Portfolio projects={projects} />
      <About />
      <Contact />
    </main>
  )
}

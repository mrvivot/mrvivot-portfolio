import { getAllProjects } from '@/lib/projects'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

// Sin metadata propia: title, description y openGraph (incl. la og:image
// generada por app/opengraph-image.tsx) se heredan de app/layout.tsx sin
// pisarlos. Declararlos acá duplicaba layout.tsx y rompía el og:image.

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

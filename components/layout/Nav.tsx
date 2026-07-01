'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Home, LayoutGrid, Mail, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { useLanguage } from '@/lib/LanguageContext'

const labels = {
  es: {
    work: 'Proyectos',
    cv: 'CV ↓',
    contact: 'Hablemos',
    mobileLinks: ['Inicio', 'Proyectos', 'Contacto'],
  },
  en: {
    work: 'Work',
    cv: 'CV ↓',
    contact: "Let's Talk",
    mobileLinks: ['Home', 'Work', 'Contact'],
  },
}

const mobileIcons = [Home, LayoutGrid, Mail]
const mobileHrefs = ['/', '/work', '#contact']

export default function Nav() {
  const { dark, toggleDark } = useTheme()
  const { lang, toggleLang } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const t = labels[lang]

  return (
    <>
      {/* ── Desktop Nav ── */}
      <header
        className={`hidden md:flex sticky top-0 z-50 w-full items-center justify-between px-8 h-16 backdrop-blur-sm transition-all duration-200 ${
          scrolled ? 'border-b border-border' : ''
        }`}
        style={{ backgroundColor: 'var(--background-nav)' }}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="text-lg font-semibold text-text-primary hover:text-accent transition-colors"
        >
          mrvivot
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/work"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t.work}
          </Link>
          <a
            href={lang === 'es' ? '/cv_manuel_rojo_vivot_es.pdf' : '/cv_manuel_rojo_vivot_en.pdf'}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {t.cv}
          </a>
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
            style={{ border: '1.5px solid var(--accent)' }}
          >
            {t.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe size={15} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-md text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Top Bar ── */}
      <header
        className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 border-b border-border backdrop-blur-sm"
        style={{ paddingLeft: '20px', paddingRight: '20px', backgroundColor: 'var(--background-nav)' }}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="text-text-primary hover:text-accent transition-colors"
          style={{ fontSize: '16px', fontWeight: 600 }}
        >
          mrvivot
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Cambiar idioma"
          >
            <Globe size={15} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleDark}
            className="p-1.5 rounded-md text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Bottom Nav ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-16 border-t border-border backdrop-blur-sm"
        style={{ backgroundColor: 'var(--background-nav)' }}
      >
        {mobileHrefs.map((href, i) => {
          const Icon = mobileIcons[i]
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-0.5 py-2 px-4 text-text-secondary hover:text-accent transition-colors"
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">
                {t.mobileLinks[i]}
              </span>
            </Link>
          )
        })}
      </nav>
    </>
  )
}

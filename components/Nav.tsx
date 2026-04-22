'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Lang = 'es' | 'en'

const links: Record<Lang, { label: string; href: string }[]> = {
  es: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Contacto', href: '/contact' },
  ],
  en: [
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Nav() {
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('es')
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = links[lang]

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border px-8" style={{ paddingLeft: '32px', paddingRight: '32px' }}>
      <div className="h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl text-foreground">
          mrvivot
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? 'text-foreground border-b-2 border-accent pb-0.5'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                pathname === link.href
                  ? 'text-foreground font-semibold border-l-2 border-accent pl-3'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-border pt-3">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
        </div>
      )}
    </header>
  )
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLang('es')}
        className={lang === 'es' ? 'font-semibold text-foreground' : 'text-muted hover:text-foreground transition-colors'}
      >
        ES
      </button>
      <span className="text-muted select-none">|</span>
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? 'font-semibold text-foreground' : 'text-muted hover:text-foreground transition-colors'}
      >
        EN
      </button>
    </div>
  )
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-border px-6 md:px-12">
      <div
        className="flex flex-col md:flex-row md:justify-between md:items-center items-center gap-3 md:gap-0 text-center md:text-left pb-8 md:pb-0"
        style={{ paddingTop: '32px', paddingBottom: '32px' }}
      >
        <span className="text-text-primary" style={{ fontWeight: 600 }}>
          mrvivot © 2026
        </span>

        <div className="flex items-center gap-2" style={{ fontSize: '14px' }}>
          <a
            href="https://linkedin.com/in/mrvivot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-text-secondary">·</span>
          <a
            href="mailto:mrvivot@gmail.com"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            mrvivot@gmail.com
          </a>
          <span className="text-text-secondary">·</span>
          <a
            href={lang === 'es' ? '/cv_manuel_rojo_vivot_es.pdf' : '/cv_manuel_rojo_vivot_en.pdf'}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
          >
            CV ↓
          </a>
        </div>
      </div>
    </footer>
  )
}

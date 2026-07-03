'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

const content = {
  es: {
    title: '¿Trabajamos juntos?',
    subtitle: 'Escribime o conectemos en LinkedIn.',
    primaryLabel: 'mrvivot@gmail.com',
    secondaryLabel: 'LinkedIn',
    cvLabel: 'Descargar CV ↓',
  },
  en: {
    title: "Let's work together",
    subtitle: 'Email me or connect on LinkedIn.',
    primaryLabel: 'mrvivot@gmail.com',
    secondaryLabel: 'LinkedIn',
    cvLabel: 'Download CV ↓',
  },
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Contact() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section
      id="contact"
      className="px-6 md:px-12 flex flex-col items-center text-center"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <motion.h2
        className="text-text-primary font-bold"
        style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        {...fadeUp(0)}
      >
        {t.title}
      </motion.h2>

      <motion.p
        className="text-text-secondary"
        style={{ fontSize: '17px', marginTop: '12px', marginBottom: '32px' }}
        {...fadeUp(0.1)}
      >
        {t.subtitle}
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-3 md:gap-4"
        {...fadeUp(0.2)}
      >
        {/* Botón primario */}
        <a
          href="mailto:mrvivot@gmail.com"
          className="text-white font-semibold"
          style={{
            backgroundColor: '#2DCC8F',
            padding: '12px 28px',
            borderRadius: '999px',
            fontSize: '15px',
            fontWeight: 600,
            transition: 'background-color 200ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1F9D6F')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#2DCC8F')}
        >
          {t.primaryLabel}
        </a>

        {/* Botón secundario */}
        <a
          href="https://linkedin.com/in/mrvivot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent font-semibold hover:bg-accent hover:text-white transition-colors"
          style={{
            padding: '12px 28px',
            borderRadius: '999px',
            fontSize: '15px',
            fontWeight: 600,
            border: '1.5px solid var(--accent)',
            transition: 'background-color 200ms ease, color 200ms ease',
          }}
        >
          {t.secondaryLabel}
        </a>
      </motion.div>

      <motion.a
        href={lang === 'es' ? '/cv_manuel_rojo_vivot_es.pdf' : '/cv_manuel_rojo_vivot_en.pdf'}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-secondary hover:text-text-primary transition-colors"
        style={{ fontSize: '14px', marginTop: '16px' }}
        {...fadeUp(0.3)}
      >
        {t.cvLabel}
      </motion.a>
    </section>
  )
}

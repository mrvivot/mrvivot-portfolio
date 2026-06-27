'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

const content = {
  es: {
    title: 'Sobre mí',
    p1: 'Combino diseño de producto con una mirada analítica formada en filosofía. Investigo, valido y construyo, sin perder de vista que cada decisión de diseño tiene que sostenerse con criterio y no solo con estética.',
    p2: 'Además de diseñar, enseño UX/UI y gestión de productos digitales. Esa doble práctica, hacer y explicar, me obliga a tener siempre claro el porqué de cada decisión.',
  },
  en: {
    title: 'About',
    p1: 'I combine product design with an analytical mindset shaped by philosophy. I research, validate, and build, without losing sight of the fact that every design decision needs to hold up on criteria and not just aesthetics.',
    p2: 'Beyond designing, I teach UX/UI and digital product management. That dual practice, doing and explaining, keeps me honest about the why behind every decision.',
  },
}

export default function About() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section
      id="about"
      className="px-6 md:px-12"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className="text-text-primary uppercase"
        style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '32px' }}
      >
        {t.title}
      </motion.p>

      <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] md:items-center gap-8 md:gap-16">

        {/* Foto placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="order-2 md:order-1 w-full max-w-[280px] mx-auto md:max-w-none md:mx-0"
        >
          <div
            className="bg-surface flex items-center justify-center w-full"
            style={{ aspectRatio: '1/1', borderRadius: '16px' }}
          >
            <span className="text-text-secondary" style={{ fontSize: '14px' }}>
              Foto
            </span>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' as const }}
          className="order-1 md:order-2 flex flex-col"
          style={{ gap: '20px' }}
        >
          <p className="text-text-primary" style={{ fontSize: '19px', lineHeight: 1.7 }}>
            {t.p1}
          </p>
          <p className="text-text-primary" style={{ fontSize: '19px', lineHeight: 1.7 }}>
            {t.p2}
          </p>
        </motion.div>

      </div>
    </section>
  )
}

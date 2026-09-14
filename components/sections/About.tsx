'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const content = {
  es: {
    title: 'Sobre mí',
    p1: 'Combino diseño de producto con una mirada analítica formada en Filosofía: investigo, valido y construyo, sin perder de vista que cada decisión tiene que sostenerse con criterio, no solo con estética.',
    p2: 'Integro IA generativa en todo el proceso (research, prototipado, código) para acortar la distancia entre una decisión bien fundamentada y un producto real. Este mismo portfolio está construido así, con Claude Code como copiloto de desarrollo.',
    p3: 'Además, enseño hace más de una década: primero Filosofía, hoy UX/UI y gestión de productos digitales en Digital House / Universidad de San Andrés. Esa doble práctica, hacer y explicar, me obliga a tener siempre claro el porqué de cada decisión.',
  },
  en: {
    title: 'About',
    p1: 'I combine product design with an analytical mindset shaped by philosophy: I research, validate, and build, always making sure each decision holds up on judgment, not just aesthetics.',
    p2: 'I bring generative AI into the whole process — research, prototyping, code — to close the gap between a well-reasoned decision and a real product. This very portfolio was built that way, with Claude Code as a development copilot.',
    p3: "I've also been teaching for over a decade: philosophy first, now UX/UI and digital product management at Digital House and Universidad de San Andrés. That dual practice — doing and explaining — keeps me honest about the why behind every decision.",
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
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className="text-text-primary uppercase"
        style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '32px' }}
      >
        {t.title}
      </motion.h2>

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
            className="w-full"
            style={{ aspectRatio: '1/1', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src="/images/about-photo.jpg"
              alt="Manuel Rojo Vivot"
              fill
              sizes="(min-width: 768px) 40vw, 280px"
              className="object-cover"
            />
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
          <p className="text-text-primary" style={{ fontSize: '17px', lineHeight: 1.8 }}>
            {t.p1}
          </p>
          <p className="text-text-primary" style={{ fontSize: '17px', lineHeight: 1.8 }}>
            {t.p2}
          </p>
          {t.p3 && (
            <p className="text-text-primary" style={{ fontSize: '17px', lineHeight: 1.8 }}>
              {t.p3}
            </p>
          )}
        </motion.div>

      </div>
    </section>
  )
}

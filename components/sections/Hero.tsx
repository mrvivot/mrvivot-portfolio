'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTheme } from '@/lib/ThemeContext'
import { useMagnetic } from '@/lib/useMagnetic'

const content = {
  es: {
    greeting: 'Hola, soy Manuel Rojo Vivot.',
    pills: ['UX/UI', 'Product Design', 'Front-end'],
    headline: 'Diseño experiencias digitales que conectan usuarios con negocios reales.',
    scrollToWork: 'Ir a proyectos',
  },
  en: {
    greeting: "Hi, I'm Manuel Rojo Vivot.",
    pills: ['UX/UI', 'Product Design', 'Front-end'],
    headline: 'Designing digital experiences that connect people with real business goals.',
    scrollToWork: 'Go to projects',
  },
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  const { lang } = useLanguage()
  const { dark } = useTheme()
  const t = content[lang]
  const prefersReducedMotion = useReducedMotion()

  const blobOpacity1 = dark ? 0.32 : 0.26
  const blobOpacity2 = dark ? 0.24 : 0.19

  const scrollMagnetic = useMagnetic<HTMLDivElement>({ strength: 5, radius: 35 })

  return (
    <section
      className="relative min-h-screen flex flex-col justify-normal overflow-hidden px-6 md:px-12 pt-[18vh] md:pt-[25vh]"
    >

      {/* ── Blobs de fondo ── */}
      <motion.div
        className="absolute top-[-40px] right-[-40px] rounded-full pointer-events-none w-[280px] h-[280px] blur-[80px] md:w-[560px] md:h-[560px] md:blur-[120px]"
        style={{
          backgroundColor: `rgba(45, 204, 143, ${blobOpacity1})`,
        }}
        animate={prefersReducedMotion ? undefined : { x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[40px] left-[40px] rounded-full pointer-events-none w-[180px] h-[180px] blur-[80px] md:w-[360px] md:h-[360px] md:blur-[120px]"
        style={{
          backgroundColor: `rgba(45, 204, 143, ${blobOpacity2})`,
        }}
        animate={prefersReducedMotion ? undefined : { x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />

      {/* ── Contenido ── */}
      <div className="relative z-10 w-full">
        <motion.p
          className="text-text-primary font-normal"
          style={{ fontSize: '22px' }}
          {...fadeUp(0.1)}
        >
          {t.greeting}
        </motion.p>

        <motion.p
          className="text-text-secondary uppercase mt-3 md:mt-2"
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.12em',
          }}
          {...fadeUp(0.2)}
        >
          {t.pills.join(' · ')}
        </motion.p>

        <motion.h1
          className="font-bold text-text-primary mt-8 md:mt-6"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            lineHeight: 1.1,
            maxWidth: '100%',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0, ease: 'easeOut' }}
        >
          {t.headline}
        </motion.h1>

        <motion.div
          className="mt-14 md:mt-10 text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            ref={scrollMagnetic.ref}
            className="inline-block"
            style={{ x: scrollMagnetic.x, y: scrollMagnetic.y }}
          >
            <motion.button
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-text-primary hover-fine:text-accent transition-colors cursor-pointer"
              animate={prefersReducedMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-label={t.scrollToWork}
            >
              <ArrowDown size={32} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

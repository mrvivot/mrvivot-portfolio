'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { useTheme } from '@/lib/ThemeContext'

const content = {
  es: {
    greeting: 'Hola, soy Manuel Rojo Vivot.',
    pills: ['UX/UI', 'Product Design', 'Front-end'],
    headline: 'Diseño experiencias digitales que conectan usuarios con negocios reales.',
  },
  en: {
    greeting: "Hi, I'm Manuel Rojo Vivot.",
    pills: ['UX/UI', 'Product Design', 'Front-end'],
    headline: 'Designing digital experiences that connect people with real business goals.',
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

  const blobOpacity1 = dark ? 0.32 : 0.26
  const blobOpacity2 = dark ? 0.24 : 0.19

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-normal overflow-hidden px-6 md:px-12"
      style={{ paddingTop: isMobile ? '18vh' : '25vh' }}
    >

      {/* ── Blobs de fondo ── */}
      <motion.div
        className="absolute top-[-40px] right-[-40px] rounded-full pointer-events-none"
        style={{
          width: isMobile ? 280 : 560,
          height: isMobile ? 280 : 560,
          backgroundColor: `rgba(45, 204, 143, ${blobOpacity1})`,
          filter: isMobile ? 'blur(80px)' : 'blur(120px)',
        }}
        animate={{ x: [0, 60, 0], y: [0, -60, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[40px] left-[40px] rounded-full pointer-events-none"
        style={{
          width: isMobile ? 180 : 360,
          height: isMobile ? 180 : 360,
          backgroundColor: `rgba(45, 204, 143, ${blobOpacity2})`,
          filter: isMobile ? 'blur(80px)' : 'blur(120px)',
        }}
        animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
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

        <motion.div
          className="flex flex-wrap gap-2 mt-3 md:mt-2"
          {...fadeUp(0.2)}
        >
          {t.pills.map((pill) => (
            <span
              key={pill}
              className="text-text-secondary uppercase"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                padding: '4px 12px',
                borderRadius: '999px',
                border: '1px solid var(--border)',
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>

        <motion.h1
          className="font-bold text-text-primary mt-8 md:mt-6"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.1,
            maxWidth: '100%',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
          {...fadeUp(0.3)}
        >
          {t.headline}
        </motion.h1>

        <motion.div
          className="mt-14 md:mt-10 text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-text-primary hover:text-accent transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Ir a proyectos"
          >
            <ArrowDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

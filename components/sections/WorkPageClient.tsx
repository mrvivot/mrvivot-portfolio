'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Lock } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import Contact from '@/components/sections/Contact'

const content = {
  es: {
    title: 'Todos los proyectos',
    subtitle: 'Diseño de producto, UX/UI y desarrollo front-end.',
    cta: 'Ver proyecto →',
    comingSoon: 'Próximamente',
  },
  en: {
    title: 'All projects',
    subtitle: 'Product design, UX/UI and front-end development.',
    cta: 'View project →',
    comingSoon: 'Coming soon',
  },
}

interface Project {
  slug: string
  client?: string
  category?: string
  categoryEn?: string
  description?: string
  descriptionEn?: string
  year?: string | number
  password?: boolean
  comingSoon?: boolean
  coverImage?: string
  order?: number
}

interface Props {
  projects: Project[]
}

export default function WorkPageClient({ projects }: Props) {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <main className="px-6 md:px-12 pt-12 md:pt-24 pb-24">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        style={{ marginBottom: '64px' }}
      >
        <h1
          className="text-text-primary font-bold"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.1 }}
        >
          {t.title}
        </h1>
        <p
          className="text-text-secondary"
          style={{ fontSize: '17px', marginTop: '12px' }}
        >
          {t.subtitle}
        </p>
      </motion.div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' as const }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block rounded-2xl overflow-hidden border border-transparent hover:border-accent transition-all duration-300"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {project.coverImage ? (
                  <Image
                    src={project.coverImage}
                    alt={project.client ?? ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full bg-surface flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-text-secondary" style={{ fontSize: '14px' }}>
                      {project.client}
                    </span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div
                className="bg-surface"
                style={{ padding: '20px', borderRadius: '0 0 16px 16px' }}
              >
                {/* Categoría */}
                <p
                  className="text-accent-dark uppercase"
                  style={{ fontSize: '11px', letterSpacing: '0.12em', marginBottom: '8px' }}
                >
                  {lang === 'es' ? project.category : (project.categoryEn ?? project.category)}
                </p>

                {/* Título */}
                <h2
                  className="text-text-primary flex items-center gap-2"
                  style={{ fontSize: '22px', fontWeight: 600, marginBottom: '6px' }}
                >
                  {project.client}
                  {project.password && (
                    <Lock size={14} className="text-text-secondary flex-shrink-0" />
                  )}
                </h2>

                {/* Descripción */}
                <p
                  className="text-text-secondary"
                  style={{ fontSize: '14px', lineHeight: 1.5 }}
                >
                  {lang === 'es' ? project.description : (project.descriptionEn ?? project.description)}
                </p>

                {/* CTA o badge */}
                <div style={{ marginTop: '12px' }}>
                  {project.comingSoon ? (
                    <span
                      className="inline-block text-text-secondary border border-border bg-surface"
                      style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '999px' }}
                    >
                      {t.comingSoon}
                    </span>
                  ) : (
                    <p className="text-accent" style={{ fontSize: '13px', fontWeight: 600 }}>
                      {t.cta}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <Contact />

    </main>
  )
}

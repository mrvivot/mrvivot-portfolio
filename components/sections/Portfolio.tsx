'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { useTheme } from '@/lib/ThemeContext'

interface Project {
  slug: string
  client: string
  category: string
  categoryEn?: string
  description?: string
  descriptionEn?: string
  coverImage?: string
}

interface Props {
  projects: Project[]
}

const labels = {
  es: { title: 'Proyectos seleccionados', cta: 'Ver caso →', viewAll: 'Ver todos los proyectos' },
  en: { title: 'Selected work', cta: 'View case →', viewAll: 'View all projects' },
}

export default function Portfolio({ projects }: Props) {
  const { lang } = useLanguage()
  const { dark } = useTheme()
  const t = labels[lang]

  const cardShadow = dark
    ? '0 1px 3px rgba(0,0,0,0.02)'
    : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)'

  return (
    <section
      id="work"
      className="px-6 md:px-12"
      style={{ paddingTop: '96px', paddingBottom: '96px' }}
    >
      <div
        className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-0"
        style={{ marginBottom: '32px' }}
      >
        <p
          className="text-text-primary uppercase"
          style={{ fontSize: '14px', letterSpacing: '0.1em', fontWeight: 600 }}
        >
          {t.title}
        </p>
        <Link
          href="/work"
          className="hidden md:flex items-center gap-1.5 group text-text-primary hover:underline underline-offset-4 transition-all duration-200"
          style={{ fontSize: '15px', fontWeight: 500 }}
        >
          <span>{t.viewAll}</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group block rounded-2xl overflow-hidden border border-transparent hover:border-accent transition-all duration-300"
              style={{ boxShadow: cardShadow }}
            >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              {project.coverImage ? (
                <Image
                  src={project.coverImage}
                  alt={project.client}
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
              <p
                className="text-accent-dark uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.1em', marginBottom: '8px' }}
              >
                {lang === 'es' ? project.category : (project.categoryEn ?? project.category)}
              </p>
              <h3
                className="text-text-primary"
                style={{ fontSize: '20px', fontWeight: 600, marginBottom: '6px' }}
              >
                {project.client}
              </h3>
              <p
                className="text-text-secondary"
                style={{ fontSize: '14px', lineHeight: 1.5 }}
              >
                {lang === 'es' ? project.description : (project.descriptionEn ?? project.description)}
              </p>
              <p
                className="text-text-primary hover:underline"
                style={{ fontSize: '13px', marginTop: '12px' }}
              >
                {t.cta}
              </p>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

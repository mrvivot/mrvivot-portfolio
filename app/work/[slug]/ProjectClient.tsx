'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Lock } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const PROJECT_PASSWORDS: Record<string, string> = {
  gsk: 'gsk2026',
}

const ui = {
  es: {
    passwordTitle: 'Contenido protegido',
    passwordSubtitle: 'Este caso está bajo NDA. Escribime para solicitar acceso.',
    passwordPlaceholder: 'Contraseña',
    passwordError: 'Contraseña incorrecta',
    passwordButton: 'Acceder',
    backToWork: '← Volver a proyectos',
    comingSoonText: 'Próximamente',
    overviewLabels: { client: 'Cliente', type: 'Tipo', year: 'Año', role: 'Rol' },
    nextLabel: 'Siguiente proyecto',
    nextCta: 'Ver proyecto →',
  },
  en: {
    passwordTitle: 'Protected content',
    passwordSubtitle: 'This case is under NDA. Get in touch to request access.',
    passwordPlaceholder: 'Password',
    passwordError: 'Incorrect password',
    passwordButton: 'Access',
    backToWork: '← Back to projects',
    comingSoonText: 'Coming soon',
    overviewLabels: { client: 'Client', type: 'Type', year: 'Year', role: 'Role' },
    nextLabel: 'Next project',
    nextCta: 'View project →',
  },
}

interface Project {
  slug: string
  title: string
  titleEn?: string
  category: string
  categoryEn?: string
  year: string
  client: string
  role: string
  password?: boolean
  comingSoon?: boolean
  next?: string
  metric?: string
  metricLabel?: string
  metricLabelEn?: string
  content: string
  [key: string]: any
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut' as const },
}

export default function ProjectClient({
  project,
  nextProject,
}: {
  project: Project
  nextProject: Project | null
}) {
  const { lang } = useLanguage()
  const t = ui[lang]

  const [unlocked, setUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [btnHover, setBtnHover] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const sessionKey = `${project.slug}_unlocked`

  useEffect(() => {
    if (project.password && sessionStorage.getItem(sessionKey) === 'true') {
      setUnlocked(true)
    }
  }, [project.password, sessionKey])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function handlePasswordSubmit() {
    if (password === (PROJECT_PASSWORDS[project.slug] ?? '')) {
      sessionStorage.setItem(sessionKey, 'true')
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  // ── Password Gate ──
  if (project.password && !unlocked) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <Lock size={32} className="text-text-secondary" style={{ marginBottom: '24px' }} />
        <h1
          className="text-text-primary text-center"
          style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}
        >
          {project.slug.toUpperCase()} — {t.passwordTitle}
        </h1>
        <p
          className="text-text-secondary text-center"
          style={{ fontSize: '15px', marginBottom: '32px', maxWidth: '320px' }}
        >
          {t.passwordSubtitle}
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value); setError(false) }}
          onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
          placeholder={t.passwordPlaceholder}
          className="bg-background text-text-primary"
          style={{
            width: '100%',
            maxWidth: '280px',
            padding: '12px 16px',
            border: `1px solid ${error ? '#E53E3E' : 'var(--border)'}`,
            borderRadius: '8px',
            fontSize: '15px',
            outline: 'none',
            marginBottom: '12px',
            transition: 'border-color 150ms ease',
          }}
          onFocus={(e) => { if (!error) e.target.style.borderColor = 'var(--accent)' }}
          onBlur={(e) => { if (!error) e.target.style.borderColor = 'var(--border)' }}
        />
        {error && (
          <p style={{ fontSize: '13px', color: '#E53E3E', marginBottom: '12px' }}>
            {t.passwordError}
          </p>
        )}
        <button
          onClick={handlePasswordSubmit}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            width: '100%',
            maxWidth: '280px',
            padding: '12px 28px',
            borderRadius: '999px',
            backgroundColor: btnHover ? '#1F9D6F' : '#2DCC8F',
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 150ms ease',
          }}
        >
          {t.passwordButton}
        </button>
        <Link
          href="/work"
          className="text-text-secondary hover:text-text-primary transition-colors"
          style={{ fontSize: '14px', marginTop: '24px' }}
        >
          {t.backToWork}
        </Link>
      </main>
    )
  }

  // ── Coming Soon ──
  if (project.comingSoon) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6 gap-4">
        <p className="text-text-secondary" style={{ fontSize: '15px' }}>
          {t.comingSoonText}
        </p>
        <Link href="/work" className="text-accent" style={{ fontSize: '14px', fontWeight: 600 }}>
          {t.backToWork}
        </Link>
      </main>
    )
  }

  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title
  const category = lang === 'en' && project.categoryEn ? project.categoryEn : project.category
  const metricLabel = lang === 'en' && project.metricLabelEn ? project.metricLabelEn : project.metricLabel
  const nextTitle = nextProject
    ? (lang === 'en' && nextProject.titleEn ? nextProject.titleEn : nextProject.title)
    : null
  const bullets: string[] = lang === 'es'
    ? (project.bulletsEs ?? [])
    : (project.bulletsEn ?? [])

  // ── Project Template ──
  return (
    <main style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '80px 48px 0',
      paddingLeft: 'clamp(24px, 5vw, 48px)',
      paddingRight: 'clamp(24px, 5vw, 48px)',
    }}>

      {/* ── Hero ── */}
      <motion.div {...fadeUp}>
        <p className="text-text-secondary" style={{ fontSize: '14px' }}>
          {category} · {project.year}
        </p>
        <h1
          className="text-text-primary"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            marginTop: '12px',
            lineHeight: 1.15,
            maxWidth: '800px',
          }}
        >
          {title}
        </h1>
        <div
          className="bg-surface"
          style={{ aspectRatio: '16/9', borderRadius: '16px', marginTop: '48px', position: 'relative', overflow: 'hidden' }}
        >
          {project.coverImage && (
            <Image
              src={project.coverImage as string}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
        </div>
      </motion.div>

      {/* ── Overview ── */}
      <motion.div
        {...fadeUp}
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '32px 0',
          margin: `${isMobile ? '64px' : '96px'} 0`,
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t.overviewLabels.client, value: project.client },
            { label: t.overviewLabels.type, value: category },
            { label: t.overviewLabels.year, value: project.year },
            { label: t.overviewLabels.role, value: project.role },
          ].map(({ label, value }) => (
            <div key={label}>
              <p
                className="text-text-secondary uppercase"
                style={{ fontSize: '12px', letterSpacing: '0.08em', marginBottom: '6px' }}
              >
                {label}
              </p>
              <p className="text-text-primary" style={{ fontSize: '16px', fontWeight: 600 }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Resultado ── */}
      {project.metric && (
        <motion.div
          {...fadeUp}
          style={{ marginBottom: isMobile ? '64px' : '96px' }}
        >
          <p
            className="text-text-primary uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px', fontWeight: 700 }}
          >
            {lang === 'es' ? 'Resultado' : 'Result'}
          </p>

          {(project.metric as string).length <= 5 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
              gap: '64px',
              alignItems: 'center',
              maxWidth: '860px',
            }}>
              <div>
                <div style={{ fontSize: 'clamp(72px, 10vw, 120px)', fontWeight: 700, color: 'var(--accent)', lineHeight: 1 }}>
                  {project.metric}
                </div>
                <div style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  {metricLabel}
                </div>
              </div>
              {bullets.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {bullets.map((bullet: string) => (
                    <li key={bullet} className="text-text-primary"
                      style={{ fontSize: '16px', lineHeight: 1.8, display: 'flex', gap: '10px' }}>
                      <span className="text-accent" style={{ flexShrink: 0 }}>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div style={{ maxWidth: '680px' }}>
              <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--accent)', lineHeight: 1.2 }}>
                {project.metric}
              </div>
              <div style={{ fontSize: '18px', color: 'var(--text-secondary)', marginTop: '8px', marginBottom: bullets.length > 0 ? '32px' : '0' }}>
                {metricLabel}
              </div>
              {bullets.length > 0 && (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {bullets.map((bullet: string) => (
                    <li key={bullet} className="text-text-primary"
                      style={{ fontSize: '16px', lineHeight: 1.8, display: 'flex', gap: '10px' }}>
                      <span className="text-accent" style={{ flexShrink: 0 }}>·</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* ── Contexto ── */}
      {project.context1Es && (
        <motion.div {...fadeUp} style={{ maxWidth: '680px', marginBottom: isMobile ? '64px' : '96px' }}>
          <p
            className="text-text-primary uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.1em', marginBottom: '24px', fontWeight: 700 }}
          >
            {lang === 'es' ? 'Contexto' : 'Context'}
          </p>
          <p className="text-text-primary" style={{ fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
            {lang === 'es' ? project.context1Es : project.context1En}
          </p>
          <p className="text-text-primary" style={{ fontSize: '17px', lineHeight: 1.8 }}>
            {lang === 'es' ? project.context2Es : project.context2En}
          </p>
        </motion.div>
      )}

      {/* ── Problema ── */}
      {project.problemEs && (
        <motion.div
          {...fadeUp}
          className="bg-surface"
          style={{ borderRadius: '16px', padding: '48px', margin: `${isMobile ? '64px' : '96px'} 0` }}
        >
          <p
            className="text-text-primary"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, lineHeight: 1.4, maxWidth: '640px' }}
          >
            {lang === 'es' ? project.problemEs : project.problemEn}
          </p>
        </motion.div>
      )}

      {/* ── Proceso ── */}
      {project.phases?.length > 0 && (
        <motion.div {...fadeUp}>
          <p
            className="text-text-primary uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.1em', marginBottom: '48px', fontWeight: 700 }}
          >
            {lang === 'es' ? 'Proceso y decisiones' : 'Process and decisions'}
          </p>
          {project.phases.map((phase: any, i: number) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' as const }}
              style={{ marginBottom: isMobile ? '64px' : '96px' }}
            >
              <p className="text-text-secondary" style={{ fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                {phase.number}
              </p>
              <h3 className="text-text-primary" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                {lang === 'es' ? phase.titleEs : phase.titleEn}
              </h3>
              <p className="text-text-primary" style={{ fontSize: '16px', lineHeight: 1.7, maxWidth: '680px' }}>
                {lang === 'es' ? phase.descEs : phase.descEn}
              </p>
              <div
                className="bg-surface"
                style={{ borderRadius: '12px', marginTop: '24px', overflow: 'hidden' }}
              >
                {phase.image && (
                  <Image
                    src={phase.image}
                    alt={lang === 'es' ? phase.titleEs : phase.titleEn}
                    width={phase.imageWidth}
                    height={phase.imageHeight}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ── Next project ── */}
      {nextProject && (
        <motion.div
          {...fadeUp}
          style={{ borderTop: '1px solid var(--border)', padding: `${isMobile ? '64px' : '96px'} 0` }}
        >
          <p
            className="text-text-secondary uppercase"
            style={{ fontSize: '13px', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}
          >
            {t.nextLabel}
          </p>
          <Link href={`/work/${project.next}`} className="group inline-flex flex-col">
            <span
              className="text-text-primary group-hover:text-accent transition-colors"
              style={{ fontSize: '28px', fontWeight: 700 }}
            >
              {nextTitle}
            </span>
            <span className="text-accent" style={{ fontSize: '14px', fontWeight: 600, marginTop: '8px' }}>
              {t.nextCta}
            </span>
          </Link>
        </motion.div>
      )}

    </main>
  )
}

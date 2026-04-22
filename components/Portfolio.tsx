'use client'

import { useState } from 'react'

const projects = [
  { title: 'Rediseño y desarrollo web end-to-end', category: 'Product & Development' },
  { title: 'Definición de perfiles de usuario', category: 'User Research' },
  { title: 'Auditoría y rediseño web - Virus Sincicial Respiratorio', category: 'Product Design' },
  { title: 'Rediseño del admin de negocio', category: 'Product Design' },
  { title: 'Alta de negocios sin fricción', category: 'Product Design' },
  { title: 'Optimización de e-commerce', category: 'Product Design' },
]

function ProjectCard({ title, category }: { title: string; category: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: 'var(--color-background)',
        border: '1px solid var(--color-border)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Accent bar */}
      <div style={{
        height: '3px',
        backgroundColor: 'var(--color-accent)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }} />

      {/* Image placeholder */}
      <div style={{
        aspectRatio: '16/9',
        backgroundColor: 'var(--color-surface)',
      }} />

      {/* Content */}
      <div style={{ padding: '16px' }}>
        <p className="font-semibold text-foreground" style={{ marginBottom: '6px' }}>
          {title}
        </p>
        <p className="text-sm text-muted">
          {category}
        </p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section style={{ paddingTop: '96px', paddingBottom: '96px', paddingLeft: '32px', paddingRight: '32px' }}>
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '32px', marginBottom: '0' }}>
          <h2 className="font-semibold text-foreground" style={{ fontSize: '20px', marginBottom: '24px' }}>
            Portfolio
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} title={project.title} category={project.category} />
          ))}
        </div>

      </div>
    </section>
  )
}

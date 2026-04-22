'use client'

import { useState } from 'react'

const contactLinks = [
  { label: 'WhatsApp', value: '+54 9 11 4056 1900', href: 'https://wa.me/5491140561900' },
  { label: 'Email', value: 'mrvivot@gmail.com', href: 'mailto:mrvivot@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mrvivot', href: 'https://linkedin.com/in/mrvivot' },
  { label: 'Behance', value: 'behance.net/mrvivot', href: 'https://behance.net/mrvivot' },
]

const fieldStyle = {
  width: '100%',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  padding: '12px',
  backgroundColor: '#ffffff',
  color: 'var(--color-foreground)',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'inherit',
}

const fieldFocusStyle = {
  ...fieldStyle,
  border: '1px solid var(--color-accent)',
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        className="text-sm font-medium text-foreground"
        style={{ display: 'block', marginBottom: '6px' }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '32px',
        paddingRight: '32px',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row" style={{ gap: '64px' }}>

        {/* Left: info */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-muted" style={{ marginBottom: '12px' }}>
            Contacto
          </p>
          <h2 className="font-bold text-3xl text-foreground" style={{ marginBottom: '16px' }}>
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-muted" style={{ marginBottom: '40px' }}>
            Estoy disponible para proyectos freelance, posiciones part-time y oportunidades de colaboración.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{ display: 'flex', flexDirection: 'column', gap: '2px', textDecoration: 'none' }}
              >
                <span className="text-xs text-muted">{link.label}</span>
                <span
                  className="text-sm font-medium text-foreground group-hover:text-accent transition-colors"
                >
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="flex-1">
          <form onSubmit={(e) => e.preventDefault()}>
            <Field label="Nombre">
              <input
                type="text"
                placeholder="Tu nombre"
                style={focused === 'name' ? fieldFocusStyle : fieldStyle}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                placeholder="tu@email.com"
                style={focused === 'email' ? fieldFocusStyle : fieldStyle}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
              />
            </Field>

            <Field label="Mensaje">
              <textarea
                rows={4}
                placeholder="Contame sobre tu proyecto..."
                style={{
                  ...(focused === 'message' ? fieldFocusStyle : fieldStyle),
                  resize: 'vertical',
                }}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </Field>

            <button
              type="submit"
              className="rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors"
              style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '12px', paddingBottom: '12px' }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

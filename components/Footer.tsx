const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Contacto', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mrvivot' },
  { label: 'Behance', href: 'https://behance.net/mrvivot' },
]

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-foreground)',
        borderTop: '1px solid #333',
        paddingTop: '48px',
        paddingBottom: '48px',
        paddingLeft: '32px',
        paddingRight: '32px',
      }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        style={{ gap: '40px' }}
      >

        {/* Left */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left" style={{ gap: '6px' }}>
          <span className="font-semibold" style={{ color: '#ffffff', fontSize: '16px' }}>
            mrvivot
          </span>
          <span className="text-sm" style={{ color: 'var(--color-muted)' }}>
            UX/UI Designer · Product Designer
          </span>
          <span className="text-sm" style={{ color: 'var(--color-muted)', marginTop: '8px' }}>
            © 2025 · Manuel Rojo Vivot
          </span>
        </div>

        {/* Right */}
        <div
          className="flex flex-col items-center md:items-end"
          style={{ gap: '24px' }}
        >
          {/* Nav links */}
          <div className="flex items-center" style={{ gap: '24px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:text-accent transition-colors"
                style={{ color: '#ffffff', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center" style={{ gap: '20px' }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
                style={{ color: 'var(--color-muted)', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

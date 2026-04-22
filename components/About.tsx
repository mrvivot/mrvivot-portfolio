const experience = [
  { role: 'UX/UI Designer – Freelance', company: 'Independiente', period: 'Sep 2023 – Presente' },
  { role: 'Front-end Developer – Freelance', company: 'Independiente', period: 'Ene 2023 – Presente' },
  { role: 'Profesor UX/UI y Gestión de Productos', company: 'Digital House · UdeSA', period: 'Feb 2023 – Presente' },
  { role: 'Productor de contenido educativo', company: 'Filadd', period: 'Sep 2019 – Presente' },
]

export default function About() {
  return (
    <section
      style={{
        backgroundColor: 'var(--color-surface)',
        paddingTop: '96px',
        paddingBottom: '96px',
        paddingLeft: '32px',
        paddingRight: '32px',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row" style={{ gap: '64px' }}>

        {/* Left: bio */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-muted" style={{ marginBottom: '12px' }}>
            Sobre mí
          </p>
          <h2 className="font-bold text-3xl text-foreground" style={{ marginBottom: '24px' }}>
            Diseño con criterio, foco en impacto.
          </h2>
          <p className="text-foreground" style={{ marginBottom: '16px' }}>
            Soy Product Designer con enfoque end-to-end. Trabajo desde la investigación y definición de problemas hasta el diseño de flujos, interfaces y validación con usuarios.
          </p>
          <p className="text-foreground" style={{ marginBottom: '16px' }}>
            Mi formación en filosofía aporta una mirada analítica para transformar problemas complejos en soluciones claras, usables y alineadas al negocio.
          </p>
          <p className="text-foreground">
            Colaboro con equipos de producto y desarrollo, priorizando impacto real y resultados medibles.
          </p>
        </div>

        {/* Right: experience */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground" style={{ fontSize: '18px', marginBottom: '24px' }}>
            Trayectoria
          </h3>
          <div>
            {experience.map((item, index) => (
              <div
                key={item.role}
                style={{
                  paddingTop: index === 0 ? '0' : '20px',
                  paddingBottom: '20px',
                  borderBottom: index < experience.length - 1 ? '1px solid var(--color-border)' : 'none',
                }}
              >
                <p className="font-medium text-foreground" style={{ marginBottom: '4px' }}>
                  {item.role}
                </p>
                <p className="text-sm text-muted" style={{ marginBottom: '2px' }}>
                  {item.company}
                </p>
                <p className="text-sm text-muted">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

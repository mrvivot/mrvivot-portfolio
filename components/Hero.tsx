export default function Hero() {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px' }}>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-16" style={{ alignItems: 'center', width: '100%' }}>

        {/* Left: text */}
        <div className="flex-1 flex flex-col">
          <p className="text-sm text-muted tracking-wide" style={{ marginBottom: '8px' }}>
            Product Designer · Buenos Aires
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight" style={{ marginBottom: '16px' }}>
            Convierto problemas complejos en productos simples, usables y medibles.
          </h1>

          <p className="text-lg text-muted" style={{ marginBottom: '32px' }}>
            Product Designer end-to-end. Research, estrategia, UI y validación.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/contact"
              className="rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-colors"
              style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '12px', paddingBottom: '12px' }}
            >
              Hablemos de producto
            </a>
            <a
              href="#portfolio"
              className="text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              Ver portfolio ↓
            </a>
          </div>
        </div>

        {/* Right: photo placeholder */}
        <div className="shrink-0 flex items-center justify-center">
          <div
            className="rounded-full bg-surface border border-border flex items-center justify-center"
            style={{ width: 280, height: 280 }}
          >
            <span className="text-2xl font-semibold text-muted tracking-widest">MRV</span>
          </div>
        </div>

      </div>
    </section>
  )
}

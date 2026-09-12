# mrvivot Portfolio

## Stack
Next.js 14 (App Router), TypeScript, Tailwind CSS v3 (NO usar v4,
causa fallos de clases), Framer Motion, MDX para contenido de proyectos.
Deploy en Vercel, dominio mrvivot.com.

## Sistema de diseño
- Tipografía: Plus Jakarta Sans exclusivamente
- Colores via variables CSS (globals.css), nunca hardcodeados en componentes
- Light mode (default): bg #FAF9F6, texto #1A1A1A, acento #2DCC8F
- Dark mode: bg #111110, texto #F5F4F0, mismo acento
- Único color de acento en todo el sitio: #2DCC8F

## Arquitectura
- LanguageContext (lib/LanguageContext.tsx): maneja ES/EN global,
  persiste en localStorage, default ES
- ThemeContext (lib/ThemeContext.tsx): maneja dark/light; en la
  primera visita sigue prefers-color-scheme del sistema, el toggle
  manual lo overridea y lo persiste en localStorage
- Nav: desktop sticky arriba, mobile se convierte en bottom
  navigation bar fija
- Bottom nav mobile: Inicio, Work, About, Contacto

## Estado actual del sitio (julio 2026)
- Sitio en producción: www.mrvivot.com
- Deploy: Vercel conectado a GitHub (rama main)
- Analytics: Microsoft Clarity instalado (ID: xfnpppw2mh)

## Páginas existentes
- / (home): Hero, Portfolio (3 cards vía homeOrder), About, Contacto, Footer
- /work: grilla de 7 proyectos (2 columnas desktop, 1 mobile)
- /work/[slug]: template dinámico desde MDX (ProjectClient.tsx)
- /work/gsk: protegido con password
- /blog: listado de posts (BlogCard)
- /blog/[slug]: template dinámico desde MDX (BlogPostClient.tsx)

## Proyectos en content/projects/
- brvscu.mdx (order: 0, homeOrder: 1)
- portfolio-ia.mdx (order: 1, homeOrder: 2)
- vgo-alta.mdx (order: 2, homeOrder: 3)
- informental.mdx (order: 3)
- carbon-los-lenos.mdx (order: 4)
- vgo-admin.mdx (order: 5)
- gsk.mdx (order: 6, password: true)

`order` define el orden en /work; `homeOrder` (solo en 3 de los 7) define
cuáles aparecen como cards en el home y en qué orden.

## Posts en content/blog/
- instrucciones-para-tocar-el-timbre.mdx (2026-07-09)
- que-tan-obvio-es-lo-obvio.mdx (2026-07-23)
- rick-rubin-tiene-razon.mdx (2026-08-09)
- aunque-a-nadie-ya-le-importe.mdx (2026-08-14)

## Pendiente próxima sesión
- Agregar sección Juegos (/games) — diferido
- Página /about extendida — diferido

## Reglas de contraste (obligatorias)
- Todo título, label de sección o texto que cumpla función de
  encabezado debe usar color text-primary, nunca text-secondary,
  incluso si es pequeño o uppercase.
- text-secondary se reserva exclusivamente para texto secundario
  real: descripciones, metadatos, fechas, texto de apoyo que
  acompaña a un elemento principal ya visible.
- Antes de dar por terminado cualquier componente nuevo, verificar
  que ningún título o label de sección quede en text-secondary.

## Decisiones técnicas (setiembre 2026)

### og:image dinámica
- app/opengraph-image.tsx genera la imagen para compartir (1200x630) con
  ImageResponse en vez de servir un archivo estático. La imagen que se
  usaba antes (about-photo.jpg) tenía extensión .jpg pero contenido PNG
  real, dimensiones que no coincidían con lo declarado en metadata, y
  pesaba 1.8MB — por eso WhatsApp/LinkedIn/Slack no mostraban preview al
  compartir el link. Generarla dinámicamente evita depender de que el
  archivo fuente tenga el formato/peso/recorte correctos.
- app/page.tsx (y cualquier page) NO debe declarar su propio
  metadata.openGraph parcial: Next.js no hace deep-merge de openGraph
  entre layout y page, así que un openGraph incompleto en el page pisa
  entero al del layout — incluida la imagen. Si un page necesita metadata
  propia, declarar el objeto openGraph completo o no declararlo y heredar
  el del layout.

### Performance / LCP
- El H1 del Hero (candidato a LCP en mobile) no debe animar opacity: si
  nace en opacity:0 y anima a 1 vía Framer Motion, el paint del elemento
  queda bloqueado hasta que React hidrata y corre la animación, lo que
  empeora el LCP en conexiones lentas. Para la sensación de entrada, animar
  solo transform (translateY) en el elemento de LCP, nunca opacity.
- Las imágenes fuera del above-the-fold (ej. la foto de About) no deben
  llevar loading="eager" ni fetchPriority="high": eso les roba prioridad de
  red al contenido above-the-fold en conexiones lentas sin necesidad, ya
  que no son visibles al cargar la página. Dejar el comportamiento lazy por
  default de next/image.

## Convenciones de trabajo
- Cambios incrementales, uno o dos por vez
- No modificar código no solicitado
- Preferir clases Tailwind; usar inline styles solo donde Tailwind
  no aplique bien (ya pasó con algunos colores via variables CSS)
- Validar siempre en light y dark mode antes de dar por cerrado un componente

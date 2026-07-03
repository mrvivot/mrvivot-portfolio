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
- ThemeContext (lib/ThemeContext.tsx): maneja dark/light,
  persiste en localStorage, default light
- Nav: desktop sticky arriba, mobile se convierte en bottom
  navigation bar fija
- Bottom nav mobile: Inicio, Work, About, Contacto

## Estado actual del sitio (julio 2026)
- Sitio en producción: www.mrvivot.com
- Deploy: Vercel conectado a GitHub (rama main)
- Analytics: Microsoft Clarity instalado (ID: xfnpppw2mh)

## Páginas existentes
- / (home): Hero, Portfolio (3 cards), About, Contacto, Footer
- /work: grilla de 6 proyectos (2 columnas desktop, 1 mobile)
- /work/[slug]: template dinámico desde MDX (ProjectClient.tsx)
- /work/gsk: protegido con password

## Proyectos en content/projects/
- carbon-los-lenos.mdx (order: 1)
- portfolio-ia.mdx (order: 2)
- gsk.mdx (order: 3, password: true)
- vgo-alta.mdx (order: 4)
- vgo-admin.mdx (order: 5)
- informental.mdx (order: 6)

## Pendiente próxima sesión
- Agregar sección Blog (/blog)
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

## Convenciones de trabajo
- Cambios incrementales, uno o dos por vez
- No modificar código no solicitado
- Preferir clases Tailwind; usar inline styles solo donde Tailwind
  no aplique bien (ya pasó con algunos colores via variables CSS)
- Validar siempre en light y dark mode antes de dar por cerrado un componente

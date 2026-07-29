import type { Metadata } from 'next'
import { getProject, getAllProjects, getImageDimensions } from '@/lib/projects'
import ProjectClient from './ProjectClient'

export function generateStaticParams() {
  return getAllProjects().map((p: any) => ({ slug: String(p.slug) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const project = getProject(slug)

    if (project.password) {
      return {
        title: 'Proyecto protegido | Manuel Rojo Vivot',
        description: 'Estudio de caso protegido con contraseña.',
      }
    }

    const url = `https://www.mrvivot.com/work/${project.slug}`
    return {
      title: `${project.title} | Manuel Rojo Vivot`,
      description: project.description,
      alternates: {
        canonical: `/work/${project.slug}`,
      },
      openGraph: {
        title: project.title,
        description: project.description,
        url,
        images: project.coverImage
          ? [{ url: project.coverImage, width: 1200, height: 630 }]
          : undefined,
        locale: 'es_AR',
        type: 'article',
      },
      twitter: {
        card: 'summary_large_image',
        title: project.title,
        description: project.description,
        images: project.coverImage ? [project.coverImage] : undefined,
      },
    }
  } catch {
    return {}
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (project.phases) {
    project.phases = project.phases.map((phase: any) => {
      if (!phase.image) return phase
      const { width, height } = getImageDimensions(phase.image)
      return { ...phase, imageWidth: width, imageHeight: height }
    })
  }

  let nextProject = null
  if (project.next) {
    try {
      nextProject = getProject(project.next as string)
    } catch {}
  }

  const jsonLd = !project.password
    ? {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        url: `https://www.mrvivot.com/work/${project.slug}`,
        image: project.coverImage
          ? `https://www.mrvivot.com${project.coverImage}`
          : undefined,
        author: {
          '@type': 'Person',
          name: 'Manuel Rojo Vivot',
          url: 'https://www.mrvivot.com',
        },
        ...(project.year ? { dateCreated: String(project.year) } : {}),
      }
    : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProjectClient project={project as any} nextProject={nextProject as any} />
    </>
  )
}

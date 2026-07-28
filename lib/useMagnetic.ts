'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

interface UseMagneticOptions {
  /** Max displacement in px at the point of strongest pull. */
  strength?: number
  /** Detection radius in px, measured from the element's center. */
  radius?: number
}

/**
 * Subtle magnetic-hover effect: the element drifts toward the cursor
 * within a detection radius, then springs back to rest. Disabled under
 * prefers-reduced-motion and on devices without a fine (mouse-like) pointer.
 */
export function useMagnetic<T extends HTMLElement>({ strength = 10, radius = 80 }: UseMagneticOptions = {}) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  useEffect(() => {
    if (prefersReducedMotion) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const dx = e.clientX - centerX
      const dy = e.clientY - centerY
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist >= radius) {
        x.set(0)
        y.set(0)
        return
      }

      const falloff = 1 - dist / radius
      let pullX = dx * falloff
      let pullY = dy * falloff
      const pullMagnitude = Math.sqrt(pullX * pullX + pullY * pullY)
      if (pullMagnitude > strength) {
        const scale = strength / pullMagnitude
        pullX *= scale
        pullY *= scale
      }
      x.set(pullX)
      y.set(pullY)
    }

    const reset = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', reset)
      reset()
    }
  }, [prefersReducedMotion, radius, strength, x, y])

  return { ref, x: springX, y: springY }
}

"use client"
import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { gsap } from 'gsap'

interface PageTransitionWrapperProps {
  children: React.ReactNode
  isWorkPage?: boolean
}

export default function PageTransitionWrapper({ children, isWorkPage = false }: PageTransitionWrapperProps) {
  const pathname = usePathname()
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    if (isWorkPage) {
      // Work page entrance animation (from bottom)
      gsap.fromTo(containerRef.current,
        {
          y: '100vh',
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      )
    } else {
      // Regular page entrance animation
      gsap.fromTo(containerRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      )
    }
  }, [pathname, isWorkPage])

  // Function to handle page exit (can be called from navbar or other components)
  const exitPage = (callback?: () => void) => {
    if (!containerRef.current) return

    if (isWorkPage) {
      // Work page exit animation (to bottom)
      gsap.to(containerRef.current, {
        y: '100vh',
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: callback
      })
    } else {
      // Regular page exit animation
      gsap.to(containerRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: callback
      })
    }
  }

  // Expose exit function globally for navbar to use
  useEffect(() => {
    (window as any).exitPage = exitPage
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  )
}
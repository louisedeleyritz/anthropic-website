'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Skills', href: '#skills' },
  { label: 'Ideas', href: '#ideas' },
]

const SECTION_IDS = ['story', 'case-studies', 'skills', 'ideas']

export default function Nav() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    },
    []
  )

  return (
    <nav
      className="sticky top-0 z-50 border-b border-[#eee] backdrop-blur"
      style={{ backgroundColor: 'rgba(250,250,248,0.95)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Left: Name */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          className="text-lg font-semibold text-gray-900 whitespace-nowrap"
        >
          Louise de Leyritz
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={`text-sm transition-colors ${
                  isActive
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a
            href="#footer"
            onClick={(e) => scrollTo(e, '#footer')}
            className="text-sm font-medium text-[#d97706] transition-colors hover:text-[#b45309]"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#eee] px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {label}
                </a>
              )
            })}
            <a
              href="#footer"
              onClick={(e) => scrollTo(e, '#footer')}
              className="text-sm font-medium text-[#d97706] transition-colors hover:text-[#b45309]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

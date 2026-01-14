'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 5%',
        background: isScrolled
          ? 'rgba(10, 10, 10, 0.8)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: isScrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(15px, 2vw, 30px)',
            flexWrap: 'wrap',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="interactive"
              style={{
                background: 'transparent',
                border: 'none',
                color:
                  activeSection === item.href.substring(1)
                    ? 'var(--accent-blue)'
                    : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '8px 0',
                position: 'relative',
                transition: 'color 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  color: 'var(--accent-blue)',
                  duration: 0.3,
                })
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.href.substring(1)) {
                  gsap.to(e.currentTarget, {
                    color: 'var(--text-secondary)',
                    duration: 0.3,
                  })
                }
              }}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--accent-blue)',
                    boxShadow: '0 0 10px var(--glow-blue)',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}


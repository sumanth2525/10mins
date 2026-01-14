'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('')
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Animate the scroller on mount
    if (barRef.current) {
      gsap.fromTo(
        barRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        }
      )
    }
  }, [])

  return (
    <div
      ref={barRef}
      className="status-bar"
      style={{
        position: 'fixed',
        bottom: 'clamp(10px, 2vw, 20px)',
        left: 'clamp(10px, 2vw, 20px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(15px, 2vw, 30px)',
        padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 2vw, 24px)',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
        fontFamily: 'monospace',
        opacity: 0,
      }}
    >
      {/* SA Logo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#000',
            letterSpacing: '-0.02em',
          }}
        >
          SA
        </div>
      </div>

      {/* Name */}
      <div
        style={{
          color: 'var(--text-primary)',
          fontWeight: 500,
          letterSpacing: '0.5px',
        }}
      >
        sumanth aleti
      </div>

      {/* Divider */}
      <div
        style={{
          width: '1px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />

      {/* Current Time */}
      <div
        style={{
          color: 'var(--accent-blue)',
          fontWeight: 600,
          fontVariantNumeric: 'tabular-nums',
          minWidth: '80px',
        }}
      >
        {currentTime}
      </div>
    </div>
  )
}


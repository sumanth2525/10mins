'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface SkillCardProps {
  category: string
  items: string[]
  index: number
  isExpanded: boolean
  onExpand: () => void
}

export default function SkillCard({
  category,
  items,
  index,
  isExpanded,
  onExpand,
}: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isExpanded && itemsRef.current) {
      gsap.fromTo(
        itemsRef.current.children,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
        }
      )
    }
  }, [isExpanded])

  return (
    <div
      ref={cardRef}
      className="skill-card interactive"
      onClick={onExpand}
      style={{
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, {
          scale: 1.05,
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
          borderColor: 'rgba(0, 212, 255, 0.5)',
          duration: 0.3,
        })
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          scale: 1,
          boxShadow: '0 0 0px rgba(0, 212, 255, 0)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          duration: 0.3,
        })
      }}
    >
      <h3
        style={{
          fontSize: '1.5rem',
          marginBottom: '20px',
          color: 'var(--accent-blue)',
          fontWeight: 600,
        }}
      >
        {category}
      </h3>
      <div
        ref={itemsRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxHeight: isExpanded ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '8px 12px',
              background: 'rgba(0, 212, 255, 0.1)',
              borderRadius: '8px',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              border: '1px solid rgba(0, 212, 255, 0.2)',
            }}
          >
            {item}
          </div>
        ))}
      </div>
      {!isExpanded && (
        <div
          style={{
            marginTop: '20px',
            fontSize: '0.9rem',
            color: 'var(--accent-purple)',
            opacity: 0.7,
          }}
        >
          Click to expand →
        </div>
      )}
    </div>
  )
}


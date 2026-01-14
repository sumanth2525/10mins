'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  liveLink: string
  githubLink: string
}

interface ProjectTileProps {
  project: Project
  isSelected: boolean
  onSelect: () => void
  onClose: () => void
}

export default function ProjectTile({
  project,
  isSelected,
  onSelect,
  onClose,
}: ProjectTileProps) {
  const tileRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isSelected && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [isSelected])

  return (
    <>
      <div
        ref={tileRef}
        className="project-tile interactive"
        onClick={onSelect}
        style={{
          minWidth: '400px',
          height: '500px',
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '30px',
          cursor: 'pointer',
          scrollSnapAlign: 'start',
          position: 'relative',
          overflow: 'hidden',
          opacity: 0,
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            y: -10,
            rotateY: 5,
            boxShadow: '0 20px 40px rgba(0, 212, 255, 0.2)',
            duration: 0.3,
          })
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            y: 0,
            rotateY: 0,
            boxShadow: '0 0 0px rgba(0, 212, 255, 0)',
            duration: 0.3,
          })
        }}
      >
        <div
          style={{
            width: '100%',
            height: '60%',
            background: 'linear-gradient(135deg, #00d4ff20 0%, #8b5cf620 100%)',
            borderRadius: '15px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
        >
          🎨
        </div>
        <h3
          style={{
            fontSize: '1.5rem',
            marginBottom: '10px',
            color: 'var(--accent-blue)',
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '20px',
            lineHeight: '1.6',
          }}
        >
          {project.description}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              style={{
                padding: '4px 12px',
                background: 'rgba(0, 212, 255, 0.1)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                color: 'var(--accent-blue)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {isSelected && (
        <div
          ref={modalRef}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={onClose}
        >
          <div
            style={{
              maxWidth: '900px',
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '30px',
              padding: '40px',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '2rem',
                cursor: 'pointer',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              ×
            </button>

            <h2
              style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                color: 'var(--accent-blue)',
                fontWeight: 700,
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '30px',
                lineHeight: '1.8',
              }}
            >
              {project.description}
            </p>

            <div style={{ marginBottom: '30px' }}>
              <h3
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '15px',
                  color: 'var(--text-primary)',
                }}
              >
                Tech Stack
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(0, 212, 255, 0.1)',
                      borderRadius: '25px',
                      fontSize: '0.9rem',
                      color: 'var(--accent-blue)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '40px',
              }}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary interactive"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary interactive"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


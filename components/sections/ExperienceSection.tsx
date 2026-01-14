'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'

const experiences = [
  {
    year: '2024',
    title: 'Senior Creative Technologist',
    company: 'Innovation Labs',
    description: 'Leading 3D web experiences and immersive design projects',
  },
  {
    year: '2022',
    title: 'Frontend Architect',
    company: 'Tech Studio',
    description: 'Built scalable design systems and WebGL applications',
  },
  {
    year: '2020',
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    description: 'Developed interactive web applications and data visualizations',
  },
  {
    year: '2018',
    title: 'Junior Developer',
    company: 'Startup Inc',
    description: 'Started my journey in web development and design',
  },
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const items = document.querySelectorAll('.timeline-item')
      gsap.fromTo(
        items,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [inView])

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        padding: '100px 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          marginBottom: '80px',
          fontWeight: 700,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Experience & Journey
      </h2>

      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: '30px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #00d4ff 0%, #8b5cf6 100%)',
          }}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
            style={{
              position: 'relative',
              paddingLeft: '80px',
              paddingBottom: '60px',
              opacity: 0,
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-blue)',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
              }}
            />

            <div
              style={{
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 212, 255, 0.2)',
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
              <div
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--accent-purple)',
                  marginBottom: '10px',
                  fontWeight: 600,
                }}
              >
                {exp.year}
              </div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '8px',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}
              >
                {exp.title}
              </h3>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'var(--accent-blue)',
                  marginBottom: '15px',
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </div>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


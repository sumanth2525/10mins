'use client'

import { useEffect, useRef, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'

const Avatar3D = dynamic(() => import('@/components/3d/Avatar3D'), {
  ssr: false,
})

const missionLines = [
  'I design intelligent digital experiences',
  'that merge data, creativity, and technology',
  'to solve real-world problems.',
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const lines = document.querySelectorAll('.mission-line')
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      )
    }
  }, [inView])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5%',
        gap: '80px',
        flexWrap: 'wrap',
      }}
    >
      <div
        ref={ref}
        style={{
          flex: '1',
          minWidth: '300px',
          position: 'relative',
          height: '500px',
        }}
      >
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'var(--bg-primary)' }} />}>
          <Canvas
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 3]} />
            <ambientLight intensity={0.6} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
            <Avatar3D />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={1}
            />
          </Canvas>
        </Suspense>
      </div>

      <div
        style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '40px',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          About Me
        </h2>
        <div
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            lineHeight: '1.8',
            color: 'var(--text-secondary)',
          }}
        >
          {missionLines.map((line, index) => (
            <p
              key={index}
              className="mission-line"
              style={{
                marginBottom: '20px',
                opacity: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}


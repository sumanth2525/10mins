'use client'

import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import { gsap } from 'gsap'
import dynamic from 'next/dynamic'

const FloatingObject = dynamic(() => import('@/components/3d/FloatingObject'), {
  ssr: false,
})

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.from(nameRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: 'power3.out',
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.8'
      )
      .from(
        buttonsRef.current?.children || [],
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        },
        '-=0.6'
      )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <Suspense fallback={<div style={{ width: '100%', height: '100%', background: 'var(--bg-primary)' }} />}>
          <Canvas
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            <FloatingObject />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <Environment preset="night" />
          </Canvas>
        </Suspense>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 20px',
        }}
      >
        <h1
          ref={nameRef}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 700,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
          }}
        >
          Your Name
        </h1>
        <p
          ref={titleRef}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            fontWeight: 300,
          }}
        >
          Creative Technologist & 3D Designer
        </p>
        <div
          ref={buttonsRef}
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            className="btn-primary interactive"
            onClick={() => {
              document
                .querySelector('#projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Work
          </button>
          <button
            className="btn-secondary interactive"
            onClick={() => {
              document
                .querySelector('#contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}


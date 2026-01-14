'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import SkillCard from '@/components/SkillCard'

const skills = {
  Development: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'],
  Design: ['Figma', 'Blender', 'After Effects', 'WebGL', '3D Modeling'],
  'Data / AI': ['Machine Learning', 'Data Visualization', 'TensorFlow', 'Analytics'],
  Tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing'],
}

export default function SkillsSection() {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const cards = document.querySelectorAll('.skill-card')
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        }
      )
    }
  }, [inView])

  return (
    <section
      id="skills"
      ref={ref}
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
        Skills & Expertise
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {Object.entries(skills).map(([category, items], index) => (
          <SkillCard
            key={category}
            category={category}
            items={items}
            index={index}
            isExpanded={expandedSkill === category}
            onExpand={() =>
              setExpandedSkill(expandedSkill === category ? null : category)
            }
          />
        ))}
      </div>
    </section>
  )
}


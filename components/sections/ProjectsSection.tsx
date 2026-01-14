'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { gsap } from 'gsap'
import ProjectTile from '@/components/ProjectTile'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern shopping experience with 3D product visualization',
    tech: ['Next.js', 'Three.js', 'Stripe', 'PostgreSQL'],
    image: '/project1.jpg',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'Real-time analytics with machine learning insights',
    tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
    image: '/project2.jpg',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Immersive Web Experience',
    description: 'Interactive 3D storytelling platform',
    tech: ['WebGL', 'GSAP', 'Blender', 'Node.js'],
    image: '/project3.jpg',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Data Visualization Tool',
    description: 'Complex data made beautiful and interactive',
    tech: ['D3.js', 'React', 'TypeScript', 'WebSockets'],
    image: '/project4.jpg',
    liveLink: '#',
    githubLink: '#',
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      const tiles = document.querySelectorAll('.project-tile')
      gsap.fromTo(
        tiles,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      )
    }
  }, [inView])

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '100px 5%',
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
        Featured Projects
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          padding: '20px 0',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'thin',
        }}
      >
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            project={project}
            isSelected={selectedProject === project.id}
            onSelect={() => setSelectedProject(project.id)}
            onClose={() => setSelectedProject(null)}
          />
        ))}
      </div>
    </section>
  )
}


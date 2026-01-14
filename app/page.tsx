'use client'

import { useEffect, useState } from 'react'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import StatusBar from '@/components/StatusBar'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ErrorBoundary>
      <main>
      <Navigation />
      <CustomCursor />
      <StatusBar />
      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      </main>
    </ErrorBoundary>
  )
}


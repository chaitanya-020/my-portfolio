import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import FeaturedWork from '@/components/FeaturedWork'
import MoreProjects from '@/components/MoreProjects'
import Publications from '@/components/Publications'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedWork />
      <MoreProjects />
      <Publications />
      <Skills />
      <Education />
      <Contact />
    </>
  )
}
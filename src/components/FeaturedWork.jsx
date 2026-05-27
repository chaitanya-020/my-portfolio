import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import ProjectCard from '@/components/ProjectCard'
import { featuredProjects } from '@/data/projects'

export default function FeaturedWork() {
  return (
    <Section id="work" label="03. Featured Work">
      <div className="space-y-20 md:space-y-24">
        {featuredProjects.map((project, idx) => (
          <FadeIn key={project.slug} delay={0.1}>
            <ProjectCard project={project} reverse={idx % 2 === 1} />
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
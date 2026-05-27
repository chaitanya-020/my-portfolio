import { Github, ExternalLink as ExternalIcon, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { otherProjects } from '@/data/projects'

export default function MoreProjects() {
  if (otherProjects.length === 0) return null

  return (
    <Section id="more-projects" label="04. More Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {otherProjects.map((project, idx) => (
          <FadeIn key={project.slug} delay={idx * 0.05}>
            <article className="card-interactive h-full flex flex-col group">
              {/* Header: folder icon + links */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-1">
                  {project.links.github && (
                    < a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-surface-elevated transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {(project.links.demo || project.links.paper) && (
                    < a
                        href={project.links.demo || project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} ${project.links.paper ? 'research paper' : 'external link'}`}
                        className="p-1.5 rounded-md text-muted hover:text-foreground hover:bg-surface-elevated transition-colors"
                    >
                        <ExternalIcon className="w-4 h-4" />
                    </a>
                    )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                <Link to={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>

              {/* Tagline */}
              <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                {project.tagline}
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted-foreground">
                {project.tech.slice(0, 5).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              {/* Read more (footer of card) */}
              <Link
                to={`/projects/${project.slug}`}
                className="mt-4 pt-3 border-t border-border-subtle text-xs font-mono text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
              >
                Read case study
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
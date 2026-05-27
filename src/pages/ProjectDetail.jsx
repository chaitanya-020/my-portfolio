import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  ArrowLeft,
  Github,
  ExternalLink as ExternalIcon,
  Calendar,
  User,
  Clock,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { projects } from '@/data/projects'
import NotFound from '@/pages/NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  // Find prev/next for project navigation
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  // Update document title
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Gelivi Sai Chaitanya`
    }
    return () => {
      document.title = 'Gelivi Sai Chaitanya — Software Engineer & ML Engineer'
    }
  }, [project])

  if (!project) return <NotFound />

  return (
    <article className="pt-24 pb-12">
      {/* Header */}
      <div className="container-page max-w-prose">
        {/* Breadcrumb / back link */}
        <FadeIn>
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 text-sm font-mono text-muted hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </button>
        </FadeIn>

        {/* Title block */}
        <FadeIn delay={0.05}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Case Study
          </p>
          <h1 className="text-h1 font-bold text-foreground mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            {project.tagline}
          </p>

          {project.comingSoon && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-warning/10 border border-warning/30 text-warning text-xs font-mono mb-8">
              <Clock className="w-3.5 h-3.5" />
              This project is currently in progress
            </div>
          )}
        </FadeIn>

        {/* Meta info */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 mb-10 border-y border-border-subtle">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                Period
              </p>
              <p className="text-sm text-foreground">{project.period}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <User className="w-3 h-3" />
                Role
              </p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                Links
              </p>
              <div className="flex gap-2">
                {project.links.github && (
                  <Button asChild variant="outline" size="sm">
                    < a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                <Button asChild variant="outline" size="sm">
                    < a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalIcon className="w-3.5 h-3.5" />
                    Demo
                    </a>
                </Button>
                )}
                {project.links.paper && (
                <Button asChild variant="outline" size="sm">
                    < a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalIcon className="w-3.5 h-3.5" />
                    Paper
                    </a>
                </Button>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="container-page max-w-prose space-y-12">
        {/* Overview */}
        <FadeIn>
          <section>
            <h2 className="text-h2 font-semibold text-foreground mb-4 tracking-tight">
              Overview
            </h2>
            <p className="text-base text-muted leading-relaxed">
              {project.description}
            </p>
          </section>
        </FadeIn>

        {/* Key Highlights */}
        <FadeIn>
          <section>
            <h2 className="text-h2 font-semibold text-foreground mb-4 tracking-tight">
              Key Highlights
            </h2>
            <ul className="space-y-4">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 text-base text-muted leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-mono mt-0.5"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Tech Stack */}
        <FadeIn>
          <section>
            <h2 className="text-h2 font-semibold text-foreground mb-4 tracking-tight">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <section className="card text-center">
            <h3 className="text-h3 font-semibold text-foreground mb-3">
              Want to see the code?
            </h3>
            <p className="text-sm text-muted mb-6">
              The full source code, README, and architecture notes are available
              on GitHub.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {project.links.github && (
                <Button asChild>
                  < a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button asChild variant="secondary">
                    < a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalIcon className="w-4 h-4" />
                    Live Demo
                    </a>
                </Button>
                )}
                {project.links.paper && (
                <Button asChild variant="secondary">
                    < a
                    href={project.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalIcon className="w-4 h-4" />
                    Read Paper
                    </a>
                </Button>
                )}
            </div>
          </section>
        </FadeIn>
      </div>

      {/* Prev/Next navigation */}
      <div className="container-page max-w-prose mt-16 pt-8 border-t border-border-subtle">
        <div className="flex items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex flex-col gap-1 max-w-[45%]"
            >
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" />
                Previous
              </span>
              <span className="text-sm text-foreground group-hover:text-accent transition-colors truncate">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-1 max-w-[45%] text-right ml-auto"
            >
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 justify-end">
                Next
                <ChevronRight className="w-3 h-3" />
              </span>
              <span className="text-sm text-foreground group-hover:text-accent transition-colors truncate">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </article>
  )
}
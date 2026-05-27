import { Link } from 'react-router-dom'
import { Github, ExternalLink as ExternalIcon, ArrowUpRight, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export default function ProjectCard({ project, reverse = false }) {
  return (
    <article
      className={cn(
        'grid md:grid-cols-12 gap-6 md:gap-8 items-center',
        reverse && 'md:[direction:rtl]'
      )}
    >
      {/* Visual side */}
      <div
        className={cn(
          'md:col-span-7 [direction:ltr]',
          reverse ? 'md:col-start-6' : ''
        )}
      >
        <Link
          to={`/projects/${project.slug}`}
          className="block relative overflow-hidden rounded-xl border border-border bg-surface group hover:border-accent/50 transition-all duration-300"
        >
          <div className="aspect-[16/10] bg-gradient-to-br from-surface to-surface-elevated relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

            {/* Centered project title (placeholder for screenshot) */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center max-w-md">
                <p className="font-mono text-xs text-accent mb-2">
                  /projects/{project.slug}
                </p>
                <h4 className="text-h3 font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />

            {/* "Read case study" pill */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-mono text-foreground opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Read case study
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </Link>
      </div>

      {/* Content side */}
      <div
        className={cn(
          'md:col-span-5 [direction:ltr] space-y-4',
          reverse ? 'md:text-right md:col-start-1 md:row-start-1' : ''
        )}
      >
        <div>
          <p className="font-mono text-xs text-accent mb-2">Featured Project</p>
          <h3 className="text-h2 font-semibold text-foreground">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:text-accent transition-colors"
            >
              {project.title}
            </Link>
          </h3>
          {project.comingSoon && (
            <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-md bg-warning/10 border border-warning/30 text-warning text-xs font-mono">
              <Clock className="w-3 h-3" />
              In Progress
            </span>
          )}
        </div>

        {/* Tagline in a card */}
        <div className="card bg-surface-elevated">
          <p className="text-sm text-muted leading-relaxed">{project.tagline}</p>
        </div>

        {/* Tech stack */}
        <ul
          className={cn(
            'flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-foreground',
            reverse && 'md:justify-end'
          )}
        >
          {project.tech.slice(0, 6).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* Links */}
        <div
          className={cn(
            'flex items-center gap-3 pt-1',
            reverse && 'md:justify-end'
          )}
        >
          {project.links.github && (
            < a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {(project.links.demo || project.links.paper) && (
            < a
                href={project.links.demo || project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} ${project.links.paper ? 'research paper' : 'live demo'}`}
                className="p-2 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
                <ExternalIcon className="w-4 h-4" />
            </a>
            )}
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-mono text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
import { ExternalLink, FileText } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { publications } from '@/data/publications'

export default function Publications() {
  return (
    <Section id="publications" label="05. Publications">
      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <article className="card-interactive">
              <div className="flex items-start gap-4">
                <div
                  className="hidden sm:flex w-12 h-12 rounded-md bg-accent/10 border border-accent/20 items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <FileText className="w-5 h-5 text-accent" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge variant="accent">Peer-Reviewed</Badge>
                    <Badge>IEEE</Badge>
                    <span className="text-xs font-mono text-muted-foreground">
                      April 2024
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-1.5 leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.venue}
                  </p>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {pub.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-border-subtle">
                    < a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-accent hover:text-accent-hover inline-flex items-center gap-1.5 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      DOI: {pub.doi}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
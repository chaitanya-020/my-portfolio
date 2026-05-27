import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { education } from '@/data/education'
import { Calendar, MapPin, Award } from 'lucide-react'

function formatPeriod(start, end) {
  const fmt = (s) =>
    new Date(s).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${fmt(start)} — ${fmt(end)}`
}

export default function Education() {
  return (
    <Section id="education" label="07. Education">
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <article className="card">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-h3 font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-accent mt-1">{edu.degree}</p>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {formatPeriod(edu.startDate, edu.endDate)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-accent">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    GPA {edu.gpa}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Relevant Coursework
                </p>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted">
                  {edu.coursework.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <span className="text-accent text-xs">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {edu.activities && (
                <div className="pt-3 border-t border-border-subtle">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    Activities & Honors
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {edu.activities}
                  </p>
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
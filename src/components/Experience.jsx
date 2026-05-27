import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { Badge } from '@/components/ui/Badge'
import { experience } from '@/data/experience'
import { Calendar, MapPin } from 'lucide-react'

function formatPeriod(start, end) {
  const fmt = (s) =>
    new Date(s).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${fmt(start)} — ${fmt(end)}`
}

export default function Experience() {
  return (
    <Section id="experience" label="02. Experience">
      <div className="space-y-12">
        {experience.map((job, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <article className="relative pl-8 md:pl-12 border-l border-border-subtle group">
              {/* Timeline dot */}
              <div
                className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"
                aria-hidden="true"
              />

              <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div>
                    <h3 className="text-h3 font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-base text-accent mt-1">
                      @ {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      {formatPeriod(job.startDate, job.endDate)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {job.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted leading-relaxed">{job.description}</p>

                {/* Bullets */}
                <ul className="space-y-2 pl-5">
                  {job.bullets.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-sm text-muted leading-relaxed relative before:content-['▸'] before:absolute before:-left-5 before:text-accent before:text-xs before:top-1"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
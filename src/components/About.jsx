import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { personal } from '@/data/personal'

export default function About() {
  return (
    <Section id="about" label="01. About">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Left: prose */}
        <div className="md:col-span-2 space-y-5 text-muted text-base leading-relaxed">
          {personal.about.map((paragraph, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <p>{paragraph}</p>
            </FadeIn>
          ))}

          <FadeIn delay={0.2}>
            <p>
              When I'm not coding, you'll find me reading systems papers, exploring
              new database internals, or contributing to my{' '}
              <span className="text-foreground">competitive programming</span> habit.
              I previously served as Vice President of the Competitive Coding Club
              at Vardhaman College of Engineering, where I grew active participation
              by <span className="text-foreground">40%</span>.
            </p>
          </FadeIn>
        </div>

        {/* Right: quick facts */}
        <FadeIn delay={0.3}>
          <div className="card space-y-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Location
              </p>
              <p className="text-sm text-foreground">{personal.location}</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Graduating
              </p>
              <p className="text-sm text-foreground">May 2026</p>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Current GPA
              </p>
              <p className="text-sm text-foreground">3.91 / 4.00</p>
            </div>
            <div className="pt-3 border-t border-border-subtle">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Currently exploring
              </p>
              <p className="text-sm text-foreground">
                Vector databases, distributed systems, full-stack engineering
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  )
}
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <Section id="skills" label="06. Skills & Tools">
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((group, idx) => (
          <FadeIn key={group.category} delay={idx * 0.05}>
            <div className="card">
              <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground font-mono"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
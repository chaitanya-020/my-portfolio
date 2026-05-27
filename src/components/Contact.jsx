import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { personal } from '@/data/personal'

export default function Contact() {
  return (
    <Section id="contact" label="08. Get In Touch">
      <FadeIn>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h1 font-semibold text-foreground mb-4 tracking-tight">
            Let's build something.
          </h2>

          <p className="text-base text-muted leading-relaxed mb-10 max-w-prose mx-auto">
            I'm currently looking for full-time Software Engineering, ML Engineering,
            and Backend roles starting <span className="text-foreground">May 2026</span>.
            If you're hiring, working on something technically interesting, or just
            want to chat about databases and ML — my inbox is open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <Button asChild size="lg">
              < a href={personal.socials.email}>
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              < a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          {/* Quick info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border-subtle">
            
            < a  href={personal.socials.email}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-surface transition-colors group"
            >
              <Mail className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
              <span className="text-xs font-mono text-muted-foreground">Email</span>
              <span className="text-sm text-foreground break-all">
                {personal.email}
              </span>
            </a>
            < a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-surface transition-colors group"
            >
              <Github className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
              <span className="text-xs font-mono text-muted-foreground">GitHub</span>
              <span className="text-sm text-foreground">@chaitanya-020</span>
            </a>
            <div className="flex flex-col items-center gap-2 p-4">
              <MapPin className="w-5 h-5 text-muted" />
              <span className="text-xs font-mono text-muted-foreground">Location</span>
              <span className="text-sm text-foreground">{personal.location}</span>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
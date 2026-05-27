import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '@/data/personal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle mt-20">
      <div className="container-page py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left: name + tagline */}
          <div>
            <p className="font-mono text-sm text-foreground">
              <span className="text-accent">&gt;</span> {personal.name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with React, Vite & Tailwind. Designed and engineered by me.
            </p>
          </div>

          {/* Right: socials */}
          <div className="flex items-center gap-1">
            < a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            < a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            < a
              href={personal.socials.email}
              aria-label="Email"
              className="p-2.5 rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Gelivi Sai Chaitanya. All rights reserved.</p>
          < a
            href="https://github.com/chaitanya-020/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors font-mono"
          >
            View source ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
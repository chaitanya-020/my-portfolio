import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personal } from '@/data/personal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 grid-bg mask-fade-bottom opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="font-mono text-sm text-accent mb-6"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-display font-bold text-foreground mb-3 tracking-tight"
          >
            Gelivi Sai Chaitanya.
          </motion.h1>

          {/* Role tagline */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-display font-bold gradient-text mb-8 tracking-tight"
          >
            I build software across the stack.
          </motion.h2>

          {/* Pitch */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-lg text-muted max-w-2xl leading-relaxed mb-10"
          >
            I'm a CS graduate student at the{' '}
            <span className="text-foreground">University of Oklahoma</span>{' '}
            specializing in <span className="text-foreground">backend systems</span>,{' '}
            <span className="text-foreground">machine learning</span>, and{' '}
            <span className="text-foreground">database internals</span>. Most recently, I authored
            two custom PostgreSQL extensions in C for vector retrieval and published
            ML research at IEEE I2CT 2024.
          </motion.p>

          {/* Status pill */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-mono mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            {personal.status}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg">
              < a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4" />
                View Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              < a href={personal.socials.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              < a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              < a href={personal.socials.email}>
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          < a
            href="#about"
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
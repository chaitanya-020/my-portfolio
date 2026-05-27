import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { personal } from '@/data/personal'
import { cn } from '@/lib/utils'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const activeId = useScrollSpy(navLinks.map(l => l.id))
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const handleNavClick = (e, id) => {
    if (!isHome) return
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled || !isHome
          ? 'bg-background/80 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-page h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-sm font-medium text-foreground hover:text-accent transition-colors"
          aria-label="Go to home"
        >
          <span className="text-accent">&gt;</span> {personal.shortName.toLowerCase()}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
          {navLinks.map((link, idx) => (
            <li key={link.id}>
              <Link
                to={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={cn(
                  'px-3 py-2 rounded-md transition-colors',
                  isHome && activeId === link.id
                    ? 'text-accent'
                    : 'text-muted hover:text-foreground'
                )}
              >
                <span className="text-muted-foreground mr-1">0{idx + 1}.</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <Button
          asChild
          variant="outline"
          size="sm"
          className="hidden md:inline-flex"
        >
          < a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border-subtle bg-background">
          <ul className="container-page py-4 flex flex-col gap-1 font-mono text-sm">
            {navLinks.map((link, idx) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={cn(
                    'block px-3 py-3 rounded-md transition-colors',
                    isHome && activeId === link.id
                      ? 'text-accent bg-surface'
                      : 'text-muted hover:text-foreground hover:bg-surface'
                  )}
                >
                  <span className="text-muted-foreground mr-2">0{idx + 1}.</span>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3 mt-3 border-t border-border-subtle">
              < a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-accent"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ExternalLink({ href, children, className, showIcon = true, ...props }) {
  return (
    < a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('link-underline inline-flex items-center gap-1', className)}
      {...props}
    >
      {children}
      {showIcon && (
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </a>
  )
}
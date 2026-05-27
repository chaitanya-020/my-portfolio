import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export const Section = forwardRef(
  ({ id, label, title, children, className, containerClassName }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn('section', className)}
      >
        <div className={cn('container-page', containerClassName)}>
          {label && (
            <div className="section-label flex items-center gap-3">
              <span className="text-accent">/</span>
              <span>{label}</span>
              <span className="flex-1 h-px bg-border-subtle ml-2" aria-hidden="true" />
            </div>
          )}
          {title && (
            <h2 className="text-h1 font-semibold text-foreground mb-12 tracking-tight">
              {title}
            </h2>
          )}
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = 'Section'
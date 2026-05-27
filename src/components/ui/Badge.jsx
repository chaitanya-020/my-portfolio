import { cn } from '@/lib/utils'

export function Badge({ children, className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-surface-elevated border-border-subtle text-muted',
    accent: 'bg-accent/10 border-accent/30 text-accent',
    success: 'bg-success/10 border-success/30 text-success',
    outline: 'bg-transparent border-border text-muted',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
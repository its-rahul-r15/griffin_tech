import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('text-base font-semibold tracking-tight text-foreground', className)}>
      Griffin Tech
    </span>
  )
}

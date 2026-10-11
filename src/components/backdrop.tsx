import { cn } from '@/lib/utils'

export function Backdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--brand)_14%,transparent),transparent_68%)]',
        className,
      )}
    >
      <img
        src="/griffin-background.svg"
        alt=""
        className="absolute left-1/2 top-0 h-auto w-[1800px] max-w-none -translate-x-1/2 select-none [mask-image:linear-gradient(to_bottom,#000_45%,transparent_100%)]"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_48%,var(--background)_100%)]" />
    </div>
  )
}

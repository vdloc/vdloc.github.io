import { cn } from "@/lib/utils"

/**
 * Renders a placeholder div with a pulsing animation and rounded corners, typically used to indicate loading content.
 *
 * Additional class names and div attributes can be provided for further customization.
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }

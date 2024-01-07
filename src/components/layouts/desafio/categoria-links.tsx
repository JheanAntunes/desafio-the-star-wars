import { cn } from '@/lib/utils'
import { TypographyH2 } from '../../ui/typography'

export function CategoriaContainer({
  children,
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  return (
    <section
      className={cn('container flex flex-col gap-5', className)}
      {...restProps}
    >
      {children}
    </section>
  )
}
export function CategoriaTitle({
  children,
  ...restProps
}: React.ComponentProps<'h2'>) {
  return <TypographyH2 {...restProps}>{children}</TypographyH2>
}

export function CategoriaContainerListLinks({
  children,
  className,
  ...restProps
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn(
        'hidden items-center justify-between last:md:flex',
        className
      )}
      {...restProps}
    >
      {children}
    </ul>
  )
}

export function CategoriaContainerListLinksItem({
  children,
  ...restProps
}: React.ComponentProps<'li'>) {
  return <li {...restProps}>{children}</li>
}

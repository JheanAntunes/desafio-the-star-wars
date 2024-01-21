import { cn } from '@/lib/utils'

export function TypographyH1({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl',
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  )
}

export function TypographyH2({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn('font-sans text-2xl md:text-3xl lg:text-4xl', className)}
      {...restProps}
    >
      {children}
    </h2>
  )
}

export function TypographyH3({
  children,
  className,
  ...restProps
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn('font-sans text-xl md:text-2xl lg:text-3xl', className)}
      {...restProps}
    >
      {children}
    </h3>
  )
}

export function TypographyP({
  children,
  className,
  ...restProps
}: React.ComponentProps<'p'>) {
  return (
    <p className={cn('', className)} {...restProps}>
      {children}
    </p>
  )
}

export function TypographyList({
  children,
  className,
  ...restProps
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...restProps}
    >
      {children}
    </ul>
  )
}

export function TypographyListItem({
  children,
  className,
  ...restProps
}: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn('text-zinc-700 dark:text-gray-300', className)}
      {...restProps}
    >
      {children}
    </li>
  )
}

export function TypographySmall({
  children,
  className,
  ...restProps
}: React.ComponentProps<'small'>) {
  return (
    <small
      className={cn(
        'text-sm font-medium leading-none text-zinc-800 dark:text-gray-300',
        className
      )}
      {...restProps}
    >
      {children}
    </small>
  )
}

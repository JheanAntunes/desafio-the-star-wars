import { TypographyH2 } from './typography'

export function CategoriaContainer({
  children,
  ...restProps
}: React.ComponentProps<'div'>) {
  return (
    <section className="container flex flex-col gap-5" {...restProps}>
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
  ...restProps
}: React.ComponentProps<'ul'>) {
  return (
    <ul className="flex items-center justify-between" {...restProps}>
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

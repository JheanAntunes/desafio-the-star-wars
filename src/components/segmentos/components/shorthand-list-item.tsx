import { TypographyListItem } from '@/components/ui/typography'

type TypeShorthandListItemProps = {
  title: string
  caracteristica: string
}
function ShorthandListItem({
  title,
  caracteristica
}: TypeShorthandListItemProps) {
  return (
    <TypographyListItem className="text-sm font-medium leading-none text-zinc-900">
      {title} {caracteristica}
    </TypographyListItem>
  )
}

export default ShorthandListItem

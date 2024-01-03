import { TypographyListItem, TypographySmall } from '@/components/ui/typography'

type TypeShorthandListItemProps = {
  title: string
  caracteristica: string
}
function ShorthandListItem({
  title,
  caracteristica
}: TypeShorthandListItemProps) {
  return (
    <TypographyListItem className="text-zinc-700">
      <div className="flex items-center justify-between">
        <TypographySmall className="text-zinc-900">{title}</TypographySmall>{' '}
        <TypographySmall className="text-zinc-900">
          {caracteristica}
        </TypographySmall>
      </div>
    </TypographyListItem>
  )
}

export default ShorthandListItem

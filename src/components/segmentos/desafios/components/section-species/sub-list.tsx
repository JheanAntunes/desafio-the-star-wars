import {
  TypographyList,
  TypographyListItem,
  TypographySmall
} from '@/components/ui/typography'
import LogicSubList from './logic-sub-list'

export type TypeSubListProps = {
  dataCaracteristicas: string[]
  break_by_index?: number
}
const SubList = ({ dataCaracteristicas, break_by_index }: TypeSubListProps) => {
  const { isBreak, IsBreakShowQuantityMissing } = LogicSubList({
    dataCaracteristicas,
    break_by_index
  })

  return (
    <TypographyList className="my-0">
      {dataCaracteristicas.map((caracteristica, index) => {
        if (isBreak(index)) return null

        return (
          <TypographyListItem key={caracteristica}>
            <TypographySmall className="text-zinc-900">
              {caracteristica}
            </TypographySmall>
          </TypographyListItem>
        )
      })}
      {IsBreakShowQuantityMissing()}
    </TypographyList>
  )
}

export default SubList

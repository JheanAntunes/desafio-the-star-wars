import { TypographyListItem, TypographySmall } from '@/components/ui/typography'
import { TypeSubListProps } from './sub-list'

const LogicSubList = ({
  dataCaracteristicas,
  break_by_index
}: TypeSubListProps) => {
  const isBreak = (index: number) => {
    if (
      break_by_index &&
      break_by_index <= dataCaracteristicas.length &&
      break_by_index < index
    ) {
      return true
    }
    return false
  }

  const IsBreakShowQuantityMissing = () => {
    if (
      break_by_index &&
      break_by_index < dataCaracteristicas.length &&
      dataCaracteristicas.length - (break_by_index + 1) !== 0
    ) {
      return (
        <TypographyListItem>
          <TypographySmall className="text-zinc-800 dark:text-gray-300">
            tem mais {dataCaracteristicas.length - (break_by_index + 1)}.
          </TypographySmall>
        </TypographyListItem>
      )
    }
    return null
  }

  return {
    isBreak,
    IsBreakShowQuantityMissing
  }
}

export default LogicSubList

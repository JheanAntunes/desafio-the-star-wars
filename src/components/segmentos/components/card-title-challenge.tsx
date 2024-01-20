'use client'
import useLocalStorageChallenger from '@/components/hooks/useLocalStorageChallenger'
import { CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import { TypeSegmento } from '../types/segmento'

type CardTitleChallengeProps = {
  caracteristica: string
  categoria: keyof TypeDataStorageChallenger
  segmento: TypeSegmento
} & React.ComponentPropsWithoutRef<'h3'>
const CardTitleChallenge = ({
  caracteristica,
  categoria,
  segmento,
  className,
  children,
  ...restProps
}: CardTitleChallengeProps) => {
  const { hasCaracteristica } = useLocalStorageChallenger({
    caracteristica,
    categoria
  })
  return (
    <CardTitle
      className={cn(
        'font-sans font-normal transition-colors group-hover:text-blue-500',
        className
      )}
      {...restProps}
    >
      {hasCaracteristica || segmento === 'docs' ? caracteristica : children}
    </CardTitle>
  )
}

export default CardTitleChallenge

'use client'
import useLocalStorageChallenger from '@/components/hooks/useLocalStorageChallenger'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'

type CardChallengeProps = {
  caracteristica: string
  categoria: keyof TypeDataStorageChallenger
} & React.ComponentPropsWithoutRef<'div'>
const CardChallenge = ({
  caracteristica,
  categoria,
  className,
  children,
  ...restProps
}: CardChallengeProps) => {
  const { hasCaracteristica } = useLocalStorageChallenger({
    caracteristica,
    categoria
  })
  return (
    <Card
      className={cn(
        'relative bg-transparent transition-colors group-hover:border-blue-500',
        className,
        hasCaracteristica ? 'border-emerald-500' : ''
      )}
      {...restProps}
    >
      {children}
    </Card>
  )
}

export default CardChallenge

'use client'
import useLocalStorageChallenger from '@/components/hooks/useLocalStorageChallenger'
import { cn } from '@/lib/utils'
import { TypeDataStorageChallenger } from '@/types/TypeLocalStorage'
import { CheckCircle2, CircleSlash } from 'lucide-react'

type CheckedDesafioProps = {
  caracteristica: string
  categoria: keyof TypeDataStorageChallenger
}
const CheckedDesafio = ({ caracteristica, categoria }: CheckedDesafioProps) => {
  const { hasCaracteristica } = useLocalStorageChallenger({
    categoria,
    caracteristica
  })

  return (
    <div className="absolute right-0 top-0">
      {hasCaracteristica ? (
        <CheckCircle2
          size={32}
          className={cn('', {
            'animate-pulse text-emerald-500 animate-infinite animate-ease-linear group-hover:text-blue-500':
              hasCaracteristica
          })}
          strokeWidth={1.25}
        />
      ) : (
        <CircleSlash
          size={32}
          className={cn(
            'text-red-500 group-hover:text-blue-500 lg:hover:text-emerald-500'
          )}
          strokeWidth={1.25}
        />
      )}
    </div>
  )
}

export default CheckedDesafio

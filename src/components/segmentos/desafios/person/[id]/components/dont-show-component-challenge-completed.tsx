'use client'

import { Badge } from '@/components/ui/badge'
import { TypographyH1 } from '@/components/ui/typography'
import { useContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'

type TypeDontShowComponentChallengeCompleted = {
  secretCaracteristica: string
} & React.PropsWithChildren
const DontShowComponentChallengeCompleted = ({
  children,
  secretCaracteristica
}: TypeDontShowComponentChallengeCompleted) => {
  const { challengeCompleted } = useContextChallengePersonCompleted()
  return challengeCompleted ? (
    <div className="grid grid-cols-1 gap-1">
      <Badge
        className="animate-fade-down animate-once animate-duration-500 animate-delay-100 animate-ease-linear mx-auto border-emerald-500 font-sans font-normal"
        variant="outline"
      >
        Desafio Concluído
      </Badge>
      <TypographyH1 className="animate-fade animate-once animate-duration-500 animate-delay-100 animate-ease-linear lg:text-center">
        {secretCaracteristica}
      </TypographyH1>
    </div>
  ) : (
    children
  )
}

export default DontShowComponentChallengeCompleted

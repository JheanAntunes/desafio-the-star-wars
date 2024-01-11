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
      <Badge className="mx-auto border-emerald-500" variant="outline">
        Desafio Concluído
      </Badge>
      <TypographyH1 className="lg:text-center">
        {secretCaracteristica}
      </TypographyH1>
    </div>
  ) : (
    children
  )
}

export default DontShowComponentChallengeCompleted

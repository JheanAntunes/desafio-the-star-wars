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
        className="w-fit animate-fade-down border-emerald-500 font-sans font-normal animate-delay-100 animate-duration-500 animate-once animate-ease-linear md:mx-auto"
        variant="outline"
      >
        Desafio Concluído
      </Badge>
      <TypographyH1 className="animate-fade animate-delay-100 animate-duration-500 animate-once animate-ease-linear md:text-center lg:text-center">
        {secretCaracteristica}
      </TypographyH1>
    </div>
  ) : (
    children
  )
}

export default DontShowComponentChallengeCompleted

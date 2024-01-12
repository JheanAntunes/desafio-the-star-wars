'use client'
import { createContext, useContext, useState } from 'react'

type TypeContextChallengePersonCompleted = {
  challengeCompleted: boolean
  setChallengeCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

const ContextChallengePersonCompleted =
  createContext<TypeContextChallengePersonCompleted | null>(null)

export const ProviderContextChallengePersonCompleted = ({
  children
}: React.PropsWithChildren) => {
  const [isChallengeCompleted, setIsChallengeCompleted] = useState(false)
  return (
    <ContextChallengePersonCompleted.Provider
      value={{
        challengeCompleted: isChallengeCompleted,
        setChallengeCompleted: setIsChallengeCompleted
      }}
    >
      {children}
    </ContextChallengePersonCompleted.Provider>
  )
}

export const useContextChallengePersonCompleted = () => {
  const context = useContext(ContextChallengePersonCompleted)
  if (!context)
    throw new Error('Error: The component is not packaged in the provider')
  return context
}

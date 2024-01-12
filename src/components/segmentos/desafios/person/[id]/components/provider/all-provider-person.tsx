'use client'

import { ProviderContextChallengePersonCompleted } from '@/context/context-challenge-person-completed'
import { PropsWithChildren } from 'react'

const AllProviderPerson = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ProviderContextChallengePersonCompleted>
        {children}
      </ProviderContextChallengePersonCompleted>
    </>
  )
}

export default AllProviderPerson

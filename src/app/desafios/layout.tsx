import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Desafio',
  description: 'Página de desafios.'
}

function LayoutDesafios({ children }: React.PropsWithChildren) {
  return <>{children}</>
}

export default LayoutDesafios

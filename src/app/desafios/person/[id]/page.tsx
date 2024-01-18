import PersonDescription from '@/components/segmentos/components/person-description'
import DesafioPerson from '@/components/segmentos/desafios/person/[id]/components/desafio-person'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypesearchParams = {
  page?: string
}

type PageDinamicaPersonDesafioProps = {
  params: TypeParams
  searchParams: TypesearchParams
}

const PageDinamicaPersonDesafio = ({
  params,
  searchParams
}: PageDinamicaPersonDesafioProps) => {
  const { id } = params
  const { page } = searchParams
  return (
    <main className="container my-8 flex flex-col gap-8">
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <DesafioPerson id={id} page={page ?? '1'} />
      </Suspense>
      <Suspense fallback={<SkeletonDescription />}>
        <PersonDescription id={id} page={page ?? '1'} />
      </Suspense>
    </main>
  )
}

export default PageDinamicaPersonDesafio

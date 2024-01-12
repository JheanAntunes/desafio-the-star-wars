import DesafioPerson from '@/components/segmentos/desafios/person/[id]/components/desafio-person'
import DesafioPersonDescription from '@/components/segmentos/desafios/person/[id]/components/desafio-person-description'
import SkeletonDesafioPersonDescription from '@/components/segmentos/desafios/person/[id]/components/skeletons/skeletonDesafioPersonDescription'
import { Skeleton } from '@/components/ui/skeleton'
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
      <Suspense fallback={<SkeletonDesafioPersonDescription />}>
        <DesafioPersonDescription id={id} page={page ?? '1'} />
      </Suspense>
    </main>
  )
}

export default PageDinamicaPersonDesafio

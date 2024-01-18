import PlanetDescription from '@/components/segmentos/components/planets-description'
import { hasNext } from '@/components/segmentos/utils/has-next'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type TypeSearchParams = {
  page?: string
}

type TypeParams = {
  id: string
}

type TypePageDinamicaPlanet = {
  searchParams: TypeSearchParams
  params: TypeParams
}

//dinamica rota
const PageDinamicaPlanet = async ({
  params,
  searchParams
}: TypePageDinamicaPlanet) => {
  const { id } = params
  const { page } = searchParams
  const currentPage = page ?? '1'

  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page ?? 1}&format=json`
  )
  //verificando se o id(index) é menor que a quantidade do array result
  if (!hasNext(Number(id), results.length)) notFound()
  const { name } = results[Number(id)]

  return (
    <main className="container flex flex-col gap-8">
      <TypographyH1 className="text-center">{name}</TypographyH1>
      <Suspense fallback={<SkeletonDescription />}>
        <PlanetDescription id={id} page={currentPage} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaPlanet

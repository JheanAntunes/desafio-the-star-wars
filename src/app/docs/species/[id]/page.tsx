import SpeciesDescription from '@/components/segmentos/components/species-description'
import { hasNext } from '@/components/segmentos/utils/has-next'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type TypeSearchParams = {
  page?: string
}

type TypeParams = {
  id: string
}

type TypePageDinamicaSpecies = {
  searchParams: TypeSearchParams
  params: TypeParams
}

//dinamica rota
const PageDinamicaSpecies = async ({
  params,
  searchParams
}: TypePageDinamicaSpecies) => {
  const { id } = params
  const { page } = searchParams
  const currentPage = page ?? '1'

  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species/?page=${currentPage}&format=json`
  )
  //verificando se o id(index) é menor que a quantidade do array result
  if (!hasNext(Number(id), results.length)) notFound()
  const { name } = results[Number(id)]

  return (
    <main className="container flex flex-col gap-8">
      <TypographyH1 className="text-center">{name}</TypographyH1>
      <Suspense fallback={<SkeletonDescription />}>
        <SpeciesDescription id={id} page={currentPage} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaSpecies

import PersonDescription from '@/components/segmentos/components/person-description'
import { hasNext } from '@/components/segmentos/utils/has-next'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypesearchParams = {
  page?: string
}

type PageDinamicaPersonDocsProps = {
  params: TypeParams
  searchParams: TypesearchParams
}

const PageDinamicaPersonDocs = async ({
  params,
  searchParams
}: PageDinamicaPersonDocsProps) => {
  const { id } = params
  const { page } = searchParams
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page ?? 1}&format=json`
  )
  //verificando se o id(index) é menor que a quantidade do array result
  if (!hasNext(Number(id), results.length)) notFound()
  const { name } = results[Number(id)]

  return (
    <main className="container my-8 flex flex-col gap-8">
      <TypographyH1 className="text-center">{name}</TypographyH1>
      <Suspense fallback={<SkeletonDescription />}>
        <PersonDescription id={id} page={page ?? '1'} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaPersonDocs

import PersonDescription from '@/components/segmentos/components/person-description'
import NotFoundData from '@/components/segmentos/utils/not-found-data'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { Metadata } from 'next'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypesearchParams = {
  page?: string
}

type Props = {
  params: TypeParams
  searchParams: {
    [key: string]: string | string[] | undefined
  } & TypesearchParams
}

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  // read route params
  const id = params.id
  const page = searchParams.page ?? '1'
  // fetch data
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page}&format=json`
  )
  //not found
  NotFoundData(Number(id), results.length)

  const { name } = results[Number(id)]
  return {
    title: name,
    description: `A documentação da pessoa ${name}`,
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Next.js',
      'server components',
      'React',
      'JavaScript',
      'shadcn-ui'
    ],
    authors: [{ name: 'Jhean' }],
    creator: 'Jhean',
    publisher: 'Jhean'
  }
}

const PageDinamicaPersonDocs = async ({ params, searchParams }: Props) => {
  const { id } = params
  const { page } = searchParams
  const { results } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${page ?? 1}&format=json`
  )
  //not found
  NotFoundData(Number(id), results.length)

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

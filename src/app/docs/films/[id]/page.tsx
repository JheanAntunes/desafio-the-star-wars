import FilmDescription from '@/components/segmentos/components/film-description'
import { hasNext } from '@/components/segmentos/utils/has-next'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypesearchParams = {
  page?: string
}

type PageDinamicaFilmProps = {
  params: TypeParams
  searchParams: TypesearchParams
}

const PageDinamicaFilm = async ({
  params,
  searchParams
}: PageDinamicaFilmProps) => {
  const { id } = params
  const { page } = searchParams
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page ?? 1}&format=json`
  )
  //verificando se o id(index) é menor que a quantidade do array result
  if (!hasNext(Number(id), results.length)) notFound()
  const { title } = results[Number(id)]

  return (
    <main className="container my-8 flex flex-col gap-8">
      <TypographyH1 className="text-center">{title}</TypographyH1>
      <Suspense fallback={<SkeletonDescription />}>
        <FilmDescription id={id} page={page ?? '1'} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaFilm

import VehicleDescription from '@/components/segmentos/components/vehicle-description'
import { hasNext } from '@/components/segmentos/utils/has-next'
import SkeletonDescription from '@/components/ui/skeletons/skeleton-description'
import { TypographyH1 } from '@/components/ui/typography'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type TypeSearchParams = {
  page?: string
}

type TypeParams = {
  id: string
}

type TypePageDinamicaVehicle = {
  searchParams: TypeSearchParams
  params: TypeParams
}

//dinamica rota
const PageDinamicaVehicle = async ({
  params,
  searchParams
}: TypePageDinamicaVehicle) => {
  const { id } = params
  const { page } = searchParams
  const currentPage = page ?? '1'

  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${currentPage}&format=json`
  )
  //verificando se o id(index) é menor que a quantidade do array result
  if (!hasNext(Number(id), results.length)) notFound()
  const { name } = results[Number(id)]

  return (
    <main className="container flex flex-col gap-8">
      <TypographyH1 className="text-center">{name}</TypographyH1>
      <Suspense fallback={<SkeletonDescription />}>
        <VehicleDescription id={id} page={currentPage} segmento="docs" />
      </Suspense>
    </main>
  )
}

export default PageDinamicaVehicle

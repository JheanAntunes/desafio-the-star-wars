import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { hasNext } from '@/components/segmentos/utils/has-next'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/typography'
import { TypeFetch, TypePlanet } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Planet_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import ListPlanet from './list-planet'

type TypePlanetDescriptionProps = {
  id: string
  page: string
  segmento: TypeSegmento
}

const PlanetDescription = async ({
  id,
  page,
  segmento
}: TypePlanetDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypePlanet>>(
    `${BASE_URL_API}/planets/?page=${page}&format=json`
  )
  const dataPlanet = results[Number(id)]

  const dataFormated = modifying_data_Planet_improve_UI([dataPlanet])

  const nextDesafio = hasNext(Number(id), results.length)

  return (
    <section className="flex flex-col pb-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {nextDesafio && (
          <Link
            href={`/${segmento}/planets/${nextDesafio}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            {segmento === 'desafios'
              ? 'Próximo Desafio'
              : 'Próxima Documentação'}{' '}
            <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <ListPlanet dataPlanet={dataFormated} />
    </section>
  )
}

export default PlanetDescription

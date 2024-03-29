import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { hasNext } from '@/components/segmentos/utils/has-next'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/typography'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_Films_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import ListFilm from './list-film'

type TypeFilmDescriptionProps = {
  id: string
  page: string
  segmento: TypeSegmento
}

const FilmDescription = async ({
  id,
  page,
  segmento
}: TypeFilmDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${page}&format=json`
  )

  const dataFilm = results[Number(id)]

  const dataFormated = modifying_data_Films_improve_UI([dataFilm])

  const nextDesafio = hasNext(Number(id), results.length)

  return (
    <section className="mt-8 flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {nextDesafio && (
          <Link
            href={`/${segmento}/films/${nextDesafio}?page=${page}`}
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
      <ListFilm dataFilm={dataFormated} />
    </section>
  )
}

export default FilmDescription

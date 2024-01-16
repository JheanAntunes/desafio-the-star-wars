import { hasNext } from '@/components/segmentos/utils/has-next'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/typography'
import { TypeFetch, TypeStarships } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_STARSHIPS_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import ListStarship from '../../../../components/list-starship'

type TypeStarshipsDescriptionProps = {
  id: string
  page: string
}

const StarshipsDescription = async ({
  id,
  page
}: TypeStarshipsDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeStarships>>(
    `${BASE_URL_API}/starships/?page=${page}&format=json`
  )

  const dataStarships = results[Number(id)]

  const dataFormated = modifying_data_STARSHIPS_improve_UI([dataStarships])

  const nextDesafio = hasNext(Number(id), results.length)

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {nextDesafio && (
          <Link
            href={`/desafios/starships/${nextDesafio}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <ListStarship dataStarship={dataFormated} />
    </section>
  )
}

export default StarshipsDescription

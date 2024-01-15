import { hasNext } from '@/components/segmentos/utils/has-next'
import { buttonVariants } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/typography'
import { TypeFetch, TypeSpecies } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_SPECIES_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import ListSpecies from '../../../components/list-species'

type TypeSpeciesDescriptionProps = {
  id: string
  page: string
}

const SpeciesDescription = async ({
  id,
  page
}: TypeSpeciesDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeSpecies>>(
    `${BASE_URL_API}/species/?page=${page}&format=json`
  )
  const dataSpecie = results[Number(id)]

  const dataFormated = modifying_data_SPECIES_improve_UI([dataSpecie])

  const nextDesafio = hasNext(Number(id), results.length)

  return (
    <section className="flex flex-col pb-8">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {nextDesafio && (
          <Link
            href={`/desafios/species/${nextDesafio}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <ListSpecies dataSpecie={dataFormated} />
    </section>
  )
}

export default SpeciesDescription

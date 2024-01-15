import { buttonVariants } from '@/components/ui/button'
import { TypographyH2 } from '@/components/ui/typography'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import { modifying_data_VEHICLES_improve_UI } from '@/utils/modiying_data_improve_ui'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'
import ListVehicle from '../../../components/list-vehicle'

type TypeVehicleDescriptionProps = {
  id: string
  page: string
}

const VehicleDescription = async ({
  id,
  page
}: TypeVehicleDescriptionProps) => {
  const { results } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${page}&format=json`
  )

  const dataVehicle = results[Number(id)]

  const dataFormated = modifying_data_VEHICLES_improve_UI([dataVehicle])

  const isNextIndex = Number(id) + 1
  const NextDesafio = isNextIndex < results.length

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <TypographyH2 className="order-2 md:order-1">Descrição</TypographyH2>
        {NextDesafio && (
          <Link
            href={`/desafios/vehicles/${isNextIndex}?page=${page}`}
            className={buttonVariants({
              variant: 'outline',
              className: 'order-1 flex gap-1 font-sans md:order-2'
            })}
          >
            Próximo Desafio <NavigationIcon width={20} height={20} />
          </Link>
        )}
      </div>
      <ListVehicle dataVehicle={dataFormated} />
    </section>
  )
}

export default VehicleDescription

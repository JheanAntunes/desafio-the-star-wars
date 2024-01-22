import PaginationLinks from '@/components/segmentos/components/pagination-links'
import PaginationMobile from '@/components/segmentos/components/pagination-mobile'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'

type TypeVehiclesPagination = {
  page?: string
  segmento: TypeSegmento
}

const VehiclesPagination = async (props: TypeVehiclesPagination) => {
  const currentPage = props.page ? Number(props.page) : 1
  const { segmento } = props
  const {
    count: totalData,
    previous,
    next
  } = await fetchGet<TypeFetch<TypeVehicle>>(
    `${BASE_URL_API}/vehicles/?page=${currentPage}&format=json`
  )
  const quantityPerPage = 10
  const { pagination } = PaginationLogic({ totalData, quantityPerPage })

  return (
    <>
      <Pagination>
        <PaginationContent>
          {previous && (
            <PaginationPrevious
              href={`/${segmento}/vehicles/?page=${currentPage - 1}`}
            />
          )}
          <div className="hidden md:flex">
            <PaginationLinks
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="vehicles"
            />
          </div>
          <div className="flex md:hidden">
            <PaginationMobile
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="vehicles"
            />
          </div>
          {next && (
            <PaginationNext
              href={`/${segmento}/vehicles/?page=${currentPage + 1}`}
            />
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default VehiclesPagination

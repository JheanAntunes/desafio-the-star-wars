import PaginationLinks from '@/components/segmentos/components/pagination-links'
import PaginationMobile from '@/components/segmentos/components/pagination-mobile'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'

type TypePlanetPagination = {
  page?: string
  segmento: TypeSegmento
}

const PlanetPagination = async (props: TypePlanetPagination) => {
  const currentPage = props.page ? Number(props.page) : 1
  const { segmento } = props
  const {
    count: totalData,
    previous,
    next
  } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/planets/?page=${currentPage}&format=json`
  )
  const quantityPerPage = 10
  const { pagination } = PaginationLogic({ totalData, quantityPerPage })

  return (
    <>
      <Pagination>
        <PaginationContent>
          {previous && (
            <PaginationPrevious
              href={`/${segmento}/planets/?page=${currentPage - 1}`}
            />
          )}
          <div className="hidden md:flex">
            <PaginationLinks
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="planets"
            />
          </div>
          <div className="flex md:hidden">
            <PaginationMobile
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="planets"
            />
          </div>
          {next && (
            <PaginationNext
              href={`/${segmento}/planets/?page=${currentPage + 1}`}
            />
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PlanetPagination

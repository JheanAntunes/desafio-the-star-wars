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
import PaginationLinks from '../../../components/pagination-links'
import PersonPaginationMobile from '../../../components/pagination-mobile'

type TypePersonPagination = {
  page?: string
  segmento: TypeSegmento
}

const PersonPagination = async (props: TypePersonPagination) => {
  const currentPage = props.page ? Number(props.page) : 1
  const { segmento } = props
  const {
    count: totalData,
    previous,
    next
  } = await fetchGet<TypeFetch<TypePerson>>(
    `${BASE_URL_API}/people/?page=${currentPage}&format=json`
  )
  const quantityPerPage = 10
  const { pagination } = PaginationLogic({ totalData, quantityPerPage })

  return (
    <>
      <Pagination>
        <PaginationContent>
          {previous && (
            <PaginationPrevious
              href={`/${segmento}/person/?page=${currentPage - 1}`}
            />
          )}
          <div className="hidden md:flex">
            <PaginationLinks
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="person"
            />
          </div>
          <div className="flex md:hidden">
            <PersonPaginationMobile
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="person"
            />
          </div>
          {next && (
            <PaginationNext
              href={`/${segmento}/person/?page=${currentPage + 1}`}
            />
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PersonPagination

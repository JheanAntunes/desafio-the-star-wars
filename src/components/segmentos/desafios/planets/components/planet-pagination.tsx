import { TypeSegmento } from '@/components/segmentos/types/segmento'
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypePerson } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'
import { Fragment } from 'react'

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
          {pagination.map((index) => (
            <Fragment key={index}>
              <PaginationLink
                href={`/${segmento}/planets/?page=${index + 1}`}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </Fragment>
          ))}
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

import { TypeSegmento } from '@/components/segmentos/types/segmento'
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypeVehicle } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'
import { Fragment } from 'react'

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
          {pagination.map((index) => (
            <Fragment key={index}>
              <PaginationLink
                href={`/${segmento}/vehicles/?page=${index + 1}`}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </Fragment>
          ))}
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

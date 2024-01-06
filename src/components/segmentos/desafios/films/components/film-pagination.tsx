import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'
import { Fragment } from 'react'

type TypeFilmsPagination = {
  page?: string
}

const FilmsPagination = async (props: TypeFilmsPagination) => {
  const currentPage = props.page ? Number(props.page) : 1

  const {
    count: totalData,
    previous,
    next
  } = await fetchGet<TypeFetch<TypeFilms>>(
    `${BASE_URL_API}/films/?page=${currentPage}&format=json`
  )
  const quantityPerPage = 6
  const { pagination } = PaginationLogic({ totalData, quantityPerPage })

  return (
    <>
      <Pagination>
        <PaginationContent>
          {previous && (
            <PaginationPrevious
              href={`/desafios/films/?page=${currentPage - 1}`}
            />
          )}
          {pagination.map((index) => (
            <Fragment key={index}>
              <PaginationLink
                href={`/desafios/films/?page=${index + 1}`}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </Fragment>
          ))}
          {next && (
            <PaginationNext href={`/desafios/films/?page=${currentPage + 1}`} />
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default FilmsPagination

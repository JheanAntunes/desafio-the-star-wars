import PaginationLinks from '@/components/segmentos/components/pagination-links'
import PaginationMobile from '@/components/segmentos/components/pagination-mobile'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { TypeFetch, TypeFilms } from '@/types/Typesfetch'
import { BASE_URL_API, fetchGet } from '@/utils/fetch'
import PaginationLogic from '@/utils/pagination-logic'

type TypeFilmsPagination = {
  page?: string
  segmento: TypeSegmento
}

const FilmsPagination = async (props: TypeFilmsPagination) => {
  const currentPage = props.page ? Number(props.page) : 1
  const { segmento } = props
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
              href={`/${segmento}/films/?page=${currentPage - 1}`}
            />
          )}
          <div className="hidden md:flex">
            <PaginationLinks
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="films"
            />
          </div>
          <div className="flex md:hidden">
            <PaginationMobile
              currentPage={currentPage}
              pagination={pagination}
              segmento={segmento}
              segmentoCategoria="films"
            />
          </div>
          {next && (
            <PaginationNext
              href={`/${segmento}/films/?page=${currentPage + 1}`}
            />
          )}
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default FilmsPagination

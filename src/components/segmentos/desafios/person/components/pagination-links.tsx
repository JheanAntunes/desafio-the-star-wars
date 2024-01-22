import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { PaginationLink } from '@/components/ui/pagination'
import { RotasCategorias } from '@/types/rotasCategorias'
import { Fragment } from 'react'

type PaginationLinksProps = {
  segmento: TypeSegmento
  segmentoCategoria: RotasCategorias
  pagination: number[]
  currentPage: number
}
const PaginationLinks = ({
  pagination,
  currentPage,
  segmento,
  segmentoCategoria
}: PaginationLinksProps) => {
  return (
    <>
      {pagination.map((index) => (
        <Fragment key={index}>
          <PaginationLink
            href={`/${segmento}/${segmentoCategoria}/?page=${index + 1}`}
            isActive={currentPage === index + 1}
            aria-current={currentPage === index + 1}
          >
            {index + 1}
          </PaginationLink>
        </Fragment>
      ))}
    </>
  )
}

export default PaginationLinks

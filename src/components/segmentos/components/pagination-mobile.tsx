import DropdownMenuPaginationEllipsis from '@/components/segmentos/components/dropdown-menu-pagination-ellipsis'
import { TypeSegmento } from '@/components/segmentos/types/segmento'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { PaginationLink } from '@/components/ui/pagination'
import { RotasCategorias } from '@/types/rotasCategorias'
import { Fragment } from 'react'

type PersonPaginationMobileProps = {
  segmento: TypeSegmento
  segmentoCategoria: RotasCategorias
  pagination: number[]
  currentPage: number
}
const PersonPaginationMobile = ({
  pagination,
  currentPage,
  segmento,
  segmentoCategoria
}: PersonPaginationMobileProps) => {
  const paginationSlice = pagination.slice(0, 3)
  const paginationEllipsis = pagination.slice(paginationSlice.length)
  const indexPaginationEllipsis = paginationSlice.length
  return (
    <>
      {paginationSlice.map((index) => (
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
      <DropdownMenuPaginationEllipsis>
        {paginationEllipsis.map((index) => (
          <Fragment key={index + indexPaginationEllipsis}>
            <DropdownMenuItem>
              <PaginationLink
                href={`/${segmento}/${segmentoCategoria}/?page=${index + 1}`}
                isActive={currentPage === index + 1}
                aria-current={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuPaginationEllipsis>
    </>
  )
}

export default PersonPaginationMobile

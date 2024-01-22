import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { PaginationEllipsis } from '@/components/ui/pagination'

const DropdownMenuPaginationEllipsis = ({
  children
}: React.PropsWithChildren) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {' '}
        <PaginationEllipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Paginação</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuPaginationEllipsis

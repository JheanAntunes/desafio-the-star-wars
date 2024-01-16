'use client'
import useActiveLinkPathname from '@/components/hooks/useActiveLinkPathname'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { TypeDataLinks } from '@/utils/data-link'
import { NavigationIcon } from 'lucide-react'
import Link from 'next/link'

type TypeCategoriaActiveLinkProps = {
  dataLinks: TypeDataLinks[]
}

export default function CategoriaDropdownMenuItems({
  dataLinks
}: TypeCategoriaActiveLinkProps) {
  const { activeLink } = useActiveLinkPathname()

  return (
    <>
      {dataLinks.map(({ href, content }) => (
        <DropdownMenuItem
          key={href + content}
          className={cn(
            '',
            activeLink(href)
              ? 'hoverLink after:w-full hover:after:w-0'
              : 'hoverLink'
          )}
        >
          <Link
            href={href}
            className={cn('flex items-center gap-1 font-sans capitalize')}
          >
            {content}
            <NavigationIcon width={14} height={14} />
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  )
}

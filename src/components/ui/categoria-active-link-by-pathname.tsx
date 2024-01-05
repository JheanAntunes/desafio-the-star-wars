'use client'
import { cn } from '@/lib/utils'
import { TypeDataLinks } from '@/utils/data-link'
import Link from 'next/link'
import useActiveLinkPathname from '../hooks/useActiveLinkPathname'
import { CategoriaContainerListLinksItem } from './categoria-links'

type TypeCategoriaActiveLinkProps = {
  dataLinks: TypeDataLinks[]
}

export default function CategoriaActiveLink({
  dataLinks
}: TypeCategoriaActiveLinkProps) {
  const { activeLink } = useActiveLinkPathname()

  return (
    <>
      {dataLinks.map(({ href, content }) => (
        <CategoriaContainerListLinksItem key={href + content}>
          <Link
            href={href}
            className={cn(
              'font-sans text-lg capitalize',
              activeLink(href)
                ? 'hoverLink after:w-full hover:after:w-0'
                : 'hoverLink'
            )}
          >
            {content}
          </Link>
        </CategoriaContainerListLinksItem>
      ))}
    </>
  )
}

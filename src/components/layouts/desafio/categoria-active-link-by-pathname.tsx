import LinkActive from '@/components/ui/LinkActive'
import { Separator } from '@/components/ui/separator'
import { TypeDataLinks } from '@/utils/data-link'
import Link from 'next/link'
import { CategoriaContainerListLinksItem } from './categoria-links'

type TypeCategoriaActiveLinkProps = {
  dataLinks: TypeDataLinks[]
}

export default function CategoriaActiveLink({
  dataLinks
}: TypeCategoriaActiveLinkProps) {
  return (
    <>
      {dataLinks.map(({ href, content, icon }, index) => (
        <CategoriaContainerListLinksItem
          key={href + content}
          className="flex items-center gap-1 text-zinc-800 dark:text-gray-300"
        >
          <div>
            <LinkActive href={href}>{content}</LinkActive>
            {index < dataLinks.length && (
              <Separator className="h-[3px] rounded-xl" />
            )}
          </div>
          {icon && <Link href={href}>{icon}</Link>}
        </CategoriaContainerListLinksItem>
      ))}
    </>
  )
}

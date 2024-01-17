import LinkActive from '@/components/ui/LinkActive'
import { Separator } from '@/components/ui/separator'
import { TypeDataLinks } from '@/utils/data-link'
import { CategoriaContainerListLinksItem } from './categoria-links'

type TypeCategoriaActiveLinkProps = {
  dataLinks: TypeDataLinks[]
}

export default function CategoriaActiveLink({
  dataLinks
}: TypeCategoriaActiveLinkProps) {
  return (
    <>
      {dataLinks.map(({ href, content }, index) => (
        <CategoriaContainerListLinksItem key={href + content}>
          <LinkActive href={href}>{content}</LinkActive>
          {index < dataLinks.length && (
            <Separator className="h-[3px] rounded-xl" />
          )}
        </CategoriaContainerListLinksItem>
      ))}
    </>
  )
}

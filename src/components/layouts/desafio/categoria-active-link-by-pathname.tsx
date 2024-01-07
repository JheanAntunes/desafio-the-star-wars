import LinkActive from '@/components/ui/LinkActive'
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
      {dataLinks.map(({ href, content }) => (
        <CategoriaContainerListLinksItem key={href + content}>
          <LinkActive href={href}>{content}</LinkActive>
        </CategoriaContainerListLinksItem>
      ))}
    </>
  )
}

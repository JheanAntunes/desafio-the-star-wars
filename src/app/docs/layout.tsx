import CategoriaDocs from '@/components/layouts/docs/categoria-docs'
import { TypographyH1 } from '@/components/ui/typography'

function LayoutDocs({ children }: React.PropsWithChildren) {
  return (
    <>
      <TypographyH1 className="mb-20 mt-[47px] text-center">
        Documentação Star Wars
      </TypographyH1>
      <CategoriaDocs />
      {/* render rota */}
      {children}
    </>
  )
}

export default LayoutDocs

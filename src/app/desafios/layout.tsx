import CategoriaDesafios from '@/components/layouts/desafio/categoria-desafios'
import { TypographyH1 } from '@/components/ui/typography'

function LayoutDesafios({ children }: React.PropsWithChildren) {
  return (
    <>
      <TypographyH1 className="mb-20 mt-[47px] text-center">
        Desafios Star Wars
      </TypographyH1>
      <CategoriaDesafios />
      {/* render rota */}
      {children}
    </>
  )
}

export default LayoutDesafios

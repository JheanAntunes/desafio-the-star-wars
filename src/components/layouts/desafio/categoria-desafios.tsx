import CategoriaActiveLink from '@/components/layouts/desafio/categoria-active-link-by-pathname'
import {
  CategoriaContainer,
  CategoriaContainerListLinks,
  CategoriaTitle
} from '@/components/layouts/desafio/categoria-links'
import ImageEspadaTheme from '@/components/segmentos/components/image-espada-theme'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { dataLinksDesafios } from '@/utils/data-link'
import { ArrowDown } from 'lucide-react'
import CategoriaDesafiosDropdownMenuItems from './categoria-desafios-menu-mobile'

function CategoriaDesafios() {
  return (
    <>
      <CategoriaContainer>
        <div className="flex gap-1">
          <CategoriaTitle>Categorias </CategoriaTitle>
          <div className="relative h-10 w-10 overflow-hidden">
            <ImageEspadaTheme />
          </div>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Menu de Categorias <ArrowDown height={14} width={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-5">
              <CategoriaDesafiosDropdownMenuItems
                dataLinks={dataLinksDesafios}
              />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CategoriaContainerListLinks>
          <CategoriaActiveLink dataLinks={dataLinksDesafios} />
        </CategoriaContainerListLinks>
      </CategoriaContainer>
    </>
  )
}

export default CategoriaDesafios

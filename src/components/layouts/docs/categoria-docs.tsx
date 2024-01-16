import EspadaLuz from '@/components/assets/espada-luz.png'
import CategoriaActiveLink from '@/components/layouts/desafio/categoria-active-link-by-pathname'
import {
  CategoriaContainer,
  CategoriaContainerListLinks,
  CategoriaTitle
} from '@/components/layouts/desafio/categoria-links'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { dataLinksDocs } from '@/utils/data-link'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import CategoriaDropdownMenuItems from '../desafio/categoria-desafios-menu-mobile'

function CategoriaDocs() {
  return (
    <>
      <CategoriaContainer>
        <div className="flex gap-1">
          <CategoriaTitle>Categorias de Documentação</CategoriaTitle>
          <div className="relative h-10 w-10 overflow-hidden">
            <Image
              src={EspadaLuz}
              alt=""
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Menu de Categorias Documentação{' '}
                <ArrowDown height={14} width={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-5">
              <CategoriaDropdownMenuItems dataLinks={dataLinksDocs} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CategoriaContainerListLinks>
          <CategoriaActiveLink dataLinks={dataLinksDocs} />
        </CategoriaContainerListLinks>
      </CategoriaContainer>
    </>
  )
}

export default CategoriaDocs

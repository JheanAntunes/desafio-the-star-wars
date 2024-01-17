import ImgRoboDocs from '@/components/assets/img-robo-png.png'
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
          <CategoriaTitle>Categorias</CategoriaTitle>
          <Image
            src={ImgRoboDocs}
            alt=""
            height={40}
            width={40}
            className="object-contain"
          />
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-1">
                Menu de Categorias
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

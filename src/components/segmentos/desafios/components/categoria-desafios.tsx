import EspadaLuz from '@/components/assets/espada-luz.png'
import CategoriaActiveLink from '@/components/ui/categoria-active-link-by-pathname'
import {
  CategoriaContainer,
  CategoriaContainerListLinks,
  CategoriaTitle
} from '@/components/ui/categoria-links'
import { dataLinksDesafios } from '@/utils/data-link'
import Image from 'next/image'

function CategoriaDesafios() {
  return (
    <>
      <CategoriaContainer>
        <div className="flex gap-1">
          <CategoriaTitle>Categorias de Desafios</CategoriaTitle>
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
        <CategoriaContainerListLinks>
          <CategoriaActiveLink dataLinks={dataLinksDesafios} />
        </CategoriaContainerListLinks>
      </CategoriaContainer>
    </>
  )
}

export default CategoriaDesafios

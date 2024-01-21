import ImgSpeciesDark from '@/components/assets/chewbacca-dark.svg'
import ImgSpeciesLight from '@/components/assets/chewbacca-light.svg'

import Image, { ImageProps } from 'next/image'
type ImageSpeciesThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageSpeciesTheme = ({ width, height }: ImageSpeciesThemeProps) => {
  return (
    <>
      <Image
        src={ImgSpeciesDark}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgSpeciesLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageSpeciesTheme
import ImgPlanetDark from '@/components/assets/death-star-dark.png'
import ImgPlanetLight from '@/components/assets/death-star-light.png'

import Image, { ImageProps } from 'next/image'
type ImagePlanetThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImagePlanetTheme = ({ width, height }: ImagePlanetThemeProps) => {
  const heightWidth = 24
  return (
    <>
      <Image
        src={ImgPlanetDark}
        alt="Imagem que representa o link da página documentação"
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="object-contain dark:hidden"
      />
      <Image
        src={ImgPlanetLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="hidden object-contain dark:block"
      />
    </>
  )
}

export default ImagePlanetTheme

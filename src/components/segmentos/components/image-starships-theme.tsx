import ImgStarshipsDark from '@/components/assets/starships-dark.png'
import ImgStarshipsLight from '@/components/assets/starships-light.png'

import Image, { ImageProps } from 'next/image'
type ImageStarshipsThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageStarshipsTheme = ({ width, height }: ImageStarshipsThemeProps) => {
  return (
    <>
      <Image
        src={ImgStarshipsDark}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgStarshipsLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageStarshipsTheme

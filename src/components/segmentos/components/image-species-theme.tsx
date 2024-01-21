import ImgSpeciesDark from '@/components/assets/chewbacca-dark.svg'
import ImgSpeciesLight from '@/components/assets/chewbacca-light.svg'

import Image, { ImageProps } from 'next/image'
type ImageSpeciesThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageSpeciesTheme = ({ width, height }: ImageSpeciesThemeProps) => {
  const heightWidth = 24
  return (
    <>
      <Image
        src={ImgSpeciesDark}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgSpeciesLight}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageSpeciesTheme

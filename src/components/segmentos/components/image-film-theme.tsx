import ImgFilmDark from '@/components/assets/film-dark.png'
import ImgFilmLight from '@/components/assets/film-light.png'

import Image, { ImageProps } from 'next/image'
type ImageFilmThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageFilmTheme = ({ width, height }: ImageFilmThemeProps) => {
  const heightWidth = 24
  return (
    <>
      <Image
        src={ImgFilmDark}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="object-contain dark:hidden"
      />
      <Image
        src={ImgFilmLight}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="hidden object-contain dark:block"
      />
    </>
  )
}

export default ImageFilmTheme

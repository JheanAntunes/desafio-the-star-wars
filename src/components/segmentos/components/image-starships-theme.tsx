import ImgStarshipsDark from '@/components/assets/starships-dark.png'
import ImgStarshipsLight from '@/components/assets/starships-light.png'

import Image, { ImageProps } from 'next/image'
type ImageStarshipsThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageStarshipsTheme = ({ width, height }: ImageStarshipsThemeProps) => {
  const heightWidth = 24
  return (
    <>
      <Image
        src={ImgStarshipsDark}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="object-contain dark:hidden"
      />
      <Image
        src={ImgStarshipsLight}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="hidden object-contain dark:block"
      />
    </>
  )
}

export default ImageStarshipsTheme

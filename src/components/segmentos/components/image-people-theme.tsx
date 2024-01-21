import ImgPeopleDark from '@/components/assets/people-luke-dark.svg'
import ImgPeopleLight from '@/components/assets/people-luke-light.svg'

import Image, { ImageProps } from 'next/image'
type ImagePeopleThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImagePeopleTheme = ({ width, height }: ImagePeopleThemeProps) => {
  return (
    <>
      <Image
        src={ImgPeopleDark}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgPeopleLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImagePeopleTheme

import ImgRoboLight from '@/components/assets/img-robo-light.svg'
import ImgRobo from '@/components/assets/img-robo-png.png'
import Image, { ImageProps } from 'next/image'
type ImageRoboThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageRoboTheme = ({ width, height }: ImageRoboThemeProps) => {
  return (
    <>
      <Image
        src={ImgRobo}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="object-contain dark:hidden"
      />
      <Image
        src={ImgRoboLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageRoboTheme

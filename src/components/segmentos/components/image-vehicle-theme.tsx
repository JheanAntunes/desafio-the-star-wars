import ImgVehicleDark from '@/components/assets/vehicle-dark.png'
import ImgVehicleLight from '@/components/assets/vehicle-light.png'

import Image, { ImageProps } from 'next/image'
type ImageVehicleThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageVehicleTheme = ({ width, height }: ImageVehicleThemeProps) => {
  return (
    <>
      <Image
        src={ImgVehicleDark}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgVehicleLight}
        alt="Imagem que representa o link da página documentação"
        width={width ?? 32}
        height={height ?? 32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageVehicleTheme
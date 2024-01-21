import ImgVehicleDark from '@/components/assets/vehicle-dark.png'
import ImgVehicleLight from '@/components/assets/vehicle-light.png'

import Image, { ImageProps } from 'next/image'
type ImageVehicleThemeProps = {
  width?: ImageProps['width']
  height?: ImageProps['height']
}
const ImageVehicleTheme = ({ width, height }: ImageVehicleThemeProps) => {
  const heightWidth = 24
  return (
    <>
      <Image
        src={ImgVehicleDark}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="object-contain dark:hidden"
      />
      <Image
        src={ImgVehicleLight}
        alt=""
        width={width ?? heightWidth}
        height={height ?? heightWidth}
        className="hidden object-contain dark:block"
      />
    </>
  )
}

export default ImageVehicleTheme

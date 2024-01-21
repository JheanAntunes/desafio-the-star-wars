import ImgSoldadoDark from '@/components/assets/soldado-dark.svg'
import ImgSoldadoLight from '@/components/assets/soldado-light.svg'
import Image from 'next/image'
const ImageSoldadoTheme = () => {
  return (
    <>
      <Image
        src={ImgSoldadoDark}
        alt=""
        width={16}
        height={16}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgSoldadoLight}
        alt=""
        width={16}
        height={16}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageSoldadoTheme

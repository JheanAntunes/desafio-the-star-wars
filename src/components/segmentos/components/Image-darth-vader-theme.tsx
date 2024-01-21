import ImgDarthVaderLight from '@/components/assets/darth-vader-dark.svg'
import ImgDarthVaderDark from '@/components/assets/darth-vader-light.svg'
import Image from 'next/image'
const ImageDarthVaderTheme = () => {
  return (
    <>
      <Image
        src={ImgDarthVaderDark}
        alt=""
        width={16}
        height={16}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={ImgDarthVaderLight}
        alt=""
        width={16}
        height={16}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageDarthVaderTheme

import EspadaLight from '@/components/assets/espada-light.svg'
import EspadaLuz from '@/components/assets/espada-luz.png'
import Image from 'next/image'
const ImageEspadaTheme = () => {
  return (
    <>
      <Image
        src={EspadaLuz}
        alt="Imagem que representa o link da página Desafio"
        width={32}
        height={32}
        className="object-contain dark:hidden"
        unoptimized
      />
      <Image
        src={EspadaLight}
        alt="Imagem que representa o link da página Desafio"
        width={32}
        height={32}
        className="hidden object-contain dark:block"
        unoptimized
      />
    </>
  )
}

export default ImageEspadaTheme

import ImageBabyYodaLogoLight from '@/components/assets/img-baby-yoda-light.svg'
import ImageBabyYodaLogo from '@/components/assets/img-baby-yoda-png.png'
import Image from 'next/image'
import Link from 'next/link'
function Logo() {
  return (
    <Link href="/desafios" className="relative block h-10 w-10 overflow-hidden">
      <Image
        src={ImageBabyYodaLogo}
        width={40}
        height={40}
        className="object-contain dark:hidden"
        alt="Logo:personagem baby yoda"
      />
      <Image
        src={ImageBabyYodaLogoLight}
        width={40}
        height={40}
        className="hidden object-contain dark:block"
        alt="Logo:personagem baby yoda"
      />
      <span className="sr-only">Navegar para Página de desafio</span>
    </Link>
  )
}

export default Logo

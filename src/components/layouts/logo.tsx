import ImageBabyYodaLogo from '@/components/assets/img-baby-yoda-png.png'
import Image from 'next/image'
import Link from 'next/link'
function Logo() {
  return (
    <Link href="/desafios" className="relative block h-10 w-10 overflow-hidden">
      <Image
        src={ImageBabyYodaLogo}
        fill
        sizes="100vw"
        className="object-contain"
        alt="Logo do projeto, personagem baby yoda"
      />
    </Link>
  )
}

export default Logo

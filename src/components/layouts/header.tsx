import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRobo from '@/components/assets/img-robo-png.png'
import Image from 'next/image'
import Link from 'next/link'
import LinkActive from '../ui/LinkActive'
import Logo from './logo'
export default function Header() {
  return (
    <header className="flex h-20 items-center">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <LinkActive href="/desafios" className="hidden text-2xl sm:inline">
              Desafios
            </LinkActive>
            <Link href="/desafios" className="relative h-8 w-8 overflow-hidden">
              <Image
                src={EspadaLuz}
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
              />
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <LinkActive
              href="/docs"
              className="hoverLink hidden text-2xl sm:inline"
            >
              Documentação
            </LinkActive>
            <Link href="/docs" className="relative h-8 w-8 overflow-hidden">
              <Image
                src={ImgRobo}
                alt=""
                fill
                sizes="100vw"
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

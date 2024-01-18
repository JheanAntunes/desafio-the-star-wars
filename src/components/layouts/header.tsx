import EspadaLuz from '@/components/assets/espada-luz.png'
import ImgRobo from '@/components/assets/img-robo-png.png'
import Image from 'next/image'
import Link from 'next/link'
import LinkActive from '../ui/LinkActive'
import { Separator } from '../ui/separator'
import Logo from './logo'
export default function Header() {
  return (
    <header className="flex h-20 items-center">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-center justify-center gap-[2px]">
              <LinkActive
                href="/desafios"
                className="hidden text-2xl sm:inline"
              >
                Desafios
              </LinkActive>
              <Separator className="h-[3px] rounded-xl" />
            </div>
            <Link href="/desafios" className="relative h-8 w-8 overflow-hidden">
              <Image
                src={EspadaLuz}
                alt="Imagem que representa o link da página Desafio"
                fill
                sizes="100vw"
                className="object-contain"
              />
              <span className="sr-only">
                Link que redireciona para página de desafio
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-center justify-center gap-[2px]">
              <LinkActive
                href="/docs"
                className="hoverLink hidden text-2xl sm:inline"
              >
                Documentação
              </LinkActive>
              <Separator className="h-[3px] rounded-xl" />
            </div>
            <Link href="/docs" className="relative h-8 w-8 overflow-hidden">
              <Image
                src={ImgRobo}
                alt="Imagem que representa o link da página documentação"
                fill
                sizes="100vw"
                className="object-contain"
              />
              <span className="sr-only">
                Link que redireciona para página de documentação
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

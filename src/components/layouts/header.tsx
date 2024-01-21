import Link from 'next/link'
import ImageEspadaTheme from '../segmentos/components/image-espada-theme'
import ImageRoboTheme from '../segmentos/components/image-robo-theme'
import LinkActive from '../ui/LinkActive'
import { ModeToggle } from '../ui/mode-toggle'
import { Separator } from '../ui/separator'
import Logo from './logo'
export default function Header() {
  return (
    <header className="flex h-20 items-center">
      <nav className="container flex items-center justify-between">
        <Logo />
        <div className="flex gap-8">
          <ModeToggle />
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
              <ImageEspadaTheme />
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
              <ImageRoboTheme />
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

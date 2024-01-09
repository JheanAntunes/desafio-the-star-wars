import DesafioPersonDescription from '@/components/segmentos/desafios/person/[id]/components/desafio-person-description'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographySmall
} from '@/components/ui/typography'
import { Suspense } from 'react'

type TypeParams = {
  id: string
}

type TypesearchParams = {
  page?: string
}

type PageDinamicaPersonDesafioProps = {
  params: TypeParams
  searchParams: TypesearchParams
}

const PageDinamicaPersonDesafio = ({
  params,
  searchParams
}: PageDinamicaPersonDesafioProps) => {
  const { id } = params
  const { page } = searchParams
  return (
    <main className="container my-8 flex flex-col gap-8">
      <div className="mx-auto w-full max-w-4xl">
        <TypographyH1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Desafio de Pessoa
        </TypographyH1>
        <TypographyP>Você precisa adivinhar o nome da pessoa</TypographyP>
        <TypographySmall>Dica: Leia a descrição da pessoa</TypographySmall>
      </div>
      <div className="flex flex-col gap-5">
        <TypographyH2 className="font-sans text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          Quem é ?
        </TypographyH2>
        <div className="flex w-full max-w-80 flex-col gap-2 lg:max-w-96">
          <Input placeholder="Qual é o nome da pessoa ?" />
          <Button>Enviar</Button>
        </div>
      </div>
      <Suspense fallback={<p>Carregando description</p>}>
        <DesafioPersonDescription id={id} page={page ?? '1'} />
      </Suspense>
    </main>
  )
}

export default PageDinamicaPersonDesafio

# Star Wars :mage:	
Site para conhecer mais a obra _Star Wars_ com desafios e documentação.

desafio 01 de pessoa: Luke Skywalker
> Para ver detalhes mais do projeto como a troca de UI quando o desafio é completado, o feedback quando o desafio está completado na página de categoria de pessoa e na pagina de documentação e mais...

## Categoria de desafios ou documentação :star2:
- Pessoa :bearded_person:
- Espécie :monkey_face:
- Planeta 🪐
- Filme 📽️
- Nave estelar :flying_saucer:
- Veículo 🚙

# Recursos
[![My Skills](https://skillicons.dev/icons?i=js,typescript,html,css,react,nextjs,tailwindcss,git,github)](https://skillicons.dev)
- [Zod](https://zod.dev/) :star2:
- [ReactHookForm](https://react-hook-form.com/) :star2:
  - [hookFormResolver](https://www.npmjs.com/package/@hookform/resolvers) :star2:
- [Shadcn-ui](https://ui.shadcn.com/) :star2:
- [Prettier](https://prettier.io/) 💅
- [Eslint](https://eslint.org/) :hammer_and_wrench:
- API [Swapi](https://swapi.dev/documentation)
## Pratica :star2:
O que pratiquei para fazer esse projeto 🥇

### [![My Skills Nextjs](https://skillicons.dev/icons?i=nextjs)](https://skillicons.dev)
### SEO 🔍
  - metadata
  - generateMetadata
### Renderização :star2:
- página estática
- página dinâmica
- client Components
- server Components
### Roteamento App Router :star2:
- Definir rotas
- Rotas Dinâmicas
- middleware
> "O middleware é executado antes que o conteúdo e as rotas armazenados em cache sejam correspondidos"
> Utilizei o _middleware_, para redirecionar o usuário para segmento de rota desafios, porque não tem a página home.
- Páginas e layouts
  - layout Raiz
  - sub-layout (layout aninhado)
- Carregamento UI & Streaming
  - Suspense
  - Loading
- Redirecionando 🔗
- Rotas Dinâmicas
### Convenções de arquivo 🌟
- layout
- loading
- page
- not-found
- metada arquivos
  - favicon
### Otimizações 🌟
- Fontes 
> com tailwindcss
- Component Image
> utilizei svg também, mas não é otimizado.
- Link
- metadata
### Busca de dados 🌟
- data fetching components server
### Functions 🌟
- fetch
- generateMetadata
- Ganchos ⚓
  - usePathname
  - useSearchParams
  - useRouter (replace)

Tem mais recursos de nextjs que pratiquei como pattern, utilizar client-side em components que realmente necessita para não transformar todos os components em client-side, passar o component que não necessita de recursos do client como children para component client, assim o children é renderizado no servidor.

exemplo: Component Link com uma estilização extra para informar qual rota está, para construir esse component precisa descobrir qual rota o usuario está, tem o gacho usePathname que me retorna a rota que o usuário está atualmente, mas tem o problema que esse gancho funciona somente em component client, então, o que farei ? transformar o component em client-side que vai utilizar esse link ou construir um component Link client com a lógica e utilizar no component que necessita do link ?
resposta: criar o component Link com a diretiva "use client" e utilizar em component server 🏁

### [![My Skills tailwindcss](https://skillicons.dev/icons?i=tailwindcss)](https://skillicons.dev)
- classes customizadas
- tailwind [Merge](https://github.com/dcastil/tailwind-merge)
- tailwind [Class Variance Authority](https://cva.style/docs)
- tailwind [Clsx](https://www.npmjs.com/package/clsx)
- tailwind @utilities
- tailwind @layer
- tailwind @aplly
- function cn (a junção de clsx com merge)
> resolver conflito de classes e classes condicionais.

### Shadcn-ui 🌟
repositório de componentes fantástico, [Shadcn-iu](https://ui.shadcn.com/docs/components/accordion)
> Esta NÃO é uma biblioteca de componentes. É uma coleção de componentes reutilizáveis ​​que você pode copiar e colar em seus aplicativos.
lista de components que copiei ⬇️ 
- Tema 🌞/ 🌚
  - next themes
- Base-color: zinc
- Button
- Carousel
- Pagination
- Card
- Form
  - zod
  - react/hook/form
  - react/hook/resolvers
- Dropdown-Menu
- Toast
- Input
- Label
- Skeleton
- Separator
- Badge
- Mode-toggle (botão de alternar tema)

### [![My Skills react](https://skillicons.dev/icons?i=react)](https://skillicons.dev)
> Uma lista destacada de conceitos que pratiquei ⬇️
- context
- custom hooks
- Reaproveitamento
- Composição

### [![My Skills Nextjs](https://skillicons.dev/icons?i=typescript)](https://skillicons.dev)
> Uma lista destacada de conceitos que pratiquei ⬇️
- indexação de tipo
- generics
  - restrição de generics

### [![My Skills git](https://skillicons.dev/icons?i=git,github)](https://skillicons.dev)
[repositório de padrão de commits](https://github.com/iuricode/padroes-de-commits)
- padrão de commits

### LocalStorage 🌟
function: logicLocalStorageDataChallenger
localstorage como banco de dados para armazenar os desafios completados.
exemplo: {categoriaFilme, categoriaPessoa}

# Dificuldades 🌟
## Dados retornado da api 
eu precisei criar funções para formatar os dados retornados, porque tem propriedades com valor "unknow", "none", "n/a" ou array vazio []
### Dados retornados da api sem id :eyes:
A forma que encontrei para resolver esse problema em rotas dinâmicas foi enviando o index como id e o parametro de pesquisa page para fazer o mesmo fetch na página dinãmica e utiliza o id como index no array de dado que é retornado.
## Paginação na página de categoria
lógica: PaginationLogic

> gerenciamento é feito pela url, as vantagens que tenho é o compartilhamento, renderização no servidor...

Eu utilizei o component Pagination do shadcn-ui para construir a páginação, porém precisava fazer a lógica de paginação e essa lógica precisa ser reutilizada em outras página de categoria, consegui fazer a lógica e a reutilização, porém outro problema apareceu que é a versão mobile, precisei fazer a lógica de paginação ellipsis e consegui fazer.
## Trocar a UI quando o desafio é completado
eu pensei em duas formas, a primeira é utilizar context, a segunda é utilizando o gerenciamento pela url.
então, o que fiz ???
A página dinâmica de pessoa utiliza o context api para trocar a UI quando o desafio está completado, as outras páginas dinãmicas de categorias o gerenciamento da troca da UI é feita pela URL.
Por que vc fez das duas que pensou ???
para descobrir qual é a melhor maneira, e a melhor é pela url porque não preciso utilizar client-side na UI de desafio completado.

## A descrição
lógica: promiseAllFormatedDataDescriptionSubList
Os dados retornados para melhorar a descrição são urls que preciso fazer requisições, então criei uma função com promisse all que solicita os dados dessas urls e quando estiverem me retorna, porém essa função precisa ser reutilizada para outras categorias, criei generics, params para a função tornar reutilizada.

### Contribuições 🌟
[Icones de Star Wars](https://icons8.com.br/icons/set/star-wars)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

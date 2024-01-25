# Star Wars :mage:	
Site para conhecer mais a obra _Star Wars_ com desafios e documentação.

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
- Component Link
- metadata
### Busca de dados 🌟
- data fetching components server
### Functions
- fetch
- generateMetadata
- Ganchos ⚓
  - usePathname
  - useSearchParams
  - useRouter (replace)

Tem mais recursos de nextjs que pratiquei como pattern, utilizar client-side em components que realmente necessita para não transformar todos os components em client-side, passar o component que não necessita de recursos do client como children para component client, assim o children é renderizado no servidor.

exemplo: Component Link com uma estilização extra para informar qual rota está, para construir esse component precisa descobrir qual rota o usuario está, tem o gacho usePathname que me retorna a rota que o usuário está atualmente, mas tem o problema que esse gancho funciona somente em component client, então, o que farei ? transformar o component em client-side que vai utilizar esse link ou construir um component Link client com a lógica e utilizar no component que necessita do link ?
resposta: criar o component Link com a diretiva "use client" e utilizar em component server 🏁


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

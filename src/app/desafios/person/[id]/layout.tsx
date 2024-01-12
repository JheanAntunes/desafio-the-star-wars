import AllProviderPerson from '@/components/segmentos/desafios/person/[id]/components/provider/all-provider-person'

const LayoutDinamicoPerson = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <AllProviderPerson>{children}</AllProviderPerson>
    </>
  )
}

export default LayoutDinamicoPerson

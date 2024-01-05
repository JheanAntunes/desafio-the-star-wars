import { usePathname } from 'next/navigation'

const useActiveLinkPathname = () => {
  const pathname = usePathname()

  const activeLink = (href: string) => pathname === href

  return {
    activeLink
  }
}

export default useActiveLinkPathname

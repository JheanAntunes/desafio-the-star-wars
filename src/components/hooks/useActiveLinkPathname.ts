import { usePathname } from 'next/navigation'

const useActiveLinkPathname = () => {
  const pathname = usePathname()

  const activeLink = (href: string) => pathname.includes(href)

  return {
    activeLink
  }
}

export default useActiveLinkPathname

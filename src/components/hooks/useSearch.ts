'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useSearch = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  const { replace } = useRouter()
  return {
    params,
    pathname,
    replace
  }
}

export default useSearch

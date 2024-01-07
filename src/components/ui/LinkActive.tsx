'use client'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import useActiveLinkPathname from '../hooks/useActiveLinkPathname'

const LinkActive = ({
  href,
  className,
  children,
  ...restProps
}: React.ComponentPropsWithRef<'a'> & LinkProps) => {
  const { activeLink } = useActiveLinkPathname()
  return (
    <Link
      href={href}
      {...restProps}
      className={cn(
        'font-sans text-lg capitalize',
        activeLink(href)
          ? 'hoverLink after:w-full hover:after:w-0'
          : 'hoverLink',
        className
      )}
    >
      {children}
    </Link>
  )
}

export default LinkActive

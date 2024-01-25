import { notFound } from 'next/navigation'

const NotFoundData = (id: number, length: number) => {
  if (id >= length) notFound()
  return
}

export default NotFoundData

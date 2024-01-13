import { Skeleton } from '../skeleton'

const SkeletonCategorias = () => {
  return (
    <>
      <div className="flex flex-col gap-1 md:items-center md:justify-center">
        <Skeleton className="h-6 w-full md:h-9 lg:h-11" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
      </div>
      <div className="flex flex-col gap-5">
        <div>
          <Skeleton className="h-8 w-full md:h-11 lg:h-14" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-14 w-full rounded" />
        </div>
        <Skeleton className="h-12 w-28 rounded" />
      </div>
    </>
  )
}

export default SkeletonCategorias

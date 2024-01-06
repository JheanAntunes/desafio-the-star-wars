import { Skeleton } from '../skeleton'

const SkeletonPagination = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="h-10 w-10 rounded" />
      <Skeleton className="h-10 w-10 rounded" />
      <Skeleton className="h-10 w-10 rounded" />
      <Skeleton className="h-10 w-10 rounded" />
    </div>
  )
}

export default SkeletonPagination

import { Skeleton } from '../skeleton'

const SkeletonList = () => {
  return (
    <div className="flex max-w-80 flex-col gap-1">
      <Skeleton className="h-4 w-full pl-2" />
      <Skeleton className="h-4 w-full pl-2" />
      <Skeleton className="h-4 w-full pl-2" />
      <Skeleton className="h-4 w-full pl-2" />
    </div>
  )
}

export default SkeletonList

import { Skeleton } from '@/components/ui/skeleton'
import SkeletonList from './skeleton-list'

export function SkeletonCards() {
  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>{' '}
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>{' '}
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>{' '}
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>{' '}
      <Skeleton className="h-80 rounded p-5">
        <Skeleton className="h-7 w-full" />
        <SkeletonList />
      </Skeleton>
    </div>
  )
}

import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>{' '}
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>{' '}
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>{' '}
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>{' '}
      <Skeleton className="rounded p-5">
        <Skeleton className="h-7 w-full" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
        <Skeleton className="h-4 w-full pl-2" />
      </Skeleton>
    </div>
  )
}

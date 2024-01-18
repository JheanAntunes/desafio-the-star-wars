import { Skeleton } from '../skeleton'
import SkeletonDescription from './skeleton-description'
import SkeletonList from './skeleton-list'

const LoadingDinamico = () => {
  return (
    <main className="container my-8 flex flex-col gap-8">
      <Skeleton className="mx-auto h-16 w-80 lg:w-full lg:max-w-xl" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:justify-between">
          <Skeleton className="h-9 w-20" />
          <Skeleton className="h-10 w-32" />
        </div>
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
        <SkeletonDescription />
        <SkeletonList />
        <SkeletonList />
        <SkeletonList />
      </div>
    </main>
  )
}

export default LoadingDinamico

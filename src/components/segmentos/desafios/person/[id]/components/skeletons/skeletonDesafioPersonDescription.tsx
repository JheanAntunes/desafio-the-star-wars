import SkeletonList from '@/components/ui/skeletons/skeleton-list'

const SkeletonDesafioPersonDescription = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </div>
  )
}

export default SkeletonDesafioPersonDescription

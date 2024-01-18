import SkeletonList from '@/components/ui/skeletons/skeleton-list'

const SkeletonDescription = () => {
  return (
    <div className="grid grid-cols-1 gap-1">
      <SkeletonList />
      <SkeletonList />
      <SkeletonList />
    </div>
  )
}

export default SkeletonDescription

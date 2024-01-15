export const hasNext = (currentIndex: number, resultsLength: number) => {
  const nextIndex = currentIndex + 1
  return nextIndex < resultsLength ? nextIndex : null
}

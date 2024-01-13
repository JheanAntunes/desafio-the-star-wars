import { useId } from 'react'

const useGenerateAccessibilityID = () => {
  const generateAccessibilityID = useId()
  return {
    generateAccessibilityID
  }
}

export default useGenerateAccessibilityID

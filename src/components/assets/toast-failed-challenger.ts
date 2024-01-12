import { toast } from '@/components/ui/use-toast'

type TypeToastFailedChallenger = {
  title?: string
  description?: string
}
const ToastFailedChallenger = ({
  title = 'Oops!',
  description = 'Você errou, mas não desista.'
}: TypeToastFailedChallenger) => {
  toast({
    title: title,
    description: description,
    variant: 'destructive'
  })
}

export default ToastFailedChallenger

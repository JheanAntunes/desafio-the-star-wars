import { toast } from '@/components/ui/use-toast'

type TypeToastCompletedChallenger = {
  title?: string
  description?: string
}
const ToastCompletedChallenger = ({
  title = 'Parabens!',
  description = 'Desafio concluído. Você pode voltar para página de desafios dessa categoria para encontrar mais desafios.'
}: TypeToastCompletedChallenger) => {
  toast({
    title: title,
    description: description
  })
}

export default ToastCompletedChallenger

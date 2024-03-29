import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

function ShorthandCarousel({ children }: React.PropsWithChildren) {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="w-full max-w-xs md:max-w-3xl lg:max-w-5xl"
    >
      <CarouselContent className="-ml-8">{children}</CarouselContent>
      <CarouselPrevious className="-left-4 sm:-left-12" />
      <CarouselNext className="-right-4 sm:-right-12" />
    </Carousel>
  )
}

export default ShorthandCarousel

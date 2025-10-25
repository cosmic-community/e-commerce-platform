import { Collection } from '@/types'

interface HeroSectionProps {
  collections: Collection[]
}

export default function HeroSection({ collections }: HeroSectionProps) {
  if (!collections || collections.length === 0) {
    return null
  }

  const featuredCollection = collections[0]
  const bannerImage = featuredCollection.metadata?.banner_image

  return (
    <section className="relative h-[500px] bg-gray-900">
      {bannerImage && (
        <img
          src={`${bannerImage.imgix_url}?w=1920&h=500&fit=crop&auto=format,compress`}
          alt={featuredCollection.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}
      
      <div className="relative container h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {featuredCollection.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {featuredCollection.metadata?.description || 'Discover amazing products'}
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
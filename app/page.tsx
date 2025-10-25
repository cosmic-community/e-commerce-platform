import { getProducts, getFeaturedCollections, getReviews } from '@/lib/cosmic'
import { Product, Collection, Review } from '@/types'
import HeroSection from '@/components/HeroSection'
import ProductGrid from '@/components/ProductGrid'
import ReviewsSection from '@/components/ReviewsSection'

export default async function HomePage() {
  const [products, collections, reviews] = await Promise.all([
    getProducts(),
    getFeaturedCollections(),
    getReviews(),
  ])

  return (
    <div>
      <HeroSection collections={collections as Collection[]} />
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our carefully curated selection of premium items
            </p>
          </div>
          <ProductGrid products={products as Product[]} />
        </div>
      </section>

      <ReviewsSection reviews={reviews as Review[]} />
    </div>
  )
}
// app/products/[slug]/page.tsx
import { getProduct, getProductReviews } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import { notFound } from 'next/navigation'
import ProductDetail from '@/components/ProductDetail'
import ReviewCard from '@/components/ReviewCard'

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = await getProduct(slug) as Product | null

  if (!product) {
    notFound()
  }

  const reviews = await getProductReviews(product.id) as Review[]

  return (
    <div className="py-16">
      <div className="container">
        <ProductDetail product={product} />

        {reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Customer Reviews
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
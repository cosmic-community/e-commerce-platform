import { Review } from '@/types'
import Link from 'next/link'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = review.metadata?.rating || 0
  const customerName = review.metadata?.customer_name || 'Anonymous'
  const reviewText = review.metadata?.review_text || ''
  const verifiedPurchase = review.metadata?.verified_purchase ?? false
  const product = review.metadata?.product

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        {verifiedPurchase && (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Verified
          </span>
        )}
      </div>

      <p className="text-gray-700 mb-4">
        {reviewText}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">
          {customerName}
        </p>
        {product && (
          <Link
            href={`/products/${product.slug}`}
            className="text-sm text-accent hover:text-blue-700 transition-colors"
          >
            View Product →
          </Link>
        )}
      </div>
    </div>
  )
}
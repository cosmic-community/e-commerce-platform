import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata?.product_images?.[0]
  const inStock = product.metadata?.in_stock ?? false
  const stockQuantity = product.metadata?.stock_quantity

  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        
        {!inStock && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Out of Stock
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.metadata?.price?.toFixed(2) || '0.00'}
          </span>
          
          {inStock && stockQuantity && (
            <span className="text-sm text-gray-600">
              {stockQuantity} in stock
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
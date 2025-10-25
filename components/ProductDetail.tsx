import { Product } from '@/types'
import Link from 'next/link'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const images = product.metadata?.product_images || []
  const inStock = product.metadata?.in_stock ?? false
  const stockQuantity = product.metadata?.stock_quantity
  const collections = product.metadata?.collections || []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        {images.length > 0 && images[0] ? (
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={`${images[0].imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.slice(1).map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={`${image.imgix_url}?w=400&h=400&fit=crop&auto=format,compress`}
                      alt={`${product.title} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">No images available</span>
          </div>
        )}
      </div>

      <div>
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {product.title}
          </h1>
          
          {collections.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {collections.map((collection) => (
                <span 
                  key={collection.id}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {collection.title}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${product.metadata?.price?.toFixed(2) || '0.00'}
            </span>
            
            {inStock ? (
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  In Stock
                </span>
                {stockQuantity && (
                  <p className="text-sm text-gray-600 mt-1">
                    {stockQuantity} available
                  </p>
                )}
              </div>
            ) : (
              <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {product.metadata?.description && (
          <div className="prose max-w-none mb-8">
            <div 
              dangerouslySetInnerHTML={{ __html: product.metadata.description }}
              className="text-gray-600"
            />
          </div>
        )}

        <div className="space-y-4">
          <button 
            disabled={!inStock}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
              inStock
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
          
          <Link
            href="/"
            className="block w-full py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-lg text-center hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
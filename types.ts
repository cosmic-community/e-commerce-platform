// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product interface
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    description?: string;
    price: number;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    in_stock?: boolean;
    stock_quantity?: number;
    collections?: Collection[];
  };
}

// Collection interface
export interface Collection extends CosmicObject {
  type: 'collections';
  metadata: {
    description?: string;
    banner_image?: {
      url: string;
      imgix_url: string;
    };
    featured?: boolean;
  };
}

// Review interface
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    product?: Product;
    rating: number;
    review_text?: string;
    customer_name: string;
    verified_purchase?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}
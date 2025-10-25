# 🛍️ E-Commerce Showcase Platform

![App Preview](https://imgix.cosmicjs.com/f43a5440-b1ac-11f0-a808-31b5d2a33ba3-photo-1521572163474-6864f9cf17ab-1761401679909.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive e-commerce showcase platform built with Next.js 15 and Cosmic CMS. Display your products, collections, and customer reviews with a beautiful, user-friendly interface.

## ✨ Features

- 🛍️ **Dynamic Product Catalog** - Browse products with rich descriptions, pricing, and images
- 🏷️ **Collection Filtering** - View products organized by curated collections
- ⭐ **Customer Reviews** - Display ratings and reviews with verified purchase badges
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean UI with smooth animations and transitions
- 🔍 **Product Details** - Individual pages for each product with complete information
- 📦 **Stock Management** - Real-time inventory status displays
- 🚀 **TypeScript** - Full type safety throughout the application
- ⚡ **Next.js 15** - Built with the latest App Router and React Server Components

## 🚀 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68fcda2e92c9229c30fe5ec4&clone_repository=68fcdc4892c9229c30fe5f0b)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Design a content model for an e-commerce store with products, collections, and customer reviews

### Code Generation Prompt

> Based on the content model I created for "Design a content model for an e-commerce store with products, collections, and customer reviews", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env.local` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:

```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with collection data
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get single product by slug
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'product-slug' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Collections

```typescript
// Get all collections
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])

// Get featured collections only
const { objects: featured } = await cosmic.objects
  .find({ 
    type: 'collections',
    'metadata.featured': true 
  })
  .props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Reviews

```typescript
// Get all reviews with product data
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Get reviews for a specific product
const { objects: productReviews } = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.product': productId 
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🌐 Cosmic CMS Integration

This application uses Cosmic as a headless CMS with the following content types:

### Products
- Description (HTML textarea)
- Price (Number)
- Product Images (Multiple files)
- In Stock (Switch)
- Stock Quantity (Number)
- Collections (Object relationship)

### Collections
- Description (Textarea)
- Banner Image (File)
- Featured (Switch)

### Reviews
- Product (Object relationship)
- Rating (Number)
- Review Text (Textarea)
- Customer Name (Text)
- Verified Purchase (Switch)

All content is managed through the Cosmic dashboard and fetched dynamically using the Cosmic SDK with proper depth queries to include nested relationships.

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

1. Click the deploy button above
2. Connect your GitHub repository
3. Add your environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For support, visit the [Cosmic documentation](https://www.cosmicjs.com/docs) or join our [community Slack](https://cosmicjs.com/community).

<!-- README_END -->
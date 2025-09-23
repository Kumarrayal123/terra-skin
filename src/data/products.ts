import { Product, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Vitamin C Brightening Serum',
    description: 'Illuminate your skin with powerful antioxidants',
    fullDescription: 'Our premium Vitamin C serum combines 20% L-Ascorbic Acid with Vitamin E and Ferulic Acid to deliver maximum brightening power. This potent formula helps reduce dark spots, even skin tone, and protect against environmental damage while promoting collagen synthesis for firmer, more youthful-looking skin.',
    price: 89.99,
    originalPrice: 109.99,
    images: [
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5938435/pexels-photo-5938435.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'serums',
    skinType: ['normal', 'dry', 'combination'],
    ingredients: ['Vitamin C (L-Ascorbic Acid)', 'Vitamin E', 'Ferulic Acid', 'Hyaluronic Acid'],
    benefits: ['Brightens skin tone', 'Reduces dark spots', 'Anti-aging properties', 'Antioxidant protection'],
    isBestSeller: true,
    isNew: false,
    rating: 4.8,
    reviews: 247
  },
  {
    id: '2',
    name: 'Hyaluronic Acid Moisturizer',
    description: 'Deep hydration for plump, supple skin',
    fullDescription: 'Experience intense hydration with our lightweight yet nourishing moisturizer. Formulated with multiple molecular weights of Hyaluronic Acid, this cream penetrates deeply to maintain optimal skin moisture levels while strengthening the skin barrier.',
    price: 65.99,
    images: [
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6621459/pexels-photo-6621459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'moisturizers',
    skinType: ['dry', 'sensitive', 'normal'],
    ingredients: ['Hyaluronic Acid', 'Ceramides', 'Niacinamide', 'Squalane'],
    benefits: ['Deep hydration', 'Plumps fine lines', 'Strengthens barrier', 'Long-lasting moisture'],
    isBestSeller: true,
    isNew: false,
    rating: 4.9,
    reviews: 189
  },
  {
    id: '3',
    name: 'Gentle Foaming Cleanser',
    description: 'Remove impurities without stripping moisture',
    fullDescription: 'Our sulfate-free cleansing formula gently removes makeup, dirt, and pollutants while maintaining your skins natural moisture balance. Enriched with botanical extracts and amino acids, it leaves skin feeling clean, soft, and refreshed.',
    price: 42.99,
    images: [
      'https://images.pexels.com/photos/6621447/pexels-photo-6621447.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5938322/pexels-photo-5938322.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'cleansers',
    skinType: ['sensitive', 'dry', 'normal'],
    ingredients: ['Amino Acids', 'Chamomile Extract', 'Aloe Vera', 'Glycerin'],
    benefits: ['Gentle cleansing', 'Maintains moisture', 'Soothes skin', 'Removes makeup'],
    isBestSeller: false,
    isNew: true,
    rating: 4.6,
    reviews: 94
  },
  {
    id: '4',
    name: 'Retinol Night Treatment',
    description: 'Advanced anti-aging formula for overnight renewal',
    fullDescription: 'Transform your skin overnight with our encapsulated retinol treatment. This advanced formula delivers time-released retinol to minimize irritation while maximizing anti-aging benefits. Wake up to smoother, firmer, more radiant skin.',
    price: 125.99,
    originalPrice: 149.99,
    images: [
      'https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'treatments',
    skinType: ['normal', 'combination', 'mature'],
    ingredients: ['Encapsulated Retinol', 'Peptides', 'Vitamin E', 'Jojoba Oil'],
    benefits: ['Reduces fine lines', 'Improves texture', 'Boosts collagen', 'Evening treatment'],
    isBestSeller: true,
    isNew: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '5',
    name: 'Niacinamide Pore Refiner',
    description: 'Minimize pores and control excess oil',
    fullDescription: 'Our concentrated niacinamide serum helps regulate oil production, minimize the appearance of pores, and improve overall skin texture. This lightweight formula absorbs quickly and works well under makeup.',
    price: 48.99,
    images: [
      'https://images.pexels.com/photos/6621302/pexels-photo-6621302.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5938365/pexels-photo-5938365.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'serums',
    skinType: ['oily', 'combination', 'acne-prone'],
    ingredients: ['Niacinamide 10%', 'Zinc PCA', 'Hyaluronic Acid', 'Witch Hazel'],
    benefits: ['Controls oil', 'Minimizes pores', 'Reduces blemishes', 'Improves texture'],
    isBestSeller: false,
    isNew: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'SPF 50 Daily Defense',
    description: 'Broad-spectrum protection with skincare benefits',
    fullDescription: 'Protect your skin with our lightweight, non-greasy sunscreen that doubles as a daily moisturizer. Formulated with zinc oxide and titanium dioxide for broad-spectrum protection, plus antioxidants for added skin benefits.',
    price: 55.99,
    images: [
      'https://images.pexels.com/photos/5938433/pexels-photo-5938433.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suncare',
    skinType: ['all'],
    ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Vitamin E', 'Green Tea Extract'],
    benefits: ['SPF 50 protection', 'Anti-aging', 'Non-greasy', 'Daily moisturizer'],
    isBestSeller: true,
    isNew: false,
    rating: 4.8,
    reviews: 203
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'The Vitamin C serum has completely transformed my skin. I see brighter, more even-toned skin after just 2 weeks!',
    product: 'Vitamin C Brightening Serum'
  },
  {
    id: '2',
    name: 'Emma Rodriguez',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'I have sensitive skin and this moisturizer is perfect. It hydrates without any irritation and my skin feels amazing.',
    product: 'Hyaluronic Acid Moisturizer'
  },
  {
    id: '3',
    name: 'Jessica Chen',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    comment: 'The retinol treatment works so well! Fine lines around my eyes have visibly reduced. Highly recommend!',
    product: 'Retinol Night Treatment'
  }
];

export const heroSlides = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Discover Radiant Skin',
    subtitle: 'Premium skincare solutions for every skin type',
    buttonText: 'Shop Collection'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/5938392/pexels-photo-5938392.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Science Meets Nature',
    subtitle: 'Clinically proven ingredients with natural extracts',
    buttonText: 'Learn More'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Your Best Skin Awaits',
    subtitle: 'Transform your routine with our bestselling products',
    buttonText: 'Shop Bestsellers'
  }
];
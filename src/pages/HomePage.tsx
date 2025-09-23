import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, Leaf, Heart } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import { products, testimonials } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.isNew || product.isBestSeller).slice(0, 4);
  const bestSellers = products.filter(product => product.isBestSeller).slice(0, 4);

  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#8d4745] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">Carefully sourced botanical extracts and scientifically proven actives</p>
            </div>
            <div className="text-center">
              <div className="bg-[#8d4745] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Dermatologist Tested</h3>
              <p className="text-gray-600">All products are clinically tested and recommended by skincare experts</p>
            </div>
            <div className="text-center">
              <div className="bg-[#8d4745] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cruelty Free</h3>
              <p className="text-gray-600">Never tested on animals and made with love for your skin</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection animation="slide-up" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Playfair_Display'] mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest innovations and customer favorites, carefully formulated for radiant, healthy skin
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100} animation="slide-up">
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/shop"
              className="inline-block bg-[#8d4745] text-white px-8 py-3 rounded-full hover:bg-[#7a3f3d] transition-colors duration-300 font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection animation="fade-in" className="py-16 bg-[#8d4745] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display'] mb-4">
            Transform Your Skin Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who have discovered the power of premium skincare
          </p>
          <Link
            to="/shop"
            className="inline-block bg-white text-[#8d4745] px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </AnimatedSection>

      {/* Best Sellers */}
      <AnimatedSection animation="slide-up" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Playfair_Display'] mb-4">
              Customer Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These bestselling products are loved by our community for their proven results and luxurious feel
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 100} animation="slide-up">
                <ProductCard product={product} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="fade-in" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Playfair_Display'] mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real results from real people who have transformed their skin with our products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 150} animation="slide-up">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-3">"{testimonial.comment}"</p>
                  <p className="text-sm text-[#8d4745] font-medium">{testimonial.product}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
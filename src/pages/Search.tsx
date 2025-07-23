import React, { useState } from 'react';
import { Filter, SlidersHorizontal, Grid, List, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import ProductCard from '@/components/ProductCard';
import HotelCard from '@/components/HotelCard';

const Search = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    rating: 'all',
  });

  const searchResults = {
    products: [
      {
        image: '/placeholder.svg',
        title: 'iPhone 15 Pro Max 256GB Space Black',
        price: '$1,199',
        originalPrice: '$1,299',
        rating: 4.8,
        reviews: 2547,
        store: 'Apple Store',
        discount: '8% OFF',
      },
      {
        image: '/placeholder.svg',
        title: 'Samsung Galaxy S24 Ultra 512GB',
        price: '$1,299',
        originalPrice: '$1,399',
        rating: 4.7,
        reviews: 1832,
        store: 'Samsung',
        discount: '7% OFF',
      },
      {
        image: '/placeholder.svg',
        title: 'Google Pixel 8 Pro 128GB',
        price: '$999',
        rating: 4.6,
        reviews: 1204,
        store: 'Google Store',
      },
    ],
    hotels: [
      {
        image: '/placeholder.svg',
        name: 'Grand Plaza Hotel & Suites',
        location: 'Manhattan, New York',
        rating: 4.5,
        reviews: 1247,
        price: '$189',
        originalPrice: '$239',
        amenities: ['WiFi', 'Parking', 'Restaurant', 'Gym'],
        deal: 'Best Deal',
      },
      {
        image: '/placeholder.svg',
        name: 'Boutique Central Hotel',
        location: 'Times Square, New York',
        rating: 4.3,
        reviews: 892,
        price: '$159',
        amenities: ['WiFi', 'Restaurant', 'Concierge'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Header */}
      <div className="border-b border-border/40 bg-accent/20">
        <div className="container py-6">
          <SearchBar />
        </div>
      </div>

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {['All', 'Electronics', 'Hotels', 'Restaurants', 'Services'].map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          className="text-primary focus:ring-primary"
                          defaultChecked={category === 'All'}
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {['Any', '$0 - $100', '$100 - $500', '$500 - $1000', '$1000+'].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="price" 
                          className="text-primary focus:ring-primary"
                          defaultChecked={range === 'Any'}
                        />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {['Any', '4+ stars', '3+ stars', '2+ stars'].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="rating" 
                          className="text-primary focus:ring-primary"
                          defaultChecked={rating === 'Any'}
                        />
                        <span className="text-sm">{rating}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="gradient" className="w-full">
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Search Results</h1>
                <p className="text-muted-foreground">
                  Found 127 results for "smartphone deals"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewType === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewType('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewType === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewType('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
                
                <select 
                  className="bg-card border border-border rounded-lg px-3 py-2 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Most Relevant</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-secondary border border-primary/20 rounded-2xl p-6 mb-8">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">AI</span>
                </div>
                AI Summary
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your search for "smartphone deals", I found several excellent options. 
                The iPhone 15 Pro Max offers the best camera system, while the Samsung Galaxy S24 Ultra 
                provides superior multitasking. For budget-conscious buyers, the Google Pixel 8 Pro 
                delivers exceptional value with excellent photography capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                  💰 Best Deal: iPhone 15 Pro Max (8% off)
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                  📸 Best Camera: Samsung Galaxy S24 Ultra
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">
                  💝 Best Value: Google Pixel 8 Pro
                </span>
              </div>
            </div>

            {/* Products Results */}
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">📱 Smartphones</h2>
              <div className={`grid gap-6 ${
                viewType === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {searchResults.products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </div>

            {/* Hotels Results */}
            <div>
              <h2 className="text-xl font-semibold mb-6">🏨 Related Hotels</h2>
              <div className="space-y-6">
                {searchResults.hotels.map((hotel, index) => (
                  <HotelCard key={index} {...hotel} />
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
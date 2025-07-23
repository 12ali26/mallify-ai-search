import React from 'react';
import { Search, ShoppingBag, MapPin, Plane, Brain, Zap, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import HotelCard from '@/components/HotelCard';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Search,
      title: 'Universal Search',
      description: 'Find anything from products to hotels with our AI-powered search engine.',
      gradient: true,
    },
    {
      icon: ShoppingBag,
      title: 'Smart Shopping',
      description: 'Compare prices across thousands of stores and find the best deals.',
    },
    {
      icon: Plane,
      title: 'Travel Assistant',
      description: 'Book flights, hotels, and discover amazing destinations worldwide.',
    },
    {
      icon: MapPin,
      title: 'Local Discovery',
      description: 'Find restaurants, services, and attractions in your area.',
    },
    {
      icon: Brain,
      title: 'AI Companion',
      description: 'Get personalized recommendations and smart comparisons.',
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Always up-to-date prices, availability, and information.',
    },
  ];

  const sampleProducts = [
    {
      image: '/placeholder.svg',
      title: 'iPhone 15 Pro Max 256GB',
      price: '$1,199',
      originalPrice: '$1,299',
      rating: 4.8,
      reviews: 2547,
      store: 'Apple Store',
      discount: '8% OFF',
    },
    {
      image: '/placeholder.svg',
      title: 'MacBook Air M3 13"',
      price: '$1,099',
      rating: 4.9,
      reviews: 1832,
      store: 'Best Buy',
    },
    {
      image: '/placeholder.svg',
      title: 'AirPods Pro (3rd Gen)',
      price: '$249',
      originalPrice: '$279',
      rating: 4.7,
      reviews: 4521,
      store: 'Amazon',
      discount: '11% OFF',
    },
  ];

  const sampleHotels = [
    {
      image: '/placeholder.svg',
      name: 'Grand Plaza Hotel',
      location: 'New York, NY',
      rating: 4.5,
      reviews: 1247,
      price: '$189',
      originalPrice: '$239',
      amenities: ['WiFi', 'Parking', 'Restaurant'],
      deal: 'Best Deal',
    },
    {
      image: '/placeholder.svg',
      name: 'Seaside Resort & Spa',
      location: 'Miami, FL',
      rating: 4.8,
      reviews: 892,
      price: '$299',
      amenities: ['WiFi', 'Parking', 'Restaurant'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative container py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">AI-Powered Digital Mall</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Search Everything,
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Buy Smarter
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your AI companion for shopping, travel, and local discovery. 
                Compare prices, find deals, and make smarter decisions.
              </p>
            </div>
            
            <SearchBar />
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button variant="hero" size="xl">
                <Globe className="w-5 h-5" />
                Start Exploring
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-6xl mx-auto px-4 -mt-16">
          <div className="relative rounded-3xl overflow-hidden shadow-large">
            <img 
              src={heroImage} 
              alt="Mallify AI Search Interface"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need in
              <span className="text-primary"> One Search</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mallify combines the power of AI with real-time data to give you 
              the smartest shopping and discovery experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Results Section */}
      <section className="py-20 bg-accent/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See Mallify in Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from our AI-powered search engine
            </p>
          </div>
          
          {/* Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">🛍️ Product Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          
          {/* Hotels */}
          <div>
            <h3 className="text-2xl font-bold mb-6">🏨 Travel & Hotels</h3>
            <div className="space-y-6">
              {sampleHotels.map((hotel, index) => (
                <HotelCard key={index} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Shop Smarter?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who save time and money with Mallify's AI-powered search.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="xl">
                Start Searching Now
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Mallify
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Your AI-powered digital mall for smarter shopping and discovery.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Universal Search</li>
                <li>Price Comparison</li>
                <li>Travel Booking</li>
                <li>Local Discovery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>API Docs</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Mallify. All rights reserved. Made with AI assistance.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

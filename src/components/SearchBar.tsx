import React, { useState } from 'react';
import { Search, Sparkles, ShoppingBag, MapPin, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Sparkles },
    { id: 'products', label: 'Products', icon: ShoppingBag },
    { id: 'local', label: 'Local', icon: MapPin },
    { id: 'travel', label: 'Travel', icon: Plane },
  ];

  const suggestions = [
    'iPhone 15 Pro Max best price',
    'Hotels in Dubai under $200',
    'Coffee shops near me',
    'Flight deals to London',
    'Best running shoes 2024',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Category Pills */}
      <div className="flex gap-2 mb-4 justify-center">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'gradient' : 'glass'}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="gap-2"
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </Button>
          );
        })}
      </div>

      {/* Main Search Bar */}
      <div className="relative">
        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl shadow-large overflow-hidden">
          <div className="flex items-center p-2">
            <div className="flex-1 flex items-center gap-3 px-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for anything... products, hotels, restaurants, flights"
                className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-muted-foreground text-lg"
              />
            </div>
            <Button variant="gradient" size="lg" className="mr-2">
              Search
            </Button>
          </div>
        </div>

        {/* Search Suggestions */}
        {query === '' && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card/95 backdrop-blur-md border border-border/50 rounded-xl shadow-large p-4 z-50">
            <p className="text-sm text-muted-foreground mb-3">Popular searches</p>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(suggestion)}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-accent/50 transition-colors text-sm"
                >
                  <Search className="w-4 h-4 inline mr-3 text-muted-foreground" />
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
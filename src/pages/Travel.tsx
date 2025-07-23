import React, { useState } from 'react';
import { Calendar, MapPin, Users, Search, Filter, Star, Plane, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HotelCard from '@/components/HotelCard';

const Travel = () => {
  const [searchType, setSearchType] = useState<'hotels' | 'flights' | 'activities'>('hotels');
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const featuredDestinations = [
    { name: 'Paris, France', image: '/placeholder.svg', deals: '120+ hotels' },
    { name: 'Tokyo, Japan', image: '/placeholder.svg', deals: '85+ hotels' },
    { name: 'New York, USA', image: '/placeholder.svg', deals: '200+ hotels' },
    { name: 'Dubai, UAE', image: '/placeholder.svg', deals: '150+ hotels' },
  ];

  const sampleHotels = [
    {
      image: '/placeholder.svg',
      name: 'The Ritz-Carlton Central Park',
      location: 'Midtown Manhattan, New York',
      rating: 4.8,
      reviews: 2431,
      price: '$599',
      originalPrice: '$699',
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Spa', 'Gym', 'Pool'],
      deal: 'Early Bird',
    },
    {
      image: '/placeholder.svg',
      name: 'Pod Hotels Times Square',
      location: 'Times Square, New York',
      rating: 4.2,
      reviews: 1567,
      price: '$189',
      originalPrice: '$219',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      deal: 'Last Minute',
    },
    {
      image: '/placeholder.svg',
      name: 'The High Line Hotel',
      location: 'Chelsea, New York',
      rating: 4.6,
      reviews: 892,
      price: '$329',
      amenities: ['WiFi', 'Restaurant', 'Concierge'],
    },
  ];

  const sampleFlights = [
    {
      airline: 'Delta Airlines',
      departure: 'LAX 08:30',
      arrival: 'JFK 17:45',
      duration: '5h 15m',
      stops: 'Nonstop',
      price: '$299',
      originalPrice: '$359',
    },
    {
      airline: 'American Airlines',
      departure: 'LAX 14:20',
      arrival: 'JFK 23:10',
      duration: '5h 50m',
      stops: '1 stop',
      price: '$249',
      originalPrice: '$299',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
              Your Perfect Trip
              <br />
              <span className="text-primary-foreground/80">Starts Here</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Find the best hotels, flights, and experiences with AI-powered recommendations.
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            {/* Search Type Tabs */}
            <div className="flex gap-2 mb-6 justify-center">
              {[
                { key: 'hotels', label: 'Hotels', icon: MapPin },
                { key: 'flights', label: 'Flights', icon: Plane },
                { key: 'activities', label: 'Activities', icon: Star },
              ].map(({ key, label, icon: Icon }) => (
                <Button
                  key={key}
                  variant={searchType === key ? 'default' : 'glass'}
                  onClick={() => setSearchType(key as any)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              ))}
            </div>

            {/* Search Form */}
            <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-large">
              {searchType === 'hotels' && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Where are you going?"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-in</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Check-out</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full pl-10 pr-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              {searchType === 'flights' && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">From</label>
                    <input
                      type="text"
                      placeholder="Departure city"
                      className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">To</label>
                    <input
                      type="text"
                      placeholder="Destination city"
                      className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Departure</label>
                    <input
                      type="date"
                      className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Return</label>
                    <input
                      type="date"
                      className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Passengers</label>
                    <select className="w-full px-3 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4+ Adults</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="flex justify-center mt-6">
                <Button variant="gradient" size="xl" className="gap-2">
                  <Search className="w-5 h-5" />
                  Search {searchType.charAt(0).toUpperCase() + searchType.slice(1)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing places with exclusive deals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300"
              >
                <div className="aspect-[4/5] bg-accent/20">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-white/80 text-sm">{destination.deals}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Results */}
      <section className="py-20 bg-accent/10">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best Hotels in New York</h2>
              <p className="text-muted-foreground">Found 847 hotels for your dates</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* AI Travel Tips */}
          <div className="bg-gradient-secondary border border-primary/20 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              Travel Insights for New York
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-primary">💰 Best Time to Book:</span>
                <p className="text-muted-foreground mt-1">2-3 weeks in advance for best prices</p>
              </div>
              <div>
                <span className="font-medium text-primary">📍 Best Areas:</span>
                <p className="text-muted-foreground mt-1">Midtown for sightseeing, SoHo for shopping</p>
              </div>
              <div>
                <span className="font-medium text-primary">🚇 Getting Around:</span>
                <p className="text-muted-foreground mt-1">Subway is fastest, taxis for convenience</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sampleHotels.map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>

          {/* Flight Results (when flights tab is active) */}
          {searchType === 'flights' && (
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold">Available Flights</h3>
              {sampleFlights.map((flight, index) => (
                <div key={index} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-6 mb-4">
                        <div>
                          <p className="font-semibold">{flight.airline}</p>
                          <p className="text-sm text-muted-foreground">{flight.departure}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{flight.duration}</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Arrival</p>
                          <p className="font-medium">{flight.arrival}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Stops</p>
                          <p className="font-medium">{flight.stops}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right ml-6">
                      <div className="flex items-center gap-2 justify-end mb-2">
                        <span className="text-2xl font-bold">{flight.price}</span>
                        {flight.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {flight.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button variant="gradient">
                        Select Flight
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Travel;
import React from 'react';
import { Star, MapPin, Wifi, Car, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelCardProps {
  image: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  amenities: string[];
  deal?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  image,
  name,
  location,
  rating,
  reviews,
  price,
  originalPrice,
  amenities,
  deal
}) => {
  const amenityIcons: { [key: string]: React.ComponentType<any> } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Restaurant': Coffee,
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300">
      <div className="md:flex">
        {/* Image */}
        <div className="relative md:w-80 h-48 md:h-auto bg-accent/20">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          {deal && (
            <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
              {deal}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{name}</h3>
              <div className="flex items-center gap-1 text-muted-foreground mb-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-2xl font-bold text-foreground">{price}</span>
                {originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">per night</p>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex gap-4 mb-4">
            {amenities.slice(0, 3).map((amenity) => {
              const Icon = amenityIcons[amenity] || Coffee;
              return (
                <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon className="w-3 h-3" />
                  <span>{amenity}</span>
                </div>
              );
            })}
            {amenities.length > 3 && (
              <span className="text-xs text-muted-foreground">+{amenities.length - 3} more</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button variant="gradient" className="flex-1">
              Book Now
            </Button>
            <Button variant="outline">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
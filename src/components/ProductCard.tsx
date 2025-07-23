import React from 'react';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  store: string;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  store,
  discount
}) => {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover:scale-[1.02]">
      {/* Image */}
      <div className="relative aspect-square bg-accent/20">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-lg text-xs font-medium">
            {discount}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-foreground">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>

        {/* Store */}
        <p className="text-xs text-muted-foreground mb-4">{store}</p>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="gradient" size="sm" className="flex-1">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </Button>
          <Button variant="outline" size="sm">
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
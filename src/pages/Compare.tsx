import React, { useState } from 'react';
import { Plus, X, Check, AlertCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Compare = () => {
  const [compareItems, setCompareItems] = useState([
    {
      id: 1,
      type: 'product',
      image: '/placeholder.svg',
      name: 'iPhone 15 Pro Max',
      price: '$1,199',
      rating: 4.8,
      specs: {
        'Display': '6.7" Super Retina XDR',
        'Processor': 'A17 Pro chip',
        'Storage': '256GB',
        'Camera': '48MP Main + 12MP Ultra Wide',
        'Battery': 'Up to 29 hours video',
        'OS': 'iOS 17',
      }
    },
    {
      id: 2,
      type: 'product',
      image: '/placeholder.svg',
      name: 'Samsung Galaxy S24 Ultra',
      price: '$1,299',
      rating: 4.7,
      specs: {
        'Display': '6.8" Dynamic AMOLED 2X',
        'Processor': 'Snapdragon 8 Gen 3',
        'Storage': '512GB',
        'Camera': '200MP Main + 50MP Telephoto',
        'Battery': 'Up to 30 hours video',
        'OS': 'Android 14',
      }
    },
    {
      id: 3,
      type: 'product',
      image: '/placeholder.svg',
      name: 'Google Pixel 8 Pro',
      price: '$999',
      rating: 4.6,
      specs: {
        'Display': '6.7" LTPO OLED',
        'Processor': 'Google Tensor G3',
        'Storage': '128GB',
        'Camera': '50MP Main + 48MP Telephoto',
        'Battery': 'Up to 24 hours video',
        'OS': 'Android 14',
      }
    },
  ]);

  const removeItem = (id: number) => {
    setCompareItems(items => items.filter(item => item.id !== id));
  };

  const addItem = () => {
    // This would typically open a search modal
    console.log('Add item clicked');
  };

  const aiInsights = {
    winner: 'iPhone 15 Pro Max',
    reasoning: 'Best overall performance and ecosystem integration',
    pros: {
      'iPhone 15 Pro Max': ['Best build quality', 'Excellent camera system', 'Long software support'],
      'Samsung Galaxy S24 Ultra': ['Best display', 'S Pen functionality', 'Versatile camera zoom'],
      'Google Pixel 8 Pro': ['Best value', 'Clean Android experience', 'Excellent computational photography']
    },
    verdict: 'Choose iPhone for ecosystem, Samsung for productivity, Pixel for photography and value.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Product Comparison
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare products side by side with AI-powered insights to make the best decision.
          </p>
        </div>

        {/* AI Insights */}
        {compareItems.length >= 2 && (
          <div className="bg-gradient-secondary border border-primary/20 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">AI</span>
              </div>
              AI Comparison Insights
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Winner: {aiInsights.winner}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {aiInsights.reasoning}
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Bottom Line:</strong> {aiInsights.verdict}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Key Strengths</h4>
                <div className="space-y-2">
                  {Object.entries(aiInsights.pros).map(([product, pros]) => (
                    <div key={product} className="text-sm">
                      <span className="font-medium">{product}:</span>
                      <span className="text-muted-foreground ml-1">
                        {pros.join(', ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-medium min-w-[200px]">
                    Product
                  </th>
                  {compareItems.map((item) => (
                    <th key={item.id} className="text-center p-6 min-w-[280px] relative">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-destructive/10 text-destructive"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      
                      <div className="space-y-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-xl mx-auto bg-accent/20"
                        />
                        <div>
                          <h3 className="font-semibold text-sm">{item.name}</h3>
                          <p className="text-xl font-bold text-primary mt-1">{item.price}</p>
                          <div className="flex items-center justify-center gap-1 mt-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </th>
                  ))}
                  
                  {/* Add Item Column */}
                  {compareItems.length < 4 && (
                    <th className="text-center p-6 min-w-[280px]">
                      <button
                        onClick={addItem}
                        className="w-24 h-24 border-2 border-dashed border-border rounded-xl flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-colors mx-auto"
                      >
                        <Plus className="w-8 h-8 text-muted-foreground" />
                      </button>
                      <p className="text-sm text-muted-foreground mt-3">Add Product</p>
                    </th>
                  )}
                </tr>
              </thead>
              
              <tbody>
                {/* Specifications Rows */}
                {compareItems.length > 0 && Object.keys(compareItems[0].specs).map((specKey) => (
                  <tr key={specKey} className="border-b border-border/50">
                    <td className="p-4 font-medium text-sm bg-accent/20">
                      {specKey}
                    </td>
                    {compareItems.map((item) => (
                      <td key={item.id} className="p-4 text-center text-sm">
                        {item.specs[specKey as keyof typeof item.specs]}
                      </td>
                    ))}
                    {compareItems.length < 4 && (
                      <td className="p-4"></td>
                    )}
                  </tr>
                ))}
                
                {/* Action Row */}
                <tr>
                  <td className="p-4 font-medium text-sm bg-accent/20">
                    Actions
                  </td>
                  {compareItems.map((item) => (
                    <td key={item.id} className="p-4 text-center">
                      <div className="space-y-2">
                        <Button variant="gradient" size="sm" className="w-full">
                          Buy Now
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </div>
                    </td>
                  ))}
                  {compareItems.length < 4 && (
                    <td className="p-4"></td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Analysis */}
        {compareItems.length >= 2 && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Price Analysis</h3>
              <div className="space-y-3">
                {compareItems.map((item, index) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.price}</span>
                      {index === 0 && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Best Deal</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Overall Rating</span>
                  <span className="font-medium">iPhone 15 Pro Max leads</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Best Value</span>
                  <span className="font-medium">Google Pixel 8 Pro</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Best Features</span>
                  <span className="font-medium">Samsung Galaxy S24 Ultra</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {compareItems.length === 0 && (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Products to Compare</h3>
            <p className="text-muted-foreground mb-6">
              Search for products and add them here to start comparing.
            </p>
            <Button variant="gradient">
              Search Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
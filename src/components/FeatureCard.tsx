import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, gradient = false }) => {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-large ${
      gradient 
        ? 'bg-gradient-secondary border-primary/20' 
        : 'bg-card border-border hover:border-primary/50'
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        gradient 
          ? 'bg-gradient-primary text-primary-foreground' 
          : 'bg-accent text-accent-foreground'
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
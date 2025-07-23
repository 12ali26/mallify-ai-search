import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, User, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Mallify
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="/search" className="text-sm font-medium hover:text-primary transition-colors">
            Search
          </a>
          <a href="/compare" className="text-sm font-medium hover:text-primary transition-colors">
            Compare
          </a>
          <a href="/travel" className="text-sm font-medium hover:text-primary transition-colors">
            Travel
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <User className="w-4 h-4" />
            Sign In
          </Button>
          <Button variant="gradient" size="sm">
            Get Pro
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
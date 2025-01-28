import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          <a href="/">E-Shop</a>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-1/2 max-w-lg">
          <Input
            type="text"
            placeholder="Search for products..."
            className="flex-grow border-gray-300 rounded-l-md"
          />
          <Button className="rounded-l-none">
            <Search size={20} />
          </Button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* User Account */}
          <a href="/account" className="text-gray-600 hover:text-gray-900">
            <User size={24} />
          </a>
          
          {/* Cart */}
          <a href="/cart" className="relative text-gray-600 hover:text-gray-900">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};



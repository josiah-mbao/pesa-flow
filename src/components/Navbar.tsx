"use client";

import React, { useState } from 'react';
import { ChevronDown, Menu, X, LayoutDashboard, Send, Settings } from 'lucide-react';

// Using a basic inline SVG for a "flow/money" icon (reused from App.jsx concept)
const FlowIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Interledger/Flow Symbol (simplified dollar/euro sign mixed) */}
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const navLinks = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Transactions', href: '/transactions', icon: Send },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  // Use a mock path to simulate active link styling
  const currentPath = '/dashboard'; 

  return (
    <nav className="sticky top-0 z-20 w-full backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <a href="/dashboard" className="flex items-center space-x-2 text-xl font-bold text-indigo-600 dark:text-indigo-400">
            <FlowIcon className="w-6 h-6" />
            <span>PesaFlow</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                      : 'border-b-2 border-transparent text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Profile Dropdown / Mobile Menu Button */}
          <div className="flex items-center">
            {/* Profile Dropdown */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center relative">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                aria-expanded={isProfileMenuOpen}
              >
                <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-sm font-semibold text-indigo-600 dark:text-indigo-300">
                    SM
                </div>
                <span className="ml-2 text-sm font-medium hidden lg:inline">SME User</span>
                <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${isProfileMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <a href="/settings" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                      Account Settings
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700">
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="sm:hidden border-t border-zinc-200 dark:border-zinc-800" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center px-4 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-colors"
              >
                <link.icon className="h-5 w-5 mr-3" />
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                <a href="/settings" className="block px-4 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-colors">Account Settings</a>
                <a href="#" className="block px-4 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-indigo-50 dark:hover:bg-zinc-800 transition-colors">Sign out</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

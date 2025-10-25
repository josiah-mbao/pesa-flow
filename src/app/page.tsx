"use client";

import React, { useState } from 'react';
// FIX: Corrected relative path from '../../components/Navbar' to '../components/Navbar'
import Navbar from '../components/Navbar'; 
import { Send } from 'lucide-react';

// Using a basic inline SVG for a "flow/money" icon
const FlowIcon = (props) => (
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
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// Mock Modal Component for Early Access (to replace alert/confirm)
const EarlyAccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onClose();
    console.log("Success: Early access request submitted!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-zinc-800 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all">
        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Join the Waitlist</h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-6">
          PesaFlow is currently in early access. Fill in your email to be the first to know when we launch and to secure a spot in our beta program.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your.business@email.com"
            required
            className="w-full p-3 mb-4 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-white"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-sm font-semibold rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-sans flex flex-col">
      
      {/* 1. RENDER THE NAVBAR */}
      <Navbar /> 
      
      {/* Main Content Area - Hero Section */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-10">
        <div className="max-w-4xl text-center">
          
          {/* Hero Heading */}
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            Cross-Border Payments, <br className="hidden sm:inline" />
            <span className="text-indigo-600 dark:text-indigo-400">Simplified</span>.
          </h1>
          
          {/* Subtitle/Value Proposition */}
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Interledger-powered financial infrastructure designed specifically for **SMEs** to send and receive global payments instantly and affordably.
          </p>
          
          {/* Primary CTA Block */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-xl bg-indigo-600 text-white shadow-2xl shadow-indigo-500/50 transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Join the Beta Waitlist
            </button>
            <a
              href="/dashboard" // Link to the actual dashboard now that the nav is present
              className="w-full sm:w-auto px-10 py-4 text-lg font-semibold rounded-xl border-2 border-indigo-200 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 transition-all duration-300 ease-in-out hover:bg-indigo-50 dark:hover:bg-zinc-800/50"
            >
              Go to Dashboard
            </a>
          </div>
          
          {/* Feature Highlights/Trust Signals */}
          <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 shadow-md">
              <h3 className="flex items-center text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                <span className="mr-2">⚡</span> Instant Settlement
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Leverage Interledger for real-time payment finality, drastically reducing settlement times from days to seconds.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 shadow-md">
              <h3 className="flex items-center text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                <span className="mr-2">🌍</span> Global Reach
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Connect seamlessly to diverse payment networks and currencies, expanding your business potential across borders.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 shadow-md">
              <h3 className="flex items-center text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                <span className="mr-2">🔒</span> Secure & Compliant
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Built with enterprise-grade security and compliance standards for peace of mind.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* Footer (Minimal) */}
      <footer className="w-full py-4 text-center text-xs text-zinc-500 dark:text-zinc-600 border-t border-zinc-200 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} PesaFlow. MVP | Built with Interledger.
      </footer>

      {/* Modal Render */}
      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

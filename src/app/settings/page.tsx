"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { mockAccountSummary } from '@/lib/mockData';
import { User, Lock, Key, Globe, Copy, Send } from 'lucide-react';

// Reusable Settings Section
const SettingsSection = ({ icon: Icon, title, description, children }) => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
    <div className="flex items-center space-x-3 mb-4 border-b border-zinc-100 dark:border-zinc-700 pb-3">
      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      <div>
        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </div>
    <div className="space-y-6">
      {children}
    </div>
  </div>
);

// Helper for Copy to Clipboard (using document.execCommand for iFrame compatibility)
const copyToClipboard = (text: string, setMessage: (msg: string) => void) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    setMessage('Copied to clipboard!');
  } catch (err) {
    setMessage('Failed to copy.');
    console.error('Copy failed: ', err);
  }
  document.body.removeChild(textarea);
  setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
};

export default function SettingsPage() {
  const [copyMessage, setCopyMessage] = useState('');

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Account Settings</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Manage your PesaFlow profile and Interledger connection.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Section 1: Interledger Connection */}
          <SettingsSection 
            icon={Globe} 
            title="Interledger Protocol (ILP)" 
            description="Manage your global payment connection details."
          >
            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                ILP Address
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={mockAccountSummary.interledgerAddress}
                  readOnly
                  className="w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-white font-mono text-sm"
                />
                <button 
                  onClick={() => copyToClipboard(mockAccountSummary.interledgerAddress, setCopyMessage)}
                  className="p-2 text-indigo-600 dark:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  title="Copy ILP Address"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              {copyMessage && (
                <p className="mt-1 text-xs text-green-600 dark:text-green-400">{copyMessage}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                API Key (Connect Go Backend)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="password"
                  value="********************************"
                  readOnly
                  className="w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-700 text-zinc-900 dark:text-white font-mono text-sm"
                />
                <button 
                  className="p-2 text-red-600 dark:text-red-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                  title="Regenerate Key"
                >
                  <Key className="w-5 h-5" />
                </button>
              </div>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">This key is used by your Go backend to authorize payments.</p>
            </div>
          </SettingsSection>
          
          {/* Section 2: User Profile */}
          <SettingsSection 
            icon={User} 
            title="Business Profile" 
            description="Update your business contact information."
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Business Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="SME Trading Ltd"
                  className="mt-1 w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Contact Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="contact@smetrading.com"
                  className="mt-1 w-full p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </SettingsSection>
        </div>
        
      </main>
    </>
  );
}

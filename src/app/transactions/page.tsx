"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { mockTransactions, Transaction } from '@/lib/mockData';
import { Search, Filter, ArrowUpDown, Send } from 'lucide-react';

const TransactionsTable = ({ transactions }: { transactions: Transaction[] }) => {
  const getStatusClasses = (status: Transaction['status']) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Failed': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-800">
      <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
        <thead className="bg-zinc-50 dark:bg-zinc-800">
          <tr>
            {['Date', 'Type', 'Description', 'Source/Destination', 'Amount (USD)', 'Fee', 'Status'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
              >
                <div className="flex items-center">
                  {header}
                  <ArrowUpDown className="ml-1 w-3 h-3" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-800">
          {transactions.map((tx) => (
            <tr key={tx.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white">{tx.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-300">{tx.type}</td>
              <td className="px-6 py-4 text-sm text-zinc-500 dark:text-zinc-300 max-w-xs truncate">{tx.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-300">
                <span className="font-semibold">{tx.source}</span> &rarr; {tx.destination}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${tx.type === 'Payment Sent' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                {tx.type === 'Payment Sent' ? '-' : '+'} ${tx.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-500 dark:text-zinc-300">${tx.fee.toFixed(2)}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClasses(tx.status)}`}>
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function TransactionsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Cross-Border Transactions</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Detailed list of all PesaFlow payments and settlements.</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors">
            <Send className="w-5 h-5" />
            <span>New Payment</span>
          </button>
        </header>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                    type="text" 
                    placeholder="Search by description or ID..." 
                    className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
            </button>
        </div>

        <TransactionsTable transactions={mockTransactions} />
        
      </main>
    </>
  );
}

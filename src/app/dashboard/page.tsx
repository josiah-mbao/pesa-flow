"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { mockAccountSummary, mockTransactions, Transaction } from '@/lib/mockData';
import { DollarSign, Globe, Clock, ArrowRight, TrendingUp, Send } from 'lucide-react';

// Reusable Stat Card Component
const StatCard = ({ icon: Icon, title, value, unit, color }) => (
  <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700 transition-transform hover:shadow-xl">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</h3>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <p className="mt-2 text-3xl font-extrabold text-zinc-900 dark:text-white">
      {value.toLocaleString()}
      {unit}
    </p>
  </div>
);

// Transaction Row Component
const TransactionRow = ({ tx }: { tx: Transaction }) => {
  const statusClasses = {
    'Completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Pending': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Failed': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };
  
  const typeIcon = tx.type === 'Payment Sent' ? <ArrowRight className="w-4 h-4 text-red-500" /> : <TrendingUp className="w-4 h-4 text-green-500" />;

  return (
    <div className="flex justify-between items-center py-3 border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
      <div className="flex items-center space-x-3">
        {typeIcon}
        <div>
          <p className="font-semibold text-zinc-800 dark:text-zinc-100">{tx.description}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {tx.source} &rarr; {tx.destination}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-mono text-sm ${tx.type === 'Payment Sent' ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
          {tx.type === 'Payment Sent' ? '-' : '+'} ${tx.amount.toFixed(2)}
        </p>
        <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusClasses[tx.status]}`}>
          {tx.status}
        </span>
      </div>
    </div>
  );
};


export default function DashboardPage() {
  const recentTransactions = mockTransactions.slice(0, 3); // Show top 3

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Welcome back, your financial flow is ready.</p>
        </header>

        {/* Financial Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            icon={DollarSign}
            title="Current USD Balance"
            value={mockAccountSummary.mainBalanceUSD.toFixed(2)}
            unit=""
            color="text-indigo-500"
          />
          <StatCard
            icon={Globe}
            title="Volume (Last 30 Days)"
            value={mockAccountSummary.totalVolumeMonth.toFixed(2)}
            unit=" USD"
            color="text-blue-500"
          />
          <StatCard
            icon={Clock}
            title="Pending Payments"
            value={mockAccountSummary.pendingPayments}
            unit=" payments"
            color="text-yellow-500"
          />
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Quick Action Card (New Payment) */}
          <div className="lg:col-span-1 bg-indigo-600 p-6 rounded-xl shadow-xl text-white flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-2">Send Cross-Border Payment</h2>
                <p className="text-indigo-200 text-sm mb-6">Instantly route funds using Interledger.</p>
            </div>
            <a 
                href="/transactions" 
                className="flex items-center justify-center space-x-2 px-4 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition-colors"
            >
                <Send className="w-5 h-5" />
                <span>New Payment</span>
            </a>
          </div>

          {/* Recent Transactions List */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-zinc-100 dark:border-zinc-700">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-1">
              {recentTransactions.map((tx) => (
                <TransactionRow key={tx.id} tx={tx} />
              ))}
            </div>
            <a href="/transactions" className="mt-4 block text-center text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm">
              View All Transactions
            </a>
          </div>

        </div>
      </main>
    </>
  );
}

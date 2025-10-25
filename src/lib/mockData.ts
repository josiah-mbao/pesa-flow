// src/lib/mockData.ts

export interface Transaction {
  id: string;
  date: string;
  description: string;
  source: string; // Originating currency/network
  destination: string; // Destination currency/network
  amount: number;
  fee: number;
  status: 'Completed' | 'Pending' | 'Failed';
  type: 'Payment Sent' | 'Payment Received';
}

export interface AccountSummary {
  mainBalanceUSD: number;
  totalVolumeMonth: number;
  pendingPayments: number;
  interledgerAddress: string;
}

export const mockAccountSummary: AccountSummary = {
  mainBalanceUSD: 14500.52,
  totalVolumeMonth: 38250.00,
  pendingPayments: 2,
  interledgerAddress: 'g.pesaflow.sme.user101',
};

export const mockTransactions: Transaction[] = [
  {
    id: 'TX8932',
    date: '2024-10-24',
    description: 'Invoice #500 payment',
    source: 'USD/Bank',
    destination: 'KES/Mobile Money',
    amount: 1250.00,
    fee: 3.75,
    status: 'Completed',
    type: 'Payment Sent',
  },
  {
    id: 'TX8931',
    date: '2024-10-23',
    description: 'Received settlement from ILP',
    source: 'EUR/ILP',
    destination: 'USD/PesaFlow',
    amount: 5500.00,
    fee: 0.00,
    status: 'Completed',
    type: 'Payment Received',
  },
  {
    id: 'TX8930',
    date: '2024-10-22',
    description: 'Supplier payment - Shenzhen',
    source: 'USD/Bank',
    destination: 'CNY/WeChat Pay',
    amount: 950.80,
    fee: 2.85,
    status: 'Pending',
    type: 'Payment Sent',
  },
  {
    id: 'TX8929',
    date: '2024-10-21',
    description: 'Freelance service fee',
    source: 'AUD/ILP',
    destination: 'USD/PesaFlow',
    amount: 450.00,
    fee: 0.00,
    status: 'Completed',
    type: 'Payment Received',
  },
  {
    id: 'TX8928',
    date: '2024-10-20',
    description: 'Pending vendor verification',
    source: 'USD/PesaFlow',
    destination: 'ZAR/Bank',
    amount: 7500.00,
    fee: 22.50,
    status: 'Pending',
    type: 'Payment Sent',
  },
];

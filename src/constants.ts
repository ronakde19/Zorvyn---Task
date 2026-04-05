import { Transaction, InsightItem } from './types';

export const TRANSACTIONS: Transaction[] = [
  {
    id: '#TR-90421-XB',
    date: 'Oct 24, 2023',
    time: '14:32:05 EST',
    category: 'Cloud Infrastructure',
    beneficiary: 'Vanguard Alpha Fund',
    type: 'expense',
    amount: 14200.00,
    status: 'settled',
    channel: 'SWIFT / Treasury',
    icon: 'cloud'
  },
  {
    id: '#TR-90388-PL',
    date: 'Oct 23, 2023',
    time: '09:15:00 EST',
    category: 'Client Retainer',
    beneficiary: 'Federal Clearing House',
    type: 'income',
    amount: 45000.00,
    status: 'settled',
    channel: 'ACH Transfer',
    icon: 'payments'
  },
  {
    id: '#TR-90251-ZZ',
    date: 'Oct 22, 2023',
    time: '16:45:12 EST',
    category: 'Executive Summit',
    beneficiary: 'BlackRock Institutional',
    type: 'expense',
    amount: 2840.50,
    status: 'in-flight',
    channel: 'Internal Ledger',
    icon: 'travel_explore'
  },
  {
    id: '#TR-89912-AC',
    date: 'Oct 21, 2023',
    time: '11:20:00 EST',
    category: 'Office Lease',
    beneficiary: 'Metropolitan Real Estate',
    type: 'expense',
    amount: 18500.00,
    status: 'settled',
    channel: 'Wire Transfer',
    icon: 'apartment'
  },
  {
    id: '#TR-89754-DK',
    date: 'Oct 20, 2023',
    time: '10:05:33 EST',
    category: 'Stock Dividend',
    beneficiary: 'Global Equity Partners',
    type: 'income',
    amount: 3120.22,
    status: 'settled',
    channel: 'Direct Deposit',
    icon: 'monitoring'
  }
];

export const INSIGHTS: InsightItem[] = [
  {
    id: '1',
    title: 'Subscription Audit',
    description: '3 unused subscriptions detected this month.',
    type: 'audit',
    action: 'Optimize',
    icon: 'subscriptions'
  },
  {
    id: '2',
    title: 'Liquidity Alert',
    description: 'Cash reserves are 12% higher than your set threshold.',
    type: 'alert',
    action: 'View Wallet',
    icon: 'account_balance_wallet'
  },
  {
    id: '3',
    title: 'Tax Liability Est.',
    description: 'Projected year-end liability based on current P&L.',
    type: 'tax',
    action: 'Generate Report',
    icon: 'auto_graph'
  }
];

export const CHART_DATA = [
  { name: 'Jan 23', assets: 400, liabilities: 240 },
  { name: 'Feb 23', assets: 450, liabilities: 260 },
  { name: 'Mar 23', assets: 420, liabilities: 250 },
  { name: 'Apr 23', assets: 550, liabilities: 300 },
  { name: 'May 23', assets: 600, liabilities: 320 },
  { name: 'Jun 23', assets: 580, liabilities: 310 },
  { name: 'Jul 23', assets: 850, liabilities: 400 },
  { name: 'Aug 23', assets: 820, liabilities: 390 },
  { name: 'Sep 23', assets: 900, liabilities: 420 },
  { name: 'Oct 23', assets: 880, liabilities: 410 },
  { name: 'Nov 23', assets: 950, liabilities: 450 },
  { name: 'Dec 23', assets: 920, liabilities: 440 },
];

export const ALLOCATION_DATA = [
  { name: 'Domestic Equities', value: 65, color: '#004ac6' },
  { name: 'Fixed Income', value: 20, color: '#acbfff' },
  { name: 'Cash & Derivatives', value: 15, color: '#434655' },
];

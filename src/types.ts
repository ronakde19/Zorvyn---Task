export type View = 'dashboard' | 'transactions' | 'insights';

export interface Transaction {
  id: string;
  date: string;
  time: string;
  category: string;
  beneficiary: string;
  type: 'income' | 'expense';
  amount: number;
  status: 'settled' | 'pending' | 'in-flight';
  channel: string;
  icon: string;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  type: 'audit' | 'alert' | 'tax';
  action: string;
  icon: string;
}

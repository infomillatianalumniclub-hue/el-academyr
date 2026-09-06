import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Download,
  CreditCard,
  Building2,
  Smartphone,
  CheckCircle2,
  Clock,
  Plus,
  X,
  FileText,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { mockTeacherPayouts, TeacherPayoutTransaction } from '../../data/teacherAdminMockData';

export const TeacherEarningsTab: React.FC = () => {
  const [payouts, setPayouts] = useState<TeacherPayoutTransaction[]>(mockTeacherPayouts);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('35000');
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'DBBL Bank'>('DBBL Bank');
  const [accountNumber, setAccountNumber] = useState('117-120-9482710');

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = Number(withdrawAmount);
    if (amt < 5000) {
      alert('Minimum payout withdrawal threshold is ৳5,000.');
      return;
    }

    const newTx: TeacherPayoutTransaction = {
      id: `TXN-${Date.now().toString().slice(-6)}`,
      amount: amt,
      date: 'Today',
      method: paymentMethod,
      accountNumber: accountNumber,
      status: 'Processing',
      downloadInvoiceUrl: '#'
    };

    setPayouts([newTx, ...payouts]);
    setShowWithdrawModal(false);
    alert(`Payout request of ৳${amt.toLocaleString()} submitted to E-Lawyers Finance Desk! Processing within 24 hours.`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <DollarSign className="w-6 h-6 text-emerald-400" />
            <span>Earnings, Revenue Split & Payouts</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track gross sales, 80% instructor earnings share, and request withdrawals via Bangladeshi banks or mobile wallets.
          </p>
        </div>

        <button
          onClick={() => setShowWithdrawModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition active:scale-95"
        >
          <CreditCard className="w-4 h-4" />
          <span>Request Payout Withdrawal</span>
        </button>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Gross Revenue
          </div>
          <div className="text-3xl font-black text-white font-display mt-2">
            ৳8,50,000
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Total sales generated across 12 published courses
          </div>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Net Paid Out to You (80%)
          </div>
          <div className="text-3xl font-black text-emerald-400 font-display mt-2">
            ৳8,15,000
          </div>
          <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Transferred securely via DBBL & bKash Merchant
          </div>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Available for Withdrawal
          </div>
          <div className="text-3xl font-black text-amber-400 font-display mt-2">
            ৳35,000
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Ready to withdraw (Min. threshold: ৳5,000)
          </div>
        </div>
      </div>

      {/* Commission Structure & Revenue Stream Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commission Transparency Diagram */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>80/20 Faculty Commission Structure</span>
          </h3>
          <p className="text-xs text-slate-400">
            E-Lawyers Academy implements an industry-leading faculty revenue sharing policy.
          </p>

          <div className="space-y-3 pt-2">
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-emerald-400">Instructor Net Take-Home (80%)</span>
                <span className="text-white font-mono">80.0%</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '80%' }} />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Direct monthly payout for course registrations and premium masterclasses.
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-slate-400">Platform Operational & CDN Fee (20%)</span>
                <span className="text-slate-400 font-mono">20.0%</span>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 rounded-full" style={{ width: '20%' }} />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Covers bKash gateway charges (1.5%), Zoom Enterprise API bandwidth, and video watermarking.
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Streams Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span>Earnings Channels</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3.5 bg-slate-850 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Direct Course Sales</div>
                <div className="text-[11px] text-slate-400">Individual student purchases</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-white font-mono">৳6,97,000</div>
                <div className="text-[10px] text-emerald-400 font-bold">82% of Total</div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-850 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Live Masterclasses & Workshops</div>
                <div className="text-[11px] text-slate-400">Special live batch tickets</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-white font-mono">৳1,02,000</div>
                <div className="text-[10px] text-blue-400 font-bold">12% of Total</div>
              </div>
            </div>

            <div className="p-3.5 bg-slate-850 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Faculty Performance Bonus</div>
                <div className="text-[11px] text-slate-400">4.8+ Rating reward incentives</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-white font-mono">৳51,000</div>
                <div className="text-[10px] text-amber-400 font-bold">6% of Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payout Transaction History */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Withdrawal History & Tax Invoices
          </span>
          <button
            onClick={() => alert('Downloading official annual instructor income tax statement (IT-10B)...')}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Annual Tax Statement</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="p-4 font-semibold">Transaction ID</th>
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Payment Method</th>
                <th className="p-4 font-semibold">Account Number</th>
                <th className="p-4 font-semibold">Amount</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {payouts.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-mono font-bold text-white">{tx.id}</td>
                  <td className="p-4 text-slate-400 font-mono text-[11px]">{tx.date}</td>
                  <td className="p-4 text-slate-300 font-medium">{tx.method}</td>
                  <td className="p-4 font-mono text-slate-400 text-[11px]">{tx.accountNumber}</td>
                  <td className="p-4 font-mono font-bold text-emerald-400">৳{tx.amount.toLocaleString()}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        tx.status === 'Paid'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => alert(`Downloading payment voucher for ${tx.id}`)}
                      className="text-amber-400 hover:text-amber-300 font-bold text-[11px]"
                    >
                      Invoice ↓
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Request Payout Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Request Payout Withdrawal</h3>
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs">
              <span className="text-amber-300 font-bold">Available Balance: </span>
              <span className="text-white font-mono font-bold">৳35,000</span>
            </div>

            <form onSubmit={handleWithdrawSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Withdrawal Amount (BDT) *
                </label>
                <input
                  type="number"
                  min={5000}
                  max={35000}
                  required
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono font-bold focus:outline-none focus:border-amber-400"
                />
                <span className="text-[10px] text-slate-500">Minimum withdrawal amount is ৳5,000</span>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Payment Method *</label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                >
                  <option value="DBBL Bank">DBBL Bank (Dutch-Bangla Bank Limited)</option>
                  <option value="bKash">bKash Merchant / Personal</option>
                  <option value="Nagad">Nagad Islamic / Personal</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Account Number / IBAN *</label>
                <input
                  type="text"
                  required
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowWithdrawModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  CreditCard,
  DollarSign,
  TrendingUp,
  Download,
  AlertCircle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Smartphone,
  Building,
  ShieldCheck,
  Search
} from 'lucide-react';
import { mockAdminRefunds, AdminRefundRequest } from '../../data/teacherAdminMockData';

export const AdminFinanceTab: React.FC = () => {
  const [refunds, setRefunds] = useState<AdminRefundRequest[]>(mockAdminRefunds);
  const [filterGateway, setFilterGateway] = useState<'All' | 'bKash' | 'Nagad' | 'SSLCommerz'>('All');

  const handleApproveRefund = (id: string, name: string, amount: number, method: string) => {
    setRefunds((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Approved' } : r))
    );
    alert(`Refund of ৳${amount.toLocaleString()} approved for ${name}! Automated credit dispatched via ${method} Merchant API.`);
  };

  const handleRejectRefund = (id: string, name: string) => {
    setRefunds((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: 'Rejected' } : r))
    );
    alert(`Refund ticket for ${name} rejected with policy notification.`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <CreditCard className="w-6 h-6 text-amber-400" />
            <span>Financial Operations, Gateways & Refund Center</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Reconcile bKash, Nagad, and SSLCommerz transaction logs, process refunds, and supervise 80/20 faculty splits.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting full Academy Financial Audit Ledger 2026 (Excel/CSV)...')}
          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition"
        >
          <Download className="w-4 h-4 text-emerald-400" />
          <span>Export Financial Ledger</span>
        </button>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Total Lifetime Gross Inflow
          </div>
          <div className="text-3xl font-black text-white font-display mt-2">
            ৳5,00,00,000
          </div>
          <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-bold">
            <TrendingUp className="w-3.5 h-3.5" /> ৳42,50,000 Received This Month
          </div>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">
            Platform Retained Fee (20%)
          </div>
          <div className="text-3xl font-black text-purple-400 font-display mt-2">
            ৳1,00,00,000
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Operations, servers, and video streaming CDN
          </div>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
            Disbursed Faculty Share (80%)
          </div>
          <div className="text-3xl font-black text-emerald-400 font-display mt-2">
            ৳4,00,00,000
          </div>
          <div className="text-xs text-slate-400 mt-2">
            Direct bank and mobile wallet settlements
          </div>
        </div>
      </div>

      {/* Payment Gateway Channels Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-pink-400" />
              <span>bKash Merchant API</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
              Connected
            </span>
          </div>
          <div className="text-lg font-black text-white font-mono">68.0% Volume</div>
          <p className="text-[11px] text-slate-400">1.5% gateway surcharge applied</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-orange-400" />
              <span>Nagad Gateway Direct</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
              Connected
            </span>
          </div>
          <div className="text-lg font-black text-white font-mono">22.0% Volume</div>
          <p className="text-[11px] text-slate-400">Direct wallet auto-reconciliation</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white text-xs flex items-center gap-1.5">
              <Building className="w-4 h-4 text-blue-400" />
              <span>SSLCommerz / DBBL Cards</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
              Connected
            </span>
          </div>
          <div className="text-lg font-black text-white font-mono">10.0% Volume</div>
          <p className="text-[11px] text-slate-400">Visa, Mastercard, City Bank AMEX</p>
        </div>
      </div>

      {/* Student Refund Requests Resolution Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Student Refund & Cancellation Queue
            </span>
          </div>
          <span className="text-xs text-amber-400 font-bold">
            {refunds.filter((r) => r.status === 'Pending').length} Pending Requests
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="p-4 font-semibold">Ticket ID</th>
                <th className="p-4 font-semibold">Student</th>
                <th className="p-4 font-semibold">Course Title</th>
                <th className="p-4 font-semibold">Amount / Method</th>
                <th className="p-4 font-semibold">Reason</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {refunds.map((ref) => (
                <tr key={ref.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-mono font-bold text-white">{ref.id}</td>
                  <td className="p-4">
                    <div className="font-bold text-white">{ref.studentName}</div>
                    <div className="text-[11px] text-slate-400">{ref.studentEmail}</div>
                  </td>
                  <td className="p-4 text-slate-300 max-w-[180px] truncate">{ref.courseTitle}</td>
                  <td className="p-4">
                    <div className="font-mono font-bold text-rose-400">৳{ref.amount.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {ref.paymentMethod} • {ref.transactionId}
                    </div>
                  </td>
                  <td className="p-4 text-slate-300 max-w-[200px] text-[11px]">
                    "{ref.reason}"
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ref.status === 'Approved'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : ref.status === 'Pending'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}
                    >
                      {ref.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {ref.status === 'Pending' ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            handleApproveRefund(ref.id, ref.studentName, ref.amount, ref.paymentMethod)
                          }
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectRefund(ref.id, ref.studentName)}
                          className="px-3 py-1 bg-slate-800 hover:bg-rose-900 text-slate-300 rounded-lg text-xs font-bold transition"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono">Closed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

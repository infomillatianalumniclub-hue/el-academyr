import React, { useState } from 'react';
import { 
  CreditCard, 
  Download, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Receipt, 
  ShieldCheck, 
  FileText,
  X,
  Printer
} from 'lucide-react';
import { mockStudentInvoices } from '../../data/studentMockData';
import { StudentInvoice } from '../../types';

export const StudentPayments: React.FC = () => {
  const [invoices] = useState<StudentInvoice[]>(mockStudentInvoices);
  const [activeInvoiceModal, setActiveInvoiceModal] = useState<StudentInvoice | null>(null);

  const safeInvoices = invoices || [];
  const totalSpent = safeInvoices.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-8" id="student-payments-page">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Payment & Billing Ledger
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Payment & Purchase History
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Official Bangladesh VAT tax invoices, bKash/Nagad/Card receipts, and lifetime enrollment proof.
          </p>
        </div>

        <div className="p-4 bg-slate-900 text-white rounded-2xl text-right">
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
            Total Investment
          </span>
          <span className="text-xl font-black font-display text-white">
            ৳{totalSpent.toLocaleString()} BDT
          </span>
        </div>
      </div>

      {/* Supported Payment Gateways showcase */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Integrated Payment Systems:</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold">
          <span className="px-3 py-1 rounded-lg bg-pink-50 text-pink-700 border border-pink-200">
            bKash Merchant
          </span>
          <span className="px-3 py-1 rounded-lg bg-orange-50 text-orange-700 border border-orange-200">
            Nagad Payment
          </span>
          <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
            SSLCommerz Gateway
          </span>
          <span className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
            Visa / MasterCard / AMEX
          </span>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 text-base">Purchase History & Receipts</h3>
          <span className="text-xs text-slate-500">{invoices.length} Transactions Recorded</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400 border-b border-slate-200">
              <tr>
                <th className="p-4 font-bold">Invoice ID</th>
                <th className="p-4 font-bold">Course Name</th>
                <th className="p-4 font-bold">Payment Date</th>
                <th className="p-4 font-bold">Payment Method</th>
                <th className="p-4 font-bold">Transaction ID</th>
                <th className="p-4 font-bold">Amount Paid</th>
                <th className="p-4 font-bold text-center">Invoice PDF</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {safeInvoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono font-bold text-slate-900">
                    {inv.invoiceNo}
                  </td>
                  <td className="p-4 font-bold text-slate-900 max-w-xs">
                    {inv.courseName}
                  </td>
                  <td className="p-4 text-slate-600">
                    {inv.date}
                  </td>
                  <td className="p-4">
                    <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] ${
                      inv.paymentMethod === 'bKash'
                        ? 'bg-pink-100 text-pink-800'
                        : inv.paymentMethod === 'Nagad'
                        ? 'bg-orange-100 text-orange-800'
                        : inv.paymentMethod === 'SSLCommerz'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {inv.paymentMethod}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-[11px] text-slate-500">
                    {inv.transactionId}
                  </td>
                  <td className="p-4 font-extrabold text-slate-900 font-display">
                    ৳{inv.amount.toLocaleString()} BDT
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => setActiveInvoiceModal(inv)}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold rounded-lg transition-all inline-flex items-center gap-1 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invoice PDF Preview Modal */}
      {activeInvoiceModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-black uppercase text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded">
                Official Academy Tax Invoice
              </span>
              <button 
                onClick={() => setActiveInvoiceModal(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Printable Invoice Paper Frame */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-black text-slate-900 font-display">
                    E-LAWYERS ACADEMY BANGLADESH
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Registered under NBR BIN: 002918231-0101 • Dhaka, Bangladesh
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-slate-900 block">{activeInvoiceModal.invoiceNo}</span>
                  <span className="text-slate-500 text-[11px]">Date: {activeInvoiceModal.date}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Billed To:</span>
                  <p className="font-bold text-slate-800">Advocate Md. Rahman</p>
                  <p className="text-slate-500">Supreme Court Bar Building, Dhaka</p>
                  <p className="text-slate-500">md.rahman.advocate@gmail.com</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Payment Details:</span>
                  <p className="font-bold text-slate-800">{activeInvoiceModal.paymentMethod}</p>
                  <p className="font-mono text-[11px] text-slate-600">Trx: {activeInvoiceModal.transactionId}</p>
                  <span className="text-emerald-700 font-extrabold bg-emerald-100 px-2 py-0.5 rounded inline-block mt-1">
                    STATUS: PAID ✓
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200">
                <table className="w-full text-left">
                  <thead className="text-[10px] uppercase text-slate-400 border-b border-slate-200">
                    <tr>
                      <th className="py-2">Item Description</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 font-bold text-slate-800">
                        {activeInvoiceModal.courseName} (Lifetime Professional License)
                      </td>
                      <td className="py-2 text-right font-bold text-slate-900">
                        ৳{activeInvoiceModal.amount.toLocaleString()} BDT
                      </td>
                    </tr>
                    <tr className="border-t border-slate-200 font-black text-sm">
                      <td className="py-2 text-slate-900">Total Paid (Inclusive of applicable VAT):</td>
                      <td className="py-2 text-right text-indigo-700">
                        ৳{activeInvoiceModal.amount.toLocaleString()} BDT
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Invoice</span>
              </button>
              <button
                onClick={() => {
                  alert(`Downloading PDF invoice: ${activeInvoiceModal.invoiceNo}.pdf`);
                  setActiveInvoiceModal(null);
                }}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

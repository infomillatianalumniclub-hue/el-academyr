import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Users, 
  CreditCard, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Award,
  DollarSign
} from 'lucide-react';
import { Course, PaymentTransaction } from '../../types';

interface AdminOverviewProps {
  courses?: Course[];
  transactions?: PaymentTransaction[];
  onToggleCourseStatus: (courseId: string) => void;
}

export const AdminOverview: React.FC<AdminOverviewProps> = ({
  courses = [],
  transactions = [],
  onToggleCourseStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'payments'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const safeCourses = courses || [];
  const safeTransactions = transactions || [];
  const totalAcademyRevenue = safeTransactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="space-y-8">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full border border-purple-500/30">
            Academy Super Admin
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display mt-2">
            E-Lawyers Central Operations 🛠️
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Complete academy management, course approvals, bKash/Nagad transaction audits, & certificate verification.
          </p>
        </div>
      </div>

      {/* Admin Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase">Total Gross Sales</span>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">
            ৳{totalAcademyRevenue.toLocaleString()}
          </div>
          <p className="text-[11px] text-emerald-600 font-semibold mt-1">bKash + Nagad + SSLCommerz</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase">Enrolled Students</span>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">12,500</div>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">Active Advocates & Trainees</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase">Published Courses</span>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">
            {courses.filter((c) => c.status === 'Published').length} / {courses.length}
          </div>
          <p className="text-[11px] text-purple-600 font-semibold mt-1">NBR & Bar Council Approved</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <span className="text-xs font-bold text-slate-500 uppercase">Issued Certificates</span>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">8,920</div>
          <p className="text-[11px] text-amber-600 font-semibold mt-1">QR Authenticated</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'overview' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Course Approvals & Status
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'payments' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          Payment Transactions Ledger ({safeTransactions.length})
        </button>
      </div>

      {/* Course Approval Table */}
      {activeTab === 'overview' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 font-display">Course Approval & Pricing Controls</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Course</th>
                  <th className="py-3 px-4">Instructor</th>
                  <th className="py-3 px-4">Price / Offer</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {safeCourses.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-bold text-slate-900 max-w-xs truncate">{c.title}</td>
                    <td className="py-3 px-4 text-slate-700">{c.instructor.name}</td>
                    <td className="py-3 px-4 font-bold text-slate-900">৳{c.offerPrice.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${
                        c.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => onToggleCourseStatus(c.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          c.status === 'Published'
                            ? 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                            : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        }`}
                      >
                        {c.status === 'Published' ? 'Unpublish Course' : 'Approve & Publish'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payment Ledger Table */}
      {activeTab === 'payments' && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 font-display">Local Payment Gateway Transaction Audit</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Txn ID</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4">Course Enrolled</th>
                  <th className="py-3 px-4">Gateway</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {safeTransactions.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/80">
                    <td className="py-3 px-4 font-mono font-bold text-slate-800">{t.transactionId}</td>
                    <td className="py-3 px-4 text-slate-900 font-medium">{t.studentName}</td>
                    <td className="py-3 px-4 text-slate-700 max-w-xs truncate">{t.courseTitle}</td>
                    <td className="py-3 px-4 font-bold text-amber-700">{t.paymentMethod}</td>
                    <td className="py-3 px-4 font-extrabold text-slate-900">৳{t.amount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded-full">
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

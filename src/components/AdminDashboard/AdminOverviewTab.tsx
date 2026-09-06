import React from 'react';
import {
  Users,
  BookOpen,
  DollarSign,
  Award,
  Radio,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  FileCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  mockAdminStats,
  mockAdminCoursesList,
  mockAdminTeachersList,
  mockAdminRefunds
} from '../../data/teacherAdminMockData';
import { AdminTab } from './AdminDashboardLayout';

interface AdminOverviewTabProps {
  onNavigateTab: (tab: AdminTab) => void;
}

export const AdminOverviewTab: React.FC<AdminOverviewTabProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/20 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-md border border-purple-500/20 uppercase tracking-wider">
                E-Lawyers Academy Central Management
              </span>
              <span className="text-xs text-slate-400">• Supreme Court & NBR Accredited</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-2">
              Executive Academy Operations Control
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Real-time monitoring of 25,000+ legal practitioners, 120 senior advocates & FCA faculty members, automated bKash/Nagad reconciliations, and academic certificates.
            </p>
          </div>

          {/* Quick Stats Highlights */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Active Today</div>
              <div className="text-lg font-black text-emerald-400 font-mono mt-0.5">3,890</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-bold">Monthly Growth</div>
              <div className="text-lg font-black text-purple-300 font-mono mt-0.5">+24.8%</div>
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Actionable Alerts Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pending Courses Alert */}
        <div
          onClick={() => onNavigateTab('courses')}
          className="p-4 rounded-2xl bg-slate-900 border border-amber-500/30 hover:border-amber-400 transition cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                {mockAdminStats.pendingCourseReviewsCount} Courses Pending Review
              </div>
              <div className="text-[11px] text-slate-400">Quality check & syllabus approval</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
        </div>

        {/* Pending Teacher Verification */}
        <div
          onClick={() => onNavigateTab('users')}
          className="p-4 rounded-2xl bg-slate-900 border border-purple-500/30 hover:border-purple-400 transition cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white group-hover:text-purple-300 transition">
                {mockAdminStats.pendingTeacherApprovalsCount} Faculty Applications
              </div>
              <div className="text-[11px] text-slate-400">Bar Sanad & credentials check</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
        </div>

        {/* Pending Refunds */}
        <div
          onClick={() => onNavigateTab('finance')}
          className="p-4 rounded-2xl bg-slate-900 border border-rose-500/30 hover:border-rose-400 transition cursor-pointer flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white group-hover:text-rose-300 transition">
                {mockAdminStats.pendingRefundRequestsCount} Refund Requests
              </div>
              <div className="text-[11px] text-slate-400">Dispute resolution queue</div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition" />
        </div>
      </div>

      {/* 5 Main Admin KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Students */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Students</span>
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              25,000+
            </div>
            <div className="text-xs text-emerald-400 font-bold mt-1 flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1" /> +24.8% Monthly
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Across 64 Bangladesh districts</div>
          </div>
          <button
            onClick={() => onNavigateTab('users')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-blue-400 hover:text-blue-300 flex items-center justify-between"
          >
            <span>Manage Users</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Total Faculty */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Faculty</span>
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              120 Senior
            </div>
            <div className="text-xs text-amber-400 font-bold mt-1">
              5 Awaiting Sanad Audit
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Supreme Court & FCA</div>
          </div>
          <button
            onClick={() => onNavigateTab('users')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-purple-400 hover:text-purple-300 flex items-center justify-between"
          >
            <span>Verify Faculty</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Total Courses */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Courses</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              350
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1">
              320 Published • 8 In Review
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Law, Tax, VAT, Corporate</div>
          </div>
          <button
            onClick={() => onNavigateTab('courses')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
          >
            <span>Audit Courses</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Total Platform Revenue */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Platform Gross</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display mt-2">
              ৳5.00 Cr
            </div>
            <div className="text-xs text-emerald-400 font-bold mt-1">
              Monthly: ৳42,50,000
            </div>
            <div className="text-[11px] text-slate-400 mt-1">bKash, Nagad, DBBL, Cards</div>
          </div>
          <button
            onClick={() => onNavigateTab('finance')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center justify-between"
          >
            <span>Financial Ledger</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Certificates Issued */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Certificates</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              2,400+
            </div>
            <div className="text-xs text-emerald-400 font-bold mt-1">
              100% Cryptographic QR
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Instant employer verification</div>
          </div>
          <button
            onClick={() => onNavigateTab('certificates')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
          >
            <span>Verify Registry</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visualizer Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Revenue Velocity */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Monthly Academy Gross Revenue (BDT)</span>
              </h3>
              <p className="text-xs text-slate-400">Total volume across student enrollments and corporate trainings</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold">2026</span>
          </div>

          <div className="h-60 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { month: 'Jan', amount: '৳18L', height: 32 },
              { month: 'Feb', amount: '৳22L', height: 42 },
              { month: 'Mar', amount: '৳27L', height: 52 },
              { month: 'Apr', amount: '৳31L', height: 60 },
              { month: 'May', amount: '৳35L', height: 70 },
              { month: 'Jun', amount: '৳38L', height: 80 },
              { month: 'Jul', amount: '৳40L', height: 88 },
              { month: 'Aug', amount: '৳42.5L', height: 100 }
            ].map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-emerald-400 transition">
                  {item.amount}
                </span>
                <div
                  style={{ height: `${item.height}%` }}
                  className="w-full bg-emerald-500/30 group-hover:bg-emerald-400 rounded-t-xl transition-all duration-300"
                />
                <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Student Enrollment Surge */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>New Student Registrations Trend</span>
              </h3>
              <p className="text-xs text-slate-400">Law graduates, tax apprentices & corporate accountants</p>
            </div>
            <span className="text-xs font-mono text-purple-400 font-bold">+24.8% MoM</span>
          </div>

          <div className="h-60 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { month: 'Jan', count: '1,420', height: 35 },
              { month: 'Feb', count: '1,890', height: 48 },
              { month: 'Mar', count: '2,140', height: 56 },
              { month: 'Apr', count: '2,450', height: 65 },
              { month: 'May', count: '2,780', height: 75 },
              { month: 'Jun', count: '3,100', height: 84 },
              { month: 'Jul', count: '3,450', height: 92 },
              { month: 'Aug', count: '3,890', height: 100 }
            ].map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-purple-400 transition">
                  {item.count}
                </span>
                <div
                  style={{ height: `${item.height}%` }}
                  className="w-full bg-purple-600/30 group-hover:bg-purple-500 rounded-t-xl transition-all duration-300"
                />
                <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Columns: Recent Course Submissions & Pending Faculty Verifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Courses Queue */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Pending Course Submissions</span>
            </h3>
            <button
              onClick={() => onNavigateTab('courses')}
              className="text-xs font-bold text-purple-400 hover:text-purple-300"
            >
              View All ({mockAdminCoursesList.filter((c) => c.status === 'Pending Review').length})
            </button>
          </div>

          <div className="space-y-3">
            {mockAdminCoursesList.slice(0, 2).map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3"
              >
                <div className="space-y-1 min-w-0">
                  <div className="text-xs font-bold text-white truncate">{course.title}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <span>Instructor: <strong className="text-slate-200">{course.instructorName}</strong></span>
                    <span>•</span>
                    <span className="text-amber-400">Score: {course.qualityScore}%</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    ৳{course.price.toLocaleString()} • {course.videoDurationHours} Hrs HD • {course.moduleCount} Modules
                  </div>
                </div>

                <button
                  onClick={() => onNavigateTab('courses')}
                  className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold shrink-0"
                >
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Faculty Applications */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Faculty Applications Awaiting Sanad Audit</span>
            </h3>
            <button
              onClick={() => onNavigateTab('users')}
              className="text-xs font-bold text-purple-400 hover:text-purple-300"
            >
              All Applicants ({mockAdminTeachersList.filter((t) => t.status === 'Pending').length})
            </button>
          </div>

          <div className="space-y-3">
            {mockAdminTeachersList.filter((t) => t.status === 'Pending').map((teacher) => (
              <div
                key={teacher.id}
                className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={teacher.avatarUrl}
                    alt={teacher.name}
                    className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-700 shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">{teacher.name}</div>
                    <div className="text-[11px] text-slate-400 truncate">{teacher.designation}</div>
                    <div className="text-[10px] text-amber-400 font-mono mt-0.5">
                      {teacher.barSanadNumber} • {teacher.experienceYears} Yrs Exp
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onNavigateTab('users')}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold shrink-0 border border-slate-700"
                >
                  Audit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

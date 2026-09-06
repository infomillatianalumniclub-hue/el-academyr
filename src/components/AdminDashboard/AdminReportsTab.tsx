import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Download,
  Users,
  Award,
  Globe,
  BookOpen,
  PieChart,
  Calendar
} from 'lucide-react';

export const AdminReportsTab: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <span>Academy Institutional Analytics & Board Reporting</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Executive insights on student cohort progression, regional participation, and curriculum ROI.
          </p>
        </div>

        <button
          onClick={() => alert('Generating full Q3 Executive Academy Board Report PDF...')}
          className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-600/20 flex items-center gap-2 transition"
        >
          <Download className="w-4 h-4" />
          <span>Download Q3 Board Report</span>
        </button>
      </div>

      {/* 4 Health Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Avg Course Completion</div>
          <div className="text-3xl font-black text-white font-display mt-1">78.4%</div>
          <div className="text-[11px] text-emerald-400 mt-1">Industry benchmark: 22% (Coursera)</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Live Class Attendance</div>
          <div className="text-3xl font-black text-amber-400 font-display mt-1">86.2%</div>
          <div className="text-[11px] text-slate-400 mt-1">Real-time Zoom participation</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Bar Exam Pass Rate</div>
          <div className="text-3xl font-black text-emerald-400 font-display mt-1">84.1%</div>
          <div className="text-[11px] text-slate-400 mt-1">Students passing Bar Council MCQ</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Faculty Retention</div>
          <div className="text-3xl font-black text-purple-400 font-display mt-1">98.5%</div>
          <div className="text-[11px] text-slate-400 mt-1">120 Supreme Court instructors</div>
        </div>
      </div>

      {/* Top Performing Courses Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Top Performing Academy Curriculum
          </span>
          <span className="text-xs text-purple-400 font-mono font-bold">2026 Academic Year</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="p-4 font-semibold">Course Title</th>
                <th className="p-4 font-semibold">Lead Instructor</th>
                <th className="p-4 font-semibold">Total Students</th>
                <th className="p-4 font-semibold">Completion %</th>
                <th className="p-4 font-semibold text-right">Gross Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {[
                {
                  title: 'Comprehensive Income Tax Act 2023 Masterclass',
                  instructor: 'Advocate Md. Ruhul Amin',
                  students: '5,420',
                  completion: '92%',
                  revenue: '৳2,71,00,000'
                },
                {
                  title: 'VAT & Supplementary Duty Act 2012 & Mushak 9.1',
                  instructor: 'Advocate Md. Ruhul Amin',
                  students: '3,840',
                  completion: '88%',
                  revenue: '৳1,61,28,000'
                },
                {
                  title: 'Bangladesh Bar Council Advocate Enrolment Prep',
                  instructor: 'Advocate Shireen Huq',
                  students: '2,950',
                  completion: '85%',
                  revenue: '৳1,91,75,000'
                },
                {
                  title: 'RJSC Corporate Compliance & Secretarial Practice',
                  instructor: 'Khandakar M. Anwarul, FCA',
                  students: '1,280',
                  completion: '81%',
                  revenue: '৳57,60,000'
                }
              ].map((c, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-white">{c.title}</td>
                  <td className="p-4 text-slate-300">{c.instructor}</td>
                  <td className="p-4 font-mono text-purple-300 font-bold">{c.students}</td>
                  <td className="p-4">
                    <span className="text-emerald-400 font-bold font-mono">{c.completion}</span>
                  </td>
                  <td className="p-4 font-mono font-bold text-amber-400 text-right">{c.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regional Demographics */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Globe className="w-5 h-5 text-blue-400" />
          <span>Regional Practitioner Demographics (64 Districts)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-mono">54%</div>
            <div className="text-xs text-slate-400 mt-1 font-semibold">Dhaka Division</div>
            <div className="text-[10px] text-slate-500">Dhaka Bar & Supreme Court</div>
          </div>

          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-mono">22%</div>
            <div className="text-xs text-slate-400 mt-1 font-semibold">Chittagong Division</div>
            <div className="text-[10px] text-slate-500">Port Custom House & Tax Bar</div>
          </div>

          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-mono">11%</div>
            <div className="text-xs text-slate-400 mt-1 font-semibold">Sylhet Division</div>
            <div className="text-[10px] text-slate-500">Expatriate & Land Law Bar</div>
          </div>

          <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 text-center">
            <div className="text-2xl font-black text-white font-mono">13%</div>
            <div className="text-xs text-slate-400 mt-1 font-semibold">Rajshahi & Khulna</div>
            <div className="text-[10px] text-slate-500">District Judge Courts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

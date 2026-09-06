import React from 'react';
import {
  BarChart3,
  TrendingUp,
  Clock,
  Award,
  Users,
  DollarSign,
  Download,
  Calendar
} from 'lucide-react';

export const TeacherAnalyticsTab: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-purple-400" />
            <span>Instructor Performance & Learning Analytics</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Analyze student engagement velocity, video watch retention, and monthly revenue trajectory.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting comprehensive monthly analytics PDF report...')}
          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition"
        >
          <Download className="w-4 h-4 text-purple-400" />
          <span>Export Analytics PDF</span>
        </button>
      </div>

      {/* 4 Performance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Watch Hours</div>
          <div className="text-2xl font-black text-white font-display mt-1">18,450 Hrs</div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +24% from last month
          </div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Avg Video Retention</div>
          <div className="text-2xl font-black text-white font-display mt-1">82.4%</div>
          <div className="text-[11px] text-slate-400 mt-1">Exceptional course stickiness</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Quiz Pass Rate</div>
          <div className="text-2xl font-black text-amber-400 font-display mt-1">78.9%</div>
          <div className="text-[11px] text-slate-400 mt-1">Passing standard: 70%+</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Monthly Conversion</div>
          <div className="text-2xl font-black text-purple-400 font-display mt-1">14.6%</div>
          <div className="text-[11px] text-emerald-400 mt-1">Visitor to student enroll rate</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Enrollment Trajectory */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Monthly Student Enrollments</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">2026 (Jan - Aug)</span>
          </div>

          <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { month: 'Jan', count: 210, height: 40 },
              { month: 'Feb', count: 280, height: 50 },
              { month: 'Mar', count: 320, height: 58 },
              { month: 'Apr', count: 350, height: 64 },
              { month: 'May', count: 390, height: 72 },
              { month: 'Jun', count: 410, height: 78 },
              { month: 'Jul', count: 440, height: 85 },
              { month: 'Aug', count: 480, height: 100 }
            ].map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-amber-400 transition">
                  {item.count}
                </span>
                <div
                  style={{ height: `${item.height}%` }}
                  className="w-full bg-blue-600/30 group-hover:bg-blue-500 rounded-t-lg transition-all duration-300"
                />
                <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Velocity Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Earnings Growth (BDT)</span>
            </h3>
            <span className="text-xs font-mono text-emerald-400 font-bold">+28% YoY</span>
          </div>

          <div className="h-56 flex items-end justify-between gap-3 pt-6 px-2">
            {[
              { month: 'Jan', amount: '৳45k', height: 35 },
              { month: 'Feb', amount: '৳60k', height: 48 },
              { month: 'Mar', amount: '৳72k', height: 55 },
              { month: 'Apr', amount: '৳85k', height: 65 },
              { month: 'May', amount: '৳95k', height: 72 },
              { month: 'Jun', amount: '৳1.1L', height: 82 },
              { month: 'Jul', amount: '৳1.25L', height: 90 },
              { month: 'Aug', amount: '৳1.45L', height: 100 }
            ].map((item) => (
              <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-emerald-400 transition">
                  {item.amount}
                </span>
                <div
                  style={{ height: `${item.height}%` }}
                  className="w-full bg-emerald-500/30 group-hover:bg-emerald-400 rounded-t-lg transition-all duration-300"
                />
                <span className="text-[10px] font-semibold text-slate-400">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

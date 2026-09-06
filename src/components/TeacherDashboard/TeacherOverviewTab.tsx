import React from 'react';
import {
  Users,
  DollarSign,
  BookOpen,
  Calendar,
  Star,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  PlusCircle,
  Radio,
  FileCheck,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  mockTeacherProfile,
  mockTeacherCourses,
  mockTeacherLiveClasses,
  mockTeacherReviews
} from '../../data/teacherAdminMockData';
import { TeacherTab } from './TeacherDashboardLayout';

interface TeacherOverviewTabProps {
  onNavigateTab: (tab: TeacherTab) => void;
  onOpenAIQuizGen: () => void;
  onCreateCourseOpen: () => void;
}

export const TeacherOverviewTab: React.FC<TeacherOverviewTabProps> = ({
  onNavigateTab,
  onOpenAIQuizGen,
  onCreateCourseOpen
}) => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="relative">
              <img
                src={mockTeacherProfile.photoUrl}
                alt={mockTeacherProfile.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-amber-400/30 shadow-xl"
              />
              <span className="absolute -bottom-1.5 -right-1.5 px-2 py-0.5 bg-amber-500 text-slate-950 font-black text-[10px] rounded-full uppercase tracking-wider shadow">
                Senior
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                  Welcome back,
                </span>
                <span className="text-xs text-slate-400">• Supreme Court Chamber</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                "Mr. Ahmed" <span className="text-slate-400 text-base font-normal sm:inline block">({mockTeacherProfile.name})</span>
              </h1>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-300 mt-2">
                <span className="font-semibold text-amber-300">Expertise:</span>
                {(mockTeacherProfile.expertise || []).map((exp, idx) => (
                  <span key={idx} className="bg-slate-800/80 px-2 py-0.5 rounded text-[11px] text-slate-200 border border-slate-700">
                    {exp}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-2.5">
                <span>Experience: <strong className="text-white">{mockTeacherProfile.totalExperienceYears}+ Years</strong></span>
                <span>•</span>
                <span>Published Courses: <strong className="text-white">{mockTeacherProfile.publishedCoursesCount} Courses</strong></span>
                <span>•</span>
                <span>Sanad: <strong className="text-amber-400 font-mono">{mockTeacherProfile.barSanadNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Quick CTAs */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
            <button
              onClick={onOpenAIQuizGen}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 text-xs font-bold rounded-xl border border-slate-700 flex items-center gap-2 transition active:scale-95 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Quiz Generator</span>
            </button>
            <button
              onClick={onCreateCourseOpen}
              className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition active:scale-95"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Course</span>
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 5 Main Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Students */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Students</span>
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              5,420
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs">
              <span className="text-emerald-400 font-bold flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +18.4%
              </span>
              <span className="text-slate-400 text-[11px]">growth</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              <span className="text-white font-semibold">+480</span> new this month
            </div>
          </div>

          {/* SVG Mini Enrollment Sparkline */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="text-[10px] text-slate-400 mb-1">Monthly Enrollment Trend</div>
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 100 30">
              <path
                d="M0 24 Q 20 20, 35 15 T 70 8 T 100 4"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="100" cy="4" r="3" fill="#38bdf8" />
            </svg>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Revenue</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              ৳8,50,000
            </div>
            <div className="text-[11px] text-emerald-400 font-bold mt-1">
              Monthly: ৳1,45,000
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Paid: <strong className="text-white">৳8,15,000</strong>
            </div>
            <div className="text-[11px] text-amber-400 mt-0.5">
              Pending: <strong>৳35,000</strong>
            </div>
          </div>

          {/* Mini Revenue Bar Graph */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex items-end justify-between gap-1 h-8">
              {[40, 55, 65, 50, 75, 90, 100].map((val, idx) => (
                <div
                  key={idx}
                  style={{ height: `${val}%` }}
                  className="w-full bg-emerald-500/30 hover:bg-emerald-400 rounded-sm transition"
                  title={`Month ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Courses</span>
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              15 Courses
            </div>
            <div className="space-y-1 mt-2 text-[11px]">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Published
                </span>
                <strong className="text-white">12</strong>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Under Review
                </span>
                <strong className="text-white">1</strong>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Drafts
                </span>
                <strong className="text-white">2</strong>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('courses')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-purple-400 hover:text-purple-300 flex items-center justify-between"
          >
            <span>Manage Courses</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Upcoming Classes</span>
              <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
                <Radio className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display mt-2">
              8 Sessions
            </div>
            <div className="mt-2 p-2 bg-slate-800/60 rounded-xl border border-slate-700/50">
              <div className="text-[10px] text-rose-400 font-bold uppercase">Next Class Tonight</div>
              <div className="text-xs font-bold text-white truncate mt-0.5">IT-11GA Return Workshop</div>
              <div className="text-[10px] text-slate-300 mt-0.5">08:00 PM • 185 Registered</div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('live')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-rose-400 hover:text-rose-300 flex items-center justify-between"
          >
            <span>Launch Live Room</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Student Reviews */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-sm flex flex-col justify-between hover:border-slate-700 transition">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Student Reviews</span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
            </div>
            <div className="flex items-baseline gap-1.5 mt-2">
              <span className="text-2xl sm:text-3xl font-black text-white font-display">4.8</span>
              <span className="text-xs text-slate-400">/ 5.0</span>
            </div>
            <div className="text-[11px] text-slate-300 mt-1">
              Based on <strong className="text-white">420</strong> student reviews
            </div>

            {/* Rating Bar Distribution */}
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span>5★</span>
                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '84%' }} />
                </div>
                <span>84%</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                <span>4★</span>
                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '13%' }} />
                </div>
                <span>13%</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('reviews')}
            className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-bold text-amber-400 hover:text-amber-300 flex items-center justify-between"
          >
            <span>View All Feedback</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Two-Column Middle Section: Upcoming Live Schedule & Quick Course Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Live Class Schedule & Recent Student Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Live Sessions Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Scheduled Live Teaching Sessions</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Zoom API and Google Meet masterclasses with live attendance sync
                </p>
              </div>
              <button
                onClick={() => onNavigateTab('live')}
                className="text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                Schedule Class +
              </button>
            </div>

            <div className="space-y-3">
              {(mockTeacherLiveClasses || []).slice(0, 3).map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-slate-600 transition"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                        {session.courseName.split(' ')[0]} {session.courseName.split(' ')[1]}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> {session.date} • {session.time}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">{session.topic}</div>
                    <div className="text-xs text-slate-400">
                      Platform: <strong className="text-slate-200">{session.platform}</strong> • Students Enrolled: <strong className="text-amber-300">{session.studentCount}</strong>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onNavigateTab('live')}
                      className="px-3.5 py-2 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 transition"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Start Class</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performing Courses */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>Published Courses Overview</span>
              </h2>
              <button
                onClick={() => onNavigateTab('courses')}
                className="text-xs font-bold text-purple-400 hover:text-purple-300"
              >
                View All Courses ({mockTeacherCourses.length})
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                    <th className="pb-3 font-semibold">Course Title</th>
                    <th className="pb-3 font-semibold">Enrolled</th>
                    <th className="pb-3 font-semibold">Rating</th>
                    <th className="pb-3 font-semibold">Revenue</th>
                    <th className="pb-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {(mockTeacherCourses || []).slice(0, 4).map((c) => (
                    <tr key={c.id} className="hover:bg-slate-800/40 transition">
                      <td className="py-3 pr-3 font-bold text-white flex items-center gap-3">
                        <img
                          src={c.thumbnail}
                          alt={c.title}
                          className="w-10 h-7 object-cover rounded-md ring-1 ring-slate-700"
                        />
                        <span className="truncate max-w-[220px]">{c.title}</span>
                      </td>
                      <td className="py-3 text-slate-300 font-mono">{c.studentsCount.toLocaleString()}</td>
                      <td className="py-3 text-amber-400 font-bold flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{c.rating}</span>
                      </td>
                      <td className="py-3 text-emerald-400 font-mono font-bold">৳{c.totalRevenue.toLocaleString()}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          c.status === 'Published'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : c.status === 'Under Review'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {c.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Recent Student Feedback & Quick Assignment Queue */}
        <div className="space-y-6">
          {/* Pending Assignment Submissions */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-blue-400" />
                <span>Submissions to Grade</span>
              </h3>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">
                4 Pending
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-xs font-bold text-white">IT-11GA Self-Assessment Case</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Submitted by Advocate Farhana Akter</div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700/50">
                  <span className="text-[10px] text-slate-400">Due: 08 Sep</span>
                  <button
                    onClick={() => onNavigateTab('assignments')}
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300"
                  >
                    Grade Now →
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-xs font-bold text-white">Mushak 9.1 Sub-form K Rebate</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Submitted by Tanvir Hossain, ACA</div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-700/50">
                  <span className="text-[10px] text-slate-400">Due: 10 Sep</span>
                  <button
                    onClick={() => onNavigateTab('assignments')}
                    className="text-[11px] font-bold text-amber-400 hover:text-amber-300"
                  >
                    Grade Now →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Student Feedback */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Recent Reviews</span>
              </h3>
              <button
                onClick={() => onNavigateTab('reviews')}
                className="text-[11px] font-bold text-amber-400 hover:text-amber-300"
              >
                All (420)
              </button>
            </div>

            <div className="space-y-3.5">
              {(mockTeacherReviews || []).slice(0, 2).map((rev) => (
                <div key={rev.id} className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={rev.studentAvatar}
                        alt={rev.studentName}
                        className="w-7 h-7 rounded-full object-cover ring-1 ring-amber-400/40"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{rev.studentName}</div>
                        <div className="text-[10px] text-slate-400">{rev.studentTitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs font-bold">
                      ★ {rev.rating}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 italic">
                    "{rev.comment}"
                  </p>
                  <div className="text-[10px] text-slate-400 flex items-center justify-between">
                    <span>{rev.courseTitle.split(' ')[0]} {rev.courseTitle.split(' ')[1]}</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { 
  TrendingUp, 
  Clock, 
  Award, 
  CheckCircle2, 
  Zap, 
  Scale, 
  ShieldCheck, 
  Trophy, 
  Calendar, 
  BarChart3, 
  BookOpen,
  Flame
} from 'lucide-react';
import { mockWeeklyLearningAnalytics } from '../../data/studentMockData';

export const StudentAnalytics: React.FC = () => {
  const data = mockWeeklyLearningAnalytics;

  return (
    <div className="space-y-8" id="student-analytics-page">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Performance Metrics & Study Velocity
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Personal Learning Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Data visualization of your weekly study hours, quiz mastery rates, and statutory milestone badges.
          </p>
        </div>

        {/* Streak Counter */}
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 fill-slate-950" />
          </div>
          <div>
            <div className="text-lg font-black text-slate-900 font-display">{data.streakDays} Day Streak!</div>
            <div className="text-xs text-amber-800 font-medium">Daily consistency multiplier active</div>
          </div>
        </div>
      </div>

      {/* 4 Key Performance Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Learning Time</span>
          <div className="text-3xl font-black text-slate-900 font-display flex items-baseline gap-1">
            {data.totalHoursCompleted} <span className="text-sm font-semibold text-slate-500">Hours Completed</span>
          </div>
          <p className="text-xs text-emerald-600 font-bold mt-1">Top 5% study velocity in the Academy</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Course Completion</span>
          <div className="text-3xl font-black text-slate-900 font-display flex items-baseline gap-1">
            {data.overallCompletionPercent}% <span className="text-sm font-semibold text-slate-500">Overall</span>
          </div>
          <p className="text-xs text-indigo-600 font-bold mt-1">4 certified courses completed</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Quiz Average Score</span>
          <div className="text-3xl font-black text-slate-900 font-display flex items-baseline gap-1">
            {data.quizAverageScore}% <span className="text-sm font-semibold text-slate-500">Average</span>
          </div>
          <p className="text-xs text-amber-600 font-bold mt-1">Graduated with Distinction tier</p>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Live Class Attendance</span>
          <div className="text-3xl font-black text-slate-900 font-display flex items-baseline gap-1">
            {data.attendanceRate}% <span className="text-sm font-semibold text-slate-500">Attendance</span>
          </div>
          <p className="text-xs text-blue-600 font-bold mt-1">18 live courtroom simulations</p>
        </div>
      </div>

      {/* Weekly Hours Graph View */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="text-lg font-black text-slate-900 font-display">
              Weekly Study Hours (Course Progress Graph)
            </h3>
            <p className="text-xs text-slate-500">Recorded hours across interactive video lectures and live workshops</p>
          </div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Total: 26.5 Hours This Week
          </span>
        </div>

        {/* CSS Bar Chart */}
        <div className="space-y-2 pt-4">
          <div className="h-48 flex items-end gap-3 sm:gap-6 pt-6 pb-2 px-2 border-b border-slate-200">
            {(data.weeklyActivity || []).map((item, idx) => {
              const maxHours = 7;
              const heightPercent = Math.min(100, Math.round((item.hours / maxHours) * 100));

              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <div className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {item.hours}h
                  </div>
                  <div 
                    className="w-full max-w-[48px] bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-xl transition-all duration-500 group-hover:from-amber-500 group-hover:to-amber-400"
                    style={{ height: `${heightPercent}%` }}
                  ></div>
                  <span className="text-xs font-bold text-slate-700 mt-1">{item.day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subject Distribution & Learning Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Subject Distribution */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-extrabold text-slate-900 font-display">
            Subject Distribution by Study Time
          </h3>
          <p className="text-xs text-slate-500">Proportional time invested across statutory training tracks</p>

          <div className="space-y-3 pt-2">
            {(data.subjectDistribution || []).map((sub, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-800">{sub.subject}</span>
                  <span className="text-slate-600">{sub.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${sub.color} rounded-full transition-all duration-500`}
                    style={{ width: `${sub.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Achievements & Badges */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-slate-900 font-display">
              Achievement Badges Earned
            </h3>
            <span className="text-xs font-bold text-amber-600">5 Badges Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(data.earnedBadges || []).map((badge, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900">{badge.name}</h4>
                  <p className="text-[10px] text-slate-500 leading-snug mt-0.5">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

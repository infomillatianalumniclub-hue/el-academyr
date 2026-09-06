import React from 'react';
import { 
  BookOpen, 
  Video, 
  Award, 
  Calendar, 
  CheckCircle2, 
  PlayCircle, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  GraduationCap, 
  FileText, 
  HelpCircle, 
  Trophy, 
  Medal,
  Scale,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { EnrolledCourse, LiveClassSession, Certificate } from '../../types';

interface StudentDashboardProps {
  studentName: string;
  enrolledCourses?: EnrolledCourse[];
  certificates?: Certificate[];
  liveClasses?: LiveClassSession[];
  onContinueCourse: (courseId: string) => void;
  onOpenLiveClass: (liveClass: LiveClassSession) => void;
  onViewCertificate: (certificate: Certificate) => void;
  onOpenAIAssistant: () => void;
  onOpenAIRoadmap: () => void;
  onSelectTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  studentName = 'Student',
  enrolledCourses = [],
  certificates = [],
  liveClasses = [],
  onContinueCourse,
  onOpenLiveClass,
  onViewCertificate,
  onOpenAIAssistant,
  onOpenAIRoadmap,
  onSelectTab,
}) => {
  const safeEnrolled = enrolledCourses || [];
  const safeCerts = certificates || [];
  const safeLive = liveClasses || [];
  return (
    <div className="space-y-8">
      {/* Welcome Hero Banner */}
      <div className="bg-indigo-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-indigo-500/30 text-indigo-200 text-[10px] font-bold rounded-full uppercase tracking-wider border border-indigo-400/30">
              Active Student Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Welcome back, {studentName} 👋
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
              Track your law and tax learning progress, attend upcoming NBR live masterclasses, and earn QR-verified completion certificates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectTab('student-leaderboard')}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <Trophy className="w-4 h-4 fill-slate-950" />
              <span>Student Leaderboard</span>
            </button>
            <button
              onClick={onOpenAIRoadmap}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-indigo-950 font-extrabold rounded-xl text-xs flex items-center gap-2 shadow-md transition-all"
            >
              <GraduationCap className="w-4 h-4 stroke-[2.5]" />
              <span>Personal AI Roadmap</span>
            </button>
            <button
              onClick={onOpenAIAssistant}
              className="px-4 py-2.5 bg-indigo-800 hover:bg-indigo-700 text-white border border-indigo-600 font-bold rounded-xl text-xs flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span>Ask AI Legal Assistant</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => onSelectTab('student-courses')}
          className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-400 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Enrolled Courses</span>
            <div className="w-9 h-9 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">{enrolledCourses.length}</div>
          <p className="text-[11px] text-indigo-600 font-semibold mt-1">Active Learning Tracks</p>
        </div>

        <div 
          onClick={() => onSelectTab('student-certificates')}
          className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Certificates</span>
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">{certificates.length}</div>
          <p className="text-[11px] text-amber-600 font-semibold mt-1">QR Verified Issued</p>
        </div>

        <div 
          onClick={() => onSelectTab('student-live')}
          className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-blue-400 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Upcoming Classes</span>
            <div className="w-9 h-9 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">{liveClasses.length}</div>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">Live Zoom & Meet Sessions</p>
        </div>

        <div 
          onClick={() => onSelectTab('student-leaderboard')}
          className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Academy Rank</span>
            <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Trophy className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 font-display mt-2">#4 <span className="text-xs font-semibold text-slate-500">/ 4,250</span></div>
          <p className="text-[11px] text-amber-700 font-semibold mt-1">3,450 XP • 91.5% Avg Quiz</p>
        </div>
      </div>

      {/* Main Student Portal Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - My Enrolled Courses */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-slate-900 font-display">Your Enrolled Courses</h2>
            <button
              onClick={() => onSelectTab('student-courses')}
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {safeEnrolled.map((ec) => (
              <div
                key={ec.courseId}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug">
                      {ec.courseTitle}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Last accessed: {ec.lastAccessed}</p>
                  </div>

                  <button
                    onClick={() => onContinueCourse(ec.courseId)}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-sm shrink-0"
                  >
                    <PlayCircle className="w-4 h-4 fill-slate-950/20" />
                    <span>Continue Learning</span>
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-600">Course Progress</span>
                    <span className="text-emerald-600 font-display">{ec.progressPercent}% Complete</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                      style={{ width: `${ec.progressPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Upcoming Live Classes & Certificates Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Live Classes Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Video className="w-4 h-4 text-amber-500" />
                Upcoming Live Masterclasses
              </h3>
            </div>

            <div className="space-y-3">
              {safeLive.map((lc) => (
                <div key={lc.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      {lc.platform}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">{lc.scheduledTime}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{lc.title}</h4>
                  <p className="text-[11px] text-slate-600">{lc.instructorName}</p>

                  <button
                    onClick={() => onOpenLiveClass(lc)}
                    className="w-full py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Join Class</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Student Leaderboard Spotlight Card */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Student Leaderboard</span>
              </h3>
              <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                Rank #4
              </span>
            </div>

            <p className="text-xs text-slate-500">
              Ranked by verified quiz scores and course module completion milestones.
            </p>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 rounded-xl bg-amber-50 border border-amber-200/60 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center">
                    1
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 leading-none flex items-center gap-1">
                      <span>Tanzina Chowdhury</span>
                      <span title="Bar Council Distinction Badge"><Scale className="w-3 h-3 text-amber-700" /></span>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">32 Modules • 98.4%</p>
                  </div>
                </div>
                <span className="font-extrabold text-amber-900 text-xs">4,620 XP</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-black text-[10px] flex items-center justify-center">
                    2
                  </span>
                  <div>
                    <p className="font-bold text-slate-900 leading-none flex items-center gap-1">
                      <span>Sazzadul Karim</span>
                      <span title="Income Tax Scholar Badge"><FileCheck className="w-3 h-3 text-emerald-700" /></span>
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5">29 Modules • 96.2%</p>
                  </div>
                </div>
                <span className="font-extrabold text-slate-700 text-xs">4,180 XP</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-black text-[10px] flex items-center justify-center">
                    4
                  </span>
                  <div>
                    <p className="font-bold text-indigo-950 leading-none flex items-center gap-1">
                      <span>You (Md. Rahman)</span>
                      <span title="VAT Mushak Master Badge"><ShieldCheck className="w-3 h-3 text-indigo-700" /></span>
                    </p>
                    <p className="text-[10px] text-indigo-600 mt-0.5">23 Modules • 91.5%</p>
                  </div>
                </div>
                <span className="font-extrabold text-indigo-600 text-xs">3,450 XP</span>
              </div>
            </div>

            <button
              onClick={() => onSelectTab('student-leaderboard')}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>View Full Leaderboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Certificates Snippet */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              Verified Certificates ({safeCerts.length})
            </h3>
            {safeCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => onViewCertificate(cert)}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer flex items-center justify-between transition-colors"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800">{cert.courseTitle}</p>
                  <p className="text-[10px] text-slate-500">Issued: {cert.issueDate}</p>
                </div>
                <Award className="w-5 h-5 text-amber-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

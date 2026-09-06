import React from 'react';
import { 
  BookOpen, 
  Award, 
  Calendar, 
  PlayCircle, 
  ArrowRight, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle,
  Video, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  User,
  Zap
} from 'lucide-react';
import { EnrolledCourseDetailed } from '../../data/studentMockData';
import { StudentFullProfile, StudentAssignment, StudentQuizExam } from '../../types';

interface StudentDashboardHomeProps {
  profile: StudentFullProfile;
  enrolledCourses?: EnrolledCourseDetailed[];
  assignments?: StudentAssignment[];
  quizzes?: StudentQuizExam[];
  liveClasses?: any[];
  onContinueCourse?: (courseId: string) => void;
  onResumeCourse?: (courseId: string) => void;
  onViewCourseDetails?: (courseId: string) => void;
  onNavigateTab: (tab: string) => void;
  onOpenLiveClass?: (classId: string) => void;
  onJoinLiveClass?: (sessionId: string) => void;
  onStartAssignment?: (asgId: string) => void;
  onStartQuiz?: (quizId: string) => void;
}

export const StudentDashboardHome: React.FC<StudentDashboardHomeProps> = ({
  profile,
  enrolledCourses = [],
  assignments = [],
  quizzes = [],
  liveClasses = [],
  onContinueCourse,
  onResumeCourse,
  onViewCourseDetails = (courseId: string) => (onContinueCourse || onResumeCourse)?.(courseId),
  onNavigateTab,
  onOpenLiveClass,
  onJoinLiveClass,
  onStartAssignment,
  onStartQuiz
}) => {
  const handleContinueCourse = onContinueCourse || onResumeCourse || ((id: string) => onNavigateTab('student-player'));
  const handleLiveClass = onOpenLiveClass || onJoinLiveClass || ((id: string) => onNavigateTab('student-live'));

  const courseList = enrolledCourses || [];
  const assignmentList = assignments || [];
  const quizList = quizzes || [];

  const activeCourses = courseList.filter(c => c.status === 'In Progress');
  const pendingAssignments = assignmentList.filter(a => a.status === 'Pending Submission');
  const availableQuizzes = quizList.filter(q => q.status === 'Available');

  return (
    <div className="space-y-8" id="student-dashboard-home">
      {/* ================= TOP WELCOME & PROFILE HEADER ================= */}
      <div 
        id="student-hero-banner"
        className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Left: Profile Overview */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img 
                src={profile.photoUrl} 
                alt={profile.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-400/80 shadow-xl"
              />
              <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full border-2 border-slate-900 text-white" title="Verified Active Student">
                <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 bg-amber-400/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-amber-400/30">
                  {profile.membershipType}
                </span>
                <span className="text-xs text-slate-400">
                  Member since {profile.enrolledDate}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display text-white">
                Welcome back, {profile.name} 👋
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                {profile.profession} at {profile.organization} • Ready to advance your legal and tax mastery today.
              </p>

              {/* Learning stats quick-bar */}
              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5 text-indigo-300 font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{profile.totalLearningHours} Hours Completed</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-emerald-300 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{profile.completedCoursesCount} Completed Courses</span>
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{profile.certificatesEarnedCount} Certificates Earned</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            <button
              id="btn-quick-continue"
              onClick={() => handleContinueCourse(activeCourses[0]?.courseId || 'course-vat-01')}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
            >
              <PlayCircle className="w-4 h-4 fill-slate-950/20" />
              <span>Resume Last Class</span>
            </button>
            <button
              id="btn-quick-live"
              onClick={() => onNavigateTab('student-live')}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-indigo-800 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl border border-indigo-600/80 flex items-center justify-center gap-2 transition-all"
            >
              <Video className="w-4 h-4 text-amber-400" />
              <span>Live Class (Starts 8 PM)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= 4 SUMMARY STATISTICS CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="student-stats-grid">
        {/* 1. My Courses */}
        <div 
          id="stat-card-courses"
          onClick={() => onNavigateTab('student-courses')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">My Courses</span>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            12 <span className="text-sm font-semibold text-slate-500">Active Courses</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-indigo-600 font-bold">4 In Progress • 6 Completed</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* 2. Learning Progress */}
        <div 
          id="stat-card-progress"
          onClick={() => onNavigateTab('student-analytics')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Learning Progress</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            68% <span className="text-sm font-semibold text-slate-500">Overall Completion</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-emerald-600 font-bold">+12% faster than average</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* 3. Certificates */}
        <div 
          id="stat-card-certificates"
          onClick={() => onNavigateTab('student-certificates')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Certificates</span>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            5 <span className="text-sm font-semibold text-slate-500">Certificates Earned</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-amber-600 font-bold">QR Verified & Authenticated</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* 4. Upcoming Classes */}
        <div 
          id="stat-card-live"
          onClick={() => onNavigateTab('student-live')}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Upcoming Classes</span>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            3 <span className="text-sm font-semibold text-slate-500">Live Classes Scheduled</span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-blue-600 font-bold">Next: Tomorrow at 8 PM</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* ================= ACTIVE COURSE OVERVIEW ("CONTINUE LEARNING") ================= */}
      <div className="space-y-4" id="continue-learning-section">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">Continue Learning</h2>
            <p className="text-xs text-slate-500 mt-0.5">Resume where you left off in your professional curriculum</p>
          </div>
          <button
            onClick={() => onNavigateTab('student-courses')}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
          >
            <span>View All Enrolled Courses</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCourses.slice(0, 2).map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              {/* Top Banner with Image & Category */}
              <div className="relative h-44 bg-slate-900 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.courseTitle}
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase tracking-wider rounded-lg border border-amber-400/30">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-1 bg-indigo-900/80 backdrop-blur-md text-indigo-200 text-[10px] font-bold rounded-lg border border-indigo-500/30">
                    {course.courseDuration}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-lg font-black text-white leading-tight font-display drop-shadow-sm">
                    {course.courseTitle}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1.5">
                    <span>Instructor: <strong className="text-white font-semibold">{course.instructorName}</strong></span>
                  </p>
                </div>
              </div>

              {/* Card Body with Detailed Metrics */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                {/* Progress Bar & Stats */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-600">Progress: <span className="text-slate-900 font-extrabold">{course.progressPercent}%</span></span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px] font-extrabold">
                      {course.completedLessons} / {course.totalLessons} Lessons
                    </span>
                  </div>

                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${course.progressPercent}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                    <span>{course.remainingLessons} lessons remaining</span>
                    <span>Enrolled: {course.enrollmentDate}</span>
                  </div>
                </div>

                {/* Last Watched Lesson Pill */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-extrabold text-indigo-600">
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Last Watched Lesson</span>
                  </div>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    "{course.lastWatchedLesson}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleContinueCourse(course.courseId)}
                    className="flex-1 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all"
                  >
                    <PlayCircle className="w-4 h-4 fill-slate-950/20" />
                    <span>Continue Learning</span>
                  </button>

                  <button
                    onClick={() => onViewCourseDetails(course.courseId)}
                    className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DUAL COLUMN: LIVE CLASSES & PENDING ASSIGNMENTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Upcoming Live Classes */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Upcoming Live Masterclasses</h3>
                <p className="text-xs text-slate-500">Live interaction with Supreme Court Advocates & NBR Experts</p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('student-live')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              Full Schedule
            </button>
          </div>

          <div className="space-y-3">
            {/* Live Class 1 - Starting soon */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500 text-white animate-pulse">
                  Starting Soon
                </span>
                <span className="text-xs font-bold text-amber-900">15 September 2026 • 8:00 PM</span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">
                Income Tax Practical Session: Universal Self-Assessment
              </h4>
              <p className="text-xs text-slate-600">
                Instructor: <strong>Mr. XYZ (Adv. Md. Ruhul Amin)</strong> • Platform: Zoom API
              </p>
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => handleLiveClass('live-tax-01')}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>Join Live Class</span>
                </button>
              </div>
            </div>

            {/* Live Class 2 - Scheduled */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                  Google Meet API
                </span>
                <span className="text-xs font-semibold text-slate-600">18 September 2026 • 7:30 PM</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                Mushak 6.1 Purchase & 6.3 Tax Invoice Live Workshop
              </h4>
              <p className="text-xs text-slate-500">
                Instructor: <strong>Adv. Md. Ruhul Amin</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Right: Assignments & Quizzes Radar */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base">Pending Action Items</h3>
                <p className="text-xs text-slate-500">Required submissions for final certification</p>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab('student-assignments')}
              className="text-xs font-bold text-purple-600 hover:text-purple-700"
            >
              All Items
            </button>
          </div>

          <div className="space-y-3">
            {/* Urgent Assignment */}
            {pendingAssignments.slice(0, 1).map((asg) => (
              <div key={asg.id} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800">
                    Assignment Pending
                  </span>
                  <span className="text-xs font-extrabold text-rose-700">Due: {asg.deadline}</span>
                </div>
                <h4 className="text-sm font-extrabold text-slate-900">{asg.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2">{asg.instructions}</p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onNavigateTab('student-assignments')}
                    className="flex-1 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all text-center"
                  >
                    Submit Assignment Now
                  </button>
                </div>
              </div>
            ))}

            {/* Quiz Alert */}
            {availableQuizzes.slice(0, 1).map((quiz) => (
              <div key={quiz.id} className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                    Module Assessment
                  </span>
                  <span className="text-xs font-bold text-indigo-700">{quiz.durationMinutes} Mins • {quiz.questionCount} Questions</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">{quiz.title}</h4>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500">Passing Score: {quiz.passingScorePercent}%</span>
                  <button
                    onClick={() => onNavigateTab('student-quizzes')}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all"
                  >
                    Take Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

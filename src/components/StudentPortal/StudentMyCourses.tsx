import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  Award, 
  Calendar, 
  ChevronRight,
  ArrowUpDown,
  FileText,
  AlertCircle
} from 'lucide-react';
import { EnrolledCourseDetailed } from '../../data/studentMockData';

interface StudentMyCoursesProps {
  courses?: EnrolledCourseDetailed[];
  enrolledCourses?: EnrolledCourseDetailed[];
  onContinueCourse: (courseId: string) => void;
  onViewCourseDetails?: (courseId: string) => void;
  onBrowseMoreCourses?: () => void;
  onViewCertificate?: (courseId: string) => void;
}

export const StudentMyCourses: React.FC<StudentMyCoursesProps> = ({
  courses,
  enrolledCourses,
  onContinueCourse,
  onViewCourseDetails = (courseId: string) => onContinueCourse(courseId),
  onBrowseMoreCourses,
  onViewCertificate
}) => {
  const [activeTabFilter, setActiveTabFilter] = useState<'All' | 'In Progress' | 'Completed' | 'Expired'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'progress' | 'name'>('recent');

  const courseList = courses || enrolledCourses || [];

  // Filter & Search
  const filteredCourses = courseList.filter((c) => {
    if (!c) return false;
    const matchesTab = 
      activeTabFilter === 'All' ? true : c.status === activeTabFilter;
    const q = (searchQuery || '').toLowerCase().trim();
    const title = (c.courseTitle || '').toLowerCase();
    const inst = (c.instructorName || '').toLowerCase();
    const cat = (c.category || '').toLowerCase();
    const matchesSearch = !q || title.includes(q) || inst.includes(q) || cat.includes(q);
    return matchesTab && matchesSearch;
  });

  // Sort
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'progress') {
      return b.progressPercent - a.progressPercent;
    }
    if (sortBy === 'name') {
      return a.courseTitle.localeCompare(b.courseTitle);
    }
    // Default 'recent'
    return b.enrollmentDate.localeCompare(a.enrollmentDate);
  });

  const countAll = courseList.length;
  const countInProgress = courseList.filter(c => c.status === 'In Progress').length;
  const countCompleted = courseList.filter(c => c.status === 'Completed').length;
  const countExpired = courseList.filter(c => c.status === 'Expired').length;

  return (
    <div className="space-y-6" id="student-my-courses-page">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Course Management Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            My Enrolled Courses
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Access your active classes, track syllabus completion, and download accredited certificates.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-xl font-black text-slate-900 font-display">{countInProgress} Active</div>
            <div className="text-xs text-slate-500">{countCompleted} Completed Credentials</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setActiveTabFilter('All')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                activeTabFilter === 'All'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Courses ({countAll})
            </button>
            <button
              onClick={() => setActiveTabFilter('In Progress')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                activeTabFilter === 'In Progress'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              In Progress ({countInProgress})
            </button>
            <button
              onClick={() => setActiveTabFilter('Completed')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                activeTabFilter === 'Completed'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Completed ({countCompleted})
            </button>
            <button
              onClick={() => setActiveTabFilter('Expired')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                activeTabFilter === 'Expired'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Expired ({countExpired})
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="relative flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="recent">Recently Purchased</option>
                <option value="progress">Highest Progress</option>
                <option value="name">Course Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="enrolled-courses-grid">
        {sortedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            {/* Thumbnail Header */}
            <div className="relative h-44 bg-slate-900 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.courseTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Status Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className={`px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-lg shadow-xs ${
                  course.status === 'Completed'
                    ? 'bg-amber-400 text-slate-950'
                    : course.status === 'In Progress'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-rose-500 text-white'
                }`}>
                  {course.status}
                </span>

                <span className="px-2 py-0.5 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold rounded-lg border border-slate-700">
                  {course.category}
                </span>
              </div>

              {/* Course Duration */}
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold rounded-lg border border-amber-500/30 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{course.courseDuration}</span>
              </div>

              {/* Title on image */}
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-base font-extrabold text-white leading-tight font-display line-clamp-2">
                  {course.courseTitle}
                </h3>
              </div>
            </div>

            {/* Course Body Info */}
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {/* Instructor & Date */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div>
                    <span className="font-semibold text-slate-700">{course.instructorName}</span>
                    <p className="text-[10px] text-slate-400">{course.instructorTitle}</p>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">
                    Enrolled: {course.enrollmentDate}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-600">Completion</span>
                    <span className={`font-display ${
                      course.progressPercent === 100 ? 'text-amber-600' : 'text-emerald-600'
                    }`}>
                      {course.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        course.progressPercent === 100
                          ? 'bg-amber-400'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-400'
                      }`}
                      style={{ width: `${course.progressPercent}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{course.completedLessons} of {course.totalLessons} lessons completed</span>
                    {course.remainingLessons > 0 ? (
                      <span className="text-indigo-600 font-semibold">{course.remainingLessons} left</span>
                    ) : (
                      <span className="text-amber-600 font-bold flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-500" />
                        Full Syllabus
                      </span>
                    )}
                  </div>
                </div>

                {/* Last watched reminder if in progress */}
                {course.status === 'In Progress' && (
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-600 block">
                      Up Next:
                    </span>
                    <span className="font-bold text-slate-800 line-clamp-1">
                      {course.lastWatchedLesson}
                    </span>
                  </div>
                )}

                {/* Completed badge if finished */}
                {course.status === 'Completed' && (
                  <div className="p-2.5 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs flex items-center justify-between">
                    <span className="text-amber-900 font-bold flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-600" />
                      Certificate Issued
                    </span>
                    <span className="text-[10px] font-mono text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                      {course.certificateId || 'VERIFIED'}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                {course.status !== 'Expired' ? (
                  <button
                    onClick={() => onContinueCourse(course.courseId)}
                    className="flex-1 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <PlayCircle className="w-4 h-4 fill-slate-950/20" />
                    <span>{course.progressPercent === 100 ? 'Review Lectures' : 'Continue Learning'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onViewCourseDetails(course.courseId)}
                    className="flex-1 py-2.5 px-3 bg-rose-100 hover:bg-rose-200 text-rose-800 font-extrabold text-xs rounded-xl transition-all"
                  >
                    Renew Course Access
                  </button>
                )}

                <button
                  onClick={() => onViewCourseDetails(course.courseId)}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                  title="View Course Syllabus & Modules"
                >
                  Syllabus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedCourses.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-extrabold text-slate-800">No courses found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No courses match the selected filter or search term. Try adjusting your search query.
          </p>
        </div>
      )}
    </div>
  );
};

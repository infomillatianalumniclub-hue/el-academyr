import React, { useState } from 'react';
import {
  BookCheck,
  CheckCircle2,
  XCircle,
  Clock,
  Search,
  Filter,
  Eye,
  Star,
  Play,
  FileText,
  AlertCircle,
  X,
  Send,
  Sparkles
} from 'lucide-react';
import { mockAdminCoursesList, AdminCourseReviewItem } from '../../data/teacherAdminMockData';

export const AdminCoursesReviewTab: React.FC = () => {
  const [courses, setCourses] = useState<AdminCourseReviewItem[]>(mockAdminCoursesList);
  const [selectedCourse, setSelectedCourse] = useState<AdminCourseReviewItem | null>(null);
  const [reviewNote, setReviewNote] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Pending Review' | 'Published'>('All');

  const filteredCourses = courses.filter((c) => {
    if (activeFilter === 'All') return true;
    return c.status === activeFilter;
  });

  const handleApproveCourse = (id: string, title: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Published' } : c))
    );
    setSelectedCourse(null);
    alert(`Course "${title}" has been approved and published to the student catalog!`);
  };

  const handleRejectCourse = (id: string, title: string) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'Rejected' } : c))
    );
    setSelectedCourse(null);
    alert(`Course "${title}" rejected. Feedback delivered to the instructor.`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <BookCheck className="w-6 h-6 text-emerald-400" />
            <span>Course Review Desk & Academic Quality Assurance</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Audit submitted syllabi, verify statutory accuracy, test video audio clarity, and publish to academy catalog.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {(['All', 'Pending Review', 'Published'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeFilter === filter
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  {course.category}
                </span>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    course.status === 'Published'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : course.status === 'Pending Review'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}
                >
                  {course.status}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-sm line-clamp-2 leading-snug">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructorName}
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-700"
                  />
                  <span className="text-xs text-slate-300 font-medium">{course.instructorName}</span>
                </div>
              </div>

              {/* Quality Metric Bar */}
              <div className="p-3 bg-slate-850 rounded-xl border border-slate-800/80 space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold">
                  <span className="text-slate-400">Quality Assurance Score</span>
                  <span className="text-emerald-400 font-mono">{course.qualityScore}% Passed</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${course.qualityScore}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-mono">
                  <span>{course.videoDurationHours} Video Hours</span>
                  <span>{course.moduleCount} Modules</span>
                  <span className="font-bold text-amber-400">৳{course.price.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => setSelectedCourse(course)}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-purple-400" />
                <span>Audit Dossier</span>
              </button>

              {course.status === 'Pending Review' && (
                <button
                  onClick={() => handleApproveCourse(course.id, course.title)}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Approve & Publish</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Review Dossier Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
                  Academic Quality Assurance Dossier
                </span>
                <h3 className="text-base font-bold text-white mt-0.5">{selectedCourse.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Preview Simulation */}
            <div className="relative aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center group">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 text-purple-400 border border-purple-500/40 flex items-center justify-center mx-auto group-hover:scale-110 transition">
                  <Play className="w-6 h-6 fill-purple-400 ml-1" />
                </div>
                <div className="text-xs text-slate-300 font-semibold">
                  Sample Lesson: High Court Writ Argumentation Lecture 01
                </div>
                <div className="text-[10px] text-emerald-400">
                  ✓ Dynamic Watermarking & DRM Anti-Screen Recording Active
                </div>
              </div>
            </div>

            {/* Quality Checklist */}
            <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white mb-2">Automated Quality Verification Results</div>
              <div className="flex items-center justify-between text-slate-300">
                <span>1080p Video Resolution & 128kbps Audio Clarity</span>
                <span className="text-emerald-400 font-bold">Passed (100%)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Bangladesh Supreme Court / NBR Statutory Citations</span>
                <span className="text-emerald-400 font-bold">Verified</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Downloadable Handouts & Mushak/IT Forms</span>
                <span className="text-emerald-400 font-bold">Attached (PDF/DOCX)</span>
              </div>
            </div>

            {/* Review Note */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Feedback for Instructor (optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Please update Section 163 statutory reference to match Income Tax Act 2023..."
                value={reviewNote}
                onChange={(e) => setReviewNote(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
              <button
                onClick={() => handleRejectCourse(selectedCourse.id, selectedCourse.title)}
                className="px-4 py-2 bg-slate-800 hover:bg-rose-900/60 text-rose-300 rounded-xl text-xs font-bold transition"
              >
                Request Revisions
              </button>
              <button
                onClick={() => handleApproveCourse(selectedCourse.id, selectedCourse.title)}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Approve & Publish to Catalog</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

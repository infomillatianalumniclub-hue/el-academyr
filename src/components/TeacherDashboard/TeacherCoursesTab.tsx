import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Star,
  Users,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Video,
  FileSpreadsheet,
  X,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Tag,
  ExternalLink,
  Edit3,
  Trash2,
  FolderTree
} from 'lucide-react';
import { mockTeacherCourses, TeacherCourseItem } from '../../data/teacherAdminMockData';

interface TeacherCoursesTabProps {
  onOpenCourseBuilder: (courseId: string) => void;
  onOpenAIQuizGen: () => void;
}

export const TeacherCoursesTab: React.FC<TeacherCoursesTabProps> = ({
  onOpenCourseBuilder,
  onOpenAIQuizGen
}) => {
  const [coursesList, setCoursesList] = useState<TeacherCourseItem[]>(mockTeacherCourses);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Published' | 'Draft' | 'Under Review'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form State
  const [activeFormTab, setActiveFormTab] = useState<'basic' | 'pricing' | 'settings' | 'content'>('basic');
  const [newCourse, setNewCourse] = useState({
    title: '',
    shortDescription: '',
    detailedDescription: '',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80',
    banner: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1000&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    level: 'Masterclass' as 'Beginner' | 'Intermediate' | 'Advanced' | 'Masterclass',
    language: 'Bangla' as 'Bangla' | 'English' | 'Bilingual',
    durationHours: 30,
    regularPrice: 10000,
    offerPrice: 5000,
    couponCode: 'ELAWYER50',
    freePreview: true,
    certificateAvailable: true,
    discussionEnabled: true,
    downloadResourcesEnabled: true,
    videoLessonsCount: 32,
    documentsCount: 14,
    assignmentsCount: 4,
    quizCount: 2
  });

  const filteredCourses = coursesList.filter((c) => {
    if (!c) return false;
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const q = (searchQuery || '').toLowerCase().trim();
    const title = (c.title || '').toLowerCase();
    const cat = (c.category || '').toLowerCase();
    const matchesSearch = !q || title.includes(q) || cat.includes(q);
    return matchesStatus && matchesSearch;
  });

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourse.title) {
      alert('Please provide a course title.');
      return;
    }

    const created: TeacherCourseItem = {
      id: `course-${Date.now()}`,
      title: newCourse.title,
      thumbnail: newCourse.thumbnail,
      category: newCourse.category,
      level: newCourse.level,
      status: 'Under Review',
      regularPrice: Number(newCourse.regularPrice),
      offerPrice: Number(newCourse.offerPrice),
      studentsCount: 0,
      rating: 5.0,
      reviewsCount: 0,
      totalRevenue: 0,
      completionRate: 0,
      durationHours: Number(newCourse.durationHours),
      lastUpdated: 'Just now'
    };

    setCoursesList([created, ...coursesList]);
    setShowCreateModal(false);
    alert(`Course "${newCourse.title}" successfully created and submitted to Central Admin for quality review!`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span>Course Management System</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Author, publish, price, and structure comprehensive legal & tax courses.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAIQuizGen}
            className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">AI Generator</span>
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Course</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Status Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          {(['All', 'Published', 'Draft', 'Under Review'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                statusFilter === st
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {st} {st === 'All' ? `(${coursesList.length})` : `(${coursesList.filter((c) => c.status === st).length})`}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search courses or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg hover:border-slate-700 transition flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                    course.status === 'Published'
                      ? 'bg-emerald-500 text-slate-950'
                      : course.status === 'Under Review'
                      ? 'bg-amber-400 text-slate-950'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    {course.status}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-900/80 text-amber-300 backdrop-blur-md border border-slate-700">
                    {course.level}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="px-2 py-0.5 rounded bg-slate-900/80 text-[11px] font-semibold text-slate-300">
                    {course.category}
                  </span>
                  <span className="flex items-center gap-1 text-amber-400 font-bold text-xs bg-slate-900/80 px-2 py-0.5 rounded">
                    <Star className="w-3 h-3 fill-amber-400" />
                    {course.rating} ({course.reviewsCount})
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-white text-base leading-snug line-clamp-2">
                  {course.title}
                </h3>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>{course.studentsCount.toLocaleString()} Students</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.durationHours} Hours HD</span>
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Offer Price</span>
                    <div className="text-base font-black text-amber-400 font-display">
                      ৳{course.offerPrice.toLocaleString()}
                      <span className="text-[11px] text-slate-500 line-through ml-2 font-normal">
                        ৳{course.regularPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Gross Earned</span>
                    <div className="text-xs font-bold text-emerald-400 font-mono">
                      ৳{course.totalRevenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenCourseBuilder(course.id)}
                className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition"
              >
                <FolderTree className="w-3.5 h-3.5" />
                <span>Lesson Builder</span>
              </button>

              <button
                onClick={() => alert(`Editing course settings for: ${course.title}`)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                title="Edit Course Metadata"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ========================================================
          CREATE NEW COURSE COMPREHENSIVE MODAL
          ======================================================== */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-850">
              <div>
                <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  Course Creation Wizard
                </span>
                <h2 className="text-xl font-extrabold text-white font-display mt-1">
                  Create New Professional Legal/Tax Course
                </h2>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Nav Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-900/60 px-6">
              {[
                { id: 'basic', label: '1. Basic Information' },
                { id: 'pricing', label: '2. Pricing Setup' },
                { id: 'settings', label: '3. Course Settings' },
                { id: 'content', label: '4. Content Upload' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveFormTab(t.id as any)}
                  className={`py-3 px-4 text-xs font-bold border-b-2 transition ${
                    activeFormTab === t.id
                      ? 'border-amber-400 text-amber-400'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <form onSubmit={handleCreateSubmit} className="p-6 space-y-6">
              {/* TAB 1: BASIC INFORMATION */}
              {activeFormTab === 'basic' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Course Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Advanced High Court Writ Practice & Appellate Revision Mastery"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Category *
                      </label>
                      <select
                        value={newCourse.category}
                        onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Law">Law</option>
                        <option value="Tax">Tax</option>
                        <option value="VAT">VAT</option>
                        <option value="Accounting">Accounting</option>
                        <option value="Corporate Compliance">Corporate Compliance</option>
                        <option value="Professional Skills">Professional Skills</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Level *
                      </label>
                      <select
                        value={newCourse.level}
                        onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value as any })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Masterclass">Masterclass</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Language *
                      </label>
                      <select
                        value={newCourse.language}
                        onChange={(e) => setNewCourse({ ...newCourse, language: e.target.value as any })}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="Bilingual">Bilingual (Bangla & English)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Short Description *
                    </label>
                    <input
                      type="text"
                      placeholder="Brief overview summarizing practical practitioner outcomes..."
                      value={newCourse.shortDescription}
                      onChange={(e) => setNewCourse({ ...newCourse, shortDescription: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Detailed Description & Syllabus Highlights
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Comprehensive breakdown of Bangladesh statutory references, case studies, drafting formats..."
                      value={newCourse.detailedDescription}
                      onChange={(e) => setNewCourse({ ...newCourse, detailedDescription: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Course Thumbnail Image URL
                      </label>
                      <input
                        type="url"
                        value={newCourse.thumbnail}
                        onChange={(e) => setNewCourse({ ...newCourse, thumbnail: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Course Banner Header URL
                      </label>
                      <input
                        type="url"
                        value={newCourse.banner}
                        onChange={(e) => setNewCourse({ ...newCourse, banner: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PRICING SETUP */}
              {activeFormTab === 'pricing' && (
                <div className="space-y-4">
                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Instructor Earnings Split
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Instructors receive <strong>80% of net course sales</strong> directly. Platform handles bKash/Nagad gateway fees, HD CDN streaming, and automated digital certificate generation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Original / Regular Price (BDT)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">৳</span>
                        <input
                          type="number"
                          value={newCourse.regularPrice}
                          onChange={(e) => setNewCourse({ ...newCourse, regularPrice: Number(e.target.value) })}
                          className="w-full pl-8 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono font-bold focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Offer / Discount Price (BDT)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 font-bold text-xs">৳</span>
                        <input
                          type="number"
                          value={newCourse.offerPrice}
                          onChange={(e) => setNewCourse({ ...newCourse, offerPrice: Number(e.target.value) })}
                          className="w-full pl-8 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Promotional Coupon Code
                      </label>
                      <input
                        type="text"
                        value={newCourse.couponCode}
                        onChange={(e) => setNewCourse({ ...newCourse, couponCode: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white font-mono uppercase focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Total Course Duration (Hours)
                      </label>
                      <input
                        type="number"
                        value={newCourse.durationHours}
                        onChange={(e) => setNewCourse({ ...newCourse, durationHours: Number(e.target.value) })}
                        className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: COURSE SETTINGS */}
              {activeFormTab === 'settings' && (
                <div className="space-y-3">
                  {[
                    {
                      id: 'freePreview',
                      label: 'Free Preview Lessons',
                      desc: 'Allow students to watch introductory Module 01 lessons without paying.',
                      state: newCourse.freePreview,
                      setter: (val: boolean) => setNewCourse({ ...newCourse, freePreview: val })
                    },
                    {
                      id: 'certificateAvailable',
                      label: 'Certificate Availability',
                      desc: 'Automatically issue verified E-Lawyers Academy digital certificate upon 100% video completion and passing quizzes.',
                      state: newCourse.certificateAvailable,
                      setter: (val: boolean) => setNewCourse({ ...newCourse, certificateAvailable: val })
                    },
                    {
                      id: 'discussionEnabled',
                      label: 'Student Discussion Forum Enabled',
                      desc: 'Enable student Q&A and community case study discussions underneath each lesson.',
                      state: newCourse.discussionEnabled,
                      setter: (val: boolean) => setNewCourse({ ...newCourse, discussionEnabled: val })
                    },
                    {
                      id: 'downloadResourcesEnabled',
                      label: 'Download Resources & Drafting Templates Enabled',
                      desc: 'Permit registered students to download PDF gazettes, Word drafts, and Excel Mushak calculators.',
                      state: newCourse.downloadResourcesEnabled,
                      setter: (val: boolean) => setNewCourse({ ...newCourse, downloadResourcesEnabled: val })
                    }
                  ].map((setting) => (
                    <div
                      key={setting.id}
                      className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{setting.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{setting.desc}</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={setting.state}
                          onChange={(e) => setting.setter(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: CONTENT UPLOAD */}
              {activeFormTab === 'content' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Video Upload Box */}
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <Video className="w-4 h-4 text-blue-400" />
                        <span>HD Video Lessons</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Upload MP4 / MOV 1080p recorded masterclasses with watermarking.
                      </p>
                      <div className="p-3 border-2 border-dashed border-slate-700 rounded-xl text-center hover:border-amber-400 transition cursor-pointer">
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <span className="text-[11px] text-slate-300 font-semibold">Drop HD video or Browse</span>
                      </div>
                    </div>

                    {/* Documents Upload Box */}
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-white">
                        <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                        <span>Documents & Templates</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Attach PDF statutory gazettes, Word draft petitions, Excel return calculators.
                      </p>
                      <div className="p-3 border-2 border-dashed border-slate-700 rounded-xl text-center hover:border-emerald-400 transition cursor-pointer">
                        <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <span className="text-[11px] text-slate-300 font-semibold">Drop PDF/Excel or Browse</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Integrated Assessment Modules</div>
                      <div className="text-[11px] text-slate-400">Configure MCQ exam questions & practical drafting assignments.</div>
                    </div>
                    <button
                      type="button"
                      onClick={onOpenAIQuizGen}
                      className="px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded-xl text-xs font-bold flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Use AI Quiz Tool</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-bold"
                >
                  Cancel
                </button>

                <div className="flex items-center gap-2">
                  {activeFormTab !== 'content' ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (activeFormTab === 'basic') setActiveFormTab('pricing');
                        else if (activeFormTab === 'pricing') setActiveFormTab('settings');
                        else if (activeFormTab === 'settings') setActiveFormTab('content');
                      }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20"
                    >
                      Save & Submit for Review
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

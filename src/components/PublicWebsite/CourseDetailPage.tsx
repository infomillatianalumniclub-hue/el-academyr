import React, { useState } from 'react';
import { Course } from '../../types';
import { 
  Star, 
  Clock, 
  Users, 
  Globe, 
  CheckCircle2, 
  PlayCircle, 
  FileText, 
  Award, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  MessageSquare, 
  Video,
  ChevronDown,
  ChevronUp,
  Target,
  Briefcase,
  Layers,
  Sparkles,
  Download,
  Lock,
  Calendar
} from 'lucide-react';
import { VideoPreviewModal } from './VideoPreviewModal';

interface CourseDetailPageProps {
  course: Course;
  onClose: () => void;
  onEnrollNow: (course: Course) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  onClose,
  onEnrollNow,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'instructor' | 'features' | 'reviews'>('overview');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'mod-1': true,
    'mod-2': true,
    'mod-tax-1': true,
    'mod-bar-1': true,
    'mod-rjsc-1': true
  });
  const [previewLesson, setPreviewLesson] = useState<{ title: string; videoUrl: string } | null>(null);

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const discountPercent = Math.round(
    ((course.regularPrice - course.offerPrice) / course.regularPrice) * 100
  );

  const courseFeatures = [
    {
      icon: Video,
      title: 'HD Video Lessons',
      desc: 'High-definition screen recordings and live courtroom & NBR demonstrations.'
    },
    {
      icon: Download,
      title: 'Downloadable Resources',
      desc: 'Editable Word deeds, Excel Mushak sheets, and statutory notice formats.'
    },
    {
      icon: Calendar,
      title: 'Live Cohort Classes',
      desc: 'Weekly live interactive Zoom Q&A sessions with senior advocates & CAs.'
    },
    {
      icon: FileText,
      title: 'Assignments & Review',
      desc: 'Submit real client filings and receive personalized mentor assessment.'
    },
    {
      icon: Sparkles,
      title: 'Chapter Quizzes',
      desc: 'Test your grasp of legal sections and earn points on the Student Leaderboard.'
    },
    {
      icon: Award,
      title: 'Verified Certificate',
      desc: 'Tamper-proof completion certificate with unique QR code verification.'
    },
    {
      icon: Clock,
      title: 'Lifetime Cloud Access',
      desc: 'Learn at your own pace anytime with free annual Finance Act updates.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-slate-200 text-slate-900 max-h-[92vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors shadow-lg"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Course Header Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative overflow-hidden border-b border-slate-800 shrink-0">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Left Header info */}
            <div className="md:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-bold rounded-full uppercase">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-full">
                  {course.subcategory}
                </span>
                {course.level && (
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold rounded-full">
                    {course.level} Level
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-snug">
                {course.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviewCount} Reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span>{course.studentCount.toLocaleString()} Students Enrolled</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{course.durationHours} Hours Total</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>{course.language}</span>
                </div>
              </div>

              {/* Instructor snippet */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={course.instructor.photoUrl}
                  alt={course.instructor.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400 shrink-0"
                />
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">Led by Industry Expert</p>
                  <p className="text-xs font-bold text-white">
                    {course.instructor.name} ({course.instructor.qualification})
                  </p>
                  <p className="text-[10px] text-slate-300">{course.instructor.designation}</p>
                </div>
              </div>
            </div>

            {/* Right Header Pricing Card */}
            <div className="md:col-span-4 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div 
                className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer group"
                onClick={() => setPreviewLesson({
                  title: `${course.title} - Academy Preview`,
                  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
                })}
              >
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <PlayCircle className="w-7 h-7 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 rounded text-[9px] font-bold text-amber-300">
                  Watch Free Preview
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-400 font-display">
                    ৳{course.offerPrice.toLocaleString()}
                  </span>
                  {course.regularPrice > course.offerPrice && (
                    <span className="text-sm text-slate-400 line-through">
                      ৳{course.regularPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-emerald-400 font-bold uppercase">
                  Save {discountPercent}% • bKash / Nagad Instant Enrollment
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onEnrollNow(course)}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>

                <button
                  onClick={() => setPreviewLesson({
                    title: `${course.title} - Free Preview Lesson`,
                    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
                  })}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Watch Free Preview</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lifetime Access + Verified Certificate</span>
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 flex gap-2 shrink-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 font-bold text-xs transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            About This Course
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3.5 px-4 font-bold text-xs transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Curriculum ({(course.modules || []).length} Modules)
          </button>
          <button
            onClick={() => setActiveTab('instructor')}
            className={`py-3.5 px-4 font-bold text-xs transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'instructor'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Instructor Profile
          </button>
          <button
            onClick={() => setActiveTab('features')}
            className={`py-3.5 px-4 font-bold text-xs transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'features'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Course Features & Tools
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-3.5 px-4 font-bold text-xs transition-colors border-b-2 whitespace-nowrap ${
              activeTab === 'reviews'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Reviews ({course.reviewCount})
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                  Course Overview
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {course.overview}
                </p>
              </div>

              {/* Objectives, Target Audience & Practical Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Course Objectives */}
                <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>Course Objectives</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {(course.objectives && course.objectives.length > 0 ? course.objectives : [
                      'Master relevant statutory sections and latest Bangladesh budget SROs',
                      'Prepare compliant forms, tax registers, and court documents',
                      'Confidently advise corporate and individual clients independently'
                    ]).map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="p-5 bg-amber-50/60 rounded-2xl border border-amber-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 text-amber-600" />
                    <span>Target Audience</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {(course.targetAudience && course.targetAudience.length > 0 ? course.targetAudience : [
                      'Practicing Advocates & Apprentice Lawyers',
                      'Tax Consultants, Accounts Officers & Finance Managers',
                      'Entrepreneurs & Business Compliance Directors'
                    ]).map((aud, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{aud}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Benefits */}
                <div className="p-5 bg-emerald-50/60 rounded-2xl border border-emerald-200/80 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Practical Benefits</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {(course.practicalBenefits && course.practicalBenefits.length > 0 ? course.practicalBenefits : [
                      'Ready-to-use editable draft templates and calculation sheets',
                      'Hands-on portal submission practice with real case scenarios',
                      'Direct chamber practice readiness upon completion'
                    ]).map((ben, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What You Will Learn */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-3">
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(course.whatYouWillLearn || []).map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Course Curriculum
                  </h3>
                  <p className="text-xs text-slate-500">
                    Step-by-step practical modules designed for real professional workflows.
                  </p>
                </div>
                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                  {course.modules.length} Modules • {course.durationHours} Total Hours
                </span>
              </div>

              {(course.modules || []).map((mod, modIdx) => (
                <div key={mod.id} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full p-4 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between font-bold text-slate-900 text-sm transition-colors text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs flex items-center justify-center font-bold shrink-0">
                        {modIdx + 1}
                      </span>
                      <span>{mod.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 font-normal">
                        {(mod.lessons || []).length} Lessons
                      </span>
                      {expandedModules[mod.id] ? (
                        <ChevronUp className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                  </button>

                  {expandedModules[mod.id] && (
                    <div className="divide-y divide-slate-100 p-2">
                      {(mod.lessons || []).map((lesson, lessonIdx) => (
                        <div
                          key={lesson.id}
                          className="p-3 flex items-center justify-between hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {lesson.isFreePreview ? (
                              <button
                                onClick={() => setPreviewLesson({
                                  title: lesson.title,
                                  videoUrl: lesson.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4'
                                })}
                                className="w-7 h-7 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 transition-colors"
                                title="Watch Free Preview"
                              >
                                <PlayCircle className="w-4 h-4" />
                              </button>
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0">
                                <Lock className="w-3.5 h-3.5" />
                              </div>
                            )}

                            <div>
                              <p className="text-xs font-bold text-slate-800 flex items-center gap-2">
                                <span>{lessonIdx + 1}. {lesson.title}</span>
                                {lesson.isFreePreview && (
                                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                                    Free Preview
                                  </span>
                                )}
                              </p>
                              <p className="text-[10px] text-slate-400">
                                Video Lecture • HD 1080p
                              </p>
                            </div>
                          </div>

                          <span className="text-xs text-slate-500 font-mono font-medium">
                            {lesson.durationMinutes} mins
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'instructor' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <img
                  src={course.instructor.photoUrl}
                  alt={course.instructor.name}
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-amber-400 shadow-md shrink-0"
                />
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 font-display">
                        {course.instructor.name}
                      </h3>
                      <p className="text-xs font-bold text-blue-700 uppercase">
                        {course.instructor.designation}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.instructor.rating} Instructor Rating</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    Qualification: {course.instructor.qualification}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-700">
                    <div><span className="font-bold text-slate-900">{course.instructor.experienceYears}+</span> Years Practical Experience</div>
                    <div><span className="font-bold text-slate-900">{course.instructor.totalStudents.toLocaleString()}+</span> Students Taught</div>
                    <div><span className="font-bold text-slate-900">{course.instructor.coursesCount}</span> Academy Courses</div>
                  </div>

                  {course.instructor.expertise && course.instructor.expertise.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {course.instructor.expertise.map((exp, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white text-slate-700 text-[10px] font-semibold border border-slate-200">
                          {exp}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                    {course.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display mb-1">
                  Everything Included in Your Enrollment
                </h3>
                <p className="text-xs text-slate-500">
                  Comprehensive academic curriculum and practical tools built for long-term career success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {courseFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{feat.title}</h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-center sm:text-left space-y-1">
                  <div className="text-4xl font-black text-slate-900 font-display">
                    {course.rating} <span className="text-lg text-slate-400 font-normal">/ 5.0</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">Based on {course.reviewCount} verified student ratings</p>
                </div>

                {/* Rating breakdown bars */}
                <div className="w-full sm:w-64 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-10 font-bold">5 Stars</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[88%]"></div>
                    </div>
                    <span className="w-8 text-right font-mono">88%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 font-bold">4 Stars</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[10%]"></div>
                    </div>
                    <span className="w-8 text-right font-mono">10%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 font-bold">3 Stars</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-[2%]"></div>
                    </div>
                    <span className="w-8 text-right font-mono">2%</span>
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic">
                    "After completing the VAT course, I started handling professional VAT compliance work for three manufacturing companies in Gazipur. The Mushak 6.1 and 9.1 return filings were taught with live practical files."
                  </p>
                  <p className="text-xs font-bold text-slate-900">— Advocate Ashikur Rahman (Dhaka Bar)</p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 italic">
                    "The practical approach to e-Return filing and Section 163 assessment defence gave our chamber immediate client results. Very high quality production and clear explanations."
                  </p>
                  <p className="text-xs font-bold text-slate-900">— Nusrat Jahan, ACA (Apex Trade)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="text-xs">
              <span className="text-slate-400">Course Fee: </span>
              <span className="text-xl font-bold text-amber-400 font-display">
                ৳{course.offerPrice.toLocaleString()}
              </span>
              {course.regularPrice > course.offerPrice && (
                <span className="text-xs text-slate-500 line-through ml-1.5">
                  ৳{course.regularPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
              Save {discountPercent}% Today
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onEnrollNow(course)}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-amber-500/20 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <span>Enroll Now via bKash / Nagad</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Free Lesson Video Preview Modal */}
      {previewLesson && (
        <VideoPreviewModal
          title={previewLesson.title}
          subtitle={`Free lesson preview from ${course.title}`}
          videoUrl={previewLesson.videoUrl}
          onClose={() => setPreviewLesson(null)}
          onEnrollNow={() => {
            setPreviewLesson(null);
            onEnrollNow(course);
          }}
        />
      )}
    </div>
  );
};

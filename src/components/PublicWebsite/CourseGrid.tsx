import React, { useState } from 'react';
import { Course } from '../../types';
import { 
  Sparkles, 
  ExternalLink, 
  Star, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';

interface CourseGridProps {
  courses?: Course[];
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
  onOpenLegalTools?: () => void;
}

type TabType = 'ALL COURSES' | 'TAX & VAT' | 'LEGAL' | 'ACCOUNTING' | 'CORPORATE' | 'ONLINE/LIVE';

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses = [],
  onSelectCourse,
  onEnrollCourse,
  onOpenLegalTools,
}) => {
  const [activeFilter, setActiveFilter] = useState<TabType>('ALL COURSES');

  const filterTabs: TabType[] = [
    'ALL COURSES',
    'TAX & VAT',
    'LEGAL',
    'ACCOUNTING',
    'CORPORATE',
    'ONLINE/LIVE',
  ];

  const courseList = courses || [];

  // Filter courses based on active tab
  const filteredCourses = courseList.filter((c) => {
    if (activeFilter === 'ALL COURSES') return true;
    if (activeFilter === 'ONLINE/LIVE') {
      return (
        c.filterCategory === 'ONLINE/LIVE' ||
        c.badgeTopLeft === 'LIVE' ||
        (c.title ? c.title.toLowerCase().includes('live') : false)
      );
    }
    if (activeFilter === 'TAX & VAT') {
      return c.filterCategory === 'TAX & VAT' || c.category === 'Tax & VAT';
    }
    if (activeFilter === 'LEGAL') {
      return c.filterCategory === 'LEGAL' || c.category === 'Legal Training';
    }
    if (activeFilter === 'ACCOUNTING') {
      return c.filterCategory === 'ACCOUNTING' || c.category === 'Accounting' || c.category === 'Professional Skills';
    }
    if (activeFilter === 'CORPORATE') {
      return c.filterCategory === 'CORPORATE' || c.category === 'Corporate Compliance';
    }
    return true;
  });

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Career Ready Curriculum</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Professional Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Designed with practical cases, statutory draft formats, and live NBR / Courtroom simulation.
            </p>
          </div>

          {onOpenLegalTools && (
            <button
              onClick={onOpenLegalTools}
              className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Free Legal & Tax Calculators</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 4-Column High Conversion Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            const discountPercent = Math.round(
              ((course.regularPrice - course.offerPrice) / course.regularPrice) * 100
            );

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group justify-between"
              >
                <div>
                  {/* Course Thumbnail & Discount Badge */}
                  <div 
                    className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => onSelectCourse(course)}
                  >
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30"></div>

                    {/* Category Pill Top Left */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                        {course.category}
                      </span>
                    </div>

                    {/* Discount Badge Top Right */}
                    {discountPercent > 0 && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white shadow-md">
                          {discountPercent}% OFF
                        </span>
                      </div>
                    )}

                    {/* Duration & Level Bottom Pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-semibold">
                      <span className="flex items-center gap-1 drop-shadow">
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                        {course.durationHours} Hours
                      </span>
                      <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold text-slate-200">
                        {course.level || 'Professional'}
                      </span>
                    </div>
                  </div>

                  {/* Course Card Body */}
                  <div className="p-5 space-y-3">
                    {/* Rating & Students Enrolled */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 font-normal">({course.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-[11px]">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.studentCount.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3
                      onClick={() => onSelectCourse(course)}
                      className="font-extrabold text-slate-900 text-sm leading-snug cursor-pointer group-hover:text-blue-600 transition-colors line-clamp-2"
                      title={course.title}
                    >
                      {course.title}
                    </h3>

                    {/* Instructor Info */}
                    <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                      <img
                        src={course.instructor.photoUrl}
                        alt={course.instructor.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <div className="truncate">
                        <p className="text-xs font-bold text-slate-800 truncate">
                          {course.instructor.name}
                        </p>
                        <p className="text-[10px] text-slate-500 truncate">
                          {course.instructor.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing and Action Buttons Bottom Bar */}
                <div className="p-5 pt-0 space-y-3">
                  {/* Price Display */}
                  <div className="flex items-baseline justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900 font-display">
                        ৳{course.offerPrice.toLocaleString()}
                      </span>
                      {course.regularPrice > course.offerPrice && (
                        <span className="text-xs text-slate-400 line-through font-medium">
                          ৳{course.regularPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase">
                      Instant Access
                    </span>
                  </div>

                  {/* Buttons: View Course & Enroll Now */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all text-center"
                    >
                      View Course
                    </button>
                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all text-center shadow-sm shadow-blue-600/20"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

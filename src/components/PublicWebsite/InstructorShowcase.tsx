import React from 'react';
import { Instructor } from '../../types';
import { mockInstructors } from '../../data/mockData';
import { Star, Users, BookOpen, CheckCircle, Award, ArrowRight, UserPlus } from 'lucide-react';

interface InstructorShowcaseProps {
  onSelectInstructor?: (instructor: Instructor) => void;
  onBecomeInstructor: () => void;
}

export const InstructorShowcase: React.FC<InstructorShowcaseProps> = ({
  onSelectInstructor,
  onBecomeInstructor,
}) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
              <Award className="w-3.5 h-3.5" />
              <span>Supreme Court & Corporate Faculty</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Learn From Leading Industry Experts
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our instructors are senior advocates, NBR tax consultants, chartered accountants, and company secretaries who actively lead Bangladesh’s top chambers and corporate firms.
            </p>
          </div>

          <button
            onClick={onBecomeInstructor}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md hover:shadow-lg"
          >
            <UserPlus className="w-4 h-4 text-amber-400" />
            <span>Become an Instructor</span>
          </button>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockInstructors.map((inst) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* Top Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={inst.photoUrl}
                      alt={inst.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-200 group-hover:border-blue-600 transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                      {inst.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-700">
                      {inst.designation}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {inst.qualification} • {inst.experienceYears}+ Yrs Exp
                    </p>
                  </div>
                </div>

                {/* Bio Excerpt */}
                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {inst.bio}
                </p>

                {/* Expertise Tags */}
                {inst.expertise && inst.expertise.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {inst.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Metrics Bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-bold text-slate-800">
                    {(inst.totalStudents ?? inst.studentsCount ?? 0).toLocaleString()}+
                  </span>
                  <span className="text-[11px] text-slate-500">Students</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-bold text-slate-800">
                    {inst.coursesCreated ?? inst.coursesCount ?? 0}
                  </span>
                  <span className="text-[11px] text-slate-500">Courses</span>
                </div>

                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{inst.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructor Invitation Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-950 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-800 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Teach on Bangladesh's Premier Professional Platform
            </span>
            <h3 className="text-2xl font-bold font-display">
              Are you a practicing Advocate, Tax Consultant, or Chartered Accountant?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Share your practical knowledge with 10,000+ aspiring professionals, build your personal brand, and earn competitive revenue.
            </p>
          </div>

          <button
            onClick={onBecomeInstructor}
            className="shrink-0 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2"
          >
            <span>Apply to Teach</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

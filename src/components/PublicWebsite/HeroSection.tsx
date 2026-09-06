import React from 'react';
import { 
  ArrowRight, 
  PlayCircle, 
  UserPlus, 
  Users, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Scale, 
  Calculator, 
  Building2, 
  FileText,
  Clock,
  Video
} from 'lucide-react';

interface HeroSectionProps {
  onBrowseCourses: () => void;
  onStartLearning: () => void;
  onBecomeInstructor: () => void;
  onOpenAIAssistant: () => void;
  onOpenAIRoadmap: () => void;
  onWatchPreviewVideo?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBrowseCourses,
  onStartLearning,
  onBecomeInstructor,
  onOpenAIAssistant,
  onOpenAIRoadmap,
  onWatchPreviewVideo,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bangladesh Professional Ecosystem Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-400 font-bold">Bangladesh's #1</span>
              <span>Online Academy for Legal, Tax & Corporate Compliance</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight leading-[1.15] text-white">
              Master Law, Tax & Compliance Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">From Industry Experts</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Learn practical professional skills from experienced lawyers, tax consultants, accountants, and industry professionals through structured online courses.
            </p>

            {/* Three Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA: Browse Courses */}
              <button
                onClick={onBrowseCourses}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>Browse Courses</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>

              {/* Secondary CTA: Start Learning */}
              <button
                onClick={onStartLearning}
                className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition-all flex items-center gap-2 hover:border-slate-600"
              >
                <PlayCircle className="w-4 h-4 text-emerald-400" />
                <span>Start Learning</span>
              </button>

              {/* Third CTA: Become an Instructor */}
              <button
                onClick={onBecomeInstructor}
                className="px-5 py-3.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 font-bold text-xs rounded-xl border border-blue-500/40 transition-all flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4 text-blue-400" />
                <span>Become an Instructor</span>
              </button>
            </div>

            {/* Popular Topics Quick Search */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-400">Popular:</span>
              <button
                onClick={onBrowseCourses}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              >
                VAT Compliance
              </button>
              <button
                onClick={onBrowseCourses}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              >
                Income Tax 2023
              </button>
              <button
                onClick={onBrowseCourses}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              >
                Bar Council Prep
              </button>
              <button
                onClick={onBrowseCourses}
                className="px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
              >
                RJSC Company Filing
              </button>
            </div>

            {/* AI Assistant Callout */}
            <div className="pt-1 flex items-center gap-3 text-xs">
              <button
                onClick={onOpenAIAssistant}
                className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-bold"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Need guidance choosing a course? Ask our AI Legal Mentor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual & Classroom Environment */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Digital Classroom Showcase Card */}
              <div className="relative rounded-3xl bg-slate-800/90 border border-slate-700/90 p-5 shadow-2xl backdrop-blur-md overflow-hidden space-y-4">
                
                {/* Classroom Video Feed Simulation */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80"
                    alt="Online Digital Classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  {/* Live Masterclass Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>Live Masterclass</span>
                  </div>

                  {/* Play Video Trigger */}
                  <div
                    onClick={onWatchPreviewVideo || onBrowseCourses}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-semibold">
                    <span className="text-white drop-shadow">VAT & Tax Audit Defense Simulation</span>
                    <span className="text-amber-300 font-mono">1080p HD</span>
                  </div>
                </div>

                {/* Instructor Spotlight Mini Bar */}
                <div className="p-3 bg-slate-900/90 rounded-2xl border border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80"
                      alt="Advocate XYZ"
                      className="w-11 h-11 rounded-xl object-cover border-2 border-amber-400"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Advocate XYZ</p>
                      <p className="text-[11px] text-slate-400">Senior Tax Consultant & SC Advocate</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 bg-amber-400/20 text-amber-300 text-[10px] font-bold rounded-lg border border-amber-400/30">
                    5,000+ Students
                  </span>
                </div>

                {/* Real-time Learner Activity Indicator */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Verified Program</p>
                      <p className="text-[11px] font-bold text-slate-200">NBR & Bar Aligned</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-medium">Student Rating</p>
                      <p className="text-[11px] font-bold text-slate-200">4.9 / 5.0 (8.5k+ Reviews)</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Floating Trust Chip */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900/95 border border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400">Instant Access</p>
                  <p className="text-xs font-bold text-white">bKash & Nagad Verified</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* ================= TRUST INDICATORS BAR ================= */}
        <div className="mt-14 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Indicator 1: 10,000+ Students */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/40 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white font-display">10,000+</p>
                <p className="text-xs text-slate-400 font-medium">Enrolled Students</p>
              </div>
            </div>

            {/* Indicator 2: 100+ Professional Courses */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/40 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white font-display">100+</p>
                <p className="text-xs text-slate-400 font-medium">Professional Courses</p>
              </div>
            </div>

            {/* Indicator 3: 50+ Expert Instructors */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/40 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white font-display">50+</p>
                <p className="text-xs text-slate-400 font-medium">Expert Instructors</p>
              </div>
            </div>

            {/* Indicator 4: Certified Learning Programs */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-800/40 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white font-display">100%</p>
                <p className="text-xs text-slate-400 font-medium">Certified Programs</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

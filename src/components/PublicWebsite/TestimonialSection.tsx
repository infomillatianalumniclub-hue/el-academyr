import React, { useState } from 'react';
import { Star, Play, Quote, CheckCircle, Video, MessageSquare } from 'lucide-react';
import { mockTextTestimonials, mockVideoTestimonials, VideoTestimonial } from '../../data/publicWebsiteData';

interface TestimonialSectionProps {
  onPlayVideoTestimonial: (video: VideoTestimonial) => void;
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  onPlayVideoTestimonial,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'text'>('all');

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Real Career Impact in Bangladesh</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Trusted by 10,000+ Lawyers, Tax Consultants & Accountants
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            See how practical education at E-Lawyers Academy transformed our students' practices, courtroom advocacy, and corporate careers.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'video'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-rose-500" />
              <span>Video Reviews</span>
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'text'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
              <span>Written Testimonials</span>
            </button>
          </div>
        </div>

        {/* Video Testimonials Showcase */}
        {(activeTab === 'all' || activeTab === 'video') && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-rose-500" />
                <span>Student Video Stories</span>
              </h3>
              <span className="text-xs text-slate-500 font-medium">Click to watch real practitioner experiences</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mockVideoTestimonials.map((vt) => (
                <div
                  key={vt.id}
                  onClick={() => onPlayVideoTestimonial(vt)}
                  className="group relative bg-slate-900 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={vt.thumbnailUrl}
                      alt={vt.studentName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    {/* Centered Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-white rounded text-[10px] font-mono font-semibold">
                      {vt.videoDuration}
                    </span>
                  </div>

                  <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-3">
                    <p className="text-xs text-slate-700 italic font-medium line-clamp-2">
                      "{vt.quote}"
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">{vt.studentName}</p>
                        <p className="text-[11px] text-slate-500">{vt.profession}</p>
                      </div>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {vt.courseTaken}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Text Testimonials Grid */}
        {(activeTab === 'all' || activeTab === 'text') && (
          <div className="space-y-4 pt-4">
            {activeTab === 'all' && (
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Quote className="w-5 h-5 text-blue-600" />
                  <span>Verified Graduate Reviews</span>
                </h3>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>4.9 / 5 Overall Average</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockTextTestimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      {t.verifiedStudent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          <span>Verified Student</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={t.avatarUrl}
                        alt={t.studentName}
                        className="w-10 h-10 rounded-full object-cover border border-slate-300"
                      />
                      <div>
                        <p className="text-xs font-extrabold text-slate-900">{t.studentName}</p>
                        <p className="text-[11px] text-slate-500">{t.profession}</p>
                        <p className="text-[10px] text-slate-400">{t.organization}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Course</span>
                      <span className="text-xs font-bold text-blue-700">{t.courseTaken}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

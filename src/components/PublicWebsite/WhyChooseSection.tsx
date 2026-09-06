import React from 'react';
import { UserCheck, CheckCircle2, Award, Clock, TrendingUp, ShieldCheck, Check } from 'lucide-react';
import { whyChoosePoints } from '../../data/publicWebsiteData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trusted Professional Education</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Why Choose E-Lawyers Academy
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Built for lawyers, tax consultants, and corporate compliance professionals in Bangladesh.
            We combine academic rigor with courtroom and boardroom practical reality.
          </p>
        </div>

        {/* 5 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoosePoints.map((point, idx) => (
            <div
              key={point.id}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-slate-50/50 hover:bg-white ${
                idx === 0 ? 'border-blue-300 ring-2 ring-blue-500/10 lg:col-span-1' : 'border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                  {getIcon(point.iconName)}
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                  {point.statBadge}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 mb-1">
                {point.title}
              </h3>
              <p className="text-xs font-bold text-blue-700 mb-2">
                {point.subtitle}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

          {/* Quick Comparison Card */}
          <div className="p-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/40 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-200 text-emerald-800">
                The Practical Difference
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Real Bangladesh Practice vs Theoretical Classes
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Actual NBR e-Return portal screen simulations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100+ editable Word & Excel draft templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>QR verified completion certificates</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-emerald-200/60 mt-4 flex items-center justify-between text-xs font-bold text-emerald-900">
              <span>Satisfaction Guarantee</span>
              <span className="text-emerald-700">100% Practical Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

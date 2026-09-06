import React from 'react';
import { 
  Scale, 
  Receipt, 
  Building2, 
  Calculator, 
  Briefcase, 
  FileText, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { CourseCategory } from '../../types';

interface CategoryGridProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const categories = [
    {
      name: 'Legal Training',
      displayTitle: 'Legal Education',
      icon: Scale,
      color: 'from-blue-600 to-indigo-700',
      tagline: 'Courtroom Advocacy & Practice',
      coursesCount: 28,
      subcategories: ['Court Practice', 'Criminal Law', 'Civil Law', 'Corporate Law', 'Bar Council MCQ/Written']
    },
    {
      name: 'Tax & VAT',
      displayTitle: 'Tax Training',
      icon: Receipt,
      color: 'from-amber-500 to-orange-600',
      tagline: 'Direct Taxation & NBR Assessment',
      coursesCount: 32,
      subcategories: ['Income Tax Act 2023', 'Tax Return Filing', 'Tax Audit Defense', 'Tax Planning & SROs']
    },
    {
      name: 'Tax & VAT',
      displayTitle: 'VAT Compliance',
      icon: Layers,
      color: 'from-emerald-600 to-teal-700',
      tagline: 'Indirect Tax & Mushak Procedures',
      coursesCount: 22,
      subcategories: ['VAT Law 2012', 'Mushak 6.1, 6.3 & 9.1', 'VAT Return Filing', 'VDS & VAT Audit']
    },
    {
      name: 'Accounting',
      displayTitle: 'Accounting',
      icon: Calculator,
      color: 'from-purple-600 to-indigo-700',
      tagline: 'Practical Corporate Finance',
      coursesCount: 18,
      subcategories: ['Practical Accounting', 'Financial Statements', 'Tally & QuickBooks', 'Payroll & TDS']
    },
    {
      name: 'Corporate Compliance',
      displayTitle: 'Corporate Compliance',
      icon: Building2,
      color: 'from-cyan-600 to-blue-700',
      tagline: 'Company Secretarial & Statutory Filings',
      coursesCount: 16,
      subcategories: ['Company Registration RJSC', 'Annual Filing Form XII & 23B', 'Secretarial Practice', 'BIDA & Trade Licensing']
    },
    {
      name: 'Professional Skills',
      displayTitle: 'Professional Skills',
      icon: Briefcase,
      color: 'from-rose-500 to-red-600',
      tagline: 'Commercial Drafting & Advocacy',
      coursesCount: 20,
      subcategories: ['Legal Drafting', 'Contract Drafting', 'Negotiation Mastery', 'Court Advocacy & Pleading']
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Curriculum Categories</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Explore Specialized Career Domains
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Structured learning pathways meticulously designed for the Bangladeshi legal, corporate, and fiscal regulatory ecosystem.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isCategorySelected =
              selectedCategory === cat.name ||
              (selectedCategory === 'All' && idx === 0);

            return (
              <div
                key={idx}
                onClick={() => onSelectCategory(cat.name)}
                className={`group bg-white rounded-3xl p-6 border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                  selectedCategory === cat.name
                    ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-md'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center font-bold shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {cat.coursesCount} Courses
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                    {cat.displayTitle}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">
                    {cat.tagline}
                  </p>

                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    {cat.subcategories.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 mt-5 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

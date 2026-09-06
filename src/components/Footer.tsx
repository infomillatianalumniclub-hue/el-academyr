import React from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Download, 
  Award, 
  CheckCircle2, 
  UserPlus, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onBecomeInstructor?: () => void;
  onOpenLegalTools?: () => void;
  onSelectCategory?: (category: string) => void;
  onSelectCourseById?: (courseId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onBecomeInstructor,
  onOpenLegalTools,
  onSelectCategory,
  onSelectCourseById,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1 & 2: Brand & About Academy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-md shadow-amber-500/20">
                <Scale className="w-6 h-6" />
              </div>
              <div className="text-xl font-extrabold text-white font-display tracking-tight">
                E-LAWYERS <span className="text-amber-400 font-normal">ACADEMY</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Bangladesh’s premier online academy for practical legal, tax, VAT, and corporate compliance education. Designed in partnership with Supreme Court advocates, NBR tax consultants, and Chartered Accountants.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-[11px] text-amber-400">
                <ShieldCheck className="w-3.5 h-3.5" /> NBR & Bar Aligned
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-[11px] text-emerald-400">
                <Award className="w-3.5 h-3.5" /> QR Verified Certificates
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Connect With Our Professional Community</p>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                  title="Facebook Community"
                >
                  f
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                  title="LinkedIn Alumni"
                >
                  in
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold border border-slate-800"
                  title="YouTube Masterclasses"
                >
                  yt
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400">
              Popular Courses
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-vat-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Complete VAT Compliance (2012 Act)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-tax-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Income Tax Act 2023 & e-Return
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-bar-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Bar Council MCQ & Written Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-hc-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  High Court Writ & Appellate Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-rjsc-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  RJSC Company Formation & Filing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCourseById && onSelectCourseById('c-draft-01')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Commercial Legal Drafting Masterclass
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Categories & Faculty */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400">
              Categories & Faculty
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Legal Training')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Legal Education & Court Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Tax & VAT')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Tax & VAT Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Corporate Compliance')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Corporate Compliance & RJSC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Accounting')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Practical Accounting & Audit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Professional Skills')}
                  className="text-left hover:text-amber-400 transition-colors"
                >
                  Professional Skills & Contract Drafting
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onBecomeInstructor}
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Become an Instructor</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal Tools & Contact Info */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-amber-400">
                Academy Helpline & Chambers
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">+880 1711-000000</div>
                    <div className="text-[10px] text-slate-500">10:00 AM - 10:00 PM (Daily)</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-slate-300">admissions@e-lawyers.academy</div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-slate-300 leading-snug">
                    Level 7, Supreme Court Bar Association Tower, Ramna, Dhaka-1000
                  </div>
                </div>
              </div>
            </div>

            {onOpenLegalTools && (
              <div className="pt-2 border-t border-slate-900">
                <button
                  onClick={onOpenLegalTools}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded-xl border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Legal Tools</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Bangladesh Payment Gateways */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} E-Lawyers Academy Bangladesh. All Rights Reserved. Education License & Trade Registration Verified.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 font-medium">Payment Methods:</span>
            <span className="px-2.5 py-1 bg-pink-950/70 text-pink-400 border border-pink-800/50 rounded font-black text-[10px]">
              bKash
            </span>
            <span className="px-2.5 py-1 bg-orange-950/70 text-orange-400 border border-orange-800/50 rounded font-black text-[10px]">
              Nagad
            </span>
            <span className="px-2.5 py-1 bg-purple-950/70 text-purple-400 border border-purple-800/50 rounded font-black text-[10px]">
              Rocket
            </span>
            <span className="px-2.5 py-1 bg-blue-950/70 text-blue-400 border border-blue-800/50 rounded font-black text-[10px]">
              Visa / Mastercard
            </span>
            <span className="px-2.5 py-1 bg-emerald-950/70 text-emerald-400 border border-emerald-800/50 rounded font-black text-[10px]">
              Bank Transfer
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

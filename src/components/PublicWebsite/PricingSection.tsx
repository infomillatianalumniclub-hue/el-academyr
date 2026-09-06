import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Building2, Users, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      name: 'Individual Membership',
      price: 999,
      period: 'per month',
      badge: 'Popular for Students',
      description: 'Ideal for law students, trainees, and junior advocates starting their tax & court practice.',
      features: [
        'Access to selected recorded courses',
        'Downloadable Mushak & Tax forms',
        'AI Legal Assistant (50 queries/mo)',
        'Access to Student Discussion Forum',
        'Mobile App Access'
      ],
      isPopular: false,
      buttonText: 'Subscribe Monthly',
      accentColor: 'border-slate-300'
    },
    {
      name: 'Professional Membership',
      price: 5000,
      period: 'per year',
      badge: 'Best Value for Practitioners',
      description: 'Comprehensive annual pass for practicing High Court Advocates and NBR Tax Consultants.',
      features: [
        'Unlimited access to ALL Academy courses',
        'QR Verified Completion Certificates',
        'Unlimited AI Legal Learning Assistant',
        'Live Expert Webinars & Q&A Workshops',
        'Complete Resource Library (Writ & Corporate Drafts)',
        'Priority Phone & Email Helpline'
      ],
      isPopular: true,
      buttonText: 'Get Annual Membership',
      accentColor: 'border-amber-500 ring-2 ring-amber-400/30'
    },
    {
      name: 'Corporate Training Plan',
      price: 25000,
      period: 'per year (up to 10 staff)',
      badge: 'For Law Firms & Companies',
      description: 'Tailored for law firms, accounting practices, and corporate tax & compliance teams.',
      features: [
        'Up to 10 Employee / Associate accounts',
        'Private Firm Training Dashboard & Reports',
        'Customized In-house VAT & Tax Webinars',
        'Dedicated Account Manager',
        'All Masterclasses & Certified Certificates'
      ],
      isPopular: false,
      buttonText: 'Contact Corporate Team',
      accentColor: 'border-blue-500'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Subscription & Membership Models
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-display">
            Flexible Plans for Every Stage of Legal Practice
          </h2>
          <p className="text-sm text-slate-600">
            Unlock continuous updates to Bangladesh Income Tax Act 2023, NBR SROs, and High Court precedents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 border ${plan.accentColor} shadow-lg flex flex-col justify-between space-y-6 transform hover:-translate-y-1 transition-all`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-xs font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 font-display">{plan.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{plan.description}</p>

                <div className="flex items-baseline gap-1 pt-2 border-t border-slate-100">
                  <span className="text-3xl font-black text-slate-900 font-display">
                    ৳{plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/{plan.period}</span>
                </div>

                <div className="space-y-2.5 pt-4">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name, plan.price)}
                className={`w-full py-3.5 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>{plan.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

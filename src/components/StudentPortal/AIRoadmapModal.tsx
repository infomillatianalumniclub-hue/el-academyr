import React, { useState } from 'react';
import { GraduationCap, Sparkles, X, CheckCircle2, ArrowRight, Loader2, BookOpen, Clock } from 'lucide-react';

interface AIRoadmapModalProps {
  onClose: () => void;
}

export const AIRoadmapModal: React.FC<AIRoadmapModalProps> = ({ onClose }) => {
  const [profession, setProfession] = useState('Law Student / Trainee Advocate');
  const [goal, setGoal] = useState('Pass High Court Enrollment & Become NBR Tax Practitioner');
  const [isLoading, setIsLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<any>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/generate-roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profession,
          careerGoal: goal,
          completedTopics: ['CPC Basics', 'VAT BIN Registration']
        })
      });
      const data = await res.json();
      setRoadmap(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 font-display">Personalized AI Learning Roadmap</h2>
            <p className="text-xs text-slate-500">Custom career path for Bangladesh Law & Tax Professionals</p>
          </div>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Your Current Stage</label>
            <select
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500"
            >
              <option value="Law Student / Trainee Advocate">Law Student / Trainee Advocate</option>
              <option value="NBR Tax Practitioner Trainee">NBR Tax Practitioner Trainee</option>
              <option value="Corporate Compliance Manager">Corporate Compliance Manager</option>
              <option value="High Court Junior Advocate">High Court Junior Advocate</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Target Career Goal</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-emerald-500"
            >
              <option value="Pass High Court Enrollment & Become NBR Tax Practitioner">Pass High Court Enrollment & Become NBR Tax Practitioner</option>
              <option value="Master VAT Mushak 6.1, 9.1 & NBR e-Return Filing">Master VAT Mushak 6.1, 9.1 & NBR e-Return Filing</option>
              <option value="Bar Council MCQ & Written First Time Clear">Bar Council MCQ & Written First Time Clear</option>
              <option value="RJSC Company Incorporation & Annual Returns Specialist">RJSC Company Incorporation & Annual Returns Specialist</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating AI Career Roadmap...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Generate Step-by-Step AI Roadmap</span>
            </>
          )}
        </button>

        {/* Output Roadmap Display */}
        {roadmap && (
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
              <h3 className="font-extrabold text-emerald-950 text-base">{roadmap.title}</h3>
              <p className="text-xs text-emerald-800">{roadmap.overview}</p>
              <div className="text-[11px] font-bold text-emerald-700 mt-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Target Duration: {roadmap.estimatedMonths} Months</span>
              </div>
            </div>

            <div className="space-y-3">
              {roadmap.milestones?.map((step: any, idx: number) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-black text-xs flex items-center justify-center shrink-0">
                    {step.stepNumber}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-sm">{step.stageName}</h4>
                    <p className="text-xs text-slate-600">{step.description}</p>
                    <div className="text-[11px] font-bold text-emerald-600">Key Outcome: {step.keyOutcome}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

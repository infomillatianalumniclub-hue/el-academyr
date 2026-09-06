import React, { useState } from 'react';
import {
  Sparkles,
  X,
  CheckCircle2,
  HelpCircle,
  Clock,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Plus
} from 'lucide-react';

interface TeacherAIQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuestionsGenerated?: (questions: any[]) => void;
}

export const TeacherAIQuizModal: React.FC<TeacherAIQuizModalProps> = ({
  isOpen,
  onClose,
  onQuestionsGenerated
}) => {
  const [topic, setTopic] = useState('Income Tax Act 2023 - Universal Return (IT-11GA) & Sec 163 Minimum Tax');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Bar Council Level'>('Bar Council Level');
  const [questionCount, setQuestionCount] = useState(3);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([
    {
      id: 'q1',
      question: 'Under Section 163 of the Income Tax Act 2023, what is the nature of tax deducted at source from supply of goods or execution of contracts?',
      options: [
        'A) It is solely an advance adjustable tax',
        'B) It constitutes the minimum tax liability of the assessee',
        'C) It is completely exempt from universal assessment',
        'D) It is refundable automatically without audit'
      ],
      correctAnswer: 'B) It constitutes the minimum tax liability of the assessee',
      statutoryReference: 'Section 163(2)(b) of the Income Tax Act 2023 (previously Section 82C).'
    },
    {
      id: 'q2',
      question: 'Under the VAT and Supplementary Duty Act 2012, within how many days must a registered entity file the Mushak 9.1 monthly return?',
      options: [
        'A) Within 7 days of the following month',
        'B) Within 15 days following the end of the tax period',
        'C) By the 30th day of the tax period',
        'D) At the end of the financial quarter'
      ],
      correctAnswer: 'B) Within 15 days following the end of the tax period',
      statutoryReference: 'Section 64 of the VAT and Supplementary Duty Act 2012.'
    },
    {
      id: 'q3',
      question: 'In High Court Division writ jurisdiction under Article 102(2)(a)(i) of the Bangladesh Constitution, a writ of Mandamus lies to compel:',
      options: [
        'A) A private citizen to execute a contract',
        'B) A public functionary to perform a statutory duty prescribed by law',
        'C) The military court to transfer jurisdiction',
        'D) Arbitrators in international commercial proceedings'
      ],
      correctAnswer: 'B) A public functionary to perform a statutory duty prescribed by law',
      statutoryReference: 'Constitution of Bangladesh Article 102(2)(a)(i).'
    }
  ]);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      alert('3 New AI-generated legal questions created based on latest statutory amendments!');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white font-display">
                AI Statutory Question & Exam Generator
              </h2>
              <p className="text-xs text-slate-400">
                Instantly synthesize Bangladesh Law, VAT & Tax MCQ questions with statutory reasoning.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <div className="p-6 space-y-4 border-b border-slate-800 bg-slate-850">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="sm:col-span-2">
              <label className="block text-slate-300 font-semibold mb-1">Legal / Tax Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Difficulty Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Bar Council Level">Bar Council Level</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Powered by E-Lawyers Legal LLM Knowledge Engine
            </span>
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 transition disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generating...' : 'Generate Questions'}</span>
            </button>
          </div>
        </div>

        {/* Generated Questions Preview */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Generated Draft Questions ({generatedQuestions.length})
          </div>

          {generatedQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="p-4 bg-slate-800/70 border border-slate-700/60 rounded-2xl space-y-2 text-xs"
            >
              <div className="font-bold text-white flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-mono text-[11px]">
                  {idx + 1}
                </span>
                <span className="flex-1">{q.question}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-7">
                {(q.options || []).map((opt: string, optIdx: number) => (
                  <div
                    key={optIdx}
                    className={`p-2 rounded-xl text-[11px] border ${
                      opt === q.correctAnswer
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300'
                    }`}
                  >
                    {opt}
                  </div>
                ))}
              </div>

              <div className="pl-7 pt-1 text-[11px] text-amber-400/90 font-medium">
                Statutory Reference: {q.statutoryReference}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-bold hover:text-white"
          >
            Dismiss
          </button>
          <button
            onClick={() => {
              if (onQuestionsGenerated) onQuestionsGenerated(generatedQuestions);
              alert('3 questions added to your exam questions bank!');
              onClose();
            }}
            className="px-5 py-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-yellow-300 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add All to Course Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

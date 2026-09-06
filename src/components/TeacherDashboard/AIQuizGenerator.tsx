import React, { useState } from 'react';
import { Sparkles, Loader2, CheckCircle2, X, PlusCircle } from 'lucide-react';

interface AIQuizGeneratorProps {
  onClose: () => void;
  onSaveQuizToCourse: (quizData: any) => void;
}

export const AIQuizGenerator: React.FC<AIQuizGeneratorProps> = ({
  onClose,
  onSaveQuizToCourse,
}) => {
  const [topic, setTopic] = useState('Income Tax Act 2023 Section 163 Minimum Tax Rules');
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<any>(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, numQuestions, difficulty })
      });
      const data = await res.json();
      setGeneratedQuiz(data);
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
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/20">
            <Sparkles className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 font-display">AI Course Quiz Generator</h2>
            <p className="text-xs text-slate-500">Auto-generate MCQs with legal citations & explanations for students</p>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Legal or Tax Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Mushak 6.3 Tax Invoice issuing conditions"
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Number of Questions</label>
              <select
                value={numQuestions}
                onChange={(e) => setNumQuestions(Number(e.target.value))}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-amber-500"
              >
                <option value={3}>3 MCQs</option>
                <option value={5}>5 MCQs</option>
                <option value={10}>10 MCQs</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Difficulty Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-amber-500"
              >
                <option value="Basic">Basic Practitioner</option>
                <option value="Intermediate">Intermediate Level</option>
                <option value="Advanced High Court">Advanced High Court Bar Level</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isLoading || !topic}
          className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating Legal Questions via Gemini...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 fill-slate-950" />
              <span>Generate MCQ Test with Explanations</span>
            </>
          )}
        </button>

        {/* Display Generated Quiz */}
        {generatedQuiz && (
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <div className="flex justify-between items-center">
              <h3 className="font-extrabold text-slate-900 text-base">{generatedQuiz.quizTitle}</h3>
              <button
                onClick={() => {
                  onSaveQuizToCourse(generatedQuiz);
                  onClose();
                }}
                className="px-4 py-2 bg-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Attach Quiz to Lesson</span>
              </button>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {generatedQuiz.questions?.map((q: any, idx: number) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
                  <p className="font-bold text-slate-900">{idx + 1}. {q.questionText}</p>
                  <div className="grid grid-cols-2 gap-1.5 pl-2">
                    {q.options?.map((opt: string, oIdx: number) => (
                      <div
                        key={oIdx}
                        className={`p-1.5 rounded-lg border text-[11px] ${
                          oIdx === q.correctIndex ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' : 'bg-white text-slate-700 border-slate-200'
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    <strong>Legal Citation:</strong> {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Quiz, QuizQuestion } from '../../types';
import { CheckCircle2, XCircle, Clock, Award, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface QuizSystemProps {
  quizTitle: string;
  questions: QuizQuestion[];
  onFinishQuiz: (scorePercent: number) => void;
  onClose: () => void;
}

export const QuizSystem: React.FC<QuizSystemProps> = ({
  quizTitle,
  questions,
  onFinishQuiz,
  onClose,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    return Math.round((correctCount / questions.length) * 100);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    onFinishQuiz(score);
  };

  const scorePercent = calculateScore();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-3xl mx-auto space-y-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            Module Knowledge Check
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 font-display mt-2">{quizTitle}</h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-500 block">Total Questions</span>
          <span className="text-base font-bold text-slate-900">{questions.length} MCQs</span>
        </div>
      </div>

      {/* Quiz Result Summary Banner (If Submitted) */}
      {isSubmitted && (
        <div className={`p-6 rounded-2xl border text-center space-y-2 ${
          scorePercent >= 70 ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          <div className="text-3xl font-black font-display">
            Score: {scorePercent}%
          </div>
          <p className="text-xs font-bold">
            {scorePercent >= 70
              ? '🎉 Excellent performance! You passed the module quiz requirements.'
              : 'Keep practicing! Review the explanations below and try again.'}
          </p>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, idx) => {
          const userAnswer = selectedAnswers[q.id];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div key={q.id} className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{q.questionText}</span>
              </h3>

              <div className="space-y-2 pl-8">
                {q.options.map((option, optIdx) => {
                  let btnStyle = 'bg-white text-slate-800 border-slate-200 hover:border-amber-400';

                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-bold';
                    } else if (userAnswer === optIdx && !isCorrect) {
                      btnStyle = 'bg-rose-100 text-rose-900 border-rose-400 font-bold';
                    }
                  } else if (userAnswer === optIdx) {
                    btnStyle = 'bg-slate-900 text-amber-400 border-slate-900 font-bold';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isSubmitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && userAnswer === optIdx && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation text */}
              {isSubmitted && (
                <div className="mt-3 p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-amber-900 font-medium">
                  <strong>Legal Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-200">
        <button
          onClick={onClose}
          className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
        >
          Close Quiz
        </button>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-md disabled:opacity-50"
          >
            Submit Answers for Auto-Grading
          </button>
        ) : (
          <button
            onClick={() => {
              setIsSubmitted(false);
              setSelectedAnswers({});
            }}
            className="px-5 py-2.5 bg-slate-900 text-amber-400 font-bold text-xs rounded-xl flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retake Quiz</span>
          </button>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  HelpCircle, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Award, 
  FileText, 
  Sparkles,
  Flag,
  Check,
  X
} from 'lucide-react';
import { StudentQuizExam } from '../../types';

interface StudentQuizzesProps {
  quizzes?: StudentQuizExam[];
  onQuizCompleted?: (quizId: string, score: number) => void;
  onQuizCompletedReward?: (score: number) => void;
  onViewCertificates?: () => void;
}

export const StudentQuizzes: React.FC<StudentQuizzesProps> = ({
  quizzes = [],
  onQuizCompleted,
  onQuizCompletedReward,
  onViewCertificates
}) => {
  const [quizList, setQuizList] = useState<StudentQuizExam[]>(quizzes || []);
  const [activeQuizRunning, setActiveQuizRunning] = useState<StudentQuizExam | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(1800); // 30 mins
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (activeQuizRunning && !quizFinished && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((sec) => {
          if (sec <= 1) {
            handleFinishQuiz();
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeQuizRunning, quizFinished, secondsRemaining]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = (quiz: StudentQuizExam) => {
    setActiveQuizRunning(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setSecondsRemaining(quiz.durationMinutes * 60);
    setQuizFinished(false);
    setCalculatedScore(0);
  };

  const handleSelectOption = (questionIdx: number, optionIdx: number, isMultiple: boolean) => {
    if (isMultiple) {
      const current = selectedAnswers[questionIdx] || [];
      const updated = current.includes(optionIdx)
        ? current.filter(i => i !== optionIdx)
        : [...current, optionIdx];
      setSelectedAnswers({ ...selectedAnswers, [questionIdx]: updated });
    } else {
      setSelectedAnswers({ ...selectedAnswers, [questionIdx]: [optionIdx] });
    }
  };

  const toggleFlag = (questionIdx: number) => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [questionIdx]: !prev[questionIdx]
    }));
  };

  const handleFinishQuiz = () => {
    if (!activeQuizRunning) return;
    const questions = activeQuizRunning.questions;
    let correctCount = 0;

    questions.forEach((q, idx) => {
      const userSelected = selectedAnswers[idx] || [];
      const correct = q.correctIndices;
      const isMatch = 
        userSelected.length === correct.length &&
        userSelected.every(val => correct.includes(val));
      if (isMatch) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / questions.length) * 100);
    setCalculatedScore(scorePercent);
    setQuizFinished(true);

    // Update list attempt history
    const updated = quizList.map((q) => {
      if (q.id === activeQuizRunning.id) {
        return {
          ...q,
          status: 'Completed' as const,
          attemptHistory: [
            {
              attemptNumber: q.attemptHistory.length + 1,
              scorePercent: scorePercent,
              date: 'Today, 2026-09-06',
              passed: scorePercent >= q.passingScorePercent,
              timeSpent: `${Math.round((activeQuizRunning.durationMinutes * 60 - secondsRemaining) / 60)} mins`
            },
            ...q.attemptHistory
          ]
        };
      }
      return q;
    });

    setQuizList(updated);
    onQuizCompletedReward?.(scorePercent);
  };

  return (
    <div className="space-y-6" id="student-quizzes-page">
      {/* Quiz List View when not in active test */}
      {!activeQuizRunning && (
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                Assessment & Bar Simulation Engine
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
                Quizzes & Bar Examination System
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Evaluate your command of Bangladesh Income Tax Act 2023, VAT & SD Act 2012, and Bar Council statutory provisions.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
                🏆
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900">Certificate Eligibility</span>
                <p className="text-[11px] text-emerald-600 font-bold">Passed assessments unlock PDF credentials</p>
              </div>
            </div>
          </div>

          {/* Quizzes List Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizList.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      quiz.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {quiz.status}
                    </span>

                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      {quiz.durationMinutes} Minutes
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 font-display leading-snug">
                      {quiz.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">Course: {quiz.courseTitle}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Questions</span>
                      <span className="font-extrabold text-slate-900">{quiz.questionCount} Questions</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Passing Mark</span>
                      <span className="font-extrabold text-slate-900">{quiz.passingScorePercent}% Score</span>
                    </div>
                  </div>

                  {/* Previous Attempt History */}
                  {quiz.attemptHistory.length > 0 && (
                    <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs space-y-1">
                      <div className="flex items-center justify-between font-bold text-amber-900">
                        <span>Last Score: {quiz.attemptHistory[0].scorePercent}%</span>
                        <span className={quiz.attemptHistory[0].passed ? 'text-emerald-700' : 'text-rose-700'}>
                          {quiz.attemptHistory[0].passed ? 'PASSED ✓' : 'FAILED'}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-500 block">
                        Attempted on {quiz.attemptHistory[0].date} ({quiz.attemptHistory[0].timeSpent})
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => startQuiz(quiz)}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{quiz.status === 'Completed' ? 'Retake Assessment' : 'Start Assessment'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ACTIVE QUIZ RUNNER INTERFACE */}
      {activeQuizRunning && !quizFinished && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
          {/* Top Bar: Progress, Question Number & Live Timer */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {activeQuizRunning.title}
              </span>
              <h2 className="text-base font-extrabold text-slate-900 mt-1">
                Question {currentQuestionIndex + 1} of {activeQuizRunning.questions.length}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleFlag(currentQuestionIndex)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1 transition-all ${
                  flaggedQuestions[currentQuestionIndex]
                    ? 'bg-amber-100 border-amber-300 text-amber-800'
                    : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Flag className="w-3.5 h-3.5" />
                <span>{flaggedQuestions[currentQuestionIndex] ? 'Flagged' : 'Flag Question'}</span>
              </button>

              <div className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-black flex items-center gap-1.5 ${
                secondsRemaining < 300 
                  ? 'bg-rose-100 border-rose-300 text-rose-800 animate-pulse'
                  : 'bg-slate-900 text-amber-400 border-slate-800'
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{formatTimer(secondsRemaining)}</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / activeQuizRunning.questions.length) * 100}%`
              }}
            ></div>
          </div>

          {/* Question Body */}
          {(() => {
            const currentQ = activeQuizRunning.questions[currentQuestionIndex];
            const isMultiple = currentQ.type === 'multiple-answer';
            const userSelected = selectedAnswers[currentQuestionIndex] || [];

            return (
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Topic: {currentQ.topicCategory} • {isMultiple ? 'Select all that apply' : 'Select one answer'}
                  </span>
                  <p className="text-base font-extrabold text-slate-900 leading-relaxed mt-1">
                    {currentQ.questionText}
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-3">
                  {currentQ.options.map((option, optIdx) => {
                    const isSelected = userSelected.includes(optIdx);

                    return (
                      <div
                        key={optIdx}
                        onClick={() => handleSelectOption(currentQuestionIndex, optIdx, isMultiple)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                          isSelected
                            ? 'bg-indigo-50/80 border-indigo-600 shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-indigo-600 border-indigo-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold text-slate-800 leading-relaxed">
                          {option}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-2">
              {currentQuestionIndex < activeQuizRunning.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleFinishQuiz}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Exam</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* QUIZ RESULTS & PERFORMANCE ANALYSIS VIEW */}
      {activeQuizRunning && quizFinished && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
          {/* Result Header Banner */}
          <div className={`p-6 rounded-2xl text-center space-y-3 ${
            calculatedScore >= activeQuizRunning.passingScorePercent
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-950'
              : 'bg-rose-50 border border-rose-200 text-rose-950'
          }`}>
            <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-sm bg-white">
              {calculatedScore >= activeQuizRunning.passingScorePercent ? '🎓' : '⚠️'}
            </div>
            <h2 className="text-2xl font-black font-display">
              {calculatedScore >= activeQuizRunning.passingScorePercent
                ? 'Congratulations, Assessment Passed!'
                : 'Assessment Result: Needs Review'}
            </h2>
            <div className="text-4xl font-black font-display">
              {calculatedScore}% Score
            </div>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              {calculatedScore >= activeQuizRunning.passingScorePercent
                ? 'You have satisfied the statutory pass criteria and qualified for the verified certificate of completion.'
                : 'The required passing benchmark is 70%. You may review the topic explanations below and retake the assessment.'}
            </p>
          </div>

          {/* Topic Performance Breakdown */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm">Detailed Question Breakdown</h3>
            {activeQuizRunning.questions.map((q, idx) => {
              const userSelected = selectedAnswers[idx] || [];
              const correct = q.correctIndices;
              const isMatch = 
                userSelected.length === correct.length &&
                userSelected.every(val => correct.includes(val));

              return (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    isMatch ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-600">Question {idx + 1} ({q.topicCategory})</span>
                    <span className={`font-black uppercase text-[10px] px-2 py-0.5 rounded ${
                      isMatch ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
                    }`}>
                      {isMatch ? 'Correct ✓' : 'Incorrect ✗'}
                    </span>
                  </div>
                  <p className="font-bold text-slate-800">{q.questionText}</p>
                  <p className="text-[11px] text-slate-600 italic bg-white p-2 rounded-lg border border-slate-100">
                    <strong>Statutory Rationale:</strong> {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
            <button
              onClick={() => setActiveQuizRunning(null)}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl"
            >
              Back to Assessment Hub
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => startQuiz(activeQuizRunning)}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              {calculatedScore >= activeQuizRunning.passingScorePercent && (
                <button
                  onClick={onViewCertificates}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Claim Certificate</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

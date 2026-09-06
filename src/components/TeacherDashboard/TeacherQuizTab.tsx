import React, { useState } from 'react';
import {
  HelpCircle,
  Plus,
  Sparkles,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  BarChart3,
  AlertTriangle,
  ChevronRight,
  X
} from 'lucide-react';
import { mockTeacherQuizzes, TeacherQuizItem } from '../../data/teacherAdminMockData';

interface TeacherQuizTabProps {
  onOpenAIQuizGen: () => void;
}

export const TeacherQuizTab: React.FC<TeacherQuizTabProps> = ({ onOpenAIQuizGen }) => {
  const [quizzes, setQuizzes] = useState<TeacherQuizItem[]>(mockTeacherQuizzes);
  const [showNewQuizModal, setShowNewQuizModal] = useState(false);
  const [selectedQuizAnalytics, setSelectedQuizAnalytics] = useState<TeacherQuizItem | null>(null);

  // New Quiz state
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [newQuizCourse, setNewQuizCourse] = useState('Income Tax Act 2023');
  const [timeLimit, setTimeLimit] = useState(25);
  const [passingScore, setPassingScore] = useState(70);

  const handleCreateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuizTitle) return;

    const created: TeacherQuizItem = {
      id: `quiz-${Date.now()}`,
      title: newQuizTitle,
      courseTitle: newQuizCourse,
      totalQuestions: 15,
      timeLimitMinutes: Number(timeLimit),
      passingPercentage: Number(passingScore),
      attemptsAllowed: 3,
      submissionsCount: 0,
      averageScore: 0,
      difficultQuestions: ['Section 163 Minimum Tax Sub-clauses']
    };

    setQuizzes([created, ...quizzes]);
    setShowNewQuizModal(false);
    alert(`Quiz "${newQuizTitle}" created! You can now add questions manually or run the AI generator.`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <span>Quiz & Bar Council Exam Engine</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Author MCQ tests with time limits, automated marking, and statutory justification keys.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAIQuizGen}
            className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI Quiz Generator</span>
          </button>
          <button
            onClick={() => setShowNewQuizModal(true)}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>New Quiz</span>
          </button>
        </div>
      </div>

      {/* Quizzes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((q) => (
          <div
            key={q.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between gap-4 hover:border-slate-700 transition"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {q.courseTitle}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {q.timeLimitMinutes} Mins
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">{q.title}</h3>

              <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 uppercase">Questions</div>
                  <div className="text-sm font-bold text-white mt-0.5">{q.totalQuestions}</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 uppercase">Avg Score</div>
                  <div className="text-sm font-bold text-amber-400 mt-0.5">{q.averageScore}%</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div className="text-[10px] text-slate-400 uppercase">Submissions</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{q.submissionsCount}</div>
                </div>
              </div>

              {q.difficultQuestions.length > 0 && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-start gap-2 text-xs">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-300">Struggling Area: </span>
                    <span className="text-rose-200/90 text-[11px]">{q.difficultQuestions[0]}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-[11px] text-slate-400">Passing: {q.passingPercentage}%</span>
              <button
                onClick={() => setSelectedQuizAnalytics(q)}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                <span>Question Analytics</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Modal */}
      {selectedQuizAnalytics && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Quiz Question Breakdown</h3>
              <button
                onClick={() => setSelectedQuizAnalytics(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="font-bold text-white">{selectedQuizAnalytics.title}</div>
              <div className="p-3 bg-slate-800 rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-300">1. Definition of Universal Self-Assessment</span>
                  <span className="text-emerald-400 font-bold">92% Correct</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">2. Tax Day Deadline for Non-Resident Bangladeshi</span>
                  <span className="text-emerald-400 font-bold">88% Correct</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">3. Section 163 Minimum Tax Thresholds</span>
                  <span className="text-rose-400 font-bold">42% Correct (Difficult)</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedQuizAnalytics(null)}
                className="px-4 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Quiz Modal */}
      {showNewQuizModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Create New Knowledge Quiz</h3>
              <button
                onClick={() => setShowNewQuizModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateQuiz} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Quiz Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bangladesh Income Tax Act 2023 Comprehensive Test"
                  value={newQuizTitle}
                  onChange={(e) => setNewQuizTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Course</label>
                <select
                  value={newQuizCourse}
                  onChange={(e) => setNewQuizCourse(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white"
                >
                  <option>Income Tax Act 2023</option>
                  <option>VAT & SD Act 2012</option>
                  <option>Bar Council Prep</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Time Limit (Mins)</label>
                  <input
                    type="number"
                    value={timeLimit}
                    onChange={(e) => setTimeLimit(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Passing %</label>
                  <input
                    type="number"
                    value={passingScore}
                    onChange={(e) => setPassingScore(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewQuizModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400"
                >
                  Save Quiz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

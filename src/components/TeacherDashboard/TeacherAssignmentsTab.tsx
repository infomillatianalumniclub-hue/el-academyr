import React, { useState } from 'react';
import {
  FileCheck,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  Download,
  Eye,
  FileText,
  Clock,
  X,
  Send
} from 'lucide-react';
import { mockTeacherAssignments, TeacherAssignmentReviewItem } from '../../data/teacherAdminMockData';

export const TeacherAssignmentsTab: React.FC = () => {
  const [submissions, setSubmissions] = useState<TeacherAssignmentReviewItem[]>(mockTeacherAssignments);
  const [selectedSub, setSelectedSub] = useState<TeacherAssignmentReviewItem | null>(null);
  const [gradingScore, setGradingScore] = useState<number>(90);
  const [gradingFeedback, setGradingFeedback] = useState<string>('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // New assignment form
  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('Income Tax Act 2023');
  const [newDeadline, setNewDeadline] = useState('15 Sep 2026');
  const [newMarks, setNewMarks] = useState(100);

  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSub) return;

    setSubmissions((prev) =>
      prev.map((s) =>
        s.id === selectedSub.id
          ? {
              ...s,
              status: 'Graded',
              obtainedMarks: gradingScore,
              feedback: gradingFeedback || 'Well structured and accurate reference to statutory provisions.'
            }
          : s
      )
    );

    alert(`Marks (${gradingScore}/${selectedSub.totalMarks}) and feedback recorded for ${selectedSub.studentName}!`);
    setSelectedSub(null);
  };

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    alert(`New Assignment "${newTitle}" created with ${newMarks} total marks and deadline ${newDeadline}!`);
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <FileCheck className="w-6 h-6 text-emerald-400" />
            <span>Practical Assignments & Grading Desk</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review submitted legal drafts, VAT calculations, and IT-11GA returns with rubric-based grading.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Assignment</span>
        </button>
      </div>

      {/* Submissions List */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Student Submissions Queue ({submissions.length})
          </span>
          <span className="text-[11px] text-amber-400 font-semibold">
            {submissions.filter((s) => s.status === 'Submitted' || s.status === 'Pending Review').length} Pending Assessment
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="p-4 font-semibold">Student</th>
                <th className="p-4 font-semibold">Assignment Title</th>
                <th className="p-4 font-semibold">Submitted File</th>
                <th className="p-4 font-semibold">Submission Date</th>
                <th className="p-4 font-semibold">Score / Status</th>
                <th className="p-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {submissions.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-bold text-white">
                    <div>{sub.studentName}</div>
                    <div className="text-[11px] text-slate-400 font-normal">{sub.courseTitle}</div>
                  </td>
                  <td className="p-4 text-slate-300 font-medium max-w-[240px]">
                    {sub.assignmentTitle}
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading student submission file: ${sub.submissionFileName}`);
                      }}
                      className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 font-mono text-[11px] max-w-[180px] truncate"
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{sub.submissionFileName}</span>
                    </a>
                  </td>
                  <td className="p-4 text-slate-400 font-mono text-[11px]">{sub.submittedAt}</td>
                  <td className="p-4">
                    {sub.status === 'Graded' ? (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {sub.obtainedMarks} / {sub.totalMarks} (Passed)
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Needs Grading
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => {
                        setSelectedSub(sub);
                        setGradingScore(sub.obtainedMarks || 85);
                        setGradingFeedback(sub.feedback || '');
                      }}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition"
                    >
                      {sub.status === 'Graded' ? 'Edit Grade' : 'Grade Now →'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grading Drawer / Modal */}
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Grade Student Submission</h3>
              <button
                onClick={() => setSelectedSub(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700 space-y-1 text-xs">
              <div className="font-bold text-white">{selectedSub.assignmentTitle}</div>
              <div className="text-slate-400">Student: <strong className="text-slate-200">{selectedSub.studentName}</strong></div>
              <div className="text-amber-400 font-mono text-[11px] pt-1">
                File: {selectedSub.submissionFileName}
              </div>
            </div>

            <form onSubmit={handleGradeSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Marks Awarded (out of {selectedSub.totalMarks}) *
                </label>
                <input
                  type="number"
                  min={0}
                  max={selectedSub.totalMarks}
                  required
                  value={gradingScore}
                  onChange={(e) => setGradingScore(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Written Feedback & Recommendations
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide statutory reference tips or drafting improvement remarks..."
                  value={gradingFeedback}
                  onChange={(e) => setGradingFeedback(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedSub(null)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow"
                >
                  Confirm Grade
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create New Assignment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Create New Assignment</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateAssignment} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Writ Petition 102 Fundamental Right Breach Draft"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Course</label>
                <select
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white"
                >
                  <option>Income Tax Act 2023</option>
                  <option>VAT & SD Act 2012</option>
                  <option>Bar Council Prep</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Total Marks</label>
                  <input
                    type="number"
                    value={newMarks}
                    onChange={(e) => setNewMarks(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Deadline</label>
                  <input
                    type="text"
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400"
                >
                  Create Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

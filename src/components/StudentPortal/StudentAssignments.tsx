import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  FileCheck, 
  Award, 
  MessageSquare,
  X,
  File,
  ChevronRight
} from 'lucide-react';
import { StudentAssignment } from '../../types';

interface StudentAssignmentsProps {
  assignments: StudentAssignment[];
  onUpdateAssignments?: (updated: StudentAssignment[]) => void;
}

export const StudentAssignments: React.FC<StudentAssignmentsProps> = ({
  assignments = [],
  onUpdateAssignments
}) => {
  const [assignmentList, setAssignmentList] = useState<StudentAssignment[]>(assignments || []);
  const [activeTabFilter, setActiveTabFilter] = useState<'All' | 'Pending' | 'Evaluated'>('All');
  const [submittingAssignment, setSubmittingAssignment] = useState<StudentAssignment | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const [studentComments, setStudentComments] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const safeList = assignmentList || [];

  const filteredAssignments = safeList.filter((asg) => {
    if (activeTabFilter === 'Pending') return asg.status === 'Pending Submission';
    if (activeTabFilter === 'Evaluated') return asg.status === 'Evaluated';
    return true;
  });

  const handleDownloadTemplate = (asg: StudentAssignment) => {
    alert(`Downloading assignment instructions and template: ${asg.templateFileName || 'Assignment_Case_Brief.pdf'}`);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFileName) {
      alert('Please select or drop your assignment solution file (.pdf, .xlsx, .docx).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const updated = assignmentList.map((a) => {
        if (a.id === submittingAssignment?.id) {
          return {
            ...a,
            status: 'Under Review' as const,
            submissionDate: 'Today, 2026-09-06',
            submittedFileName: uploadedFileName,
            submittedFileSize: '1.2 MB'
          };
        }
        return a;
      });

      setAssignmentList(updated);
      onUpdateAssignments?.(updated);
      setIsSubmitting(false);
      setSubmittingAssignment(null);
      setUploadedFileName('');
      setStudentComments('');
      alert('Assignment submitted successfully! Your submission is now under review by the faculty.');
    }, 900);
  };

  return (
    <div className="space-y-6" id="student-assignments-page">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Graded Practical Assessments
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Assignment Management System
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Download case studies, submit income tax returns & VAT Mushak drafts, and receive expert faculty feedback.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setActiveTabFilter('All')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTabFilter === 'All' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({assignmentList.length})
          </button>
          <button
            onClick={() => setActiveTabFilter('Pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTabFilter === 'Pending' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pending ({safeList.filter(a => a.status === 'Pending Submission').length})
          </button>
          <button
            onClick={() => setActiveTabFilter('Evaluated')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTabFilter === 'Evaluated' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Evaluated ({safeList.filter(a => a.status === 'Evaluated').length})
          </button>
        </div>
      </div>

      {/* Assignment Cards List */}
      <div className="space-y-4">
        {filteredAssignments.map((asg) => (
          <div
            key={asg.id}
            className={`bg-white rounded-3xl border p-6 shadow-xs hover:shadow-md transition-all space-y-4 ${
              asg.status === 'Pending Submission'
                ? 'border-rose-300'
                : asg.status === 'Evaluated'
                ? 'border-emerald-300'
                : 'border-slate-200'
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    asg.status === 'Pending Submission'
                      ? 'bg-rose-100 text-rose-800'
                      : asg.status === 'Under Review'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {asg.status}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">Course: <strong className="text-indigo-600">{asg.courseTitle}</strong></span>
                </div>
                <h3 className="text-lg font-black text-slate-900 font-display">
                  {asg.title}
                </h3>
              </div>

              {/* Deadline & Marks */}
              <div className="flex items-center gap-4 text-xs">
                <div className="text-right">
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Deadline</span>
                  <span className="font-extrabold text-rose-600">{asg.deadline}</span>
                </div>
                <div className="text-right pl-3 border-l border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Total Marks</span>
                  <span className="font-black text-slate-800 font-display">{asg.totalMarks} Marks</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
              <span className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px] block">
                Assignment Instructions:
              </span>
              <p className="leading-relaxed">{asg.instructions}</p>
            </div>

            {/* Evaluated Details if Evaluated */}
            {asg.status === 'Evaluated' && (
              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>Evaluated by: <strong>{asg.instructorName}</strong></span>
                    <span>• Submitted on: {asg.submissionDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-800">Grade: {asg.grade}</span>
                    <span className="px-3 py-1 bg-emerald-600 text-white font-black text-xs rounded-xl shadow-xs">
                      {asg.marksObtained} / {asg.totalMarks} Marks
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-emerald-200/80 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5" />
                    Instructor Feedback:
                  </span>
                  <p className="italic">"{asg.instructorFeedback}"</p>
                </div>
              </div>
            )}

            {/* Under review notice */}
            {asg.status === 'Under Review' && (
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Submitted file: <strong>{asg.submittedFileName}</strong> on {asg.submissionDate}. Faculty evaluation in progress.</span>
                </div>
              </div>
            )}

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                {asg.templateFileName && (
                  <button
                    onClick={() => handleDownloadTemplate(asg)}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Instructions & Template ({asg.templateFileSize || '1 MB'})</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                {asg.status === 'Pending Submission' && (
                  <button
                    onClick={() => setSubmittingAssignment(asg)}
                    className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center gap-1.5 transition-all"
                  >
                    <UploadCloud className="w-4 h-4" />
                    <span>Submit Assignment</span>
                  </button>
                )}

                {asg.status === 'Evaluated' && (
                  <button
                    onClick={() => alert(`Downloading marked assignment & grading rubric for: ${asg.title}`)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Download Graded Rubric</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Submission Modal */}
      {submittingAssignment && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Assignment Submission
                </span>
                <h3 className="text-lg font-black text-slate-900 font-display mt-1">
                  {submittingAssignment.title}
                </h3>
              </div>
              <button
                onClick={() => setSubmittingAssignment(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Drag and drop upload container */}
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                  dragActive
                    ? 'border-indigo-600 bg-indigo-50/80'
                    : uploadedFileName
                    ? 'border-emerald-500 bg-emerald-50/50'
                    : 'border-slate-300 hover:border-indigo-400 bg-slate-50'
                }`}
              >
                <input
                  type="file"
                  id="assignment-file-input"
                  onChange={handleFileChange}
                  accept=".pdf,.xlsx,.xls,.docx,.doc,.zip"
                  className="hidden"
                />
                <label htmlFor="assignment-file-input" className="cursor-pointer block space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800">
                      {uploadedFileName ? (
                        <span className="text-emerald-700 font-black flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          {uploadedFileName}
                        </span>
                      ) : (
                        'Click to browse or drag and drop your completed file'
                      )}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Supported formats: PDF, Excel (.xlsx), Word (.docx), ZIP (Max: 25 MB)
                    </p>
                  </div>
                </label>
              </div>

              {/* Student comments */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Submission Notes for Faculty (Optional):
                </label>
                <textarea
                  rows={3}
                  value={studentComments}
                  onChange={(e) => setStudentComments(e.target.value)}
                  placeholder="Mention any specific assumptions, statutory sections applied, or Mushak reconciliation notes..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSubmittingAssignment(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Uploading & Verifying Hash...</span>
                  ) : (
                    <>
                      <UploadCloud className="w-4 h-4" />
                      <span>Confirm & Upload Submission</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

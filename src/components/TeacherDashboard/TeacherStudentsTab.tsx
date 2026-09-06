import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Eye,
  Mail,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Calendar,
  X,
  Clock,
  TrendingUp
} from 'lucide-react';
import { mockTeacherStudents, TeacherStudentItem } from '../../data/teacherAdminMockData';

export const TeacherStudentsTab: React.FC = () => {
  const [students, setStudents] = useState<TeacherStudentItem[]>(mockTeacherStudents);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'High Performer' | 'Needs Support'>('All');
  const [selectedStudent, setSelectedStudent] = useState<TeacherStudentItem | null>(null);

  const filtered = students.filter((s) => {
    if (!s) return false;
    const q = (search || '').toLowerCase().trim();
    const name = (s.name || '').toLowerCase();
    const email = (s.email || '').toLowerCase();
    const course = (s.purchasedCourse || '').toLowerCase();
    const matchesSearch = !q || name.includes(q) || email.includes(q) || course.includes(q);

    const matchesStatus =
      statusFilter === 'All'
        ? true
        : statusFilter === 'High Performer'
        ? s.completionPercentage >= 80
        : s.completionPercentage < 50;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <Users className="w-6 h-6 text-blue-400" />
            <span>Enrolled Students & Performance Analytics</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Monitor student completion rates, practical assignment scores, and live class attendance records.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert('Broadcasting platform announcement email to all 5,420 registered students.')}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Email All Enrolled</span>
          </button>
        </div>
      </div>

      {/* Analytics Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Average Course Completion</div>
          <div className="text-2xl font-black text-white font-display mt-1">74.2%</div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +6.5% higher than platform average
          </div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Live Session Attendance</div>
          <div className="text-2xl font-black text-white font-display mt-1">88.5%</div>
          <div className="text-[11px] text-slate-400 mt-1">Consistent presence across 8 live batches</div>
        </div>

        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Certified Graduates</div>
          <div className="text-2xl font-black text-amber-400 font-display mt-1">1,820</div>
          <div className="text-[11px] text-slate-400 mt-1">Verified with cryptographically signed Sanad credentials</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {(['All', 'High Performer', 'Needs Support'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                statusFilter === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search student by name, email, or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      {/* Student List Table */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-850 text-slate-400 uppercase text-[10px] tracking-wider">
                <th className="p-4 font-semibold">Student Name & Contact</th>
                <th className="p-4 font-semibold">Enrolled Course</th>
                <th className="p-4 font-semibold">Enrolled Date</th>
                <th className="p-4 font-semibold">Progress %</th>
                <th className="p-4 font-semibold">Live Attendance</th>
                <th className="p-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filtered.map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/40 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-9 h-9 rounded-xl object-cover ring-1 ring-slate-700"
                      />
                      <div>
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <span>{student.name}</span>
                          {student.completionPercentage >= 80 && (
                            <Award className="w-3.5 h-3.5 text-amber-400" title="Top Performer" />
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400">{student.email}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{student.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-slate-200 font-medium max-w-[200px] truncate">
                    {student.purchasedCourse}
                  </td>
                  <td className="p-4 text-slate-400 font-mono">{student.enrolledDate}</td>
                  <td className="p-4">
                    <div className="w-28 space-y-1">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span className="text-white">{student.completionPercentage}%</span>
                        <span className="text-slate-400">{student.watchedLessonsCount}/{student.totalLessonsCount}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            student.completionPercentage >= 80
                              ? 'bg-emerald-500'
                              : student.completionPercentage >= 50
                              ? 'bg-amber-400'
                              : 'bg-rose-500'
                          }`}
                          style={{ width: `${student.completionPercentage}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      {student.attendanceRate}%
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 ml-auto"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-400" />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase">
                Student Progress Dossier
              </span>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={selectedStudent.avatar}
                alt={selectedStudent.name}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-amber-400/40"
              />
              <div>
                <h3 className="text-base font-bold text-white">{selectedStudent.name}</h3>
                <div className="text-xs text-slate-400">{selectedStudent.email} • {selectedStudent.phone}</div>
                <div className="text-[11px] text-amber-400/90 mt-0.5 font-medium">
                  {selectedStudent.purchasedCourse}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Watched Lessons</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {selectedStudent.watchedLessonsCount} / {selectedStudent.totalLessonsCount}
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Quiz Average</div>
                <div className="text-base font-bold text-amber-400 mt-0.5">
                  {selectedStudent.quizAverage}%
                </div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Assignments</div>
                <div className="text-base font-bold text-emerald-400 mt-0.5">
                  {selectedStudent.assignmentSubmissionsCount} Done
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white">Direct Instructor Feedback & Note</div>
              <p className="text-slate-300 text-[11px]">
                Student actively participated during Section 163 Minimum tax discussions. Practical universal IT-11GA return case submission received a grade of 94/100.
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  alert(`Direct WhatsApp message link sent to ${selectedStudent.phone}`);
                }}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
              >
                Message on WhatsApp
              </button>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-bold rounded-xl hover:bg-amber-400"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

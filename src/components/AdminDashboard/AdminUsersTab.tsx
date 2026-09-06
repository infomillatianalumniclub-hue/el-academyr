import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  UserPlus,
  Key,
  Shield,
  Eye,
  Edit,
  Trash2,
  X,
  Lock,
  Mail,
  Phone
} from 'lucide-react';
import {
  mockAdminTeachersList,
  mockAdminStaff,
  AdminTeacherApplication,
  AdminStaffRole
} from '../../data/teacherAdminMockData';

export const AdminUsersTab: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'instructors' | 'staff' | 'students'>('instructors');
  const [teachers, setTeachers] = useState<AdminTeacherApplication[]>(mockAdminTeachersList);
  const [staffList, setStaffList] = useState<AdminStaffRole[]>(mockAdminStaff);
  const [search, setSearch] = useState('');
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);

  // New staff form
  const [newStaff, setNewStaff] = useState({
    name: '',
    email: '',
    role: 'Content Manager' as 'Content Manager' | 'Finance Manager' | 'Support Manager',
    canView: true,
    canEdit: true,
    canDelete: false
  });

  const handleApproveTeacher = (id: string, name: string) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'Verified' } : t))
    );
    alert(`Faculty credentials and Supreme Court Bar Sanad verified for ${name}! Instructor portal active.`);
  };

  const handleSuspendTeacher = (id: string, name: string) => {
    setTeachers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'Suspended' } : t))
    );
    alert(`Access suspended for ${name}.`);
  };

  const handleAddStaffSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStaff.name || !newStaff.email) return;

    const created: AdminStaffRole = {
      id: `stf-${Date.now()}`,
      name: newStaff.name,
      email: newStaff.email,
      role: newStaff.role,
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      permissions: {
        canView: newStaff.canView,
        canEdit: newStaff.canEdit,
        canDelete: newStaff.canDelete
      },
      status: 'Active'
    };

    setStaffList([created, ...staffList]);
    setShowAddStaffModal(false);
    alert(`New staff member ${newStaff.name} granted ${newStaff.role} RBAC privileges!`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-purple-400" />
            <span>User Management & Role-Based Access Control (RBAC)</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Audit faculty credentials, manage staff security permissions, and supervise 25,000+ registered students.
          </p>
        </div>

        <button
          onClick={() => setShowAddStaffModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-600/20 flex items-center gap-2 transition active:scale-95"
        >
          <UserPlus className="w-4 h-4" />
          <span>Add Staff / Moderator</span>
        </button>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveSubTab('instructors')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'instructors'
              ? 'bg-purple-600 text-white shadow'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Faculty & Instructors ({teachers.length})
        </button>
        <button
          onClick={() => setActiveSubTab('staff')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'staff'
              ? 'bg-purple-600 text-white shadow'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Staff & Operations Roles ({staffList.length})
        </button>
        <button
          onClick={() => setActiveSubTab('students')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeSubTab === 'students'
              ? 'bg-purple-600 text-white shadow'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Students Directory (25,000+)
        </button>
      </div>

      {/* Search Filter */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search by name, email, phone, or Sanad certificate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400"
        />
      </div>

      {/* SUB-TAB 1: INSTRUCTORS */}
      {activeSubTab === 'instructors' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Faculty Sanad Verification Queue
            </span>
            <span className="text-xs text-amber-400 font-bold">
              {teachers.filter((t) => t.status === 'Pending').length} Pending Legal Verification
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <th className="p-4 font-semibold">Faculty Profile</th>
                  <th className="p-4 font-semibold">Sanad # / Affiliation</th>
                  <th className="p-4 font-semibold">Proposed Course</th>
                  <th className="p-4 font-semibold">Experience</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={teacher.avatarUrl}
                          alt={teacher.name}
                          className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-700"
                        />
                        <div>
                          <div className="font-bold text-white">{teacher.name}</div>
                          <div className="text-[11px] text-slate-400">{teacher.designation}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{teacher.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-mono text-amber-300 font-bold text-[11px]">
                        {teacher.barSanadNumber}
                      </div>
                      <div className="text-[10px] text-slate-400">{teacher.institution}</div>
                    </td>
                    <td className="p-4 text-slate-300 max-w-[200px] truncate">
                      {teacher.proposedCourseTitle}
                    </td>
                    <td className="p-4 text-slate-300 font-mono">
                      {teacher.experienceYears} Years
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                          teacher.status === 'Verified'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : teacher.status === 'Pending'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {teacher.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      {teacher.status === 'Pending' ? (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleApproveTeacher(teacher.id, teacher.name)}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleSuspendTeacher(teacher.id, teacher.name)}
                            className="px-3 py-1.5 bg-slate-800 hover:bg-rose-900 text-slate-300 hover:text-rose-200 rounded-xl text-xs font-bold transition"
                          >
                            Reject
                          </button>
                        </div>
                      ) : teacher.status === 'Verified' ? (
                        <button
                          onClick={() => handleSuspendTeacher(teacher.id, teacher.name)}
                          className="text-xs text-rose-400 hover:text-rose-300 font-semibold"
                        >
                          Suspend Access
                        </button>
                      ) : (
                        <button
                          onClick={() => handleApproveTeacher(teacher.id, teacher.name)}
                          className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                        >
                          Reactivate
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: STAFF & RBAC */}
      {activeSubTab === 'staff' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Platform Staff & Granular Permission Matrix
            </span>
            <span className="text-xs text-purple-400 font-bold">RBAC Enforced</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] tracking-wider">
                  <th className="p-4 font-semibold">Staff Member</th>
                  <th className="p-4 font-semibold">System Role</th>
                  <th className="p-4 font-semibold text-center">Can View</th>
                  <th className="p-4 font-semibold text-center">Can Edit</th>
                  <th className="p-4 font-semibold text-center">Can Delete</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {staffList.map((stf) => (
                  <tr key={stf.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 font-bold text-white">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={stf.avatarUrl}
                          alt={stf.name}
                          className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-700"
                        />
                        <div>
                          <div>{stf.name}</div>
                          <div className="text-[11px] text-slate-400 font-normal">{stf.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {stf.role}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      {stf.permissions.canView ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {stf.permissions.canEdit ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {stf.permissions.canDelete ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400">
                        {stf.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => alert(`Password reset link sent to ${stf.email}`)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                        title="Reset Credentials"
                      >
                        <Key className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: STUDENTS DIRECTORY SUMMARY */}
      {activeSubTab === 'students' && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Registered Students Database (25,000+)</h3>
              <p className="text-xs text-slate-400">Searchable by district, enrollment date, and bar exam completion.</p>
            </div>
            <button
              onClick={() => alert('Exporting full 25,000 student database CSV with national NID numbers...')}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700"
            >
              Export Students CSV
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-between text-xs">
            <div>
              <div className="font-bold text-white">Active Student Accounts</div>
              <div className="text-slate-400 text-[11px]">24,850 active accounts • 150 accounts under security verification</div>
            </div>
            <span className="text-emerald-400 font-bold">99.4% Verified</span>
          </div>
        </div>
      )}

      {/* Add Staff Modal */}
      {showAddStaffModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Add New Operations Staff</h3>
              <button
                onClick={() => setShowAddStaffModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddStaffSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mahfuzur Rahman"
                  value={newStaff.name}
                  onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Official Email *</label>
                <input
                  type="email"
                  required
                  placeholder="mahfuz@elawyers.com.bd"
                  value={newStaff.email}
                  onChange={(e) => setNewStaff({ ...newStaff, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">RBAC Role *</label>
                <select
                  value={newStaff.role}
                  onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value as any })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                >
                  <option value="Content Manager">Content Manager</option>
                  <option value="Finance Manager">Finance Manager</option>
                  <option value="Support Manager">Support Manager</option>
                </select>
              </div>

              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-bold text-slate-300 uppercase">Permissions</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={newStaff.canView}
                      onChange={(e) => setNewStaff({ ...newStaff, canView: e.target.checked })}
                    />
                    <span>View</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={newStaff.canEdit}
                      onChange={(e) => setNewStaff({ ...newStaff, canEdit: e.target.checked })}
                    />
                    <span>Edit</span>
                  </label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-slate-300">
                    <input
                      type="checkbox"
                      checked={newStaff.canDelete}
                      onChange={(e) => setNewStaff({ ...newStaff, canDelete: e.target.checked })}
                    />
                    <span>Delete</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddStaffModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl"
                >
                  Create Staff Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

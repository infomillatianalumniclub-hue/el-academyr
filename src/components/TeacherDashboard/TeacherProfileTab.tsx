import React, { useState } from 'react';
import {
  UserCheck,
  Award,
  BookOpen,
  Users,
  Star,
  Building,
  Mail,
  Phone,
  Globe,
  Save,
  CheckCircle2,
  Camera,
  ShieldCheck
} from 'lucide-react';
import { mockTeacherProfile, TeacherProfileData } from '../../data/teacherAdminMockData';

export const TeacherProfileTab: React.FC = () => {
  const [profile, setProfile] = useState<TeacherProfileData>(mockTeacherProfile);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
          <UserCheck className="w-6 h-6 text-amber-400" />
          <span>Instructor Credentials & Public Faculty Profile</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Update Supreme Court Bar enrollment details, biography, and student-facing certifications.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>Faculty profile updated successfully and synchronized with public directory!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card & Avatar */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl flex flex-col sm:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover ring-4 ring-amber-400/30 shadow-xl"
            />
            <button
              type="button"
              onClick={() => {
                const url = prompt('Enter new image URL:', profile.photoUrl);
                if (url) setProfile({ ...profile, photoUrl: url });
              }}
              className="absolute -bottom-2 -right-2 p-2 bg-amber-500 text-slate-950 rounded-xl hover:bg-amber-400 shadow"
              title="Change Photo"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1 text-center sm:text-left flex-1">
            <div className="text-lg font-black text-white">{profile.name}</div>
            <div className="text-xs text-amber-400 font-semibold">{profile.title}</div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Sanad: {profile.barSanadNumber}
              </span>
              <span>•</span>
              <span>{profile.totalExperienceYears}+ Years Experience</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">★ {profile.averageRating} (420 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Form Fields Grid */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Personal & Academic Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Legal Name *</label>
              <input
                type="text"
                required
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Professional Title *</label>
              <input
                type="text"
                required
                value={profile.title}
                onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Official Email *</label>
              <input
                type="email"
                required
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Chamber Phone *</label>
              <input
                type="text"
                required
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Bar Council Sanad Registration Number *
              </label>
              <input
                type="text"
                value={profile.barSanadNumber}
                onChange={(e) => setProfile({ ...profile, barSanadNumber: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-amber-300 font-mono font-bold focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Supreme Court Bar Association Membership ID
              </label>
              <input
                type="text"
                value={profile.supremeCourtMembershipId}
                onChange={(e) => setProfile({ ...profile, supremeCourtMembershipId: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="text-xs pt-2">
            <label className="block text-slate-300 font-semibold mb-1">Academic Qualifications</label>
            <input
              type="text"
              value={profile.qualification}
              onChange={(e) => setProfile({ ...profile, qualification: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="text-xs pt-2">
            <label className="block text-slate-300 font-semibold mb-1">Professional Faculty Biography</label>
            <textarea
              rows={4}
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 hover:from-amber-400 hover:to-yellow-300 transition"
          >
            <Save className="w-4 h-4" />
            <span>Save Faculty Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
};

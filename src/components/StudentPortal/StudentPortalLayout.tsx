import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  Award, 
  BarChart3, 
  FolderDown, 
  MessageSquare, 
  CreditCard, 
  User, 
  Settings, 
  Bell, 
  Search, 
  LogOut, 
  Menu, 
  X, 
  Scale, 
  PlayCircle,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { StudentFullProfile, StudentNotification } from '../../types';

interface StudentPortalLayoutProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  profile: StudentFullProfile;
  notifications?: StudentNotification[];
  children: React.ReactNode;
  onSwitchRole?: (role: 'admin' | 'student' | 'instructor') => void;
}

export const StudentPortalLayout: React.FC<StudentPortalLayoutProps> = ({
  currentTab,
  onTabChange,
  profile,
  notifications = [],
  children,
  onSwitchRole
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const unreadNotifications = (notifications || []).filter(n => !n.read).length;

  const navItems = [
    { id: 'student-home', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'student-courses', label: 'My Courses', icon: BookOpen, badge: '12' },
    { id: 'student-player', label: 'Learning Portal', icon: PlayCircle },
    { id: 'student-live', label: 'Live Classes', icon: Video, alert: true },
    { id: 'student-assignments', label: 'Assignments', icon: FileText, badge: '1 Due' },
    { id: 'student-quizzes', label: 'Quizzes & Exams', icon: HelpCircle },
    { id: 'student-certificates', label: 'Certificates', icon: Award, badge: '5' },
    { id: 'student-analytics', label: 'Learning Analytics', icon: BarChart3 },
    { id: 'student-resources', label: 'Resource Library', icon: FolderDown },
    { id: 'student-community', label: 'Community Forum', icon: MessageSquare },
    { id: 'student-payments', label: 'Payment History', icon: CreditCard },
    { id: 'student-profile', label: 'Profile & Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans" id="student-portal-root">
      {/* ================= TOP APPLICATION HEADER ================= */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo and Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div 
              onClick={() => onTabChange('student-home')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Scale className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base tracking-tight font-display text-white">
                    E-LAWYERS
                  </span>
                  <span className="text-amber-400 font-extrabold text-xs px-1.5 py-0.2 bg-amber-400/20 rounded border border-amber-400/30">
                    ACADEMY
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block font-semibold">
                  Professional LMS • Student Portal
                </span>
              </div>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search lectures, live sessions, tax forms..."
                className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          {/* Right Header Controls: Notification Bell, Help, Profile */}
          <div className="flex items-center gap-2.5">
            {/* Live Class Quick Pill */}
            <button
              onClick={() => onTabChange('student-live')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold hover:bg-rose-500/30 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>Live: 8:00 PM</span>
            </button>

            {/* Notification Bell */}
            <button
              onClick={() => onTabChange('student-notifications')}
              className="relative p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-black text-white flex items-center justify-center animate-pulse">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Profile Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-8 h-8 rounded-lg object-cover border border-amber-400/80"
                />
                <span className="hidden lg:block text-xs font-bold text-slate-200">
                  {profile.name}
                </span>
              </button>

              {profileDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 text-xs space-y-1"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  <div className="p-2 border-b border-slate-800 text-left">
                    <span className="font-extrabold text-white block">{profile.name}</span>
                    <span className="text-[10px] text-slate-400">{profile.email}</span>
                  </div>

                  <button
                    onClick={() => onTabChange('student-profile')}
                    className="w-full text-left p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    <span>View Full Profile</span>
                  </button>

                  <button
                    onClick={() => onTabChange('student-certificates')}
                    className="w-full text-left p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 flex items-center gap-2"
                  >
                    <Award className="w-4 h-4" />
                    <span>My Certificates ({profile.certificatesEarnedCount})</span>
                  </button>

                  {onSwitchRole && (
                    <div className="pt-1 border-t border-slate-800">
                      <span className="px-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        Portal Switcher
                      </span>
                      <button
                        onClick={() => onSwitchRole('admin')}
                        className="w-full text-left p-2 rounded-lg text-amber-400 hover:bg-slate-800 flex items-center justify-between"
                      >
                        <span>Switch to Admin CMS</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN BODY CONTAINER: SIDEBAR + CONTENT ================= */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1 flex gap-6">
        {/* DESKTOP LMS SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-4">
          <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-xs space-y-1">
            <span className="px-3 text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">
              LMS Learning Suite
            </span>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                      isActive 
                        ? 'bg-amber-400 text-slate-950' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}

                  {item.alert && (
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Academy Student Support Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-5 rounded-3xl border border-indigo-800 shadow-xs space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              Student Helpdesk
            </span>
            <h4 className="text-xs font-bold leading-snug">
              Need technical or course counseling?
            </h4>
            <p className="text-[11px] text-slate-300">
              Direct hotline for Bar Council & NBR exam queries.
            </p>
            <div className="pt-2">
              <a
                href="tel:+8801711000000"
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-[11px] font-bold rounded-xl border border-white/20 flex items-center justify-center gap-1.5 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>+880 1711-000000</span>
              </a>
            </div>
          </div>
        </aside>

        {/* MOBILE SLIDE-OUT MENU */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-slate-950/80 backdrop-blur-md flex">
            <div className="w-72 bg-white h-full p-5 overflow-y-auto space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-indigo-600" />
                  <span className="font-extrabold text-sm text-slate-900">E-Lawyers Academy</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onTabChange(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)}></div>
          </div>
        )}

        {/* MAIN DISPLAY AREA */}
        <main className="flex-1 min-w-0 pb-12" id="student-main-content">
          {children}
        </main>
      </div>

      {/* MOBILE BOTTOM NAVIGATION BAR FOR PHONES */}
      <nav className="lg:hidden sticky bottom-0 z-40 bg-white border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg">
        <button
          onClick={() => onTabChange('student-home')}
          className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-bold ${
            currentTab === 'student-home' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Home</span>
        </button>

        <button
          onClick={() => onTabChange('student-courses')}
          className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-bold ${
            currentTab === 'student-courses' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>Courses</span>
        </button>

        <button
          onClick={() => onTabChange('student-live')}
          className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-bold relative ${
            currentTab === 'student-live' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <Video className="w-5 h-5" />
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 absolute top-1 right-2"></span>
          <span>Live</span>
        </button>

        <button
          onClick={() => onTabChange('student-assignments')}
          className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-bold ${
            currentTab === 'student-assignments' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Cases</span>
        </button>

        <button
          onClick={() => onTabChange('student-profile')}
          className={`flex flex-col items-center gap-0.5 p-1 text-[10px] font-bold ${
            currentTab === 'student-profile' ? 'text-indigo-600' : 'text-slate-400'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};

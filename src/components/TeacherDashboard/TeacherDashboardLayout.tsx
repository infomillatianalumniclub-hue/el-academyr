import React, { useState } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  FolderTree,
  Video,
  Radio,
  Users,
  FileCheck,
  HelpCircle,
  Star,
  BarChart3,
  DollarSign,
  UserCheck,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Plus
} from 'lucide-react';
import { mockTeacherProfile } from '../../data/teacherAdminMockData';

export type TeacherTab =
  | 'dashboard'
  | 'courses'
  | 'builder'
  | 'videos'
  | 'live'
  | 'students'
  | 'assignments'
  | 'quiz'
  | 'reviews'
  | 'analytics'
  | 'earnings'
  | 'profile';

interface TeacherDashboardLayoutProps {
  currentTab: TeacherTab;
  onTabChange: (tab: TeacherTab) => void;
  onSwitchRole: (role: 'public' | 'student' | 'admin') => void;
  onCreateCourseOpen?: () => void;
  children: React.ReactNode;
}

export const TeacherDashboardLayout: React.FC<TeacherDashboardLayoutProps> = ({
  currentTab,
  onTabChange,
  onSwitchRole,
  onCreateCourseOpen,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'dashboard' as TeacherTab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'courses' as TeacherTab, label: 'Courses', icon: BookOpen, count: 15 },
    { id: 'builder' as TeacherTab, label: 'Course Builder', icon: FolderTree, badge: 'Drag & Drop' },
    { id: 'videos' as TeacherTab, label: 'Video Library', icon: Video },
    { id: 'live' as TeacherTab, label: 'Live Classes', icon: Radio, pulse: true },
    { id: 'students' as TeacherTab, label: 'Students', icon: Users, count: '5.4k' },
    { id: 'assignments' as TeacherTab, label: 'Assignments', icon: FileCheck, count: 4 },
    { id: 'quiz' as TeacherTab, label: 'Quiz & Exams', icon: HelpCircle },
    { id: 'reviews' as TeacherTab, label: 'Reviews', icon: Star, count: '4.8' },
    { id: 'analytics' as TeacherTab, label: 'Analytics', icon: BarChart3 },
    { id: 'earnings' as TeacherTab, label: 'Earnings', icon: DollarSign, badge: '৳8.5L' },
    { id: 'profile' as TeacherTab, label: 'Profile', icon: UserCheck }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-sm">
            EL
          </div>
          <div>
            <span className="font-display font-bold text-sm text-white">E-Lawyers Academy</span>
            <span className="block text-[10px] text-amber-400 font-medium">Instructor Suite</span>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 z-40 h-screen w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 flex flex-col transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand / Logo */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20">
              EL
            </div>
            <div>
              <h1 className="font-display font-black text-base tracking-tight text-white flex items-center gap-1.5">
                E-Lawyers <span className="text-amber-400 font-normal text-xs px-1.5 py-0.5 bg-amber-400/10 rounded-md border border-amber-400/20">LMS</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Instructor Control Center</p>
            </div>
          </div>
        </div>

        {/* Instructor Mini Badge */}
        <div className="mx-3 mt-4 p-3 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/60 flex items-center gap-3">
          <img
            src={mockTeacherProfile.photoUrl}
            alt={mockTeacherProfile.name}
            className="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-400/40"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">{mockTeacherProfile.name}</div>
            <div className="text-[10px] text-amber-400 font-medium truncate">Senior Faculty • SCBA</div>
            <div className="text-[9px] text-slate-400 mt-0.5">5,420 Enrolled Students</div>
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="px-3 pt-3">
          <button
            onClick={() => {
              if (onCreateCourseOpen) onCreateCourseOpen();
              else onTabChange('courses');
            }}
            className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs rounded-xl shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            <span>Create New Course</span>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5">
            Teaching & Content
          </div>
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.pulse && (
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                )}
                {item.badge && !isActive && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700">
                    {item.badge}
                  </span>
                )}
                {item.count && !isActive && (
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-3 py-1.5">
            Students & Assessment
          </div>
          {navItems.slice(5, 9).map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count && !isActive && (
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-1.5 py-0.5 rounded">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}

          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 pt-3 py-1.5">
            Business & Settings
          </div>
          {navItems.slice(9).map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && !isActive && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Role Switcher & Sign Out */}
        <div className="p-3 border-t border-slate-800 space-y-2 bg-slate-900/50">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
            Switch Platform View
          </div>
          <div className="grid grid-cols-3 gap-1 text-[10px] font-bold">
            <button
              onClick={() => onSwitchRole('student')}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition text-center"
            >
              Student
            </button>
            <button
              onClick={() => onSwitchRole('admin')}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-purple-200 rounded-lg transition text-center"
            >
              Admin
            </button>
            <button
              onClick={() => onSwitchRole('public')}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 rounded-lg transition text-center"
            >
              Public
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-slate-200 capitalize">
              <span className="text-slate-400">Instructor /</span> {currentTab.replace('-', ' ')}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Live Status */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[11px] font-medium text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>Next Live Class: Tonight at 8:00 PM</span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-400 rounded-full" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-white">Instructor Notifications</span>
                    <span className="text-[10px] text-amber-400 cursor-pointer">Mark all as read</span>
                  </div>
                  <div className="py-2 space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="font-semibold text-white">New Assignment Submission</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Advocate Farhana Akter submitted Universal Return Case Study (IT-11GA).
                      </p>
                      <span className="text-[10px] text-slate-400">10 mins ago</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="font-semibold text-white">Payout Released</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        ৳1,48,000 transferred to your DBBL Account for August student enrolments.
                      </p>
                      <span className="text-[10px] text-emerald-400 font-semibold">Processed</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div
              onClick={() => onTabChange('profile')}
              className="flex items-center gap-2 cursor-pointer p-1 rounded-xl hover:bg-slate-800 transition"
            >
              <img
                src={mockTeacherProfile.photoUrl}
                alt="Profile"
                className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-700"
              />
              <span className="hidden sm:inline text-xs font-bold text-slate-200">
                Mr. Ahmed
              </span>
            </div>
          </div>
        </header>

        {/* Dynamic Tab Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Scale, 
  GraduationCap, 
  UserCheck, 
  ShieldAlert, 
  Search, 
  Sparkles, 
  Bell, 
  User, 
  BookOpen, 
  FileText, 
  Award, 
  CreditCard, 
  Menu, 
  X,
  ChevronDown,
  Trophy
} from 'lucide-react';
import { UserRole } from '../types';

interface HeaderProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenAIAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRole,
  onRoleChange,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  onOpenAIAssistant,
}) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const notifications = [
    { id: 'n1', title: 'Live Class Reminder', message: 'Your VAT class starts tomorrow at 8 PM.', time: '10m ago' },
    { id: 'n2', title: 'New Lesson Uploaded', message: 'Module 02: Mushak 9.1 Return Filing is now live.', time: '2h ago' },
    { id: 'n3', title: 'Quiz Score Released', message: 'Income Tax Module Test Score: 85% (Passed)', time: '1d ago' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-xl border-b border-slate-800">
      {/* Top Bar - Role Switcher & Announcement */}
      <div className="bg-slate-950 px-4 py-2 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-indigo-300 font-medium">
            <span className="bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-bold tracking-wide text-[10px] uppercase">
              NBR & Bar Aligned
            </span>
            <span className="text-slate-300 hidden sm:inline">
              E-Lawyers Academy Central Learning Ecosystem
            </span>
          </div>

          {/* Role Switcher Pills */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <span className="text-[10px] text-slate-400 px-2 font-bold uppercase tracking-wider hidden sm:inline">View Mode:</span>
            <button
              onClick={() => onRoleChange('Public')}
              className={`px-3 py-1 rounded-lg transition-all font-bold text-xs flex items-center gap-1.5 ${
                currentRole === 'Public'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              Public
            </button>
            <button
              onClick={() => onRoleChange('Student')}
              className={`px-3 py-1 rounded-lg transition-all font-bold text-xs flex items-center gap-1.5 ${
                currentRole === 'Student'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Student Portal
            </button>
            <button
              onClick={() => onRoleChange('Teacher')}
              className={`px-3 py-1 rounded-lg transition-all font-bold text-xs flex items-center gap-1.5 ${
                currentRole === 'Teacher'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Teacher
            </button>
            <button
              onClick={() => onRoleChange('Admin')}
              className={`px-3 py-1 rounded-lg transition-all font-bold text-xs flex items-center gap-1.5 ${
                currentRole === 'Admin'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onRoleChange('Public')}>
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30 text-white font-black text-xl">
            E
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white flex items-center gap-1.5 font-display">
              E-LAWYERS <span className="text-indigo-400 font-bold">ACADEMY</span>
            </div>
            <p className="text-[9px] text-slate-400 -mt-1 tracking-widest uppercase font-bold">
              Law, Tax & Corporate Ecosystem
            </p>
          </div>
        </div>

        {/* Global Search Bar */}
        {(currentRole === 'Public' || currentRole === 'Student') && (
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search Income Tax 2023, VAT Mushak 6.1, Bar Exam prep..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-800/90 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all"
              />
            </div>
          </div>
        )}

        {/* Dynamic Navigation Tabs based on Role */}
        <nav className="hidden md:flex items-center gap-1">
          {currentRole === 'Public' && (
            <>
              <button
                onClick={() => onTabChange('home')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'home' ? 'text-indigo-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onTabChange('courses')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'courses' ? 'text-indigo-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => onTabChange('resources')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'resources' ? 'text-indigo-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                Resource Library
              </button>
              <button
                onClick={() => onTabChange('pricing')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'pricing' ? 'text-indigo-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                Pricing & Plans
              </button>
            </>
          )}

          {currentRole === 'Student' && (
            <>
              <button
                onClick={() => onTabChange('student-home')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'student-home' || activeTab === 'student-dashboard' ? 'text-amber-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => onTabChange('student-courses')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                  activeTab === 'student-courses' ? 'text-amber-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                My Courses
              </button>
              <button
                onClick={() => onTabChange('student-live')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
                  activeTab === 'student-live' ? 'text-rose-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping"></span>
                <span>Live Classes</span>
              </button>
              <button
                onClick={() => onTabChange('student-leaderboard')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${
                  activeTab === 'student-leaderboard' ? 'text-amber-400 bg-slate-800 border border-slate-700' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Trophy className="w-3.5 h-3.5" />
                <span>Leaderboard</span>
              </button>
            </>
          )}
        </nav>

        {/* Action Controls & AI Features */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenAIAssistant}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white text-xs font-extrabold rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
          >
            <Sparkles className="w-4 h-4 fill-white" />
            <span className="hidden sm:inline">AI Assistant</span>
          </button>

          {/* Profile Badge */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            <div className="w-8 h-8 rounded-xl bg-indigo-900 border border-indigo-700 flex items-center justify-center text-indigo-200 font-black text-xs">
              MR
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

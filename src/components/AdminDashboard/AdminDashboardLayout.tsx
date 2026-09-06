import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  BookCheck,
  CreditCard,
  Award,
  ShieldAlert,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  LogOut,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { mockAdminStats } from '../../data/teacherAdminMockData';

export type AdminTab =
  | 'overview'
  | 'users'
  | 'courses'
  | 'finance'
  | 'certificates'
  | 'moderation'
  | 'reports'
  | 'settings';

interface AdminDashboardLayoutProps {
  currentTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onSwitchRole: (role: 'public' | 'student' | 'teacher') => void;
  children: React.ReactNode;
}

export const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  currentTab,
  onTabChange,
  onSwitchRole,
  children
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'overview' as AdminTab, label: 'Overview', icon: LayoutDashboard },
    { id: 'users' as AdminTab, label: 'User & Faculty (RBAC)', icon: Users, badge: '120 Faculty' },
    { id: 'courses' as AdminTab, label: 'Course Review Desk', icon: BookCheck, alertCount: mockAdminStats.pendingCourseReviewsCount },
    { id: 'finance' as AdminTab, label: 'Finance & Refunds', icon: CreditCard, alertCount: mockAdminStats.pendingRefundRequestsCount },
    { id: 'certificates' as AdminTab, label: 'Certificates & Sanad', icon: Award },
    { id: 'moderation' as AdminTab, label: 'Content Moderation', icon: ShieldAlert },
    { id: 'reports' as AdminTab, label: 'Analytics & Reports', icon: BarChart3 },
    { id: 'settings' as AdminTab, label: 'System Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow">
            EL
          </div>
          <div>
            <span className="font-display font-bold text-sm text-white">E-Lawyers Academy</span>
            <span className="block text-[10px] text-purple-400 font-medium">Super Admin Console</span>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Admin Sidebar */}
      <aside
        className={`fixed md:sticky top-0 z-40 h-screen w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 flex flex-col transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-purple-700 flex items-center justify-center text-white font-black shadow-lg shadow-purple-500/20">
              EL
            </div>
            <div>
              <h1 className="font-display font-black text-base tracking-tight text-white flex items-center gap-1.5">
                E-Lawyers <span className="text-purple-400 font-normal text-xs px-1.5 py-0.5 bg-purple-400/10 rounded-md border border-purple-400/20">HQ</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium">Central Operations Portal</p>
            </div>
          </div>
        </div>

        {/* Super Admin Badge */}
        <div className="mx-3 mt-4 p-3 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-850 border border-purple-500/20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">Central Administrator</div>
            <div className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
              Root Authority
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5">25,000 Enrolled Students</div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-700">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
            Academy Governance
          </div>
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
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.alertCount !== undefined && item.alertCount > 0 && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-rose-500 text-white">
                    {item.alertCount}
                  </span>
                )}
                {item.badge && !isActive && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-purple-300 border border-slate-700">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Switch Platform Role */}
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
              onClick={() => onSwitchRole('teacher')}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-amber-300 hover:text-amber-200 rounded-lg transition text-center"
            >
              Teacher
            </button>
            <button
              onClick={() => onSwitchRole('public')}
              className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-blue-300 hover:text-blue-200 rounded-lg transition text-center"
            >
              Public
            </button>
          </div>
        </div>
      </aside>

      {/* Main Admin Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-slate-200 capitalize">
              <span className="text-slate-400">HQ Admin /</span> {currentTab.replace('-', ' ')}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick System Health Tag */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[11px] font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational (SSLCommerz & Zoom)</span>
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 z-50">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs font-bold text-white">Pending Operational Actions</span>
                    <span className="text-[10px] text-purple-400 cursor-pointer">Clear</span>
                  </div>
                  <div className="py-2 space-y-2.5 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="font-semibold text-white">Course Awaiting Approval</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Barrister Nafis Imtiaz submitted "Admiralty & Maritime Law Litigation".
                      </p>
                      <span className="text-[10px] text-purple-400 font-bold">Needs Review</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      <div className="font-semibold text-white">Refund Ticket #REF-01</div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        Ahsan Habib requested ৳4,200 refund for duplicate course purchase.
                      </p>
                      <span className="text-[10px] text-rose-400 font-bold">Pending Approval</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Avatar */}
            <div className="flex items-center gap-2 p-1 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-xs text-white">
                HQ
              </div>
              <span className="hidden sm:inline text-xs font-bold text-slate-200">
                SuperAdmin
              </span>
            </div>
          </div>
        </header>

        {/* Tab View Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

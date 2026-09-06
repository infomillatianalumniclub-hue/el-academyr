import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  EyeOff,
  AlertTriangle,
  UserX,
  MessageSquare,
  Search,
  Filter,
  Check
} from 'lucide-react';

interface FlaggedItem {
  id: string;
  authorName: string;
  authorEmail: string;
  courseTitle: string;
  content: string;
  flagReason: string;
  flagCount: number;
  date: string;
  status: 'Pending' | 'Dismissed' | 'Hidden';
}

export const AdminModerationTab: React.FC = () => {
  const [flaggedItems, setFlaggedItems] = useState<FlaggedItem[]>([
    {
      id: 'flg-01',
      authorName: 'Rashedul Islam',
      authorEmail: 'rashed@gmail.com',
      courseTitle: 'Comprehensive Income Tax Act 2023',
      content: 'Can someone share cracked PDF notes or drive links for the entire syllabus? Telegram link here...',
      flagReason: 'Copyright Infringement & Spam Links',
      flagCount: 5,
      date: 'Today, 11:30 AM',
      status: 'Pending'
    },
    {
      id: 'flg-02',
      authorName: 'Anonymous Student',
      authorEmail: 'anon291@yahoo.com',
      courseTitle: 'VAT & Supplementary Duty Act 2012',
      content: 'This tax assessment practice question has an outdated NBR SRO number, instructor has not responded for 2 weeks.',
      flagReason: 'Negative Feedback / Needs Instructor Attention',
      flagCount: 2,
      date: 'Yesterday',
      status: 'Pending'
    },
    {
      id: 'flg-03',
      authorName: 'Shohel Rana',
      authorEmail: 'shohel@lawchambers.bd',
      courseTitle: 'Bangladesh Bar Council Prep',
      content: 'Selling solved 10-year Bar Council question bank papers. Contact WhatsApp 01700...',
      flagReason: 'Commercial Solicitation / Unauthorized Sale',
      flagCount: 8,
      date: '03 Sep 2026',
      status: 'Pending'
    }
  ]);

  const handleDismiss = (id: string) => {
    setFlaggedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Dismissed' } : item))
    );
  };

  const handleHideContent = (id: string) => {
    setFlaggedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Hidden' } : item))
    );
    alert('Content hidden from community discussions!');
  };

  const handleBanUser = (authorName: string) => {
    alert(`User ${authorName} has been restricted from participating in academy forums.`);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
          <ShieldAlert className="w-6 h-6 text-rose-400" />
          <span>Community Content Moderation & Forum Governance</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Review reported questions, inappropriate student comments, and enforce professional community guidelines.
        </p>
      </div>

      {/* Flagged Items Queue */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Reported Submissions ({flaggedItems.filter((i) => i.status === 'Pending').length} Pending)
          </span>
          <span className="text-xs text-slate-400">Automated AI Toxicity Scan: Active</span>
        </div>

        <div className="space-y-3">
          {flaggedItems.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition ${
                item.status === 'Hidden'
                  ? 'bg-slate-900/40 border-slate-800 opacity-60'
                  : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-white">{item.authorName}</span>
                    <span className="text-xs text-slate-400 ml-2 font-mono">({item.authorEmail})</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 font-bold border border-rose-500/20">
                    {item.flagReason} ({item.flagCount} flags)
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">{item.date}</span>
                </div>
              </div>

              <div className="py-3">
                <div className="text-[11px] text-purple-400 font-semibold mb-1">
                  Course: {item.courseTitle}
                </div>
                <p className="text-xs text-slate-200 bg-slate-850 p-3 rounded-xl border border-slate-800 leading-relaxed font-sans">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-bold text-slate-400">
                  Status: <strong className="text-white">{item.status}</strong>
                </span>

                {item.status === 'Pending' && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDismiss(item.id)}
                      className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-bold transition"
                    >
                      Dismiss Flag
                    </button>
                    <button
                      onClick={() => handleHideContent(item.id)}
                      className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
                    >
                      <EyeOff className="w-3.5 h-3.5" />
                      <span>Take Down</span>
                    </button>
                    <button
                      onClick={() => handleBanUser(item.authorName)}
                      className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
                    >
                      <UserX className="w-3.5 h-3.5" />
                      <span>Suspend Student</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

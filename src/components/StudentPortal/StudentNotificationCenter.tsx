import React, { useState } from 'react';
import { 
  Bell, 
  CheckCircle2, 
  Video, 
  FileText, 
  HelpCircle, 
  Award, 
  Volume2, 
  Clock, 
  ArrowRight,
  Check,
  Filter
} from 'lucide-react';
import { mockStudentNotifications } from '../../data/studentMockData';
import { StudentNotification } from '../../types';

interface StudentNotificationCenterProps {
  onNavigateTab?: (tab: string) => void;
}

export const StudentNotificationCenter: React.FC<StudentNotificationCenterProps> = ({
  onNavigateTab
}) => {
  const [notifications, setNotifications] = useState<StudentNotification[]>(mockStudentNotifications);
  const [filterType, setFilterType] = useState<string>('all');

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markSingleAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const filtered = notifications.filter(n => {
    if (filterType === 'unread') return !n.read;
    if (filterType !== 'all') return n.type === filterType;
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'live_class':
        return <Video className="w-4 h-4 text-blue-600" />;
      case 'assignment':
        return <FileText className="w-4 h-4 text-purple-600" />;
      case 'quiz':
        return <HelpCircle className="w-4 h-4 text-amber-600" />;
      case 'certificate':
        return <Award className="w-4 h-4 text-emerald-600" />;
      case 'lesson':
        return <CheckCircle2 className="w-4 h-4 text-indigo-600" />;
      default:
        return <Volume2 className="w-4 h-4 text-slate-600" />;
    }
  };

  const handleAction = (item: StudentNotification) => {
    markSingleAsRead(item.id);
    if (!item.actionUrl) return;

    if (item.actionUrl.includes('live')) onNavigateTab?.('student-live');
    else if (item.actionUrl.includes('assignments')) onNavigateTab?.('student-assignments');
    else if (item.actionUrl.includes('quizzes')) onNavigateTab?.('student-quizzes');
    else if (item.actionUrl.includes('certificates')) onNavigateTab?.('student-certificates');
    else if (item.actionUrl.includes('player')) onNavigateTab?.('student-player');
    else if (item.actionUrl.includes('courses')) onNavigateTab?.('student-courses');
  };

  return (
    <div className="space-y-6" id="student-notification-center">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Academy Notification Broadcasts
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Notification Center
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Stay updated with live class start alerts, instructor feedback, quiz results, and official NBR circulars.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all"
            >
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Mark All as Read ({unreadCount})</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filterType === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All Updates ({notifications.length})
        </button>
        <button
          onClick={() => setFilterType('unread')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filterType === 'unread' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Unread ({unreadCount})
        </button>
        <button
          onClick={() => setFilterType('live_class')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filterType === 'live_class' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Live Classes
        </button>
        <button
          onClick={() => setFilterType('assignment')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filterType === 'assignment' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Assignments
        </button>
        <button
          onClick={() => setFilterType('certificate')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
            filterType === 'certificate' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Certificates
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => handleAction(item)}
            className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
              !item.read
                ? 'bg-indigo-50/40 border-indigo-200 shadow-xs'
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                {getIcon(item.type)}
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-black text-slate-900 font-display">
                    {item.title}
                  </h4>
                  {!item.read && (
                    <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  {item.message}
                </p>
                <span className="text-[11px] text-slate-400 font-medium block pt-0.5">
                  {item.timestamp}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAction(item);
                }}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded-xl flex items-center gap-1 transition-all shadow-xs"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

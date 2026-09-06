import React, { useState } from 'react';
import {
  Radio,
  Calendar,
  Clock,
  Plus,
  Users,
  Video,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Hand,
  Play,
  Share2,
  FileText,
  X,
  ExternalLink
} from 'lucide-react';
import { mockTeacherLiveClasses, LiveClassScheduleItem } from '../../data/teacherAdminMockData';

export const TeacherLiveClassesTab: React.FC = () => {
  const [sessions, setSessions] = useState<LiveClassScheduleItem[]>(mockTeacherLiveClasses);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [activeLiveRoom, setActiveLiveRoom] = useState<LiveClassScheduleItem | null>(null);

  // New Class Form
  const [newClass, setNewClass] = useState({
    courseName: 'Comprehensive Income Tax Act 2023 Masterclass',
    topic: '',
    date: '12 September 2026',
    time: '08:00 PM - 09:30 PM',
    durationMinutes: 90,
    platform: 'Zoom API' as 'Zoom API' | 'Google Meet' | 'Custom Streaming',
    meetingLink: 'https://zoom.us/j/9812457812?pwd=ELAWYERS2026'
  });

  // Simulated Live Classroom State
  const [liveChatMessages, setLiveChatMessages] = useState([
    { id: '1', sender: 'Advocate Farhana', text: 'Sir, what if the tax day falls on a government holiday under Section 2(33)?', time: '8:12 PM' },
    { id: '2', sender: 'Tanvir Hossain, ACA', text: 'Does Section 163 minimum tax apply to loss-making export oriented RMG companies?', time: '8:14 PM' },
    { id: '3', sender: 'Sadia Jahan', text: 'Noted sir! Audio and screen share are crystal clear.', time: '8:15 PM' }
  ]);
  const [newMessageText, setNewMessageText] = useState('');
  const [raisedHandsCount, setRaisedHandsCount] = useState(2);
  const [attendeeCount, setAttendeeCount] = useState(185);

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClass.topic) {
      alert('Please enter a topic.');
      return;
    }

    const scheduled: LiveClassScheduleItem = {
      id: `live-${Date.now()}`,
      courseName: newClass.courseName,
      topic: newClass.topic,
      date: newClass.date,
      time: newClass.time,
      durationMinutes: Number(newClass.durationMinutes),
      studentCount: 160,
      platform: newClass.platform,
      meetingLink: newClass.meetingLink,
      status: 'Upcoming'
    };

    setSessions([scheduled, ...sessions]);
    setShowScheduleModal(false);
    alert(`Live Masterclass "${newClass.topic}" scheduled! Notifications pushed to all registered students via SMS & Email.`);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessageText.trim()) return;
    setLiveChatMessages([
      ...liveChatMessages,
      {
        id: String(Date.now()),
        sender: 'Adv. Ruhul Amin (Instructor)',
        text: newMessageText,
        time: 'Just now'
      }
    ]);
    setNewMessageText('');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <Radio className="w-6 h-6 text-rose-500 animate-pulse" />
            <span>Live Class Management & Studio</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Seamless Zoom API, Google Meet & RTMP streaming with real-time attendee monitoring & cloud recordings.
          </p>
        </div>

        <button
          onClick={() => setShowScheduleModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-rose-500/20 flex items-center gap-2 transition active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Live Class</span>
        </button>
      </div>

      {/* Live Classroom Launcher Spotlight */}
      <div className="bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900 border border-rose-500/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                Featured Masterclass Tonight
              </span>
              <span className="text-xs text-slate-400">8:00 PM - 9:30 PM BST</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-white font-display">
              IT-11GA Individual Tax Return Real Assessment Simulation
            </h2>
            <p className="text-xs text-slate-300 max-w-2xl">
              Course: Comprehensive Income Tax Act 2023 Masterclass • 185 Students registered • Zoom API Bridge Ready
            </p>

            {/* Pre-class trigger buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => alert('Broadcast SMS & Email reminder sent to all 185 enrolled students!')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send 15-Min Student Reminder</span>
              </button>
              <button
                onClick={() => alert('Attendance register downloaded with enrolled students bar registration IDs.')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Prepare Attendance Sheet</span>
              </button>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={() => setActiveLiveRoom(sessions[0])}
              className="px-6 py-3 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-black text-sm rounded-2xl shadow-xl shadow-rose-500/30 flex items-center gap-2 transition active:scale-95"
            >
              <Radio className="w-5 h-5" />
              <span>Launch Live Teaching Studio</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scheduled & Past Sessions Tabs */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span>All Masterclass Sessions</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between gap-4 hover:border-slate-700 transition"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    session.status === 'Upcoming'
                      ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {session.status}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {session.date} • {session.time}
                  </span>
                </div>

                <div className="text-sm font-bold text-white leading-snug">{session.topic}</div>
                <div className="text-xs text-slate-400 truncate">Course: {session.courseName}</div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>Platform: <strong className="text-slate-200">{session.platform}</strong></span>
                  <span>Registered: <strong className="text-amber-400">{session.studentCount}</strong></span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                {session.status === 'Completed' ? (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Attendance: {session.attendanceRate}%
                    </span>
                    <button
                      onClick={() => alert(`Opening auto-saved cloud recording for: ${session.topic}`)}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch Recording</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 w-full justify-between">
                    <a
                      href={session.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <span>Meeting Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => setActiveLiveRoom(session)}
                      className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Host Studio</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          SIMULATED LIVE TEACHING STUDIO (DURING CLASS)
          ======================================================== */}
      {activeLiveRoom && (
        <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col">
          {/* Studio Top Control Bar */}
          <div className="h-14 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-rose-600 text-white text-xs font-black uppercase flex items-center gap-1 animate-pulse">
                <Radio className="w-3.5 h-3.5" /> LIVE ON AIR
              </span>
              <span className="text-xs font-bold text-white truncate max-w-md">
                {activeLiveRoom.topic}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Users className="w-4 h-4 text-blue-400" />
                <span><strong className="text-white">{attendeeCount}</strong> Students Present</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                <Hand className="w-4 h-4" />
                <span>{raisedHandsCount} Hands Raised</span>
              </div>
              <button
                onClick={() => {
                  alert('Masterclass ended. Cloud recording processing initialized & attendance register saved.');
                  setActiveLiveRoom(null);
                }}
                className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl"
              >
                End Session & Save
              </button>
            </div>
          </div>

          {/* Studio Workspace */}
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            {/* Main Stage (Instructor Video / Screen Share) */}
            <div className="flex-1 bg-slate-950 flex flex-col items-center justify-center p-6 relative">
              <div className="w-full h-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-amber-500/20 ring-4 ring-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Video className="w-12 h-12" />
                </div>
                <div className="text-white text-lg font-black font-display">
                  Instructor Screen Sharing: IT-11GA Form Template
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  1080p 60fps • Zoom Cloud Bridge • Encrypted Bangladeshi Law Stream
                </div>

                {/* Simulated Floating Watermark */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                  ADV. RUHUL AMIN (SCBA #4102)
                </div>
              </div>
            </div>

            {/* Right Panel: Live Chat & Questions */}
            <div className="w-full md:w-80 bg-slate-900 border-l border-slate-800 flex flex-col h-full">
              <div className="p-3 border-b border-slate-800 font-bold text-xs text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>Live Student Q&A Stream</span>
              </div>

              {/* Chat Feed */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto text-xs">
                {liveChatMessages.map((msg) => (
                  <div key={msg.id} className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <div className="flex items-center justify-between text-[10px] text-amber-400 font-bold">
                      <span>{msg.sender}</span>
                      <span className="text-slate-500 font-normal">{msg.time}</span>
                    </div>
                    <p className="text-slate-200 mt-1 text-[11px] leading-relaxed">{msg.text}</p>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type instructor answer..."
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="p-2 bg-amber-500 text-slate-950 rounded-xl font-bold hover:bg-amber-400"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Schedule New Live Teaching Session</h3>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Course *</label>
                <select
                  value={newClass.courseName}
                  onChange={(e) => setNewClass({ ...newClass, courseName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                >
                  <option>Comprehensive Income Tax Act 2023 Masterclass</option>
                  <option>VAT & SD Act 2012 & Mushak 9.1 Return</option>
                  <option>Bangladesh Bar Council Prep</option>
                  <option>RJSC Corporate Compliance</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Session Topic *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hands-on Mushak 6.3 Tax Invoice Reconciliation..."
                  value={newClass.topic}
                  onChange={(e) => setNewClass({ ...newClass, topic: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Date *</label>
                  <input
                    type="text"
                    value={newClass.date}
                    onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Time *</label>
                  <input
                    type="text"
                    value={newClass.time}
                    onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Platform *</label>
                  <select
                    value={newClass.platform}
                    onChange={(e) => setNewClass({ ...newClass, platform: e.target.value as any })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Zoom API">Zoom API</option>
                    <option value="Google Meet">Google Meet</option>
                    <option value="Custom Streaming">Custom Streaming</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Duration (Mins) *</label>
                  <input
                    type="number"
                    value={newClass.durationMinutes}
                    onChange={(e) => setNewClass({ ...newClass, durationMinutes: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Meeting Link *</label>
                <input
                  type="url"
                  value={newClass.meetingLink}
                  onChange={(e) => setNewClass({ ...newClass, meetingLink: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl"
                >
                  Schedule & Notify Students
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Video, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  CheckCircle2, 
  ExternalLink, 
  Bell, 
  Play, 
  Download, 
  FileText, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight,
  List,
  CalendarDays,
  X
} from 'lucide-react';
import { mockLiveSessionsDetailed, mockPastRecordedClasses } from '../../data/studentMockData';

interface StudentLiveClassesProps {
  onJoinSession?: (sessionId: string) => void;
  onJoinLiveSession?: (sessionId: string) => void;
  liveClasses?: any[];
}

export const StudentLiveClasses: React.FC<StudentLiveClassesProps> = ({ 
  onJoinSession, 
  onJoinLiveSession 
}) => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [activeRecordedModal, setActiveRecordedModal] = useState<any | null>(null);
  const [reminders, setReminders] = useState<Record<string, boolean>>({
    'live-tax-01': true,
    'live-vat-02': true
  });
  const [activeMeetingModal, setActiveMeetingModal] = useState<any | null>(null);

  const toggleReminder = (id: string) => {
    setReminders(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleJoin = (session: typeof mockLiveSessionsDetailed[0]) => {
    setActiveMeetingModal(session);
    if (onJoinSession) onJoinSession(session.id);
    if (onJoinLiveSession) onJoinLiveSession(session.id);
  };

  return (
    <div className="space-y-8" id="student-live-classes-page">
      {/* Top Banner with Stats */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1.5">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-amber-400/30">
              Interactive Masterclass Hub
            </span>
            <h1 className="text-2xl sm:text-3xl font-black font-display">
              Live Classes & Courtroom Simulation
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Join real-time interactive Zoom and Google Meet sessions with Supreme Court Advocates, NBR Commissioners, and corporate tax specialists.
            </p>
          </div>

          {/* Attendance Stats Badge */}
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-black font-display text-white">94% Attendance</div>
              <div className="text-[11px] text-slate-300">18 / 19 Live Sessions Attended</div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Options Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900">Zoom API Integration</span>
            <p className="text-[11px] text-slate-500">Encrypted HD audio/video with breakout rooms</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900">Google Meet API</span>
            <p className="text-[11px] text-slate-500">Direct calendar synchronization & closed captions</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-slate-900">Custom Stream & Chat</span>
            <p className="text-[11px] text-slate-500">Watermarked low-latency courtroom broadcasting</p>
          </div>
        </div>
      </div>

      {/* UPCOMING CLASSES SECTION */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">Upcoming Live Sessions</h2>
            <p className="text-xs text-slate-500">Scheduled live lectures and practical workshops</p>
          </div>

          {/* View Switcher: List vs Calendar */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                viewMode === 'list' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>List View</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
                viewMode === 'calendar' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Calendar View</span>
            </button>
          </div>
        </div>

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {mockLiveSessionsDetailed.map((session) => (
              <div
                key={session.id}
                className={`bg-white rounded-3xl border transition-all p-6 shadow-xs hover:shadow-md flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ${
                  session.status === 'Starting Soon'
                    ? 'border-amber-400 bg-amber-50/20'
                    : 'border-slate-200'
                }`}
              >
                {/* Left info */}
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      session.status === 'Starting Soon'
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-indigo-100 text-indigo-800'
                    }`}>
                      {session.status}
                    </span>

                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded-full">
                      {session.platform}
                    </span>

                    <span className="text-xs font-extrabold text-amber-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {session.time} • {session.expectedDuration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 font-display">
                      {session.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      Course: <span className="text-indigo-600">{session.courseTitle}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                      Date: <strong className="text-slate-800">{session.date}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      Instructor: <strong className="text-slate-800">{session.instructor}</strong>
                    </span>
                  </div>

                  {/* Agenda Bullet points */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                    <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider block mb-1">
                      Session Agenda:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700">
                      {(session.agenda || []).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Action buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-stretch gap-2.5 w-full lg:w-56 shrink-0">
                  <button
                    onClick={() => handleJoin(session)}
                    className={`py-3 px-4 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all ${
                      session.status === 'Starting Soon'
                        ? 'bg-rose-600 hover:bg-rose-700 text-white animate-bounce'
                        : 'bg-slate-900 hover:bg-slate-800 text-amber-400'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Join Live Class</span>
                  </button>

                  <button
                    onClick={() => toggleReminder(session.id)}
                    className={`py-2 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      reminders[session.id]
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Bell className={`w-3.5 h-3.5 ${reminders[session.id] ? 'fill-emerald-600 text-emerald-600' : ''}`} />
                    <span>{reminders[session.id] ? 'Reminder Set (SMS & Email)' : 'Set Reminder'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar View */}
        {viewMode === 'calendar' && (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900 font-display">
                September 2026 Live Masterclass Calendar
              </h3>
              <span className="text-xs text-slate-500">Bangladesh Standard Time (UTC+6)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 space-y-2">
                <span className="text-[10px] font-black uppercase text-amber-900 bg-amber-200 px-2 py-0.5 rounded">
                  15 Sept 2026 • 8:00 PM
                </span>
                <h4 className="font-extrabold text-sm text-slate-900">Income Tax Practical Session</h4>
                <p className="text-xs text-slate-600">Universal Self-Assessment under Section 180</p>
                <button 
                  onClick={() => handleJoin(mockLiveSessionsDetailed[0])}
                  className="w-full py-1.5 bg-slate-900 text-amber-400 font-bold text-xs rounded-lg mt-2"
                >
                  Join Zoom
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2">
                <span className="text-[10px] font-bold uppercase text-blue-900 bg-blue-200 px-2 py-0.5 rounded">
                  18 Sept 2026 • 7:30 PM
                </span>
                <h4 className="font-extrabold text-sm text-slate-900">Mushak 6.1 & 6.3 Workshop</h4>
                <p className="text-xs text-slate-600">e-VAT Portal Practical Register filling</p>
                <button 
                  onClick={() => handleJoin(mockLiveSessionsDetailed[1])}
                  className="w-full py-1.5 bg-blue-600 text-white font-bold text-xs rounded-lg mt-2"
                >
                  Join Google Meet
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-2">
                <span className="text-[10px] font-bold uppercase text-purple-900 bg-purple-200 px-2 py-0.5 rounded">
                  22 Sept 2026 • 8:30 PM
                </span>
                <h4 className="font-extrabold text-sm text-slate-900">Corporate Due Diligence & M&A</h4>
                <p className="text-xs text-slate-600">RJSC Search report & charge filing</p>
                <button 
                  onClick={() => handleJoin(mockLiveSessionsDetailed[2])}
                  className="w-full py-1.5 bg-purple-600 text-white font-bold text-xs rounded-lg mt-2"
                >
                  Custom Stream
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* RECORDED PAST CLASSES SECTION */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900 font-display">
              Recorded Classes Archive
            </h2>
            <p className="text-xs text-slate-500">
              Automatically saved recordings, chat histories, attendance records, and shared lecture slides
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPastRecordedClasses.map((rec) => (
            <div 
              key={rec.id}
              className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                    Recorded {rec.recordedDate}
                  </span>
                  <span className="text-slate-500 font-medium text-[11px]">{rec.duration}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 text-sm leading-snug">
                  {rec.title}
                </h3>
                <p className="text-xs text-slate-500">Course: {rec.courseTitle}</p>
                <p className="text-xs text-slate-700">Instructor: <strong>{rec.instructor}</strong></p>

                {/* Attendance Confirmed Pill */}
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Your Attendance Was Verified (100%)</span>
                </div>

                {/* Attached resources */}
                <div className="pt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Attached Materials:
                  </span>
                  {(rec.resourcesAttached || []).map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs text-indigo-700 bg-indigo-50/60 px-2 py-1 rounded-md mb-1">
                      <span className="truncate">{file}</span>
                      <Download className="w-3 h-3 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveRecordedModal(rec)}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-amber-400" />
                <span>Watch Recording</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Live Meeting Room Simulation Modal */}
      {activeMeetingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl text-white space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <h3 className="font-extrabold text-base text-white">
                  Launching {activeMeetingModal.platform} Session
                </h3>
              </div>
              <button 
                onClick={() => setActiveMeetingModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/30">
                <Video className="w-8 h-8" />
              </div>
              <h2 className="text-lg font-black">{activeMeetingModal.title}</h2>
              <p className="text-xs text-slate-300">Instructor: {activeMeetingModal.instructor}</p>
              <p className="text-xs text-amber-300 font-bold">
                Watermarked with Advocate Md. Rahman (+8801711000000) for Academy Integrity
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <p>• Your attendance is automatically registered upon entering the room.</p>
              <p>• Keep microphone muted unless invited by the instructor for courtroom cross-examination.</p>
              <p>• Download the session handouts from the bottom panel.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  alert(`Connecting to ${activeMeetingModal.platform}... Your camera and microphone check passed.`);
                  setActiveMeetingModal(null);
                }}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-emerald-500/20"
              >
                Enter Meeting Now
              </button>
              <button
                onClick={() => setActiveMeetingModal(null)}
                className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recorded Class Video Player Modal */}
      {activeRecordedModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between text-white pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-base font-extrabold">{activeRecordedModal.title}</h3>
                <p className="text-xs text-slate-400">Instructor: {activeRecordedModal.instructor} • Recorded: {activeRecordedModal.recordedDate}</p>
              </div>
              <button 
                onClick={() => setActiveRecordedModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-inner">
              <video 
                src={activeRecordedModal.recordingUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>Verified Attendance: 100% (Full recording viewed)</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => alert("Downloading lecture slides PDF...")}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold rounded-lg flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resources</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

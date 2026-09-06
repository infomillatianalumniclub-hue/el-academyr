import React, { useState } from 'react';
import { Course } from '../../types';
import { 
  Play, 
  Pause, 
  CheckCircle2, 
  Circle, 
  Download, 
  FileText, 
  Sparkles, 
  ShieldAlert, 
  BookOpen, 
  HelpCircle,
  Clock,
  ChevronRight
} from 'lucide-react';

interface VideoPlayerPortalProps {
  course: Course;
  studentName: string;
  studentPhone: string;
  onBackToDashboard: () => void;
  onTakeQuiz: (quizId: string) => void;
  onOpenAIAssistant: () => void;
}

export const VideoPlayerPortal: React.FC<VideoPlayerPortalProps> = ({
  course,
  studentName,
  studentPhone,
  onBackToDashboard,
  onTakeQuiz,
  onOpenAIAssistant,
}) => {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({
    'les-101': true
  });
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [studentNotes, setStudentNotes] = useState<string>(
    'Key takeaway: VAT & SD Act 2012 requires 13-digit BIN registration before executing commercial import or selling taxable services under Section 4.'
  );

  const modulesList = course?.modules && course.modules.length > 0 ? course.modules : [
    {
      id: 'default-mod-1',
      title: 'Module 1: Statutory Foundations & Framework',
      lessons: [
        {
          id: 'les-default-1',
          title: 'Orientation & Core Principles',
          duration: '22 mins',
          videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          isFreePreview: true,
          resources: [
            { title: 'Foundational Summary Notes (PDF)', downloadUrl: '#' }
          ]
        }
      ]
    }
  ];
  const currentModule = modulesList[activeModuleIndex] || modulesList[0];
  const lessonsList = currentModule?.lessons && currentModule.lessons.length > 0 ? currentModule.lessons : [];
  const currentLesson = lessonsList[activeLessonIndex] || lessonsList[0];

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) => ({ ...prev, [lessonId]: !prev[lessonId] }));
  };

  return (
    <div className="space-y-6">
      {/* Top Header Breadcrumb */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 text-white p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
        <div>
          <button
            onClick={onBackToDashboard}
            className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 mb-1"
          >
            ← Back to Student Dashboard
          </button>
          <h1 className="text-xl font-extrabold font-display">{course.title}</h1>
          <p className="text-xs text-slate-300 mt-0.5">
            Module {activeModuleIndex + 1}: {currentModule?.title} • {currentLesson?.title}
          </p>
        </div>

        <button
          onClick={onOpenAIAssistant}
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md"
        >
          <Sparkles className="w-4 h-4 fill-slate-950" />
          <span>Ask AI Assistant About This Lesson</span>
        </button>
      </div>

      {/* Main Video & Sidebar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Video Player Column */}
        <div className="lg:col-span-8 space-y-6">
          {/* Simulated Video Player Container */}
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
            {/* Dynamic Watermark to Prevent Piracy */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none opacity-40 select-none bg-slate-950/70 text-amber-300 text-[11px] font-mono font-bold px-3 py-1 rounded border border-amber-500/30 tracking-widest">
              PROTECTED CONTENT • {studentName.toUpperCase()} • #{studentPhone || '8801711000000'}
            </div>

            <video
              key={currentLesson?.id}
              src={currentLesson?.videoUrl}
              controls
              autoPlay={false}
              className="w-full h-full object-cover"
            />

            {/* Playback Controls Overlay */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 backdrop-blur-md">
              <span className="text-[11px] font-bold text-slate-400">Speed:</span>
              {[1.0, 1.25, 1.5, 2.0].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-0.5 rounded text-xs font-bold transition-all ${
                    playbackSpeed === speed
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Lesson Metadata & Resources */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900 font-display">{currentLesson?.title}</h2>
                <span className="text-xs text-slate-500">Duration: {currentLesson?.durationMinutes} mins</span>
              </div>

              <button
                onClick={() => toggleLessonComplete(currentLesson?.id)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                  completedLessons[currentLesson?.id]
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {completedLessons[currentLesson?.id] ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Lesson Completed</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4" />
                    <span>Mark as Completed</span>
                  </>
                )}
              </button>
            </div>

            {/* Lesson Attachments / Quiz Triggers */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider">Lesson Downloads & Quiz</h3>
              <div className="flex flex-wrap gap-3">
                {currentLesson?.resources?.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.fileUrl}
                    className="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4 text-amber-600" />
                    <span>{res.name}</span>
                  </a>
                ))}

                {currentLesson?.quizId && (
                  <button
                    onClick={() => onTakeQuiz(currentLesson.quizId!)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Take Module Quiz (Auto-Graded)</span>
                  </button>
                )}
              </div>
            </div>

            {/* Student Notes Pad */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Personal Lesson Notes</label>
              <textarea
                rows={3}
                value={studentNotes}
                onChange={(e) => setStudentNotes(e.target.value)}
                placeholder="Type your notes here during lecture..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
              />
              <p className="text-[10px] text-slate-400 text-right">Notes automatically saved to your profile</p>
            </div>
          </div>
        </div>

        {/* Course Syllabus Sidebar Column */}
        <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 space-y-4 max-h-[85vh] overflow-y-auto">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 pb-3 border-b border-slate-100">
            <BookOpen className="w-4 h-4 text-amber-500" />
            Course Curriculum
          </h3>

          <div className="space-y-4">
            {modulesList.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <div className="p-2.5 bg-slate-900 text-amber-400 rounded-xl text-xs font-bold">
                  {mod.title}
                </div>

                <div className="space-y-1 pl-1">
                  {(mod.lessons || []).map((les, lIdx) => {
                    const isCurrent = mIdx === activeModuleIndex && lIdx === activeLessonIndex;
                    const isDone = completedLessons[les.id];

                    return (
                      <div
                        key={les.id}
                        onClick={() => {
                          setActiveModuleIndex(mIdx);
                          setActiveLessonIndex(lIdx);
                        }}
                        className={`p-2.5 rounded-xl text-xs flex items-center justify-between cursor-pointer transition-all ${
                          isCurrent
                            ? 'bg-amber-100 text-slate-950 font-extrabold border border-amber-300 shadow-sm'
                            : 'hover:bg-slate-100 text-slate-700 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                          <span className="line-clamp-1">{les.title}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">{les.durationMinutes}m</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

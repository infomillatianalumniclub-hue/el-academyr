import React, { useState } from 'react';
import {
  FolderTree,
  Plus,
  GripVertical,
  ChevronDown,
  ChevronRight,
  Video,
  HelpCircle,
  FileCheck,
  Eye,
  Edit3,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  X,
  Play,
  Clock,
  ArrowUp,
  ArrowDown,
  Upload
} from 'lucide-react';

interface BuilderLesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'video' | 'quiz' | 'assignment';
  isPublished: boolean;
  videoDuration?: string;
  quizQuestionsCount?: number;
  assignmentMarks?: number;
  resourcesCount?: number;
}

interface BuilderModule {
  id: string;
  title: string;
  isExpanded: boolean;
  lessons: BuilderLesson[];
}

export const TeacherCourseBuilderTab: React.FC = () => {
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('Professional Income Tax Training (Act 2023)');
  const [modules, setModules] = useState<BuilderModule[]>([
    {
      id: 'mod-1',
      title: 'Module 01: Income Tax Basics & Statutory Framework',
      isExpanded: true,
      lessons: [
        {
          id: 'les-1-1',
          title: 'Lesson 01: Introduction to Income Tax Act 2023 vs 1984 Ordinance',
          durationMinutes: 45,
          type: 'video',
          isPublished: true,
          videoDuration: '45 Minutes HD',
          resourcesCount: 3
        },
        {
          id: 'les-1-2',
          title: 'Lesson 02: Definitions of Assessee, Resident Status & Universal Assessment Scope',
          durationMinutes: 40,
          type: 'video',
          isPublished: true,
          videoDuration: '40 Minutes HD',
          resourcesCount: 2
        },
        {
          id: 'les-1-3',
          title: 'Module 01 Knowledge Check Exam: 10 MCQ Questions',
          durationMinutes: 20,
          type: 'quiz',
          isPublished: true,
          quizQuestionsCount: 10
        }
      ]
    },
    {
      id: 'mod-2',
      title: 'Module 02: Heads of Income & Allowable Deductions',
      isExpanded: true,
      lessons: [
        {
          id: 'les-2-1',
          title: 'Lesson 01: Income from Employment (Salary Breakdown & Perquisites)',
          durationMinutes: 50,
          type: 'video',
          isPublished: true,
          videoDuration: '50 Minutes HD',
          resourcesCount: 4
        },
        {
          id: 'les-2-2',
          title: 'Lesson 02: Business & Professional Income (Sec 45 to 55 Disallowances)',
          durationMinutes: 60,
          type: 'video',
          isPublished: true,
          videoDuration: '60 Minutes HD',
          resourcesCount: 3
        },
        {
          id: 'les-2-3',
          title: 'Assignment 01: Universal Return (IT-11GA) Drafting Case Study',
          durationMinutes: 90,
          type: 'assignment',
          isPublished: true,
          assignmentMarks: 100
        }
      ]
    },
    {
      id: 'mod-3',
      title: 'Module 03: Corporate Tax Assessment & Mushak Withholding Integration',
      isExpanded: false,
      lessons: [
        {
          id: 'les-3-1',
          title: 'Lesson 01: Minimum Tax (Sec 163) and Withholding Tax Schedules',
          durationMinutes: 45,
          type: 'video',
          isPublished: false,
          videoDuration: '45 Minutes HD'
        }
      ]
    }
  ]);

  const [previewLesson, setPreviewLesson] = useState<BuilderLesson | null>(null);
  const [newModuleName, setNewModuleName] = useState('');
  const [showAddModuleInput, setShowAddModuleInput] = useState(false);

  const toggleModule = (modId: string) => {
    setModules((prev) =>
      prev.map((m) => (m.id === modId ? { ...m, isExpanded: !m.isExpanded } : m))
    );
  };

  const moveLesson = (modId: string, lessonIdx: number, direction: 'up' | 'down') => {
    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== modId) return mod;
        const newLessons = [...mod.lessons];
        const targetIdx = direction === 'up' ? lessonIdx - 1 : lessonIdx + 1;
        if (targetIdx < 0 || targetIdx >= newLessons.length) return mod;
        const temp = newLessons[lessonIdx];
        newLessons[lessonIdx] = newLessons[targetIdx];
        newLessons[targetIdx] = temp;
        return { ...mod, lessons: newLessons };
      })
    );
  };

  const toggleLessonPublish = (modId: string, lessonId: string) => {
    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== modId) return mod;
        return {
          ...mod,
          lessons: mod.lessons.map((l) =>
            l.id === lessonId ? { ...l, isPublished: !l.isPublished } : l
          )
        };
      })
    );
  };

  const addModule = () => {
    if (!newModuleName.trim()) return;
    const newMod: BuilderModule = {
      id: `mod-${Date.now()}`,
      title: newModuleName,
      isExpanded: true,
      lessons: []
    };
    setModules([...modules, newMod]);
    setNewModuleName('');
    setShowAddModuleInput(false);
  };

  const addLessonToModule = (modId: string, type: 'video' | 'quiz' | 'assignment') => {
    const title = prompt(`Enter ${type.toUpperCase()} title:`, `New ${type} lesson`);
    if (!title) return;

    setModules((prev) =>
      prev.map((mod) => {
        if (mod.id !== modId) return mod;
        const newLes: BuilderLesson = {
          id: `les-${Date.now()}`,
          title,
          durationMinutes: type === 'video' ? 45 : 30,
          type,
          isPublished: true,
          videoDuration: type === 'video' ? '45 Minutes' : undefined,
          quizQuestionsCount: type === 'quiz' ? 10 : undefined,
          assignmentMarks: type === 'assignment' ? 100 : undefined
        };
        return { ...mod, lessons: [...mod.lessons, newLes] };
      })
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-wider">
            Curriculum Architecture
          </span>
          <h1 className="text-2xl font-extrabold text-white font-display mt-1 flex items-center gap-2">
            <FolderTree className="w-6 h-6 text-blue-400" />
            <span>Interactive Course Builder</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Course &rarr; Module &rarr; Lesson &rarr; Video / Quiz / Assignment structure with reordering & publish controls.
          </p>
        </div>

        {/* Selected Course Dropdown */}
        <div className="flex items-center gap-3">
          <select
            value={selectedCourseTitle}
            onChange={(e) => setSelectedCourseTitle(e.target.value)}
            className="px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-white focus:outline-none focus:border-amber-400"
          >
            <option value="Professional Income Tax Training (Act 2023)">
              Professional Income Tax Training
            </option>
            <option value="VAT & SD Act 2012 & Mushak 9.1">
              VAT & SD Act 2012 & Mushak 9.1
            </option>
            <option value="Bangladesh Bar Council Prep">
              Bangladesh Bar Council Prep
            </option>
          </select>

          <button
            onClick={() => alert('All curriculum changes saved to E-Lawyers CDN repository!')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Course Builder Tree Canvas */}
      <div className="space-y-4">
        {modules.map((mod, modIdx) => (
          <div
            key={mod.id}
            className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-sm"
          >
            {/* Module Header */}
            <div className="p-4 bg-slate-850 flex items-center justify-between gap-3 border-b border-slate-800">
              <div
                onClick={() => toggleModule(mod.id)}
                className="flex items-center gap-3 cursor-pointer select-none flex-1 min-w-0"
              >
                <button className="p-1 text-slate-400 hover:text-white">
                  {mod.isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                <div className="font-bold text-sm text-white truncate">{mod.title}</div>
                <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-slate-800">
                  {(mod.lessons || []).length} items
                </span>
              </div>

              {/* Module Actions */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => addLessonToModule(mod.id, 'video')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-blue-300 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                >
                  <Video className="w-3 h-3 text-blue-400" />
                  <span className="hidden sm:inline">+ Video</span>
                </button>
                <button
                  onClick={() => addLessonToModule(mod.id, 'quiz')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                >
                  <HelpCircle className="w-3 h-3 text-amber-400" />
                  <span className="hidden sm:inline">+ Quiz</span>
                </button>
                <button
                  onClick={() => addLessonToModule(mod.id, 'assignment')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                >
                  <FileCheck className="w-3 h-3 text-emerald-400" />
                  <span className="hidden sm:inline">+ Assignment</span>
                </button>
              </div>
            </div>

            {/* Lessons List inside Module */}
            {mod.isExpanded && (
              <div className="p-3 space-y-2 bg-slate-900/40">
                {(mod.lessons || []).length === 0 ? (
                  <div className="p-6 text-center text-xs text-slate-500 italic">
                    No lessons yet in this module. Click buttons above to add video, quiz, or assignment.
                  </div>
                ) : (
                  (mod.lessons || []).map((lesson, lesIdx) => (
                    <div
                      key={lesson.id}
                      className="p-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition"
                    >
                      {/* Left info & Drag handle */}
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-slate-500">
                          <button
                            onClick={() => moveLesson(mod.id, lesIdx, 'up')}
                            disabled={lesIdx === 0}
                            className="p-1 hover:text-white disabled:opacity-30"
                            title="Move Lesson Up"
                          >
                            <ArrowUp className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => moveLesson(mod.id, lesIdx, 'down')}
                            disabled={lesIdx === mod.lessons.length - 1}
                            className="p-1 hover:text-white disabled:opacity-30"
                            title="Move Lesson Down"
                          >
                            <ArrowDown className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Type Icon */}
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            lesson.type === 'video'
                              ? 'bg-blue-500/10 text-blue-400'
                              : lesson.type === 'quiz'
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'bg-emerald-500/10 text-emerald-400'
                          }`}
                        >
                          {lesson.type === 'video' && <Video className="w-4 h-4" />}
                          {lesson.type === 'quiz' && <HelpCircle className="w-4 h-4" />}
                          {lesson.type === 'assignment' && <FileCheck className="w-4 h-4" />}
                        </div>

                        {/* Lesson Title & Details */}
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-white truncate">{lesson.title}</div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                            {lesson.videoDuration && <span>{lesson.videoDuration}</span>}
                            {lesson.quizQuestionsCount && <span>{lesson.quizQuestionsCount} Questions</span>}
                            {lesson.assignmentMarks && <span>Total: {lesson.assignmentMarks} Marks</span>}
                            {lesson.resourcesCount && (
                              <span>• {lesson.resourcesCount} Downloadable Templates</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right controls: Preview, Publish toggle, Delete */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                        <button
                          onClick={() => setPreviewLesson(lesson)}
                          className="px-2.5 py-1 bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-[11px] font-bold rounded-lg flex items-center gap-1 transition"
                        >
                          <Eye className="w-3 h-3 text-slate-400" />
                          <span>Preview</span>
                        </button>

                        <button
                          onClick={() => toggleLessonPublish(mod.id, lesson.id)}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition ${
                            lesson.isPublished
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-slate-800 text-slate-500 border border-slate-700'
                          }`}
                        >
                          {lesson.isPublished ? 'Published' : 'Unpublished'}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}

        {/* Add New Module Section */}
        {showAddModuleInput ? (
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center gap-3">
            <input
              type="text"
              placeholder="e.g. Module 04: Practical Mushak 9.1 VAT Return Filing Workshop"
              value={newModuleName}
              onChange={(e) => setNewModuleName(e.target.value)}
              className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
            />
            <button
              onClick={addModule}
              className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400"
            >
              Add Module
            </button>
            <button
              onClick={() => setShowAddModuleInput(false)}
              className="p-2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowAddModuleInput(true)}
            className="w-full py-3.5 border-2 border-dashed border-slate-800 hover:border-slate-700 rounded-2xl text-xs font-bold text-slate-400 hover:text-white flex items-center justify-center gap-2 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Course Module</span>
          </button>
        )}
      </div>

      {/* Lesson Preview Modal */}
      {previewLesson && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Lesson Preview Mode
              </span>
              <button
                onClick={() => setPreviewLesson(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg font-bold text-white">{previewLesson.title}</h3>

            {previewLesson.type === 'video' && (
              <div className="relative aspect-video bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Play className="w-6 h-6 fill-amber-400" />
                </div>
                <span className="text-sm font-bold text-white">Watermarked HD Player Simulation</span>
                <span className="text-xs text-slate-400 mt-1">Duration: {previewLesson.videoDuration || '45 mins'} • 1080p Encrypted HLS</span>
              </div>
            )}

            {previewLesson.type === 'quiz' && (
              <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-xs font-bold text-amber-300">MCQ Examination Module</div>
                <p className="text-xs text-slate-300">
                  Contains {previewLesson.quizQuestionsCount} questions with automated grading and Bangladesh Income Tax Act 2023 statutory explanations.
                </p>
              </div>
            )}

            {previewLesson.type === 'assignment' && (
              <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700 space-y-2">
                <div className="text-xs font-bold text-emerald-300">Practical Drafting Assignment</div>
                <p className="text-xs text-slate-300">
                  Total Marks: {previewLesson.assignmentMarks}. Requires student to upload signed PDF / Excel document.
                </p>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setPreviewLesson(null)}
                className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { X, Play, CheckCircle, ShieldCheck, Star } from 'lucide-react';

interface VideoPreviewModalProps {
  title: string;
  subtitle?: string;
  videoUrl: string;
  onClose: () => void;
  onEnrollNow?: () => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  title,
  subtitle,
  videoUrl,
  onClose,
  onEnrollNow,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden my-auto text-white flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              Academy Free Preview
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white mt-1 line-clamp-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 line-clamp-1">{subtitle}</p>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            controls
            autoPlay
            className="w-full h-full object-contain"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Modal Bottom Call to Action */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Full HD 1080p Lesson</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Includes Practice Files</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all"
            >
              Close
            </button>
            {onEnrollNow && (
              <button
                onClick={onEnrollNow}
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-md shadow-blue-600/30"
              >
                Enroll in Full Course
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

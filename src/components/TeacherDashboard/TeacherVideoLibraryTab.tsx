import React, { useState } from 'react';
import {
  Video,
  Upload,
  Search,
  Play,
  Clock,
  HardDrive,
  CheckCircle2,
  Trash2,
  ExternalLink,
  X,
  FileVideo
} from 'lucide-react';

interface VideoAsset {
  id: string;
  title: string;
  duration: string;
  size: string;
  resolution: '1080p Full HD' | '4K UHD' | '720p HD';
  status: 'Ready' | 'Processing';
  uploadDate: string;
  attachedCourse: string;
}

export const TeacherVideoLibraryTab: React.FC = () => {
  const [videos, setVideos] = useState<VideoAsset[]>([
    {
      id: 'vid-01',
      title: 'IT-11GA Return Filing Complete Walkthrough (Module 01 Lesson 01)',
      duration: '45m 20s',
      size: '1.4 GB',
      resolution: '1080p Full HD',
      status: 'Ready',
      uploadDate: '01 Sep 2026',
      attachedCourse: 'Comprehensive Income Tax Act 2023'
    },
    {
      id: 'vid-02',
      title: 'Mushak 9.1 Excel Calculator Formula Mapping (Module 02 Lesson 03)',
      duration: '38m 15s',
      size: '1.1 GB',
      resolution: '1080p Full HD',
      status: 'Ready',
      uploadDate: '28 Aug 2026',
      attachedCourse: 'VAT & SD Act 2012'
    },
    {
      id: 'vid-03',
      title: 'High Court Writ Petition Order 39 Injunction Argument Simulation',
      duration: '54m 10s',
      size: '1.8 GB',
      resolution: '4K UHD',
      status: 'Ready',
      uploadDate: '20 Aug 2026',
      attachedCourse: 'Bangladesh Bar Council Prep'
    },
    {
      id: 'vid-04',
      title: 'RJSC Form XII & Form 117 Share Transfer Secretarial Procedures',
      duration: '32m 45s',
      size: '890 MB',
      resolution: '1080p Full HD',
      status: 'Processing',
      uploadDate: 'Today',
      attachedCourse: 'Corporate Compliance'
    }
  ]);

  const [search, setSearch] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<VideoAsset | null>(null);

  const filtered = videos.filter((v) => {
    if (!v) return false;
    const q = (search || '').toLowerCase().trim();
    const title = (v.title || '').toLowerCase();
    const course = (v.attachedCourse || '').toLowerCase();
    return !q || title.includes(q) || course.includes(q);
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <Video className="w-6 h-6 text-blue-400" />
            <span>HD Video Library & Transcoding</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Encrypted HLS streaming storage with automated dynamic watermarking for leak prevention.
          </p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition active:scale-95"
        >
          <Upload className="w-4 h-4" />
          <span>Upload HD Video</span>
        </button>
      </div>

      {/* Storage Meter Card */}
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
            <HardDrive className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Cloud CDN Storage Used
            </div>
            <div className="text-lg font-black text-white font-display mt-0.5">
              142.6 GB <span className="text-xs text-slate-400 font-normal">of 500 GB Allocated</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 max-w-md">
          <div className="flex justify-between text-[11px] text-slate-400 font-medium mb-1">
            <span>28.5% Space Consumed</span>
            <span className="text-emerald-400">357.4 GB Free</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '28.5%' }} />
          </div>
        </div>
      </div>

      {/* Search Filter */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Search by video title or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
        />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((video) => (
          <div
            key={video.id}
            className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-700 transition"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div
                onClick={() => setPlayingVideo(video)}
                className="w-20 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-400 cursor-pointer shrink-0 relative overflow-hidden group border border-slate-700"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition" />
                <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-slate-950/80 px-1 rounded text-slate-300">
                  {video.duration}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white truncate">{video.title}</div>
                <div className="text-[11px] text-amber-400/90 font-medium truncate mt-0.5">
                  Course: {video.attachedCourse}
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                  <span>{video.resolution}</span>
                  <span>•</span>
                  <span>{video.size}</span>
                  <span>•</span>
                  <span>Uploaded {video.uploadDate}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  video.status === 'Ready'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                }`}
              >
                {video.status}
              </span>
              <button
                onClick={() => setPlayingVideo(video)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                title="Preview Video"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-amber-400 uppercase">
                Encrypted HLS Video Player Preview
              </span>
              <button
                onClick={() => setPlayingVideo(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-sm font-bold text-white">{playingVideo.title}</h3>

            <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                <Play className="w-8 h-8 fill-amber-400" />
              </div>
              <div className="text-white text-sm font-bold">1080p Encrypted Stream Active</div>
              <div className="text-xs text-slate-400 mt-1 font-mono">
                Watermark: ADV. RUHUL AMIN [SC-BAR-2012] - 01711-234567
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setPlayingVideo(null)}
                className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Video Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Upload New HD Video Lesson</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Video Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Lesson 03: Calculation of Allowable Depreciation..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Attached Course *</label>
                <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-amber-400">
                  <option>Comprehensive Income Tax Act 2023</option>
                  <option>VAT & SD Act 2012 & Mushak 9.1</option>
                  <option>Bangladesh Bar Council Prep</option>
                </select>
              </div>

              <div className="p-6 border-2 border-dashed border-slate-700 rounded-2xl text-center space-y-2">
                <Upload className="w-8 h-8 text-amber-400 mx-auto" />
                <div className="text-slate-300 font-bold">Drag & drop video file here, or browse</div>
                <div className="text-[11px] text-slate-500">Supports MP4, MOV, MKV up to 4K resolution (max 5 GB)</div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold text-xs"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Video upload queued! Background transcoding started.');
                  setShowUploadModal(false);
                }}
                className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400"
              >
                Start Transcoding
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

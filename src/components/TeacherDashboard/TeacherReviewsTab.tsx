import React, { useState } from 'react';
import {
  Star,
  MessageSquare,
  Search,
  Filter,
  CheckCircle2,
  CornerDownRight,
  Send,
  X
} from 'lucide-react';
import { mockTeacherReviews, TeacherReviewItem } from '../../data/teacherAdminMockData';

export const TeacherReviewsTab: React.FC = () => {
  const [reviews, setReviews] = useState<TeacherReviewItem[]>(mockTeacherReviews);
  const [replyingToReviewId, setReplyingToReviewId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSendReply = (reviewId: string) => {
    if (!replyText.trim()) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, instructorReply: replyText } : r
      )
    );
    setReplyingToReviewId(null);
    setReplyText('');
    alert('Your response was published and notified to the student!');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
          <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
          <span>Student Reviews & Feedback Portal</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Monitor student satisfaction ratings and respond to practitioner inquiries.
        </p>
      </div>

      {/* Ratings Aggregate Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        {/* Left Big Score */}
        <div className="flex flex-col items-center justify-center text-center p-4 border-b md:border-b-0 md:border-r border-slate-800">
          <div className="text-5xl font-black text-white font-display">4.8</div>
          <div className="flex items-center gap-1 text-amber-400 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <div className="text-xs text-slate-400">
            Instructor Rating based on <strong className="text-white">420 Verified Reviews</strong>
          </div>
        </div>

        {/* Middle Star Bar Breakdown */}
        <div className="md:col-span-2 space-y-2.5 py-2">
          {[
            { star: '5 Stars', percent: 84, count: 352 },
            { star: '4 Stars', percent: 13, count: 54 },
            { star: '3 Stars', percent: 2, count: 9 },
            { star: '2 Stars', percent: 1, count: 4 },
            { star: '1 Star', percent: 0, count: 1 }
          ].map((bar) => (
            <div key={bar.star} className="flex items-center gap-3 text-xs">
              <span className="w-16 text-slate-400 text-[11px] font-semibold">{bar.star}</span>
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${bar.percent}%` }}
                />
              </div>
              <span className="w-8 text-right font-mono text-slate-300 text-[11px]">{bar.percent}%</span>
              <span className="w-12 text-right font-mono text-slate-500 text-[10px]">({bar.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Stream */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white">Student Reviews Stream</h3>

        <div className="space-y-4">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3 hover:border-slate-700 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.studentAvatar}
                    alt={rev.studentName}
                    className="w-10 h-10 rounded-xl object-cover ring-2 ring-slate-700"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{rev.studentName}</div>
                    <div className="text-xs text-slate-400">{rev.studentTitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/20 text-amber-400 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{rev.rating}.0</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{rev.date}</span>
                </div>
              </div>

              <div className="text-xs text-amber-400/90 font-medium">
                Course: {rev.courseTitle}
              </div>

              <p className="text-xs text-slate-200 leading-relaxed bg-slate-850 p-3 rounded-xl border border-slate-800">
                "{rev.comment}"
              </p>

              {/* Instructor Reply */}
              {rev.instructorReply ? (
                <div className="ml-4 p-3 bg-slate-800/80 border-l-2 border-amber-400 rounded-r-xl space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-amber-400">
                    <CornerDownRight className="w-3 h-3" />
                    <span>Your Response:</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-5">{rev.instructorReply}</p>
                </div>
              ) : replyingToReviewId === rev.id ? (
                <div className="ml-4 pt-2 space-y-2">
                  <textarea
                    rows={2}
                    placeholder="Write a public instructor reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setReplyingToReviewId(null)}
                      className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSendReply(rev.id)}
                      className="px-3.5 py-1 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs hover:bg-amber-400 flex items-center gap-1"
                    >
                      <Send className="w-3 h-3" />
                      <span>Post Reply</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setReplyingToReviewId(rev.id);
                      setReplyText('');
                    }}
                    className="text-xs font-bold text-slate-400 hover:text-amber-400 flex items-center gap-1.5 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Reply to Review</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

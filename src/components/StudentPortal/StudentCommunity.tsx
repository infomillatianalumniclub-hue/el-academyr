import React, { useState } from 'react';
import { 
  MessageSquare, 
  ThumbsUp, 
  CheckCircle2, 
  Send, 
  User, 
  Sparkles, 
  Filter, 
  HelpCircle,
  X,
  Plus
} from 'lucide-react';

interface CommunityPost {
  id: string;
  authorName: string;
  authorTitle: string;
  avatarUrl: string;
  topic: 'Taxation' | 'VAT Compliance' | 'Corporate Law' | 'Bar Exam';
  questionTitle: string;
  questionDetails: string;
  upvotes: number;
  repliesCount: number;
  hasInstructorResponse: boolean;
  instructorReplySnippet?: string;
  instructorName?: string;
  timestamp: string;
}

const initialPosts: CommunityPost[] = [
  {
    id: 'post-01',
    authorName: 'Advocate Farhana Akter',
    authorTitle: 'Dhaka Bar Association Member',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    topic: 'Taxation',
    questionTitle: 'Can an individual taxpayer claim tax rebate on DPS investments under Income Tax Act 2023?',
    questionDetails: 'In the previous 1984 ordinance, deposit pension scheme allowable investment was up to BDT 1,20,000. Under the new 2023 schedule, what is the ceiling and calculation method for allowable rebate?',
    upvotes: 24,
    repliesCount: 6,
    hasInstructorResponse: true,
    instructorName: 'Adv. Md. Ruhul Amin (Supreme Court)',
    instructorReplySnippet: 'Under Section 78 read with the Sixth Schedule (Part 3), the aggregate investment limit for DPS is maintained with specific rebate calculation rate at 15% of eligible investments.',
    timestamp: '2 hours ago'
  },
  {
    id: 'post-02',
    authorName: 'Tanvir Hossain',
    authorTitle: 'Tax Consultant & ITP',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    topic: 'VAT Compliance',
    questionTitle: 'Penalty threshold for late filing of Mushak 9.1 return without prior extension application',
    questionDetails: 'If a registered turnover taxpayer fails to file by 15th of the tax period, what is the exact default penalty and monthly interest rate under Section 85 & 127?',
    upvotes: 18,
    repliesCount: 4,
    hasInstructorResponse: true,
    instructorName: 'Mr. XYZ (NBR Consultant)',
    instructorReplySnippet: 'A late filing fee of BDT 10,000 is chargeable under Section 85 along with 1% monthly interest calculated on the outstanding net VAT balance.',
    timestamp: 'Yesterday'
  },
  {
    id: 'post-03',
    authorName: 'Sadia Jahan',
    authorTitle: 'Apprentice Lawyer (Bar Examinee)',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    topic: 'Bar Exam',
    questionTitle: 'Key differences between Section 100 CPC and Section 115 CPC for the upcoming written exam',
    questionDetails: 'Could our mentors provide a structured mnemonic or comparative table distinguishing second appeal provisions and High Court revisional jurisdiction?',
    upvotes: 31,
    repliesCount: 8,
    hasInstructorResponse: false,
    timestamp: '2 days ago'
  }
];

export const StudentCommunity: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(initialPosts);
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('');
  const [newDetails, setNewDetails] = useState<string>('');
  const [newTopic, setNewTopic] = useState<'Taxation' | 'VAT Compliance' | 'Corporate Law' | 'Bar Exam'>('Taxation');

  const handleUpvote = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p));
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newEntry: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: 'Md. Rahman',
      authorTitle: 'Advocate & Tax Consultant (Supreme Court Bar)',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      topic: newTopic,
      questionTitle: newTitle,
      questionDetails: newDetails,
      upvotes: 1,
      repliesCount: 0,
      hasInstructorResponse: false,
      timestamp: 'Just now'
    };

    setPosts([newEntry, ...posts]);
    setShowNewPostModal(false);
    setNewTitle('');
    setNewDetails('');
    alert('Your question has been published to the student community and faculty forum!');
  };

  const filtered = posts.filter(p => {
    if (selectedTopic === 'All') return true;
    return p.topic === selectedTopic;
  });

  return (
    <div className="space-y-6" id="student-community-page">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
            Student & Faculty Q&A Forum
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Legal & Tax Community Discussion
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Exchange practical courtroom queries, statutory interpretations, and NBR case studies with peers and mentors.
          </p>
        </div>

        <button
          onClick={() => setShowNewPostModal(true)}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl shadow-md flex items-center gap-2 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Ask Legal Query</span>
        </button>
      </div>

      {/* Topics Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['All', 'Taxation', 'VAT Compliance', 'Corporate Law', 'Bar Exam'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedTopic(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              selectedTopic === cat
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Stream */}
      <div className="space-y-4">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all space-y-4"
          >
            {/* Author info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatarUrl}
                  alt={post.authorName}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h4 className="text-xs font-black text-slate-900">{post.authorName}</h4>
                  <p className="text-[11px] text-slate-500">{post.authorTitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-slate-100 text-slate-700">
                  {post.topic}
                </span>
                <span className="text-[11px] text-slate-400">{post.timestamp}</span>
              </div>
            </div>

            {/* Title & Question */}
            <div className="space-y-1.5">
              <h3 className="text-base font-extrabold text-slate-900 font-display">
                {post.questionTitle}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                {post.questionDetails}
              </p>
            </div>

            {/* Instructor Verified Solution if available */}
            {post.hasInstructorResponse && post.instructorReplySnippet && (
              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Faculty Verified Answer by: <strong>{post.instructorName}</strong></span>
                </div>
                <p className="text-xs text-slate-800 italic leading-relaxed">
                  "{post.instructorReplySnippet}"
                </p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleUpvote(post.id)}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 font-bold transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.upvotes} Helpful</span>
                </button>

                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.repliesCount} Answers</span>
                </span>
              </div>

              <button
                onClick={() => alert(`Opening discussion thread for: ${post.questionTitle}`)}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
              >
                Join Discussion →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* New Question Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-base font-black text-slate-900 font-display">
                Post a Legal or Tax Query to Faculty
              </h3>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Subject Topic</label>
                <select
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value as any)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:border-indigo-500"
                >
                  <option value="Taxation">Taxation (Income Tax Act 2023)</option>
                  <option value="VAT Compliance">VAT Compliance (Mushak & SD Act 2012)</option>
                  <option value="Corporate Law">Corporate Law & RJSC</option>
                  <option value="Bar Exam">Bar Council Enrolment Preparation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Question Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Mandatory audit requirements for private limited companies..."
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-bold focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Detailed Inquiry & Context</label>
                <textarea
                  rows={4}
                  required
                  value={newDetails}
                  onChange={(e) => setNewDetails(e.target.value)}
                  placeholder="Describe your statutory question, cite any relevant sections, and explain what interpretation guidance you seek..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl shadow-md flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publish Query</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

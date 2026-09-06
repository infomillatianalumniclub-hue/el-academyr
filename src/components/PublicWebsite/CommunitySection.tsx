import React, { useState } from 'react';
import { mockCommunityPosts } from '../../data/mockData';
import { CommunityPost } from '../../types';
import { MessageSquare, ThumbsUp, Tag, PlusCircle, User, Sparkles } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>(mockCommunityPosts);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const handleUpvote = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: 'Md. Rahman',
      authorRole: 'Student Practitioner',
      authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      title: newTitle,
      content: newContent,
      category: 'General Discussion',
      upvotes: 1,
      repliesCount: 0,
      createdAt: 'Just now',
      tags: ['Discussion', 'Bangladesh Law']
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowNewPostModal(false);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Academy Community & Alumni Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mt-2">
              Legal Practitioner Q&A Forum
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Connect with Supreme Court Advocates, NBR Tax Consultants, and Bar Council candidates.
            </p>
          </div>

          <button
            onClick={() => setShowNewPostModal(true)}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold rounded-xl text-xs flex items-center gap-2 shadow-md"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Ask Legal Question</span>
          </button>
        </div>

        {/* Create Post Modal */}
        {showNewPostModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-xl w-full border border-slate-200 shadow-2xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 font-display">Ask a Question to Community</h3>
              <form onSubmit={handleCreatePost} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Question Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How to handle NBR audit query on Mushak 6.3?"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Detailed Query</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Explain the section or circumstance..."
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowNewPostModal(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-extrabold bg-amber-500 text-slate-950 rounded-xl shadow-md"
                  >
                    Post Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200 hover:border-amber-400/60 transition-all space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-9 h-9 rounded-full object-cover border border-slate-300"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{post.authorName}</h4>
                    <p className="text-[10px] text-slate-500">{post.authorRole} • {post.createdAt}</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold rounded-md">
                  {post.category}
                </span>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-base leading-snug mb-1">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">{post.content}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleUpvote(post.id)}
                    className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-200 text-xs transition-colors"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
                    <span>{post.upvotes} Upvotes</span>
                  </button>

                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <MessageSquare className="w-3.5 h-3.5" />
                    {post.repliesCount} Replies
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

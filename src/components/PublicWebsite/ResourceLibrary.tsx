import React, { useState } from 'react';
import { LegalResourceItem } from '../../types';
import { mockResources } from '../../data/mockData';
import { Download, FileText, Search, ShieldAlert, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const ResourceLibrary: React.FC = () => {
  const [resources, setResources] = useState<LegalResourceItem[]>(mockResources);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const categories = ['All', 'Tax & VAT', 'RJSC Corporate', 'Legal Templates', 'Bar Exam Prep'];

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const q = (searchQuery || '').toLowerCase().trim();
    const title = (res.title || '').toLowerCase();
    const desc = (res.description || '').toLowerCase();
    const matchesSearch = !q || title.includes(q) || desc.includes(q);
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (resItem: LegalResourceItem) => {
    // Increase download count
    setResources((prev) =>
      prev.map((r) => (r.id === resItem.id ? { ...r, downloads: r.downloads + 1 } : r))
    );
    setDownloadNotification(`Downloading "${resItem.title}" (${resItem.fileFormat})...`);
    setTimeout(() => setDownloadNotification(null), 4000);
  };

  return (
    <section className="py-12 bg-slate-900 text-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Toast Alert */}
        {downloadNotification && (
          <div className="fixed top-20 right-4 z-50 bg-emerald-500 text-slate-950 font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs border border-emerald-400 animate-bounce">
            <CheckCircle2 className="w-4 h-4" />
            <span>{downloadNotification}</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
            E-Lawyers Legal & Tax Resource Hub
          </span>
          <h2 className="text-3xl font-extrabold text-white font-display">
            Official NBR Forms, VAT Registers & Legal Templates
          </h2>
          <p className="text-sm text-slate-300">
            Free & premium downloadable resources curated for tax practitioners, advocates, and corporate legal managers in Bangladesh.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search Mushak 6.1, Income Tax return IT-11GA, RJSC MOA, Writ Petitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700 hover:border-amber-500/60 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-slate-900 text-amber-400 text-[10px] font-bold rounded-md border border-slate-700 uppercase">
                    {res.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {res.fileFormat} • {res.fileSize}
                  </span>
                </div>

                <h3 className="font-extrabold text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {res.downloads.toLocaleString()} Downloads
                </span>

                <button
                  onClick={() => handleDownload(res)}
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download File</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

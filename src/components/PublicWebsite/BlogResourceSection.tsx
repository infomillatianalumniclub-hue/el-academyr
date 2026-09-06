import React, { useState } from 'react';
import { FileText, Download, ArrowRight, BookOpen, Sparkles, CheckCircle2, Calendar, Clock, User, Tag } from 'lucide-react';
import { mockBlogPosts, BlogPost } from '../../data/publicWebsiteData';

interface BlogResourceSectionProps {
  onSelectPost?: (post: BlogPost) => void;
  onDownloadTemplate: (templateName: string) => void;
}

export const BlogResourceSection: React.FC<BlogResourceSectionProps> = ({
  onSelectPost,
  onDownloadTemplate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Legal Articles',
    'Tax Updates',
    'VAT Guidelines',
    'Accounting Tips',
    'Career Advice',
  ];

  const filteredPosts = mockBlogPosts.filter((post) => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  const legalTemplates = [
    {
      id: 'tmpl-1',
      title: 'Mushak 9.1 Monthly VAT Return Template',
      format: 'EXCEL',
      size: '1.4 MB',
      description: 'Official automated calculation sheet with input tax rebate sub-forms',
      category: 'Tax & VAT'
    },
    {
      id: 'tmpl-2',
      title: 'IT-10B Wealth Statement & Proof of Source',
      format: 'EXCEL',
      size: '890 KB',
      description: 'Income Tax Act 2023 compliant asset & liabilities reconciliation format',
      category: 'Tax & VAT'
    },
    {
      id: 'tmpl-3',
      title: 'Private Limited Company MOA & AOA Draft',
      format: 'WORD',
      size: '450 KB',
      description: 'RJSC vetted standard Memorandum & Articles with 40+ Objects clauses',
      category: 'Corporate'
    },
    {
      id: 'tmpl-4',
      title: 'High Court Article 102 Writ Petition Draft',
      format: 'WORD',
      size: '620 KB',
      description: 'Standard Mandamus & Certiorari writ petition format with verified affidavit',
      category: 'Legal'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Hub & Free Tools</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Legal Articles, Tax Updates & Downloadable Templates
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Stay up to date with national budget changes, SROs, High Court rulings, and download ready-to-use professional draft files.
          </p>
        </div>

        {/* Free Downloadable Resources Callout Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Instant Free Downloads
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Ready-to-Use Legal & Tax Formats (Bangladesh Standard)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              Updated for FY 2024–25
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalTemplates.map((tmpl) => (
              <div
                key={tmpl.id}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-blue-400 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                      tmpl.format === 'EXCEL' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {tmpl.format}
                    </span>
                    <span className="text-[10px] text-slate-400">{tmpl.size}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {tmpl.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {tmpl.description}
                  </p>
                </div>

                <button
                  onClick={() => onDownloadTemplate(tmpl.title)}
                  className="mt-4 w-full py-2 bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 text-xs font-bold rounded-xl border border-slate-200 hover:border-blue-300 flex items-center justify-center gap-1.5 transition-all shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Free</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost && onSelectPost(post)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={post.thumbnailUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-800 shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-slate-600">
                  By {post.author}
                </span>
                <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

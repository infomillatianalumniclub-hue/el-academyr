import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  FileSpreadsheet, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  FolderDown,
  ExternalLink
} from 'lucide-react';

interface ResourceItem {
  id: string;
  title: string;
  category: 'Tax & VAT' | 'RJSC Corporate' | 'Legal Templates' | 'Bar Exam';
  fileType: 'PDF' | 'XLSX' | 'DOCX';
  fileSize: string;
  downloadsCount: number;
  lastUpdated: string;
  description: string;
}

const mockResources: ResourceItem[] = [
  {
    id: 'res-01',
    title: 'Bangladesh Income Tax Act 2023 Gazette & Statutory Rules',
    category: 'Tax & VAT',
    fileType: 'PDF',
    fileSize: '4.8 MB',
    downloadsCount: 1420,
    lastUpdated: 'August 2026',
    description: 'Complete official gazette with SRO references and section comparative analysis.'
  },
  {
    id: 'res-02',
    title: 'Automated VAT Mushak 9.1 Return Excel Calculator (with Formula Checks)',
    category: 'Tax & VAT',
    fileType: 'XLSX',
    fileSize: '1.9 MB',
    downloadsCount: 2890,
    lastUpdated: 'September 2026',
    description: 'Pre-formatted spreadsheet calculating input tax rebate, VDS deductions, and net payable tax.'
  },
  {
    id: 'res-03',
    title: 'High Court Writ Petition & Civil Revision Standard Formats',
    category: 'Legal Templates',
    fileType: 'DOCX',
    fileSize: '820 KB',
    downloadsCount: 970,
    lastUpdated: 'July 2026',
    description: 'Editable Word documents containing verified Supreme Court registry headers, grounds, and affidavits.'
  },
  {
    id: 'res-04',
    title: 'RJSC Company Incorporation Memorandum & Articles of Association Models',
    category: 'RJSC Corporate',
    fileType: 'DOCX',
    fileSize: '1.1 MB',
    downloadsCount: 1650,
    lastUpdated: 'September 2026',
    description: 'MoA and AoA compliant with Companies Act 1994 with standard modern tech startup clauses.'
  },
  {
    id: 'res-05',
    title: 'Bangladesh Bar Council Advocate Enrolment 10-Year Question Bank & Answers',
    category: 'Bar Exam',
    fileType: 'PDF',
    fileSize: '12.4 MB',
    downloadsCount: 3410,
    lastUpdated: 'June 2026',
    description: 'Comprehensive past examination MCQ solutions and written answer structures.'
  },
  {
    id: 'res-06',
    title: 'Universal Self-Assessment Return Form Preparation Guide & Worksheet',
    category: 'Tax & VAT',
    fileType: 'PDF',
    fileSize: '2.3 MB',
    downloadsCount: 1890,
    lastUpdated: 'September 2026',
    description: 'Step-by-step illustrations for individual and salary taxpayer return filing.'
  }
];

export const StudentResources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = mockResources.filter(r => {
    if (!r) return false;
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const q = (searchQuery || '').toLowerCase().trim();
    const title = (r.title || '').toLowerCase();
    const desc = (r.description || '').toLowerCase();
    const matchesSearch = !q || title.includes(q) || desc.includes(q);
    return matchesCat && matchesSearch;
  });

  const getBadgeColor = (type: string) => {
    if (type === 'PDF') return 'bg-rose-100 text-rose-800';
    if (type === 'XLSX') return 'bg-emerald-100 text-emerald-800';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="space-y-6" id="student-resources-page">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Legal & Tax Practitioner Toolkit
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-2">
            Resource Library & Practice Templates
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Download verified statutory templates, automated Excel tax sheets, and Bar Council preparation guides.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Downloading student bundle package (ZIP, 32 MB)...")}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl shadow-xs flex items-center gap-2 transition-all"
          >
            <FolderDown className="w-4 h-4" />
            <span>Download All Toolkit (ZIP)</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
          {['All', 'Tax & VAT', 'RJSC Corporate', 'Legal Templates', 'Bar Exam'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates & gazettes..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Grid of Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${getBadgeColor(item.fileType)}`}>
                  {item.fileType} • {item.fileSize}
                </span>

                <span className="text-[11px] font-semibold text-slate-500">
                  Updated: {item.lastUpdated}
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-slate-900 font-display leading-snug group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                <span>Category: <strong className="text-slate-700">{item.category}</strong></span>
                <span>{item.downloadsCount} downloads</span>
              </div>
            </div>

            <button
              onClick={() => alert(`Downloading verified template: ${item.title} (${item.fileType})`)}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Free Asset</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

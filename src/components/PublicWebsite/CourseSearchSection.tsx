import React from 'react';
import { Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { CourseCategory } from '../../types';

interface CourseSearchSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedLevel: string;
  onLevelChange: (lvl: string) => void;
  selectedPrice: string;
  onPriceChange: (pr: string) => void;
  selectedDuration: string;
  onDurationChange: (dur: string) => void;
  selectedInstructor: string;
  onInstructorChange: (inst: string) => void;
  onResetFilters: () => void;
  instructorNames: string[];
}

export const CourseSearchSection: React.FC<CourseSearchSectionProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLevel,
  onLevelChange,
  selectedPrice,
  onPriceChange,
  selectedDuration,
  onDurationChange,
  selectedInstructor,
  onInstructorChange,
  onResetFilters,
  instructorNames,
}) => {
  const categories: (string | CourseCategory)[] = [
    'All Categories',
    'Legal Training',
    'Tax & VAT',
    'Corporate Compliance',
    'Accounting',
    'Professional Skills'
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Professional'];
  const priceOptions = ['All Prices', 'Under ৳3,000', '৳3,000 - ৳5,000', 'Above ৳5,000'];
  const durationOptions = ['All Durations', 'Under 20 Hours', '20 - 35 Hours', '35+ Hours'];

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'All Categories' ||
    selectedLevel !== 'All Levels' ||
    selectedPrice !== 'All Prices' ||
    selectedDuration !== 'All Durations' ||
    selectedInstructor !== 'All Instructors';

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
      {/* Top Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search courses, topics, skills (e.g. VAT Training, Bar Council, e-Return, RJSC)..."
          className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-xs"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Selects Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-1">
        {/* Category Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Level Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Level
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {levels.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Price
          </label>
          <select
            value={selectedPrice}
            onChange={(e) => onPriceChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {priceOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Duration Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Duration
          </label>
          <select
            value={selectedDuration}
            onChange={(e) => onDurationChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {durationOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Instructor Filter */}
        <div>
          <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
            Instructor
          </label>
          <select
            value={selectedInstructor}
            onChange={(e) => onInstructorChange(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All Instructors">All Instructors</option>
            {instructorNames.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filter Indicators & Reset */}
      {hasActiveFilters && (
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <span className="font-medium">
            Filtering results based on your custom criteria
          </span>
          <button
            onClick={onResetFilters}
            className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};

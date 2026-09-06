import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, Copy, Check } from 'lucide-react';

interface TemplateDownloadModalProps {
  isOpen?: boolean;
  templateName?: string;
  templateTitle?: string;
  onClose: () => void;
}

export const TemplateDownloadModal: React.FC<TemplateDownloadModalProps> = ({
  isOpen = true,
  templateName,
  templateTitle,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resolvedTemplateName = templateName || templateTitle || 'Legal Template';

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      // simulate file download trigger
      const element = document.createElement('a');
      const file = new Blob([
        `E-LAWYERS ACADEMY - BANGLADESH PROFESSIONAL TEMPLATE\nDocument: ${resolvedTemplateName}\nPublished for Professional Legal & Tax Practice in Bangladesh.\nCompliant with Finance Act 2024 & Companies Act 1994.`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      const safeDownloadName = (resolvedTemplateName || 'legal_template').toLowerCase().replace(/[^a-z0-9]/g, '_');
      element.download = `${safeDownloadName}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 400);
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(`E-Lawyers Academy Official Draft: ${resolvedTemplateName}`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-slate-200 text-slate-900 flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
              Verified Legal Template
            </span>
          </div>
          <h2 className="text-xl font-bold font-display text-white">
            {resolvedTemplateName}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Standard Bangladesh professional format with formulas, legal clauses, and verification notes.
          </p>
        </div>

        {/* Content Preview */}
        <div className="p-6 space-y-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>File Details</span>
              <span className="text-emerald-600">Free Lifetime Use</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p>• Clean formatted table with active Excel calculation formulas or Word styles.</p>
              <p>• Includes notes referencing relevant sections of Income Tax Act 2023 or VAT Act 2012.</p>
              <p>• Ready for immediate chamber customization and client filing.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              {downloaded ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Downloaded Successfully!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download File Now</span>
                </>
              )}
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy Ref'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

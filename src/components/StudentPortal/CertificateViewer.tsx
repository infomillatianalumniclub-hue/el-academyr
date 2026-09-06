import React, { useRef } from 'react';
import { Certificate } from '../../types';
import { Scale, Download, Award, ShieldCheck, CheckCircle2, Share2, X } from 'lucide-react';

interface CertificateViewerProps {
  certificate: Certificate;
  onClose: () => void;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({
  certificate,
  onClose,
}) => {
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Certificate of Completion
            </span>
            <h2 className="text-lg font-extrabold text-slate-900 font-display mt-1">
              {certificate.courseTitle}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download / Print PDF</span>
            </button>
          </div>
        </div>

        {/* Certificate Frame Container */}
        <div
          ref={certRef}
          className="relative bg-gradient-to-b from-amber-50/40 via-white to-amber-50/40 p-8 sm:p-12 border-8 border-slate-900 rounded-3xl text-center space-y-6 shadow-inner"
        >
          {/* Top Crest */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-lg border border-slate-800">
              <Scale className="w-10 h-10" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-slate-900 uppercase font-display">
              E-LAWYERS ACADEMY BANGLADESH
            </h1>
            <p className="text-xs text-amber-700 font-bold uppercase tracking-widest mt-1">
              Certified Legal & Tax Skill Credentials
            </p>
          </div>

          <p className="text-xs text-slate-600 uppercase tracking-widest font-semibold">
            This is to certify that
          </p>

          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display border-b-2 border-amber-400 inline-block pb-2 px-8">
            {certificate.studentName}
          </div>

          <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed font-medium">
            has successfully completed all lectures, practical Mushak/e-Return filing assessments, and module examinations for
          </p>

          <div className="text-xl font-black text-slate-900 font-display px-4">
            "{certificate.courseTitle}"
          </div>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center border-t border-slate-200">
            {/* Verification QR */}
            <div className="flex flex-col items-center">
              <img
                src={certificate.verificationQrUrl}
                alt="QR Verification"
                className="w-20 h-20 border-2 border-slate-900 rounded-xl p-1 bg-white"
              />
              <span className="text-[10px] text-slate-500 font-mono mt-1">ID: {certificate.id}</span>
            </div>

            {/* Issued Info */}
            <div className="space-y-1 text-xs">
              <span className="text-slate-500 font-semibold block text-[10px] uppercase">Grade Achieved</span>
              <span className="px-3 py-1 bg-amber-100 text-amber-900 font-extrabold rounded-full inline-block">
                {certificate.grade}
              </span>
              <span className="text-slate-500 font-semibold block text-[10px] uppercase mt-2">Issue Date</span>
              <span className="font-bold text-slate-900">{certificate.issueDate}</span>
            </div>

            {/* Instructor Signature */}
            <div className="sm:col-span-1 col-span-2 flex flex-col items-center">
              <div className="font-serif italic text-lg font-bold text-slate-900 border-b border-slate-400 pb-1 px-4">
                {certificate.instructorSignature}
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase mt-1">Senior Instructor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

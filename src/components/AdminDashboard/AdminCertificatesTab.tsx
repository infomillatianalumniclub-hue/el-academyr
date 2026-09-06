import React, { useState } from 'react';
import {
  Award,
  Search,
  CheckCircle2,
  ShieldCheck,
  QrCode,
  Download,
  Plus,
  X,
  FileCheck,
  Eye,
  Sliders
} from 'lucide-react';
import { mockAdminCertificates, AdminCertificateTemplate } from '../../data/teacherAdminMockData';

export const AdminCertificatesTab: React.FC = () => {
  const [templates, setTemplates] = useState<AdminCertificateTemplate[]>(mockAdminCertificates);
  const [verificationSearch, setVerificationSearch] = useState('');
  const [verifiedRecord, setVerifiedRecord] = useState<any | null>(null);
  const [showIssueModal, setShowIssueModal] = useState(false);

  // Manual Issue state
  const [manualCert, setManualCert] = useState({
    recipientName: '',
    recipientEmail: '',
    courseTitle: 'Comprehensive Income Tax Act 2023 Masterclass',
    honorsTitle: 'Honorary Tax Practitioner Fellow'
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationSearch.trim()) return;

    // Simulate verification
    setVerifiedRecord({
      sanadId: verificationSearch.trim().toUpperCase(),
      studentName: 'Advocate Farhana Yesmin',
      courseTitle: 'Comprehensive Income Tax Act 2023 Masterclass',
      issueDate: '15 July 2026',
      grade: 'Distinction (94%)',
      signatory: 'Advocate Md. Ruhul Amin, Supreme Court of Bangladesh',
      status: 'Valid & Cryptographically Signed'
    });
  };

  const handleManualIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCert.recipientName) return;

    alert(`Honorary Credential successfully issued to ${manualCert.recipientName}! Certificate Sanad ID: ELA-HON-${Date.now().toString().slice(-6)}`);
    setShowIssueModal(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
            <Award className="w-6 h-6 text-indigo-400" />
            <span>Academic Certificate & Sanad Verification Registry</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Supervise 2,400+ issued legal credentials, manage passing grade thresholds, and perform instant QR lookups.
          </p>
        </div>

        <button
          onClick={() => setShowIssueModal(true)}
          className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span>Issue Honorary Certificate</span>
        </button>
      </div>

      {/* Verification Lookup Bar */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <QrCode className="w-4 h-4 text-purple-400" />
          <span>Instant Certificate Authenticity Verification</span>
        </h3>
        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Enter Certificate Sanad ID (e.g. ELA-2026-TX-0891)..."
              value={verificationSearch}
              onChange={(e) => setVerificationSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-400 font-mono"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify Credential</span>
          </button>
        </form>

        {/* Verification Result Card */}
        {verifiedRecord && (
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Sanad ID: {verifiedRecord.sanadId}
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">
                {verifiedRecord.status}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-2 border-t border-emerald-500/20">
              <div>
                <span className="text-slate-500">Recipient Practitioner:</span>{' '}
                <strong className="text-white">{verifiedRecord.studentName}</strong>
              </div>
              <div>
                <span className="text-slate-500">Course:</span>{' '}
                <strong className="text-white">{verifiedRecord.courseTitle}</strong>
              </div>
              <div>
                <span className="text-slate-500">Issue Date:</span> {verifiedRecord.issueDate}
              </div>
              <div>
                <span className="text-slate-500">Grade:</span> {verifiedRecord.grade}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Certificate Templates & Issuance Criteria */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white">Active Certificate Templates & Standard Rules</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {templates.map((tmpl) => (
            <div
              key={tmpl.id}
              className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4 hover:border-slate-700 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {tmpl.designStyle}
                  </span>
                  <h4 className="font-bold text-white text-sm mt-2">{tmpl.templateName}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Signatory: {tmpl.signatoryName} ({tmpl.signatoryTitle})
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xl font-black text-white font-mono">{tmpl.issuedCount}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Issued</div>
                </div>
              </div>

              {/* Threshold Rules */}
              <div className="p-3.5 bg-slate-850 rounded-2xl border border-slate-800 space-y-2 text-xs">
                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  Automated Issuance Criteria
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Minimum Course Progress</span>
                  <span className="font-bold text-white font-mono">{tmpl.minCompletionPercent}% Completed</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Minimum Quiz Passing Score</span>
                  <span className="font-bold text-amber-400 font-mono">{tmpl.minQuizScorePercent}% Passed</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Live Masterclass Attendance</span>
                  <span className="font-bold text-white font-mono">{tmpl.minAttendancePercent}% Required</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Generation Enabled
                </span>
                <button
                  onClick={() => alert(`Previewing high-resolution template for ${tmpl.templateName}`)}
                  className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Certificate PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Issue Modal */}
      {showIssueModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white">Issue Honorary Legal Certificate</h3>
              <button
                onClick={() => setShowIssueModal(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleManualIssue} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">
                  Practitioner / Recipient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barrister Mahmud Chowdhury"
                  value={manualCert.recipientName}
                  onChange={(e) => setManualCert({ ...manualCert, recipientName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Recipient Email *</label>
                <input
                  type="email"
                  required
                  placeholder="recipient@lawchambers.com"
                  value={manualCert.recipientEmail}
                  onChange={(e) => setManualCert({ ...manualCert, recipientEmail: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Target Course / Title</label>
                <input
                  type="text"
                  value={manualCert.courseTitle}
                  onChange={(e) => setManualCert({ ...manualCert, courseTitle: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowIssueModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"
                >
                  Generate Sanad Credential
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

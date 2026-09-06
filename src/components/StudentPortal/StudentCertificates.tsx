import React, { useState } from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  X,
  Scale,
  Calendar,
  User,
  QrCode
} from 'lucide-react';
import { Certificate } from '../../types';
import { mockCertificates } from '../../data/mockData';

interface StudentCertificatesProps {
  certificates?: Certificate[];
  studentName?: string;
  onViewFullCertificate?: (certificate: Certificate) => void;
}

export const StudentCertificates: React.FC<StudentCertificatesProps> = ({
  certificates,
  studentName = 'Md. Rahman',
  onViewFullCertificate
}) => {
  const safeCertificates = (certificates && certificates.length > 0) ? certificates : mockCertificates;
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [verifyModalCert, setVerifyModalCert] = useState<Certificate | null>(null);

  const handleCopyLink = (certId: string) => {
    navigator.clipboard?.writeText(`https://e-lawyers.academy/verify/${certId}`);
    setCopiedId(certId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8" id="student-certificates-page">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1.5">
            <span className="px-3 py-1 bg-amber-400/20 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider rounded-full border border-amber-400/30">
              National Board of Revenue & Bar Aligned Credentials
            </span>
            <h1 className="text-2xl sm:text-3xl font-black font-display">
              Verified Professional Certificates
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Authentic QR-verifiable credentials endorsed by Supreme Court Advocates and NBR Tax Consultants, formatted for CVs, Bar Enrolments, and Corporate Portfolios.
            </p>
          </div>

          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 text-center sm:text-right">
            <div className="text-2xl font-black text-amber-400 font-display">5 Earned</div>
            <p className="text-[11px] text-slate-300">100% QR Verified & Tamper-Proof</p>
          </div>
        </div>
      </div>

      {/* Certificate Issuance Rules / Criteria Tracker */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
        <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Academy Automatic Certificate Issuance Criteria</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <span className="font-extrabold text-emerald-950 block">1. Course Completion</span>
              <span className="text-emerald-800 text-[11px]">100% of recorded video curriculum watched</span>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <span className="font-extrabold text-emerald-950 block">2. Required Attendance</span>
              <span className="text-emerald-800 text-[11px]">Minimum 80% attendance in live masterclasses</span>
            </div>
          </div>

          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <span className="font-extrabold text-emerald-950 block">3. Passed Final Assessment</span>
              <span className="text-emerald-800 text-[11px]">Score 70%+ on statutory module test</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="earned-certificates-grid">
        {safeCertificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group"
          >
            {/* Top Certificate Header */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Grade: {cert.grade || 'Distinction'}</span>
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  ID: {cert.id}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 font-display leading-snug">
                  {cert.courseTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Issued Date: <strong>{cert.issueDate}</strong></span>
                </p>
              </div>

              {/* Certificate Preview Card Shell */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-50/60 to-white border border-amber-200/80 relative overflow-hidden text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center mx-auto shadow-xs">
                  <Scale className="w-6 h-6" />
                </div>
                <p className="text-[10px] uppercase tracking-widest font-black text-slate-800">
                  E-Lawyers Academy Bangladesh
                </p>
                <p className="text-xs font-serif italic text-slate-700">
                  This certifies that <strong>{studentName}</strong> has completed the accredited syllabus.
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-amber-200/60">
                  <span>Signatory: {cert.instructorSignature}</span>
                  <span className="font-mono text-emerald-700 font-bold">● Authenticated</span>
                </div>
              </div>
            </div>

            {/* Actions: Download PDF, Share, Verify */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    if (onViewFullCertificate) {
                      onViewFullCertificate(cert);
                    } else {
                      setSelectedCert(cert);
                    }
                  }}
                  className="py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>

                <button
                  onClick={() => handleCopyLink(cert.id)}
                  className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  {copiedId === cert.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === cert.id ? 'Copied' : 'Share Link'}</span>
                </button>

                <button
                  onClick={() => setVerifyModalCert(cert)}
                  className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Verify QR</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QR Verification Modal */}
      {verifyModalCert && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 text-center space-y-4">
            <div className="flex justify-end">
              <button 
                onClick={() => setVerifyModalCert(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-black text-slate-900 font-display">
              Digital Authentication & QR Seal
            </h3>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl shadow-inner border border-slate-200 flex items-center justify-center">
                <img 
                  src={verifyModalCert.verificationQrUrl || `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://e-lawyers.academy/verify/${verifyModalCert.id}`}
                  alt="Verification QR"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] font-mono font-bold text-slate-700">
                Certificate ID: {verifyModalCert.id}
              </p>
              <p className="text-[10px] text-slate-500">
                Issued to: <strong>{studentName}</strong> • {verifyModalCert.issueDate}
              </p>
            </div>

            <p className="text-xs text-slate-500">
              Anyone can scan this QR code with any smartphone camera to verify legal authenticity against the E-Lawyers Academy Central Ledger.
            </p>

            <button
              onClick={() => setVerifyModalCert(null)}
              className="w-full py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl"
            >
              Close Verification
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

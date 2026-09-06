import React, { useState } from 'react';
import { Course } from '../../types';
import { CreditCard, ShieldCheck, CheckCircle2, Loader2, X, Smartphone, ArrowRight } from 'lucide-react';

interface PaymentModalProps {
  course: Course;
  studentName: string;
  studentPhone: string;
  onClose: () => void;
  onSuccess: (transaction: any) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  course,
  studentName,
  studentPhone,
  onClose,
  onSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'bKash' | 'Nagad' | 'SSLCommerz'>('bKash');
  const [phone, setPhone] = useState(studentPhone || '01711000000');
  const [trxId, setTrxId] = useState('9K382L01');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<any>(null);

  const handleProcessPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const res = await fetch('/api/payment/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: course.id,
          courseTitle: course.title,
          studentName,
          amount: course.offerPrice,
          paymentMethod,
          studentPhone: phone,
          trxId
        })
      });

      const data = await res.json();
      if (data.success) {
        setPaymentSuccess(data.transaction);
        setTimeout(() => {
          onSuccess(data.transaction);
        }, 1500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
            Secure Payment Gateway
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 font-display">
            Course Checkout & Enrollment
          </h2>
          <p className="text-xs text-slate-600 line-clamp-1">{course.title}</p>
        </div>

        {/* Price Summary */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-semibold block">Total Enrollment Fee</span>
            <span className="text-2xl font-black text-slate-900 font-display">৳{course.offerPrice.toLocaleString()}</span>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Instant Course Access
          </span>
        </div>

        {paymentSuccess ? (
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-300 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-extrabold text-emerald-950 font-display">Payment Successful!</h3>
            <p className="text-xs text-emerald-800 font-medium">
              Txn ID: {paymentSuccess.transactionId} • Amount: ৳{paymentSuccess.amount}
            </p>
            <p className="text-xs text-slate-600">Redirecting to video player portal...</p>
          </div>
        ) : (
          <form onSubmit={handleProcessPayment} className="space-y-4">
            {/* Gateway Selection */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bKash')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'bKash'
                      ? 'bg-rose-50 border-rose-500 text-rose-800 ring-2 ring-rose-400/30'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-rose-600 text-sm font-black">bKash</span>
                  <span className="text-[10px] text-slate-500">Merchant Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('Nagad')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'Nagad'
                      ? 'bg-amber-50 border-amber-500 text-amber-800 ring-2 ring-amber-400/30'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-amber-600 text-sm font-black">Nagad</span>
                  <span className="text-[10px] text-slate-500">Mobile Money</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('SSLCommerz')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'SSLCommerz'
                      ? 'bg-blue-50 border-blue-500 text-blue-800 ring-2 ring-blue-400/30'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span className="text-blue-600 text-sm font-black">Cards</span>
                  <span className="text-[10px] text-slate-500">Visa / Mastercard</span>
                </button>
              </div>
            </div>

            {/* bKash / Nagad Instructions */}
            <div className="p-3.5 bg-slate-900 text-white rounded-2xl text-xs space-y-1">
              <p className="font-bold text-amber-400">
                1. Dial *247# or open {paymentMethod} App
              </p>
              <p className="text-slate-300 text-[11px]">
                2. Select 'Make Payment' to Merchant Number: <span className="font-mono font-bold text-white">01711000000</span>
              </p>
              <p className="text-slate-300 text-[11px]">
                3. Enter amount <strong>৳{course.offerPrice}</strong> & copy the Transaction ID (TrxID).
              </p>
            </div>

            {/* Form Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Your Mobile Number</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01711000000"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Transaction ID (TrxID)</label>
                <input
                  type="text"
                  required
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  placeholder="e.g. 9K382L01"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold uppercase focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying {paymentMethod} Transaction...</span>
                </>
              ) : (
                <>
                  <span>Verify Payment & Enroll</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

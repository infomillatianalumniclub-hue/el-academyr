import React, { useState } from 'react';
import {
  Settings,
  Save,
  CheckCircle2,
  Lock,
  Radio,
  Smartphone,
  Video,
  Database,
  AlertTriangle,
  Eye,
  EyeOff
} from 'lucide-react';

export const AdminSettingsTab: React.FC = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  // Settings state
  const [settings, setSettings] = useState({
    academyName: 'E-Lawyers Academy Bangladesh',
    supportEmail: 'support@elawyers.com.bd',
    supportPhone: '+880 1711-234567',
    officeAddress: 'Suite 904, Supreme Court Bar Association Annex Building, Dhaka-1000',
    bkashAppKey: 'bkash_app_key_live_98124801824',
    bkashAppSecret: '************************************',
    nagadMerchantId: 'NGD_MERCHANT_771029',
    sslStoreId: 'elawyerslive',
    zoomAccountId: 'zm_acc_881920',
    zoomClientId: 'zm_cli_990184719',
    defaultCommissionRate: 20
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-extrabold text-white font-display flex items-center gap-2.5">
          <Settings className="w-6 h-6 text-purple-400" />
          <span>System Settings & Infrastructure Credentials</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Configure Bangladesh payment gateways, Zoom Server-to-Server OAuth, and platform security flags.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-400">
          <CheckCircle2 className="w-4 h-4" />
          <span>System configuration changes saved securely!</span>
        </div>
      )}

      {/* Maintenance Mode Warning Card */}
      <div className="p-5 bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Platform Maintenance Mode</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            When enabled, non-admin visitors will see a scheduled maintenance notice during database migrations.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            const nextState = !maintenanceMode;
            setMaintenanceMode(nextState);
            alert(`Platform Maintenance Mode is now ${nextState ? 'ENABLED' : 'DISABLED'}.`);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            maintenanceMode
              ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
              : 'bg-slate-800 text-slate-300 hover:text-white'
          }`}
        >
          {maintenanceMode ? 'Active (Maintenance On)' : 'Disabled (Live Normal)'}
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Academy Information */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Academy Identity & Official Contact
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Academy Brand Name</label>
              <input
                type="text"
                value={settings.academyName}
                onChange={(e) => setSettings({ ...settings, academyName: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Support Official Email</label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Chamber Helpline Phone</label>
              <input
                type="text"
                value={settings.supportPhone}
                onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Default Platform Commission (%)
              </label>
              <input
                type="number"
                value={settings.defaultCommissionRate}
                onChange={(e) =>
                  setSettings({ ...settings, defaultCommissionRate: Number(e.target.value) })
                }
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div className="text-xs pt-1">
            <label className="block text-slate-300 font-semibold mb-1">Physical Chamber Address</label>
            <input
              type="text"
              value={settings.officeAddress}
              onChange={(e) => setSettings({ ...settings, officeAddress: e.target.value })}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
            />
          </div>
        </div>

        {/* Payment Gateways API Credentials */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>Bangladeshi Payment Gateways (bKash, Nagad, SSLCommerz)</span>
            </h3>
            <button
              type="button"
              onClick={() => setShowSecrets(!showSecrets)}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-bold"
            >
              {showSecrets ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showSecrets ? 'Hide Secrets' : 'Reveal Masked Keys'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">bKash App Key</label>
              <input
                type="text"
                value={settings.bkashAppKey}
                onChange={(e) => setSettings({ ...settings, bkashAppKey: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">bKash App Secret</label>
              <input
                type={showSecrets ? 'text' : 'password'}
                value={settings.bkashAppSecret}
                onChange={(e) => setSettings({ ...settings, bkashAppSecret: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nagad Merchant ID</label>
              <input
                type="text"
                value={settings.nagadMerchantId}
                onChange={(e) => setSettings({ ...settings, nagadMerchantId: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">SSLCommerz Store ID</label>
              <input
                type="text"
                value={settings.sslStoreId}
                onChange={(e) => setSettings({ ...settings, sslStoreId: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Live Video & Zoom Server-to-Server OAuth */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-3xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Video className="w-4 h-4 text-blue-400" />
            <span>Zoom Enterprise API (Server-to-Server OAuth)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Zoom Account ID</label>
              <input
                type="text"
                value={settings.zoomAccountId}
                onChange={(e) => setSettings({ ...settings, zoomAccountId: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Zoom Client ID</label>
              <input
                type="text"
                value={settings.zoomClientId}
                onChange={(e) => setSettings({ ...settings, zoomClientId: e.target.value })}
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-600/20 flex items-center gap-2 transition"
          >
            <Save className="w-4 h-4" />
            <span>Save System Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
};

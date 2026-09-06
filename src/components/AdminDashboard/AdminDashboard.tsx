import React, { useState } from 'react';
import { AdminDashboardLayout, AdminTab } from './AdminDashboardLayout';
import { AdminOverviewTab } from './AdminOverviewTab';
import { AdminUsersTab } from './AdminUsersTab';
import { AdminCoursesReviewTab } from './AdminCoursesReviewTab';
import { AdminFinanceTab } from './AdminFinanceTab';
import { AdminCertificatesTab } from './AdminCertificatesTab';
import { AdminModerationTab } from './AdminModerationTab';
import { AdminReportsTab } from './AdminReportsTab';
import { AdminSettingsTab } from './AdminSettingsTab';

interface AdminDashboardProps {
  onSwitchRole: (role: 'public' | 'student' | 'teacher') => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onSwitchRole }) => {
  const [currentTab, setCurrentTab] = useState<AdminTab>('overview');

  return (
    <div className="w-full min-h-screen bg-slate-950">
      <AdminDashboardLayout
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onSwitchRole={onSwitchRole}
      >
        {currentTab === 'overview' && (
          <AdminOverviewTab onNavigateTab={setCurrentTab} />
        )}

        {currentTab === 'users' && <AdminUsersTab />}

        {currentTab === 'courses' && <AdminCoursesReviewTab />}

        {currentTab === 'finance' && <AdminFinanceTab />}

        {currentTab === 'certificates' && <AdminCertificatesTab />}

        {currentTab === 'moderation' && <AdminModerationTab />}

        {currentTab === 'reports' && <AdminReportsTab />}

        {currentTab === 'settings' && <AdminSettingsTab />}
      </AdminDashboardLayout>
    </div>
  );
};

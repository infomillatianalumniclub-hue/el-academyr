import React, { useState } from 'react';
import { TeacherDashboardLayout, TeacherTab } from './TeacherDashboardLayout';
import { TeacherOverviewTab } from './TeacherOverviewTab';
import { TeacherCoursesTab } from './TeacherCoursesTab';
import { TeacherCourseBuilderTab } from './TeacherCourseBuilderTab';
import { TeacherVideoLibraryTab } from './TeacherVideoLibraryTab';
import { TeacherLiveClassesTab } from './TeacherLiveClassesTab';
import { TeacherStudentsTab } from './TeacherStudentsTab';
import { TeacherAssignmentsTab } from './TeacherAssignmentsTab';
import { TeacherQuizTab } from './TeacherQuizTab';
import { TeacherReviewsTab } from './TeacherReviewsTab';
import { TeacherAnalyticsTab } from './TeacherAnalyticsTab';
import { TeacherEarningsTab } from './TeacherEarningsTab';
import { TeacherProfileTab } from './TeacherProfileTab';
import { TeacherAIQuizModal } from './TeacherAIQuizModal';

interface TeacherOverviewProps {
  onSwitchRole: (role: 'public' | 'student' | 'admin') => void;
}

export const TeacherOverview: React.FC<TeacherOverviewProps> = ({ onSwitchRole }) => {
  const [currentTab, setCurrentTab] = useState<TeacherTab>('dashboard');
  const [showAIQuizModal, setShowAIQuizModal] = useState(false);

  const handleOpenCourseBuilder = (courseId: string) => {
    setCurrentTab('builder');
  };

  const handleCreateCourseOpen = () => {
    setCurrentTab('courses');
  };

  return (
    <div className="w-full min-h-screen bg-slate-950">
      <TeacherDashboardLayout
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onSwitchRole={onSwitchRole}
        onCreateCourseOpen={handleCreateCourseOpen}
      >
        {currentTab === 'dashboard' && (
          <TeacherOverviewTab
            onNavigateTab={setCurrentTab}
            onOpenAIQuizGen={() => setShowAIQuizModal(true)}
            onCreateCourseOpen={handleCreateCourseOpen}
          />
        )}

        {currentTab === 'courses' && (
          <TeacherCoursesTab
            onOpenCourseBuilder={handleOpenCourseBuilder}
            onOpenAIQuizGen={() => setShowAIQuizModal(true)}
          />
        )}

        {currentTab === 'builder' && <TeacherCourseBuilderTab />}

        {currentTab === 'videos' && <TeacherVideoLibraryTab />}

        {currentTab === 'live' && <TeacherLiveClassesTab />}

        {currentTab === 'students' && <TeacherStudentsTab />}

        {currentTab === 'assignments' && <TeacherAssignmentsTab />}

        {currentTab === 'quiz' && (
          <TeacherQuizTab onOpenAIQuizGen={() => setShowAIQuizModal(true)} />
        )}

        {currentTab === 'reviews' && <TeacherReviewsTab />}

        {currentTab === 'analytics' && <TeacherAnalyticsTab />}

        {currentTab === 'earnings' && <TeacherEarningsTab />}

        {currentTab === 'profile' && <TeacherProfileTab />}
      </TeacherDashboardLayout>

      {/* AI Quiz Generator Dialog */}
      <TeacherAIQuizModal
        isOpen={showAIQuizModal}
        onClose={() => setShowAIQuizModal(false)}
      />
    </div>
  );
};

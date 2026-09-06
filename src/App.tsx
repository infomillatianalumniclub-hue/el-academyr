import React, { useState } from 'react';
import { UserRole, Course, Certificate, LiveClassSession, PaymentTransaction } from './types';
import { mockCourses, mockCertificates, mockLiveClasses, mockTransactions, mockLeaderboardData } from './data/mockData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/PublicWebsite/HeroSection';
import { CategoryGrid } from './components/PublicWebsite/CategoryGrid';
import { CourseGrid } from './components/PublicWebsite/CourseGrid';
import { CourseDetailPage } from './components/PublicWebsite/CourseDetailPage';
import { ResourceLibrary } from './components/PublicWebsite/ResourceLibrary';
import { PricingSection } from './components/PublicWebsite/PricingSection';
import { CommunitySection } from './components/PublicWebsite/CommunitySection';
import { WhyChooseSection } from './components/PublicWebsite/WhyChooseSection';
import { InstructorShowcase } from './components/PublicWebsite/InstructorShowcase';
import { TestimonialSection } from './components/PublicWebsite/TestimonialSection';
import { BlogResourceSection } from './components/PublicWebsite/BlogResourceSection';
import { FAQSection } from './components/PublicWebsite/FAQSection';
import { CourseSearchSection } from './components/PublicWebsite/CourseSearchSection';
import { VideoPreviewModal } from './components/PublicWebsite/VideoPreviewModal';
import { InstructorApplyModal } from './components/PublicWebsite/InstructorApplyModal';
import { TemplateDownloadModal } from './components/PublicWebsite/TemplateDownloadModal';
import { VideoTestimonial } from './data/publicWebsiteData';

import { StudentDashboard } from './components/StudentPortal/StudentDashboard';
import { StudentPortalLayout } from './components/StudentPortal/StudentPortalLayout';
import { StudentDashboardHome } from './components/StudentPortal/StudentDashboardHome';
import { StudentMyCourses } from './components/StudentPortal/StudentMyCourses';
import { StudentLiveClasses } from './components/StudentPortal/StudentLiveClasses';
import { StudentAssignments } from './components/StudentPortal/StudentAssignments';
import { StudentQuizzes } from './components/StudentPortal/StudentQuizzes';
import { StudentCertificates } from './components/StudentPortal/StudentCertificates';
import { StudentAnalytics } from './components/StudentPortal/StudentAnalytics';
import { StudentPayments } from './components/StudentPortal/StudentPayments';
import { StudentProfileSettings } from './components/StudentPortal/StudentProfileSettings';
import { StudentNotificationCenter } from './components/StudentPortal/StudentNotificationCenter';
import { StudentResources } from './components/StudentPortal/StudentResources';
import { StudentCommunity } from './components/StudentPortal/StudentCommunity';
import { StudentLeaderboard } from './components/StudentPortal/StudentLeaderboard';
import { VideoPlayerPortal } from './components/StudentPortal/VideoPlayerPortal';
import { QuizSystem } from './components/StudentPortal/QuizSystem';
import { CertificateViewer } from './components/StudentPortal/CertificateViewer';
import { AILegalAssistantDrawer } from './components/StudentPortal/AILegalAssistantDrawer';
import { AIRoadmapModal } from './components/StudentPortal/AIRoadmapModal';

import { 
  mockStudentProfile, 
  mockDetailedEnrolledCourses, 
  mockStudentAssignments, 
  mockStudentQuizzes, 
  mockStudentNotifications 
} from './data/studentMockData';

import { TeacherOverview } from './components/TeacherDashboard/TeacherOverview';
import { AIQuizGenerator } from './components/TeacherDashboard/AIQuizGenerator';

import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import { PaymentModal } from './components/Payment/PaymentModal';

export default App;
export function App() {
  // Global State
  const [currentRole, setCurrentRole] = useState<UserRole>('Public');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLevel, setSelectedLevel] = useState<string>('All Levels');
  const [selectedPrice, setSelectedPrice] = useState<string>('All Prices');
  const [selectedDuration, setSelectedDuration] = useState<string>('All Durations');
  const [selectedInstructor, setSelectedInstructor] = useState<string>('All Instructors');

  // Courses & Data State
  const [courses, setCourses] = useState<Course[]>(mockCourses);
  const [certificates, setCertificates] = useState<Certificate[]>(mockCertificates);
  const [liveClasses, setLiveClasses] = useState<LiveClassSession[]>(mockLiveClasses);
  const [transactions, setTransactions] = useState<PaymentTransaction[]>(mockTransactions);
  const [leaderboardStudents, setLeaderboardStudents] = useState(mockLeaderboardData);

  // Student State
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['c-tax-01', 'c-vat-01']);
  const [activeCourseForLearning, setActiveCourseForLearning] = useState<Course | null>(null);
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [studentProfile, setStudentProfile] = useState(mockStudentProfile);
  const [detailedCourses, setDetailedCourses] = useState(mockDetailedEnrolledCourses);
  const [studentAssignments, setStudentAssignments] = useState(mockStudentAssignments);
  const [studentQuizzes, setStudentQuizzes] = useState(mockStudentQuizzes);
  const [studentNotifications, setStudentNotifications] = useState(mockStudentNotifications);

  // Modal / Drawer States
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [selectedCourseForPayment, setSelectedCourseForPayment] = useState<Course | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState<boolean>(false);
  const [showAIRoadmap, setShowAIRoadmap] = useState<boolean>(false);
  const [showAIQuizGen, setShowAIQuizGen] = useState<boolean>(false);
  const [activeVideoModal, setActiveVideoModal] = useState<{ title: string; subtitle?: string; videoUrl: string; courseToEnroll?: Course } | null>(null);
  const [showInstructorModal, setShowInstructorModal] = useState<boolean>(false);
  const [activeTemplateDownload, setActiveTemplateDownload] = useState<string | null>(null);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All Levels');
    setSelectedPrice('All Prices');
    setSelectedDuration('All Durations');
    setSelectedInstructor('All Instructors');
  };

  const instructorNames = Array.from(
    new Set(courses.map((c) => c?.instructor?.name).filter((name): name is string => Boolean(name)))
  );

  // Filter Courses based on search and multi-facet filters
  const filteredCourses = courses.filter((c) => {
    if (!c) return false;

    const courseCategory = c.category || '';
    const matchesCategory =
      !selectedCategory ||
      selectedCategory === 'All' ||
      selectedCategory === 'All Categories' ||
      courseCategory === selectedCategory;

    const q = (searchQuery || '').toLowerCase().trim();
    const title = (c.title || '').toLowerCase();
    const cat = courseCategory.toLowerCase();
    const instName = (c.instructor?.name || '').toLowerCase();
    const highlights = (c.keyHighlights || []).map((h) => (h ? String(h).toLowerCase() : ''));

    const matchesSearch =
      !q ||
      title.includes(q) ||
      cat.includes(q) ||
      instName.includes(q) ||
      highlights.some((h) => h.includes(q));

    const courseLevel = (c.level || '').toLowerCase();
    const selLevel = (selectedLevel || 'All Levels').toLowerCase();
    const matchesLevel =
      selLevel === 'all levels' ||
      (courseLevel !== '' && courseLevel === selLevel);

    let matchesPrice = true;
    if (selectedPrice === 'Under ৳3,000') {
      matchesPrice = (c.offerPrice ?? 0) < 3000;
    } else if (selectedPrice === '৳3,000 - ৳5,000') {
      matchesPrice = (c.offerPrice ?? 0) >= 3000 && (c.offerPrice ?? 0) <= 5000;
    } else if (selectedPrice === 'Above ৳5,000') {
      matchesPrice = (c.offerPrice ?? 0) > 5000;
    }

    let matchesDuration = true;
    if (selectedDuration === 'Under 20 Hours') {
      matchesDuration = (c.durationHours ?? 0) < 20;
    } else if (selectedDuration === '20 - 35 Hours') {
      matchesDuration = (c.durationHours ?? 0) >= 20 && (c.durationHours ?? 0) <= 35;
    } else if (selectedDuration === '35+ Hours') {
      matchesDuration = (c.durationHours ?? 0) > 35;
    }

    const matchesInstructor =
      !selectedInstructor ||
      selectedInstructor === 'All Instructors' ||
      c.instructor?.name === selectedInstructor;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesLevel &&
      matchesPrice &&
      matchesDuration &&
      matchesInstructor
    );
  });

  // Role Switch Handler
  const handleRoleChange = (role: UserRole) => {
    setCurrentRole(role);
    if (role === 'Public') setActiveTab('home');
    if (role === 'Student') setActiveTab('student-home');
    if (role === 'Teacher') setActiveTab('teacher-dashboard');
    if (role === 'Admin') setActiveTab('admin-dashboard');
  };

  // Payment Success Handler
  const handlePaymentSuccess = (transaction: PaymentTransaction) => {
    setTransactions([transaction, ...transactions]);
    if (!enrolledCourseIds.includes(transaction.courseId)) {
      setEnrolledCourseIds([...enrolledCourseIds, transaction.courseId]);
    }
    const courseToPlay = courses.find((c) => c.id === transaction.courseId);
    setSelectedCourseForPayment(null);
    setSelectedCourseForDetail(null);
    setCurrentRole('Student');
    setActiveTab('learning-player');
    if (courseToPlay) setActiveCourseForLearning(courseToPlay);
  };

  const enrolledCoursesList = courses
    .filter((c) => enrolledCourseIds.includes(c.id))
    .map((c, idx) => ({
      courseId: c.id,
      courseTitle: c.title,
      progressPercent: idx === 0 ? 65 : 20,
      completedLessons: idx === 0 ? 8 : 3,
      totalLessons: 12,
      lastAccessed: idx === 0 ? 'Today, 2:30 PM' : '3 days ago'
    }));

  // Dedicated Full-Screen SaaS Layout for Faculty / Instructors
  if (currentRole === 'Teacher') {
    return (
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <TeacherOverview
          onSwitchRole={(role) => {
            if (role === 'public') handleRoleChange('Public');
            else if (role === 'student') handleRoleChange('Student');
            else if (role === 'admin') handleRoleChange('Admin');
          }}
        />
      </div>
    );
  }

  // Dedicated Full-Screen SaaS Layout for Central Academy Administration
  if (currentRole === 'Admin') {
    return (
      <div className="min-h-screen bg-slate-950 font-sans text-slate-100">
        <AdminDashboard
          onSwitchRole={(role) => {
            if (role === 'public') handleRoleChange('Public');
            else if (role === 'student') handleRoleChange('Student');
            else if (role === 'teacher') handleRoleChange('Teacher');
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col justify-between">
      {/* Navigation Header */}
      <Header
        currentRole={currentRole}
        onRoleChange={handleRoleChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenAIAssistant={() => setShowAIAssistant(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* ================= PUBLIC WEBSITE ================= */}
        {currentRole === 'Public' && (
          <>
            {activeTab === 'home' && (
              <div className="space-y-0">
                {/* 1. Hero Section */}
                <HeroSection
                  onBrowseCourses={() => {
                    const el = document.getElementById('featured-courses');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onOpenAIAssistant={() => setShowAIAssistant(true)}
                  onOpenAIRoadmap={() => setShowAIRoadmap(true)}
                  onBecomeInstructor={() => setShowInstructorModal(true)}
                />

                {/* 2. Why Choose E-Lawyers Academy */}
                <WhyChooseSection
                  onExploreCourses={() => {
                    const el = document.getElementById('featured-courses');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onExploreTools={() => setShowAIAssistant(true)}
                />

                {/* 3. Category Exploration Grid */}
                <CategoryGrid
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    const el = document.getElementById('course-search-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />

                {/* 4. Course Search & Filter Bar */}
                <div id="course-search-section">
                  <CourseSearchSection
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    selectedLevel={selectedLevel}
                    onLevelChange={setSelectedLevel}
                    selectedPrice={selectedPrice}
                    onPriceChange={setSelectedPrice}
                    selectedDuration={selectedDuration}
                    onDurationChange={setSelectedDuration}
                    selectedInstructor={selectedInstructor}
                    onInstructorChange={setSelectedInstructor}
                    instructorNames={instructorNames}
                    totalResults={filteredCourses.length}
                    onResetFilters={resetAllFilters}
                  />
                </div>

                {/* 5. Featured High-Converting Courses */}
                <div id="featured-courses">
                  <CourseGrid
                    courses={filteredCourses}
                    onSelectCourse={(c) => setSelectedCourseForDetail(c)}
                    onEnrollCourse={(c) => setSelectedCourseForPayment(c)}
                    onOpenLegalTools={() => setShowAIAssistant(true)}
                  />
                </div>

                {/* 6. Instructor Showcase */}
                <InstructorShowcase
                  onSelectInstructor={(name) => {
                    setSelectedInstructor(name);
                    const el = document.getElementById('featured-courses');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onBecomeInstructor={() => setShowInstructorModal(true)}
                />

                {/* 7. Student Reviews & Video Testimonials */}
                <TestimonialSection
                  onPlayVideoTestimonial={(video) => {
                    setActiveVideoModal({
                      title: `${video.studentName}'s Success Story`,
                      subtitle: `${video.role} • ${video.courseTitle}`,
                      videoUrl: video.videoUrl,
                      courseToEnroll: courses.find((c) => c.title.includes(video.courseTitle) || video.courseTitle.includes(c.title)),
                    });
                  }}
                  onEnrollInCourse={(courseTitle) => {
                    const targetStr = (courseTitle || '').toLowerCase();
                    const match = courses.find((c) => {
                      const cTitle = (c.title || '').toLowerCase();
                      return (targetStr && cTitle.includes(targetStr)) || (cTitle && targetStr.includes(cTitle));
                    }) || courses[0];
                    setSelectedCourseForPayment(match);
                  }}
                />

                {/* 8. Blog & Free Resource Library */}
                <BlogResourceSection
                  onDownloadTemplate={(templateName) => {
                    setActiveTemplateDownload(templateName);
                  }}
                  onReadArticle={(articleTitle) => {
                    const safeTitle = (articleTitle || '').toLowerCase();
                    const matchedCourse = courses.find((c) => 
                      safeTitle.includes('vat') ? c.category === 'Tax & VAT' : c.category === 'Legal Training'
                    ) || courses[0];
                    setSelectedCourseForDetail(matchedCourse);
                  }}
                />

                {/* 9. Interactive FAQ Accordion */}
                <FAQSection
                  onConsultAdvisor={() => {
                    setShowAIAssistant(true);
                  }}
                />

                {/* 10. Pro Membership Pricing */}
                <PricingSection
                  onSelectPlan={(planName, price) => {
                    setSelectedCourseForPayment(courses[0]);
                  }}
                />

                {/* 11. Alumni & Community */}
                <CommunitySection />
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-4 pt-6">
                <CategoryGrid
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                <CourseSearchSection
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  selectedLevel={selectedLevel}
                  onLevelChange={setSelectedLevel}
                  selectedPrice={selectedPrice}
                  onPriceChange={setSelectedPrice}
                  selectedDuration={selectedDuration}
                  onDurationChange={setSelectedDuration}
                  selectedInstructor={selectedInstructor}
                  onInstructorChange={setSelectedInstructor}
                  instructorNames={instructorNames}
                  totalResults={filteredCourses.length}
                  onResetFilters={resetAllFilters}
                />
                <CourseGrid
                  courses={filteredCourses}
                  onSelectCourse={(c) => setSelectedCourseForDetail(c)}
                  onEnrollCourse={(c) => setSelectedCourseForPayment(c)}
                  onOpenLegalTools={() => setShowAIAssistant(true)}
                />
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-8 py-6">
                <BlogResourceSection
                  onDownloadTemplate={(templateName) => {
                    setActiveTemplateDownload(templateName);
                  }}
                  onReadArticle={(articleTitle) => {
                    const safeTitle = (articleTitle || '').toLowerCase();
                    const matchedCourse = courses.find((c) => safeTitle.includes('vat') ? c.category === 'Tax & VAT' : c.category === 'Legal Training') || courses[0];
                    setSelectedCourseForDetail(matchedCourse);
                  }}
                />
                <ResourceLibrary />
              </div>
            )}

            {activeTab === 'community' && <CommunitySection />}

            {activeTab === 'pricing' && (
              <PricingSection
                onSelectPlan={() => setSelectedCourseForPayment(courses[0])}
              />
            )}
          </>
        )}

        {/* ================= STUDENT PORTAL (PREMIUM LMS) ================= */}
        {currentRole === 'Student' && (
          <StudentPortalLayout
            currentTab={activeTab}
            onTabChange={(newTab) => {
              if (newTab === 'student-player' && !activeCourseForLearning) {
                setActiveCourseForLearning(courses[0]);
              }
              setActiveTab(newTab);
            }}
            profile={studentProfile}
            notifications={studentNotifications}
            onSwitchRole={(newRole) => {
              if (newRole === 'admin') handleRoleChange('Admin');
              else if (newRole === 'instructor') handleRoleChange('Teacher');
              else handleRoleChange('Student');
            }}
          >
            {(activeTab === 'student-home' || activeTab === 'student-dashboard') && (
              <StudentDashboardHome
                profile={studentProfile}
                enrolledCourses={detailedCourses}
                assignments={studentAssignments}
                quizzes={studentQuizzes}
                liveClasses={liveClasses}
                onNavigateTab={(tab) => {
                  if (tab === 'student-player' && !activeCourseForLearning) {
                    setActiveCourseForLearning(courses[0]);
                  }
                  setActiveTab(tab);
                }}
                onResumeCourse={(courseId) => {
                  const target = courses.find((c) => {
                    const cId = c.id || '';
                    const cTitle = (c.title || '').toLowerCase();
                    const sId = (courseId || '').toLowerCase();
                    return cId === courseId || (sId && cTitle.includes(sId));
                  }) || courses[0];
                  setActiveCourseForLearning(target);
                  setActiveTab('student-player');
                }}
                onJoinLiveClass={(sessionId) => {
                  setActiveTab('student-live');
                }}
                onStartAssignment={(asgId) => {
                  setActiveTab('student-assignments');
                }}
                onStartQuiz={(quizId) => {
                  setActiveTab('student-quizzes');
                }}
              />
            )}

            {activeTab === 'student-courses' && (
              <StudentMyCourses
                courses={detailedCourses}
                enrolledCourses={detailedCourses}
                onContinueCourse={(courseId) => {
                  const target = courses.find((c) => {
                    const cId = c.id || '';
                    const cTitle = (c.title || '').toLowerCase();
                    const sId = (courseId || '').toLowerCase();
                    return cId === courseId || (sId && cTitle.includes(sId));
                  }) || courses[0];
                  setActiveCourseForLearning(target);
                  setActiveTab('student-player');
                }}
                onViewCourseDetails={(courseId) => {
                  const target = courses.find((c) => {
                    const cId = c.id || '';
                    const cTitle = (c.title || '').toLowerCase();
                    const sId = (courseId || '').toLowerCase();
                    return cId === courseId || (sId && cTitle.includes(sId));
                  }) || courses[0];
                  setSelectedCourseForDetail(target);
                }}
                onBrowseMoreCourses={() => {
                  setCurrentRole('Public');
                  setActiveTab('courses');
                }}
                onViewCertificate={(certId) => {
                  setActiveTab('student-certificates');
                }}
              />
            )}

            {(activeTab === 'student-player' || activeTab === 'learning-player') && (
              <VideoPlayerPortal
                course={activeCourseForLearning || courses[0]}
                studentName={studentProfile.name}
                studentPhone={studentProfile.phone}
                onBackToDashboard={() => setActiveTab('student-home')}
                onTakeQuiz={(quizId) => setActiveQuizId(quizId)}
                onOpenAIAssistant={() => setShowAIAssistant(true)}
              />
            )}

            {activeTab === 'student-live' && (
              <StudentLiveClasses
                onJoinLiveSession={(sessionId) => {
                  alert(`Connecting to live masterclass session ${sessionId} with Zoom SDK...`);
                }}
              />
            )}

            {activeTab === 'student-assignments' && (
              <StudentAssignments
                assignments={studentAssignments}
                onUploadSubmission={(assignmentId, file) => {
                  setStudentAssignments((prev) =>
                    prev.map((a) =>
                      a.id === assignmentId
                        ? {
                            ...a,
                            status: 'Under Review',
                            submissionDate: 'Just now',
                            submittedFileName: file.name,
                            submittedFileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
                          }
                        : a
                    )
                  );
                }}
              />
            )}

            {activeTab === 'student-quizzes' && (
              <StudentQuizzes
                quizzes={studentQuizzes}
                onQuizCompleted={(quizId, score) => {
                  setStudentQuizzes((prev) =>
                    prev.map((q) =>
                      q.id === quizId
                        ? {
                            ...q,
                            status: 'Completed',
                            attemptHistory: [
                              ...q.attemptHistory,
                              {
                                attemptNumber: q.attemptHistory.length + 1,
                                scorePercent: score,
                                date: 'Today',
                                passed: score >= q.passingScorePercent,
                                timeSpent: '18 mins'
                              }
                            ]
                          }
                        : q
                    )
                  );
                  setLeaderboardStudents((prev) =>
                    prev.map((s) => {
                      if (s.isCurrentUser) {
                        const newPts = s.totalPoints + 120;
                        const newCount = s.totalQuizzesTaken + 1;
                        const newAvg = Number(((s.averageQuizScore * s.totalQuizzesTaken + score) / newCount).toFixed(1));
                        return {
                          ...s,
                          totalPoints: newPts,
                          totalQuizzesTaken: newCount,
                          averageQuizScore: newAvg,
                          completedModules: s.completedModules + 1,
                          rankTrend: 'up' as const,
                          rankChange: 1
                        };
                      }
                      return s;
                    }).sort((a, b) => b.totalPoints - a.totalPoints).map((st, idx) => ({ ...st, rank: idx + 1 }))
                  );
                }}
              />
            )}

            {activeTab === 'student-certificates' && (
              <StudentCertificates
                certificates={certificates}
                studentName={studentProfile.name}
                onViewFullCertificate={(cert) => setActiveCertificate(cert as any)}
              />
            )}

            {activeTab === 'student-analytics' && (
              <StudentAnalytics />
            )}

            {activeTab === 'student-resources' && (
              <StudentResources />
            )}

            {activeTab === 'student-community' && (
              <StudentCommunity />
            )}

            {activeTab === 'student-payments' && (
              <StudentPayments />
            )}

            {activeTab === 'student-profile' && (
              <StudentProfileSettings
                profile={studentProfile}
                onUpdateProfile={(updated) => setStudentProfile(updated)}
              />
            )}

            {activeTab === 'student-notifications' && (
              <StudentNotificationCenter
                initialNotifications={studentNotifications}
                onNavigateTab={(targetTab) => setActiveTab(targetTab)}
              />
            )}

            {activeTab === 'student-leaderboard' && (
              <StudentLeaderboard
                students={leaderboardStudents}
                currentStudentName={studentProfile.name}
                onTakeQuizClick={() => setActiveTab('student-quizzes')}
                onViewCourseModules={() => {
                  const targetCourse = courses.find((c) => c.id === 'c-tax-01') || courses[0];
                  setActiveCourseForLearning(targetCourse);
                  setActiveTab('student-player');
                }}
              />
            )}

            {activeQuizId && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
                <div className="w-full max-w-3xl">
                  <QuizSystem
                    quizTitle="Income Tax Act 2023 & Mushak Assessment Quiz"
                    questions={[
                      {
                        id: 'q1',
                        questionText: 'Under Bangladesh Income Tax Act 2023, what is the mandatory penalty for failing to file universal self-assessment return within tax day?',
                        options: [
                          'Section 272 penalty of 10% on last assessed tax or min ৳5,000',
                          'Immediate imprisonment of 6 months',
                          'Automatic cancellation of TIN certificate',
                          'No penalty if filed within December 31'
                        ],
                        correctIndex: 0,
                        explanation: 'Section 272 specifies 10% penalty on last assessed tax (minimum ৳5,000) plus 2% monthly delay penalty.'
                      },
                      {
                        id: 'q2',
                        questionText: 'Which Mushak form is required under Value Added Tax and Supplementary Duty Act 2012 for monthly VAT return filing?',
                        options: ['Mushak 6.1', 'Mushak 6.3', 'Mushak 9.1', 'Mushak 4.3'],
                        correctIndex: 2,
                        explanation: 'Mushak 9.1 is the official monthly VAT return form submitted on or before the 15th day of following month.'
                      }
                    ]}
                    onFinishQuiz={(score) => {
                      setLeaderboardStudents((prev) => 
                        prev.map((s) => {
                          if (s.isCurrentUser) {
                            const newPoints = s.totalPoints + (score >= 90 ? 150 : 100);
                            const newQuizzes = s.totalQuizzesTaken + 1;
                            const newAvg = Number(((s.averageQuizScore * s.totalQuizzesTaken + score) / newQuizzes).toFixed(1));
                            return {
                              ...s,
                              totalPoints: newPoints,
                              totalQuizzesTaken: newQuizzes,
                              averageQuizScore: newAvg,
                              completedModules: s.completedModules + 1,
                              rankTrend: 'up' as const,
                              rankChange: 1
                            };
                          }
                          return s;
                        }).sort((a, b) => b.totalPoints - a.totalPoints).map((st, idx) => ({ ...st, rank: idx + 1 }))
                      );
                      alert(`Quiz completed with score: ${score}%! You earned +${score >= 90 ? '150' : '100'} XP and advanced on the Student Leaderboard.`);
                    }}
                    onClose={() => setActiveQuizId(null)}
                  />
                </div>
              </div>
            )}
          </StudentPortalLayout>
        )}
      </main>

      {/* Footer */}
      <Footer
        onBecomeInstructor={() => setShowInstructorModal(true)}
        onOpenLegalTools={() => setShowAIAssistant(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('home');
          const el = document.getElementById('featured-courses');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectCourseById={(id) => {
          const found = courses.find((x) => x.id === id);
          if (found) setSelectedCourseForDetail(found);
        }}
      />

      {/* Overlays / Modals */}
      {selectedCourseForDetail && (
        <CourseDetailPage
          course={selectedCourseForDetail}
          onClose={() => setSelectedCourseForDetail(null)}
          onEnrollNow={(c) => {
            setSelectedCourseForDetail(null);
            setSelectedCourseForPayment(c);
          }}
          onPlayLessonPreview={(lesson) => {
            setActiveVideoModal({
              title: lesson.title,
              subtitle: `${selectedCourseForDetail.title} • Free Preview Lesson`,
              videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              courseToEnroll: selectedCourseForDetail,
            });
          }}
        />
      )}

      {selectedCourseForPayment && (
        <PaymentModal
          course={selectedCourseForPayment}
          studentName="Advocate Md. Rahman"
          studentPhone="01711000000"
          onClose={() => setSelectedCourseForPayment(null)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {/* Video Preview Modal (Lessons or Student Testimonials) */}
      {activeVideoModal && (
        <VideoPreviewModal
          isOpen={true}
          onClose={() => setActiveVideoModal(null)}
          title={activeVideoModal.title}
          subtitle={activeVideoModal.subtitle}
          videoUrl={activeVideoModal.videoUrl}
          courseToEnroll={activeVideoModal.courseToEnroll}
          onEnrollNow={(course) => {
            setActiveVideoModal(null);
            setSelectedCourseForPayment(course);
          }}
        />
      )}

      {/* Become an Instructor Application Modal */}
      <InstructorApplyModal
        isOpen={showInstructorModal}
        onClose={() => setShowInstructorModal(false)}
      />

      {/* Free Statutory & Legal Template Download Modal */}
      <TemplateDownloadModal
        isOpen={!!activeTemplateDownload}
        templateName={activeTemplateDownload || ''}
        templateTitle={activeTemplateDownload || ''}
        onClose={() => setActiveTemplateDownload(null)}
      />

      {activeCertificate && (
        <CertificateViewer
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
        />
      )}

      {showAIAssistant && (
        <AILegalAssistantDrawer onClose={() => setShowAIAssistant(false)} />
      )}

      {showAIRoadmap && (
        <AIRoadmapModal onClose={() => setShowAIRoadmap(false)} />
      )}

      {showAIQuizGen && (
        <AIQuizGenerator
          onClose={() => setShowAIQuizGen(false)}
          onSaveQuizToCourse={(quizData) => {
            alert(`Quiz "${quizData.quizTitle}" successfully attached to course!`);
          }}
        />
      )}
    </div>
  );
}

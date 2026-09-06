import { Course, CourseModule, Instructor, PaymentTransaction } from '../types';

export interface TeacherProfileData {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  expertise: string[];
  designation: string;
  qualification: string;
  totalExperienceYears: number;
  publishedCoursesCount: number;
  totalStudentsCount: number;
  totalRevenue: number;
  monthlyEarnings: number;
  pendingPayment: number;
  paidAmount: number;
  averageRating: number;
  reviewsCount: number;
  bio: string;
  barSanadNumber: string;
  supremeCourtMembership: string;
  socialLinks: {
    linkedin?: string;
    website?: string;
    facebook?: string;
  };
}

export const mockTeacherProfile: TeacherProfileData = {
  name: 'Advocate Md. Ruhul Amin',
  photoUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=250&auto=format&fit=crop&q=80',
  email: 'ruhul.amin@elawyers.com.bd',
  phone: '+880 1711-234567',
  expertise: ['Income Tax Act 2023', 'VAT & SD Act 2012', 'High Court Writs', 'Corporate RJSC'],
  designation: 'Senior Faculty & Supreme Court Advocate',
  qualification: 'LL.B (Hons), LL.M (DU), FCS (Chartered Secretary)',
  totalExperienceYears: 14,
  publishedCoursesCount: 15,
  totalStudentsCount: 5420,
  totalRevenue: 850000,
  monthlyEarnings: 145000,
  pendingPayment: 35000,
  paidAmount: 815000,
  averageRating: 4.8,
  reviewsCount: 420,
  bio: 'Practicing Advocate of the Supreme Court of Bangladesh with 14+ years of specialized experience in corporate litigation, direct taxation, and value added tax. Former consultant to multinational conglomerates and distinguished trainer for Bar Council candidates.',
  barSanadNumber: 'SC-BAR-2012-08914',
  supremeCourtMembership: 'SCBA Life Member #4102',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/adv-ruhul-amin',
    website: 'https://ruhulaminlaw.com',
    facebook: 'https://facebook.com/advocateruhulamin'
  }
};

export interface TeacherCourseItem {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Masterclass';
  status: 'Published' | 'Draft' | 'Under Review';
  regularPrice: number;
  offerPrice: number;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  totalRevenue: number;
  completionRate: number;
  durationHours: number;
  lastUpdated: string;
}

export const mockTeacherCourses: TeacherCourseItem[] = [
  {
    id: 'course-tax-01',
    title: 'Comprehensive Income Tax Act 2023 Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    level: 'Masterclass',
    status: 'Published',
    regularPrice: 10000,
    offerPrice: 5000,
    studentsCount: 2150,
    rating: 4.9,
    reviewsCount: 185,
    totalRevenue: 345000,
    completionRate: 82,
    durationHours: 36,
    lastUpdated: '10 September 2026'
  },
  {
    id: 'course-vat-01',
    title: 'VAT & Supplementary Duty Act 2012 & Mushak 9.1 Return Filing',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=500&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    level: 'Intermediate',
    status: 'Published',
    regularPrice: 8500,
    offerPrice: 4200,
    studentsCount: 1480,
    rating: 4.8,
    reviewsCount: 112,
    totalRevenue: 245000,
    completionRate: 76,
    durationHours: 28,
    lastUpdated: '05 September 2026'
  },
  {
    id: 'course-bar-01',
    title: 'Bangladesh Bar Council Advocate Enrolment Examination Prep',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80',
    category: 'Legal Training',
    level: 'Advanced',
    status: 'Published',
    regularPrice: 12000,
    offerPrice: 6500,
    studentsCount: 1240,
    rating: 4.9,
    reviewsCount: 94,
    totalRevenue: 195000,
    completionRate: 89,
    durationHours: 48,
    lastUpdated: '02 September 2026'
  },
  {
    id: 'course-rjsc-01',
    title: 'RJSC Corporate Compliance, Share Transfer & Secretarial Practice',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80',
    category: 'Corporate Compliance',
    level: 'Intermediate',
    status: 'Under Review',
    regularPrice: 9000,
    offerPrice: 4500,
    studentsCount: 380,
    rating: 4.7,
    reviewsCount: 22,
    totalRevenue: 45000,
    completionRate: 70,
    durationHours: 22,
    lastUpdated: '28 August 2026'
  },
  {
    id: 'course-writ-01',
    title: 'High Court Division Writ Petition Drafting & Argumentation Techniques',
    thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=500&auto=format&fit=crop&q=80',
    category: 'Legal Training',
    level: 'Masterclass',
    status: 'Draft',
    regularPrice: 15000,
    offerPrice: 8000,
    studentsCount: 170,
    rating: 4.9,
    reviewsCount: 7,
    totalRevenue: 20000,
    completionRate: 65,
    durationHours: 32,
    lastUpdated: '15 August 2026'
  }
];

export interface LiveClassScheduleItem {
  id: string;
  courseName: string;
  topic: string;
  date: string;
  time: string;
  durationMinutes: number;
  studentCount: number;
  platform: 'Zoom API' | 'Google Meet' | 'Custom Streaming';
  meetingLink: string;
  status: 'Upcoming' | 'Live Now' | 'Completed';
  attendanceRate?: number;
  hasRecording?: boolean;
}

export const mockTeacherLiveClasses: LiveClassScheduleItem[] = [
  {
    id: 'live-01',
    courseName: 'Comprehensive Income Tax Act 2023 Masterclass',
    topic: 'Live Assessment Workshop: Individual Tax Return (IT-11GA) Real Simulation',
    date: 'Today',
    time: '08:00 PM - 09:30 PM',
    durationMinutes: 90,
    studentCount: 185,
    platform: 'Zoom API',
    meetingLink: 'https://zoom.us/j/9812457812?pwd=ELAWYERS2026',
    status: 'Upcoming'
  },
  {
    id: 'live-02',
    courseName: 'VAT & Supplementary Duty Act 2012',
    topic: 'Mushak 9.1 Sub-form Reconciliation & Value Addition Percentage Formulas',
    date: 'Tomorrow, 08 Sep',
    time: '07:30 PM - 09:00 PM',
    durationMinutes: 90,
    studentCount: 142,
    platform: 'Google Meet',
    meetingLink: 'https://meet.google.com/abc-elaw-xyz',
    status: 'Upcoming'
  },
  {
    id: 'live-03',
    courseName: 'Bangladesh Bar Council Advocate Enrolment',
    topic: 'Code of Civil Procedure (CPC) Order 39 Temporary Injunction Case Briefs',
    date: '10 Sep 2026',
    time: '08:00 PM - 10:00 PM',
    durationMinutes: 120,
    studentCount: 220,
    platform: 'Zoom API',
    meetingLink: 'https://zoom.us/j/8472910381?pwd=ELAWYERS2026',
    status: 'Upcoming'
  },
  {
    id: 'live-04',
    courseName: 'RJSC Corporate Compliance',
    topic: 'Foreign Direct Investment (FDI) 100% Share Acquisition & BIDA Registration',
    date: '04 Sep 2026',
    time: '08:00 PM - 09:30 PM',
    durationMinutes: 90,
    studentCount: 130,
    platform: 'Zoom API',
    meetingLink: 'https://zoom.us/rec/play/xyz9910',
    status: 'Completed',
    attendanceRate: 92,
    hasRecording: true
  },
  {
    id: 'live-05',
    courseName: 'Comprehensive Income Tax Act 2023 Masterclass',
    topic: 'Corporate Minimum Tax (Section 163) & Disallowance of Expenses',
    date: '01 Sep 2026',
    time: '08:00 PM - 09:30 PM',
    durationMinutes: 90,
    studentCount: 195,
    platform: 'Zoom API',
    meetingLink: 'https://zoom.us/rec/play/tax163rec',
    status: 'Completed',
    attendanceRate: 95,
    hasRecording: true
  }
];

export interface TeacherStudentRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  enrollmentDate: string;
  purchasedCourses: string[];
  completionPercentage: number;
  watchedLessons: number;
  totalLessons: number;
  averageQuizScore: number;
  assignmentStatus: 'Submitted' | 'Pending' | 'Evaluated';
  liveAttendanceRate: number;
  performanceTier: 'Top Performing' | 'On Track' | 'Needs Support';
}

export const mockTeacherStudents: TeacherStudentRecord[] = [
  {
    id: 'std-01',
    name: 'Advocate Farhana Akter',
    email: 'farhana.akter@lawdhaka.com',
    phone: '+880 1819-334455',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    enrollmentDate: '12 July 2026',
    purchasedCourses: ['Comprehensive Income Tax Act 2023', 'VAT & SD Act 2012'],
    completionPercentage: 94,
    watchedLessons: 45,
    totalLessons: 48,
    averageQuizScore: 96,
    assignmentStatus: 'Evaluated',
    liveAttendanceRate: 98,
    performanceTier: 'Top Performing'
  },
  {
    id: 'std-02',
    name: 'Tanvir Hossain, ACA',
    email: 'tanvir.hossain@cabd.org',
    phone: '+880 1712-445566',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    enrollmentDate: '01 August 2026',
    purchasedCourses: ['Comprehensive Income Tax Act 2023'],
    completionPercentage: 88,
    watchedLessons: 40,
    totalLessons: 48,
    averageQuizScore: 92,
    assignmentStatus: 'Evaluated',
    liveAttendanceRate: 95,
    performanceTier: 'Top Performing'
  },
  {
    id: 'std-03',
    name: 'Sadia Jahan',
    email: 'sadia.jahan@du.ac.bd',
    phone: '+880 1913-556677',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    enrollmentDate: '15 August 2026',
    purchasedCourses: ['Bangladesh Bar Council Prep'],
    completionPercentage: 72,
    watchedLessons: 32,
    totalLessons: 55,
    averageQuizScore: 84,
    assignmentStatus: 'Submitted',
    liveAttendanceRate: 85,
    performanceTier: 'On Track'
  },
  {
    id: 'std-04',
    name: 'Kazi Mofazzal Hossain',
    email: 'kazi.mofazzal@chittagongtax.com',
    phone: '+880 1614-667788',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    enrollmentDate: '20 August 2026',
    purchasedCourses: ['Comprehensive Income Tax Act 2023'],
    completionPercentage: 28,
    watchedLessons: 12,
    totalLessons: 48,
    averageQuizScore: 48,
    assignmentStatus: 'Pending',
    liveAttendanceRate: 40,
    performanceTier: 'Needs Support'
  },
  {
    id: 'std-05',
    name: 'Nusrat Sharmin',
    email: 'nusrat.sharmin@sylhetcourt.gov',
    phone: '+880 1515-778899',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    enrollmentDate: '02 September 2026',
    purchasedCourses: ['VAT & SD Act 2012'],
    completionPercentage: 42,
    watchedLessons: 15,
    totalLessons: 36,
    averageQuizScore: 62,
    assignmentStatus: 'Pending',
    liveAttendanceRate: 50,
    performanceTier: 'Needs Support'
  }
];

export interface TeacherAssignmentSubmission {
  id: string;
  assignmentTitle: string;
  courseTitle: string;
  studentName: string;
  studentAvatar: string;
  studentEmail: string;
  submittedFile: string;
  submittedFileSize: string;
  submissionDate: string;
  deadline: string;
  totalMarks: number;
  marksAwarded?: number;
  feedback?: string;
  status: 'Under Review' | 'Evaluated';
}

export const mockTeacherAssignmentsList: TeacherAssignmentSubmission[] = [
  {
    id: 'asg-sub-01',
    assignmentTitle: 'Universal Self-Assessment Return (IT-11GA) Drafting Case Study',
    courseTitle: 'Comprehensive Income Tax Act 2023',
    studentName: 'Advocate Farhana Akter',
    studentAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    studentEmail: 'farhana.akter@lawdhaka.com',
    submittedFile: 'Farhana_Akter_IT11GA_Case_Solved.pdf',
    submittedFileSize: '2.4 MB',
    submissionDate: '05 September 2026',
    deadline: '08 September 2026',
    totalMarks: 100,
    marksAwarded: 95,
    feedback: 'Excellent breakdown of allowable business expenditures and proper calculation of 82C minimum tax deduction.',
    status: 'Evaluated'
  },
  {
    id: 'asg-sub-02',
    assignmentTitle: 'Mushak 9.1 Return Reconciliation with Input Tax Rebate (Sub-form K)',
    courseTitle: 'VAT & SD Act 2012',
    studentName: 'Tanvir Hossain, ACA',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    studentEmail: 'tanvir.hossain@cabd.org',
    submittedFile: 'Tanvir_Mushak_Reconciliation.xlsx',
    submittedFileSize: '1.8 MB',
    submissionDate: '06 September 2026',
    deadline: '10 September 2026',
    totalMarks: 100,
    marksAwarded: 92,
    feedback: 'Accurate VDS schedule preparation. Note minor variance in exempt turnover definition in note 14.',
    status: 'Evaluated'
  },
  {
    id: 'asg-sub-03',
    assignmentTitle: 'High Court Division Writ Petition Grounds & Affidavit Drafting',
    courseTitle: 'Bangladesh Bar Council Prep',
    studentName: 'Sadia Jahan',
    studentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    studentEmail: 'sadia.jahan@du.ac.bd',
    submittedFile: 'Sadia_Writ_Petition_Format.docx',
    submittedFileSize: '950 KB',
    submissionDate: '06 September 2026',
    deadline: '12 September 2026',
    totalMarks: 100,
    status: 'Under Review'
  },
  {
    id: 'asg-sub-04',
    assignmentTitle: 'Draft Articles of Association (AoA) for Foreign Funded Private Ltd Company',
    courseTitle: 'RJSC Corporate Compliance',
    studentName: 'Kazi Mofazzal Hossain',
    studentAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    studentEmail: 'kazi.mofazzal@chittagongtax.com',
    submittedFile: 'AoA_Foreign_Investment_Draft.docx',
    submittedFileSize: '1.1 MB',
    submissionDate: 'Yesterday',
    deadline: '15 September 2026',
    totalMarks: 100,
    status: 'Under Review'
  }
];

export interface TeacherQuizRecord {
  id: string;
  title: string;
  courseTitle: string;
  questionCount: number;
  totalAttempts: number;
  averageScore: number;
  passingScorePercent: number;
  completionRate: number;
  difficultQuestionSummary: string;
}

export const mockTeacherQuizzesList: TeacherQuizRecord[] = [
  {
    id: 'quiz-t-01',
    title: 'Income Tax Act 2023: Universal Self-Assessment & Penalties Exam',
    courseTitle: 'Comprehensive Income Tax Act 2023',
    questionCount: 20,
    totalAttempts: 1820,
    averageScore: 78.4,
    passingScorePercent: 70,
    completionRate: 94,
    difficultQuestionSummary: 'Section 272 delay penalty & Section 163 minimum tax questions had a 44% error rate.'
  },
  {
    id: 'quiz-t-02',
    title: 'VAT & SD Act 2012: Mushak Returns & Withholding VAT (VDS) Certification',
    courseTitle: 'VAT & SD Act 2012',
    questionCount: 25,
    totalAttempts: 1240,
    averageScore: 74.2,
    passingScorePercent: 70,
    completionRate: 88,
    difficultQuestionSummary: 'Rebate eligibility timing (4 tax periods rule) was missed by 38% of respondents.'
  },
  {
    id: 'quiz-t-03',
    title: 'Bangladesh Bar Council CPC & CRPC Standard Mock Exam',
    courseTitle: 'Bangladesh Bar Council Prep',
    questionCount: 50,
    totalAttempts: 980,
    averageScore: 68.8,
    passingScorePercent: 65,
    completionRate: 91,
    difficultQuestionSummary: 'Distinction between Section 115 CPC Revision and Section 100 CPC Second Appeal.'
  }
];

export interface TeacherStudentReview {
  id: string;
  studentName: string;
  studentAvatar: string;
  studentTitle: string;
  courseTitle: string;
  rating: number;
  comment: string;
  date: string;
  instructorReply?: string;
}

export const mockTeacherReviews: TeacherStudentReview[] = [
  {
    id: 'rev-01',
    studentName: 'Advocate Farhana Akter',
    studentAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    studentTitle: 'Dhaka Bar Association Advocate',
    courseTitle: 'Comprehensive Income Tax Act 2023 Masterclass',
    rating: 5,
    comment: 'Advocate Ruhul Amin sir explains the complex transition from 1984 Ordinance to 2023 Act with statutory gazette clarity. His practical return filing demonstrations saved our firm countless hours.',
    date: '2 days ago',
    instructorReply: 'Thank you Farhana! Wishing you tremendous success in your High Court and tax chamber practice.'
  },
  {
    id: 'rev-02',
    studentName: 'Tanvir Hossain, ACA',
    studentAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    studentTitle: 'Chartered Accountant & Tax Auditor',
    courseTitle: 'VAT & SD Act 2012 & Mushak 9.1 Return Filing',
    rating: 5,
    comment: 'The Excel Mushak 9.1 calculator provided with formula reconciliation is worth ten times the course fee alone. Truly professional training.',
    date: '1 week ago'
  },
  {
    id: 'rev-03',
    studentName: 'Sadia Jahan',
    studentAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    studentTitle: 'Apprentice Lawyer (Bar Council Examinee)',
    courseTitle: 'Bangladesh Bar Council Advocate Enrolment Examination Prep',
    rating: 4.8,
    comment: 'The live case study sessions on CPC orders and high court writ citations gave me complete confidence for the written exam.',
    date: '2 weeks ago'
  }
];

export interface TeacherTransactionItem {
  id: string;
  date: string;
  courseTitle: string;
  amount: number;
  platformFee: number;
  netEarned: number;
  status: 'Paid' | 'Processing' | 'Pending';
  paymentMethod: 'bKash' | 'Nagad' | 'Bank Transfer (DBBL)';
}

export const mockTeacherTransactions: TeacherTransactionItem[] = [
  {
    id: 'TX-PAY-8812',
    date: '01 September 2026',
    courseTitle: 'Monthly Payout (August Enrolments - 48 Students)',
    amount: 185000,
    platformFee: 37000, // 20%
    netEarned: 148000, // 80%
    status: 'Paid',
    paymentMethod: 'Bank Transfer (DBBL)'
  },
  {
    id: 'TX-PAY-8740',
    date: '01 August 2026',
    courseTitle: 'Monthly Payout (July Enrolments - 62 Students)',
    amount: 220000,
    platformFee: 44000,
    netEarned: 176000,
    status: 'Paid',
    paymentMethod: 'Bank Transfer (DBBL)'
  },
  {
    id: 'TX-PAY-8622',
    date: '01 July 2026',
    courseTitle: 'Monthly Payout (June Enrolments - 40 Students)',
    amount: 160000,
    platformFee: 32000,
    netEarned: 128000,
    status: 'Paid',
    paymentMethod: 'bKash'
  }
];

// Aliases for Teacher Tabs
export type TeacherAssignmentReviewItem = TeacherAssignmentSubmission;
export const mockTeacherAssignments = mockTeacherAssignmentsList;

export interface TeacherPayoutTransaction {
  id: string;
  amount: number;
  date: string;
  method: string;
  accountNumber: string;
  status: 'Paid' | 'Processing';
  downloadInvoiceUrl?: string;
}

export const mockTeacherPayouts: TeacherPayoutTransaction[] = [
  {
    id: 'TXN-981023',
    amount: 148000,
    date: '01 Sep 2026',
    method: 'DBBL Bank',
    accountNumber: '117-120-9482710',
    status: 'Paid',
    downloadInvoiceUrl: '#'
  },
  {
    id: 'TXN-941082',
    amount: 176000,
    date: '01 Aug 2026',
    method: 'DBBL Bank',
    accountNumber: '117-120-9482710',
    status: 'Paid',
    downloadInvoiceUrl: '#'
  },
  {
    id: 'TXN-902189',
    amount: 128000,
    date: '01 Jul 2026',
    method: 'bKash',
    accountNumber: '01711234567',
    status: 'Paid',
    downloadInvoiceUrl: '#'
  }
];

export interface TeacherQuizItem {
  id: string;
  title: string;
  courseTitle: string;
  totalQuestions: number;
  timeLimitMinutes: number;
  passingPercentage: number;
  attemptsAllowed: number;
  submissionsCount: number;
  averageScore: number;
  difficultQuestions: string[];
}

export const mockTeacherQuizzes: TeacherQuizItem[] = [
  {
    id: 'quiz-t-01',
    title: 'Income Tax Act 2023: Universal Self-Assessment & Penalties Exam',
    courseTitle: 'Comprehensive Income Tax Act 2023',
    totalQuestions: 20,
    timeLimitMinutes: 30,
    passingPercentage: 70,
    attemptsAllowed: 3,
    submissionsCount: 1820,
    averageScore: 78.4,
    difficultQuestions: ['Section 163 Minimum Tax Thresholds']
  },
  {
    id: 'quiz-t-02',
    title: 'Mushak 9.1 VAT Return Reconciliation & Challan Verification',
    courseTitle: 'VAT & SD Act 2012 & Mushak 9.1 Return Filing',
    totalQuestions: 15,
    timeLimitMinutes: 25,
    passingPercentage: 75,
    attemptsAllowed: 2,
    submissionsCount: 1410,
    averageScore: 82.1,
    difficultQuestions: ['Withholding VAT Deduction at Source (VDS) Challan Form']
  }
];

export type TeacherReviewItem = TeacherStudentReview;

export type TeacherStudentItem = TeacherStudentRecord;

// ==========================================
// ADMIN DASHBOARD MOCK DATA
// ==========================================

export interface AdminStatsData {
  totalStudents: number;
  totalTeachers: number;
  totalCourses: number;
  totalRevenueBDT: number;
  monthlyGrowthPercent: number;
  activeUsersToday: number;
  courseCompletionRatePercent: number;
  pendingCourseReviewsCount: number;
  pendingTeacherApprovalsCount: number;
  pendingRefundRequestsCount: number;
}

export const mockAdminStats: AdminStatsData = {
  totalStudents: 25000,
  totalTeachers: 120,
  totalCourses: 350,
  totalRevenueBDT: 50000000, // ৳5 Crore
  monthlyGrowthPercent: 24.8,
  activeUsersToday: 3890,
  courseCompletionRatePercent: 78.4,
  pendingCourseReviewsCount: 8,
  pendingTeacherApprovalsCount: 5,
  pendingRefundRequestsCount: 3
};

export interface AdminTeacherApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  designation: string;
  institution: string;
  barSanadNumber: string;
  experienceYears: number;
  proposedCourseTitle: string;
  submittedDate: string;
  status: 'Pending' | 'Verified' | 'Suspended';
}

export const mockAdminTeachersList: AdminTeacherApplication[] = [
  {
    id: 'tch-app-01',
    name: 'Barrister Nafis Imtiaz',
    email: 'nafis.imtiaz@lincolnsinn.com',
    phone: '+880 1711-998877',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    designation: 'Barrister-at-Law, Lincoln’s Inn',
    institution: 'Supreme Court of Bangladesh',
    barSanadNumber: 'SC-BAR-2015-11024',
    experienceYears: 11,
    proposedCourseTitle: 'Cross-Border Mergers & Acquisitions and Foreign Exchange Regulations',
    submittedDate: '04 September 2026',
    status: 'Pending'
  },
  {
    id: 'tch-app-02',
    name: 'Khandakar M. Anwarul, FCA',
    email: 'anwarul@khandakartax.com',
    phone: '+880 1819-223344',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    designation: 'Fellow Chartered Accountant & Tax Consultant',
    institution: 'ICAB & NBR Registered Practitioner',
    barSanadNumber: 'ICAB-FCA-8921',
    experienceYears: 16,
    proposedCourseTitle: 'Transfer Pricing Documentation & Advance Pricing Agreements in Bangladesh',
    submittedDate: '03 September 2026',
    status: 'Pending'
  },
  {
    id: 'tch-app-03',
    name: 'Advocate Md. Ruhul Amin',
    email: 'ruhul.amin@elawyers.com.bd',
    phone: '+880 1711-234567',
    avatarUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&auto=format&fit=crop&q=80',
    designation: 'Supreme Court Advocate & Senior Faculty',
    institution: 'Dhaka Bar & Supreme Court Bar',
    barSanadNumber: 'SC-BAR-2012-08914',
    experienceYears: 14,
    proposedCourseTitle: 'Comprehensive Income Tax Act 2023 Masterclass',
    submittedDate: 'Verified Faculty',
    status: 'Verified'
  },
  {
    id: 'tch-app-04',
    name: 'Advocate Shireen Huq',
    email: 'shireen.huq@supremecourt.bd',
    phone: '+880 1913-667788',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    designation: 'Family Law & Civil Litigation Specialist',
    institution: 'Supreme Court Bar Association',
    barSanadNumber: 'SC-BAR-2010-06512',
    experienceYears: 15,
    proposedCourseTitle: 'Family Court Proceedings & Muslim Personal Law Practicum',
    submittedDate: 'Verified Faculty',
    status: 'Verified'
  }
];

export interface AdminCourseReviewItem {
  id: string;
  title: string;
  instructorName: string;
  instructorAvatar: string;
  category: string;
  price: number;
  submittedDate: string;
  videoDurationHours: number;
  moduleCount: number;
  qualityScore: number;
  status: 'Pending Review' | 'Approved' | 'Rejected' | 'Published';
}

export const mockAdminCoursesList: AdminCourseReviewItem[] = [
  {
    id: 'adm-crs-01',
    title: 'Admiralty & Maritime Law Litigation in High Court Division',
    instructorName: 'Barrister Nafis Imtiaz',
    instructorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    category: 'Legal Training',
    price: 15000,
    submittedDate: '04 September 2026',
    videoDurationHours: 24,
    moduleCount: 6,
    qualityScore: 94,
    status: 'Pending Review'
  },
  {
    id: 'adm-crs-02',
    title: 'Transfer Pricing & Cross-Border Tax Audits under Bangladesh Income Tax Act',
    instructorName: 'Khandakar M. Anwarul, FCA',
    instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    price: 14000,
    submittedDate: '02 September 2026',
    videoDurationHours: 28,
    moduleCount: 7,
    qualityScore: 96,
    status: 'Pending Review'
  },
  {
    id: 'adm-crs-03',
    title: 'Comprehensive Income Tax Act 2023 Masterclass',
    instructorName: 'Advocate Md. Ruhul Amin',
    instructorAvatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    price: 5000,
    submittedDate: 'Active',
    videoDurationHours: 36,
    moduleCount: 8,
    qualityScore: 99,
    status: 'Published'
  },
  {
    id: 'adm-crs-04',
    title: 'VAT & Supplementary Duty Act 2012 & Mushak 9.1 Return Filing',
    instructorName: 'Advocate Md. Ruhul Amin',
    instructorAvatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&auto=format&fit=crop&q=80',
    category: 'Tax & VAT',
    price: 4200,
    submittedDate: 'Active',
    videoDurationHours: 28,
    moduleCount: 6,
    qualityScore: 98,
    status: 'Published'
  }
];

export interface AdminRefundRequest {
  id: string;
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  amount: number;
  paymentMethod: 'bKash' | 'Nagad' | 'SSLCommerz';
  transactionId: string;
  reason: string;
  requestedDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export const mockAdminRefunds: AdminRefundRequest[] = [
  {
    id: 'ref-01',
    studentName: 'Ahsan Habib',
    studentEmail: 'ahsan.habib@gmail.com',
    courseTitle: 'VAT & Supplementary Duty Act 2012',
    amount: 4200,
    paymentMethod: 'bKash',
    transactionId: 'TX-BK77810',
    reason: 'Accidentally purchased duplicate course track instead of Income Tax.',
    requestedDate: '05 September 2026',
    status: 'Pending'
  },
  {
    id: 'ref-02',
    studentName: 'Mahmudul Hasan',
    studentEmail: 'mahmud.hasan@yahoo.com',
    courseTitle: 'Bangladesh Bar Council Advocate Enrolment Prep',
    amount: 6500,
    paymentMethod: 'Nagad',
    transactionId: 'TX-NG99120',
    reason: 'Exam postponed to 2027 by Bar Council; requested credit transfer.',
    requestedDate: '04 September 2026',
    status: 'Pending'
  }
];

export interface AdminStaffRole {
  id: string;
  name: string;
  email: string;
  role: 'Content Manager' | 'Finance Manager' | 'Support Manager' | 'Super Admin';
  avatarUrl: string;
  permissions: {
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
  };
  status: 'Active' | 'Suspended';
}

export const mockAdminStaff: AdminStaffRole[] = [
  {
    id: 'stf-01',
    name: 'Tariqul Islam',
    email: 'tariqul@elawyers.com.bd',
    role: 'Content Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    permissions: { canView: true, canEdit: true, canDelete: false },
    status: 'Active'
  },
  {
    id: 'stf-02',
    name: 'Rasheda Begum',
    email: 'rasheda@elawyers.com.bd',
    role: 'Finance Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    permissions: { canView: true, canEdit: true, canDelete: true },
    status: 'Active'
  },
  {
    id: 'stf-03',
    name: 'Imran Nazir',
    email: 'imran@elawyers.com.bd',
    role: 'Support Manager',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    permissions: { canView: true, canEdit: false, canDelete: false },
    status: 'Active'
  }
];

export interface AdminCertificateTemplate {
  id: string;
  templateName: string;
  designStyle: 'Classic Gold Crest' | 'Modern Supreme Executive' | 'Judicial Emerald Seal';
  signatoryTitle: string;
  signatoryName: string;
  minCompletionPercent: number;
  minQuizScorePercent: number;
  minAttendancePercent: number;
  issuedCount: number;
  isActive: boolean;
}

export const mockAdminCertificates: AdminCertificateTemplate[] = [
  {
    id: 'cert-tmpl-01',
    templateName: 'Bangladesh Tax & VAT Practitioner Professional Credential',
    designStyle: 'Modern Supreme Executive',
    signatoryTitle: 'Chairman, Education & Professional Development Board',
    signatoryName: 'Advocate Md. Ruhul Amin, Supreme Court of Bangladesh',
    minCompletionPercent: 100,
    minQuizScorePercent: 70,
    minAttendancePercent: 80,
    issuedCount: 1420,
    isActive: true
  },
  {
    id: 'cert-tmpl-02',
    templateName: 'Bangladesh Bar Council Advocate Enrolment Mastery Certificate',
    designStyle: 'Classic Gold Crest',
    signatoryTitle: 'Honorary Dean, E-Lawyers Bar Training Institute',
    signatoryName: 'Former Justice, High Court Division',
    minCompletionPercent: 100,
    minQuizScorePercent: 75,
    minAttendancePercent: 85,
    issuedCount: 980,
    isActive: true
  }
];

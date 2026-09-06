// E-Lawyers Academy Types

export type UserRole = 'Public' | 'Student' | 'Teacher' | 'Admin';
export type RoleMode = 'public' | 'student' | 'teacher' | 'admin';

export type CourseCategory = 
  | 'Legal Training'
  | 'Tax & VAT'
  | 'Corporate Compliance'
  | 'Accounting'
  | 'Professional Skills';

export interface Instructor {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experienceYears: number;
  photoUrl: string;
  rating: number;
  totalStudents: number;
  coursesCreated: number;
  studentsCount?: number;
  coursesCount?: number;
  bio: string;
  expertise?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  videoUrl: string; // Embed or video stream URL
  isFreePreview?: boolean;
  resources?: { name: string; fileUrl: string; type: 'pdf' | 'doc' | 'excel' }[];
  quizId?: string;
  assignmentId?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  totalQuestions: number;
  passingScorePercent: number;
  questions: QuizQuestion[];
}

export interface Assignment {
  id: string;
  title: string;
  instructions: string;
  templateFileUrl?: string;
  totalMarks: number;
  dueDate: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: CourseCategory;
  subcategory: string; // e.g. 'Bar Council Prep', 'VAT Compliance', 'RJSC'
  thumbnail: string;
  instructor: Instructor;
  rating: number;
  reviewCount: number;
  studentCount: number;
  durationHours: number;
  language: 'Bangla' | 'English' | 'Bilingual' | 'Bangla + English';
  level?: 'Beginner' | 'Intermediate' | 'Professional';
  regularPrice: number;
  offerPrice: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  status: 'Published' | 'Pending Review' | 'Draft' | 'Unpublished';
  overview: string;
  objectives?: string[];
  targetAudience?: string[];
  practicalBenefits?: string[];
  whatYouWillLearn: string[];
  modules: CourseModule[];
  // Academic course showcase properties matching the design:
  badgeTopLeft?: string; // 'MOST POPULAR' | 'HIGH DEMAND' | 'CORPORATE' | 'LAW EXAM PREP' | 'HANDS-ON' | 'OFFICE SKILLS' | 'PREMIUM' | 'LIVE'
  badgeTopRightIcon?: string; // 'Calculator' | 'FileSpreadsheet' | 'Building2' | 'ShieldCheck' | 'BookOpen' | 'FileText' | 'GraduationCap' | 'Video'
  tagBottomLeft?: string; // e.g. 'VAT LAW & COMPLIANCE', 'COMPLETE TAX TRAINING'
  accentColor?: string; // 'purple' | 'emerald' | 'blue' | 'amber' | 'sky' | 'rose' | 'slate' | 'teal'
  keyHighlights?: string[]; // 5 items shown on card
  filterCategory?: 'TAX & VAT' | 'LEGAL' | 'ACCOUNTING' | 'CORPORATE' | 'ONLINE/LIVE';
}

export interface EnrolledCourse {
  courseId: string;
  courseTitle: string;
  progressPercent: number;
  completedLessons: string[]; // lesson IDs
  enrollmentDate: string;
  lastAccessed: string;
  quizScores: { quizId: string; scorePercent: number; date: string }[];
  assignmentSubmissions: { assignmentId: string; fileName: string; grade?: number; feedback?: string; date: string }[];
  certificateId?: string;
}

export interface Certificate {
  id: string;
  studentName: string;
  studentId: string;
  courseTitle: string;
  issueDate: string;
  verificationQrUrl: string;
  instructorSignature: string;
  grade: 'Distinction' | 'Merit' | 'Pass';
}

export interface LiveClassSession {
  id: string;
  title: string;
  courseTitle: string;
  instructorName: string;
  scheduledTime: string;
  durationMinutes: number;
  platform: 'Zoom' | 'Google Meet' | 'Live Stream';
  joinLink: string;
  recordingUrl?: string;
  status: 'Upcoming' | 'Live Now' | 'Ended';
}

export interface LegalResourceItem {
  id: string;
  title: string;
  category: 'Tax & VAT' | 'Legal Templates' | 'RJSC Corporate' | 'Case Studies' | 'Bar Exam Prep';
  fileFormat: 'PDF' | 'DOCX' | 'XLSX';
  fileSize: string;
  downloads: number;
  downloadUrl: string;
  description: string;
  isPremium?: boolean;
}

export interface CommunityPost {
  id: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  title: string;
  content: string;
  category: string;
  upvotes: number;
  repliesCount: number;
  createdAt: string;
  tags: string[];
}

export interface PaymentTransaction {
  id: string;
  courseId: string;
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  amount: number;
  paymentMethod: 'bKash' | 'Nagad' | 'SSLCommerz';
  transactionId: string;
  status: 'Completed' | 'Pending' | 'Refunded';
  date: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Student' | 'Instructor' | 'Admin';
  profession: string;
  joinedDate: string;
  avatarUrl: string;
}

export type BadgeIconType = 'Trophy' | 'Flame' | 'Scale' | 'FileCheck' | 'ShieldCheck' | 'Award' | 'Sparkles' | 'GraduationCap' | 'Zap' | 'BookOpen';

export interface AchievementBadge {
  id: string;
  name: string;
  description: string;
  icon: BadgeIconType;
  color: 'amber' | 'emerald' | 'indigo' | 'purple' | 'rose' | 'blue' | 'cyan';
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
  earnedDate?: string;
}

export interface LeaderboardStudent {
  id: string;
  rank: number;
  name: string;
  title: string;
  avatarUrl: string;
  averageQuizScore: number;
  completedModules: number;
  totalQuizzesTaken: number;
  totalPoints: number;
  streakDays: number;
  badge: string;
  badges: AchievementBadge[];
  track: 'Legal Training' | 'Tax & VAT' | 'Corporate Compliance';
  isCurrentUser?: boolean;
  rankTrend?: 'up' | 'down' | 'same';
  rankChange?: number; // e.g. +2, -1, 0
  previousRank?: number;
}

export interface StudentAssignment {
  id: string;
  title: string;
  courseTitle: string;
  courseId: string;
  deadline: string;
  totalMarks: number;
  instructions: string;
  templateFileName?: string;
  templateFileSize?: string;
  status: 'Pending Submission' | 'Under Review' | 'Evaluated';
  submissionDate?: string;
  submittedFileName?: string;
  submittedFileSize?: string;
  marksObtained?: number;
  grade?: string;
  instructorFeedback?: string;
  instructorName?: string;
  moduleName?: string;
}

export interface StudentQuizExam {
  id: string;
  title: string;
  courseTitle: string;
  courseId: string;
  questionCount: number;
  durationMinutes: number;
  passingScorePercent: number;
  status: 'Available' | 'Completed' | 'Upcoming';
  certificateEligible: boolean;
  attemptHistory: {
    attemptNumber: number;
    scorePercent: number;
    date: string;
    passed: boolean;
    timeSpent: string;
  }[];
  questions: {
    id: string;
    questionText: string;
    type?: 'mcq' | 'true-false' | 'multiple-answer';
    options: string[];
    correctIndices: number[]; // supports multiple answer or single answer
    explanation: string;
    topicCategory: string;
  }[];
}

export interface StudentNotification {
  id: string;
  title: string;
  message: string;
  type: 'lesson' | 'live' | 'assignment' | 'quiz' | 'certificate' | 'announcement';
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  targetTab?: string;
}

export interface StudentInvoice {
  id: string;
  invoiceNo: string;
  courseName: string;
  date: string;
  amount: number;
  paymentMethod: 'bKash' | 'Nagad' | 'SSLCommerz' | 'MasterCard' | 'Visa';
  transactionId: string;
  status: 'Paid' | 'Pending' | 'Refunded';
}

export interface StudentFullProfile {
  name: string;
  photoUrl: string;
  email: string;
  phone: string;
  address: string;
  profession: string;
  organization: string;
  experience: string;
  barSanadNumber?: string;
  learningGoals: string[] | string;
  membershipType: string;
  enrolledDate: string;
  totalLearningHours: number;
  completedCoursesCount: number;
  certificatesEarnedCount: number;
  emailNotifications: boolean;
  smsNotifications: boolean;
  pushNotifications: boolean;
  twoFactorEnabled: boolean;
}


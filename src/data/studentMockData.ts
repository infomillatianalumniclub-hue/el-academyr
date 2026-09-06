import { 
  StudentAssignment, 
  StudentQuizExam, 
  StudentNotification, 
  StudentInvoice, 
  StudentFullProfile 
} from '../types';

export const mockStudentProfile: StudentFullProfile = {
  name: 'Md. Rahman',
  photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
  email: 'md.rahman.advocate@gmail.com',
  phone: '+880 1711-000000',
  address: 'Suite 402, Supreme Court Bar Association Building, Dhaka-1000',
  profession: 'Advocate & Tax Practitioner',
  organization: 'Rahman & Associates Chambers',
  experience: '4+ Years in District Court & NBR Tax Practice',
  membershipType: 'Premium Professional Member (Bar & NBR Track)',
  enrolledDate: '15 January 2024',
  totalLearningHours: 45,
  completedCoursesCount: 4,
  certificatesEarnedCount: 5,
  emailNotifications: true,
  smsNotifications: true,
  pushNotifications: true,
  twoFactorEnabled: true,
  learningGoals: [
    'Master Corporate Tax Act 2023 provisions & e-Return Filing',
    'Clear High Court Permission Exam under Bangladesh Bar Council',
    'Lead VAT Audit Defense & Appellate Tribunal appeals',
    'Automate RJSC corporate secretarial filings'
  ]
};

export interface EnrolledCourseDetailed {
  id: string;
  courseId: string;
  courseTitle: string;
  category: string;
  thumbnail: string;
  instructorName: string;
  instructorTitle: string;
  progressPercent: number;
  totalLessons: number;
  completedLessons: number;
  remainingLessons: number;
  lastWatchedLesson: string;
  courseDuration: string;
  enrollmentDate: string;
  status: 'In Progress' | 'Completed' | 'Expired';
  expiryDate?: string;
  rating: number;
  certificateEarned?: boolean;
  certificateId?: string;
}

export const mockDetailedEnrolledCourses: EnrolledCourseDetailed[] = [
  {
    id: 'enr-tax-01',
    courseId: 'course-tax-02',
    courseTitle: 'Professional Income Tax Training',
    category: 'Tax & VAT',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Adv. Md. Ruhul Amin',
    instructorTitle: 'Supreme Court Advocate & NBR Consultant',
    progressPercent: 65,
    totalLessons: 40,
    completedLessons: 26,
    remainingLessons: 14,
    lastWatchedLesson: 'Salary & House Property Tax Computation',
    courseDuration: '28 Hours',
    enrollmentDate: '10 Feb 2024',
    status: 'In Progress',
    rating: 4.9
  },
  {
    id: 'enr-vat-01',
    courseId: 'course-vat-01',
    courseTitle: 'Professional VAT Compliance Training',
    category: 'Tax & VAT',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Mr. ABC (Adv. Md. Ruhul Amin)',
    instructorTitle: 'NBR VAT Specialist & Author',
    progressPercent: 72,
    totalLessons: 50,
    completedLessons: 36,
    remainingLessons: 14,
    lastWatchedLesson: 'Mushak Return Submission Process',
    courseDuration: '32 Hours',
    enrollmentDate: '22 Jan 2024',
    status: 'In Progress',
    rating: 4.95,
    certificateEarned: true,
    certificateId: 'ELA-VAT-2026-000234'
  },
  {
    id: 'enr-bar-01',
    courseId: 'course-bar-03',
    courseTitle: 'Bangladesh Bar Council MCQ & Written Preparation Masterclass',
    category: 'Legal Training',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Adv. Shahadat Hossain',
    instructorTitle: 'Senior High Court Advocate',
    progressPercent: 100,
    totalLessons: 45,
    completedLessons: 45,
    remainingLessons: 0,
    lastWatchedLesson: 'Final Review: CPC Order 39 Injunction Practice',
    courseDuration: '45 Hours',
    enrollmentDate: '15 Jan 2024',
    status: 'Completed',
    rating: 5.0,
    certificateEarned: true,
    certificateId: 'ELA-BAR-2025-003412'
  },
  {
    id: 'enr-rjsc-01',
    courseId: 'course-rjsc-04',
    courseTitle: 'RJSC Company Incorporation & Annual Return Compliance',
    category: 'Corporate Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Barrister Farhana Zaman',
    instructorTitle: 'Corporate Law Practitioner',
    progressPercent: 100,
    totalLessons: 24,
    completedLessons: 24,
    remainingLessons: 0,
    lastWatchedLesson: 'Form XII & Share Transfer Filing in RJSC Portal',
    courseDuration: '18 Hours',
    enrollmentDate: '01 Feb 2024',
    status: 'Completed',
    rating: 4.85,
    certificateEarned: true,
    certificateId: 'ELA-RJSC-2025-000891'
  },
  {
    id: 'enr-draft-01',
    courseId: 'course-draft-05',
    courseTitle: 'High Court Writ & Civil Drafting Workshop',
    category: 'Legal Training',
    thumbnail: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Adv. Shahadat Hossain',
    instructorTitle: 'Senior High Court Advocate',
    progressPercent: 100,
    totalLessons: 30,
    completedLessons: 30,
    remainingLessons: 0,
    lastWatchedLesson: 'Article 102 Mandamus Petition Drafting',
    courseDuration: '22 Hours',
    enrollmentDate: '18 Dec 2023',
    status: 'Completed',
    rating: 4.9,
    certificateEarned: true,
    certificateId: 'ELA-DRAFT-2024-001020'
  },
  {
    id: 'enr-acc-01',
    courseId: 'course-acc-06',
    courseTitle: 'Financial Statements for Legal & Tax Practitioners',
    category: 'Accounting',
    thumbnail: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Mohammad Tariqul Islam, FCA',
    instructorTitle: 'Chartered Accountant & Tax Auditor',
    progressPercent: 100,
    totalLessons: 20,
    completedLessons: 20,
    remainingLessons: 0,
    lastWatchedLesson: 'Interpreting Audited Balance Sheets for NBR Return',
    courseDuration: '16 Hours',
    enrollmentDate: '12 Nov 2023',
    status: 'Completed',
    rating: 4.75,
    certificateEarned: true,
    certificateId: 'ELA-TAX-2026-001452'
  },
  {
    id: 'enr-exp-01',
    courseId: 'course-old-07',
    courseTitle: 'Income Tax Ordinance 1984 Historical Transition Archive',
    category: 'Tax & VAT',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    instructorName: 'Adv. Md. Ruhul Amin',
    instructorTitle: 'Supreme Court Advocate',
    progressPercent: 100,
    totalLessons: 15,
    completedLessons: 15,
    remainingLessons: 0,
    lastWatchedLesson: 'Archive Overview of Old Chapter VII',
    courseDuration: '10 Hours',
    enrollmentDate: '01 June 2023',
    status: 'Expired',
    expiryDate: '01 June 2024',
    rating: 4.7
  }
];

export const mockStudentAssignments: StudentAssignment[] = [
  {
    id: 'asg-01',
    title: 'Income Tax Return Preparation Assignment',
    courseTitle: 'Professional Income Tax Training',
    courseId: 'course-tax-02',
    deadline: '20 September 2026',
    totalMarks: 100,
    status: 'Pending Submission',
    instructions: 'Prepare Form IT-11GA and Wealth Statement IT-10B for a salaried individual earning BDT 1,850,000 annually with investments in Life Insurance, DPS (up to allowable limit), and Treasury Bonds. Calculate net tax rebate, minimum tax requirement, and complete all deduction schedules under Income Tax Act 2023.',
    templateFileName: 'Form_IT-11GA_Case_Study_Instructions.pdf',
    templateFileSize: '1.4 MB',
    instructorName: 'Adv. Md. Ruhul Amin',
    moduleName: 'Module 03: Return Filing & Surcharge Calculation'
  },
  {
    id: 'asg-02',
    title: 'VAT Mushak 9.1 Return Drafting & Sub-form Reconciliation',
    courseTitle: 'Professional VAT Compliance Training',
    courseId: 'course-vat-01',
    deadline: '14 September 2026',
    totalMarks: 100,
    instructions: 'Reconcile Mushak 6.3 tax invoices with purchase register Mushak 6.1 and sales register 6.2, and populate Sub-form K with correct withholding VAT entries.',
    status: 'Evaluated',
    submissionDate: '08 September 2026',
    submittedFileName: 'Md_Rahman_Mushak_9.1_Submission.xlsx',
    submittedFileSize: '850 KB',
    marksObtained: 94,
    grade: 'A+',
    instructorFeedback: 'Exceptional reconciliation between Mushak 6.3 invoices and Mushak 9.1 Sub-form K. Proper treatment of VDS under Mushak 6.6 with flawless debit/credit notes ledger accounting.',
    instructorName: 'Mr. ABC (Adv. Md. Ruhul Amin)',
    moduleName: 'Module 02: Mushak Registers & Monthly Returns'
  },
  {
    id: 'asg-03',
    title: 'Private Limited Company MoA & AoA Drafting for Software Startup',
    courseTitle: 'RJSC Company Incorporation & Annual Return Compliance',
    courseId: 'course-rjsc-04',
    deadline: '25 September 2026',
    totalMarks: 100,
    instructions: 'Draft the Memorandum of Association and Articles of Association for a private limited company with 3 directors, authorized capital BDT 10,000,000, and technology IP transfer clauses.',
    status: 'Under Review',
    submissionDate: '05 September 2026',
    submittedFileName: 'Draft_MoA_AoA_Rahman_Fintech.docx',
    submittedFileSize: '420 KB',
    instructorName: 'Barrister Farhana Zaman',
    moduleName: 'Module 01: RJSC Company Formation'
  }
];

export const mockStudentQuizzes: StudentQuizExam[] = [
  {
    id: 'quiz-tax-module',
    title: 'Income Tax Module Test',
    courseTitle: 'Professional Income Tax Training',
    courseId: 'course-tax-02',
    questionCount: 20,
    durationMinutes: 30,
    passingScorePercent: 70,
    status: 'Available',
    certificateEligible: true,
    attemptHistory: [
      {
        attemptNumber: 1,
        scorePercent: 85,
        date: '02 September 2026',
        passed: true,
        timeSpent: '21 mins'
      }
    ],
    questions: [
      {
        id: 'q1',
        questionText: 'Under the Bangladesh Income Tax Act 2023, what is the statutory deadline for individual taxpayers to file their return on "Tax Day"?',
        type: 'mcq',
        options: [
          '30th November of the assessment year (or following working day)',
          '30th June of the income year',
          '31st December without penalty',
          '15th October of every calendar year'
        ],
        correctIndices: [0],
        explanation: 'Section 166 specifies that "Tax Day" for an individual assessee is the 30th November of the relevant assessment year.',
        topicCategory: 'Tax Filing Timelines'
      },
      {
        id: 'q2',
        questionText: 'What is the mandatory minimum penalty under Section 272 for failure to furnish a tax return within Tax Day without authorized extension?',
        type: 'mcq',
        options: [
          '10% of last assessed tax, subject to minimum BDT 5,000 (plus 2% monthly delay interest under Sec 174)',
          'Immediate freeze of bank account and BDT 50,000 fine',
          'Cancellation of 12-digit e-TIN certificate',
          'Fixed penalty of BDT 1,000 only'
        ],
        correctIndices: [0],
        explanation: 'Section 272 imposes a penalty of 10% of tax payable on last assessed income or minimum BDT 5,000, whichever is higher, plus monthly interest under Sec 174.',
        topicCategory: 'Penalties & Offences'
      },
      {
        id: 'q3',
        questionText: 'Which of the following expenditures are allowed as deductible expenses while computing income from House Property under Section 37/38?',
        type: 'multiple-answer',
        options: [
          'Statutory repair and maintenance allowance (25% residential / 30% commercial)',
          'Municipal taxes and local authority rates paid',
          'Interest on borrowed capital used for property construction/purchase',
          'Personal utility bills paid by the landlord without rental adjustment'
        ],
        correctIndices: [0, 1, 2],
        explanation: 'Statutory repairs (25%/30%), municipal taxes, and loan interest for construction are allowable deductions. Personal expenses are disallowed.',
        topicCategory: 'House Property Assessment'
      },
      {
        id: 'q4',
        questionText: 'Is proof of tax return submission (PSR) legally required to obtain or renew a trade license in City Corporation areas under Section 264?',
        type: 'true-false',
        options: [
          'True - PSR is mandatory under Section 264 for City Corporation and Pourashava trade licenses',
          'False - Only TIN certificate is sufficient without submitting return receipt'
        ],
        correctIndices: [0],
        explanation: 'Section 264 of Income Tax Act 2023 lists 43+ civic services including Trade License renewal that strictly mandate Proof of Submission of Return (PSR).',
        topicCategory: 'Universal Compliance & PSR'
      }
    ]
  },
  {
    id: 'quiz-vat-final',
    title: 'VAT & SD Act 2012 Final Assessment',
    courseTitle: 'Professional VAT Compliance Training',
    courseId: 'course-vat-01',
    questionCount: 25,
    durationMinutes: 35,
    passingScorePercent: 75,
    status: 'Completed',
    certificateEligible: true,
    attemptHistory: [
      {
        attemptNumber: 1,
        scorePercent: 92,
        date: '28 August 2026',
        passed: true,
        timeSpent: '24 mins'
      }
    ],
    questions: [
      {
        id: 'qv1',
        questionText: 'Under Value Added Tax and Supplementary Duty Act 2012, within what date must the monthly Mushak 9.1 return be submitted?',
        type: 'mcq',
        options: [
          'On or before the 15th day of the following month',
          'Last day of the following month',
          '10th day of the month',
          '20th day of every calendar quarter'
        ],
        correctIndices: [0],
        explanation: 'Section 64 stipulates that every registered person must submit a return for each tax period within 15 days following the end of that tax period.',
        topicCategory: 'VAT Filing Procedures'
      }
    ]
  },
  {
    id: 'quiz-bar-mock',
    title: 'Bar Council CPC & CrPC Mock Enrolment Exam',
    courseTitle: 'Bangladesh Bar Council MCQ & Written Preparation Masterclass',
    courseId: 'course-bar-03',
    questionCount: 50,
    durationMinutes: 60,
    passingScorePercent: 50,
    status: 'Available',
    certificateEligible: true,
    attemptHistory: [],
    questions: [
      {
        id: 'qb1',
        questionText: 'Under Order XXXIX Rule 1 of the Code of Civil Procedure (CPC) 1908, in which circumstances may a temporary injunction be granted?',
        type: 'mcq',
        options: [
          'Where property in dispute is in danger of being wasted, damaged, or alienated by any party',
          'Only when criminal proceedings are pending against defendant',
          'Whenever the plaintiff pays court fee of BDT 10,000',
          'Exclusively in monetary decree executions'
        ],
        correctIndices: [0],
        explanation: 'Order 39 Rule 1 specifies grounds: danger of property being wasted, damaged, alienated, or wrongfully sold in execution.',
        topicCategory: 'Civil Procedure Code'
      }
    ]
  }
];

export const mockLiveSessionsDetailed = [
  {
    id: 'live-tax-01',
    title: 'Income Tax Practical Session: Universal Self-Assessment',
    courseTitle: 'Professional Income Tax Training',
    date: '15 September 2026',
    time: '8:00 PM (BST)',
    instructor: 'Mr. XYZ (Adv. Md. Ruhul Amin)',
    instructorTitle: 'Supreme Court Advocate & NBR Tax Consultant',
    platform: 'Zoom API' as const,
    status: 'Starting Soon' as const,
    joinLink: 'https://zoom.us/j/mock-meeting-elawyers-tax',
    reminderSet: true,
    expectedDuration: '90 Minutes',
    agenda: [
      'Universal Self-Assessment under Section 180',
      'Audit selection criteria by NBR Computerised System',
      'Reconciliation of Bank Statement with Wealth Growth',
      'Q&A Session with live case study sharing'
    ]
  },
  {
    id: 'live-vat-02',
    title: 'Mushak 6.1 Purchase & 6.3 Tax Invoice Live Workshop',
    courseTitle: 'Professional VAT Compliance Training',
    date: '18 September 2026',
    time: '7:30 PM (BST)',
    instructor: 'Adv. Md. Ruhul Amin',
    instructorTitle: 'NBR VAT Specialist',
    platform: 'Google Meet API' as const,
    status: 'Upcoming' as const,
    joinLink: 'https://meet.google.com/mock-elawyers-vat-workshop',
    reminderSet: true,
    expectedDuration: '120 Minutes',
    agenda: [
      'Practical software entry of Mushak 6.1',
      'Rules for issuing Mushak 6.3 at point of delivery',
      'VDS Certificate 6.6 issuance & deduction timeline',
      'Drafting response to NBR VAT preventive team notice'
    ]
  },
  {
    id: 'live-corp-03',
    title: 'Corporate Legal Due Diligence & M&A Compliance',
    courseTitle: 'RJSC Company Incorporation & Annual Return Compliance',
    date: '22 September 2026',
    time: '8:30 PM (BST)',
    instructor: 'Barrister Farhana Zaman',
    instructorTitle: 'Corporate Law Practitioner',
    platform: 'Custom Live Streaming' as const,
    status: 'Upcoming' as const,
    joinLink: '#',
    reminderSet: false,
    expectedDuration: '75 Minutes',
    agenda: [
      'RJSC Registry Search and Search Report preparation',
      'Mortgage & Charge creation Form XVIII filing',
      'Board resolutions and shareholder consent compliance'
    ]
  }
];

export const mockPastRecordedClasses = [
  {
    id: 'rec-01',
    title: 'Income Tax Act 2023: Section 272 Penalty & Audit Defense',
    courseTitle: 'Professional Income Tax Training',
    recordedDate: '01 September 2026',
    duration: '1 Hour 42 Minutes',
    instructor: 'Adv. Md. Ruhul Amin',
    recordingUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    resourcesAttached: ['Penalty_Defense_Notes.pdf', 'Tribunal_Precedents.docx'],
    attendanceConfirmed: true
  },
  {
    id: 'rec-02',
    title: 'Mushak 9.1 Live E-filing Workshop on NBR Test Server',
    courseTitle: 'Professional VAT Compliance Training',
    recordedDate: '25 August 2026',
    duration: '2 Hours 10 Minutes',
    instructor: 'Mr. ABC (Adv. Md. Ruhul Amin)',
    recordingUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    resourcesAttached: ['Subform_K_Reconciliation.xlsx'],
    attendanceConfirmed: true
  },
  {
    id: 'rec-03',
    title: 'Bar Council Written Drafting: High Court Bail Petition',
    courseTitle: 'Bangladesh Bar Council MCQ & Written Preparation Masterclass',
    recordedDate: '18 August 2026',
    duration: '1 Hour 55 Minutes',
    instructor: 'Adv. Shahadat Hossain',
    recordingUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    resourcesAttached: ['Section_498_CrPC_Draft_Template.pdf'],
    attendanceConfirmed: true
  }
];

export const mockStudentNotifications: StudentNotification[] = [
  {
    id: 'notif-1',
    title: 'Live Class Reminder',
    message: 'Income Tax Practical Session starts on 15 September 2026 at 8:00 PM with Adv. Md. Ruhul Amin.',
    type: 'live',
    timestamp: '15 mins ago',
    read: false,
    targetTab: 'student-live'
  },
  {
    id: 'notif-2',
    title: 'Assignment Evaluated: Grade A+ (94%)',
    message: 'Your submission for VAT Mushak 9.1 Return Drafting has been evaluated by your instructor with detailed feedback.',
    type: 'assignment',
    timestamp: '2 hours ago',
    read: false,
    targetTab: 'student-assignments'
  },
  {
    id: 'notif-3',
    title: 'New Lesson Uploaded',
    message: 'Module 02: "Mushak 6.3 Tax Invoice Digital Record Keeping" is now available in your VAT course.',
    type: 'lesson',
    timestamp: 'Yesterday',
    read: false,
    targetTab: 'student-courses'
  },
  {
    id: 'notif-4',
    title: 'Certificate Issued & QR Verified',
    message: 'Your official certificate for "Professional VAT Compliance Training" (ID: ELA-VAT-2026-000234) is ready for download.',
    type: 'certificate',
    timestamp: '2 days ago',
    read: true,
    targetTab: 'student-certificates'
  },
  {
    id: 'notif-5',
    title: 'Quiz Result Released',
    message: 'You scored 85% on the Income Tax Module Test. You are now eligible for the final course certificate upon assignment submission.',
    type: 'quiz',
    timestamp: '3 days ago',
    read: true,
    targetTab: 'student-quizzes'
  },
  {
    id: 'notif-6',
    title: 'Academy Announcement: New NBR SRO Digest',
    message: 'NBR issued SRO No. 284/2026 regarding electronic tax deductions. The analysis note has been added to your legal resource library.',
    type: 'announcement',
    timestamp: '5 days ago',
    read: true,
    targetTab: 'student-resources'
  }
];

export const mockStudentInvoices: StudentInvoice[] = [
  {
    id: 'inv-01',
    invoiceNo: 'INV-ELA-2024-8821',
    courseName: 'Professional Income Tax Training',
    date: '10 Feb 2024',
    amount: 4500,
    paymentMethod: 'bKash',
    transactionId: 'TRX-BK-918237645',
    status: 'Paid'
  },
  {
    id: 'inv-02',
    invoiceNo: 'INV-ELA-2024-8219',
    courseName: 'Professional VAT Compliance Training',
    date: '22 Jan 2024',
    amount: 3500,
    paymentMethod: 'Nagad',
    transactionId: 'TRX-NG-441298532',
    status: 'Paid'
  },
  {
    id: 'inv-03',
    invoiceNo: 'INV-ELA-2024-7620',
    courseName: 'Bangladesh Bar Council MCQ & Written Preparation Masterclass',
    date: '15 Jan 2024',
    amount: 6500,
    paymentMethod: 'SSLCommerz',
    transactionId: 'SSL-TX-99014238',
    status: 'Paid'
  },
  {
    id: 'inv-04',
    invoiceNo: 'INV-ELA-2024-7105',
    courseName: 'RJSC Company Incorporation & Annual Return Compliance',
    date: '01 Feb 2024',
    amount: 4000,
    paymentMethod: 'MasterCard',
    transactionId: 'MC-AUTH-332918',
    status: 'Paid'
  },
  {
    id: 'inv-05',
    invoiceNo: 'INV-ELA-2023-6490',
    courseName: 'High Court Writ & Civil Drafting Workshop',
    date: '18 Dec 2023',
    amount: 5000,
    paymentMethod: 'bKash',
    transactionId: 'TRX-BK-10293847',
    status: 'Paid'
  }
];

export const mockWeeklyLearningAnalytics = {
  totalHoursCompleted: 45,
  overallCompletionPercent: 68,
  quizAverageScore: 91.5,
  attendanceRate: 94,
  streakDays: 14,
  weeklyActivity: [
    { day: 'Mon', hours: 2.5, modules: 2 },
    { day: 'Tue', hours: 3.5, modules: 3 },
    { day: 'Wed', hours: 1.5, modules: 1 },
    { day: 'Thu', hours: 4.0, modules: 3 },
    { day: 'Fri', hours: 5.5, modules: 4 },
    { day: 'Sat', hours: 6.0, modules: 5 },
    { day: 'Sun', hours: 3.5, modules: 2 }
  ],
  subjectDistribution: [
    { subject: 'Income Tax Act 2023', percentage: 38, color: 'bg-emerald-500' },
    { subject: 'VAT & SD Act 2012', percentage: 32, color: 'bg-indigo-500' },
    { subject: 'Bar Council Legal Drafting', percentage: 18, color: 'bg-amber-500' },
    { subject: 'RJSC Corporate Compliance', percentage: 12, color: 'bg-purple-500' }
  ],
  earnedBadges: [
    { name: 'Fast Learner', description: 'Completed 10 lessons in a single 48-hour sprint', icon: 'Zap', color: 'amber' },
    { name: 'Course Completed', description: 'Finished 4 professional certification tracks', icon: 'Award', color: 'emerald' },
    { name: 'Top Performer', description: 'Ranked in top 5 of Academy Leaderboard', icon: 'Trophy', color: 'indigo' },
    { name: 'VAT Mushak Star', description: 'Scored 94%+ on all VAT return assignments', icon: 'ShieldCheck', color: 'purple' },
    { name: 'Bar Distinction', description: 'Passed Bar Council written simulation with honors', icon: 'Scale', color: 'rose' }
  ]
};

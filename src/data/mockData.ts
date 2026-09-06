import { Course, Instructor, LegalResourceItem, LiveClassSession, Certificate, CommunityPost, PaymentTransaction, LeaderboardStudent, AchievementBadge } from '../types';

export const mockInstructors: Instructor[] = [
  {
    id: 'inst-xyz',
    name: 'Advocate XYZ',
    designation: 'Senior Tax Consultant',
    qualification: 'LL.M, ITP, Supreme Court Bar Association Member',
    experienceYears: 20,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    rating: 4.96,
    totalStudents: 5200,
    coursesCreated: 25,
    expertise: ['NBR Income Tax', 'VAT Compliance', 'Corporate Restructuring', 'Tax Litigation'],
    bio: 'Renowned tax authority and Senior Tax Consultant with over two decades of experience representing multinational corporations and leading businesses before the National Board of Revenue (NBR) and the Supreme Court of Bangladesh.'
  },
  {
    id: 'inst-1',
    name: 'Advocate Md. Ruhul Amin',
    designation: 'Supreme Court Advocate & NBR Tax Consultant',
    qualification: 'LL.M (Dhaka University), ITP Certified',
    experienceYears: 14,
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
    rating: 4.9,
    totalStudents: 4250,
    coursesCreated: 12,
    expertise: ['VAT & SD Act 2012', 'Mushak Forms', 'e-Return Filing', 'NBR Audit Defense'],
    bio: 'Pioneer tax practitioner in Bangladesh with 14+ years experience filing corporate e-Returns and representing clients before the High Court Division and NBR Appellate Tribunal.'
  },
  {
    id: 'inst-2',
    name: 'Barrister Farhana Zaman',
    designation: 'Corporate Law Practitioner & RJSC Specialist',
    qualification: 'LL.B (Hons), Bar-at-Law (Lincoln’s Inn)',
    experienceYears: 10,
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    rating: 4.88,
    totalStudents: 3100,
    coursesCreated: 8,
    expertise: ['RJSC Company Formation', 'Annual Returns', 'FDI & Joint Ventures', 'Drafting Contracts'],
    bio: 'Corporate legal advisor specializing in Foreign Direct Investment, RJSC Joint Stock company formations, annual returns, and M&A compliance.'
  },
  {
    id: 'inst-3',
    name: 'Advocate Shahadat Hossain',
    designation: 'Senior High Court Advocate & Bar Council Mentor',
    qualification: 'LL.B (Hons), LL.M (DU)',
    experienceYears: 18,
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    rating: 4.95,
    totalStudents: 6800,
    coursesCreated: 15,
    expertise: ['Bar Council Exam Prep', 'High Court Permission', 'Writ Petitions', 'Advocacy Skills'],
    bio: 'Guided over 5,000 advocate candidates to clear the Bar Council Written & MCQ Examinations and High Court permission exams.'
  },
  {
    id: 'inst-4',
    name: 'Mahmudul Hasan, ACA',
    designation: 'Chartered Accountant & Financial Trainer',
    qualification: 'ACA (ICAB), BBA & MBA (Accounting & Information Systems, DU)',
    experienceYears: 12,
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
    rating: 4.91,
    totalStudents: 3400,
    coursesCreated: 9,
    expertise: ['Corporate Financial Statements', 'Practical Accounting', 'ERP & Tally Prime', 'VDS & TDS Audits'],
    bio: 'Fellow chartered accountant with extensive experience conducting statutory audits, implementing corporate ERP accounting systems, and training finance professionals.'
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-vat-01',
    title: 'Professional VAT Compliance Training',
    slug: 'professional-vat-training',
    category: 'Tax & VAT',
    subcategory: 'VAT Compliance',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.9,
    reviewCount: 312,
    studentCount: 3500,
    durationHours: 40,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 6000,
    offerPrice: 3500,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'MOST POPULAR',
    badgeTopRightIcon: 'Calculator',
    tagBottomLeft: 'VAT LAW & COMPLIANCE',
    accentColor: 'purple',
    keyHighlights: [
      'VAT ACT OVERVIEW',
      'BIN REGISTRATION',
      'MUSHAK FORMS',
      'MONTHLY RETURN FILING',
      'AUDIT PREPARATION'
    ],
    filterCategory: 'TAX & VAT',
    overview: 'Master practical Value Added Tax (VAT) computation, BIN registration, e-VAT portal navigation, and filing Mushak 6.1, 6.3, and 9.1 returns under the VAT & SD Act 2012.',
    objectives: [
      'Master the practical implementation of the VAT & Supplementary Duty Act 2012 and statutory rules.',
      'Navigate the official NBR e-VAT portal to obtain 13-digit BIN and submit error-free monthly returns.',
      'Maintain statutory registers (Mushak 6.1, 6.2) and generate compliant invoices (Mushak 6.3).',
      'Calculate VAT Deducted at Source (VDS), issue Mushak 6.6 certificates, and claim legitimate Input Tax Rebates.'
    ],
    targetAudience: [
      'Practicing Advocates & Legal Practitioners expanding into corporate tax and NBR advisory',
      'Income Tax Practitioners (ITP) and VAT Consultants handling corporate clients',
      'Finance Managers, Corporate Accountants, and Company Secretaries',
      'Business Owners, Directors, and Entrepreneurs wanting statutory compliance control',
      'Graduates in Law, BBA, and Accounting aspiring for high-demand tax careers'
    ],
    practicalBenefits: [
      'Step-by-step practical simulations on live NBR test portals',
      'Ready-to-use Excel templates for Mushak 6.1, 6.2, and monthly reconciliation',
      'Direct WhatsApp and live webinar access to Senior Tax Consultant Advocate XYZ',
      'Officially verified Certificate of Completion with digital QR authentication',
      'Lifetime access to lecture recordings and annual Bangladesh budget update notes'
    ],
    whatYouWillLearn: [
      'VAT fundamentals & legal framework under VAT & SD Act 2012',
      'Registration process: 13-digit e-BIN application and required documents',
      'VAT return preparation: filing monthly Mushak 9.1 return online without errors',
      'Mushak forms: Practical filling of Mushak 6.1, 6.2, 6.3, 6.5, 6.6 and 9.1',
      'Compliance procedures: VDS calculation, rebate claims, and audit defense strategies'
    ],
    modules: [
      {
        id: 'mod-1',
        title: 'Module 01: Introduction to VAT',
        lessons: [
          {
            id: 'les-101',
            title: '1. VAT Concept & Legal Structure in Bangladesh',
            durationMinutes: 20,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true,
            resources: [{ name: 'VAT_Concept_Overview_2024.pdf', fileUrl: '#', type: 'pdf' }]
          },
          {
            id: 'les-102',
            title: '2. VAT Registration Process & Eligibility Criteria',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            resources: [{ name: 'VAT_Registration_Checklist.pdf', fileUrl: '#', type: 'pdf' }]
          },
          {
            id: 'les-103',
            title: '3. BIN Application Step-by-Step on NBR Portal',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            resources: [{ name: 'BIN_Application_Guide.pdf', fileUrl: '#', type: 'pdf' }]
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 02: Mushak Forms & Practical Registers',
        lessons: [
          {
            id: 'les-201',
            title: '1. Mushak 6.1 (Purchase Register) Practical Entry & Maintenance',
            durationMinutes: 40,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true,
            resources: [{ name: 'Mushak_6.1_Excel_Template.xlsx', fileUrl: '#', type: 'excel' }]
          },
          {
            id: 'les-202',
            title: '2. Mushak 9.1 Online Return Filing on e-VAT Portal',
            durationMinutes: 50,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            quizId: 'quiz-vat-91',
            resources: [{ name: 'Mushak_9.1_Field_Guide.pdf', fileUrl: '#', type: 'pdf' }]
          },
          {
            id: 'les-203',
            title: '3. Mushak 6.3 (Tax Invoice) & Mushak 6.6 (VDS Certificate) Drafting',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
          }
        ]
      },
      {
        id: 'mod-3',
        title: 'Module 03: VDS, Input Tax Rebate & NBR Audit Defense',
        lessons: [
          {
            id: 'les-301',
            title: '1. VDS Deductions, Accounting Entries & Deposit Treasury Challan',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
          },
          {
            id: 'les-302',
            title: '2. Input Tax Rebate (Rebat) Eligibility & Practical Claims',
            durationMinutes: 45,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
          },
          {
            id: 'les-303',
            title: '3. Handling NBR VAT Audits, Show Cause Notices & Tribunal Appeals',
            durationMinutes: 40,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
          }
        ]
      }
    ]
  },
  {
    id: 'course-tax-02',
    title: 'Income Tax Course',
    slug: 'income-tax-course',
    category: 'Tax & VAT',
    subcategory: 'Income Tax Training',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.85,
    reviewCount: 245,
    studentCount: 1290,
    durationHours: 28,
    language: 'Bangla',
    regularPrice: 8000,
    offerPrice: 4500,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'HIGH DEMAND',
    badgeTopRightIcon: 'FileSpreadsheet',
    tagBottomLeft: 'COMPLETE TAX TRAINING',
    accentColor: 'emerald',
    keyHighlights: [
      'TAX LAW BASICS',
      'INCOME CATEGORIES',
      'DEDUCTIONS & EXEMPTIONS',
      'RETURN PREPARATION',
      'E-RETURN FILING'
    ],
    filterCategory: 'TAX & VAT',
    overview: 'Comprehensive practical course on individual and corporate income tax computation, rebate calculation, asset statements, and e-Return filing under Income Tax Act 2023.',
    whatYouWillLearn: [
      'In-depth breakdown of Income Tax Act 2023 key section changes',
      'Salary, House Property, and Business Income Tax calculation formulas',
      'How to compute Tax Rebate & Minimum Tax under Section 163',
      'Step-by-step e-Return filing on NBR taxportal.gov.bd',
      'Preparing Wealth Statement (IT-10B) & Source of Wealth disclosures'
    ],
    modules: [
      {
        id: 'mod-tax-1',
        title: 'Module 01: Income Tax Act 2023 Overview',
        lessons: [
          {
            id: 'les-tax-101',
            title: 'Key Differences: Income Tax Ordinance 1984 vs Act 2023',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          },
          {
            id: 'les-tax-102',
            title: 'Individual Tax Slabs & Rebate Calculation',
            durationMinutes: 45,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
          }
        ]
      }
    ]
  },
  {
    id: 'course-rjsc-04',
    title: 'RJSC Training Program',
    slug: 'rjsc-training-program',
    category: 'Corporate Compliance',
    subcategory: 'RJSC Training',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[1],
    rating: 4.88,
    reviewCount: 180,
    studentCount: 940,
    durationHours: 24,
    language: 'Bilingual',
    regularPrice: 5000,
    offerPrice: 3000,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'CORPORATE',
    badgeTopRightIcon: 'Building2',
    tagBottomLeft: 'COMPANY COMPLIANCE',
    accentColor: 'blue',
    keyHighlights: [
      'COMPANY REGISTRATION',
      'ANNUAL RETURNS',
      'DIRECTOR CHANGES',
      'DOCUMENTATION',
      'PENALTY AVOIDANCE'
    ],
    filterCategory: 'CORPORATE',
    overview: 'Practical hands-on guide for Memorandum & Articles of Association drafting, Name Clearance, Digital Certificate application, RJSC Annual Return filing (Schedule X, Form C, Form XII).',
    whatYouWillLearn: [
      'Step-by-step company registration on RJSC portal',
      'Drafting MOA & AOA for Private & Public Limited companies',
      'Share Transfer, Allotment (Form X, Form XV), and Director appointment',
      'Preparing AGM documents and filing Annual Returns to RJSC'
    ],
    modules: [
      {
        id: 'mod-rjsc-1',
        title: 'Module 01: Company Incorporation Basics',
        lessons: [
          {
            id: 'les-rjsc-101',
            title: 'RJSC Name Clearance & Digital Signature Setup',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-bar-03',
    title: 'Bar Council Preparation',
    slug: 'bar-council-preparation',
    category: 'Legal Training',
    subcategory: 'Bar Council Preparation',
    thumbnail: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.95,
    reviewCount: 420,
    studentCount: 2650,
    durationHours: 48,
    language: 'Bangla',
    regularPrice: 10000,
    offerPrice: 5000,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'LAW EXAM PREP',
    badgeTopRightIcon: 'ShieldCheck',
    tagBottomLeft: 'EXAM & LICENSING',
    accentColor: 'amber',
    keyHighlights: [
      'SYLLABUS COVERAGE',
      'LEGAL REASONING',
      'MCQ PRACTICE',
      'WRITTEN GUIDANCE',
      'EXAM STRATEGY'
    ],
    filterCategory: 'LEGAL',
    overview: 'Systematic mastery of CPC, CrPC, Evidence Act, Penal Code, Specific Relief Act, Limitation Act, and Canons of Professional Conduct with 2,000+ solved MCQs and written drafting techniques.',
    whatYouWillLearn: [
      'Core procedural mastery of Civil Procedure Code 1908 and Criminal Procedure Code 1898',
      'Evidence Act burden of proof & admissibility principles',
      'Techniques for solving Bar Council tricky MCQ questions',
      'Plaint, Written Statement, Bail application, and Memorandum of Appeal drafting',
      'Ethical rules and Canons of Professional Conduct for advocates'
    ],
    modules: [
      {
        id: 'mod-bar-1',
        title: 'Module 01: Code of Civil Procedure (CPC)',
        lessons: [
          {
            id: 'les-bar-101',
            title: 'Res Judicata (Section 11) & Res Sub-Judice (Section 10)',
            durationMinutes: 40,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-acc-05',
    title: 'Practical Accounting',
    slug: 'practical-accounting',
    category: 'Accounting',
    subcategory: 'Practical Accounting',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.82,
    reviewCount: 165,
    studentCount: 890,
    durationHours: 26,
    language: 'Bangla',
    regularPrice: 7000,
    offerPrice: 4000,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'HANDS-ON',
    badgeTopRightIcon: 'BookOpen',
    tagBottomLeft: 'HANDS-ON TRAINING',
    accentColor: 'sky',
    keyHighlights: [
      'JOURNAL ENTRIES',
      'LEDGER POSTING',
      'TRIAL BALANCE',
      'FINANCIAL STATEMENTS',
      'SOFTWARE BASICS'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Comprehensive real-world corporate accounting program covering double-entry bookkeeping, adjusting entries, bank reconciliation, trial balance, and computerized financial statements.',
    whatYouWillLearn: [
      'Core principles of double-entry debit & credit classification',
      'Posting journal entries, general ledger, and subsidiary ledgers',
      'Bank reconciliation statements and month-end closing procedures',
      'Preparing Income Statement, Balance Sheet, and Cash Flow Statement',
      'Introduction to accounting software like Tally Prime & Excel'
    ],
    modules: [
      {
        id: 'mod-acc-1',
        title: 'Module 01: Bookkeeping & Journal Entries',
        lessons: [
          {
            id: 'les-acc-101',
            title: 'Journal Entry Rules and Practical Vouchers',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-office-06',
    title: 'MS Office Training',
    slug: 'ms-office-training',
    category: 'Professional Skills',
    subcategory: 'Office Productivity',
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[1],
    rating: 4.86,
    reviewCount: 210,
    studentCount: 1450,
    durationHours: 20,
    language: 'Bangla',
    regularPrice: 4000,
    offerPrice: 2500,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'OFFICE SKILLS',
    badgeTopRightIcon: 'FileText',
    tagBottomLeft: 'EXCEL & PRODUCTIVITY',
    accentColor: 'rose',
    keyHighlights: [
      'WORD ESSENTIALS',
      'EXCEL FORMULAS',
      'PIVOT TABLES',
      'POWERPOINT DESIGN',
      'PRACTICAL TASKS'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Fast-track practical MS Office course tailored for law clerks, corporate executives, and accounting teams to master Word documentation, advanced Excel formulas, and executive PowerPoint decks.',
    whatYouWillLearn: [
      'Professional document formatting, legal agreement styling, and mail merge in MS Word',
      'Essential Excel formulas (VLOOKUP, XLOOKUP, INDEX-MATCH, IF, SUMIFS)',
      'Pivot Tables, dynamic dashboards, and automated accounting summaries',
      'High-impact executive presentation slide design in PowerPoint',
      'Time-saving keyboard shortcuts and real-world workplace assignments'
    ],
    modules: [
      {
        id: 'mod-off-1',
        title: 'Module 01: Advanced MS Excel for Business',
        lessons: [
          {
            id: 'les-off-101',
            title: 'Essential Financial Functions & Formula Structuring',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-hc-07',
    title: 'High Court Preparation',
    slug: 'high-court-preparation',
    category: 'Legal Training',
    subcategory: 'High Court Preparation',
    thumbnail: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.97,
    reviewCount: 340,
    studentCount: 1720,
    durationHours: 42,
    language: 'Bangla',
    regularPrice: 12000,
    offerPrice: 6000,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'PREMIUM',
    badgeTopRightIcon: 'GraduationCap',
    tagBottomLeft: 'LEGAL PRACTICE READY',
    accentColor: 'slate',
    keyHighlights: [
      'PROCEDURE BASICS',
      'CASE STUDY',
      'DRAFTING SKILLS',
      'ADVOCACY PRACTICE',
      'EXAM PREPARATION'
    ],
    filterCategory: 'LEGAL',
    overview: 'High Court Division enrolment and legal practice masterclass for advocates preparing for permission exams, Article 102 Writ Petitions, Civil & Criminal revisions, and appellate advocacy.',
    whatYouWillLearn: [
      'Jurisdiction of the High Court Division under the Constitution of Bangladesh',
      'Filing Writ Petitions (Mandamus, Certiorari, Habeas Corpus, Prohibition, Quo Warranto)',
      'Drafting Criminal Revision, Criminal Appeal, and Section 561A Quashment Petitions',
      'Civil Revision, First Appeal, and Injunction applications under CPC',
      'Techniques for oral submission and courtroom decorum before the Bench'
    ],
    modules: [
      {
        id: 'mod-hc-1',
        title: 'Module 01: Constitutional & Writ Jurisdiction',
        lessons: [
          {
            id: 'les-hc-101',
            title: 'Article 102 In-depth Analysis & Landmark Precedents',
            durationMinutes: 45,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-taxlive-08',
    title: 'Online Income Tax (Live)',
    slug: 'online-income-tax-live',
    category: 'Tax & VAT',
    subcategory: 'Live Tax Sessions',
    thumbnail: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.92,
    reviewCount: 198,
    studentCount: 1100,
    durationHours: 36,
    language: 'Bangla',
    regularPrice: 9000,
    offerPrice: 5000,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'LIVE',
    badgeTopRightIcon: 'Video',
    tagBottomLeft: 'INTERACTIVE LIVE CLASS',
    accentColor: 'teal',
    keyHighlights: [
      'LIVE SESSIONS',
      'REAL EXAMPLES',
      'Q&A SUPPORT',
      'PRACTICAL FILING',
      'CERTIFICATE'
    ],
    filterCategory: 'ONLINE/LIVE',
    overview: 'Interactive live cohort-based practical income tax training. Attend live weekend sessions, submit real tax assessments with immediate mentor review, and participate in interactive Q&A.',
    whatYouWillLearn: [
      'Direct live Zoom lectures with senior NBR tax practitioners',
      'Live screen-share walk-throughs of real e-Return submissions',
      'Instant Q&A and doubt-clearing sessions on client tax cases',
      'Handling individual, partnership firm, and company tax computations',
      'Official verified course completion certificate with QR authentication'
    ],
    modules: [
      {
        id: 'mod-live-1',
        title: 'Module 01: Live Interactive Orientation & e-Return Setup',
        lessons: [
          {
            id: 'les-live-101',
            title: 'Live Workshop: Real-time Return Submission Simulation',
            durationMinutes: 60,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-legal-drafting',
    title: 'Legal Drafting',
    slug: 'legal-drafting',
    category: 'Legal Training',
    subcategory: 'Legal Drafting',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[3],
    rating: 4.89,
    reviewCount: 220,
    studentCount: 1650,
    durationHours: 25,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 6500,
    offerPrice: 3800,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'ADVOCACY',
    badgeTopRightIcon: 'FileText',
    tagBottomLeft: 'LEGAL DRAFTING & CONTRACTS',
    accentColor: 'blue',
    keyHighlights: [
      'CONTRACT DRAFTING',
      'LEGAL NOTICES',
      'PLAINT & WRITTEN STATEMENT',
      'BAIL APPLICATIONS',
      'DEED TEMPLATES'
    ],
    filterCategory: 'LEGAL',
    overview: 'Practical legal document writing, commercial agreement preparation, court petitions, and statutory notice drafting with 100+ editable templates.',
    whatYouWillLearn: [
      'Drafting commercial agreements, NDAs, partnership deeds, and lease agreements',
      'Drafting civil plaints, written statements, injunction applications under CPC',
      'Criminal bail petitions, Section 561A petitions, and NI Act Section 138 legal notices',
      'High Court writ petition drafting techniques and citation formatting'
    ],
    modules: [
      {
        id: 'mod-draft-1',
        title: 'Module 01: Commercial Contracts & Legal Agreements',
        lessons: [
          {
            id: 'les-draft-101',
            title: 'Anatomy of an Enforceable Commercial Agreement in Bangladesh',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-corp-law',
    title: 'Corporate Law Practice',
    slug: 'corporate-law-practice',
    category: 'Legal Training',
    subcategory: 'Corporate Law Practice',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.91,
    reviewCount: 175,
    studentCount: 1420,
    durationHours: 30,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 8500,
    offerPrice: 4800,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'CORPORATE',
    badgeTopRightIcon: 'Building2',
    tagBottomLeft: 'COMPANY LAW & ADVISORY',
    accentColor: 'purple',
    keyHighlights: [
      'COMPANIES ACT 1994',
      'BOARD RESOLUTIONS',
      'SHAREHOLDERS AGREEMENTS',
      'BIDA APPROVALS',
      'LEGAL OPINIONS'
    ],
    filterCategory: 'LEGAL',
    overview: 'Comprehensive company law, regulatory compliance, corporate advisory, and legal opinion drafting for corporate legal counsels and aspiring advocates.',
    whatYouWillLearn: [
      'Companies Act 1994 statutory compliance and board governance',
      'Drafting Board of Directors resolutions, AGM minutes, and shareholder pacts',
      'Foreign Direct Investment (FDI) regulations and BIDA work permit processing',
      'Drafting formal legal opinions for banks and multinational corporations'
    ],
    modules: [
      {
        id: 'mod-corp-1',
        title: 'Module 01: Corporate Advisory Fundamentals',
        lessons: [
          {
            id: 'les-corp-101',
            title: 'Legal Counsel Role in Bangladesh Corporate Entities',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-ereturn',
    title: 'e-Return Filing',
    slug: 'e-return-filing',
    category: 'Tax & VAT',
    subcategory: 'e-Return Filing',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.93,
    reviewCount: 310,
    studentCount: 3100,
    durationHours: 18,
    language: 'Bangla',
    level: 'Professional',
    regularPrice: 4500,
    offerPrice: 2500,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'DIGITAL TAX',
    badgeTopRightIcon: 'FileSpreadsheet',
    tagBottomLeft: 'ONLINE RETURN SUBMISSION',
    accentColor: 'emerald',
    keyHighlights: [
      'NBR TAX PORTAL',
      'SALARY RETURN',
      'BUSINESS RETURN',
      'IT-10B WEALTH FORM',
      'ACKNOWLEDGEMENT SLIP'
    ],
    filterCategory: 'TAX & VAT',
    overview: 'Fast-track practical mastery of NBR online e-Return submission, biometric registration, asset statement IT-10B, and instant tax certificate generation.',
    whatYouWillLearn: [
      'Online e-Return user account creation with biometric mobile registration',
      'Filing individual salary returns with automated rebate deductions',
      'Filing sole proprietorship business income and bank interest statements',
      'Instant download of NBR Tax Acknowledgement Receipt and Tax Certificate'
    ],
    modules: [
      {
        id: 'mod-eret-1',
        title: 'Module 01: e-Return Portal Walkthrough',
        lessons: [
          {
            id: 'les-eret-101',
            title: 'Live Walkthrough of taxportal.gov.bd & e-Return Navigation',
            durationMinutes: 25,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-nbr-practice',
    title: 'NBR Practice',
    slug: 'nbr-practice',
    category: 'Tax & VAT',
    subcategory: 'NBR Practice',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[0],
    rating: 4.9,
    reviewCount: 160,
    studentCount: 1250,
    durationHours: 28,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 9000,
    offerPrice: 5200,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'TAX LITIGATION',
    badgeTopRightIcon: 'Calculator',
    tagBottomLeft: 'NBR TRIBUNAL & APPEALS',
    accentColor: 'amber',
    keyHighlights: [
      'SECTION 272 PENALTY',
      'TAX AUDIT DEFENSE',
      'COMMISSIONER APPEAL',
      'APPELLATE TRIBUNAL',
      'TAX WAIVER RULES'
    ],
    filterCategory: 'TAX & VAT',
    overview: 'Master NBR audit notice defense, assessment order appeals, Taxes Appellate Tribunal representation, and alternative dispute resolution (ADR).',
    whatYouWillLearn: [
      'Replying to DCT notices under Section 167, 182, and 212 of Income Tax Act 2023',
      'Drafting Memorandum of Appeal before Commissioner of Taxes (Appeals)',
      'Arguing appeals before the Taxes Appellate Tribunal with landmark case citations',
      'Practical settlement through Alternative Dispute Resolution (ADR) under Chapter 21'
    ],
    modules: [
      {
        id: 'mod-nbr-1',
        title: 'Module 01: NBR Notice & Audit Defense',
        lessons: [
          {
            id: 'les-nbr-101',
            title: 'Handling Section 167 Assessment Notices Effectively',
            durationMinutes: 40,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-company-formation',
    title: 'Company Formation',
    slug: 'company-formation',
    category: 'Corporate Compliance',
    subcategory: 'Company Formation',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.88,
    reviewCount: 140,
    studentCount: 1380,
    durationHours: 22,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 5500,
    offerPrice: 3200,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'INCORPORATION',
    badgeTopRightIcon: 'Building2',
    tagBottomLeft: 'RJSC COMPANY FORMATION',
    accentColor: 'blue',
    keyHighlights: [
      'NAME CLEARANCE',
      'MOA & AOA CLAUSES',
      'DIGITAL CERTIFICATE',
      'BANK ACCOUNT & ENCASHMENT',
      'CERTIFICATE OF INCORPORATION'
    ],
    filterCategory: 'CORPORATE',
    overview: 'End-to-end practical walkthrough of incorporating Private and Public Limited companies, One Person Companies (OPC), and foreign subsidiaries in Bangladesh.',
    whatYouWillLearn: [
      'RJSC portal online name clearance application and rejection prevention',
      'Drafting comprehensive Objects clauses in Memorandum of Association (MOA)',
      'Digital signature setup, payment of stamp duties and registration fees',
      'Obtaining Certificate of Incorporation, Form XII, and certified MOA copies'
    ],
    modules: [
      {
        id: 'mod-form-1',
        title: 'Module 01: End-to-End Incorporation Lifecycle',
        lessons: [
          {
            id: 'les-form-101',
            title: 'Complete Lifecycle: From Name Clearance to Incorporation Certificate',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-annual-filing',
    title: 'Annual Return Filing',
    slug: 'annual-return-filing',
    category: 'Corporate Compliance',
    subcategory: 'Annual Return Filing',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.87,
    reviewCount: 125,
    studentCount: 1150,
    durationHours: 20,
    language: 'Bangla',
    level: 'Professional',
    regularPrice: 4500,
    offerPrice: 2800,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'RJSC COMPLIANCE',
    badgeTopRightIcon: 'Building2',
    tagBottomLeft: 'SCHEDULE X & FORM C FILING',
    accentColor: 'blue',
    keyHighlights: [
      'SCHEDULE X PREPARATION',
      'FORM C BALANCE SHEET',
      'FORM XII DIRECTORS',
      'AGM RESOLUTIONS',
      'LATE FILING PETITIONS'
    ],
    filterCategory: 'CORPORATE',
    overview: 'Practical preparation and submission of mandatory RJSC Annual Returns, Schedule X, Form C, Form XII, and managing court condonation of delay.',
    whatYouWillLearn: [
      'Preparing Schedule X (Annual Summary of Share Capital and List of Shareholders)',
      'Filing Form C (Balance Sheet and Profit & Loss Account filing under Section 190)',
      'Preparing Form XII for Director change, addition, or resignation',
      'Handling RJSC late filing penalty and condonation petitions before High Court'
    ],
    modules: [
      {
        id: 'mod-ann-1',
        title: 'Module 01: Annual Statutory Filings',
        lessons: [
          {
            id: 'les-ann-101',
            title: 'Filing Schedule X and Form C Step-by-Step on RJSC Portal',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-fin-analysis',
    title: 'Financial Statement Analysis',
    slug: 'financial-statement-analysis',
    category: 'Accounting',
    subcategory: 'Financial Statement Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[4],
    rating: 4.92,
    reviewCount: 155,
    studentCount: 1550,
    durationHours: 28,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 7500,
    offerPrice: 4200,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'FINANCE',
    badgeTopRightIcon: 'BookOpen',
    tagBottomLeft: 'BALANCE SHEET & RATIOS',
    accentColor: 'sky',
    keyHighlights: [
      'BALANCE SHEET READING',
      'PROFIT & LOSS AUDIT',
      'CASH FLOW STATEMENTS',
      'FINANCIAL RATIOS',
      'FRAUD DETECTION'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Master interpreting corporate balance sheets, profit & loss statements, cash flow disclosures, financial ratio diagnostics, and evaluating business viability.',
    whatYouWillLearn: [
      'Reading and interpreting audited Balance Sheets and Income Statements',
      'Key financial ratios: Liquidity, Solvency, Profitability, and Efficiency ratios',
      'Cash Flow Statement direct and indirect analysis for corporate evaluation',
      'Identifying creative accounting practices and audit warning flags'
    ],
    modules: [
      {
        id: 'mod-fin-1',
        title: 'Module 01: Corporate Financial Statement Deep Dive',
        lessons: [
          {
            id: 'les-fin-101',
            title: 'Deconstructing the Modern Corporate Balance Sheet',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-erp-training',
    title: 'ERP Training',
    slug: 'erp-training',
    category: 'Accounting',
    subcategory: 'ERP Training',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[4],
    rating: 4.87,
    reviewCount: 130,
    studentCount: 1400,
    durationHours: 30,
    language: 'Bangla',
    level: 'Professional',
    regularPrice: 8000,
    offerPrice: 4500,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'ERP SYSTEMS',
    badgeTopRightIcon: 'BookOpen',
    tagBottomLeft: 'TALLY PRIME & CLOUD ERP',
    accentColor: 'sky',
    keyHighlights: [
      'TALLY PRIME MASTERY',
      'CHART OF ACCOUNTS',
      'INVENTORY MODULE',
      'VAT & TAX CONFIGURATION',
      'CLOUD ACCOUNTING'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Hands-on enterprise accounting software training in Tally Prime, Chart of Accounts configuration, inventory valuation, and automated statutory tax reports.',
    whatYouWillLearn: [
      'Company creation and Chart of Accounts design in Tally Prime',
      'Voucher entry: Sales, Purchase, Payment, Receipt, and Journal vouchers',
      'Inventory management: Stock items, units of measure, and godown transfer',
      'Configuring automated VAT Mushak 6.3 and TDS reports in ERP'
    ],
    modules: [
      {
        id: 'mod-erp-1',
        title: 'Module 01: Tally Prime Enterprise Setup',
        lessons: [
          {
            id: 'les-erp-101',
            title: 'Chart of Accounts Architecture & Master Ledger Setup',
            durationMinutes: 30,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-excel-training',
    title: 'Excel Training',
    slug: 'excel-training',
    category: 'Professional Skills',
    subcategory: 'Excel Training',
    thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[4],
    rating: 4.94,
    reviewCount: 380,
    studentCount: 3400,
    durationHours: 25,
    language: 'Bangla + English',
    level: 'Professional',
    regularPrice: 5500,
    offerPrice: 3200,
    isPopular: true,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'BESTSELLER',
    badgeTopRightIcon: 'FileSpreadsheet',
    tagBottomLeft: 'ADVANCED EXCEL & MODELING',
    accentColor: 'rose',
    keyHighlights: [
      'XLOOKUP & ADVANCED FORMULAS',
      'PIVOT TABLES & SLICERS',
      'TAX & VAT RECONCILIATION',
      'AUTOMATED DASHBOARDS',
      'DATA VALIDATION'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Master advanced Excel formulas, dynamic Pivot Tables, data cleansing, automated tax reconciliation models, and executive executive reporting dashboards.',
    whatYouWillLearn: [
      'XLOOKUP, INDEX-MATCH, SUMIFS, and dynamic array formulas',
      'Building interactive Pivot Tables with timelines and slicers',
      'Automating VAT Mushak 6.1 reconciliation against bank statements',
      'Creating dynamic executive summary dashboards and KPI cards'
    ],
    modules: [
      {
        id: 'mod-xl-1',
        title: 'Module 01: Advanced Formulas for Financial Analysis',
        lessons: [
          {
            id: 'les-xl-101',
            title: 'Mastering XLOOKUP and Dynamic Arrays in Excel',
            durationMinutes: 35,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  },
  {
    id: 'course-biz-comm',
    title: 'Business Communication',
    slug: 'business-communication',
    category: 'Professional Skills',
    subcategory: 'Business Communication',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
    instructor: mockInstructors[2],
    rating: 4.86,
    reviewCount: 145,
    studentCount: 1750,
    durationHours: 18,
    language: 'English',
    level: 'Professional',
    regularPrice: 4500,
    offerPrice: 2800,
    isPopular: false,
    isFeatured: true,
    status: 'Published',
    badgeTopLeft: 'COMMUNICATION',
    badgeTopRightIcon: 'Briefcase',
    tagBottomLeft: 'BUSINESS ADVOCACY & WRITING',
    accentColor: 'rose',
    keyHighlights: [
      'EXECUTIVE EMAILS',
      'CLIENT NEGOTIATIONS',
      'LEGAL OPINION WRITING',
      'BOARDROOM PRESENTATIONS',
      'DISPUTE RESOLUTION'
    ],
    filterCategory: 'ACCOUNTING',
    overview: 'Essential corporate communication, professional email etiquette, high-stakes client negotiation, and boardroom presentation skills for modern professionals.',
    whatYouWillLearn: [
      'Crafting clear, persuasive executive emails and formal letters',
      'Client negotiation strategies for lawyers, accountants, and consultants',
      'Structuring crisp, high-impact PowerPoint presentations for directors',
      'Professional verbal communication and conflict resolution'
    ],
    modules: [
      {
        id: 'mod-comm-1',
        title: 'Module 01: Professional Written Communication',
        lessons: [
          {
            id: 'les-comm-101',
            title: 'Writing Persuasive Executive Memos and Client Emails',
            durationMinutes: 25,
            videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
            isFreePreview: true
          }
        ]
      }
    ]
  }
];

export const mockResources: LegalResourceItem[] = [
  {
    id: 'res-1',
    title: 'NBR Official Mushak 9.1 Online Return Format (2024)',
    category: 'Tax & VAT',
    fileFormat: 'PDF',
    fileSize: '2.4 MB',
    downloads: 3820,
    downloadUrl: '#',
    description: 'Official NBR VAT Return Mushak 9.1 PDF with instructions and line item field guides.',
    isPremium: false
  },
  {
    id: 'res-2',
    title: 'Income Tax Return IT-11GA Form & Wealth Statement IT-10B',
    category: 'Tax & VAT',
    fileFormat: 'PDF',
    fileSize: '1.8 MB',
    downloads: 4150,
    downloadUrl: '#',
    description: 'Complete printable Income Tax return form for individual taxpayers under Tax Act 2023.',
    isPremium: false
  },
  {
    id: 'res-3',
    title: 'Standard Memorandum & Articles of Association (Private Ltd Co)',
    category: 'RJSC Corporate',
    fileFormat: 'DOCX',
    fileSize: '420 KB',
    downloads: 2900,
    downloadUrl: '#',
    description: 'Fully editable DOCX template for RJSC company incorporation in Bangladesh.',
    isPremium: true
  },
  {
    id: 'res-4',
    title: 'High Court Writ Petition Draft Template & Index',
    category: 'Legal Templates',
    fileFormat: 'DOCX',
    fileSize: '310 KB',
    downloads: 1850,
    downloadUrl: '#',
    description: 'Standard Article 102 Writ Petition format for Bangladesh Supreme Court High Court Division.',
    isPremium: true
  },
  {
    id: 'res-5',
    title: 'Bar Council MCQ Exam 10-Year Question Bank with Solutions',
    category: 'Bar Exam Prep',
    fileFormat: 'PDF',
    fileSize: '8.5 MB',
    downloads: 6200,
    downloadUrl: '#',
    description: 'Completely solved Bar Council enrolment exam questions from 2013 to 2023 with law references.',
    isPremium: false
  }
];

export const mockLiveClasses: LiveClassSession[] = [
  {
    id: 'live-1',
    title: 'NBR Tax Act 2023: Section 272 Penalty & Audit Defense Masterclass',
    courseTitle: 'Income Tax Act 2023 & e-Return Filing Masterclass',
    instructorName: 'Advocate Md. Ruhul Amin',
    scheduledTime: 'Tomorrow at 8:00 PM (BST)',
    durationMinutes: 90,
    platform: 'Zoom',
    joinLink: 'https://zoom.us/j/mock-meeting-elawyers',
    status: 'Upcoming'
  },
  {
    id: 'live-2',
    title: 'Mushak 6.1 Purchase & 6.3 Tax Invoice Live Workshop',
    courseTitle: 'Professional VAT & Supplementary Duty Compliance Training',
    instructorName: 'Advocate Md. Ruhul Amin',
    scheduledTime: 'Friday, Sept 12 at 7:30 PM (BST)',
    durationMinutes: 120,
    platform: 'Google Meet',
    joinLink: 'https://meet.google.com/mock-elawyers-vat',
    status: 'Upcoming'
  },
  {
    id: 'live-3',
    title: 'High Court Bail Application & Civil Appeal Drafting Session',
    courseTitle: 'Bangladesh Bar Council MCQ & Written Preparation Masterclass',
    instructorName: 'Advocate Shahadat Hossain',
    scheduledTime: 'Recorded Session - Aug 28',
    durationMinutes: 105,
    platform: 'Live Stream',
    joinLink: '#',
    recordingUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    status: 'Ended'
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: 'CERT-ELA-2024-8821',
    studentName: 'Md. Rahman',
    studentId: 'STU-1092',
    courseTitle: 'Professional VAT & Supplementary Duty Compliance Training',
    issueDate: 'August 15, 2024',
    verificationQrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://e-lawyers.academy/verify/CERT-ELA-2024-8821',
    instructorSignature: 'Adv. Md. Ruhul Amin',
    grade: 'Distinction'
  },
  {
    id: 'CERT-ELA-2024-9104',
    studentName: 'Md. Rahman',
    studentId: 'STU-1092',
    courseTitle: 'Income Tax Act 2023 & e-Return Filing Masterclass',
    issueDate: 'July 02, 2024',
    verificationQrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://e-lawyers.academy/verify/CERT-ELA-2024-9104',
    instructorSignature: 'Adv. Md. Ruhul Amin',
    grade: 'Merit'
  }
];

export const mockCommunityPosts: CommunityPost[] = [
  {
    id: 'post-1',
    authorName: 'Advocate Tanvir Ahmed',
    authorRole: 'Practicing Advocate',
    authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    title: 'How to handle VAT audit objection regarding Rebat claim under Mushak 6.6?',
    content: 'We recently faced an audit objection for a manufacturing client regarding input tax credit on fuel. NBR audit officer claimed Mushak 6.6 VDS certificate was missing. What is the latest High Court precedent on this?',
    category: 'Tax & VAT Q&A',
    upvotes: 24,
    repliesCount: 8,
    createdAt: '2 hours ago',
    tags: ['VAT Audit', 'Mushak 6.6', 'Rebat', 'NBR']
  },
  {
    id: 'post-2',
    authorName: 'Sultana Razia',
    authorRole: 'Bar Council Candidate',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    title: 'Strategy for CPC Order 39 Temporary Injunction questions in Bar Exam',
    content: 'Advocate Shahadat sir mentioned in today\'s lecture that prima facie case, balance of convenience, and irreparable loss must be argued together. Sharing my summary notes here!',
    category: 'Bar Council Prep',
    upvotes: 42,
    repliesCount: 15,
    createdAt: '1 day ago',
    tags: ['CPC', 'Bar Exam', 'Injunction', 'Notes']
  }
];

export const mockTransactions: PaymentTransaction[] = [
  {
    id: 'TXN-BKASH-881920',
    courseId: 'c-vat-01',
    studentName: 'Md. Rahman',
    studentEmail: 'rahman.legal@gmail.com',
    courseTitle: 'Professional VAT & Supplementary Duty Compliance Training',
    amount: 3500,
    paymentMethod: 'bKash',
    transactionId: '8B891A92X',
    status: 'Completed',
    date: '2024-08-01 14:32'
  },
  {
    id: 'TXN-NAGAD-771821',
    courseId: 'c-tax-01',
    studentName: 'Farhana Akhter',
    studentEmail: 'farhana.law@yahoo.com',
    courseTitle: 'Income Tax Act 2023 & e-Return Filing Masterclass',
    amount: 3200,
    paymentMethod: 'Nagad',
    transactionId: 'NGD9921004',
    status: 'Completed',
    date: '2024-08-03 11:15'
  },
  {
    id: 'TXN-SSL-661204',
    courseId: 'course-rjsc-04',
    studentName: 'Kamrul Hasan',
    studentEmail: 'kamrul.corp@outlook.com',
    courseTitle: 'RJSC Corporate Compliance & Company Formation',
    amount: 3900,
    paymentMethod: 'SSLCommerz',
    transactionId: 'SSL-2024-99120',
    status: 'Completed',
    date: '2024-08-05 09:40'
  }
];

export const mockAchievementBadges: Record<string, AchievementBadge> = {
  barDistinction: {
    id: 'badge-bar-distinction',
    name: 'Bar Council Distinction',
    description: 'Achieved 95%+ in Bar Council mock trials and ethics assessments',
    icon: 'Scale',
    color: 'amber',
    tier: 'Platinum',
    earnedDate: 'Aug 2024'
  },
  taxScholar: {
    id: 'badge-tax-scholar',
    name: 'Income Tax 2023 Scholar',
    description: 'Completed e-TIN, salary deduction, and personal tax return modules',
    icon: 'FileCheck',
    color: 'emerald',
    tier: 'Gold',
    earnedDate: 'Jul 2024'
  },
  vatPro: {
    id: 'badge-vat-pro',
    name: 'VAT Mushak Master',
    description: 'Successfully filed Mushak 9.1 return simulations with 100% accuracy',
    icon: 'ShieldCheck',
    color: 'cyan',
    tier: 'Gold',
    earnedDate: 'Aug 2024'
  },
  rjscAce: {
    id: 'badge-rjsc-ace',
    name: 'RJSC Compliance Ace',
    description: 'Mastered company incorporation documents and annual return filing',
    icon: 'Award',
    color: 'purple',
    tier: 'Gold',
    earnedDate: 'Jul 2024'
  },
  streakMaster: {
    id: 'badge-streak-master',
    name: '20+ Day Study Streak',
    description: 'Maintained consistent legal study streak for over 20 consecutive days',
    icon: 'Flame',
    color: 'rose',
    tier: 'Platinum',
    earnedDate: 'Aug 2024'
  },
  streakBronze: {
    id: 'badge-streak-bronze',
    name: '7-Day Study Streak',
    description: 'Maintained consecutive daily study streak for 7 days',
    icon: 'Flame',
    color: 'amber',
    tier: 'Bronze',
    earnedDate: 'Aug 2024'
  },
  quizWhiz: {
    id: 'badge-quiz-whiz',
    name: 'Perfect Quiz Accuracy',
    description: 'Scored 100% on 3 or more legal assessment quizzes',
    icon: 'Sparkles',
    color: 'amber',
    tier: 'Platinum',
    earnedDate: 'Aug 2024'
  },
  rapidSprint: {
    id: 'badge-rapid-sprint',
    name: 'Weekly Sprint Champion',
    description: 'Earned top score in the weekly academy drafting sprint challenge',
    icon: 'Zap',
    color: 'indigo',
    tier: 'Gold',
    earnedDate: 'Aug 2024'
  },
  jurisprudence: {
    id: 'badge-jurisprudence',
    name: 'Civil Procedure Scholar',
    description: 'Completed comprehensive CPC & High Court writ petition tracks',
    icon: 'BookOpen',
    color: 'blue',
    tier: 'Silver',
    earnedDate: 'Jun 2024'
  },
  apprenticePioneer: {
    id: 'badge-apprentice-pioneer',
    name: 'Legal Apprentice Pioneer',
    description: 'Early adopter completed 15+ law chambers foundational modules',
    icon: 'GraduationCap',
    color: 'emerald',
    tier: 'Silver',
    earnedDate: 'May 2024'
  }
};

export const mockLeaderboardData: LeaderboardStudent[] = [
  {
    id: 'lead-1',
    rank: 1,
    name: 'Tanzina Chowdhury',
    title: 'Advocate, High Court Division',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 98.4,
    completedModules: 32,
    totalQuizzesTaken: 18,
    totalPoints: 4620,
    streakDays: 28,
    badge: 'Bar Council Rank 1',
    rankTrend: 'up',
    rankChange: 2,
    previousRank: 3,
    badges: [
      mockAchievementBadges.barDistinction,
      mockAchievementBadges.quizWhiz,
      mockAchievementBadges.streakMaster,
      mockAchievementBadges.jurisprudence
    ],
    track: 'Legal Training'
  },
  {
    id: 'lead-2',
    rank: 2,
    name: 'Sazzadul Karim',
    title: 'Income Tax Apprentice & ITP Aspirant',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 96.2,
    completedModules: 29,
    totalQuizzesTaken: 16,
    totalPoints: 4180,
    streakDays: 21,
    badge: 'NBR Tax Whiz',
    rankTrend: 'down',
    rankChange: -1,
    previousRank: 1,
    badges: [
      mockAchievementBadges.taxScholar,
      mockAchievementBadges.streakMaster,
      mockAchievementBadges.vatPro,
      mockAchievementBadges.rapidSprint
    ],
    track: 'Tax & VAT'
  },
  {
    id: 'lead-3',
    rank: 3,
    name: 'Nusrat Jahan Meem',
    title: 'Corporate Legal Associate, RJSC Desk',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 94.8,
    completedModules: 26,
    totalQuizzesTaken: 15,
    totalPoints: 3890,
    streakDays: 19,
    badge: 'RJSC Compliance Pro',
    rankTrend: 'up',
    rankChange: 1,
    previousRank: 4,
    badges: [
      mockAchievementBadges.rjscAce,
      mockAchievementBadges.rapidSprint,
      mockAchievementBadges.taxScholar,
      mockAchievementBadges.streakBronze
    ],
    track: 'Corporate Compliance'
  },
  {
    id: 'lead-4',
    rank: 4,
    name: 'Advocate Md. Rahman',
    title: 'Dhaka Bar Member & VAT Practitioner',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 91.5,
    completedModules: 23,
    totalQuizzesTaken: 14,
    totalPoints: 3450,
    streakDays: 14,
    badge: 'VAT Mushak Star',
    rankTrend: 'up',
    rankChange: 3,
    previousRank: 7,
    badges: [
      mockAchievementBadges.vatPro,
      mockAchievementBadges.taxScholar,
      mockAchievementBadges.streakBronze,
      mockAchievementBadges.apprenticePioneer
    ],
    track: 'Tax & VAT',
    isCurrentUser: true
  },
  {
    id: 'lead-5',
    rank: 5,
    name: 'Kamrul Ahsan',
    title: 'Assistant Company Secretary',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 89.6,
    completedModules: 21,
    totalQuizzesTaken: 12,
    totalPoints: 3120,
    streakDays: 11,
    badge: 'Secretarial Ace',
    rankTrend: 'down',
    rankChange: -2,
    previousRank: 3,
    badges: [
      mockAchievementBadges.rjscAce,
      mockAchievementBadges.streakBronze,
      mockAchievementBadges.apprenticePioneer
    ],
    track: 'Corporate Compliance'
  },
  {
    id: 'lead-6',
    rank: 6,
    name: 'Sabrina Mostafa',
    title: 'LL.B (Hons), Dhaka University',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 88.0,
    completedModules: 19,
    totalQuizzesTaken: 11,
    totalPoints: 2850,
    streakDays: 9,
    badge: 'Drafting Scholar',
    rankTrend: 'same',
    rankChange: 0,
    previousRank: 6,
    badges: [
      mockAchievementBadges.jurisprudence,
      mockAchievementBadges.streakBronze,
      mockAchievementBadges.apprenticePioneer
    ],
    track: 'Legal Training'
  },
  {
    id: 'lead-7',
    rank: 7,
    name: 'Fahim Faisal',
    title: 'Tax & Accounts Executive',
    avatarUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 86.4,
    completedModules: 18,
    totalQuizzesTaken: 10,
    totalPoints: 2610,
    streakDays: 7,
    badge: 'e-Return Expert',
    rankTrend: 'up',
    rankChange: 1,
    previousRank: 8,
    badges: [
      mockAchievementBadges.taxScholar,
      mockAchievementBadges.streakBronze
    ],
    track: 'Tax & VAT'
  },
  {
    id: 'lead-8',
    rank: 8,
    name: 'Zobaer Hossain',
    title: 'Apprentice Lawyer, Chittagong Bar',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    averageQuizScore: 85.0,
    completedModules: 16,
    totalQuizzesTaken: 9,
    totalPoints: 2390,
    streakDays: 6,
    badge: 'CPC Scholar',
    rankTrend: 'down',
    rankChange: -3,
    previousRank: 5,
    badges: [
      mockAchievementBadges.jurisprudence,
      mockAchievementBadges.apprenticePioneer
    ],
    track: 'Legal Training'
  }
];


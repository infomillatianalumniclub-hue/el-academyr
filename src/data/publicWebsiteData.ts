import { CourseCategory } from '../types';

export interface CategoryDetail {
  id: string;
  category: CourseCategory;
  title: string;
  iconName: string;
  shortDescription: string;
  courseCount: number;
  badgeText: string;
  subcourses: {
    title: string;
    description: string;
  }[];
}

export const categoryDetails: CategoryDetail[] = [
  {
    id: 'cat-legal',
    category: 'Legal Training',
    title: 'Legal Training',
    iconName: 'Scale',
    shortDescription: 'Build practical legal knowledge and professional advocacy skills.',
    courseCount: 14,
    badgeText: 'Bar & High Court',
    subcourses: [
      {
        title: 'Bar Council Preparation',
        description: 'Exam preparation, Practice materials, Mock tests'
      },
      {
        title: 'High Court Preparation',
        description: 'Advanced legal practice, Case analysis, Court procedure'
      },
      {
        title: 'Legal Drafting',
        description: 'Legal document writing, Agreement preparation, Professional templates'
      },
      {
        title: 'Corporate Law Practice',
        description: 'Company law, Compliance, Corporate advisory'
      }
    ]
  },
  {
    id: 'cat-tax-vat',
    category: 'Tax & VAT',
    title: 'Tax & VAT',
    iconName: 'Calculator',
    shortDescription: 'Master Bangladesh tax systems and compliance procedures.',
    courseCount: 18,
    badgeText: 'NBR e-Return & Mushak',
    subcourses: [
      {
        title: 'Income Tax Training',
        description: 'Income tax basics, Return filing, Tax calculation, Practical cases'
      },
      {
        title: 'VAT Compliance',
        description: 'VAT registration, VAT return, Mushak forms, Compliance process'
      },
      {
        title: 'e-Return Filing',
        description: 'Online return submission, Digital tax systems'
      },
      {
        title: 'NBR Practice',
        description: 'NBR procedures, Professional practices'
      }
    ]
  },
  {
    id: 'cat-corporate',
    category: 'Corporate Compliance',
    title: 'Corporate Compliance',
    iconName: 'Building2',
    shortDescription: 'Learn company management and regulatory compliance.',
    courseCount: 10,
    badgeText: 'RJSC & Board Governance',
    subcourses: [
      {
        title: 'RJSC Training',
        description: 'Company registration, Annual filing, Documentation'
      },
      {
        title: 'Company Formation',
        description: 'Incorporation process, Legal requirements'
      },
      {
        title: 'Annual Return Filing',
        description: 'RJSC compliance, Reporting process'
      }
    ]
  },
  {
    id: 'cat-accounting',
    category: 'Accounting',
    title: 'Accounting',
    iconName: 'BookOpen',
    shortDescription: 'Professional financial accounting, statutory reports and business ERP mastery.',
    courseCount: 12,
    badgeText: 'Financial Statements & ERP',
    subcourses: [
      {
        title: 'Practical Accounting',
        description: 'Accounting fundamentals, Real business cases'
      },
      {
        title: 'Financial Statement Analysis',
        description: 'Balance sheet, Profit & loss, Financial evaluation'
      },
      {
        title: 'ERP Training',
        description: 'ERP software, Business accounting systems'
      }
    ]
  },
  {
    id: 'cat-skills',
    category: 'Professional Skills',
    title: 'Professional Skills',
    iconName: 'Briefcase',
    shortDescription: 'Essential digital productivity and communication tools for modern professionals.',
    courseCount: 8,
    badgeText: 'Excel, Word & Negotiation',
    subcourses: [
      {
        title: 'MS Office',
        description: 'Word, PowerPoint, Excel'
      },
      {
        title: 'Excel Training',
        description: 'Advanced formulas, Reporting, Data analysis'
      },
      {
        title: 'Business Communication',
        description: 'Professional writing, Presentation skills'
      }
    ]
  }
];

export interface TextTestimonial {
  id: string;
  studentName: string;
  profession: string;
  organization: string;
  rating: number;
  comment: string;
  courseTaken: string;
  avatarUrl: string;
  verifiedStudent: boolean;
}

export interface VideoTestimonial {
  id: string;
  studentName: string;
  profession: string;
  courseTaken: string;
  thumbnailUrl: string;
  videoDuration: string;
  quote: string;
  videoUrl: string;
}

export const mockTextTestimonials: TextTestimonial[] = [
  {
    id: 't-1',
    studentName: 'Advocate Ashikur Rahman',
    profession: 'Supreme Court & NBR Tax Practitioner',
    organization: 'Rahman & Associates Law Chamber',
    rating: 5,
    comment: 'After completing the VAT course, I started handling professional VAT compliance work for three manufacturing companies in Gazipur. The Mushak 6.1 and 9.1 return filings were taught with live practical files.',
    courseTaken: 'Professional VAT Compliance Training',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    verifiedStudent: true
  },
  {
    id: 't-2',
    studentName: 'Nusrat Jahan, ACA',
    profession: 'Head of Internal Audit & Compliance',
    organization: 'Apex Trade Global Ltd',
    rating: 5,
    comment: 'The Income Tax Act 2023 module completely clarified the new Section 163 minimum tax rules and e-Return filing workflows. Instructors are practicing Supreme Court advocates who break down real cases.',
    courseTaken: 'Income Tax Course & e-Return Filing',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    verifiedStudent: true
  },
  {
    id: 't-3',
    studentName: 'Barrister Salman F. Chowdhury',
    profession: 'Corporate Associate',
    organization: 'Apex Legal Chambers Dhaka',
    rating: 5,
    comment: 'Cleared my High Court Permission Exam on my first attempt thanks to the Article 102 Writ drafting masterclass and courtroom oral advocacy guidance from Advocate Shahadat Hossain.',
    courseTaken: 'High Court Preparation & Enrolment',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    verifiedStudent: true
  },
  {
    id: 't-4',
    studentName: 'Farhana Kabir',
    profession: 'Company Secretary & RJSC Consultant',
    organization: 'Corporate Advisory Group BD',
    rating: 5,
    comment: 'RJSC digital filings, name clearance, and annual returns used to be confusing. The step-by-step screen recordings saved our team hours of consulting fees. Highly recommended!',
    courseTaken: 'RJSC Training Program & Company Formation',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    verifiedStudent: true
  }
];

export const mockVideoTestimonials: VideoTestimonial[] = [
  {
    id: 'vt-1',
    studentName: 'Tariqul Islam',
    profession: 'Tax & VAT Consultant',
    courseTaken: 'Professional VAT Compliance Training',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80',
    videoDuration: '3:45 min',
    quote: 'How I built a ৳1,50,000/month VAT consultancy practice after finishing the VAT Academy course.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'vt-2',
    studentName: 'Advocate Sadia Afrin',
    profession: 'Bar Council Enrolled Advocate',
    courseTaken: 'Bar Council Preparation Masterclass',
    thumbnailUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80',
    videoDuration: '2:50 min',
    quote: 'Scored 82/100 in Bar Council MCQ Exam. The mock test series and legal drafting modules were game-changers.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'vt-3',
    studentName: 'Kazi Mahbub Alam',
    profession: 'Chief Financial Officer',
    courseTaken: 'Income Tax Act 2023 & Practical Accounting',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80',
    videoDuration: '4:10 min',
    quote: 'Transitioned our group of companies to the new Income Tax Act 2023 with zero audit notices.',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Enrollment' | 'Learning' | 'Certificates' | 'Payment';
}

export const mockFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I enroll in a course?',
    answer: 'Enrolling is simple and instant. Click the "Enroll Now" button on any course page. Choose your preferred instant payment method (bKash, Nagad, Rocket, or Visa/MasterCard). Once payment is confirmed, your course access is unlocked immediately in your Student Portal.',
    category: 'Enrollment'
  },
  {
    id: 'faq-2',
    question: 'Can I watch courses from mobile?',
    answer: 'Yes, absolutely! E-Lawyers Academy is 100% mobile responsive. You can stream HD video lessons, read PDF law materials, take chapter quizzes, and download templates from your smartphone, tablet, or laptop anytime.',
    category: 'Learning'
  },
  {
    id: 'faq-3',
    question: 'Do I receive certificates?',
    answer: 'Yes! Upon finishing 100% of the lessons and passing the module quizzes, you receive an official, tamper-proof Certificate of Completion. Each certificate features a unique QR code that can be scanned by employers or chambers to verify authenticity online.',
    category: 'Certificates'
  },
  {
    id: 'faq-4',
    question: 'Are live classes included?',
    answer: 'Yes, courses marked with "Live Classes" include interactive weekly weekend live Zoom/Meet sessions with our instructors. You can ask direct questions, discuss real client scenarios, and review live screen recordings if you miss a session.',
    category: 'Learning'
  },
  {
    id: 'faq-5',
    question: 'What payment methods are supported in Bangladesh?',
    answer: 'We support all major local Bangladeshi payment gateways including bKash (App & USSD), Nagad, Rocket, Upay, as well as Visa, MasterCard, and direct Internet Banking via SSLCommerz.',
    category: 'Payment'
  },
  {
    id: 'faq-6',
    question: 'Do I get lifetime access to the materials?',
    answer: 'Yes, all enrollments provide lifetime access to recorded video lectures, practical Excel templates, legal draft Word files, and future updates when national budgets or tax acts are amended.',
    category: 'Learning'
  }
];

export interface BlogPost {
  id: string;
  title: string;
  category: 'Legal Articles' | 'Tax Updates' | 'VAT Guidelines' | 'Accounting Tips' | 'Career Advice';
  excerpt: string;
  author: string;
  authorRole: string;
  readTime: string;
  publishDate: string;
  thumbnailUrl: string;
  tags: string[];
}

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Key VAT & SD Act Amendments in Finance Act 2024: Practical Impact',
    category: 'VAT Guidelines',
    excerpt: 'Detailed analysis of updated VDS withholding rates, input tax rebate deadlines, and Mushak 6.3 invoice rules for corporate suppliers.',
    author: 'Advocate XYZ',
    authorRole: 'Senior Tax Consultant',
    readTime: '6 min read',
    publishDate: 'September 2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    tags: ['VAT 2024', 'Mushak 6.3', 'VDS']
  },
  {
    id: 'b-2',
    title: 'How to File Individual e-Return Online under Income Tax Act 2023',
    category: 'Tax Updates',
    excerpt: 'Step-by-step pictorial guide to submitting your annual tax return on the NBR taxportal with salary rebates and wealth statement IT-10B.',
    author: 'Advocate Md. Ruhul Amin',
    authorRole: 'Supreme Court Advocate',
    readTime: '8 min read',
    publishDate: 'August 2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    tags: ['Income Tax', 'e-Return', 'NBR']
  },
  {
    id: 'b-3',
    title: 'How to Clear the Bangladesh Bar Council MCQ Exam on First Attempt',
    category: 'Legal Articles',
    excerpt: 'Strategic preparation roadmap for CPC, CrPC, Penal Code, Evidence Act, and Specific Relief Act with recommended mock schedules.',
    author: 'Advocate Shahadat Hossain',
    authorRole: 'Bar Council Mentor',
    readTime: '10 min read',
    publishDate: 'August 2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    tags: ['Bar Council', 'MCQ Prep', 'Law Student']
  },
  {
    id: 'b-4',
    title: 'RJSC Company Incorporation Checklist: From Name Clearance to Digital Certificate',
    category: 'Career Advice',
    excerpt: 'The exact documents, fees, and procedures required to incorporate a Private Limited Company in Bangladesh without broker delays.',
    author: 'Barrister Farhana Zaman',
    authorRole: 'Corporate Specialist',
    readTime: '7 min read',
    publishDate: 'July 2024',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    tags: ['RJSC', 'Company Registration', 'Corporate Law']
  }
];

export interface WhyChoosePoint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  statBadge: string;
}

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    id: 'wc-1',
    title: 'Expert Instructors',
    subtitle: 'Learn from experienced professionals',
    description: 'Learn directly from Supreme Court advocates, NBR tax consultants, and Chartered Accountants who actively practice what they teach in courtroom and boardrooms.',
    iconName: 'UserCheck',
    statBadge: '50+ Mentors'
  },
  {
    id: 'wc-2',
    title: 'Practical Learning',
    subtitle: 'Real-world examples and case studies',
    description: 'No purely theoretical lectures. Work directly with real Mushak 6.1 registers, RJSC MOA templates, High Court writ drafts, and live tax portal simulations.',
    iconName: 'CheckCircle2',
    statBadge: '100% Practical'
  },
  {
    id: 'wc-3',
    title: 'Certified Courses',
    subtitle: 'Receive professional certificates',
    description: 'Earn tamper-proof, QR-verified digital credentials recognized by law chambers, corporate multinational employers, and accounting firms across Bangladesh.',
    iconName: 'Award',
    statBadge: 'QR Verified'
  },
  {
    id: 'wc-4',
    title: 'Flexible Learning',
    subtitle: 'Learn anytime from anywhere',
    description: 'Designed for busy advocates, corporate executives, and law students. Learn at your own pace with 24/7 mobile, tablet, and desktop cloud streaming.',
    iconName: 'Clock',
    statBadge: 'Lifetime Access'
  },
  {
    id: 'wc-5',
    title: 'Career Growth',
    subtitle: 'Develop professional skills',
    description: 'Bridge the gap between theoretical academic degrees and high-paying professional practice. Start taking paid client files immediately upon graduation.',
    iconName: 'TrendingUp',
    statBadge: 'Career Accelerated'
  }
];

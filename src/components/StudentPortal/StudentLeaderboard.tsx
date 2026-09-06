import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Flame, 
  CheckCircle, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  HelpCircle,
  GraduationCap,
  BookOpen,
  Filter,
  UserCheck,
  Scale,
  FileCheck,
  ShieldCheck,
  Zap,
  Info,
  X,
  ArrowUp,
  ArrowDown,
  Minus,
  TrendingUp,
  TrendingDown,
  Share2,
  Linkedin,
  Facebook,
  Copy,
  Check,
  ExternalLink,
  Swords
} from 'lucide-react';
import { LeaderboardStudent, AchievementBadge } from '../../types';

interface StudentLeaderboardProps {
  students?: LeaderboardStudent[];
  currentStudentName?: string;
  onTakeQuizClick?: () => void;
  onViewCourseModules?: () => void;
}

export const StudentLeaderboard: React.FC<StudentLeaderboardProps> = ({
  students = [],
  currentStudentName = 'Advocate Md. Rahman',
  onTakeQuizClick,
  onViewCourseModules,
}) => {
  const [timeframe, setTimeframe] = useState<'All-Time' | 'This Month' | 'Weekly Sprint'>('All-Time');
  const [selectedTrack, setSelectedTrack] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedBadgeModal, setSelectedBadgeModal] = useState<AchievementBadge | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [selectedStudentForShare, setSelectedStudentForShare] = useState<LeaderboardStudent | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [copiedDraft, setCopiedDraft] = useState<boolean>(false);
  const [shareNotice, setShareNotice] = useState<string | null>(null);

  // Challenge Student State & Logic
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState<boolean>(false);
  const [selectedStudentForChallenge, setSelectedStudentForChallenge] = useState<LeaderboardStudent | null>(null);
  const [challengeTopic, setChallengeTopic] = useState<string>('Bangladesh Income Tax Act 2023 - Advanced Deductions');
  const [challengeStep, setChallengeStep] = useState<'setup' | 'simulating' | 'result'>('setup');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userDuelScore, setUserDuelScore] = useState<number>(0);
  const [opponentDuelScore, setOpponentDuelScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  const duelQuestions = [
    {
      id: 1,
      question: "Under the Income Tax Act 2023, what is the standard corporate tax rate for non-listed private limited companies in Bangladesh?",
      options: ["20.0%", "22.5%", "27.5%", "30.0%"],
      correctIndex: 2,
      explanation: "Private limited companies not listed in the stock exchange are subject to a corporate tax rate of 27.5% under the Income Tax Act 2023."
    },
    {
      id: 2,
      question: "Which section of the VAT & SD Act 2012 governs zero-rated supplies for export and international transport?",
      options: ["Section 18", "Section 20", "Section 21", "Section 25"],
      correctIndex: 2,
      explanation: "Section 21 of the VAT & SD Act 2012 defines zero-rated supplies, applying 0% VAT to export goods and qualifying services."
    },
    {
      id: 3,
      question: "According to the Bangladesh Bar Council and Supreme Court Rules, what is the mandatory chamber apprenticeship duration for advocates?",
      options: ["3 months", "6 months", "1 year", "2 years"],
      correctIndex: 2,
      explanation: "Advocate aspirants must complete a 1-year Senior Chamber Apprenticeship under a senior practitioner before full enrollment."
    }
  ];

  const handleOpenChallenge = (student: LeaderboardStudent) => {
    setSelectedStudentForChallenge(student);
    setChallengeStep('setup');
    setCurrentQuestionIndex(0);
    setUserDuelScore(0);
    setOpponentDuelScore(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsChallengeModalOpen(true);
  };

  const handleStartDuel = () => {
    setChallengeStep('simulating');
    setCurrentQuestionIndex(0);
    setUserDuelScore(0);
    setOpponentDuelScore(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
  };

  const handleAnswerSubmit = (optionIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(optionIndex);
    setIsAnswerSubmitted(true);

    const q = duelQuestions[currentQuestionIndex];
    const userCorrect = optionIndex === q.correctIndex;
    const opponentCorrect = Math.random() < 0.75;

    let newU = userDuelScore;
    let newO = opponentDuelScore;
    if (userCorrect) newU += 100;
    if (opponentCorrect) newO += 100;

    setUserDuelScore(newU);
    setOpponentDuelScore(newO);

    setTimeout(() => {
      if (currentQuestionIndex + 1 < duelQuestions.length) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsAnswerSubmitted(false);
      } else {
        setChallengeStep('result');
      }
    }, 2000);
  };

  // Helper to render badge icon by name
  const renderBadgeIcon = (iconName: string, className = "w-3.5 h-3.5") => {
    switch (iconName) {
      case 'Scale': return <Scale className={className} />;
      case 'FileCheck': return <FileCheck className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Trophy': default: return <Trophy className={className} />;
    }
  };

  // Helper for badge color styling
  const getBadgeColorStyles = (color: string) => {
    switch (color) {
      case 'amber':
        return 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200';
      case 'emerald':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200';
      case 'cyan':
        return 'bg-cyan-100 text-cyan-800 border-cyan-300 hover:bg-cyan-200';
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200';
      case 'rose':
        return 'bg-rose-100 text-rose-800 border-rose-300 hover:bg-rose-200';
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200';
      case 'indigo':
      default:
        return 'bg-indigo-100 text-indigo-800 border-indigo-300 hover:bg-indigo-200';
    }
  };

  const getTierBadgeStyle = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'bg-slate-900 text-cyan-300 border-cyan-400/40';
      case 'Gold':
        return 'bg-amber-500 text-slate-950 font-black border-amber-300';
      case 'Silver':
        return 'bg-slate-200 text-slate-800 font-bold border-slate-300';
      case 'Bronze':
      default:
        return 'bg-amber-800/20 text-amber-900 font-bold border-amber-800/30';
    }
  };

  // Helper for rendering the rank change Trend Indicator
  const renderTrendIndicator = (st: LeaderboardStudent) => {
    const trend = st.rankTrend || 'same';
    const change = st.rankChange ?? 0;
    const prevRank = st.previousRank;

    if (trend === 'up') {
      const changeAbs = Math.abs(change) || 1;
      const tooltip = `Moved up ${changeAbs} ${changeAbs === 1 ? 'rank' : 'ranks'} since last login${prevRank ? ` (was #${prevRank})` : ''}`;
      return (
        <div 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs group cursor-default transition-all hover:bg-emerald-100/70"
          title={tooltip}
        >
          <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <ArrowUp className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span className="font-extrabold tracking-tight">+{changeAbs}</span>
          <span className="text-[10px] font-bold text-emerald-600 uppercase hidden lg:inline">Up</span>
        </div>
      );
    }

    if (trend === 'down') {
      const changeAbs = Math.abs(change) || 1;
      const tooltip = `Moved down ${changeAbs} ${changeAbs === 1 ? 'rank' : 'ranks'} since last login${prevRank ? ` (was #${prevRank})` : ''}`;
      return (
        <div 
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-rose-50 text-rose-700 border border-rose-200 shadow-2xs group cursor-default transition-all hover:bg-rose-100/70"
          title={tooltip}
        >
          <div className="w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
            <ArrowDown className="w-2.5 h-2.5 stroke-[3]" />
          </div>
          <span className="font-extrabold tracking-tight">-{changeAbs}</span>
          <span className="text-[10px] font-bold text-rose-600 uppercase hidden lg:inline">Down</span>
        </div>
      );
    }

    return (
      <div 
        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-500 border border-slate-200/80 cursor-default"
        title="Rank unchanged since last login"
      >
        <Minus className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
        <span className="text-[11px] font-medium">No change</span>
      </div>
    );
  };

  const renderCompactTrendBadge = (st: LeaderboardStudent) => {
    const trend = st.rankTrend || 'same';
    const change = st.rankChange ?? 0;
    const prevRank = st.previousRank;

    if (trend === 'up') {
      const changeAbs = Math.abs(change) || 1;
      return (
        <span 
          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs"
          title={`Moved up ${changeAbs} rank(s) since last login${prevRank ? ` (was #${prevRank})` : ''}`}
        >
          <ArrowUp className="w-3 h-3 text-emerald-700 stroke-[2.5]" />
          <span>+{changeAbs}</span>
        </span>
      );
    }

    if (trend === 'down') {
      const changeAbs = Math.abs(change) || 1;
      return (
        <span 
          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 text-rose-800 border border-rose-300 shadow-2xs"
          title={`Moved down ${changeAbs} rank(s) since last login${prevRank ? ` (was #${prevRank})` : ''}`}
        >
          <ArrowDown className="w-3 h-3 text-rose-700 stroke-[2.5]" />
          <span>-{changeAbs}</span>
        </span>
      );
    }

    return (
      <span 
        className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200"
        title="Rank unchanged since last login"
      >
        <Minus className="w-2.5 h-2.5 text-slate-400 stroke-[2.5]" />
        <span>0</span>
      </span>
    );
  };

  // Filter students
  const safeStudents = students || [];
  const filteredStudents = safeStudents.filter((st) => {
    if (!st) return false;
    const matchesTrack = selectedTrack === 'All' || st.track === selectedTrack;
    const q = (searchQuery || '').toLowerCase().trim();
    const name = (st.name || '').toLowerCase();
    const title = (st.title || '').toLowerCase();
    const badge = (st.badge || '').toLowerCase();
    const matchesSearch = !q || name.includes(q) || title.includes(q) || badge.includes(q);
    return matchesTrack && matchesSearch;
  });

  const top3 = safeStudents.slice(0, 3);
  const currentUser = safeStudents.find((s) => s.isCurrentUser) || 
                      safeStudents.find((s) => s.name === currentStudentName || (s.name && s.name.toLowerCase().includes('rahman'))) || 
                      safeStudents[3] || 
                      safeStudents[0];

  const activeShareStudent = selectedStudentForShare || currentUser || safeStudents[0];

  const handleOpenShare = (student?: LeaderboardStudent) => {
    setSelectedStudentForShare(student || currentUser || safeStudents[0] || null);
    setIsShareModalOpen(true);
    setCopiedLink(false);
    setCopiedDraft(false);
    setShareNotice(null);
  };

  const getShareDetails = (student: LeaderboardStudent | null) => {
    if (!student) {
      return {
        id: 'lead-4',
        rank: 4,
        name: currentStudentName || 'Advocate Md. Rahman',
        title: 'Supreme Court Chamber & Tax Apprentice',
        track: 'Tax & VAT',
        points: '14,850',
        accuracy: 94,
        modules: 24,
        streakDays: 14,
        badges: [],
        shareUrl: 'https://e-lawyers.academy/verify/rank/lead-4',
        linkedInUrl: '',
        facebookUrl: '',
        postCaption: '',
      };
    }

    const rank = student.rank;
    const name = student.name;
    const title = student.title;
    const track = student.track;
    const points = student.totalPoints.toLocaleString();
    const accuracy = student.averageQuizScore;
    const modules = student.completedModules;
    const streakDays = student.streakDays || 14;
    const badges = student.badges || [];
    const badgesCount = badges.length;
    const badgesList = badges.map((b) => `🎖️ ${b.name} (${b.tier} Tier)`).join(', ');
    const shareUrl = `https://e-lawyers.academy/verify/rank/${student.id}?student=${encodeURIComponent(name)}&rank=${rank}&track=${encodeURIComponent(track)}`;

    const postCaption = `🎓 Proud to share my verified academic ranking on the E-Lawyers Academy Bangladesh Leaderboard!\n\n🏆 Current Standing: Rank #${rank} across Bangladesh Legal & Tax Practice Practitioners\n⭐ Merit Score: ${points} XP (${accuracy}% Quiz Accuracy across ${modules} Specialized Modules)\n🏅 Verified Badges (${badgesCount}): ${badgesList || 'Tax Scholar, VAT Specialist, Bar Exam Pioneer'}\n\nDedicated to statutory excellence in the Bangladesh Income Tax Act 2023, VAT & SD Act 2012, and Corporate Governance.\n\nVerify credential: ${shareUrl}\n\n#ELawyersAcademy #BangladeshLaw #TaxLawyer #Advocate #SupremeCourt #LegalExcellence`;

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(`🎓 Honored to be ranked #${rank} on the E-Lawyers Academy Bangladesh Leaderboard with ${points} XP and ${badgesCount} achievement badges in ${track}!`)}`;

    return {
      id: student.id,
      rank,
      name,
      title,
      track,
      points,
      accuracy,
      modules,
      streakDays,
      badges,
      shareUrl,
      linkedInUrl,
      facebookUrl,
      postCaption
    };
  };

  const handleShareLinkedIn = () => {
    const data = getShareDetails(activeShareStudent);
    if (!data) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(data.postCaption).catch(() => {});
    }
    setShareNotice('LinkedIn share opened! Professional post draft copied to your clipboard.');
    setTimeout(() => setShareNotice(null), 5000);

    const width = 640;
    const height = 650;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      data.linkedInUrl,
      'linkedin-share-dialog',
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  const handleShareFacebook = () => {
    const data = getShareDetails(activeShareStudent);
    if (!data) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(data.postCaption).catch(() => {});
    }
    setShareNotice('Facebook share opened!');
    setTimeout(() => setShareNotice(null), 5000);

    const width = 640;
    const height = 650;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      data.facebookUrl,
      'facebook-share-dialog',
      `width=${width},height=${height},top=${top},left=${left},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  const handleCopyLink = () => {
    const data = getShareDetails(activeShareStudent);
    if (navigator.clipboard && data) {
      navigator.clipboard.writeText(data.shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }).catch(() => {});
    }
  };

  const handleCopyCaption = () => {
    const data = getShareDetails(activeShareStudent);
    if (navigator.clipboard && data) {
      navigator.clipboard.writeText(data.postCaption).then(() => {
        setCopiedDraft(true);
        setTimeout(() => setCopiedDraft(false), 2500);
      }).catch(() => {});
    }
  };

  const handleNativeShare = async () => {
    const data = getShareDetails(activeShareStudent);
    if (!data) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.name} - Rank #${data.rank} | E-Lawyers Academy`,
          text: `Rank #${data.rank} on the E-Lawyers Academy Bangladesh Leaderboard with ${data.points} XP and ${data.badges.length} achievement badges!`,
          url: data.shareUrl,
        });
      } catch (err) {
        // User dismiss
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Bento Header Spotlight */}
      <div className="bg-indigo-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-700 shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/30 text-indigo-200 text-[10px] font-bold rounded-full uppercase tracking-wider border border-indigo-400/30">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Merit & Competency Rankings</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
              Student Leaderboard
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
              Recognizing high-achieving Advocates, Tax Apprentices, and Corporate Law Practitioners based on verified quiz accuracy and completed course modules.
            </p>
          </div>

          {/* Current User Standing Badge */}
          {currentUser && (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 flex flex-col gap-4 text-left shrink-0 max-w-xl shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center shadow-lg shadow-amber-400/20 shrink-0">
                    #{currentUser.rank}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] text-indigo-200 uppercase tracking-wider font-semibold">Your Standing</p>
                      {currentUser.rankTrend && (
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black ${
                          currentUser.rankTrend === 'up'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                            : currentUser.rankTrend === 'down'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
                            : 'bg-white/10 text-slate-300 border border-white/20'
                        }`}>
                          {currentUser.rankTrend === 'up' && <ArrowUp className="w-2.5 h-2.5 text-emerald-300 stroke-[3]" />}
                          {currentUser.rankTrend === 'down' && <ArrowDown className="w-2.5 h-2.5 text-rose-300 stroke-[3]" />}
                          {currentUser.rankTrend === 'same' && <Minus className="w-2.5 h-2.5 text-slate-300 stroke-[3]" />}
                          <span>
                            {currentUser.rankTrend === 'up' ? `+${currentUser.rankChange}` : currentUser.rankTrend === 'down' ? `${currentUser.rankChange}` : '0'} rank change
                          </span>
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-extrabold text-white">{currentUser.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-amber-300 font-bold mt-1">
                      <span>{currentUser.averageQuizScore}% Quiz Avg</span>
                      <span>•</span>
                      <span>{currentUser.completedModules} Modules</span>
                      <span>•</span>
                      <span>{currentUser.totalPoints.toLocaleString()} XP</span>
                    </div>
                  </div>
                </div>

                {/* Current User's Earned Achievement Badges */}
                {currentUser.badges && currentUser.badges.length > 0 && (
                  <div className="sm:border-l sm:border-white/20 sm:pl-4 pt-2 sm:pt-0 w-full sm:w-auto">
                    <span className="text-[9px] font-bold text-indigo-200 uppercase tracking-wider block mb-1.5">
                      Earned Badges ({currentUser.badges.length})
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {currentUser.badges.map((b) => (
                        <button
                          key={b.id}
                          onClick={() => setSelectedBadgeModal(b)}
                          title={`${b.name} (${b.tier} Tier) - Click to inspect`}
                          className={`w-7 h-7 rounded-xl flex items-center justify-center border shadow-sm transition-transform hover:scale-110 ${getBadgeColorStyles(b.color)}`}
                        >
                          {renderBadgeIcon(b.icon, "w-3.5 h-3.5")}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Share Rank Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-white/15">
                <div className="flex items-center gap-1.5 text-[11px] text-indigo-200 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>Broadcast rank & badges to LinkedIn or Facebook</span>
                </div>
                <button
                  id="share-rank-spotlight-button"
                  onClick={() => handleOpenShare(currentUser)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0 border border-amber-200/50"
                >
                  <Share2 className="w-4 h-4 text-slate-950 animate-pulse" />
                  <span>Share Rank</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Top 3 Podium Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        {/* Rank 2 - Silver */}
        {top3[1] && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center relative order-2 md:order-1 pt-8">
            <div className="absolute -top-4 w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-300 flex items-center justify-center font-black text-slate-700 text-xs shadow">
              2
            </div>
            <div className="relative mb-3">
              <img 
                src={top3[1].avatarUrl} 
                alt={top3[1].name} 
                className="w-16 h-16 rounded-full object-cover border-4 border-slate-200 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 p-1 bg-slate-700 text-white rounded-full">
                <Medal className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="flex items-center gap-1.5 mb-1 flex-wrap justify-center">
              <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                {top3[1].badge}
              </span>
              {renderCompactTrendBadge(top3[1])}
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm leading-tight">{top3[1].name}</h3>
            <p className="text-[11px] text-slate-500 mb-2">{top3[1].title}</p>
            
            {/* Top 2 Earned Badges Row */}
            {top3[1].badges && top3[1].badges.length > 0 && (
              <div className="flex items-center justify-center gap-1.5 mb-3 flex-wrap">
                {top3[1].badges.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBadgeModal(b)}
                    title={`${b.name} (${b.tier})`}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-transform hover:scale-110 ${getBadgeColorStyles(b.color)}`}
                  >
                    {renderBadgeIcon(b.icon, "w-3 h-3")}
                  </button>
                ))}
              </div>
            )}

            <div className="w-full grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 text-left">
              <div>
                <span className="text-[9px] font-bold uppercase text-slate-400 block">Quiz Accuracy</span>
                <span className="text-xs font-black text-indigo-700">{top3[1].averageQuizScore}%</span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-slate-400 block">Modules Done</span>
                <span className="text-xs font-black text-slate-800">{top3[1].completedModules} Modules</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between w-full text-xs font-extrabold text-indigo-600">
              <span className="text-[10px] text-slate-400">Total Score</span>
              <span>{top3[1].totalPoints.toLocaleString()} XP</span>
            </div>
          </div>
        )}

        {/* Rank 1 - Gold (Elevated Center) */}
        {top3[0] && (
          <div className="bg-gradient-to-b from-amber-500/10 via-white to-white rounded-3xl p-7 border-2 border-amber-400 shadow-xl flex flex-col items-center text-center relative order-1 md:order-2 md:-translate-y-2 pt-10">
            <div className="absolute -top-5 px-3 py-1 rounded-full bg-amber-400 border-2 border-amber-300 flex items-center gap-1 font-black text-slate-950 text-xs shadow-md">
              <Trophy className="w-3.5 h-3.5 fill-slate-950" />
              <span>Rank 1 • Champion</span>
            </div>
            <div className="relative mb-3">
              <img 
                src={top3[0].avatarUrl} 
                alt={top3[0].name} 
                className="w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-lg ring-4 ring-amber-400/20"
              />
              <span className="absolute -bottom-1.5 -right-1.5 p-1.5 bg-amber-500 text-slate-950 rounded-full shadow">
                <Trophy className="w-4 h-4 fill-slate-950" />
              </span>
            </div>
            <div className="flex items-center gap-1.5 mb-1 flex-wrap justify-center">
              <span className="text-[10px] font-black text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-200">
                {top3[0].badge}
              </span>
              {renderCompactTrendBadge(top3[0])}
            </div>
            <h3 className="font-extrabold text-slate-900 text-base leading-tight">{top3[0].name}</h3>
            <p className="text-xs text-slate-500 mb-2">{top3[0].title}</p>
            
            {/* Top 1 Earned Badges Row */}
            {top3[0].badges && top3[0].badges.length > 0 && (
              <div className="flex items-center justify-center gap-1.5 mb-3 flex-wrap">
                {top3[0].badges.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBadgeModal(b)}
                    title={`${b.name} (${b.tier})`}
                    className={`w-7 h-7 rounded-xl flex items-center justify-center border shadow-xs transition-transform hover:scale-110 ${getBadgeColorStyles(b.color)}`}
                  >
                    {renderBadgeIcon(b.icon, "w-3.5 h-3.5")}
                  </button>
                ))}
              </div>
            )}

            <div className="w-full grid grid-cols-2 gap-2 bg-amber-500/5 p-3 rounded-2xl border border-amber-200/60 text-left">
              <div>
                <span className="text-[9px] font-bold uppercase text-amber-900/60 block">Quiz Accuracy</span>
                <span className="text-sm font-black text-amber-800">{top3[0].averageQuizScore}%</span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-amber-900/60 block">Modules Done</span>
                <span className="text-sm font-black text-slate-900">{top3[0].completedModules} Modules</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between w-full text-sm font-black text-amber-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Total Mastery</span>
              <span className="text-base font-display">{top3[0].totalPoints.toLocaleString()} XP</span>
            </div>
          </div>
        )}

        {/* Rank 3 - Bronze */}
        {top3[2] && (
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center relative order-3 pt-8">
            <div className="absolute -top-4 w-8 h-8 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center font-black text-amber-800 text-xs shadow">
              3
            </div>
            <div className="relative mb-3">
              <img 
                src={top3[2].avatarUrl} 
                alt={top3[2].name} 
                className="w-16 h-16 rounded-full object-cover border-4 border-amber-200 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 p-1 bg-amber-600 text-white rounded-full">
                <Medal className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="flex items-center gap-1.5 mb-1 flex-wrap justify-center">
              <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                {top3[2].badge}
              </span>
              {renderCompactTrendBadge(top3[2])}
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm leading-tight">{top3[2].name}</h3>
            <p className="text-[11px] text-slate-500 mb-2">{top3[2].title}</p>
            
            {/* Top 3 Earned Badges Row */}
            {top3[2].badges && top3[2].badges.length > 0 && (
              <div className="flex items-center justify-center gap-1.5 mb-3 flex-wrap">
                {top3[2].badges.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBadgeModal(b)}
                    title={`${b.name} (${b.tier})`}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-transform hover:scale-110 ${getBadgeColorStyles(b.color)}`}
                  >
                    {renderBadgeIcon(b.icon, "w-3 h-3")}
                  </button>
                ))}
              </div>
            )}

            <div className="w-full grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-2xl border border-slate-100 text-left">
              <div>
                <span className="text-[9px] font-bold uppercase text-slate-400 block">Quiz Accuracy</span>
                <span className="text-xs font-black text-indigo-700">{top3[2].averageQuizScore}%</span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase text-slate-400 block">Modules Done</span>
                <span className="text-xs font-black text-slate-800">{top3[2].completedModules} Modules</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between w-full text-xs font-extrabold text-indigo-600">
              <span className="text-[10px] text-slate-400">Total Score</span>
              <span>{top3[2].totalPoints.toLocaleString()} XP</span>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Controls & Filters */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-100">
          {/* Timeframe Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl">
            {(['All-Time', 'This Month', 'Weekly Sprint'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  timeframe === t
                    ? 'bg-white text-indigo-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search student, bar, or designation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              Category Track:
            </span>
            {['All', 'Legal Training', 'Tax & VAT', 'Corporate Compliance'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTrack(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedTrack === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            id="share-rank-filters-button"
            onClick={() => handleOpenShare(currentUser)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black text-xs rounded-xl shadow-md shadow-amber-400/20 hover:shadow-amber-400/40 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shrink-0 self-start sm:self-auto border border-amber-200/60"
          >
            <Share2 className="w-4 h-4 text-slate-950" />
            <span>Share My Rank</span>
          </button>
        </div>
      </div>

      {/* Main Table / Roster */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 text-base">Top Performing Learners</h3>
            <p className="text-xs text-slate-500 mt-0.5">Calculated from verified quiz percentages, validated milestones, and session rank trends</p>
          </div>
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {filteredStudents.length} Students Ranked
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 text-[10px] font-black uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="py-3.5 px-6">Rank & Honors</th>
                <th className="py-3.5 px-4 text-center">Trend (Last Login)</th>
                <th className="py-3.5 px-6">Learner</th>
                <th className="py-3.5 px-6">Track</th>
                <th className="py-3.5 px-6">Earned Badges</th>
                <th className="py-3.5 px-6 text-center">Avg Quiz Score</th>
                <th className="py-3.5 px-6 text-center">Modules Done</th>
                <th className="py-3.5 px-6 text-center">Streak</th>
                <th className="py-3.5 px-6 text-right">Mastery Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredStudents.map((st) => {
                const isUser = st.isCurrentUser;
                const leadBadge = st.badges && st.badges.length > 0 ? st.badges[0] : null;

                return (
                  <tr 
                    key={st.id}
                    className={`transition-colors hover:bg-slate-50/80 ${
                      isUser ? 'bg-indigo-50/70 font-semibold border-l-4 border-indigo-600' : ''
                    }`}
                  >
                    {/* Rank & Primary Badge Icon */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {st.rank === 1 ? (
                          <span className="w-7 h-7 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm">
                            1
                          </span>
                        ) : st.rank === 2 ? (
                          <span className="w-7 h-7 rounded-xl bg-slate-300 text-slate-800 font-black flex items-center justify-center text-xs shadow-sm">
                            2
                          </span>
                        ) : st.rank === 3 ? (
                          <span className="w-7 h-7 rounded-xl bg-amber-200 text-amber-900 font-black flex items-center justify-center text-xs shadow-sm">
                            3
                          </span>
                        ) : (
                          <span className="w-7 text-slate-500 font-bold text-center">
                            #{st.rank}
                          </span>
                        )}

                        {/* Primary Badge Icon alongside rank */}
                        {leadBadge && (
                          <button
                            onClick={() => setSelectedBadgeModal(leadBadge)}
                            title={`Top Honor: ${leadBadge.name} (${leadBadge.tier}) - Click to inspect`}
                            className={`w-6 h-6 rounded-lg flex items-center justify-center border shadow-2xs transition-transform hover:scale-110 ${getBadgeColorStyles(leadBadge.color)}`}
                          >
                            {renderBadgeIcon(leadBadge.icon, "w-3 h-3")}
                          </button>
                        )}
                      </div>
                    </td>

                    {/* Trend Indicator Column */}
                    <td className="py-4 px-4 whitespace-nowrap text-center">
                      {renderTrendIndicator(st)}
                    </td>

                    {/* Learner Info */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <img 
                          src={st.avatarUrl} 
                          alt={st.name} 
                          className="w-9 h-9 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <div className="font-extrabold text-slate-900 flex items-center gap-1.5 flex-wrap">
                            <span>{st.name}</span>
                            {isUser && (
                              <>
                                <span className="px-1.5 py-0.5 bg-indigo-600 text-white text-[9px] font-black rounded uppercase tracking-wider">
                                  You
                                </span>
                                <button
                                  onClick={() => handleOpenShare(st)}
                                  title="Share your rank directly to LinkedIn or Facebook"
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gradient-to-r from-amber-100 to-amber-200 hover:from-amber-200 hover:to-amber-300 text-amber-950 text-[11px] font-black border border-amber-300/80 shadow-sm shadow-amber-200/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                  <Share2 className="w-3 h-3 text-amber-900" />
                                  <span>Share</span>
                                </button>
                              </>
                            )}
                            {!isUser && (
                              <button
                                onClick={() => handleOpenChallenge(st)}
                                title={`Challenge ${st.name} to a head-to-head quiz duel`}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[11px] font-bold border border-indigo-200/80 shadow-2xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ml-1.5"
                              >
                                <Swords className="w-3 h-3 text-indigo-600" />
                                <span>Challenge</span>
                              </button>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500">{st.title}</div>
                        </div>
                      </div>
                    </td>

                    {/* Track */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-bold border border-slate-200/60">
                        {st.track}
                      </span>
                    </td>

                    {/* Earned Achievement Badges with Icons */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 flex-wrap max-w-xs">
                        {st.badges && st.badges.length > 0 ? (
                          st.badges.map((b) => (
                            <button
                              key={b.id}
                              onClick={() => setSelectedBadgeModal(b)}
                              title={`${b.name} • ${b.tier} Tier • Click to inspect`}
                              className={`group flex items-center gap-1 px-2 py-1 rounded-xl border font-bold text-[10px] transition-all hover:scale-105 shadow-2xs ${getBadgeColorStyles(b.color)}`}
                            >
                              {renderBadgeIcon(b.icon, "w-3 h-3 shrink-0")}
                              <span className="truncate max-w-[80px] hidden sm:inline">{b.name}</span>
                            </button>
                          ))
                        ) : (
                          <span className="text-[11px] text-slate-400 italic">No badges earned</span>
                        )}
                      </div>
                    </td>

                    {/* Avg Quiz Score */}
                    <td className="py-4 px-6 whitespace-nowrap text-center">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50 text-emerald-800 font-bold border border-emerald-100">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{st.averageQuizScore}%</span>
                      </div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{st.totalQuizzesTaken} Quizzes Taken</div>
                    </td>

                    {/* Modules Completed */}
                    <td className="py-4 px-6 whitespace-nowrap text-center">
                      <div className="font-extrabold text-slate-900">{st.completedModules}</div>
                      <div className="text-[9px] text-slate-400">Modules Completed</div>
                    </td>

                    {/* Streak */}
                    <td className="py-4 px-6 whitespace-nowrap text-center">
                      <div className="inline-flex items-center gap-1 text-amber-700 font-bold">
                        <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span>{st.streakDays}d</span>
                      </div>
                    </td>

                    {/* Total Points */}
                    <td className="py-4 px-6 whitespace-nowrap text-right">
                      <span className="text-sm font-black text-indigo-600 font-display">
                        {st.totalPoints.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-400 ml-1 font-bold">XP</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bento Bottom Modules: Scoring Rules & Study Motivation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scoring Breakdown Bento Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-900">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-sm">How XP Points Are Calculated</h4>
          </div>
          <p className="text-xs text-slate-500">
            Your leaderboard ranking reflects consistent academic dedication across all academy courses.
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Course Module Completed</span>
              <span className="font-bold text-indigo-700">+100 XP</span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Quiz Score ≥ 90%</span>
              <span className="font-bold text-emerald-600">+150 XP</span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Quiz Score 75% - 89%</span>
              <span className="font-bold text-blue-600">+75 XP</span>
            </div>
            <div className="flex justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-600">Daily Study Streak</span>
              <span className="font-bold text-amber-700">+25 XP / Day</span>
            </div>
          </div>
        </div>

        {/* Climb the Ranks CTA Bento Card */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-wider block mb-1">
              Accelerate Your Rank
            </span>
            <h4 className="font-bold text-base mb-2">Want to Reach the Top 3 Podium?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Complete your pending Income Tax Act 2023 or VAT Mushak 9.1 quizzes to earn up to 450 bonus XP today!
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <button
              onClick={onTakeQuizClick}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Take Practical Law Quiz</span>
            </button>
            <button
              onClick={onViewCourseModules}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Resume Course Modules</span>
            </button>
          </div>
        </div>

        {/* Academic Recognition Bento Card */}
        <div className="bg-emerald-600 text-white rounded-3xl p-6 border border-emerald-500 shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className="z-10">
            <span className="bg-white/20 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Bar & NBR Honors
            </span>
            <h4 className="font-extrabold text-base mt-2">Annual Dean's Recognition</h4>
            <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
              Top 10 ranked learners receive priority recommendation letters for High Court internships and corporate legal desk placements.
            </p>
          </div>

          <div className="z-10 bg-emerald-700/60 p-3 rounded-2xl border border-emerald-400/30 text-xs flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-300 shrink-0" />
            <div>
              <span className="font-bold block">Verified Badge on Certificate</span>
              <span className="text-[10px] text-emerald-200">Automatically stamped on QR certificate</span>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl pointer-events-none"></div>
        </div>
      </div>

      {/* Achievement Badges Showcase Bento Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-600 font-extrabold text-xs mb-1">
              <Award className="w-4 h-4" />
              <span>Academy Achievement Badges & Honor Insignias</span>
            </div>
            <h3 className="text-base font-extrabold text-slate-900">
              Unlockable Legal & Tax Honors
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Badges are awarded automatically upon meeting verified academic criteria and appear on your public ranking profile and certificates.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-auto">
            Click any badge to inspect criteria
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              id: 'badge-bar-distinction',
              name: 'Bar Council Distinction',
              description: 'Achieved 95%+ in Bar Council mock trials and ethics assessments',
              icon: 'Scale',
              color: 'amber',
              tier: 'Platinum',
              category: 'Legal Training'
            },
            {
              id: 'badge-tax-scholar',
              name: 'Income Tax 2023 Scholar',
              description: 'Completed e-TIN, salary deduction, and personal tax return modules',
              icon: 'FileCheck',
              color: 'emerald',
              tier: 'Gold',
              category: 'Tax & VAT'
            },
            {
              id: 'badge-vat-pro',
              name: 'VAT Mushak Master',
              description: 'Successfully filed Mushak 9.1 return simulations with 100% accuracy',
              icon: 'ShieldCheck',
              color: 'cyan',
              tier: 'Gold',
              category: 'Tax & VAT'
            },
            {
              id: 'badge-rjsc-ace',
              name: 'RJSC Compliance Ace',
              description: 'Mastered company incorporation documents and annual return filing',
              icon: 'Award',
              color: 'purple',
              tier: 'Gold',
              category: 'Corporate Compliance'
            },
            {
              id: 'badge-quiz-whiz',
              name: 'Perfect Quiz Accuracy',
              description: 'Scored 100% on 3 or more legal assessment quizzes',
              icon: 'Sparkles',
              color: 'amber',
              tier: 'Platinum',
              category: 'Academic Merit'
            },
            {
              id: 'badge-streak-master',
              name: '20+ Day Study Streak',
              description: 'Maintained consistent legal study streak for over 20 consecutive days',
              icon: 'Flame',
              color: 'rose',
              tier: 'Platinum',
              category: 'Commitment'
            },
            {
              id: 'badge-rapid-sprint',
              name: 'Weekly Sprint Champion',
              description: 'Earned top score in the weekly academy drafting sprint challenge',
              icon: 'Zap',
              color: 'indigo',
              tier: 'Gold',
              category: 'Sprint Challenge'
            },
            {
              id: 'badge-jurisprudence',
              name: 'Civil Procedure Scholar',
              description: 'Completed comprehensive CPC & High Court writ petition tracks',
              icon: 'BookOpen',
              color: 'blue',
              tier: 'Silver',
              category: 'Jurisprudence'
            }
          ].map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedBadgeModal(item as unknown as AchievementBadge)}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${getBadgeColorStyles(item.color)}`}>
                  {renderBadgeIcon(item.icon, "w-5 h-5")}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${getTierBadgeStyle(item.tier)}`}>
                  {item.tier}
                </span>
              </div>

              <div>
                <h5 className="font-extrabold text-xs text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </h5>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-semibold">{item.category}</span>
                <span className="text-indigo-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  Details &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Badge Inspection Modal */}
      {selectedBadgeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl space-y-5 animate-in fade-in zoom-in duration-150">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3.5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-sm ${getBadgeColorStyles(selectedBadgeModal.color)}`}>
                  {renderBadgeIcon(selectedBadgeModal.icon, "w-7 h-7")}
                </div>
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getTierBadgeStyle(selectedBadgeModal.tier)}`}>
                    {selectedBadgeModal.tier} Tier Badge
                  </span>
                  <h3 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                    {selectedBadgeModal.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedBadgeModal(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Qualification Criteria
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {selectedBadgeModal.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold">Earned Term</span>
                <span className="font-extrabold text-slate-800">{selectedBadgeModal.earnedDate || 'Active Semester'}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 block font-bold">Verification</span>
                <span className="font-extrabold text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Academy Verified
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedBadgeModal(null)}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Share Rank & Achievement Badges Modal */}
      {isShareModalOpen && (
        <div 
          id="share-rank-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsShareModalOpen(false);
          }}
          className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 relative my-8 text-left animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-amber-400/20 shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
                    Share Academic Rank & Badges
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Broadcast your verified standing and honors directly to LinkedIn or Facebook
                  </p>
                </div>
              </div>
              <button
                id="close-share-rank-modal"
                onClick={() => setIsShareModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Notification alert banner */}
            {shareNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-800 animate-in fade-in">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{shareNotice}</span>
              </div>
            )}

            {/* Digital Credential Card Preview */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                <span>Shareable Credential Card Preview</span>
                <span className="text-indigo-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" /> Official Academy Certificate
                </span>
              </div>

              {/* Digital Badge Card */}
              <div className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 rounded-2xl p-5 sm:p-6 text-white border-2 border-amber-400/50 shadow-xl relative overflow-hidden space-y-4">
                {/* Background watermarks */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black tracking-wider uppercase text-amber-300 block leading-tight">
                        E-Lawyers Academy Bangladesh
                      </span>
                      <span className="text-[9px] text-slate-300 block leading-tight">
                        Verified Bar & Tax Practice Ledger
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-black rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                      <CheckCircle className="w-2.5 h-2.5 text-emerald-300" /> Verified Merit
                    </span>
                  </div>
                </div>

                {/* Card Spotlight: Rank & Learner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-indigo-200 font-bold">
                      National Academic Standing
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white">
                      {activeShareStudent?.name || currentStudentName}
                    </h4>
                    <p className="text-xs text-amber-300/90 font-medium">
                      {activeShareStudent?.title || 'Supreme Court Chamber & Tax Apprentice'}
                    </p>
                    <div className="inline-block mt-1">
                      <span className="px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-200 text-[10px] font-bold border border-indigo-400/30">
                        {activeShareStudent?.track || 'Tax & VAT'} Track
                      </span>
                    </div>
                  </div>

                  {/* Big Rank Box */}
                  <div className="flex flex-col items-center justify-center bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 rounded-2xl p-3 sm:p-4 min-w-[95px] shadow-lg shadow-amber-400/20 text-center shrink-0">
                    <Trophy className="w-5 h-5 fill-slate-950 mb-0.5" />
                    <span className="text-[9px] font-black uppercase tracking-wider">Rank</span>
                    <span className="text-2xl sm:text-3xl font-black leading-none">
                      #{activeShareStudent?.rank || 4}
                    </span>
                    <span className="text-[8px] font-extrabold mt-1 text-slate-900 bg-amber-300/80 px-1.5 py-0.5 rounded">
                      Top 5%
                    </span>
                  </div>
                </div>

                {/* 3 Metric Pills */}
                <div className="grid grid-cols-3 gap-2 py-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[9px] uppercase font-bold text-indigo-200 block">Mastery Score</span>
                    <span className="text-xs sm:text-sm font-black text-amber-300">
                      {activeShareStudent?.totalPoints.toLocaleString() || '14,850'} XP
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[9px] uppercase font-bold text-indigo-200 block">Quiz Accuracy</span>
                    <span className="text-xs sm:text-sm font-black text-white">
                      {activeShareStudent?.averageQuizScore || 94}%
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 text-center border border-white/10">
                    <span className="text-[9px] uppercase font-bold text-indigo-200 block">Modules Done</span>
                    <span className="text-xs sm:text-sm font-black text-white">
                      {activeShareStudent?.completedModules || 24}
                    </span>
                  </div>
                </div>

                {/* Earned Achievement Badges Row */}
                {activeShareStudent?.badges && activeShareStudent.badges.length > 0 && (
                  <div className="pt-2 border-t border-white/15">
                    <span className="text-[9px] font-bold text-indigo-200 uppercase tracking-wider block mb-1.5">
                      Earned Achievement Badges ({activeShareStudent.badges.length})
                    </span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {activeShareStudent.badges.map((b) => (
                        <div
                          key={b.id}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/15 border border-white/20 text-[10px] font-bold text-amber-200"
                        >
                          {renderBadgeIcon(b.icon, "w-3 h-3 text-amber-300")}
                          <span>{b.name}</span>
                          <span className="text-[8px] opacity-75">({b.tier})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Card Security Ledger Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] text-slate-400 font-mono">
                  <span>ID: ELA-RNK-2026-BD-{activeShareStudent?.rank || 4}</span>
                  <span>e-lawyers.academy/verify</span>
                </div>
              </div>
            </div>

            {/* Direct Social Media Sharing Buttons */}
            <div className="space-y-2.5 pt-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Direct Social Share
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Share to LinkedIn */}
                <button
                  id="share-to-linkedin-btn"
                  onClick={handleShareLinkedIn}
                  className="w-full py-3 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-extrabold text-xs flex items-center justify-center gap-2.5 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                  <span>Share on LinkedIn</span>
                </button>

                {/* Share to Facebook */}
                <button
                  id="share-to-facebook-btn"
                  onClick={handleShareFacebook}
                  className="w-full py-3 px-4 rounded-xl bg-[#1877F2] hover:bg-[#0c63d4] text-white font-extrabold text-xs flex items-center justify-center gap-2.5 shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Facebook className="w-4 h-4 fill-current" />
                  <span>Share on Facebook</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-500 text-center">
                Clicking opens the official share dialog. A recommended post draft will also be copied to your clipboard.
              </p>
            </div>

            {/* Quick Copy Link and Pre-written Caption */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                <button
                  id="copy-share-link-btn"
                  onClick={handleCopyLink}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    copiedLink
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verification Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Verification Link</span>
                    </>
                  )}
                </button>

                <button
                  id="copy-post-caption-btn"
                  onClick={handleCopyCaption}
                  className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    copiedDraft
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Post Caption Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Post Draft</span>
                    </>
                  )}
                </button>

                {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
                  <button
                    id="native-device-share-btn"
                    onClick={handleNativeShare}
                    className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    title="Share via device app picker"
                  >
                    <Share2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Device</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Challenge Quiz Duel Modal */}
      {isChallengeModalOpen && selectedStudentForChallenge && (
        <div 
          id="challenge-duel-modal-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) setIsChallengeModalOpen(false); }}
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 overflow-hidden relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30">
                  <Swords className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base">Head-to-Head Quiz Duel</h3>
                  <p className="text-xs text-slate-500">Rank #4 vs Rank #{selectedStudentForChallenge.rank} ({selectedStudentForChallenge.name})</p>
                </div>
              </div>
              <button
                id="close-challenge-modal"
                onClick={() => setIsChallengeModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step 1: Setup */}
            {challengeStep === 'setup' && (
              <div className="py-6 space-y-5">
                <div className="bg-gradient-to-r from-indigo-50 to-slate-50 rounded-2xl p-4 border border-indigo-100/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" 
                      alt="You" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-600"
                    />
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-600">Challenger</div>
                      <div className="font-black text-slate-900 text-sm">Advocate Md. Rahman</div>
                      <div className="text-xs text-slate-500">14,850 XP</div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center shadow-md text-xs shrink-0">
                    VS
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-amber-700">Opponent</div>
                      <div className="font-black text-slate-900 text-sm">{selectedStudentForChallenge.name}</div>
                      <div className="text-xs text-slate-500">{selectedStudentForChallenge.totalPoints} XP</div>
                    </div>
                    <img 
                      src={selectedStudentForChallenge.avatarUrl} 
                      alt={selectedStudentForChallenge.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 block">Select Legal / Tax Duel Topic</label>
                  <select 
                    value={challengeTopic}
                    onChange={(e) => setChallengeTopic(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Bangladesh Income Tax Act 2023 - Advanced Deductions">Bangladesh Income Tax Act 2023 - Advanced Deductions</option>
                    <option value="VAT & SD Act 2012 - Zero-Rated & Exempt Supplies">VAT & SD Act 2012 - Zero-Rated & Exempt Supplies</option>
                    <option value="Supreme Court & Bar Council Chamber Practice">Supreme Court & Bar Council Chamber Practice</option>
                  </select>
                </div>

                <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-200/60 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] text-amber-900">
                    <span className="font-bold">Duel Rules:</span> 3 rapid-fire multiple-choice questions. Winner earns <span className="font-bold">+150 XP</span> and bragging rights on the leaderboard!
                  </div>
                </div>

                <button
                  onClick={handleStartDuel}
                  className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-black text-xs rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Swords className="w-4 h-4 text-amber-300" />
                  <span>Start Head-to-Head Quiz Duel</span>
                </button>
              </div>
            )}

            {/* Step 2: Simulating Duel */}
            {challengeStep === 'simulating' && (
              <div className="py-6 space-y-5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <span>Question {currentQuestionIndex + 1} of {duelQuestions.length}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-black">You: {userDuelScore} pts</span>
                    <span>vs</span>
                    <span className="text-amber-700 font-black">{selectedStudentForChallenge.name}: {opponentDuelScore} pts</span>
                  </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-inner">
                  <div className="text-xs text-indigo-300 font-bold mb-1">{challengeTopic}</div>
                  <h4 className="font-bold text-sm leading-relaxed">{duelQuestions[currentQuestionIndex].question}</h4>
                </div>

                <div className="space-y-2.5">
                  {duelQuestions[currentQuestionIndex].options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === duelQuestions[currentQuestionIndex].correctIndex;
                    let btnStyle = "bg-white hover:bg-slate-50 border-slate-200 text-slate-800";
                    if (isAnswerSubmitted) {
                      if (isCorrect) btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-900 font-bold";
                      else if (isSelected && !isCorrect) btnStyle = "bg-rose-50 border-rose-500 text-rose-900";
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswerSubmitted}
                        onClick={() => handleAnswerSubmit(idx)}
                        className={`w-full p-3 rounded-xl border text-xs text-left font-semibold transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{option}</span>
                        {isAnswerSubmitted && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {isAnswerSubmitted && (
                  <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 animate-in fade-in">
                    <span className="font-bold">Explanation:</span> {duelQuestions[currentQuestionIndex].explanation}
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Result */}
            {challengeStep === 'result' && (
              <div className="py-6 space-y-6 text-center">
                <div className="w-16 h-16 bg-amber-400 text-slate-950 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-amber-400/40">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    {userDuelScore >= opponentDuelScore ? 'Victory! You Won the Duel 🏆' : 'Great Effort! Honorable Match ⚖️'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {userDuelScore >= opponentDuelScore 
                      ? `You outperformed ${selectedStudentForChallenge.name} in statutory legal and tax compliance knowledge!`
                      : `${selectedStudentForChallenge.name} narrowly edged you out in this round.`}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-center">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Your Score</div>
                    <div className="text-xl font-black text-indigo-600">{userDuelScore} XP</div>
                  </div>
                  <div className="text-center border-l border-slate-200">
                    <div className="text-[10px] uppercase font-bold text-slate-400">{selectedStudentForChallenge.name}</div>
                    <div className="text-xl font-black text-slate-800">{opponentDuelScore} XP</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleStartDuel}
                    className="flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Rematch Duel
                  </button>
                  <button
                    onClick={() => {
                      setIsChallengeModalOpen(false);
                      handleOpenShare(selectedStudentForChallenge);
                    }}
                    className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>Share Result</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

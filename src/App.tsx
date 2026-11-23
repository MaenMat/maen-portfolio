import { useEffect, useState } from 'react';

type IconName = 'arrow' | 'code' | 'layers' | 'globe' | 'mail' | 'download' | 'check' | 'plus' | 'sun' | 'moon';
function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" /></>,
    layers: <><path d="m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />,
  };
  return <svg className={`h-5 w-5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const experience = [
  { id: '01', company: 'ECash Payment Provider', role: 'ABP Framework Developer', dates: 'Mar 2026 — Present', arDates: 'آذار 2026 — حتى الآن', summary: 'Develop and maintain backend services for an electronic payment platform serving 70+ merchant accounts. Integrate with 9+ bank APIs for transaction verification, payment authorization, and financial operations. Maintain transaction management, notification monitoring, customer management, and business rule configuration modules. Monitor 100+ daily transaction workflows and resolve processing issues with banking integration teams.', arSummary: 'تطوير وصيانة خدمات خلفية لمنصة دفع إلكتروني تخدم أكثر من 70 حساباً للتجار. التكامل مع أكثر من 9 واجهات مصرفية للتحقق من المعاملات وتفويض المدفوعات وتنفيذ العمليات المالية. صيانة وحدات إدارة المعاملات ومراقبة الإشعارات وإدارة العملاء وضبط قواعد العمل. متابعة أكثر من 100 مسار معاملة يومياً ومعالجة مشكلات الدفع بالتنسيق مع فرق التكامل المصرفي.', tags: ['ASP.NET Core', 'ABP Framework', 'Blazor WebAssembly', 'SQL Server', 'Redis', 'REST APIs'] },
  { id: '02', company: 'Modern Integrated Systems (MIS)', role: 'ABP Framework Developer', dates: 'Apr 2024 — Mar 2026', arDates: 'نيسان 2024 — آذار 2026', summary: 'Developed and helped architect 20+ enterprise microservices for a FinTech remittance and money exchange platform serving 250+ active financial service branches across Syria. Built backend APIs, service communication, reusable modules, and Blazor dashboards; integrated SignalR real-time updates and developed a Windows Forms client for document scanning and printing. Also contributed to a custom ERP system for asset and operational management.', arSummary: 'طوّرت وساهمت في تصميم أكثر من 20 خدمة مصغرة مؤسسية لمنصة تحويل أموال وصرافة تخدم أكثر من 250 فرعاً نشطاً للخدمات المالية في سوريا. أنشأت واجهات خلفية وتواصلاً بين الخدمات ووحدات قابلة لإعادة الاستخدام ولوحات Blazor، ودمجت تحديثات آنية عبر SignalR وطوّرت تطبيق Windows Forms لمسح المستندات وطباعتها. كما ساهمت في بناء نظام ERP مخصص لإدارة الأصول والعمليات.', tags: ['ASP.NET Core', 'ABP Framework', 'DDD', 'Clean Architecture', 'Blazor WebAssembly', 'SignalR', 'Windows Forms', 'Azure DevOps'] },
  { id: '03', company: 'Albadia Cement', role: 'ERPNext Developer', dates: 'Oct 2022 — Nov 2023', arDates: 'تشرين الأول 2022 — تشرين الثاني 2023', summary: 'Analyzed and developed a custom inventory and stock management system with Frappe/ERPNext. Implemented custom DocTypes, workflows, and reports to streamline stock handling and improve inventory visibility; also supported additional supervisor-led projects.', arSummary: 'حلّلت وطوّرت نظاماً مخصصاً لإدارة المخزون والمواد باستخدام Frappe/ERPNext. نفّذت أنواع مستندات مخصصة ومسارات عمل وتقارير لتسهيل إدارة المخزون وتحسين وضوح بياناته، كما ساهمت في مشاريع إضافية بإشراف الفريق.', tags: ['Frappe', 'ERPNext', 'Python', 'MariaDB'] },
];

const copy = {
  en: {
    nav: ['About', 'Expertise', 'Experience', 'Contact'], focus: 'SOFTWARE ENGINEERING · FINTECH · ENTERPRISE',
    eyebrow: 'SOFTWARE ENGINEER · FULLSTACK .NET DEVELOPER',
    line1: 'Software for', line2: 'real-world systems.', hero: 'I’m Maen Matouk, a software engineer with 4+ years of experience building enterprise applications, financial systems, and backend services. I specialize in C#, ASP.NET Core, ABP Framework, and SQL Server, with a focus on payment processing, banking integrations, and distributed systems.',
    work: 'View experience', connect: 'Let’s talk', downloadCv: 'Download my CV', based: 'BASED IN DAMASCUS, SYRIA', scroll: 'SCROLL TO EXPLORE',
    trusted: 'CORE TECHNOLOGIES', aboutLabel: '01 — THE ENGINEER',
    aboutTitle: 'Reliable systems,\nrooted in real needs.', aboutText: 'I build software for operationally demanding environments, including electronic payments, remittance, money exchange, and enterprise management. My experience spans backend services, financial integrations, and interfaces used to manage day-to-day operations.',
    aboutText2: 'I work with microservices, Clean Architecture, and Domain-Driven Design to shape maintainable solutions, and collaborate across engineering and QA teams through iterative Agile delivery.',
    principles: ['Business-first thinking', 'Architecture with intention', 'Reliability by design'],
    expertiseLabel: '02 — TECHNICAL TOOLKIT', expertiseTitle: 'Skills built through practice.',
    expertiseDesc: 'Technologies and methods used across my professional experience.',
    skills: [
      ['Languages', 'Programming languages used across backend, web, and application development.', 'C# · JavaScript · Python'],
      ['Frameworks & technologies', 'Application frameworks, UI technologies, and communication interfaces.', 'ASP.NET Core · ABP Framework · Blazor · Blazor WebAssembly · React.js · Node.js · ERPNext · Frappe · Tailwind CSS · Windows Forms · SignalR · RESTful APIs'],
      ['Databases', 'Relational, document, cache, and ERP data technologies.', 'SQL Server · MySQL · MongoDB · MariaDB · Redis'],
      ['Architecture & practices', 'Patterns and delivery methods applied to enterprise software.', 'Microservices · Clean Architecture · DDD · Agile · Scrum · Sprint Planning'],
      ['Tools & DevOps', 'Tools used for version control, containerization, and delivery workflows.', 'Git · Docker · CI/CD · Azure DevOps'],
    ],
    experienceLabel: '03 — PROFESSIONAL EXPERIENCE', experienceTitle: 'Systems delivered\nfor real operations.',
    experienceDesc: 'Roles, contributions, and technical work from my professional background.',
    educationLabel: '04 — EDUCATION & LANGUAGES', educationTitle: 'Education and communication.',
    degree: 'Bachelor of Information Technology Engineering', specialization: 'Specialization in Software Engineering', university: 'Damascus University', educationDates: '2018 — 2023',
    languageArabic: 'Arabic', languageEnglish: 'English', native: 'Native', professional: 'Professional working proficiency',
    contactLabel: '05 — WHAT’S NEXT', contactTitle: 'Let’s build something\nthat matters.', contactText: 'Have a challenging problem, an interesting opportunity, or just a good question? I’d love to hear from you.',
    email: 'Get in touch', copied: 'Email copied', copy: 'Copy email address', footer: 'Built with intention. Designed for connection.', rights: 'Maen Matouk', top: 'Back to top',
  },
  ar: {
    nav: ['نبذة عني', 'المهارات', 'الخبرة المهنية', 'تواصل معي'], focus: 'هندسة البرمجيات · التقنية المالية · الأنظمة المؤسسية',
    eyebrow: 'مهندس برمجيات · مطور متكامل بتقنيات ‎.NET',
    line1: 'برمجيات تخدم', line2: 'الواقع العملي.', hero: 'أنا معن معتوق، مهندس برمجيات بخبرة تزيد على 4 سنوات في تطوير تطبيقات مؤسسية وأنظمة مالية وخدمات خلفية. أختص بـ C# وASP.NET Core وABP Framework وSQL Server، مع تركيز على معالجة المدفوعات والتكامل المصرفي والأنظمة الموزعة.',
    work: 'استعرض خبرتي', connect: 'لنتحدث', downloadCv: 'تنزيل سيرتي الذاتية', based: 'دمشق، سوريا', scroll: 'مرّر للاستكشاف',
    trusted: 'أبرز التقنيات', aboutLabel: '٠١ — المهندس',
    aboutTitle: 'أنظمة موثوقة\nتنطلق من احتياجات فعلية.', aboutText: 'أطوّر برمجيات لبيئات تشغيلية تتطلب موثوقية عالية، تشمل المدفوعات الإلكترونية وتحويل الأموال والصرافة وإدارة المؤسسات. تمتد خبرتي إلى الخدمات الخلفية والتكاملات المالية والواجهات المستخدمة في إدارة العمليات اليومية.',
    aboutText2: 'أستخدم الخدمات المصغرة والبنية النظيفة وتصميم البرمجيات الموجّه بالمجال لبناء حلول قابلة للصيانة، وأتعاون مع فرق التطوير وضمان الجودة ضمن دورة عمل رشيقة وتدريجية.',
    principles: ['الأعمال أولاً', 'معمارية هادفة', 'موثوقية منذ التصميم'],
    expertiseLabel: '٠٢ — الأدوات التقنية', expertiseTitle: 'مهارات صقلتها الخبرة.',
    expertiseDesc: 'تقنيات وأساليب استخدمتها في مسيرتي المهنية.',
    skills: [
      ['لغات البرمجة', 'لغات استخدمتها في تطوير الأنظمة الخلفية والويب والتطبيقات.', 'C# · JavaScript · Python'],
      ['الأطر والتقنيات', 'أطر التطبيقات وتقنيات الواجهات والتواصل.', 'ASP.NET Core · ABP Framework · Blazor · Blazor WebAssembly · React.js · Node.js · ERPNext · Frappe · Tailwind CSS · Windows Forms · SignalR · RESTful APIs'],
      ['قواعد البيانات', 'تقنيات بيانات علائقية ومستندية وذاكرة مؤقتة وأنظمة ERP.', 'SQL Server · MySQL · MongoDB · MariaDB · Redis'],
      ['المعمارية وممارسات التطوير', 'أنماط وأساليب عمل طبّقتها في تطوير الأنظمة المؤسسية.', 'الخدمات المصغرة · Clean Architecture · DDD · Agile · Scrum · تخطيط السبرنت'],
      ['الأدوات وعمليات التطوير', 'أدوات إدارة الشيفرة والحاويات وسير عمل التسليم.', 'Git · Docker · CI/CD · Azure DevOps'],
    ],
    experienceLabel: '٠٣ — الخبرة المهنية', experienceTitle: 'أنظمة تخدم\nالعمليات الفعلية.',
    experienceDesc: 'الأدوار والمساهمات والخبرات التقنية من مسيرتي المهنية.',
    educationLabel: '٠٤ — التعليم واللغات', educationTitle: 'التعليم والتواصل.',
    degree: 'بكالوريوس الهندسة في تكنولوجيا المعلومات', specialization: 'التخصص: هندسة البرمجيات', university: 'جامعة دمشق', educationDates: '2018 — 2023',
    languageArabic: 'العربية', languageEnglish: 'الإنجليزية', native: 'اللغة الأم', professional: 'كفاءة مهنية في بيئة العمل',
    contactLabel: '٠٥ — الخطوة التالية', contactTitle: 'لنبنِ معاً شيئاً\nيُحدث فرقاً.', contactText: 'لديك تحدٍّ تقني أو فرصة مميزة أو سؤال جيد؟ يسعدني أن أسمع منك.',
    email: 'تواصل معي', copied: 'تم نسخ البريد', copy: 'نسخ البريد الإلكتروني', footer: 'بُني بعناية. صُمم للتواصل.', rights: 'معن معتوق', top: 'العودة للأعلى',
  },
};

function Architecture({ ar }: { ar: boolean }) {
  return <div className="relative mx-auto w-full max-w-[490px] py-9" dir="ltr" role="img" aria-label={ar ? 'رسم توضيحي للتقنيات المستخدمة في الخدمات الخلفية والتكامل المالي' : 'Illustration of backend technologies and financial integrations'}>
    <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,var(--tone-glow,#dfe3c8)_0%,transparent_67%)]" />
    <div className="absolute inset-2 bg-[radial-gradient(var(--tone-dot,#a4aa8c)_0.7px,transparent_0.7px)] bg-size-[19px_19px] [mask-image:radial-gradient(ellipse,black,transparent_72%)]" />
    <div className="relative mx-auto flex w-[86%] flex-col items-center">
      <div className="mb-5 flex items-center gap-2 self-start rounded-full border border-[var(--tone-border,#d4d8c5)] bg-[var(--tone-elevated,#f8f9ef)] px-3 py-1.5 font-mono text-xs text-[var(--tone-copy,#596347)]"><span className="h-1.5 w-1.5 rounded-full bg-[var(--tone-solid,#718441)]" /> BACKEND SYSTEMS</div>
      <div className="w-48 rounded-xl border border-[var(--tone-strong,#c9cfb5)] bg-[var(--tone-elevated,#fafbf5)] p-4 text-center shadow-[0_8px_25px_var(--tone-shadow-soft,#4351300a)]"><div className="mb-2 flex justify-center text-[var(--tone-accent,#6c7950)]"><Icon name="globe" /></div><p className="text-sm font-semibold text-[var(--tone-ink,#34412a)]">Client application</p><p className="mt-1 font-mono text-xs text-[var(--tone-copy,#68715d)]">Web · Finance · ERP</p></div>
      <div className="h-8 w-px bg-[var(--tone-strong,#a9b48b)]" />
      <div className="relative w-60 rounded-xl border border-[var(--tone-strong,#526735)] bg-[var(--tone-solid,#354b2b)] p-5 text-center text-[var(--tone-on-solid,#ffffff)] shadow-[0_12px_35px_var(--tone-shadow,#354b2b22)]"><span className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[var(--tone-solid,#c8dc8c)]" /><Icon name="layers" className="mx-auto mb-2 text-[var(--tone-on-solid,#d2dfb5)]" /><p className="text-sm font-medium">Backend services</p><p className="mt-1 font-mono text-xs text-[var(--tone-on-solid,#d8e1ca)]">Secure. Connected. Resilient.</p></div>
      <div className="h-7 w-px bg-[var(--tone-strong,#a9b48b)]" />
      <div className="relative flex w-full justify-between gap-2 pt-6 before:absolute before:inset-x-[15%] before:top-0 before:h-6 before:rounded-t-lg before:border-x before:border-t before:border-[var(--tone-strong,#a9b48b)]">
        {['Payments', 'Banking', 'Enterprise'].map((s, i) => <div key={s} className="relative z-10 w-1/3 rounded-lg border border-[var(--tone-border,#d0d5c2)] bg-[var(--tone-elevated,#fafbf5)] px-1 py-4 text-center shadow-sm"><span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--tone-card,#eef0e3)] font-mono text-sm text-[var(--tone-accent,#526538)]">{['↗', '▥', '⌘'][i]}</span><p className="text-xs font-semibold text-[var(--tone-ink,#45533a)]">{s}</p><p className="mt-1 font-mono text-xs text-[var(--tone-copy,#68715d)]">service</p></div>)}
      </div>
      <div className="h-6 w-px bg-[var(--tone-strong,#a9b48b)]" />
      <div className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-[var(--tone-strong,#b9c3a3)] bg-[var(--tone-card,#eeefe3)] px-3 py-3 font-mono text-xs text-[var(--tone-copy,#556346)]"><span className="h-2 w-2 rounded-full border border-[var(--tone-strong,#73815c)]" /> Microservices · Scalable by design</div>
      <div className="mt-6 flex gap-5 font-mono text-xs text-[var(--tone-copy,#677257)]"><span>● ASP.NET Core</span><span>● ABP Framework</span></div>
    </div>
  </div>;
}

export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const sync = () => {
      try {
        const saved = localStorage.getItem('maen-theme');
        setDark(saved === 'dark' || (saved !== 'light' && media.matches));
      } catch { setDark(media.matches); }
    };
    media.addEventListener('change', sync);
    window.addEventListener('storage', sync);
    return () => {
      media.removeEventListener('change', sync);
      window.removeEventListener('storage', sync);
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);
  const toggleTheme = () => {
    const next = !dark;
    document.documentElement.classList.add('theme-transition');
    setDark(next);
    try { localStorage.setItem('maen-theme', next ? 'dark' : 'light'); } catch { /* Storage may be unavailable. */ }
    window.setTimeout(() => document.documentElement.classList.remove('theme-transition'), 300);
  };
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const ar = lang === 'ar';
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    document.title = ar ? 'معن معتوق — مهندس برمجيات' : 'Maen Matouk — Software Engineer';
  }, [lang, ar]);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('maanmatouk@gmail.com'); setCopied(true); window.setTimeout(() => setCopied(false), 2500); } catch { window.location.href = 'mailto:maanmatouk@gmail.com'; }
  };
  const anchors = ['about', 'expertise', 'work', 'contact'];
  const button = 'inline-flex min-h-11 items-center justify-center gap-3 rounded-md px-5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tone-accent,#7b894e)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--tone-page,#ffffff)]';
  return <div id="top" className={`min-h-screen overflow-x-hidden bg-[var(--tone-page,#f8f8f2)] text-[var(--tone-ink,#273326)] ${ar ? 'font-[Noto_Sans_Arabic,sans-serif]' : 'font-sans'} selection:bg-[var(--tone-selection,#d8e2bd)]`}>
    <header className="relative z-20 mx-auto flex max-w-[1360px] items-center justify-between border-b border-[var(--tone-border,#dedfd2)] px-6 py-5 md:px-12 lg:px-16">
      <a href="#top" className="flex min-h-11 items-center gap-3" aria-label={ar ? 'معن معتوق، الرئيسية' : 'Maen Matouk, home'}><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--tone-strong,#9ca88a)] font-serif text-xl italic">m<span className="text-[var(--tone-accent,#78864e)]">.</span></span><span className="text-base font-semibold tracking-tight">{t.rights}<span className="text-[var(--tone-accent,#7c8b58)]">.</span></span></a>
      <nav className="hidden items-center gap-8 lg:flex" aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>{t.nav.map((label, i) => <a key={label} href={`#${anchors[i]}`} className="flex min-h-11 items-center text-sm text-[var(--tone-copy,#596150)] transition-colors hover:text-[var(--tone-ink,#263b22)] focus-visible:ring-2">{label}</a>)}</nav>
      <div className="flex items-center gap-2 md:gap-5">
        <button onClick={toggleTheme} aria-pressed={dark} aria-label={ar ? (dark ? 'تفعيل المظهر الفاتح' : 'تفعيل المظهر الداكن') : (dark ? 'Switch to light theme' : 'Switch to dark theme')} title={ar ? (dark ? 'المظهر الفاتح' : 'المظهر الداكن') : (dark ? 'Light theme' : 'Dark theme')} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[var(--tone-border,#d5d9ca)] text-[var(--tone-copy,#505b45)] hover:bg-[var(--tone-card,#edf0e3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--tone-accent,#7b894e)]"><Icon name={dark ? 'moon' : 'sun'} /></button>
        <button onClick={() => setLang(ar ? 'en' : 'ar')} aria-label={ar ? 'Switch to English' : 'التبديل إلى العربية'} className={`${button} px-2! text-[var(--tone-copy,#505b45)]`}><Icon name="globe" /><span>{ar ? 'English' : 'العربية'}</span></button>
        <a href="#contact" className={`${button} hidden bg-[var(--tone-solid,#354b2b)] text-[var(--tone-on-solid,#ffffff)] hover:bg-[var(--tone-solid-hover,#24391e)] md:inline-flex`}>{t.connect}<Icon name="arrow" className={ar ? 'rotate-180' : '-rotate-45'} /></a>
        <button aria-label={ar ? 'قائمة التنقل' : 'Toggle navigation'} aria-expanded={menu} onClick={() => setMenu(!menu)} className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--tone-border,#d5d9ca)] focus-visible:ring-2 lg:hidden"><Icon name="plus" className={menu ? 'rotate-45' : ''} /></button>
      </div>
      {menu && <nav className="absolute inset-x-4 top-full grid rounded-xl border border-[var(--tone-border,#d5d9ca)] bg-[var(--tone-page,#f8f8f2)] p-4 shadow-lg lg:hidden">{t.nav.map((label, i) => <a key={label} className="flex min-h-11 items-center px-3 text-sm" href={`#${anchors[i]}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>}
    </header>

    <main>
      <section className="mx-auto max-w-[1360px] px-6 pb-8 pt-12 md:px-12 md:pt-16 lg:px-16 lg:pt-20">
        <div className="grid items-center gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <div className="min-w-0">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--tone-border,#d5ddc6)] bg-[var(--tone-card,#eff2e5)] px-3 py-2 text-xs text-[var(--tone-accent,#53673b)]"><span className="h-2 w-2 rounded-full bg-[var(--tone-solid,#6d8248)]" />{t.focus}</div>
            <p className="mb-5 font-mono text-xs font-medium tracking-[0.12em] text-[var(--tone-accent,#647154)]">{t.eyebrow}</p>
            <h1 className={`text-[clamp(42px,5.1vw,72px)] leading-[1.13] font-medium tracking-[-0.055em] ${ar ? 'leading-[1.5] tracking-normal' : ''}`}>{t.line1}<br /><span className="font-serif font-normal italic text-[var(--tone-accent,#768253)]">{t.line2}</span></h1>
            <p className="mt-6 max-w-[510px] text-base leading-[1.85] text-[var(--tone-copy,#656c5e)] md:text-lg">{t.hero}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3"><a href="#work" className={`${button} bg-[var(--tone-solid,#354b2b)] text-[var(--tone-on-solid,#ffffff)] hover:bg-[var(--tone-solid-hover,#24391e)]`}>{t.work}<Icon name="arrow" className={ar ? 'rotate-180' : ''} /></a><a href="/CV.pdf" download="Maen-Matouk-CV.pdf" className={`${button} border border-[var(--tone-border,#cfd4c3)] hover:bg-[var(--tone-card,#edf0e3)]`}><Icon name="download" />{t.downloadCv}</a></div>
            <div className="mt-10 flex items-center gap-2 font-mono text-xs tracking-wider text-[var(--tone-copy,#69745b)]"><span className="h-2 w-2 rounded-full border border-[var(--tone-strong,#7f8b6d)]" />{t.based}<span className="mx-2 text-[var(--tone-copy,#9ba38f)]">/</span>UTC +3</div>
          </div>
          <Architecture ar={ar} />
        </div>
        <div className="mt-9 flex items-center justify-between border-b border-[var(--tone-border,#dedfd2)] pb-7 font-mono text-xs tracking-wider text-[var(--tone-copy,#69745b)]"><span>{ar ? 'هندسة هادفة. تأثير حقيقي.' : 'ENGINEERED WITH PURPOSE. BUILT FOR IMPACT.'}</span><a href="#about" className="hidden min-h-11 items-center gap-3 md:flex">{t.scroll}<span className="text-lg">↓</span></a></div>
        <div className="flex flex-col items-center gap-6 border-b border-[var(--tone-border,#dedfd2)] py-8 lg:flex-row lg:justify-between"><p className="font-mono text-xs tracking-wider text-[var(--tone-copy,#68715d)]">{t.trusted}</p><div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 text-lg font-semibold text-[var(--tone-copy,#69715f)]" dir="ltr">{['C#', 'ASP.NET Core', 'ABP Framework', 'SQL Server', 'Blazor', 'SignalR'].map((tech) => <span key={tech} className="tracking-tight">{tech}</span>)}</div></div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1232px] scroll-mt-8 gap-8 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-12 lg:px-0 lg:py-24">
        <div><SectionLabel>{t.aboutLabel}</SectionLabel><h2 className="mt-5 whitespace-pre-line text-4xl leading-[1.2] font-medium tracking-tight md:text-5xl">{t.aboutTitle}</h2></div>
        <div className="pt-2"><p className="text-lg leading-relaxed text-[var(--tone-copy,#59634f)]">{t.aboutText}</p><p className="mt-5 text-base leading-relaxed text-[var(--tone-copy,#67705d)]">{t.aboutText2}</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{t.principles.map(p => <span key={p} className="flex items-center gap-2 text-sm font-medium"><Icon name="check" className="h-4! w-4! text-[var(--tone-accent,#74844f)]" />{p}</span>)}</div></div>
      </section>

      <section id="expertise" className="scroll-mt-6 border-y border-[var(--tone-border,#dfe2d4)] bg-[var(--tone-secondary,#eff1e7)] px-6 py-16 md:px-12 lg:py-20">
        <div className="mx-auto max-w-[1232px]"><SectionLabel>{t.expertiseLabel}</SectionLabel><div className="mt-4 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-medium tracking-tight md:text-4xl">{t.expertiseTitle}</h2><p className="max-w-sm text-sm leading-relaxed text-[var(--tone-copy,#66715b)]">{t.expertiseDesc}</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.skills.map(([title, desc, tech], i) => <article key={title} className="min-w-0 rounded-lg border border-[var(--tone-border,#d8ddcc)] bg-[var(--tone-elevated,#f8f9f2)] p-6"><div className="mb-5 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--tone-border,#d9dfca)] bg-[var(--tone-card,#edf0e1)] text-[var(--tone-accent,#566a3e)]"><Icon name={(['code', 'globe', 'layers'] as IconName[])[i % 3]} /></span><span className="font-mono text-xs text-[var(--tone-copy,#68745b)]">0{i + 1}</span></div><h3 className="text-xl font-medium tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-[var(--tone-copy,#626d57)]">{desc}</p><p dir="ltr" className="mt-5 border-t border-[var(--tone-border,#dee2d3)] pt-4 text-start font-mono text-xs leading-6 text-[var(--tone-accent,#65734f)]">{tech}</p></article>)}</div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1232px] scroll-mt-8 px-6 py-16 md:px-12 lg:px-0 lg:py-24">
        <SectionLabel>{t.experienceLabel}</SectionLabel><div className="mt-5 flex flex-wrap items-end justify-between gap-6"><h2 className="whitespace-pre-line text-4xl leading-[1.18] font-medium tracking-tight md:text-5xl">{t.experienceTitle}</h2><p className="max-w-sm text-sm leading-7 text-[var(--tone-copy,#66715b)]">{t.experienceDesc}</p></div>
        <div className="mt-10 space-y-5">{experience.map((job) => <article key={job.id} className="rounded-lg border border-[var(--tone-border,#d9ddcf)] bg-[var(--tone-elevated,#f8f9f2)] p-6 md:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-xs tracking-wider text-[var(--tone-accent,#687a54)]">/{job.id}</p><h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">{job.company}</h3><p className="mt-1 text-[var(--tone-copy,#66715b)]">{job.role}</p></div><p dir={ar ? 'rtl' : 'ltr'} className="text-sm font-medium text-[var(--tone-copy,#66715b)]">{ar ? job.arDates : job.dates}</p></div><p className="mt-5 max-w-4xl text-sm leading-7 text-[var(--tone-copy,#626e56)]">{ar ? job.arSummary : job.summary}</p><div dir="ltr" className="mt-5 flex flex-wrap gap-2">{job.tags.map((tag) => <span key={tag} className="rounded border border-[var(--tone-border,#dfe3d5)] px-2 py-1 font-mono text-xs text-[var(--tone-copy,#667254)]">{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="border-y border-[var(--tone-border,#dfe2d4)] bg-[var(--tone-secondary,#eff1e7)] px-6 py-16 md:px-12 lg:py-20">
        <div className="mx-auto grid max-w-[1232px] gap-10 md:grid-cols-2"><div><SectionLabel>{t.educationLabel}</SectionLabel><h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">{t.educationTitle}</h2><article className="mt-7 rounded-lg border border-[var(--tone-border,#d8ddcc)] bg-[var(--tone-elevated,#f8f9f2)] p-6"><h3 className="text-lg font-semibold">{t.degree}</h3><p className="mt-2 text-sm text-[var(--tone-copy,#626d57)]">{t.specialization}</p><p className="mt-4 flex flex-wrap justify-between gap-2 text-sm"><span>{t.university}</span><span dir="ltr" className="text-[var(--tone-copy,#626d57)]">{t.educationDates}</span></p></article></div><div className="pt-1"><p className="font-mono text-xs font-medium tracking-[0.12em] text-[var(--tone-accent,#718054)]">{ar ? 'اللغات' : 'LANGUAGES'}</p><div className="mt-7 space-y-4"><div className="flex flex-wrap justify-between gap-2 border-b border-[var(--tone-border,#d8ddcc)] pb-4"><span className="font-medium">{t.languageArabic}</span><span className="text-sm text-[var(--tone-copy,#626d57)]">{t.native}</span></div><div className="flex flex-wrap justify-between gap-2 border-b border-[var(--tone-border,#d8ddcc)] pb-4"><span className="font-medium">{t.languageEnglish}</span><span className="text-sm text-[var(--tone-copy,#626d57)]">{t.professional}</span></div></div></div></div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[var(--tone-secondary,#2f4328)] px-6 py-16 text-[var(--tone-ink,#f5f7ed)] md:px-12 lg:py-20">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full border border-[var(--tone-strong,#62764f)] before:absolute before:inset-12 before:rounded-full before:border before:border-[var(--tone-strong,#62764f)] after:absolute after:inset-24 after:rounded-full after:border after:border-[var(--tone-strong,#62764f)]" />
        <div className="relative mx-auto grid max-w-[1232px] gap-10 md:grid-cols-[1.3fr_1fr] md:items-end"><div><p className="font-mono text-xs tracking-[0.15em] text-[var(--tone-copy,#d0daba)]">{t.contactLabel}</p><h2 className="mt-5 whitespace-pre-line text-4xl leading-[1.2] font-medium tracking-tight md:text-5xl">{t.contactTitle}</h2><p className="mt-6 max-w-lg text-base leading-7 text-[var(--tone-copy,#d1dac7)]">{t.contactText}</p></div><div className="flex flex-col items-start gap-5 md:pb-1"><a href="mailto:maanmatouk@gmail.com" className={`${button} bg-[var(--tone-solid,#d9e4ba)] text-[var(--tone-on-solid,#2e4124)] hover:bg-[var(--tone-solid-hover,#e7edda)]`}>{t.email}<Icon name="arrow" className="-rotate-45" /></a><div className="flex flex-wrap items-center gap-2"><a className="py-3 text-base underline decoration-[var(--tone-strong,#7e906a)] underline-offset-8 md:text-lg" href="mailto:maanmatouk@gmail.com">maanmatouk@gmail.com</a><button onClick={copyEmail} aria-label={t.copy} className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--tone-strong,#7a8a6a)] focus-visible:ring-2"><Icon name={copied ? 'check' : 'layers'} /></button></div><span role="status" className="text-sm text-[var(--tone-copy,#d4dfc6)]">{copied ? t.copied : <a href="https://wa.me/963944033176" dir="ltr">+963 944 033 176</a>}</span></div></div>
      </section>
    </main>
    <footer className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-[var(--tone-copy,#66715a)] md:px-12 lg:px-16"><p>© {new Date().getFullYear()} {t.rights}<span className="mx-3 hidden md:inline">—</span><span className="hidden md:inline">{t.footer}</span></p><a href="#top" className="flex min-h-11 items-center gap-3">{t.top}<span>↑</span></a></footer>
  </div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs font-medium tracking-[0.12em] text-[var(--tone-accent,#718054)]">{children}</p>;
}

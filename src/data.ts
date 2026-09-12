import { ServiceItem, WorkProject, ProcessStage, PricingPlan, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web',
    code: 'WD',
    title: 'Website design & development',
    shortDesc: 'Custom, responsive sites built on clean code — not a bloated template. Fast load times, clear information architecture, and SEO handled from the first sketch.',
    detailedDesc: 'We build high-performance web applications and marketing sites designed to turn visitors into qualified leads. Every build is rigorously tested across devices and engineered with clean semantic HTML, modern CSS, and optimal core web vitals.',
    deliverables: [
      'Responsive Web Architecture & Clean Layouts',
      'Modern Jamstack / React or Headless CMS Integration',
      'Core Web Vitals Optimization (sub-second load times)',
      'On-Page Semantic SEO & Schema Structured Data',
      'Cross-Browser & Device Quality Assurance'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'Headless CMS'],
    timeline: '3–5 weeks'
  },
  {
    id: 'branding',
    code: 'DB',
    title: 'Digital branding',
    shortDesc: 'Logo, color system, type, and a style guide your team can actually use. We build the identity your website and app are designed to carry.',
    detailedDesc: 'A brand identity is more than just a logo — it is an operating system for your marketing. We produce comprehensive, vector-based design tokens, typographic hierarchies, color palettes, and component guidelines that bridge print, web, and software.',
    deliverables: [
      'Primary, Secondary & Monogram Brand Marks',
      'Accessible Color Systems & Tokenized Palette',
      'Display & Body Typography Hierarchy',
      'Digital Component Style Guide (Figma / Web tokens)',
      'Social Media & Marketing Asset Templates'
    ],
    techStack: ['Figma', 'Vector Systems', 'Design Tokens', 'SVG Architecture'],
    timeline: '2–4 weeks'
  },
  {
    id: 'app',
    code: 'AA',
    title: 'Android app development',
    shortDesc: 'Native and cross-platform Android apps, from first wireframe to a published Play Store listing, with the UI matched to your brand system.',
    detailedDesc: 'We architect robust mobile experiences with offline-first caching, background syncing, smooth 60fps animations, and native device capabilities. From initial API design to Google Play Store production release, we handle the full lifecycle.',
    deliverables: [
      'Native Kotlin / Modern Jetpack Compose or React Native UI',
      'Offline-First Data Storage & Background Sync',
      'REST / GraphQL API Endpoints & Auth Integration',
      'Google Play Console Setup & Store Review Submission',
      'Crash Reporting & Performance Analytics Monitoring'
    ],
    techStack: ['Android SDK', 'Jetpack Compose', 'Kotlin', 'React Native', 'SQLite / Room'],
    timeline: '6–10 weeks'
  },
  {
    id: 'seo',
    code: 'SEO',
    title: 'Growth & SEO',
    shortDesc: 'On-page SEO, analytics setup, and ongoing content support so the site and app you launch keep earning traffic after handoff.',
    detailedDesc: 'Launching is just step one. We configure privacy-conscious analytics, search console verification, automated sitemaps, localized schemas, and conversion tracking funnels to measure real business ROI.',
    deliverables: [
      'Technical SEO Audit & Keyword Architecture',
      'Google Search Console & Analytics 4 Tagging',
      'Conversion Event Tracking & Funnel Setup',
      'Performance Budgeting & Ongoing Speed Audits',
      'Post-Launch Content Strategy Briefs'
    ],
    techStack: ['GA4', 'Google Tag Manager', 'Search Console', 'Schema.org', 'Lighthouse CI'],
    timeline: 'Ongoing / Included'
  }
];

export const WHY_US = [
  {
    tag: 'FAST TURNAROUND',
    title: 'Launch in weeks, not quarters',
    description: 'A typical website ships in 3–5 weeks; an MVP Android app in 6–10. You get a fixed timeline before work starts.'
  },
  {
    tag: 'TRANSPARENT PRICING',
    title: 'No surprise invoices',
    description: 'Fixed-scope quotes with milestone billing. If scope changes, you approve the new number before we touch it.'
  },
  {
    tag: 'SENIOR TEAM',
    title: 'You work with the builders',
    description: 'No account-manager relay. You talk directly to the designer and developer building your project.'
  },
  {
    tag: 'MODERN STACK',
    title: 'Built to be maintained',
    description: 'Standard, documented frameworks — no proprietary lock-in. Your next developer can pick up the codebase easily.'
  },
  {
    tag: 'POST-LAUNCH SUPPORT',
    title: '30 days of fixes, included',
    description: 'Every project ships with a month of bug fixes and small adjustments at no extra cost.'
  },
  {
    tag: 'ONE TEAM, THREE SKILLS',
    title: 'Brand, web, and app in sync',
    description: 'Because one team builds all three, your colors, type, and voice stay consistent everywhere customers meet you.'
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'harbor',
    title: 'Harbor & Co.',
    category: 'web',
    categoryLabel: 'Web',
    summary: 'Booking-first website for a premier restaurant group, rebuilt for a 40% faster load time and higher reservation completion.',
    impactMetric: '40% faster page load, +28% table reservations',
    client: 'Harbor & Co. Hospitality',
    year: '2025',
    deliverables: ['Custom Web App', 'Direct Table Booking Flow', 'Headless CMS', 'High-Speed Image Pipeline'],
    accentColor: '#5EEAD4',
    mockupType: 'browser',
    fullStory: 'Harbor & Co. operated three busy waterfront venues but was losing diners to high friction reservation widgets that lagged on mobile. We designed a featherweight, booking-first digital experience with sub-second page transitions, dynamic dinner menus, and seamless integration with OpenTable and Resy.'
  },
  {
    id: 'kiln',
    title: 'Kiln Coffee Roasters',
    category: 'branding',
    categoryLabel: 'Branding',
    summary: 'Full identity system, packaging guidelines, and a comprehensive style guide for an expanding specialty roastery.',
    impactMetric: '14 new retail stockists in Q1 post-rebrand',
    client: 'Kiln Coffee Roasters Ltd.',
    year: '2025',
    deliverables: ['Identity System', 'Coffee Bag Packaging Guidelines', 'Custom Typography Pairing', 'Digital Brand Guidelines'],
    accentColor: '#FFB238',
    mockupType: 'brand-guideline',
    fullStory: 'Kiln needed to transition from a local cafe to a regional wholesale brand. We created an industrial-minimalist identity inspired by ceramic kilns and roasting drums. The visual architecture incorporates warm ochre, graphite ink, and crisp typography that scales across packaging, shipping boxes, and web.'
  },
  {
    id: 'fieldnote',
    title: 'Fieldnote',
    category: 'app',
    categoryLabel: 'App',
    summary: 'Offline-first Android app for environmental and construction field inspectors, now utilized by six regional teams.',
    impactMetric: '6 regional inspection teams, 0 data dropouts',
    client: 'Fieldnote Environmental Engineering',
    year: '2025',
    deliverables: ['Native Android Application', 'Offline SQLite Sync Engine', 'Camera Geo-Tagging', 'Google Play Enterprise Release'],
    accentColor: '#5EEAD4',
    mockupType: 'android-phone',
    fullStory: 'Field inspectors often operate in remote geographic basins with zero cellular connectivity. We engineered an offline-first Android application with local SQLite caching, automatic conflict resolution, camera survey geo-stamping, and instant background sync the moment Wi-Fi or cellular signal is re-acquired.'
  },
  {
    id: 'arlo',
    title: 'Arlo Studio',
    category: 'web',
    categoryLabel: 'Web',
    summary: 'Portfolio and booking site for an award-winning architecture practice, engineered on a responsive headless CMS.',
    impactMetric: 'Lighthouse 99 performance score, 3x inquiry rate',
    client: 'Arlo Architectural Associates',
    year: '2025',
    deliverables: ['Editorial Portfolio Layouts', 'Project Filtering Engine', 'Interactive Blueprint Viewer', 'Global Edge CDN Deployment'],
    accentColor: '#FFB238',
    mockupType: 'browser',
    fullStory: 'Arlo wanted an online presence that mirrored their architectural ethos: restrained, tactile, and mathematically balanced. We built an ultra-fast editorial site with fluid grid proportions, high-resolution architectural photography rendering, and an interactive spatial project drawer.'
  },
  {
    id: 'northline',
    title: 'Northline Logistics',
    category: 'branding',
    categoryLabel: 'Branding',
    summary: 'Rebrand for a regional freight company, spanning geometric wordmark, digital tokens, and fleet vehicle livery.',
    impactMetric: 'Unified 42 vehicles and digital portal under 1 mark',
    client: 'Northline Freight Systems',
    year: '2024',
    deliverables: ['Geometric Wordmark', 'Fleet Livery System', 'Driver Uniform Badging', 'Enterprise Style Matrix'],
    accentColor: '#5EEAD4',
    mockupType: 'brand-guideline',
    fullStory: 'Operating across four states, Northline needed an identity that felt steadfast, modern, and unmistakably engineered. We created an angular navigational symbol paired with industrial sans-serif typography, tested for extreme legibility on highway billboard signage and vehicle flanks.'
  },
  {
    id: 'marketbox',
    title: 'Marketbox',
    category: 'app',
    categoryLabel: 'App',
    summary: 'Android ordering and contactless pickup app for an urban grocery chain, integrated with live warehouse inventory.',
    impactMetric: '4.8 Play Store rating, 32,000 monthly active users',
    client: 'Marketbox Urban Foods',
    year: '2024',
    deliverables: ['Jetpack Compose Android App', 'Real-time Stock Inventory API', 'Barcode Scanning', 'Push Notification Engine'],
    accentColor: '#FFB238',
    mockupType: 'android-phone',
    fullStory: 'Marketbox needed a native Android app that made local grocery delivery and curbside collection instantaneous. We built an app with sub-100ms item searching, real-time inventory quantity polling, barcode loyalty scanning, and localized store fulfillment dispatch.'
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: 'Discover',
    summary: 'We map goals, audience, and constraints, and agree on scope and timeline in writing.',
    duration: 'Week 1',
    details: [
      'Comprehensive stakeholder kickoff call',
      'Technical constraints & architecture scoping',
      'Written fixed-scope roadmap and milestone calendar'
    ]
  },
  {
    step: 2,
    title: 'Design',
    summary: 'Wireframes and visual direction, reviewed with you before a single line of code is written.',
    duration: 'Week 2–3',
    details: [
      'Interactive Figma wireframes and UX user flows',
      'Typography, color schemes, and component library',
      'Full visual sign-off prior to codebase initialization'
    ]
  },
  {
    step: 3,
    title: 'Build',
    summary: 'Development in weekly milestones, with a live staging link you can check at any point.',
    duration: 'Week 3–6',
    details: [
      'Clean, maintainable code on modern stacks',
      'Weekly preview links and recorded async demos',
      'Continuous performance benchmarking and code reviews'
    ]
  },
  {
    step: 4,
    title: 'Launch',
    summary: 'QA across devices, deployment, and — for apps — Play Store submission handled for you.',
    duration: 'Week 6–8',
    details: [
      'Automated testing across multiple Android devices and screen sizes',
      'DNS transfer, SSL provisioning, and Google Search Console hookup',
      'Google Play Store listing creation and review handling'
    ]
  },
  {
    step: 5,
    title: 'Support',
    summary: '30 days of included fixes, then an optional monthly plan for ongoing updates.',
    duration: 'Post-Launch',
    details: [
      '30 days of rapid turnaround warranty fixes included',
      'CMS editor video walkthrough training for your team',
      'Optional monthly growth, feature sprint, and uptime monitoring'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$1,200',
    cadence: 'one-time',
    description: 'A focused website for a small business or a single-service brand looking for a clean, credible presence.',
    features: [
      'Up to 5 custom pages',
      'Mobile-responsive build & fast load speeds',
      'Basic on-page SEO & meta tagging',
      '2 rounds of structured revisions',
      '30 days of post-launch support included',
      'Contact form with email dispatch'
    ],
    recommendedFor: 'Independent consultants, single-location practices, boutique service firms.'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '$3,800',
    cadence: 'one-time',
    isFeatured: true,
    description: 'Website plus a full brand identity — our most requested pairing for businesses scaling up.',
    features: [
      'Up to 10 pages, custom CMS setup',
      'Full brand identity & digital style guide',
      'Logo suite, typography & color system tokens',
      'Advanced SEO setup & analytics funnel tracking',
      '4 rounds of structured revisions',
      '60 days of post-launch priority support',
      'Speed optimization guarantee (< 1.2s load)'
    ],
    recommendedFor: 'Growing companies, venture-backed startups, high-volume service providers.'
  },
  {
    id: 'fullstack',
    name: 'FULL STACK',
    price: 'From $9,500',
    cadence: 'project',
    description: 'Website, brand, and a dedicated Android app, scoped and engineered together from day one.',
    features: [
      'Everything in the Growth package',
      'Native Android app (MVP feature scope)',
      'Google Play Store submission & review handled',
      'Shared design system across web & mobile',
      'Custom API / backend data synchronization',
      '90 days of dedicated developer support',
      'Direct Slack/Discord channel access'
    ],
    recommendedFor: 'Tech-enabled businesses, mobile-first products, operational field logistics.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Our booking site went from a five-second load to under a second, and reservations picked up within the first month. Having the builders directly on the calls made all the difference.',
    author: 'Rosa Hidalgo',
    role: 'Owner',
    company: 'Harbor & Co. Hospitality',
    metric: 'Under 1s load time'
  },
  {
    id: 't2',
    quote: 'They handled our rebrand and the new site as one project, so nothing ended up feeling mismatched. Our fleet and website look like they belong to the same world.',
    author: 'Devin Okafor',
    role: 'Marketing Lead',
    company: 'Northline Logistics',
    metric: 'Unified 42 vehicles & portal'
  },
  {
    id: 't3',
    quote: 'The Android app shipped on schedule, and their team stayed responsive well after launch. The offline capability works flawlessly for our remote inspection teams.',
    author: 'Priya Nair',
    role: 'Ops Director',
    company: 'Fieldnote Engineering',
    metric: 'Zero offline data losses'
  }
];

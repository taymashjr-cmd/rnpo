import campusBanner from '../assets/campus-banner.jpg';
import type { AudienceConfig } from './npo.config';

/**
 * TERTIARY & SRC AUDIENCE CONFIG
 * ------------------------------------------------------------------
 * Second instance of the AudienceConfig type. Driven by the same
 * LandingPage component as npoConfig.
 *
 * Demonstrates an optional section: `srcSpotlight` is provided here
 * but absent on the NPO config — LandingPage conditionally renders it.
 */

export const tertiaryConfig: AudienceConfig = {
  key: 'tertiary',
  nav: [
    { label: 'Why Partner', href: '#why' },
    { label: 'How It Works', href: '#how' },
    { label: 'Videos', href: '#videos' },
    { label: 'For SRCs', href: '#src' },
    { label: 'Models', href: '#models' },
    { label: 'Plans', href: '#plans' },
  ],
  hero: {
    eyebrow: '★ Tertiary · SRC · Bursary Funder Partnerships',
    titleLead: 'Connect your campus. Fund their ',
    titleAccent: 'future.',
    lead: (
      <>
        Tertiary institutions, Student Representative Councils and bursary funders partner with
        Connect+Funda Mobile to put affordable connectivity, FundaGuide AI Tutor and a learn-and-earn
        ecosystem into the hands of more students — from TVET to university,{' '}
        <strong className="text-white">beyond the lecture hall.</strong>
      </>
    ),
    primaryCta: 'Register Your Interest',
    secondaryCta: 'How Funding Works',
    secondaryHref: '#how',
    note: '🏫 TVET · University · SRC · Distance learning',
    badgeBig: '450K+',
    badgeSmall: 'annual TVET enrolments in SA',
    floatLabel: '🎓 Built for tertiary outcomes',
  },
  pillars: [
    { icon: 'users', title: 'Campus-wide connectivity', body: 'Affordable data and zero-rated learning for every student.' },
    { icon: 'book', title: 'Career-ready learning', body: 'FundaGuide AI Tutor, content partners and curated study tools.' },
    { icon: 'coin', title: 'Student-led growth', body: 'SRC referral commissions create self-funding campus income.' },
    { icon: 'growth', title: 'Measurable outcomes', body: 'Engagement, retention and progress reports for partners.' },
  ],
  stats: {
    caption: 'The tertiary opportunity we can unlock together',
    items: [
      { num: '50', accent: '+', label: 'Campuses to Connect' },
      { num: '100 000', accent: '+', label: 'Students to Reach' },
      { num: '450 000', accent: '+', label: 'Annual TVET Enrolment' },
      { num: '', accent: '1', label: 'Goal: Stronger Futures' },
    ],
  },
  why: {
    kicker: 'Why Partner With Us',
    heading: 'More than student data. A measurable campus engine.',
    intro:
      'Connect+Funda gives tertiary students affordable data plus zero-rated learning, FundaGuide AI Tutor, gamified motivation, and the engagement reporting your institution, funders and SRC need.',
    features: [
      { icon: 'book', title: 'Educational Content', body: 'Zero-rated access to Matific, Readability and FundaGuide AI — CAPS-aligned and tertiary-friendly learning at no data cost.' },
      { icon: 'chart', title: 'Engagement Reporting', body: 'A dashboard built for tertiary partners: enrolment, usage, retention indicators and outcome reporting.' },
      { icon: 'shield', title: 'SafeZone Controls', body: 'Optional content filtering and parental/institutional oversight — ideal for residence and minor-student programmes.' },
      { icon: 'trophy', title: 'Points+ Rewards', body: 'A loyalty system that rewards positive academic behaviour and drives ongoing engagement on campus.' },
      { icon: 'coin', title: 'Cost-Effective', body: '20–30% savings versus traditional providers through bulk discounts and institutional rates — every rand of your budget goes further.' },
      { icon: 'gear', title: 'Turnkey Rollout', body: 'Campus rollout playbook, co-branded materials, onboarding support and automated billing — we handle the heavy lifting.' },
    ],
  },
  videos: {
    kicker: 'See It In Action',
    heading: 'What partnership and learning look like',
    intro: 'A short walkthrough of how Connect+Funda tertiary partnerships work — plus our e-learning content partners and FundaGuide AI Tutor.',
    items: [
      { tag: 'Intro Video', tagStyle: 'primary', title: 'Intro to Tertiary & SRC Partnerships', sub: 'Why campuses and funders choose Connect+Funda', src: undefined /* TODO: replace with Dropbox / Vimeo URL */ },
      { tag: 'Partner', tagStyle: 'partner', title: 'Matific', sub: 'Foundation maths revision content' },
      { tag: 'Partner', tagStyle: 'partner', title: 'Readability', sub: 'Reading fluency & comprehension support' },
      { tag: 'AI Tutor', tagStyle: 'partner', title: 'FundaGuide AI Tutor', sub: 'CAPS-aligned, 1-on-1 AI study guide' },
    ],
    placeholderNote: 'Video placeholders — click-through behaviour will be wired by your dev team. Video files will be hosted on the C+F CDN or via Vimeo/YouTube unlisted links.',
  },
  how: {
    kicker: 'How Tertiary Partnership Works',
    heading: 'You fund. We connect. They learn & earn.',
    intro: 'A simple, transparent path from your contribution to measurable student outcomes — whether you are an institution, an SRC or a bursary funder.',
    steps: [
      { icon: 'choose', title: 'You choose the students', body: 'Support a campus cohort, a bursary group, a programme, or the whole institution.' },
      { icon: 'sim', title: 'We connect & support', body: 'SIMs, data, FundaGuide AI Tutor and zero-rated learning — fully managed.' },
      { icon: 'growth', title: 'Students learn & grow', body: 'They progress academically with curated digital tools, AI tutoring and Points+ rewards.' },
      { icon: 'report', title: 'You see the outcomes', body: 'Engagement, retention and progress reports tailored for institutions, funders and SRCs.' },
    ],
    foot: (
      <>Together, we are adding value <span className="text-cf-orange">beyond the lecture hall.</span></>
    ),
  },
  srcSpotlight: {
    tag: 'For Student Representative Councils',
    titleLead: 'Build campus revenue. Empower fellow students. ',
    titleAccent: 'Zero upfront cost.',
    lead: 'Connect+Funda partners directly with SRCs to deliver affordable data and AI-powered learning to fellow students — while generating commission income for the SRC’s operational budget.',
    benefits: [
      { title: 'Recurring SRC income', body: 'R25 per active student each month, paid into the SRC’s operational account.' },
      { title: 'Student-to-student trust', body: 'SRCs are the most credible voice on campus — we make it easy to recommend.' },
      { title: 'Ready-made collateral', body: 'Co-branded posters, social cards, sign-up pages and on-campus activation kits.' },
      { title: 'Transparent dashboard', body: 'Real-time view of active referrals and SRC earnings — full audit trail.' },
    ],
    bigStat: 'R25',
    bigStatSub: 'per active student, per month, to the SRC',
    bullets: [
      'Zero upfront cost — no SRC budget required',
      'Monthly payouts to your SRC account',
      'Co-branded campus campaign materials',
      'Dedicated partnership manager',
      'Audit-ready earnings dashboard',
    ],
    ctaPrimary: { label: 'Apply as an SRC Partner', href: '#register' },
    ctaSecondary: { label: 'See Tier 4 details', href: '#models' },
  },
  models: {
    kicker: 'Four Flexible Partnership Models',
    heading: 'Choose the model that fits your campus or budget',
    intro:
      'From bursary-funded cohorts to SRC-led referral commissions, there is a path for every tertiary institution, funder and student body.',
    tiers: [
      { tag: 'Tier 1', title: 'Bursary-Funded Cohort', desc: 'Foundation, corporate or SETA-funded student cohorts. Ideal for bursary funders wanting to bundle connectivity and AI tutoring with their scholarship offer.', price: 'From R68 / student / month', sub: 'Bulk discounts · scales with volume' },
      { tag: 'Tier 2', title: 'Institutional Programme Licence', desc: 'Tertiary institutions purchase connectivity and FundaGuide AI at an institutional rate, with optional content controls and a co-branded campus rollout.', price: 'R15–R20 / learner', sub: 'TVET, university or distance-learning' },
      { tag: 'Tier 3', title: 'Subsidised Student Programme', desc: 'Partner subsidises a portion (e.g. R30, R50, or custom), the student covers the balance. Useful when full institutional funding is not viable.', price: 'Flexible Subsidy', sub: 'Shared responsibility model' },
      { tag: 'Tier 4', title: 'SRC Referral Commission', desc: 'Zero upfront cost. SRCs refer students to Connect+Funda and earn monthly commissions for the council’s operational budget.', price: 'R25 / active student', sub: 'Zero upfront cost · recurring income' },
    ],
  },
  plans: {
    kicker: 'Our Data Plans & Learning Bundles',
    heading: 'Affordable connectivity, purpose-built for learning',
    intro: 'Every partnership is built on our retail plan and bundle catalogue — the same products students will use day-to-day.',
    subHeading: 'What partners are funding',
    subIntro: 'Each student gets a SIM, an Always Connected plan, optional Learning Bundles and the FundaGuide AI Tutor — with SafeZone, parental/institutional controls and Points+ Rewards included.',
    pills: [
      { group: 'Always Connected Plans', name: 'The Plug' },
      { group: '', name: 'The Vibe' },
      { group: '', name: 'The Flex' },
      { group: 'Junior Maths', name: 'Matific' },
      { group: 'Junior Reading', name: 'Readability' },
      { group: 'Accounting', name: 'ACCX' },
      { group: 'AI Tutor', name: 'FundaGuide' },
      { group: 'Lifestyle Perks', name: 'Extreme Lifestyle' },
    ],
    disclaimer: (
      <>
        <strong className="text-cf-orangeDk">Important:</strong> retail prices are published on the Connect+Funda plans catalogue.{' '}
        <strong className="text-cf-orangeDk">Final partnership pricing is on application</strong> and depends on customisation requirements, content access controls, institutional volumes and the number of students being supported. Promotional pricing applies to subscribers who sign up in the first 90 days. Terms &amp; conditions apply. SIM cards available to the public from mid-June 2026.
      </>
    ),
    catalogueUrl: 'https://connect-and-funda.vercel.app/#plans',
    catalogueLabel: 'View Full Plan Catalogue',
  },
  quote: {
    text: (<>We do not just connect students. <span className="text-cf-orange">We power their next chapter.</span></>),
    by: '— The Connect+Funda tertiary partnership promise',
  },
  who: {
    kicker: 'Who Can Partner',
    heading: 'Built for the people who shape tertiary outcomes',
    items: [
      { icon: 'building', title: 'Tertiary Institutions', body: 'TVET colleges, public & private universities, distance-learning providers — partner to connect cohorts, residences or the whole campus.' },
      { icon: 'users', title: 'Student Representative Councils', body: 'SRCs partner with us to earn campus-funding commissions while delivering real value to fellow students.' },
      { icon: 'heart', title: 'Bursary Funders & SETAs', body: 'Foundations, corporate bursary schemes and SETAs funding learner cohorts get connectivity and AI tutoring bundled into every scholarship.' },
    ],
  },
  compare: {
    kicker: 'The Difference',
    heading: 'Connect+Funda vs. generic airtime providers',
    rows: [
      { feature: 'Educational Content Integration', cf: 'Matific, Readability, FundaGuide AI', generic: 'Data only' },
      { feature: 'Engagement & Outcomes Reporting', cf: 'Tertiary partner dashboard', generic: 'No reporting' },
      { feature: 'Parental / Institutional Controls', cf: 'SafeZone filtering', generic: 'No safety features' },
      { feature: 'Learning Incentives', cf: 'Points+ rewards', generic: 'No incentives' },
      { feature: 'Flexible Partnership Models', cf: '4 tertiary-tailored tiers', generic: 'One-size-fits-all' },
      { feature: 'SRC & Campus Revenue Model', cf: 'Built-in referral commissions', generic: 'Not supported' },
      { feature: 'Funder & B-BBEE Alignment', cf: 'Measurable social impact', generic: 'Limited CSR value' },
    ],
  },
  impact: {
    heading: 'Turn your tertiary investment into reportable, B-BBEE-aligned outcomes.',
    intro:
      'Every partnership comes with the support and evidence your institution, funders and student body need — from onboarding to outcome reviews.',
    checks: [
      'Campus rollout playbook & onboarding',
      'Dedicated partnership manager',
      'Quarterly engagement & outcome reviews',
      'Co-branded campus materials',
      'Pilot programmes & flexible timelines',
    ],
    panel: [
      { k: 'B-BBEE Socio-Economic Development', v: '✓' },
      { k: 'Measurable student reach', v: 'Per quarter' },
      { k: 'Admin burden on your team', v: 'Minimal' },
      { k: 'Setup cost (Tier 4 / SRC)', v: 'R0' },
      { k: 'Savings vs. generic data', v: '20–30%' },
    ],
  },
  register: {
    kicker: 'Register Interest',
    heading: 'Let us power your students’ next chapter.',
    intro:
      'Tell us a little about your institution, SRC or funding programme. Our partnerships team will follow up with a customised proposal — no obligation.',
    successMsg: 'Thank you! Your interest has been registered. Our partnerships team will be in touch shortly.',
    fields: [
      { name: 'org', label: 'Institution / organisation name', required: true, placeholder: 'e.g. Ekurhuleni TVET College / UJ SRC / Thuthuka Bursary Fund' },
      { name: 'name', label: 'Contact name', required: true, placeholder: 'Full name', half: true },
      { name: 'role', label: 'Role / title', placeholder: 'e.g. Registrar / SRC President / Bursary Manager', half: true },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@org.ac.za', half: true },
      { name: 'phone', label: 'Phone', placeholder: '+27 ...', half: true },
      { name: 'type', label: 'Organisation type', type: 'select', required: true, half: true, options: ['Tertiary Institution', 'Student Representative Council (SRC)', 'Bursary Funder / SETA'] },
      { name: 'model', label: 'Preferred partnership model', type: 'select', half: true, options: ['Tier 1 – Bursary-Funded Cohort', 'Tier 2 – Institutional Programme Licence', 'Tier 3 – Subsidised Student Programme', 'Tier 4 – SRC Referral Commission'] },
      { name: 'learners', label: 'Approx. students to support', placeholder: 'e.g. 500', half: true },
      { name: 'province', label: 'Campus / Province', placeholder: 'e.g. Johannesburg, Gauteng', half: true },
      { name: 'msg', label: 'Tell us about your goals', type: 'textarea', placeholder: 'What outcomes are you hoping to fund or unlock?' },
    ],
  },
  closingBanner: {
    imageSrc: campusBanner,
    imageAlt: 'Connect+Funda tertiary partnership — campus connectivity and student outcomes',
    titleLead: 'Partners in tertiary. ',
    titleAccent: 'Powering what is next.',
    body: 'Every signed partnership becomes more students connected, more campuses supported, and stronger futures unlocked — together.',
    eyebrow: 'Thank you for partnering with us',
  },
  partners: ['MVNX', 'cellC', 'ALX', 'matific', 'Readability', 'FundaGuide AI', 'Axiz', 'kutlwanong'],
  footerTag: 'Tertiary & SRC Partnerships',
};

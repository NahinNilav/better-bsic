export const navItems = [
  { href: "/about", label: "About" },
  { href: "/co-investment", label: "Co-investment" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/impact", label: "Impact" },
  { href: "/careers", label: "Careers" },
];

/**
 * BSIC's published co-investment model. The founder secures the lead; BSIC
 * matches it. This is the only process the fund operates, and it is stated the
 * same way everywhere it appears on the site.
 */
export const coInvestmentStages = [
  {
    stage: "Stage 01",
    title: "Founder secures lead",
    copy: "The founder lines up a credible institutional lead investor — a global or regional VC firm willing to anchor the round.",
  },
  {
    stage: "Stage 02",
    title: "BSIC matches",
    copy: "BSIC commits matching capital alongside the lead, turning a foreign-led round into a larger, mixed-capital round.",
  },
  {
    stage: "Stage 03",
    title: "Joint diligence",
    copy: "BSIC's local team runs deep diligence on the ground. Findings are shared with the global lead.",
  },
  {
    stage: "Stage 04",
    title: "Local investors join",
    copy: "BSIC's standing brings local families, corporates and family offices into the round alongside the lead.",
  },
  {
    stage: "Stage 05",
    title: "Round closes",
    copy: "The round is structured to global benchmarks, properly documented, and closed fast.",
  },
];

/** How the institution is put together — the three pillars BSIC publishes. */
export const structurePillars = [
  {
    number: "01",
    title: "Institutional architecture",
    copy: "Board Charter, Investment Committee, Shareholders' Agreement and compliance frameworks aligned with Bangladesh Bank directives and the Companies Act.",
  },
  {
    number: "02",
    title: "Capitalization & governance",
    copy: "Banks contribute up to 1% of annual net profits, converted into equity stakes with defined capital-call mechanisms and shareholder protections.",
  },
  {
    number: "03",
    title: "Investment & deployment",
    copy: "End-to-end deal flow from sourcing through diligence, IC approval and portfolio monitoring, using equity, SAFEs and convertible instruments.",
  },
];

/**
 * Modelled ten-year outcomes as published by BSIC. These are projections, not
 * results, and every surface that shows them says so.
 */
export const impactFigures = [
  {
    value: "USD 500M",
    label: "Catalysed third-party capital",
    copy: "Crowding in local and global capital alongside strategic public investment.",
  },
  {
    value: "15,000",
    label: "Direct + indirect jobs",
    copy: "Across portfolio companies and the value-chain effects they generate as they scale.",
  },
  {
    value: "5M",
    label: "Livelihoods materially affected",
    copy: "Smallholders, agents, micro-merchants, RMG workers, patients and learners reached by portfolio products.",
  },
  {
    value: "USD 2B",
    label: "Cumulative GVA contribution",
    copy: "Direct value-add plus enabled economic activity, modelled over a ten-year horizon.",
  },
  {
    value: "USD 250M",
    label: "Tax + formalisation gain",
    copy: "Including digital rails moving cash economic activity onto the books and into the tax base.",
  },
  {
    value: "40×",
    label: "Economic multiplier on the fund",
    copy: "Above standard EM-VC benchmarks. Bangladesh's sector mix compounds inclusion and productivity gains.",
  },
];

/**
 * Every shareholder bank is listed once, alphabetically, with the same logo
 * treatment. They are equal partners in the fund, so no bank is featured,
 * reordered or given a larger cell than another.
 */
export const shareholderBanks = [
  { name: "AB Bank PLC", logo: "/banks/ab-bank.png", width: 250, height: 57 },
  { name: "Agrani Bank PLC", logo: "/banks/agrani-bank.png", width: 245, height: 50 },
  { name: "Al-Arafah Islami Bank PLC", logo: "/banks/al-arafah.png", width: 178, height: 140 },
  { name: "Bangladesh Development Bank PLC", logo: "/banks/bd-development-bank.png", width: 250, height: 198 },
  { name: "Bank Asia PLC", logo: "/banks/bank-asia.png", width: 180, height: 39 },
  { name: "BRAC Bank PLC", logo: "/banks/brac-bank.png", width: 250, height: 65 },
  { name: "City Bank PLC", logo: "/banks/city-bank.png", width: 560, height: 377 },
  { name: "Community Bank Bangladesh PLC", logo: "/banks/community-bank.png", width: 236, height: 86 },
  { name: "Dhaka Bank PLC", logo: "/banks/dhaka-bank.png", width: 250, height: 47 },
  { name: "Dutch-Bangla Bank PLC", logo: "/banks/dutch-bangla.png", width: 224, height: 43 },
  { name: "Eastern Bank PLC", logo: "/banks/ebl.png", width: 254, height: 48 },
  { name: "IFIC Bank PLC", logo: "/banks/ific-bank.png", width: 136, height: 47 },
  { name: "Islami Bank Bangladesh PLC", logo: "/banks/ibbl.png", width: 288, height: 59 },
  { name: "Jamuna Bank PLC", logo: "/banks/jamuna-bank.png", width: 250, height: 42 },
  { name: "Janata Bank PLC", logo: "/banks/janata-bank.png", width: 250, height: 197 },
  { name: "Meghna Bank PLC", logo: "/banks/meghna-bank.png", width: 247, height: 70 },
  { name: "Mercantile Bank PLC", logo: "/banks/mercantile-bank.png", width: 243, height: 91 },
  { name: "Midland Bank PLC", logo: "/banks/midland-bank.png", width: 250, height: 137 },
  { name: "Modhumoti Bank PLC", logo: "/banks/modhumoti-bank.png", width: 250, height: 95 },
  { name: "Mutual Trust Bank PLC", logo: "/banks/mtb.png", width: 560, height: 114 },
  { name: "National Bank PLC", logo: "/banks/national-bank.png", width: 250, height: 258 },
  { name: "NCC Bank PLC", logo: "/banks/ncc-bank.png", width: 244, height: 67 },
  { name: "NRB Bank PLC", logo: "/banks/nrb-bank.png", width: 250, height: 37 },
  { name: "NRBC Bank PLC", logo: "/banks/nrbc-bank.png", width: 250, height: 52 },
  { name: "ONE Bank PLC", logo: "/banks/one-bank.png", width: 250, height: 48 },
  { name: "Premier Bank PLC", logo: "/banks/premier-bank.png", width: 250, height: 49 },
  { name: "Prime Bank PLC", logo: "/banks/prime-bank.png", width: 550, height: 81 },
  { name: "Probashi Kallyan Bank", logo: "/banks/probashi-kallyan.png", width: 250, height: 298 },
  { name: "Pubali Bank PLC", logo: "/banks/pubali-bank.png", width: 250, height: 47 },
  { name: "Rupali Bank PLC", logo: "/banks/rupali-bank.png", width: 240, height: 37 },
  { name: "SBAC Bank PLC", logo: "/banks/sbac-bank.png", width: 541, height: 214 },
  { name: "Shahjalal Islami Bank PLC", logo: "/banks/shahjalal-islami.png", width: 221, height: 31 },
  { name: "Shimanto Bank PLC", logo: "/banks/shimanto-bank.png", width: 250, height: 56 },
  { name: "Social Islami Bank PLC", logo: "/banks/sibl.png", width: 250, height: 112 },
  { name: "Sonali Bank PLC", logo: "/banks/sonali-bank.png", width: 250, height: 251 },
  { name: "Southeast Bank PLC", logo: "/banks/southeast-bank.png", width: 250, height: 34 },
  { name: "Standard Bank PLC", logo: "/banks/standard-bank.png", width: 520, height: 54 },
  { name: "Trust Bank PLC", logo: "/banks/trust-bank.png", width: 250, height: 62 },
  { name: "United Commercial Bank PLC", logo: "/banks/ucb.png", width: 250, height: 16 },
  { name: "Uttara Bank PLC", logo: "/banks/uttara-bank.png", width: 250, height: 122 },
];

export const allBanks = shareholderBanks.map((bank) => bank.name);

export const pressItems = [
  {
    publication: "Tech in Asia",
    logo: "/press/techinasia.png",
    logoWidth: 200,
    logoHeight: 200,
    date: "May 2026",
    title: "Bangladesh banks launch $35M fund to tackle startup financing gap",
    href: "https://www.techinasia.com/bangladesh-banks-launch-35m-fund-tackle-startup-financing-gap",
  },
  {
    publication: "FWDstart",
    logo: "/press/fwd.png",
    logoWidth: 448,
    logoHeight: 91,
    date: "15 May 2026",
    title:
      "Bangladesh’s 39 commercial banks pool $35M into joint venture fund for late-seed and Series A startups",
    href: "https://www.fwdstart.me/p/bangladesh-39-commercial-banks-pool-35m-into-joint-venture-fund-for-late-seed-and-series-a-startup",
  },
  {
    publication: "ExitStack",
    logo: "/press/exitstack.png",
    logoWidth: 547,
    logoHeight: 398,
    date: "12 May 2026",
    title:
      "Onkur: BSIC, backed by 39 Bangladeshi banks, launch US$35Mn venture capital fund",
    href: "https://www.exitstack.co/posts/onkur-bsic-backed-by-39-bangladeshi-banks-launch-us-35mn-venture-capital-fund",
  },
  {
    publication: "The Daily Star",
    logo: "/press/dailystar.png",
    logoWidth: 560,
    logoHeight: 111,
    date: "13 May 2026",
    title: "Startups get Tk 425cr capital boost",
    href: "https://www.thedailystar.net/business/economy/news/startups-get-tk-425cr-capital-boost-4174316",
  },
];

export const alsoCoveredBy = [
  {
    publication: "The Business Standard",
    logo: "/press/tbs.png",
    width: 560,
    height: 280,
    href: "https://www.tbsnews.net/economy/startup-investment-company-eyes-35m-funding-three-firms-four-months-1436961",
  },
  {
    publication: "Future Startup",
    logo: "/press/futurestartup.png",
    width: 158,
    height: 68,
    href: "https://futurestartup.com/2026/05/13/bangladeshs-banks-backed-vc-firm-bsic-launches-with-tk-425-crore-inaugural-fund-onkur-heres-everything-you-need-to-know/",
  },
  {
    publication: "Prothom Alo English",
    logo: "/press/prothomalo.png",
    width: 560,
    height: 190,
    href: "https://en.prothomalo.com/corporate/cjyowu2pdc",
  },
  {
    publication: "New Age",
    logo: "/press/newage.png",
    width: 293,
    height: 60,
    href: "https://www.newagebd.net/post/banking/299538/bangladeshs-banking-sector-launches-bsic",
  },
  {
    publication: "The Business of Bangladesh",
    logo: "/press/tob.png",
    width: 560,
    height: 146,
    href: "https://tob.news/bsic-launches-tk425-crore-venture-capital-platform-for-startups/",
  },
  {
    publication: "BSS News",
    logo: "/press/bss.png",
    width: 560,
    height: 96,
    href: "https://www.bssnews.net/business/386435",
  },
];

export const investmentCriteria = [
  { label: "Geography", value: "Bangladesh-linked" },
  { label: "Stage", value: "Late-seed → Series A" },
  { label: "Model", value: "Tech-enabled growth" },
  { label: "Instrument", value: "Equity · SAFE · Convertible" },
  { label: "Round", value: "Institutionally led" },
  { label: "Approach", value: "Global co-investment" },
];

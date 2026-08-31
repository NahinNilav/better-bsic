export type RoleSection = {
  title: string;
  bullets: string[];
};

export type Role = {
  slug: string;
  order: string;
  title: string;
  group: "Founding Leadership" | "Investment Team" | "Ecosystem & Operations";
  level: string;
  summary: string;
  reportsTo: string;
  type: string;
  location: string;
  status: string;
  roleHeading: string;
  roleCopy: string[];
  responsibilities: RoleSection[];
  profileHeading: string;
  profileIntro: string;
  profile: RoleSection[];
  compensationHeading: string;
  compensation: string;
  closing: string;
};

export const roles: Role[] = [
  {
    slug: "managing-director",
    order: "01",
    title: "Managing Director",
    group: "Founding Leadership",
    level: "Founding executive",
    summary:
      "Lead the institution as its founding executive — with full responsibility for investment strategy, capital deployment, organisational build-out and stakeholder engagement.",
    reportsTo: "Board of Directors",
    type: "Full-time · Founding Leadership",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Founding executive of a new national investment institution.",
    roleCopy: [
      "The Managing Director will hold full responsibility for investment strategy and capital deployment, organisational build-out, institutional credibility, and stakeholder engagement.",
      "The role reports to the Board and works closely with the independent Investment Committee to build an enduring, commercially governed institution.",
    ],
    responsibilities: [
      {
        title: "Investment leadership",
        bullets: [
          "Lead sourcing, evaluation and execution of investments across early- and growth-stage startups.",
          "Define sector priorities aligned with national and market opportunities.",
          "Build and manage a high-quality, diversified portfolio.",
        ],
      },
      {
        title: "Fund strategy & capital formation",
        bullets: [
          "Develop BSIC’s investment thesis and portfolio construction strategy.",
          "Establish disciplined frameworks for risk, return and capital allocation.",
          "Support future capital mobilisation from domestic and international investors.",
        ],
      },
      {
        title: "Institutional development",
        bullets: [
          "Build and lead a high-performing investment organisation.",
          "Establish processes for investment decisions, portfolio monitoring, reporting and governance.",
          "Ensure alignment with regulatory and fiduciary standards.",
        ],
      },
      {
        title: "Stakeholders, ecosystem & governance",
        bullets: [
          "Serve as the primary interface with shareholder banks, relevant ministries, Bangladesh Bank and development partners.",
          "Build partnerships with local and global VC firms, accelerators, universities, DFIs and co-investors.",
          "Deliver transparent, data-driven reporting to the Board and maintain uncompromising institutional integrity.",
        ],
      },
    ],
    profileHeading: "Who we are looking for.",
    profileIntro:
      "A high-integrity investment leader who can combine commercial judgement, institutional discipline and the ability to build in a complex stakeholder environment.",
    profile: [
      {
        title: "Experience",
        bullets: [
          "10–15+ years in venture capital, private equity, investment banking, ecosystem development or fund management.",
          "A demonstrated track record leading investments and capital-allocation decisions.",
          "International exposure is strongly preferred.",
        ],
      },
      {
        title: "Leadership & market understanding",
        bullets: [
          "Proven experience leading teams with financial and operational accountability.",
          "Strong understanding of startup ecosystems and venture dynamics.",
          "Familiarity with Bangladesh or comparable emerging markets is an advantage.",
        ],
      },
    ],
    compensationHeading: "Structured to attract senior global investment talent.",
    compensation:
      "A competitive, internationally benchmarked package will be offered, including performance-based incentives and long-term carry participation aligned with fund performance.",
    closing: "Build the institution that will back Bangladesh’s founders for decades.",
  },
  {
    slug: "cio",
    order: "02",
    title: "Chief Investment Officer",
    group: "Founding Leadership",
    level: "Senior leadership",
    summary:
      "Define how BSIC invests, build the investment team, and lead every deal from origination through exit.",
    reportsTo: "Managing Director",
    type: "Full-time · Senior Leadership",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Build the investment engine of a nationally significant institution.",
    roleCopy: [
      "This is not a role in a mature fund. It is a builder role — requiring investment conviction, institutional ambition, and the ability to construct systems, culture and a portfolio simultaneously.",
      "The CIO leads the investment team, serves as the principal investment voice in IC deliberations, and is accountable end-to-end: from origination through exit.",
    ],
    responsibilities: [
      {
        title: "Investment strategy",
        bullets: [
          "Own the investment thesis, sector focus, stage strategy and portfolio construction in alignment with the Board and IC.",
          "Track macro, regulatory and ecosystem developments across Bangladesh and comparable frontier markets.",
          "Identify structural advantages before they become crowded across fintech, healthtech, edtech, agritech, climate, B2B SaaS and logistics.",
        ],
      },
      {
        title: "Origination & execution",
        bullets: [
          "Build a proprietary deal pipeline through founder relationships, co-investor networks, accelerators and direct outreach.",
          "Lead the full process — screening, diligence, term sheet, negotiation and close — with rigour and urgency.",
          "Set the standard for investment memos and IC presentations.",
        ],
      },
      {
        title: "Portfolio & value creation",
        bullets: [
          "Establish portfolio monitoring frameworks, milestones and board-rights activation.",
          "Support companies on strategy, fundraising and operational priorities.",
          "Lead exit planning across secondaries, strategic M&A and IPO pathways.",
        ],
      },
      {
        title: "Team & institution building",
        bullets: [
          "Recruit, develop and lead the investment team; set a high-bar investment culture.",
          "Design repeatable processes, diligence protocols and deal-flow systems.",
          "Represent BSIC at regional and global VC forums and contribute to IC governance and shareholder reporting.",
        ],
      },
    ],
    profileHeading: "A practitioner — not a theorist.",
    profileIntro:
      "Someone who has built conviction over a decade of real investing and wants to apply it to one of the world’s most dynamic and underserved ecosystems.",
    profile: [
      {
        title: "Experience",
        bullets: [
          "8+ years in VC, growth equity, PE or startups, with at least five in a principal investing or strategic role.",
          "A track record of independently originating, structuring and closing investments.",
          "Experience building an investment function, team or process from near-scratch.",
        ],
      },
      {
        title: "Operating style & judgement",
        bullets: [
          "Founder-centric without compromising investment discipline.",
          "Decisive under uncertainty, accountable for outcomes and an exceptionally clear writer and presenter.",
          "High-conviction, intellectually curious and motivated by building something enduring.",
        ],
      },
    ],
    compensationHeading: "Benchmarked to international VC standards.",
    compensation:
      "Competitive base, performance-based incentives and long-term value-creation components aligned with fund performance.",
    closing: "Define the future of venture investing in Bangladesh.",
  },
  {
    slug: "investment-associate",
    order: "03",
    title: "Investment Associate",
    group: "Investment Team",
    level: "Investment professional",
    summary:
      "Run diligence, build models, draft IC memos and engage founders directly across BSIC’s focus sectors.",
    reportsTo: "Chief Investment Officer",
    type: "Full-time · Investment Team",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Sit at the centre of the deal process.",
    roleCopy: [
      "Associates own the work that makes investment decisions possible: diligence, financial models, IC memos, market maps and founder engagement.",
      "This is high-ownership, high-exposure work inside a small, senior team. You will help build both the portfolio and the ecosystem around it.",
    ],
    responsibilities: [
      {
        title: "Deal sourcing & pipeline",
        bullets: [
          "Build deal flow through outbound outreach, ecosystem mapping, accelerator relationships and founder referrals.",
          "Conduct thematic research to generate investment hypotheses before opportunities surface inbound.",
          "Maintain rigorous CRM discipline and represent BSIC at ecosystem events.",
        ],
      },
      {
        title: "Due diligence & analysis",
        bullets: [
          "Run product, customer, competitive and regulatory diligence.",
          "Build operating models, unit economics and scenario analyses from scratch.",
          "Evaluate team quality, product-market-fit signals and business-model sustainability with structured judgement.",
        ],
      },
      {
        title: "Memos, IC & portfolio support",
        bullets: [
          "Draft clear, data-driven investment memos covering opportunity, risks, valuation and terms.",
          "Prepare for IC, stress-test assumptions and own documents through decision.",
          "Maintain portfolio dashboards and support follow-on fundraising, boards and information rights.",
        ],
      },
      {
        title: "Ecosystem & development",
        bullets: [
          "Build relationships with universities, incubators and accelerators to strengthen deal flow.",
          "Connect founders with mentors, co-investors and relevant networks.",
          "Gain direct exposure to IC, portfolio boards and a defined growth path toward Principal.",
        ],
      },
    ],
    profileHeading: "Early in your career — not early in your thinking.",
    profileIntro:
      "You have strong analytical foundations, genuine curiosity about technology and markets, and the drive to do the work most people avoid.",
    profile: [
      {
        title: "Experience & craft",
        bullets: [
          "3+ years in investment banking, consulting, venture or a finance/strategy role at a startup.",
          "Strong financial modelling and structured writing skills.",
          "Familiarity with Bangladesh or South Asian startup ecosystems is a real advantage.",
        ],
      },
      {
        title: "Approach",
        bullets: [
          "Earns founder trust quickly and closes the loop without being chased.",
          "Comfortable with ambiguity and high attention to detail without losing the bigger picture.",
          "Bengali proficiency preferred; strong English required.",
        ],
      },
    ],
    compensationHeading: "Benchmarked to regional VC market standards.",
    compensation:
      "Competitive base salary with performance-based incentives, aligned with the quality of the work and the long-term performance of the portfolio.",
    closing: "Help decide which exceptional companies get funded — and help them compound.",
  },
  {
    slug: "investment-analyst",
    order: "04",
    title: "Investment Analyst",
    group: "Investment Team",
    level: "Entry level",
    summary:
      "Screen companies, build models, research markets and support diligence from first conversation through IC.",
    reportsTo: "Investment Associate",
    type: "Full-time · Investment Team",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Real responsibility from day one.",
    roleCopy: [
      "You will work across live deals: screening companies, building financial models, researching markets and supporting diligence from first conversation through to IC.",
      "This is not a training role. BSIC is a lean team operating at institutional pace, with direct exposure to the Associate, CIO and full investment process.",
    ],
    responsibilities: [
      {
        title: "Deal screening & pipeline",
        bullets: [
          "Review inbound deal flow against stage, sector, market-size and team criteria.",
          "Prepare concise screening notes and investment summaries.",
          "Maintain CRM visibility and map the startup landscape across focus sectors.",
        ],
      },
      {
        title: "Research & market analysis",
        bullets: [
          "Conduct sector research across market sizing, competition, regulation and demand drivers.",
          "Build data-grounded TAM/SAM/SOM analyses and track regional VC activity.",
          "Produce research notes and market maps that sharpen the team’s point of view.",
        ],
      },
      {
        title: "Modelling & diligence",
        bullets: [
          "Build revenue projections, unit economics, cost structures and valuation analyses.",
          "Stress-test assumptions, run scenarios and prepare comparable-company work.",
          "Coordinate data rooms, reference checks, customer interviews and memo inputs.",
        ],
      },
      {
        title: "Ecosystem, portfolio & growth",
        bullets: [
          "Support university, accelerator and founder-community ecosystem work.",
          "Track portfolio KPIs and prepare performance updates.",
          "Earn a clear path to the Associate role through strong performance.",
        ],
      },
    ],
    profileHeading: "Curiosity, work ethic and commercial instinct.",
    profileIntro:
      "You bring the kind of judgement and intellectual curiosity that makes experience accelerate faster than the calendar.",
    profile: [
      {
        title: "Background",
        bullets: [
          "2–4 years in investment analysis, modelling, consulting or a high-performance operator role.",
          "Finance, economics, business or engineering background preferred.",
          "Comfortable building a model from scratch; Bangladesh startup familiarity is a strong advantage.",
        ],
      },
      {
        title: "Operating style",
        bullets: [
          "Reliable, organised, proactive and detail-obsessed without losing what matters.",
          "Clear, structured writer with genuine curiosity about startups and markets.",
          "Bengali proficiency essential; strong English required.",
        ],
      },
    ],
    compensationHeading: "Benchmarked to market, structured for growth.",
    compensation:
      "Competitive entry-level salary benchmarked to the market, with performance-based incentives.",
    closing: "Help identify the founders building Bangladesh’s next generation of global companies.",
  },
  {
    slug: "head-of-ecosystem-development",
    order: "05",
    title: "Head of Ecosystem Development",
    group: "Ecosystem & Operations",
    level: "Senior leadership",
    summary:
      "Build the conditions under which the best founders find BSIC — across universities, accelerators, government, diaspora and local capital.",
    reportsTo: "Managing Director",
    type: "Full-time · Senior Leadership",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Relationship-first. Strategy-backed. Built for pipeline.",
    roleCopy: [
      "This role sits at the intersection of investment, institution-building and national development — building structured pathways for high-quality companies to find BSIC.",
      "Every partnership, programme and relationship has a clear line to the portfolio. This is not community management. It is ecosystem infrastructure.",
    ],
    responsibilities: [
      {
        title: "Pipeline, partnerships & programmes",
        bullets: [
          "Build a repeatable pipeline through accelerators, incubators, universities and startup competitions.",
          "Design BSIC’s formal referral and scouting network and engage founders before they fundraise.",
          "Establish local and international partnerships across MENA, Southeast Asia, London and Silicon Valley.",
        ],
      },
      {
        title: "Portfolio & ecosystem elevation",
        bullets: [
          "Connect portfolio companies to talent, advisors, commercial partners and acqui-hire opportunities.",
          "Bring international best practice into Bangladesh through programming and direct engagement.",
          "Identify capability gaps and develop targeted initiatives to address them.",
        ],
      },
      {
        title: "Diaspora engagement",
        bullets: [
          "Engage the Bangladeshi diaspora across London, New York, Silicon Valley, Toronto and Dubai.",
          "Develop programmes that bring diaspora talent into BSIC’s orbit as operators, mentors, co-investors and connectors.",
          "Build relationships that generate deal flow, co-investment interest and sustained participation.",
        ],
      },
      {
        title: "Local capital & family offices",
        bullets: [
          "Position BSIC as a credible institutional entry point to venture for business families and high-net-worth investors.",
          "Lead investor education through roundtables, briefings and curated ecosystem engagement.",
          "Build a pipeline of local angel and family-office co-investors alongside BSIC.",
        ],
      },
    ],
    profileHeading: "A connector by instinct, a strategist by training.",
    profileIntro:
      "You build relationships that compound — and you know how to turn a network into a credible investment pipeline.",
    profile: [
      {
        title: "Experience & reach",
        bullets: [
          "4–7 years in ecosystem development, accelerator management, VC or a senior startup role.",
          "Track record of building partnerships and programmes that delivered commercial results.",
          "Deep relationships across Bangladesh’s founder, university, government and innovation communities.",
        ],
      },
      {
        title: "Commercial mindset & presence",
        bullets: [
          "Connects ecosystem activity directly to investment and portfolio objectives.",
          "Credible across government, founder, family-office and international settings.",
          "Bengali proficiency essential; strong English required.",
        ],
      },
    ],
    compensationHeading: "Senior role with direct access to the MD.",
    compensation:
      "Competitive salary with performance-based incentives tied to pipeline quality and ecosystem outcomes.",
    closing: "Give Bangladesh’s startup energy the infrastructure and connections to compound.",
  },
  {
    slug: "program-manager",
    order: "06",
    title: "Program Manager",
    group: "Ecosystem & Operations",
    level: "Mid–senior",
    summary:
      "Design and deliver the programs behind portfolio support, ecosystem partnerships and stakeholder execution.",
    reportsTo: "Head of Ecosystem Development",
    type: "Full-time · Program & Operations",
    location: "Dhaka, Bangladesh",
    status: "Applications open",
    roleHeading: "Programs that move companies forward.",
    roleCopy: [
      "The Program Manager is the execution engine behind BSIC’s portfolio support, ecosystem partnerships and stakeholder programming.",
      "You will translate strategy into structured activity and ensure program outputs feed directly into deal sourcing and portfolio value creation.",
    ],
    responsibilities: [
      {
        title: "Portfolio program management",
        bullets: [
          "Design support programs covering growth planning, fundraising preparation and milestone management.",
          "Track company performance against KPIs and report progress to the MD and Investment Committee.",
          "Coordinate founder support, board-observer and information-rights administration.",
        ],
      },
      {
        title: "Ecosystem partnerships & programs",
        bullets: [
          "Own partnerships with accelerators, incubators, universities and startup competitions.",
          "Run workshops, bootcamps and investor-readiness programs that strengthen the pipeline.",
          "Manage calendars, budgets, vendors, logistics and post-program evaluation.",
        ],
      },
      {
        title: "Stakeholders & pipeline",
        bullets: [
          "Manage day-to-day relationships with government, development partners and ecosystem organisations.",
          "Prepare briefs and presentations and represent BSIC at demo days and partner forums.",
          "Maintain a live CRM pipeline and coordinate pipeline review materials and meetings.",
        ],
      },
      {
        title: "Communications & reporting",
        bullets: [
          "Manage the external communications calendar and program launches.",
          "Draft partner briefs, program reports and institutional communications.",
          "Prepare internal reports on program performance and stakeholder engagement.",
        ],
      },
    ],
    profileHeading: "Operational discipline with ecosystem fluency.",
    profileIntro:
      "You can hold complex, multi-stakeholder workstreams together without losing quality, accountability or the line from activity to impact.",
    profile: [
      {
        title: "Background",
        bullets: [
          "2–4 years in ecosystem development, accelerator management, program management, a growth-stage startup or DFI.",
          "Track record delivering programs with measurable commercial or institutional outcomes.",
          "Deep familiarity with Bangladesh’s startup and investment ecosystem.",
        ],
      },
      {
        title: "Operating style & language",
        bullets: [
          "Strong execution instincts across multiple concurrent programs.",
          "High integrity, excellent judgement and an exceptional communicator across institutions and founders.",
          "Bengali proficiency essential; strong English required.",
        ],
      },
    ],
    compensationHeading: "Internationally benchmarked, structured for the long term.",
    compensation:
      "A competitive package including performance-based incentives and long-term carry participation aligned with fund performance.",
    closing: "Build the execution layer that moves portfolio companies forward.",
  },
];

export const roleGroups = [
  "Founding Leadership",
  "Investment Team",
  "Ecosystem & Operations",
] as const;

export function getRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}

export type Money = readonly [number, number];

export type IconName =
  | "diagnostic"
  | "collections"
  | "payables"
  | "books"
  | "desk"
  | "brand"
  | "web"
  | "cfo"
  | "sop"
  | "app"
  | "automation"
  | "controller"
  | "ops"
  | "ar"
  | "support"
  | "entities";

export type BlockMode = {
  id: string;
  label: string;
  figure: string;
  unit: string;
  monthly?: Money;
  once?: Money;
};

export type Block = {
  id: string;
  code: string;
  name: string;
  layer: "core" | "advanced";
  kind: "retainer" | "project" | "adder";
  icon: IconName;
  entry?: boolean;
  figure: string;
  unit: string;
  priceNote?: string;
  monthly?: Money;
  once?: Money;
  modes?: readonly BlockMode[];
  openEnded?: boolean;
  summary: string;
  includes: readonly string[];
  excludes: readonly string[];
  tallyNote?: string;
};

export const BLOCKS: readonly Block[] = [
  {
    id: "diagnostic",
    code: "01",
    name: "Business Diagnostic",
    layer: "core",
    kind: "project",
    icon: "diagnostic",
    entry: true,
    figure: "$1,000–$3,000",
    unit: "one-time",
    once: [1000, 3000],
    summary:
      "A structured review of operations, finance, and systems. The point is the biggest holes and the cash leaks, not a binder.",
    includes: [
      "Short written summary of findings",
      "Issues in priority order",
      "Which blocks are actually worth buying",
      "Focus on bottlenecks, collection gaps, and quick wins",
      "Delivered as a call plus a concise report",
    ],
    excludes: [],
  },
  {
    id: "collections",
    code: "02",
    name: "Collections",
    layer: "core",
    kind: "retainer",
    icon: "collections",
    entry: true,
    figure: "$300–$800",
    unit: "/ month",
    priceNote: "+ 15–25% of amounts actually recovered",
    monthly: [300, 800],
    summary:
      "Managed recovery of overdue receivables. The success fee applies only to cash that actually comes in.",
    includes: [
      "Structured follow-up sequence",
      "Aging review and controlled outreach",
      "Documented owner authorization for write-offs and communication",
      "Scope limited to existing receivables unless you expand it",
    ],
    excludes: ["Does not include routine invoicing — that is Expanded AR"],
    tallyNote:
      "Collections success fee is 15–25% of cash actually collected. It is not inside the retainer range.",
  },
  {
    id: "payables",
    code: "03",
    name: "Accounts Payable",
    layer: "core",
    kind: "retainer",
    icon: "payables",
    figure: "$400–$900",
    unit: "/ month",
    priceNote: "Base volume, then clear tiers",
    monthly: [400, 900],
    summary:
      "Invoice intake, coding, approval routing, payment scheduling, and basic vendor follow-up.",
    includes: [
      "Defined base volume — typically up to 50–100 invoices",
      "Extra volume priced in clear tiers, not a surprise",
      "Approval routing and payment scheduling",
      "Basic vendor follow-up",
    ],
    excludes: ["Does not include full bookkeeping unless that block is added"],
    tallyNote: "Payables pricing assumes a defined invoice volume. Extra volume moves up a tier.",
  },
  {
    id: "bookkeeping",
    code: "04",
    name: "Bookkeeping",
    layer: "core",
    kind: "retainer",
    icon: "books",
    figure: "$500–$1,500",
    unit: "/ month",
    monthly: [500, 1500],
    summary:
      "Transaction categorization, bank and card reconciliations, and a standard monthly P&L and balance sheet.",
    includes: [
      "Transaction categorization",
      "Bank and credit-card reconciliations",
      "Monthly profit and loss",
      "Monthly balance sheet",
      "Scope set by transaction volume and number of accounts",
    ],
    excludes: [
      "No AP or AR management unless those blocks are added",
      "No payroll processing",
      "No tax filing",
    ],
  },
  {
    id: "receptionist",
    code: "05",
    name: "Virtual Receptionist",
    layer: "core",
    kind: "retainer",
    icon: "desk",
    figure: "$400–$1,200",
    unit: "/ month",
    monthly: [400, 1200],
    summary:
      "Call answering, message taking, scheduling, and light email or calendar triage inside a defined hour range.",
    includes: [
      "Live call answering and basic messages",
      "Scheduling support",
      "Light email or calendar triage",
      "Part-time coverage unless you choose a higher tier",
    ],
    excludes: ["Not a full virtual assistant", "Not sales work"],
  },
  {
    id: "branding",
    code: "06",
    name: "Branding Package",
    layer: "core",
    kind: "project",
    icon: "brand",
    figure: "$1,500–$4,000",
    unit: "one-time",
    once: [1500, 4000],
    summary: "Logo, slogan, color palette, and a short brand guide. A defined number of revision rounds.",
    includes: [
      "Logo, slogan, and color palette",
      "Short brand guide",
      "Defined revision rounds",
      "Final files in usable formats",
    ],
    excludes: ["No website build", "No ongoing marketing", "No social media management"],
  },
  {
    id: "website",
    code: "07",
    name: "Website",
    layer: "core",
    kind: "project",
    icon: "web",
    figure: "$2,000–$6,000",
    unit: "one-time",
    once: [2000, 6000],
    summary:
      "A business site, typically 5–10 pages, built to work on a phone, with a basic contact form and a real launch.",
    includes: [
      "Standard pages for a business site",
      "Mobile-friendly layout",
      "Basic contact form",
      "A defined revision cycle and launch",
    ],
    excludes: ["Hosting, maintenance, and content updates are a separate block"],
  },
  {
    id: "cfo",
    code: "08",
    name: "Fractional CFO",
    layer: "core",
    kind: "retainer",
    icon: "cfo",
    figure: "$3,000–$8,000",
    unit: "/ month",
    monthly: [3000, 8000],
    summary:
      "Strategic oversight: reporting review, cash-flow guidance, and advisory inside a defined hour range.",
    includes: [
      "Reporting review and cash-flow guidance",
      "Advisory support within agreed hours",
      "Assumes the books are reasonably clean",
    ],
    excludes: [
      "Not day-to-day bookkeeping",
      "Not tax preparation unless those blocks are added",
    ],
    tallyNote: "Fractional CFO assumes the books are already reasonably clean.",
  },
  {
    id: "sop",
    code: "09",
    name: "Process & SOP Build",
    layer: "advanced",
    kind: "project",
    icon: "sop",
    figure: "$2,000–$6,000",
    unit: "project",
    priceNote: "Or $800–$2,000/month if it stays on",
    modes: [
      { id: "project", label: "Project", figure: "$2,000–$6,000", unit: "project", once: [2000, 6000] },
      { id: "ongoing", label: "Ongoing", figure: "$800–$2,000", unit: "/ month", monthly: [800, 2000] },
    ],
    summary:
      "Map the current workflow, write the procedures, and hand them to the team that has to follow them.",
    includes: [
      "Current-state mapping",
      "Clear standard operating procedures",
      "A short handoff so the team can run them",
      "Limited to a defined set of processes — order-to-cash, AP, or onboarding, for example",
    ],
    excludes: ["Does not include a full system implementation unless that is added"],
  },
  {
    id: "software",
    code: "10",
    name: "App or Custom Software",
    layer: "advanced",
    kind: "project",
    icon: "app",
    figure: "$5,000–$25,000+",
    unit: "project",
    priceNote: "Or $125–$175/hour. Quoted after a short discovery.",
    once: [5000, 25000],
    openEnded: true,
    summary:
      "A scoped internal tool or custom app: requirements, build, basic testing, and handoff. Not a fixed menu item.",
    includes: [
      "Requirements, build, basic testing, and handoff",
      "Price follows complexity, integrations, and features",
    ],
    excludes: ["Ongoing support is a separate retainer if you want it"],
    tallyNote:
      "Custom software is quoted after discovery. The printed high is a starting ceiling, and $125–$175/hour is the alternative.",
  },
  {
    id: "automation",
    code: "11",
    name: "Automation & Streamlining",
    layer: "advanced",
    kind: "project",
    icon: "automation",
    figure: "$1,500–$8,000",
    unit: "project",
    priceNote: "Or $1,000–$3,000/month on retainer",
    modes: [
      { id: "project", label: "Project", figure: "$1,500–$8,000", unit: "project", once: [1500, 8000] },
      { id: "retainer", label: "Retainer", figure: "$1,000–$3,000", unit: "/ month", monthly: [1000, 3000] },
    ],
    summary:
      "Practical automations — tools, workflows, or light scripts — that take manual work off the table.",
    includes: [
      "Short assessment and a recommended set of changes",
      "Implementation inside a defined scope",
      "Goes further than the diagnostic",
    ],
    excludes: ["Complex or multi-system work is quoted on its own"],
  },
  {
    id: "controller",
    code: "12",
    name: "Fractional Controller",
    layer: "advanced",
    kind: "retainer",
    icon: "controller",
    figure: "$2,000–$5,000",
    unit: "/ month",
    monthly: [2000, 5000],
    summary:
      "Hands-on oversight of the close, reconciliations, internal controls, and reporting. Between bookkeeping and a CFO.",
    includes: [
      "Close, reconciliations, controls, and reporting",
      "Typically 10–20 hours a month",
      "Assumes the books are reasonably organized",
    ],
    excludes: ["No tax prep", "No high-level strategy unless the CFO block is added"],
  },
  {
    id: "ops",
    code: "13",
    name: "Fractional Ops / CEO Support",
    layer: "advanced",
    kind: "retainer",
    icon: "ops",
    figure: "$3,000–$10,000+",
    unit: "/ month",
    monthly: [3000, 10000],
    openEnded: true,
    summary:
      "Operational guidance, decision support, and light leadership oversight. Priorities, process gaps, execution.",
    includes: [
      "Priorities, process gaps, and execution support",
      "Hours and scope set before the work starts",
    ],
    excludes: ["Not a full-time executive seat"],
    tallyNote: "Ops support hours are set up front. The top of the range is not a ceiling.",
  },
  {
    id: "ar",
    code: "14",
    name: "Expanded AR Management",
    layer: "advanced",
    kind: "retainer",
    icon: "ar",
    figure: "$300–$800",
    unit: "/ month",
    priceNote: "Plus volume tiers. Not hard collections.",
    monthly: [300, 800],
    summary:
      "Routine invoicing, reminders, aging reports, and light follow-up. Separate from the success-fee collections block.",
    includes: [
      "Invoicing, reminders, and aging reports",
      "Light follow-up inside a defined volume",
      "Extra volume priced in tiers",
    ],
    excludes: ["Does not include success-fee collections unless that block is added"],
    tallyNote: "Expanded AR is routine invoicing and reminders. It is not the collections block.",
  },
  {
    id: "support",
    code: "15",
    name: "Website or Tech Support",
    layer: "advanced",
    kind: "retainer",
    icon: "support",
    figure: "$150–$400",
    unit: "/ month",
    priceNote: "Website tier. Broader tech is $1,000–$3,000/month.",
    modes: [
      { id: "site", label: "Website", figure: "$150–$400", unit: "/ month", monthly: [150, 400] },
      { id: "tech", label: "Broader tech", figure: "$1,000–$3,000", unit: "/ month", monthly: [1000, 3000] },
    ],
    summary:
      "After launch: small updates, hosting oversight, or a wider technical retainer with an hour cap.",
    includes: [
      "Website tier — content tweaks and basic upkeep",
      "Broader tech — automation care, minor fixes, system monitoring",
      "Either way, a defined hour cap",
    ],
    excludes: [],
  },
  {
    id: "entities",
    code: "16",
    name: "Multi-entity Finance",
    layer: "advanced",
    kind: "adder",
    icon: "entities",
    figure: "+25–50%",
    unit: "on the base rate",
    summary:
      "An adder, not a product. Multiple entities, intercompany, heavier revenue recognition, or thicker reporting.",
    includes: [
      "Sits on bookkeeping, controller, or CFO pricing",
      "Quoted once the complexity is actually known",
    ],
    excludes: ["Not sold on its own"],
    tallyNote:
      "Multi-entity work adds 25–50% on top of bookkeeping, controller, or CFO. It is not a standalone block.",
  },
];

export const CORE = BLOCKS.filter((block) => block.layer === "core");
export const ADVANCED = BLOCKS.filter((block) => block.layer === "advanced");

const BY_ID = new Map(BLOCKS.map((block) => [block.id, block]));

export function getBlock(id: string): Block | undefined {
  return BY_ID.get(id);
}

export function activeMode(block: Block, modeId?: string): BlockMode | undefined {
  if (!block.modes?.length) return undefined;
  return block.modes.find((mode) => mode.id === modeId) ?? block.modes[0];
}

export function blockFigures(block: Block, modeId?: string): { monthly?: Money; once?: Money } {
  const mode = activeMode(block, modeId);
  if (mode) return { monthly: mode.monthly, once: mode.once };
  return { monthly: block.monthly, once: block.once };
}

export function blockPriceLine(block: Block, modeId?: string): string {
  const mode = activeMode(block, modeId);
  if (mode) return `${mode.figure} ${mode.unit}`;
  return `${block.figure} ${block.unit}`;
}

export type StackLine = {
  block: Block;
  modeId?: string;
};

export type Tally = {
  monthly?: Money;
  once?: Money;
  notes: string[];
  openEnded: boolean;
  missingFinanceBase: boolean;
};

const FINANCE_BASE = new Set(["bookkeeping", "controller", "cfo"]);

export function tally(lines: readonly StackLine[]): Tally {
  let monthlyLo = 0;
  let monthlyHi = 0;
  let onceLo = 0;
  let onceHi = 0;
  let hasMonthly = false;
  let hasOnce = false;
  let openEnded = false;
  const notes: string[] = [];

  for (const line of lines) {
    const figures = blockFigures(line.block, line.modeId);
    if (figures.monthly) {
      hasMonthly = true;
      monthlyLo += figures.monthly[0];
      monthlyHi += figures.monthly[1];
    }
    if (figures.once) {
      hasOnce = true;
      onceLo += figures.once[0];
      onceHi += figures.once[1];
    }
    if (line.block.openEnded) openEnded = true;
    if (line.block.tallyNote) notes.push(line.block.tallyNote);
  }

  const missingFinanceBase =
    lines.some((line) => line.block.id === "entities") &&
    !lines.some((line) => FINANCE_BASE.has(line.block.id));

  return {
    monthly: hasMonthly ? [monthlyLo, monthlyHi] : undefined,
    once: hasOnce ? [onceLo, onceHi] : undefined,
    notes,
    openEnded,
    missingFinanceBase,
  };
}

export function formatMoney(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatSpan(span: Money): string {
  return `${formatMoney(span[0])}–${formatMoney(span[1])}`;
}

import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ChartLine, a as ShieldCheck, c as Palette, d as Layers, f as Headset, g as CodeXml, h as Cog, l as Monitor, m as Compass, n as Wrench, o as ScanSearch, p as FileInput, r as Workflow, s as Receipt, t as X, u as Menu, v as BookOpen, y as Banknote } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNYex-6J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BLOCKS = [
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
		once: [1e3, 3e3],
		summary: "A structured review of operations, finance, and systems. The point is the biggest holes and the cash leaks, not a binder.",
		includes: [
			"Short written summary of findings",
			"Issues in priority order",
			"Which blocks are actually worth buying",
			"Focus on bottlenecks, collection gaps, and quick wins",
			"Delivered as a call plus a concise report"
		],
		excludes: []
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
		summary: "Managed recovery of overdue receivables. The success fee applies only to cash that actually comes in.",
		includes: [
			"Structured follow-up sequence",
			"Aging review and controlled outreach",
			"Documented owner authorization for write-offs and communication",
			"Scope limited to existing receivables unless you expand it"
		],
		excludes: ["Does not include routine invoicing — that is Expanded AR"],
		tallyNote: "Collections success fee is 15–25% of cash actually collected. It is not inside the retainer range."
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
		summary: "Invoice intake, coding, approval routing, payment scheduling, and basic vendor follow-up.",
		includes: [
			"Defined base volume — typically up to 50–100 invoices",
			"Extra volume priced in clear tiers, not a surprise",
			"Approval routing and payment scheduling",
			"Basic vendor follow-up"
		],
		excludes: ["Does not include full bookkeeping unless that block is added"],
		tallyNote: "Payables pricing assumes a defined invoice volume. Extra volume moves up a tier."
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
		summary: "Transaction categorization, bank and card reconciliations, and a standard monthly P&L and balance sheet.",
		includes: [
			"Transaction categorization",
			"Bank and credit-card reconciliations",
			"Monthly profit and loss",
			"Monthly balance sheet",
			"Scope set by transaction volume and number of accounts"
		],
		excludes: [
			"No AP or AR management unless those blocks are added",
			"No payroll processing",
			"No tax filing"
		]
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
		summary: "Call answering, message taking, scheduling, and light email or calendar triage inside a defined hour range.",
		includes: [
			"Live call answering and basic messages",
			"Scheduling support",
			"Light email or calendar triage",
			"Part-time coverage unless you choose a higher tier"
		],
		excludes: ["Not a full virtual assistant", "Not sales work"]
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
		once: [1500, 4e3],
		summary: "Logo, slogan, color palette, and a short brand guide. A defined number of revision rounds.",
		includes: [
			"Logo, slogan, and color palette",
			"Short brand guide",
			"Defined revision rounds",
			"Final files in usable formats"
		],
		excludes: [
			"No website build",
			"No ongoing marketing",
			"No social media management"
		]
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
		once: [2e3, 6e3],
		summary: "A business site, typically 5–10 pages, built to work on a phone, with a basic contact form and a real launch.",
		includes: [
			"Standard pages for a business site",
			"Mobile-friendly layout",
			"Basic contact form",
			"A defined revision cycle and launch"
		],
		excludes: ["Hosting, maintenance, and content updates are a separate block"]
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
		monthly: [3e3, 8e3],
		summary: "Strategic oversight: reporting review, cash-flow guidance, and advisory inside a defined hour range.",
		includes: [
			"Reporting review and cash-flow guidance",
			"Advisory support within agreed hours",
			"Assumes the books are reasonably clean"
		],
		excludes: ["Not day-to-day bookkeeping", "Not tax preparation unless those blocks are added"],
		tallyNote: "Fractional CFO assumes the books are already reasonably clean."
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
		modes: [{
			id: "project",
			label: "Project",
			figure: "$2,000–$6,000",
			unit: "project",
			once: [2e3, 6e3]
		}, {
			id: "ongoing",
			label: "Ongoing",
			figure: "$800–$2,000",
			unit: "/ month",
			monthly: [800, 2e3]
		}],
		summary: "Map the current workflow, write the procedures, and hand them to the team that has to follow them.",
		includes: [
			"Current-state mapping",
			"Clear standard operating procedures",
			"A short handoff so the team can run them",
			"Limited to a defined set of processes — order-to-cash, AP, or onboarding, for example"
		],
		excludes: ["Does not include a full system implementation unless that is added"]
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
		once: [5e3, 25e3],
		openEnded: true,
		summary: "A scoped internal tool or custom app: requirements, build, basic testing, and handoff. Not a fixed menu item.",
		includes: ["Requirements, build, basic testing, and handoff", "Price follows complexity, integrations, and features"],
		excludes: ["Ongoing support is a separate retainer if you want it"],
		tallyNote: "Custom software is quoted after discovery. The printed high is a starting ceiling, and $125–$175/hour is the alternative."
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
		modes: [{
			id: "project",
			label: "Project",
			figure: "$1,500–$8,000",
			unit: "project",
			once: [1500, 8e3]
		}, {
			id: "retainer",
			label: "Retainer",
			figure: "$1,000–$3,000",
			unit: "/ month",
			monthly: [1e3, 3e3]
		}],
		summary: "Practical automations — tools, workflows, or light scripts — that take manual work off the table.",
		includes: [
			"Short assessment and a recommended set of changes",
			"Implementation inside a defined scope",
			"Goes further than the diagnostic"
		],
		excludes: ["Complex or multi-system work is quoted on its own"]
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
		monthly: [2e3, 5e3],
		summary: "Hands-on oversight of the close, reconciliations, internal controls, and reporting. Between bookkeeping and a CFO.",
		includes: [
			"Close, reconciliations, controls, and reporting",
			"Typically 10–20 hours a month",
			"Assumes the books are reasonably organized"
		],
		excludes: ["No tax prep", "No high-level strategy unless the CFO block is added"]
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
		monthly: [3e3, 1e4],
		openEnded: true,
		summary: "Operational guidance, decision support, and light leadership oversight. Priorities, process gaps, execution.",
		includes: ["Priorities, process gaps, and execution support", "Hours and scope set before the work starts"],
		excludes: ["Not a full-time executive seat"],
		tallyNote: "Ops support hours are set up front. The top of the range is not a ceiling."
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
		summary: "Routine invoicing, reminders, aging reports, and light follow-up. Separate from the success-fee collections block.",
		includes: [
			"Invoicing, reminders, and aging reports",
			"Light follow-up inside a defined volume",
			"Extra volume priced in tiers"
		],
		excludes: ["Does not include success-fee collections unless that block is added"],
		tallyNote: "Expanded AR is routine invoicing and reminders. It is not the collections block."
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
		modes: [{
			id: "site",
			label: "Website",
			figure: "$150–$400",
			unit: "/ month",
			monthly: [150, 400]
		}, {
			id: "tech",
			label: "Broader tech",
			figure: "$1,000–$3,000",
			unit: "/ month",
			monthly: [1e3, 3e3]
		}],
		summary: "After launch: small updates, hosting oversight, or a wider technical retainer with an hour cap.",
		includes: [
			"Website tier — content tweaks and basic upkeep",
			"Broader tech — automation care, minor fixes, system monitoring",
			"Either way, a defined hour cap"
		],
		excludes: []
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
		summary: "An adder, not a product. Multiple entities, intercompany, heavier revenue recognition, or thicker reporting.",
		includes: ["Sits on bookkeeping, controller, or CFO pricing", "Quoted once the complexity is actually known"],
		excludes: ["Not sold on its own"],
		tallyNote: "Multi-entity work adds 25–50% on top of bookkeeping, controller, or CFO. It is not a standalone block."
	}
];
var CORE = BLOCKS.filter((block) => block.layer === "core");
var ADVANCED = BLOCKS.filter((block) => block.layer === "advanced");
var BY_ID = new Map(BLOCKS.map((block) => [block.id, block]));
function getBlock(id) {
	return BY_ID.get(id);
}
function activeMode(block, modeId) {
	if (!block.modes?.length) return void 0;
	return block.modes.find((mode) => mode.id === modeId) ?? block.modes[0];
}
function blockFigures(block, modeId) {
	const mode = activeMode(block, modeId);
	if (mode) return {
		monthly: mode.monthly,
		once: mode.once
	};
	return {
		monthly: block.monthly,
		once: block.once
	};
}
function blockPriceLine(block, modeId) {
	const mode = activeMode(block, modeId);
	if (mode) return `${mode.figure} ${mode.unit}`;
	return `${block.figure} ${block.unit}`;
}
var FINANCE_BASE = /* @__PURE__ */ new Set([
	"bookkeeping",
	"controller",
	"cfo"
]);
function tally(lines) {
	let monthlyLo = 0;
	let monthlyHi = 0;
	let onceLo = 0;
	let onceHi = 0;
	let hasMonthly = false;
	let hasOnce = false;
	let openEnded = false;
	const notes = [];
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
	const missingFinanceBase = lines.some((line) => line.block.id === "entities") && !lines.some((line) => FINANCE_BASE.has(line.block.id));
	return {
		monthly: hasMonthly ? [monthlyLo, monthlyHi] : void 0,
		once: hasOnce ? [onceLo, onceHi] : void 0,
		notes,
		openEnded,
		missingFinanceBase
	};
}
function formatMoney(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(value);
}
function formatSpan(span) {
	return `${formatMoney(span[0])}–${formatMoney(span[1])}`;
}
var STORAGE_KEY = "opsblock-stack-v1";
var StackContext = (0, import_react.createContext)(null);
function readStored() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		const ids = Array.isArray(parsed.ids) ? parsed.ids.filter((id) => typeof id === "string" && Boolean(getBlock(id))) : [];
		const modes = {};
		if (parsed.modes && typeof parsed.modes === "object") {
			for (const [key, value] of Object.entries(parsed.modes)) if (getBlock(key)?.modes?.some((mode) => mode.id === value)) modes[key] = value;
		}
		return {
			ids,
			modes
		};
	} catch {
		return null;
	}
}
function StackProvider({ children }) {
	const [ids, setIds] = (0, import_react.useState)([]);
	const [modes, setModes] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = readStored();
		if (stored) {
			setIds(stored.ids);
			setModes(stored.modes);
		}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify({
			ids,
			modes
		}));
	}, [
		ids,
		modes,
		ready
	]);
	const value = (0, import_react.useMemo)(() => {
		const lines = ids.flatMap((id) => {
			const block = getBlock(id);
			if (!block) return [];
			return [{
				block,
				modeId: activeMode(block, modes[id])?.id
			}];
		});
		const add = (id) => {
			if (!getBlock(id)) return;
			setIds((current) => current.includes(id) ? current : [...current, id]);
		};
		const toggle = (id) => {
			if (!getBlock(id)) return;
			setIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
		};
		return {
			ready,
			ids,
			lines,
			totals: tally(lines),
			add,
			toggle,
			remove: (id) => setIds((current) => current.filter((item) => item !== id)),
			setMode: (id, modeId) => {
				if (!getBlock(id)?.modes?.some((mode) => mode.id === modeId)) return;
				setModes((current) => ({
					...current,
					[id]: modeId
				}));
				setIds((current) => current.includes(id) ? current : [...current, id]);
			},
			clear: () => setIds([]),
			isSelected: (id) => ids.includes(id),
			modeFor: (block) => activeMode(block, modes[block.id])?.id
		};
	}, [
		ids,
		modes,
		ready
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackContext.Provider, {
		value,
		children
	});
}
function useStack() {
	const value = (0, import_react.useContext)(StackContext);
	if (!value) throw new Error("useStack must be used inside StackProvider");
	return value;
}
function priceCaption(line) {
	return blockPriceLine(line.block, line.modeId);
}
function RangeReadout({ totals }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "grid grid-cols-2 gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs uppercase tracking-widest text-faint",
				children: "Retainer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-display text-3xl leading-none tabular-nums text-fg",
				children: totals.monthly ? formatSpan(totals.monthly) : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-xs text-muted",
				children: totals.monthly ? "per month" : "no monthly blocks"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "text-xs uppercase tracking-widest text-faint",
				children: "Project"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 font-display text-3xl leading-none tabular-nums text-fg",
				children: totals.once ? formatSpan(totals.once) : "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "mt-1 text-xs text-muted",
				children: totals.once ? "one-time" : "no project blocks"
			})
		] })]
	});
}
var BRIEFS_KEY = "opsblock-briefs-v1";
var BANDS = [
	{
		id: "under-1",
		label: "Under $1M"
	},
	{
		id: "1-5",
		label: "$1M–$5M"
	},
	{
		id: "5-20",
		label: "$5M–$20M"
	},
	{
		id: "20-plus",
		label: "$20M+"
	}
];
function loadBriefs() {
	try {
		const raw = localStorage.getItem(BRIEFS_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((item) => {
			if (!item || typeof item !== "object") return false;
			const brief = item;
			return typeof brief.id === "string" && typeof brief.company === "string";
		});
	} catch {
		return [];
	}
}
function bandLabel(id) {
	return BANDS.find((band) => band.id === id)?.label ?? id;
}
function validate(input) {
	const errors = {};
	if (input.name.trim().length < 2) errors.name = "Name needs at least 2 characters.";
	if (input.company.trim().length < 2) errors.company = "Company needs at least 2 characters.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) errors.email = "Enter a valid email.";
	if (!BANDS.some((band) => band.id === input.revenue)) errors.revenue = "Select a revenue band.";
	if (input.note.trim().length > 800) errors.note = "Keep the note under 800 characters.";
	return errors;
}
function briefText(brief) {
	const blocks = brief.lines.length ? brief.lines.map((line) => `- ${line.name} — ${line.price}`).join("\n") : "- None selected. Exploratory.";
	return [
		"OPSBLOCK STACK BRIEF",
		`Company: ${brief.company}`,
		`Contact: ${brief.name} <${brief.email}>`,
		`Revenue: ${bandLabel(brief.revenue)}`,
		`Saved: ${brief.createdAt}`,
		"",
		"BLOCKS",
		blocks,
		"",
		"RETAINER RANGE",
		brief.retainer,
		"",
		"PROJECT RANGE",
		brief.project,
		"",
		"NOTE",
		brief.note.trim() || "—",
		"",
		"Ranges are published starting points, not a quote. Volume, entities, and hours set the final number."
	].join("\n");
}
function Engage() {
	const { lines, totals } = useStack();
	const [name, setName] = (0, import_react.useState)("");
	const [company, setCompany] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [revenue, setRevenue] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	const [briefs, setBriefs] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setBriefs(loadBriefs());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(BRIEFS_KEY, JSON.stringify(briefs));
	}, [briefs, ready]);
	const retainer = totals.monthly ? `${formatSpan(totals.monthly)} per month` : "No monthly blocks";
	const project = totals.once ? `${formatSpan(totals.once)} one-time` : "No project blocks";
	function onSubmit(event) {
		event.preventDefault();
		const nextErrors = validate({
			name,
			company,
			email,
			revenue,
			note
		});
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setStatus("");
			return;
		}
		const brief = {
			id: crypto.randomUUID(),
			createdAt: new Intl.DateTimeFormat("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			}).format(/* @__PURE__ */ new Date()),
			name: name.trim(),
			company: company.trim(),
			email: email.trim(),
			revenue,
			note: note.trim(),
			lines: lines.map((line) => ({
				name: line.block.name,
				price: blockPriceLine(line.block, line.modeId)
			})),
			retainer,
			project
		};
		setBriefs((current) => [brief, ...current].slice(0, 8));
		setNote("");
		setStatus(`Brief saved for ${brief.company}. It stays on this device — copy it into an email when you are ready to send it.`);
	}
	async function copyBrief(brief) {
		const text = briefText(brief);
		try {
			await navigator.clipboard.writeText(text);
			setCopied(brief.id);
		} catch {
			setCopied(null);
			setStatus("Clipboard is blocked here. The brief is on the page — select it and copy.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "engage",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: "Engage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
						children: "Put a name on the stack."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-muted",
						children: "This builds a brief from the blocks you selected and keeps it on this device. Nothing is sent to a server. Copy it when you want it in front of a person."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 flex flex-col gap-5",
						onSubmit,
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									error: errors.name,
									htmlFor: "brief-name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "brief-name",
										name: "name",
										autoComplete: "name",
										value: name,
										onChange: (event) => setName(event.target.value),
										className: "min-h-11 w-full border border-border bg-bg px-3 text-fg"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Company",
									error: errors.company,
									htmlFor: "brief-company",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "brief-company",
										name: "company",
										autoComplete: "organization",
										value: company,
										onChange: (event) => setCompany(event.target.value),
										className: "min-h-11 w-full border border-border bg-bg px-3 text-fg"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								error: errors.email,
								htmlFor: "brief-email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "brief-email",
									name: "email",
									type: "email",
									autoComplete: "email",
									inputMode: "email",
									value: email,
									onChange: (event) => setEmail(event.target.value),
									className: "min-h-11 w-full border border-border bg-bg px-3 text-fg"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: "text-sm text-muted",
									children: "Revenue band"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 grid grid-cols-2 gap-2",
									role: "radiogroup",
									"aria-label": "Revenue band",
									children: BANDS.map((band) => {
										const on = revenue === band.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											role: "radio",
											"aria-checked": on,
											onClick: () => setRevenue(band.id),
											className: on ? "min-h-11 border border-accent bg-surface text-sm text-fg" : "min-h-11 border border-border text-sm text-muted hover:text-fg",
											children: band.label
										}, band.id);
									})
								}),
								errors.revenue ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-accent",
									children: errors.revenue
								}) : null
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Note",
								error: errors.note,
								htmlFor: "brief-note",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "brief-note",
									name: "note",
									rows: 4,
									value: note,
									onChange: (event) => setNote(event.target.value),
									placeholder: "The hole you already know about.",
									className: "w-full border border-border bg-bg px-3 py-3 text-fg"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "inline-flex min-h-11 items-center justify-center bg-accent px-5 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg",
								children: "Save brief on this device"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								role: "status",
								children: status
							})
						]
					}),
					briefs.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 flex flex-col gap-3",
						children: [briefs.map((brief) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-border bg-surface p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl text-fg",
										children: brief.company
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-widest text-faint",
										children: brief.createdAt
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted",
									children: [
										brief.name,
										" · ",
										bandLabel(brief.revenue),
										" · ",
										brief.lines.length,
										" ",
										brief.lines.length === 1 ? "block" : "blocks"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "mt-3 max-h-48 overflow-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted",
									children: briefText(brief)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void copyBrief(brief),
									className: "mt-3 inline-flex min-h-11 items-center border border-border-strong px-4 text-sm text-fg hover:border-fg",
									children: copied === brief.id ? "Copied" : "Copy brief"
								})
							]
						}, brief.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setBriefs([]);
								setCopied(null);
							},
							className: "text-sm text-faint hover:text-accent",
							children: "Clear saved briefs"
						}) })]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-border bg-surface p-5 lg:col-span-5 lg:self-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-faint",
						children: "Live specification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-4xl leading-none text-fg",
						children: company.trim() || "Unnamed company"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [revenue ? bandLabel(revenue) : "Revenue band not set", name.trim() ? ` · ${name.trim()}` : ""]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeReadout, { totals })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex flex-col gap-3 border-t border-border pt-5",
						children: lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: "No blocks yet. The brief can still be exploratory."
						}) : lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: line.block.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right tabular-nums text-muted",
								children: blockPriceLine(line.block, line.modeId)
							})]
						}, line.block.id))
					}),
					note.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-muted",
						children: note.trim()
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/studio.webp",
						alt: "Three matte cubes on a concrete plinth, with an orange site wireframe and a finance dashboard on the wall behind them.",
						className: "mt-6 aspect-video w-full object-cover",
						loading: "lazy",
						decoding: "async"
					})
				]
			})]
		})
	});
}
function Field({ label, error, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor,
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-sm text-accent",
				children: error
			}) : null
		]
	});
}
var ICONS = {
	diagnostic: ScanSearch,
	collections: Banknote,
	payables: FileInput,
	books: BookOpen,
	desk: Headset,
	brand: Palette,
	web: Monitor,
	cfo: ChartLine,
	sop: Workflow,
	app: CodeXml,
	automation: Cog,
	controller: ShieldCheck,
	ops: Compass,
	ar: Receipt,
	support: Wrench,
	entities: Layers
};
function BlockIcon({ name, className }) {
	const Icon = ICONS[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		className,
		strokeWidth: 1.5,
		"aria-hidden": "true"
	});
}
var FILTERS = [
	{
		id: "all",
		label: "All eight"
	},
	{
		id: "entry",
		label: "Entry points"
	},
	{
		id: "retainer",
		label: "Retainers"
	},
	{
		id: "project",
		label: "Projects"
	}
];
function matches(block, filter) {
	if (filter === "all") return true;
	if (filter === "entry") return Boolean(block.entry);
	return block.kind === filter;
}
function Menu$1() {
	const stack = useStack();
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [openAdvanced, setOpenAdvanced] = (0, import_react.useState)(false);
	const visible = CORE.filter((block) => matches(block, filter));
	const synced = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!stack.ready || synced.current) return;
		synced.current = true;
		if (stack.lines.some((line) => line.block.layer === "advanced")) setOpenAdvanced(true);
	}, [stack.ready, stack.lines]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "scroll-mt-20 border-t border-border bg-raised",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-accent",
							children: "Public menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
							children: "Eight blocks. Nothing else required."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "These are the starting ranges for established small and midsize companies. Add a block to the stack to see the retainer and the one-time band side by side. It is a planning range, not a signed quote."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							role: "toolbar",
							"aria-label": "Filter the public menu",
							children: FILTERS.map((item) => {
								const pressed = filter === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": pressed,
									onClick: () => setFilter(item.id),
									className: pressed ? "inline-flex min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg" : "inline-flex min-h-11 items-center border border-border px-4 text-sm text-muted hover:border-border-strong hover:text-fg",
									children: item.label
								}, item.id);
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-4 sm:grid-cols-2",
							children: visible.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockCard, { block }) }, block.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:sticky lg:top-24 lg:max-h-screen lg:overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackPlate, {})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "next",
					className: "scroll-mt-20 mt-16 border-t border-border pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-widest text-faint",
									children: "Next layer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-5xl leading-none text-fg",
									children: "After you are in."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted",
									children: "Controller, ops support, automations, custom software, and the rest. Offered once a core block is underway, or after a diagnostic. You can still preview the bands here."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-expanded": openAdvanced,
							onClick: () => setOpenAdvanced((value) => !value),
							className: "inline-flex min-h-11 items-center justify-center border border-border-strong px-5 text-sm font-medium text-fg hover:border-fg",
							children: openAdvanced ? "Hide next-layer ranges" : "Show next-layer ranges"
						})]
					}), openAdvanced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
						children: ADVANCED.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockCard, { block }) }, block.id))
					}) : null]
				})
			]
		})
	});
}
function BlockCard({ block }) {
	const { isSelected, toggle, setMode, modeFor } = useStack();
	const selected = isSelected(block.id);
	const [scope, setScope] = (0, import_react.useState)(false);
	const modeId = modeFor(block);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: block.id,
		className: selected ? "flex h-full scroll-mt-24 flex-col border border-accent bg-surface p-5 shadow-ember" : "flex h-full scroll-mt-24 flex-col border border-border bg-surface p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-10 items-center justify-center border border-border text-fg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockIcon, {
						name: block.icon,
						className: "size-5"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [block.entry ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "border border-accent px-2 py-1 text-xs uppercase tracking-widest text-accent",
						children: "Entry"
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl leading-none text-faint",
						children: block.code
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-3xl leading-none text-fg",
				children: block.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex flex-wrap items-baseline gap-x-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl leading-none tabular-nums text-fg",
					children: block.figure
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: block.unit
				})]
			}),
			block.priceNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-accent",
				children: block.priceNote
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: block.summary
			}),
			selected && block.modes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs uppercase tracking-widest text-faint",
					children: "How to price it"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 grid grid-cols-2 gap-2",
					children: block.modes.map((mode) => {
						const on = modeId === mode.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": on,
							onClick: () => setMode(block.id, mode.id),
							className: on ? "min-h-11 border border-accent px-2 text-sm text-fg" : "min-h-11 border border-border px-2 text-sm text-muted hover:text-fg",
							children: mode.label
						}, mode.id);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-wrap gap-2 pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": selected,
					onClick: () => toggle(block.id),
					className: selected ? "inline-flex min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg" : "inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg",
					children: selected ? "In the stack" : "Add to stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-expanded": scope,
					onClick: () => setScope((value) => !value),
					className: "inline-flex min-h-11 items-center border border-border px-4 text-sm text-muted hover:text-fg",
					children: scope ? "Hide scope" : "Scope"
				})]
			}),
			scope ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 border-t border-border pt-4 text-sm",
				children: [block.includes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-faint",
					children: "Included"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-col gap-2 text-fg",
					children: block.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1.5 shrink-0 bg-accent",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})] }) : null, block.excludes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs uppercase tracking-widest text-faint",
					children: "Not included"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 flex flex-col gap-2 text-muted",
					children: block.excludes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1.5 shrink-0 border border-faint",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
					}, item))
				})] }) : null]
			}) : null
		]
	});
}
function StackPlate() {
	const { lines, totals, remove, clear, add } = useStack();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		id: "stack-summary",
		className: "scroll-mt-24 border border-border bg-bg",
		"aria-label": "Your stack",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-baseline justify-between border-b border-border px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-fg",
				children: "Your stack"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl tabular-nums text-faint",
				children: String(lines.length).padStart(2, "0")
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-5 px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RangeReadout, { totals }),
				lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Nothing selected. The menu is the product. Most companies should start with one door, not eight."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => add("diagnostic"),
						className: "inline-flex min-h-11 items-center justify-center border border-border-strong text-sm text-fg hover:border-fg",
						children: "Add the diagnostic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => add("collections"),
						className: "inline-flex min-h-11 items-center justify-center border border-border text-sm text-muted hover:text-fg",
						children: "Add collections"
					})]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-3 border-t border-border pt-4",
					children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-fg",
							children: line.block.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tabular-nums text-muted",
							children: priceCaption(line)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => remove(line.block.id),
							className: "min-h-11 px-2 text-xs uppercase tracking-widest text-faint hover:text-accent",
							children: "Remove"
						})]
					}, line.block.id))
				}),
				totals.notes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2 text-xs text-muted",
					children: totals.notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: note }, note))
				}) : null,
				totals.missingFinanceBase ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-accent",
					children: "Multi-entity pricing sits on bookkeeping, controller, or CFO. Add one of those or this adder has nothing to scale."
				}) : null,
				totals.openEnded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "A range marked + can run past the printed high."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-faint",
					children: "Starting points only. Final numbers follow volume, complexity, and results."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: clear,
						disabled: lines.length === 0,
						className: "inline-flex min-h-11 items-center justify-center border border-border text-sm text-muted disabled:opacity-40",
						children: "Clear"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#engage",
						className: "inline-flex min-h-11 items-center justify-center bg-accent text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg",
						children: "Brief this"
					})]
				})
			]
		})]
	});
}
var LINKS = [
	{
		href: "#menu",
		label: "Menu"
	},
	{
		href: "#approach",
		label: "Approach"
	},
	{
		href: "#next",
		label: "Next layer"
	},
	{
		href: "#engage",
		label: "Engage"
	}
];
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		id: "top",
		className: "sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "group flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 bg-accent",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl font-semibold tracking-wide text-fg",
							children: "OPSBLOCK"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-xs uppercase tracking-widest text-faint sm:inline",
							children: "Modular services"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					"aria-label": "Primary",
					children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted hover:text-fg",
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#engage",
						className: "inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg",
						children: "Brief a stack"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center border border-border text-fg lg:hidden",
							"aria-label": "Open menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": "true"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-40 bg-bg/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-bg px-6 py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "font-display text-4xl text-fg",
									children: "Menu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center border border-border text-fg",
										"aria-label": "Close menu",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
											className: "size-5",
											"aria-hidden": "true"
										})
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "sr-only",
								children: "Section links for the Opsblock site."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-10 flex flex-col gap-2",
								"aria-label": "Mobile",
								children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: link.href,
									onClick: () => setOpen(false),
									className: "border-b border-border py-4 font-display text-4xl text-fg",
									children: link.label
								}, link.href))
							})
						]
					})] })]
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-10 px-5 py-14 md:px-8 lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3 font-display text-5xl text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-2.5 bg-accent",
							"aria-hidden": "true"
						}), "OPSBLOCK"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-muted",
						children: "Modular management and operations. Pick the exact blocks your business needs. Ranges on this page are starting points — volume, entities, and hours set the final number."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-6 gap-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#menu",
								className: "text-muted hover:text-fg",
								children: "Public menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#next",
								className: "text-muted hover:text-fg",
								children: "Next layer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#engage",
								className: "text-muted hover:text-fg",
								children: "Engage"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-faint",
						children: "Built for companies doing roughly $1M–$20M+, and the work above that."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/mark-steel.jpg",
				alt: "A machined metal cube reading OPS BLOCK, inlaid with icons for finance, operations, and software.",
				className: "h-80 w-full object-cover lg:h-full",
				loading: "lazy",
				decoding: "async"
			})]
		})
	});
}
function Hero() {
	const { add } = useStack();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid lg:grid-cols-2 lg:min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "order-2 flex flex-col justify-center px-5 py-14 md:px-8 lg:order-1 lg:px-12 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: "Modular business services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-xl font-display text-6xl font-medium leading-none text-fg sm:text-7xl lg:text-8xl",
					children: "Pick the exact blocks your business needs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-lg text-muted",
					children: "Established companies don’t need another full-time seat or an all-in package. Opsblock is the menu — collections, books, payables, the front desk, brand, web, and a fractional CFO. Take the blocks that close a hole. The ranges are published."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							add("diagnostic");
							document.getElementById("menu")?.scrollIntoView({
								behavior: "smooth",
								block: "start"
							});
						},
						className: "inline-flex min-h-11 items-center justify-center bg-accent px-5 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg",
						children: "Start with a diagnostic"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#menu",
						className: "inline-flex min-h-11 items-center justify-center border border-border-strong px-5 text-sm font-medium text-fg hover:border-fg",
						children: "See the eight blocks"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-12 grid grid-cols-3 gap-4 border-t border-border pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Public menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-4xl leading-none text-fg",
							children: "8 blocks"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Built for"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-4xl leading-none text-fg",
							children: "$1–20M+"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-faint",
							children: "Success fee"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-4xl leading-none text-fg",
							children: "15–25%"
						})] })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative order-1 h-80 lg:order-2 lg:h-auto lg:min-h-screen",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/cube-glow.webp",
				alt: "A black tiled cube suspended in a dark room, with red light glowing underneath it.",
				className: "absolute inset-0 h-full w-full object-cover",
				fetchPriority: "high"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-bg to-transparent lg:block" })]
		})]
	});
}
function LeakBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative min-h-[32rem] border-y border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/leak.webp",
				alt: "A dark concrete block wall with dollar bills spilling out through cracked openings.",
				className: "absolute inset-0 h-full w-full object-cover",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "relative flex min-h-[32rem] items-end px-5 py-12 md:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-accent",
							children: "The leak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
							children: "Cash leaves through the boring cracks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Aging receivables. Invoices nobody coded. A close that slips. A phone that isn’t answered. Opsblock sells the block that plugs the specific hole — not a department you have to invent."
						})
					]
				})
			})
		]
	});
}
var CONTRAST = [
	{
		code: "01",
		title: "A full-time hire",
		body: "One seat, one skill, salary, and a ramp. Right when the work is truly full-time. Wrong when you need three kinds of help for ten hours a week."
	},
	{
		code: "02",
		title: "An all-in package",
		body: "You fund the parts you will not use so the seller can keep a tidy menu. The invoice is simple. The fit is not."
	},
	{
		code: "03",
		title: "Blocks",
		body: "A defined scope, a published range, and permission to stop at one. Add the next block when the first one proves the hole was real."
	}
];
function Position() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-5 py-20 md:px-8",
		"aria-labelledby": "position-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-faint",
					children: "Position"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "position-title",
					className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
					children: "What this is not."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-3 lg:col-span-8",
				children: CONTRAST.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl leading-none text-accent",
							children: item.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-3xl leading-none text-fg",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: item.body
						})
					]
				}, item.code))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 grid gap-px bg-border sm:grid-cols-4",
			children: [
				["Modular", "Buy the block. Leave the rest."],
				["Value-based", "Priced on the outcome, not our effort."],
				["The bench", "Accounting, collections, engineering, CPA / CFO."],
				["The door", "Diagnostic or collections. Not the full menu."]
			].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "bg-bg px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-fg",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: body
				})]
			}, title))
		})]
	});
}
function FilesBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "relative min-h-[28rem] border-y border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/files.webp",
				alt: "A pile of overdue invoices on the left, and black file shelves on the right labeled accounts payable, collections, and archived.",
				className: "absolute inset-0 h-full w-full object-cover object-center",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "relative flex min-h-[28rem] items-end px-5 py-12 md:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-accent",
							children: "The standard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
							children: "From the pile to the file."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: "Collections, payables, and the archive are different blocks. They share one rule: the work has an owner, a sequence, and a place it ends."
						})
					]
				})
			})
		]
	});
}
var STEPS = [
	{
		code: "01",
		title: "Enter",
		body: "Lead with a diagnostic or with collections. Warm introductions help. The full menu is not the opener."
	},
	{
		code: "02",
		title: "Assemble",
		body: "Add only the blocks the findings justify. Ongoing work is a retainer with volume tiers. Projects are fixed ranges."
	},
	{
		code: "03",
		title: "Go deeper",
		body: "Controller, ops support, automations, and custom software open once you are already engaged. They are scoped, not bundled."
	}
];
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "approach",
		className: "scroll-mt-20 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-faint",
					children: "Approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
					children: "Start at the hole. Then decide what else is worth buying."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 flex flex-col gap-6",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[4rem_1fr] gap-4 border-t border-border pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl leading-none text-accent",
							children: step.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl leading-none text-fg",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: step.body
						})] })]
					}, step.code))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-sm text-faint",
					children: "Public ranges stay public. Smaller or early work is occasional and temporary. It is not a reason to cut the rates on this page."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/mark-black.jpg",
				alt: "A matte black machined cube reading OPS BLOCK, set on a reflective surface.",
				className: "aspect-square w-full object-cover",
				loading: "lazy",
				decoding: "async"
			})]
		})
	});
}
function DiagnosticBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid border-b border-border lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/media/diagnostic.webp",
			alt: "Overhead photo of a staged financial report under a magnifying glass, marked up with red flags.",
			className: "h-80 w-full object-cover lg:h-full",
			loading: "lazy",
			decoding: "async"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center px-5 py-14 md:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-accent",
					children: "Entry block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
					children: "A diagnostic is a call and a short report."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-muted",
					children: "Findings, in order. The cash leaks. The blocks worth buying next. Not a forty-page performance. If collections is the obvious hole, you can start there instead and skip the tour."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3 text-sm text-fg sm:grid-cols-2",
					children: [
						"Process bottlenecks",
						"Collection gaps",
						"Quick wins",
						"A recommended stack"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 border border-border px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 bg-accent",
							"aria-hidden": "true"
						}), item]
					}, item))
				})
			]
		})]
	});
}
function Philosophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/metal.webp",
				alt: "Close-up of machined steel blocks, with red light catching some of the edges.",
				className: "absolute inset-0 h-full w-full object-cover",
				loading: "lazy",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/88" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: "Pricing"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-5xl leading-none text-fg sm:text-6xl",
						children: "Value delivered. Not how easy the work was."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 text-muted lg:col-span-7 lg:pt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Ongoing services are monthly retainers. Where volume matters — invoices, transactions, calls — the base covers a defined amount and the next tier is printed, not negotiated in the dark." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One-time work is a fixed range: diagnostic, brand, website, and custom builds. Collections is the exception on purpose: a base, plus 15–25% of cash actually recovered. Nothing for amounts that stay outstanding." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Anything past the eight public blocks is scoped after you are already a client." })
					]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StackProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#menu",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
			children: "Skip to the menu"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeakBand, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Position, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu$1, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilesBand, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagnosticBand, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Engage, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { Home as component };

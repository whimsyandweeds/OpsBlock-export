import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { blockPriceLine, formatSpan } from "@/data/blocks";
import { RangeReadout, useStack } from "@/components/ops/stack";

const BRIEFS_KEY = "opsblock-briefs-v1";

const BANDS = [
  { id: "under-1", label: "Under $1M" },
  { id: "1-5", label: "$1M–$5M" },
  { id: "5-20", label: "$5M–$20M" },
  { id: "20-plus", label: "$20M+" },
] as const;

type BandId = (typeof BANDS)[number]["id"];

type Brief = {
  id: string;
  createdAt: string;
  name: string;
  company: string;
  email: string;
  revenue: BandId;
  note: string;
  lines: { name: string; price: string }[];
  retainer: string;
  project: string;
};

type FieldErrors = Partial<Record<"name" | "company" | "email" | "revenue" | "note", string>>;

function loadBriefs(): Brief[] {
  try {
    const raw = localStorage.getItem(BRIEFS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is Brief => {
      if (!item || typeof item !== "object") return false;
      const brief = item as Partial<Brief>;
      return typeof brief.id === "string" && typeof brief.company === "string";
    });
  } catch {
    return [];
  }
}

function bandLabel(id: BandId): string {
  return BANDS.find((band) => band.id === id)?.label ?? id;
}

function validate(input: {
  name: string;
  company: string;
  email: string;
  revenue: string;
  note: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (input.name.trim().length < 2) errors.name = "Name needs at least 2 characters.";
  if (input.company.trim().length < 2) errors.company = "Company needs at least 2 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) errors.email = "Enter a valid email.";
  if (!BANDS.some((band) => band.id === input.revenue)) errors.revenue = "Select a revenue band.";
  if (input.note.trim().length > 800) errors.note = "Keep the note under 800 characters.";
  return errors;
}

export function briefText(brief: Brief): string {
  const blocks = brief.lines.length
    ? brief.lines.map((line) => `- ${line.name} — ${line.price}`).join("\n")
    : "- None selected. Exploratory.";
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
    "Ranges are published starting points, not a quote. Volume, entities, and hours set the final number.",
  ].join("\n");
}

export function Engage() {
  const { lines, totals } = useStack();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [revenue, setRevenue] = useState<string>("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setBriefs(loadBriefs());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(BRIEFS_KEY, JSON.stringify(briefs));
  }, [briefs, ready]);

  const retainer = totals.monthly ? `${formatSpan(totals.monthly)} per month` : "No monthly blocks";
  const project = totals.once ? `${formatSpan(totals.once)} one-time` : "No project blocks";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextErrors = validate({ name, company, email, revenue, note });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }
    const brief: Brief = {
      id: crypto.randomUUID(),
      createdAt: new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      revenue: revenue as BandId,
      note: note.trim(),
      lines: lines.map((line) => ({
        name: line.block.name,
        price: blockPriceLine(line.block, line.modeId),
      })),
      retainer,
      project,
    };
    setBriefs((current) => [brief, ...current].slice(0, 8));
    setNote("");
    setStatus(`Brief saved for ${brief.company}. It stays on this device — copy it into an email when you are ready to send it.`);
  }

  async function copyBrief(brief: Brief) {
    const text = briefText(brief);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(brief.id);
    } catch {
      setCopied(null);
      setStatus("Clipboard is blocked here. The brief is on the page — select it and copy.");
    }
  }

  return (
    <section id="engage" className="scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-widest text-accent">Engage</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
            Put a name on the stack.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            This builds a brief from the blocks you selected and keeps it on this device. Nothing is sent to a
            server. Copy it when you want it in front of a person.
          </p>

          <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name} htmlFor="brief-name">
                <input
                  id="brief-name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="min-h-11 w-full border border-border bg-bg px-3 text-fg"
                />
              </Field>
              <Field label="Company" error={errors.company} htmlFor="brief-company">
                <input
                  id="brief-company"
                  name="company"
                  autoComplete="organization"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="min-h-11 w-full border border-border bg-bg px-3 text-fg"
                />
              </Field>
            </div>
            <Field label="Email" error={errors.email} htmlFor="brief-email">
              <input
                id="brief-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-11 w-full border border-border bg-bg px-3 text-fg"
              />
            </Field>
            <fieldset>
              <legend className="text-sm text-muted">Revenue band</legend>
              <div className="mt-2 grid grid-cols-2 gap-2" role="radiogroup" aria-label="Revenue band">
                {BANDS.map((band) => {
                  const on = revenue === band.id;
                  return (
                    <button
                      key={band.id}
                      type="button"
                      role="radio"
                      aria-checked={on}
                      onClick={() => setRevenue(band.id)}
                      className={
                        on
                          ? "min-h-11 border border-accent bg-surface text-sm text-fg"
                          : "min-h-11 border border-border text-sm text-muted hover:text-fg"
                      }
                    >
                      {band.label}
                    </button>
                  );
                })}
              </div>
              {errors.revenue ? <p className="mt-2 text-sm text-accent">{errors.revenue}</p> : null}
            </fieldset>
            <Field label="Note" error={errors.note} htmlFor="brief-note">
              <textarea
                id="brief-note"
                name="note"
                rows={4}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="The hole you already know about."
                className="w-full border border-border bg-bg px-3 py-3 text-fg"
              />
            </Field>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center bg-accent px-5 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg"
            >
              Save brief on this device
            </button>
            <p className="text-sm text-muted" role="status">
              {status}
            </p>
          </form>

          {briefs.length > 0 ? (
            <ul className="mt-8 flex flex-col gap-3">
              {briefs.map((brief) => (
                <li key={brief.id} className="border border-border bg-surface p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-display text-2xl text-fg">{brief.company}</p>
                    <p className="text-xs uppercase tracking-widest text-faint">{brief.createdAt}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {brief.name} · {bandLabel(brief.revenue)} · {brief.lines.length}{" "}
                    {brief.lines.length === 1 ? "block" : "blocks"}
                  </p>
                  <pre className="mt-3 max-h-48 overflow-auto whitespace-pre-wrap font-sans text-xs leading-relaxed text-muted">
                    {briefText(brief)}
                  </pre>
                  <button
                    type="button"
                    onClick={() => void copyBrief(brief)}
                    className="mt-3 inline-flex min-h-11 items-center border border-border-strong px-4 text-sm text-fg hover:border-fg"
                  >
                    {copied === brief.id ? "Copied" : "Copy brief"}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setBriefs([]);
                    setCopied(null);
                  }}
                  className="text-sm text-faint hover:text-accent"
                >
                  Clear saved briefs
                </button>
              </li>
            </ul>
          ) : null}
        </div>

        <aside className="border border-border bg-surface p-5 lg:col-span-5 lg:self-start">
          <p className="text-xs uppercase tracking-widest text-faint">Live specification</p>
          <p className="mt-3 font-display text-4xl leading-none text-fg">
            {company.trim() || "Unnamed company"}
          </p>
          <p className="mt-2 text-sm text-muted">
            {revenue ? bandLabel(revenue as BandId) : "Revenue band not set"}
            {name.trim() ? ` · ${name.trim()}` : ""}
          </p>
          <div className="mt-6">
            <RangeReadout totals={totals} />
          </div>
          <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-5">
            {lines.length === 0 ? (
              <li className="text-sm text-muted">No blocks yet. The brief can still be exploratory.</li>
            ) : (
              lines.map((line) => (
                <li key={line.block.id} className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="text-fg">{line.block.name}</span>
                  <span className="text-right tabular-nums text-muted">
                    {blockPriceLine(line.block, line.modeId)}
                  </span>
                </li>
              ))
            )}
          </ul>
          {note.trim() ? <p className="mt-5 text-sm text-muted">{note.trim()}</p> : null}
          <img
            src="/media/studio.webp"
            alt="Three matte cubes on a concrete plinth, with an orange site wireframe and a finance dashboard on the wall behind them."
            className="mt-6 aspect-video w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-sm text-muted">{label}</span>
      <span className="mt-2 block">{children}</span>
      {error ? <span className="mt-2 block text-sm text-accent">{error}</span> : null}
    </label>
  );
}

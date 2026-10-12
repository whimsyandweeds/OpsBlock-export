import { useEffect, useRef, useState } from "react";
import { ADVANCED, CORE, type Block } from "@/data/blocks";
import { BlockIcon } from "@/components/ops/icons";
import { RangeReadout, priceCaption, useStack } from "@/components/ops/stack";

type Filter = "all" | "retainer" | "project" | "entry";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All eight" },
  { id: "entry", label: "Entry points" },
  { id: "retainer", label: "Retainers" },
  { id: "project", label: "Projects" },
];

function matches(block: Block, filter: Filter): boolean {
  if (filter === "all") return true;
  if (filter === "entry") return Boolean(block.entry);
  return block.kind === filter;
}

export function Menu() {
  const stack = useStack();
  const [filter, setFilter] = useState<Filter>("all");
  const [openAdvanced, setOpenAdvanced] = useState(false);
  const visible = CORE.filter((block) => matches(block, filter));

  const synced = useRef(false);

  useEffect(() => {
    if (!stack.ready || synced.current) return;
    synced.current = true;
    if (stack.lines.some((line) => line.block.layer === "advanced")) setOpenAdvanced(true);
  }, [stack.ready, stack.lines]);

  return (
    <section id="menu" className="scroll-mt-20 border-t border-border bg-raised">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-accent">Public menu</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">Eight blocks. Nothing else required.</h2>
          <p className="mt-4 text-muted">
            These are the starting ranges for established small and midsize companies. Add a block to the stack
            to see the retainer and the one-time band side by side. It is a planning range, not a signed quote.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter the public menu">
              {FILTERS.map((item) => {
                const pressed = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={pressed}
                    onClick={() => setFilter(item.id)}
                    className={
                      pressed
                        ? "inline-flex min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg"
                        : "inline-flex min-h-11 items-center border border-border px-4 text-sm text-muted hover:border-border-strong hover:text-fg"
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {visible.map((block) => (
                <li key={block.id}>
                  <BlockCard block={block} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 lg:max-h-screen lg:overflow-y-auto">
              <StackPlate />
            </div>
          </div>
        </div>

        <div id="next" className="scroll-mt-20 mt-16 border-t border-border pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-faint">Next layer</p>
              <h2 className="mt-3 font-display text-5xl leading-none text-fg">After you are in.</h2>
              <p className="mt-4 text-muted">
                Controller, ops support, automations, custom software, and the rest. Offered once a core block
                is underway, or after a diagnostic. You can still preview the bands here.
              </p>
            </div>
            <button
              type="button"
              aria-expanded={openAdvanced}
              onClick={() => setOpenAdvanced((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center border border-border-strong px-5 text-sm font-medium text-fg hover:border-fg"
            >
              {openAdvanced ? "Hide next-layer ranges" : "Show next-layer ranges"}
            </button>
          </div>
          {openAdvanced ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {ADVANCED.map((block) => (
                <li key={block.id}>
                  <BlockCard block={block} />
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function BlockCard({ block }: { block: Block }) {
  const { isSelected, toggle, setMode, modeFor } = useStack();
  const selected = isSelected(block.id);
  const [scope, setScope] = useState(false);
  const modeId = modeFor(block);

  return (
    <article
      id={block.id}
      className={
        selected
          ? "flex h-full scroll-mt-24 flex-col border border-accent bg-surface p-5 shadow-ember"
          : "flex h-full scroll-mt-24 flex-col border border-border bg-surface p-5"
      }
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex size-10 items-center justify-center border border-border text-fg">
          <BlockIcon name={block.icon} className="size-5" />
        </span>
        <div className="flex items-center gap-2">
          {block.entry ? (
            <span className="border border-accent px-2 py-1 text-xs uppercase tracking-widest text-accent">Entry</span>
          ) : null}
          <span className="font-display text-2xl leading-none text-faint">{block.code}</span>
        </div>
      </div>
      <h3 className="mt-5 font-display text-3xl leading-none text-fg">{block.name}</h3>
      <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-4xl leading-none tabular-nums text-fg">{block.figure}</span>
        <span className="text-sm text-muted">{block.unit}</span>
      </p>
      {block.priceNote ? <p className="mt-2 text-sm text-accent">{block.priceNote}</p> : null}
      <p className="mt-4 text-sm text-muted">{block.summary}</p>

      {selected && block.modes ? (
        <fieldset className="mt-4">
          <legend className="text-xs uppercase tracking-widest text-faint">How to price it</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {block.modes.map((mode) => {
              const on = modeId === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setMode(block.id, mode.id)}
                  className={
                    on
                      ? "min-h-11 border border-accent px-2 text-sm text-fg"
                      : "min-h-11 border border-border px-2 text-sm text-muted hover:text-fg"
                  }
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <button
          type="button"
          aria-pressed={selected}
          onClick={() => toggle(block.id)}
          className={
            selected
              ? "inline-flex min-h-11 items-center bg-fg px-4 text-sm font-medium text-bg"
              : "inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg"
          }
        >
          {selected ? "In the stack" : "Add to stack"}
        </button>
        <button
          type="button"
          aria-expanded={scope}
          onClick={() => setScope((value) => !value)}
          className="inline-flex min-h-11 items-center border border-border px-4 text-sm text-muted hover:text-fg"
        >
          {scope ? "Hide scope" : "Scope"}
        </button>
      </div>

      {scope ? (
        <div className="mt-5 border-t border-border pt-4 text-sm">
          {block.includes.length > 0 ? (
            <>
              <p className="text-xs uppercase tracking-widest text-faint">Included</p>
              <ul className="mt-2 flex flex-col gap-2 text-fg">
                {block.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {block.excludes.length > 0 ? (
            <>
              <p className="mt-4 text-xs uppercase tracking-widest text-faint">Not included</p>
              <ul className="mt-2 flex flex-col gap-2 text-muted">
                {block.excludes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 border border-faint" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function StackPlate() {
  const { lines, totals, remove, clear, add } = useStack();

  return (
    <aside id="stack-summary" className="scroll-mt-24 border border-border bg-bg" aria-label="Your stack">
      <header className="flex items-baseline justify-between border-b border-border px-5 py-4">
        <h2 className="font-display text-3xl text-fg">Your stack</h2>
        <p className="font-display text-2xl tabular-nums text-faint">{String(lines.length).padStart(2, "0")}</p>
      </header>
      <div className="flex flex-col gap-5 px-5 py-5">
        <RangeReadout totals={totals} />
        {lines.length === 0 ? (
          <div>
            <p className="text-sm text-muted">
              Nothing selected. The menu is the product. Most companies should start with one door, not eight.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => add("diagnostic")}
                className="inline-flex min-h-11 items-center justify-center border border-border-strong text-sm text-fg hover:border-fg"
              >
                Add the diagnostic
              </button>
              <button
                type="button"
                onClick={() => add("collections")}
                className="inline-flex min-h-11 items-center justify-center border border-border text-sm text-muted hover:text-fg"
              >
                Add collections
              </button>
            </div>
          </div>
        ) : (
          <ul className="flex flex-col gap-3 border-t border-border pt-4">
            {lines.map((line) => (
              <li key={line.block.id} className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-fg">{line.block.name}</p>
                  <p className="text-xs tabular-nums text-muted">{priceCaption(line)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => remove(line.block.id)}
                  className="min-h-11 px-2 text-xs uppercase tracking-widest text-faint hover:text-accent"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {totals.notes.length > 0 ? (
          <ul className="flex flex-col gap-2 text-xs text-muted">
            {totals.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
        {totals.missingFinanceBase ? (
          <p className="text-xs text-accent">
            Multi-entity pricing sits on bookkeeping, controller, or CFO. Add one of those or this adder has
            nothing to scale.
          </p>
        ) : null}
        {totals.openEnded ? (
          <p className="text-xs text-faint">A range marked + can run past the printed high.</p>
        ) : null}
        <p className="text-xs text-faint">
          Starting points only. Final numbers follow volume, complexity, and results.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={clear}
            disabled={lines.length === 0}
            className="inline-flex min-h-11 items-center justify-center border border-border text-sm text-muted disabled:opacity-40"
          >
            Clear
          </button>
          <a
            href="#engage"
            className="inline-flex min-h-11 items-center justify-center bg-accent text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg"
          >
            Brief this
          </a>
        </div>
      </div>
    </aside>
  );
}

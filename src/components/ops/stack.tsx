import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  activeMode,
  blockPriceLine,
  formatSpan,
  getBlock,
  tally,
  type Block,
  type StackLine,
  type Tally,
} from "@/data/blocks";

const STORAGE_KEY = "opsblock-stack-v1";

type StackState = {
  ready: boolean;
  ids: string[];
  lines: StackLine[];
  totals: Tally;
  add: (id: string) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  setMode: (id: string, modeId: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
  modeFor: (block: Block) => string | undefined;
};

const StackContext = createContext<StackState | null>(null);

function readStored(): { ids: string[]; modes: Record<string, string> } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ids?: unknown; modes?: unknown };
    const ids = Array.isArray(parsed.ids)
      ? parsed.ids.filter((id): id is string => typeof id === "string" && Boolean(getBlock(id)))
      : [];
    const modes: Record<string, string> = {};
    if (parsed.modes && typeof parsed.modes === "object") {
      for (const [key, value] of Object.entries(parsed.modes)) {
        const block = getBlock(key);
        if (block?.modes?.some((mode) => mode.id === value)) modes[key] = value as string;
      }
    }
    return { ids, modes };
  } catch {
    return null;
  }
}

export function StackProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [modes, setModes] = useState<Record<string, string>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      setIds(stored.ids);
      setModes(stored.modes);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ids, modes }));
  }, [ids, modes, ready]);

  const value = useMemo<StackState>(() => {
    const lines: StackLine[] = ids.flatMap((id) => {
      const block = getBlock(id);
      if (!block) return [];
      const mode = activeMode(block, modes[id]);
      return [{ block, modeId: mode?.id }];
    });

    const add = (id: string) => {
      if (!getBlock(id)) return;
      setIds((current) => (current.includes(id) ? current : [...current, id]));
    };

    const toggle = (id: string) => {
      if (!getBlock(id)) return;
      setIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
    };

    return {
      ready,
      ids,
      lines,
      totals: tally(lines),
      add,
      toggle,
      remove: (id: string) => setIds((current) => current.filter((item) => item !== id)),
      setMode: (id: string, modeId: string) => {
        const block = getBlock(id);
        if (!block?.modes?.some((mode) => mode.id === modeId)) return;
        setModes((current) => ({ ...current, [id]: modeId }));
        setIds((current) => (current.includes(id) ? current : [...current, id]));
      },
      clear: () => setIds([]),
      isSelected: (id: string) => ids.includes(id),
      modeFor: (block: Block) => activeMode(block, modes[block.id])?.id,
    };
  }, [ids, modes, ready]);

  return <StackContext.Provider value={value}>{children}</StackContext.Provider>;
}

export function useStack(): StackState {
  const value = useContext(StackContext);
  if (!value) throw new Error("useStack must be used inside StackProvider");
  return value;
}

export function priceCaption(line: StackLine): string {
  return blockPriceLine(line.block, line.modeId);
}

export function RangeReadout({ totals }: { totals: Tally }) {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <div>
        <dt className="text-xs uppercase tracking-widest text-faint">Retainer</dt>
        <dd className="mt-1 font-display text-3xl leading-none tabular-nums text-fg">
          {totals.monthly ? formatSpan(totals.monthly) : "—"}
        </dd>
        <dd className="mt-1 text-xs text-muted">{totals.monthly ? "per month" : "no monthly blocks"}</dd>
      </div>
      <div>
        <dt className="text-xs uppercase tracking-widest text-faint">Project</dt>
        <dd className="mt-1 font-display text-3xl leading-none tabular-nums text-fg">
          {totals.once ? formatSpan(totals.once) : "—"}
        </dd>
        <dd className="mt-1 text-xs text-muted">{totals.once ? "one-time" : "no project blocks"}</dd>
      </div>
    </dl>
  );
}

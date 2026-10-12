import {
  Banknote,
  BookOpen,
  Code2,
  Cog,
  Compass,
  FileInput,
  Headset,
  Layers,
  LineChart,
  Monitor,
  Palette,
  Receipt,
  ScanSearch,
  ShieldCheck,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/blocks";

const ICONS: Record<IconName, LucideIcon> = {
  diagnostic: ScanSearch,
  collections: Banknote,
  payables: FileInput,
  books: BookOpen,
  desk: Headset,
  brand: Palette,
  web: Monitor,
  cfo: LineChart,
  sop: Workflow,
  app: Code2,
  automation: Cog,
  controller: ShieldCheck,
  ops: Compass,
  ar: Receipt,
  support: Wrench,
  entities: Layers,
};

export function BlockIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}

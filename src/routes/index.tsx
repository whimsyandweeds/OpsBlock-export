import { createFileRoute } from "@tanstack/react-router";
import { Engage } from "@/components/ops/engage";
import { Menu } from "@/components/ops/menu";
import { SiteFooter, SiteNav } from "@/components/ops/nav";
import { Hero } from "@/components/ops/hero";
import { Approach, DiagnosticBand, FilesBand, LeakBand, Philosophy, Position } from "@/components/ops/story";
import { StackProvider } from "@/components/ops/stack";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <StackProvider>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to the menu
      </a>
      <SiteNav />
      <main>
        <Hero />
        <LeakBand />
        <Position />
        <Menu />
        <FilesBand />
        <Approach />
        <DiagnosticBand />
        <Philosophy />
        <Engage />
      </main>
      <SiteFooter />
    </StackProvider>
  );
}

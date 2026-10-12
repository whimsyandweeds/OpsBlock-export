import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#menu", label: "Menu" },
  { href: "#approach", label: "Approach" },
  { href: "#next", label: "Next layer" },
  { href: "#engage", label: "Engage" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="size-2.5 bg-accent" aria-hidden="true" />
          <span className="font-display text-2xl font-semibold tracking-wide text-fg">OPSBLOCK</span>
          <span className="hidden text-xs uppercase tracking-widest text-faint sm:inline">Modular services</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-fg">
              {link.label}
            </a>
          ))}
          <a
            href="#engage"
            className="inline-flex min-h-11 items-center bg-accent px-4 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg"
          >
            Brief a stack
          </a>
        </nav>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-border text-fg lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-40 bg-bg/80" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-bg px-6 py-6">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-4xl text-fg">Menu</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex size-11 items-center justify-center border border-border text-fg"
                    aria-label="Close menu"
                  >
                    <X className="size-5" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">Section links for the Opsblock site.</Dialog.Description>
              <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-display text-4xl text-fg"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10 px-5 py-14 md:px-8 lg:px-12">
          <div>
            <p className="flex items-center gap-3 font-display text-5xl text-fg">
              <span className="size-2.5 bg-accent" aria-hidden="true" />
              OPSBLOCK
            </p>
            <p className="mt-4 max-w-md text-muted">
              Modular management and operations. Pick the exact blocks your business needs. Ranges on this
              page are starting points — volume, entities, and hours set the final number.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="#menu" className="text-muted hover:text-fg">
              Public menu
            </a>
            <a href="#next" className="text-muted hover:text-fg">
              Next layer
            </a>
            <a href="#engage" className="text-muted hover:text-fg">
              Engage
            </a>
          </div>
          <p className="text-xs text-faint">Built for companies doing roughly $1M–$20M+, and the work above that.</p>
        </div>
        <img
          src="/media/mark-steel.jpg"
          alt="A machined metal cube reading OPS BLOCK, inlaid with icons for finance, operations, and software."
          className="h-80 w-full object-cover lg:h-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </footer>
  );
}

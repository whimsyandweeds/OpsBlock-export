export function LeakBand() {
  return (
    <figure className="relative min-h-[32rem] border-y border-border">
      <img
        src="/media/leak.webp"
        alt="A dark concrete block wall with dollar bills spilling out through cracked openings."
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/20" />
      <figcaption className="relative flex min-h-[32rem] items-end px-5 py-12 md:px-8 lg:px-12">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-accent">The leak</p>
          <p className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
            Cash leaves through the boring cracks.
          </p>
          <p className="mt-4 text-muted">
            Aging receivables. Invoices nobody coded. A close that slips. A phone that isn’t answered. Opsblock
            sells the block that plugs the specific hole — not a department you have to invent.
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

const CONTRAST = [
  {
    code: "01",
    title: "A full-time hire",
    body: "One seat, one skill, salary, and a ramp. Right when the work is truly full-time. Wrong when you need three kinds of help for ten hours a week.",
  },
  {
    code: "02",
    title: "An all-in package",
    body: "You fund the parts you will not use so the seller can keep a tidy menu. The invoice is simple. The fit is not.",
  },
  {
    code: "03",
    title: "Blocks",
    body: "A defined scope, a published range, and permission to stop at one. Add the next block when the first one proves the hole was real.",
  },
];

export function Position() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8" aria-labelledby="position-title">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-widest text-faint">Position</p>
          <h2 id="position-title" className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
            What this is not.
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
          {CONTRAST.map((item) => (
            <li key={item.code} className="border border-border bg-surface p-5">
              <p className="font-display text-4xl leading-none text-accent">{item.code}</p>
              <h3 className="mt-4 font-display text-3xl leading-none text-fg">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="mt-8 grid gap-px bg-border sm:grid-cols-4">
        {[
          ["Modular", "Buy the block. Leave the rest."],
          ["Value-based", "Priced on the outcome, not our effort."],
          ["The bench", "Accounting, collections, engineering, CPA / CFO."],
          ["The door", "Diagnostic or collections. Not the full menu."],
        ].map(([title, body]) => (
          <li key={title} className="bg-bg px-5 py-5">
            <p className="font-display text-2xl text-fg">{title}</p>
            <p className="mt-1 text-sm text-muted">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FilesBand() {
  return (
    <figure className="relative min-h-[28rem] border-y border-border">
      <img
        src="/media/files.webp"
        alt="A pile of overdue invoices on the left, and black file shelves on the right labeled accounts payable, collections, and archived."
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent" />
      <figcaption className="relative flex min-h-[28rem] items-end px-5 py-12 md:px-8 lg:px-12">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-widest text-accent">The standard</p>
          <p className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">From the pile to the file.</p>
          <p className="mt-4 text-muted">
            Collections, payables, and the archive are different blocks. They share one rule: the work has an
            owner, a sequence, and a place it ends.
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

const STEPS = [
  {
    code: "01",
    title: "Enter",
    body: "Lead with a diagnostic or with collections. Warm introductions help. The full menu is not the opener.",
  },
  {
    code: "02",
    title: "Assemble",
    body: "Add only the blocks the findings justify. Ongoing work is a retainer with volume tiers. Projects are fixed ranges.",
  },
  {
    code: "03",
    title: "Go deeper",
    body: "Controller, ops support, automations, and custom software open once you are already engaged. They are scoped, not bundled.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-faint">Approach</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
            Start at the hole. Then decide what else is worth buying.
          </h2>
          <ol className="mt-10 flex flex-col gap-6">
            {STEPS.map((step) => (
              <li key={step.code} className="grid grid-cols-[4rem_1fr] gap-4 border-t border-border pt-6">
                <p className="font-display text-3xl leading-none text-accent">{step.code}</p>
                <div>
                  <h3 className="font-display text-3xl leading-none text-fg">{step.title}</h3>
                  <p className="mt-2 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-faint">
            Public ranges stay public. Smaller or early work is occasional and temporary. It is not a reason to
            cut the rates on this page.
          </p>
        </div>
        <img
          src="/media/mark-black.jpg"
          alt="A matte black machined cube reading OPS BLOCK, set on a reflective surface."
          className="aspect-square w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

export function DiagnosticBand() {
  return (
    <section className="grid border-b border-border lg:grid-cols-2">
      <img
        src="/media/diagnostic.webp"
        alt="Overhead photo of a staged financial report under a magnifying glass, marked up with red flags."
        className="h-80 w-full object-cover lg:h-full"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col justify-center px-5 py-14 md:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-widest text-accent">Entry block</p>
        <h2 className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
          A diagnostic is a call and a short report.
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          Findings, in order. The cash leaks. The blocks worth buying next. Not a forty-page performance. If
          collections is the obvious hole, you can start there instead and skip the tour.
        </p>
        <ul className="mt-8 grid gap-3 text-sm text-fg sm:grid-cols-2">
          {["Process bottlenecks", "Collection gaps", "Quick wins", "A recommended stack"].map((item) => (
            <li key={item} className="flex items-center gap-3 border border-border px-4 py-3">
              <span className="size-1.5 bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="relative border-b border-border">
      <img
        src="/media/metal.webp"
        alt="Close-up of machined steel blocks, with red light catching some of the edges."
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-bg/88" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-widest text-accent">Pricing</p>
          <h2 className="mt-3 font-display text-5xl leading-none text-fg sm:text-6xl">
            Value delivered. Not how easy the work was.
          </h2>
        </div>
        <div className="flex flex-col gap-5 text-muted lg:col-span-7 lg:pt-10">
          <p>
            Ongoing services are monthly retainers. Where volume matters — invoices, transactions, calls — the
            base covers a defined amount and the next tier is printed, not negotiated in the dark.
          </p>
          <p>
            One-time work is a fixed range: diagnostic, brand, website, and custom builds. Collections is the
            exception on purpose: a base, plus 15–25% of cash actually recovered. Nothing for amounts that
            stay outstanding.
          </p>
          <p>Anything past the eight public blocks is scoped after you are already a client.</p>
        </div>
      </div>
    </section>
  );
}

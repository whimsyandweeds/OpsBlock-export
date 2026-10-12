import { useStack } from "@/components/ops/stack";

export function Hero() {
  const { add } = useStack();

  return (
    <section className="grid lg:grid-cols-2 lg:min-h-screen">
      <div className="order-2 flex flex-col justify-center px-5 py-14 md:px-8 lg:order-1 lg:px-12 lg:py-20">
        <p className="text-xs uppercase tracking-widest text-accent">Modular business services</p>
        <h1 className="mt-4 max-w-xl font-display text-6xl font-medium leading-none text-fg sm:text-7xl lg:text-8xl">
          Pick the exact blocks your business needs.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted">
          Established companies don’t need another full-time seat or an all-in package. Opsblock is the menu —
          collections, books, payables, the front desk, brand, web, and a fractional CFO. Take the blocks that
          close a hole. The ranges are published.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              add("diagnostic");
              document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex min-h-11 items-center justify-center bg-accent px-5 text-sm font-medium text-accent-fg hover:bg-fg hover:text-bg"
          >
            Start with a diagnostic
          </button>
          <a
            href="#menu"
            className="inline-flex min-h-11 items-center justify-center border border-border-strong px-5 text-sm font-medium text-fg hover:border-fg"
          >
            See the eight blocks
          </a>
        </div>
        <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-6">
          <div>
            <dt className="text-xs uppercase tracking-widest text-faint">Public menu</dt>
            <dd className="mt-2 font-display text-4xl leading-none text-fg">8 blocks</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-faint">Built for</dt>
            <dd className="mt-2 font-display text-4xl leading-none text-fg">$1–20M+</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-faint">Success fee</dt>
            <dd className="mt-2 font-display text-4xl leading-none text-fg">15–25%</dd>
          </div>
        </dl>
      </div>
      <div className="relative order-1 h-80 lg:order-2 lg:h-auto lg:min-h-screen">
        <img
          src="/media/cube-glow.webp"
          alt="A black tiled cube suspended in a dark room, with red light glowing underneath it."
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-bg to-transparent lg:block" />
      </div>
    </section>
  );
}

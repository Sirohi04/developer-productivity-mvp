export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Developer Productivity MVP
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Metrics to Insight to Action
          </h1>
        </div>

        <div className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 md:block">
          IC View
        </div>
      </div>
    </header>
  );
}
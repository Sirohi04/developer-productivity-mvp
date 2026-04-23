export default function ActionList({ actions }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
        Action Plan
      </p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        Recommended Next Steps
      </h3>

      <div className="mt-5 space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl bg-slate-50 px-4 py-4"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
              {index + 1}
            </div>
            <p className="text-sm leading-6 text-slate-700">{action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
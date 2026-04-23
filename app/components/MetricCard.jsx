export default function MetricCard({ title, value, unit, description, accent }) {
  const accentMap = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    amber: "from-amber-500 to-orange-500",
    green: "from-emerald-500 to-teal-500",
    red: "from-rose-500 to-red-500",
  };

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${accentMap[accent] || accentMap.blue}`} />
      <p className="mt-4 text-sm font-medium text-slate-500">{title}</p>

      <div className="mt-2 flex items-end gap-1">
        <h3 className="text-4xl font-bold text-slate-900">{value}</h3>
        {unit && <span className="pb-1 text-sm font-medium text-slate-500">{unit}</span>}
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
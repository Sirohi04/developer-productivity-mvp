export default function InsightBox({ title, text, tone = "blue" }) {
  const tones = {
    blue: "border-blue-200 bg-blue-50 text-blue-900",
    red: "border-red-200 bg-red-50 text-red-900",
    green: "border-green-200 bg-green-50 text-green-900",
    amber: "border-amber-200 bg-amber-50 text-amber-900",
  };

  return (
    <div className={`rounded-3xl border p-6 shadow-sm ${tones[tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
        Interpretation
      </p>
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-sm leading-7">{text}</p>
    </div>
  );
}
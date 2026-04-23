import Header from "./components/Header";
import MetricCard from "./components/MetricCard";
import InsightBox from "./components/InsightBox";
import ActionList from "./components/ActionList";

async function getMetrics() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/metrics`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch metrics");
  }

  return res.json();
}

function interpretMetrics(metrics) {
  let story = "";
  let tone = "blue";
  const actions = [];

  if (metrics.bugRate > 0.15) {
    story =
      "The bug rate is relatively high, which suggests quality issues may be reaching production. This often reduces release confidence and increases rework for the developer.";
    tone = "red";
    actions.push("Increase pre-release testing and strengthen PR review quality.");
  }

  if (metrics.leadTime > 4) {
    story +=
      " Lead time is also elevated, which may indicate review delays, handoff friction, or slow deployment flow.";
    tone = "amber";
    actions.push("Break work into smaller pull requests so reviews and merges happen faster.");
  }

  if (metrics.deploymentFrequency < 4) {
    story +=
      " Deployment frequency is on the lower side, meaning changes may be bundled together instead of being shipped continuously.";
    actions.push("Ship smaller changes more frequently to create a healthier release rhythm.");
  }

  if (!story) {
    story =
      "The overall metrics look healthy. Delivery and quality seem balanced, with no major bottleneck visible from this simplified monthly snapshot.";
    tone = "green";
    actions.push("Maintain a steady release rhythm and continue using small PRs.");
    actions.push("Review monthly trends regularly to catch issues before they grow.");
  }

  if (actions.length < 2) {
    actions.push("Review the workflow and identify the single biggest source of delay this month.");
  }

  return { story, tone, actions };
}

function getHealthScore(metrics) {
  let score = 100;

  if (metrics.leadTime > 4) score -= 15;
  if (metrics.cycleTime > 3) score -= 10;
  if (metrics.bugRate > 0.15) score -= 25;
  if (metrics.deploymentFrequency < 4) score -= 10;
  if (metrics.prThroughput < 10) score -= 10;

  if (score < 0) score = 0;
  return score;
}

export default async function Home() {
  const data = await getMetrics();

  if (!data) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const { developer, month, metrics } = data;
  const { story, tone, actions } = interpretMetrics(metrics);
  const healthScore = getHealthScore(metrics);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
          <div className="rounded-[28px] bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Individual Contributor View
            </p>

            <h2 className="mt-3 text-4xl font-bold">{developer}</h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              This dashboard converts raw productivity metrics into a likely story and
              practical next steps, helping a developer understand not just what is
              happening, but what to do next.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-slate-300">Month</p>
                <p className="mt-1 text-lg font-semibold">{month}</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-wide text-slate-300">Current Focus</p>
                <p className="mt-1 text-lg font-semibold">Delivery Health</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
              Overall Score
            </p>
            <h3 className="mt-3 text-5xl font-bold text-slate-900">{healthScore}</h3>
            <p className="mt-2 text-sm text-slate-500">Out of 100</p>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
                style={{ width: `${healthScore}%` }}
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              This score is a simplified summary based on the monthly metrics in the MVP.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          <MetricCard
            title="Lead Time"
            value={metrics.leadTime}
            unit="days"
            accent="blue"
            description="Average time from PR opened to successful production deployment."
          />
          <MetricCard
            title="Cycle Time"
            value={metrics.cycleTime}
            unit="days"
            accent="purple"
            description="Average time from issue moved to In Progress to Done."
          />
          <MetricCard
            title="Bug Rate"
            value={metrics.bugRate.toFixed(2)}
            accent="red"
            description="Escaped production bugs divided by issues completed in the month."
          />
          <MetricCard
            title="Deployment Frequency"
            value={metrics.deploymentFrequency}
            unit="/month"
            accent="green"
            description="Count of successful production deployments in the month."
          />
          <MetricCard
            title="PR Throughput"
            value={metrics.prThroughput}
            unit="PRs"
            accent="amber"
            description="Count of merged pull requests in the month."
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InsightBox
            title="Likely Story Behind the Metrics"
            text={story}
            tone={tone}
          />

          <ActionList actions={actions} />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Product Thinking
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Why this MVP matters
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Raw metrics alone do not tell a developer what is actually happening or what
              action to take. This MVP connects raw numbers to interpretation and a practical
              next-step plan, which makes the dashboard more useful than a generic metric board.
            </p>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
              Recommended Journey
            </p>
            <h3 className="mt-2 text-2xl font-bold">Metrics → Meaning → Action</h3>
            <p className="mt-4 text-sm leading-7 text-blue-100">
              This is the single focused journey the assignment recommends for an IC view.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
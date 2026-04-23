export async function GET() {
  const developerData = {
    developer: "Akshat Sirohi",
    month: "April 2026",
    metrics: {
      leadTime: 4.5,
      cycleTime: 3.2,
      bugRate: 0.18,
      deploymentFrequency: 3,
      prThroughput: 11,
    },
  };

  return Response.json(developerData);
}
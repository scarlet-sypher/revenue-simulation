import type { SimulationInput } from "../types/simulation.ts";

export const runSimulation = (

  buckets: Record<number, any[]>,
  metrics: {

    conversionRate: number;
    avgDealSize: number;

  },
  input: SimulationInput

) => {



  const baseline: number[] = [];
  const scenario: number[] = [];

  const newConversion = metrics.conversionRate * (1 + (input.conversionChange || 0) / 100);

  const newDealSize = metrics.avgDealSize * (1 + (input.dealSizeChange || 0) / 100);

  let baseTotal = 0;
  let scenTotal = 0;

  for (let i = 1; i <= 12; i++) {

    const count = buckets[i]?.length || 0;

    const base = count * metrics.conversionRate * metrics.avgDealSize;
    const scen = count * newConversion * newDealSize;

    baseline.push(base);
    scenario.push(scen);

    baseTotal += base;
    scenTotal += scen;

  }

  const impact = scenTotal - baseTotal;

  const drivers: string[] = [];
  if ((input.conversionChange || 0) > 0) drivers.push("conversion increase");
  if ((input.dealSizeChange || 0) > 0) drivers.push("deal size increase");

  return {

    baseline: { weekly_revenue: baseline, total_revenue: baseTotal },

    scenario: { weekly_revenue: scenario, total_revenue: scenTotal },

    impact: {
      absolute: impact,
      percentage: baseTotal === 0 ? 0 : (impact / baseTotal) * 100,
    },
    
    drivers,
  };
};
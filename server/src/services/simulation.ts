import type { SimulationInput } from "../types/simulation.ts";
import type { Deal } from "../types/deal.ts";

const round = (num: number) => {

  return Math.round(num * 100) / 100;

};

export const runSimulation = (
    
    
    buckets: Record<number, Deal[]>,

    metrics: {

        conversionRate: number;
        avgDealSize: number;

    },
    input: SimulationInput

) => {
    

    const conversionChange = input.conversionChange || 0;
    const dealSizeChange = input.dealSizeChange || 0;
    
    
    const baseline: number[] = [];
    const scenario: number[] = [];
    
    
    const newConversion = metrics.conversionRate * (1 + conversionChange / 100);

    const newDealSize = metrics.avgDealSize * (1 + dealSizeChange / 100);

    let baseTotal = 0;
    let scenTotal = 0;

    for (let i = 1; i <= 12; i++) {

        const dealCount = buckets[i]?.length || 0;

        const baseRevenue = dealCount * metrics.conversionRate * metrics.avgDealSize;
        const scenarioRevenue = dealCount * newConversion * newDealSize;

        const roundedBase = round(baseRevenue);
        const roundedScenario = round(scenarioRevenue);

        baseline.push(roundedBase);
        scenario.push(roundedScenario);

        baseTotal += roundedBase;
        scenTotal += roundedScenario;

    }

    const absoluteImpact = round(scenTotal - baseTotal);


    const percentageImpact = baseTotal === 0 ? 0 : round((absoluteImpact / baseTotal) * 100);

    const drivers: string[] = [];
    if (conversionChange > 0) drivers.push("conversion increase");
    if (conversionChange < 0) drivers.push("conversion decrease");

    if (dealSizeChange > 0) drivers.push("deal size increase");
    if (dealSizeChange < 0) drivers.push("deal size decrease");

    if (drivers.length === 0) {
        drivers.push("no significant change");
    }

    return {

        baseline: { weekly_revenue: baseline, total_revenue: round(baseTotal) },

        scenario: { weekly_revenue: scenario, total_revenue: round(scenTotal) },
        
        
        impact: {
            absolute: absoluteImpact,
            percentage: percentageImpact,
        },

        drivers,
    };
};
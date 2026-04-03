import { useState } from "react";
import { runSimulation } from "../services/api";
import type { SimulationResult } from "../types/simulation";

function SimulationPage() {
    
  const [data, setData] = useState<SimulationResult | null>(null);

  const handleRun = async () => {
    const res = await runSimulation({
      conversionChange: 10,
      dealSizeChange: 15,
    });

    setData(res);
  };

  return (

    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl mb-4">Simulation</h1>

      <button
        onClick={handleRun}
        className="bg-blue-500 px-4 py-2 rounded"
      >
        Run Simulation
      </button>

      {data && (
        <div className="mt-6">
          <p>Total Revenue: ₹{data.scenario.total_revenue}</p>
        </div>
      )}
    </div>
  );
}

export default SimulationPage;
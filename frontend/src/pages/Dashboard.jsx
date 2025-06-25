import { useState } from "react";
import ForecastForm from "../components/ForecastForm";
import ClusterForm from "../components/ClusterForm";
import ForecastResult from "../components/ForecastResult";
import ClusterResult from "../components/ClusterResult";

export default function Dashboard() {
  const [forecastResult, setForecastResult] = useState(null);
  const [clusterResult, setClusterResult] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Retail360 Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ForecastForm setResult={setForecastResult} />
          {forecastResult && <ForecastResult data={forecastResult} />}
        </div>
        <div>
          <ClusterForm setResult={setClusterResult} />
          {clusterResult !== null && <ClusterResult cluster={clusterResult} />}
        </div>
      </div>
    </div>
  );
}

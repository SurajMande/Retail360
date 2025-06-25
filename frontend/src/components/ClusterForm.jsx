import { useState } from "react";
import { suggestCluster } from "../api/api";
import Loader from "./Loader";

export default function ClusterForm({ setResult }) {
  const [population, setPopulation] = useState("");
  const [avgIncome, setAvgIncome] = useState("");
  const [footTraffic, setFootTraffic] = useState("");
  const [competitorScore, setCompetitorScore] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await suggestCluster(+population, +avgIncome, +footTraffic, +competitorScore);
      setResult(res.data.cluster);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Cluster Suggestion</h2>
      <input placeholder="Population" value={population} onChange={(e) => setPopulation(e.target.value)} className="border p-2 w-full" required />
      <input placeholder="Average Income" value={avgIncome} onChange={(e) => setAvgIncome(e.target.value)} className="border p-2 w-full" required />
      <input placeholder="Foot Traffic Score" value={footTraffic} onChange={(e) => setFootTraffic(e.target.value)} className="border p-2 w-full" required />
      <input placeholder="Competitor Score" value={competitorScore} onChange={(e) => setCompetitorScore(e.target.value)} className="border p-2 w-full" required />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
        {loading ? "Suggesting..." : "Suggest Cluster"}
      </button>
    </form>
  );
}

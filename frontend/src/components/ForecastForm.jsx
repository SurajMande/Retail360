import { useState } from "react";
import { forecastDemand } from "../api/api";
import Loader from "./Loader";

export default function ForecastForm({ setResult }) {
  const [region, setRegion] = useState("");
  const [product, setProduct] = useState("");
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await forecastDemand(region, product, days);
      setResult(res.data.forecast);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">Demand Forecast</h2>
      <input placeholder="Region (e.g., R001)" value={region} onChange={(e) => setRegion(e.target.value)} className="border p-2 w-full" required />
      <input placeholder="Product" value={product} onChange={(e) => setProduct(e.target.value)} className="border p-2 w-full" required />
      <input type="number" placeholder="Days" value={days} onChange={(e) => setDays(e.target.value)} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={loading}>
        {loading ? "Forecasting..." : "Get Forecast"}
      </button>
    </form>
  );
}

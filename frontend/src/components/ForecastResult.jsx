
export default function ForecastResult({ data }) {
    return (
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Forecast Results:</h3>
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Prediction</th>
              <th className="border px-2 py-1">Lower Bound</th>
              <th className="border px-2 py-1">Upper Bound</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{row.ds}</td>
                <td className="border px-2 py-1">{row.yhat.toFixed(2)}</td>
                <td className="border px-2 py-1">{row.yhat_lower.toFixed(2)}</td>
                <td className="border px-2 py-1">{row.yhat_upper.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
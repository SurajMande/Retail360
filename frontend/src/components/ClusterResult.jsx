export default function ClusterResult({ cluster }) {
    return (
      <div className="mt-4 p-3 border rounded bg-gray-100">
        <h3 className="font-semibold">Suggested Cluster:</h3>
        <p className="text-lg">Cluster {cluster}</p>
      </div>
    );
  }
  
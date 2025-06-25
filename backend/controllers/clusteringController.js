const runPython = require("../utils/runPython");

exports.suggestCluster = async (req, res) => {
  const { population, avg_income, foot_traffic_score, competitor_score } = req.body;

  if (
    population == null || avg_income == null ||
    foot_traffic_score == null || competitor_score == null
  ) {
    return res.status(400).json({ error: "All 4 fields are required." });
  }

  try {
    const args = [population, avg_income, foot_traffic_score, competitor_score];
    const output = await runPython("clustering_runner.py", args);

    if (output.success) {
      res.json({ cluster: output.cluster });
    } else {
      res.status(500).json({ error: output.error });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const runPython = require('../utils/runPython');

exports.forecastDemand = async (req, res) => {
  const { region, product, days } = req.body;

  if (!region || !product) {
    return res.status(400).json({ error: "region and product are required." });
  }

  try {
    const output = await runPython('forecast_runner.py', [region, product, days || 30]);
    if (output.success) {
      res.json({ forecast: output.data });
    } else {
      res.status(500).json({ error: output.error });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

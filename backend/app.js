const express = require('express');
const cors = require('cors');
require('dotenv').config();

const demandRoutes = require('./routes/demandRoutes');
const clusteringRoutes = require("./routes/clusteringRoutes");
// const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello');
});

app.use('/forecast-demand', demandRoutes);
app.use("/suggest-cluster", clusteringRoutes);
// app.use('/customer-feedback', feedbackRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

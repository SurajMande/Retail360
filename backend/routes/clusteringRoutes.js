const express = require("express");
const router = express.Router();
const { suggestCluster } = require("../controllers/clusteringController");

router.post("/", suggestCluster);

module.exports = router;

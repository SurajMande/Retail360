import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const forecastDemand = (region, product, days) =>
  axios.post(`${BASE_URL}/forecast-demand`, { region, product, days });

export const suggestCluster = (population, avg_income, foot_traffic_score, competitor_score) =>
  axios.post(`${BASE_URL}/suggest-cluster`, {
    population,
    avg_income,
    foot_traffic_score,
    competitor_score,
  });

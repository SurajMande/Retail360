import sys
import json
import joblib
import numpy as np

def predict_cluster(population, avg_income, foot_traffic_score, competitor_score):
    # Load scaler and model
    scaler = joblib.load("/home/samande371322/Retail360/ml_models/cluster_scaler.pkl")
    model = joblib.load("/home/samande371322/Retail360/ml_models/clustering_model.pkl")

    # Prepare input
    data = np.array([[population, avg_income, foot_traffic_score, competitor_score]])
    scaled_data = scaler.transform(data)

    # Predict cluster
    cluster = int(model.predict(scaled_data)[0])
    return cluster

if __name__ == "__main__":
    try:
        population = float(sys.argv[1])
        avg_income = float(sys.argv[2])
        foot_traffic = float(sys.argv[3])
        competitor = float(sys.argv[4])

        result = predict_cluster(population, avg_income, foot_traffic, competitor)
        print(json.dumps({"success": True, "cluster": result}))
    except Exception as e:
        print(json.dumps({"success": False, "error": str(e)}))

# forecast_runner.py
import sys
import json
from prophet.serialize import model_from_json
import pandas as pd

def load_model(region, product):
    path = f"ml_models/prophet_model_{region}_{product}.json"
    with open(path, "r") as f:
        model = model_from_json(f.read())
    return model

def forecast(region, product, days=30):
    model = load_model(region, product)
    future = model.make_future_dataframe(periods=days)
    forecast = model.predict(future)
    output = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail(days)
    return output.to_dict(orient="records")

if __name__ == "__main__":
    region = sys.argv[1]
    product = sys.argv[2]
    days = int(sys.argv[3]) if len(sys.argv) > 3 else 30

    try:
        results = forecast(region, product, days)
        print(json.dumps({"success": True, "data": results}))
    except Exception as e:
        print(json.dumps({"success": False, "error": str(e)}))

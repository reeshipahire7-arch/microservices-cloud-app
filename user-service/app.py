from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/")
def home():
    return jsonify(service="User Service", status="running")

@app.get("/users")
def users():
    return jsonify(users=[
        {"id": 1, "name": "Reeshi"},
        {"id": 2, "name": "Alex"}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)

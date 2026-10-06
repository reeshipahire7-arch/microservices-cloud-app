from flask import Flask, jsonify

app = Flask(__name__)

@app.after_request
def add_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

@app.get("/")
def home():
    return jsonify(service="Order Service", status="running")

@app.get("/orders")
def orders():
    return jsonify(orders=[
        {"id": 1, "user": "Reeshi", "product": "Laptop"},
        {"id": 2, "user": "Alex", "product": "Keyboard"}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003)
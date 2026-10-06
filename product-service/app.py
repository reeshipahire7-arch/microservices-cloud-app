from flask import Flask, jsonify

app = Flask(__name__)

@app.after_request
def add_cors(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response

@app.get("/")
def home():
    return jsonify(service="Product Service", status="running")

@app.get("/products")
def products():
    return jsonify(products=[
        {"id": 1, "name": "Laptop", "price": 55000},
        {"id": 2, "name": "Keyboard", "price": 1200}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)
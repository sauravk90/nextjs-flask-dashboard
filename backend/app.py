from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins=['http://localhost:3000'])


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/fetchNodeData")
def fetch_node_data():
    return jsonify({"node1": {"ip" : "10.0.0.89", "started_at" : "10:30PM", "uptime" : "10 hours", "stopped" : "10:35PM"},
                    "node2": {"ip": "10.0.0.54", "started_at": "10:30PM", "uptime": "11 hours", "stopped": "10:35PM"},
                    "node3": {"ip": "10.0.0.78", "started_at": "10:30PM", "uptime": "12 hours", "stopped": "10:35PM"},
                    "node4": {"ip": "10.0.0.66", "started_at": "10:30PM", "uptime": "14 hours", "stopped": "10:35PM"},
                    })



# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
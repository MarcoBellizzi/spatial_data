import json

from flask import Flask, request, current_app
from flask_cors import CORS

import service

app = Flask(__name__)
CORS(app)

@app.route('/image')
def get_sales():
    id = request.args.get('id')
    path = request.args.get('path')
    return current_app.send_static_file(f'{id}/{path}')

@app.route('/points', methods=['GET'])
def get_points():
    return (json.dumps({'points': service.get_points()}),
            200, {"Accept": "application/json", "Content-Type": "application/json"})

app.run(host="0.0.0.0", port=8080, use_reloader=True)
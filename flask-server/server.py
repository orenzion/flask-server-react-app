from flask import Flask, request
from flask.json import jsonify
from flask_restful import Api, Resource
import numpy as np
import joblib


app = Flask(__name__)


@app.route('/api/iris-predict', methods=['POST'])
def PredictIris():

    if request.method == 'POST':
        data = request.json
        sepal_length = request.json['sepal_length']
        sepal_width = request.json['sepal_width']
        petal_length = request.json['petal_length']
        petal_width = request.json['petal_width']

        print(sepal_length, sepal_width, petal_length, petal_width)

        return data


if __name__ == "__main__":
    app.run(debug=True)

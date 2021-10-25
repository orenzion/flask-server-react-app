from flask import Flask, request
from flask_restful import Api, Resource
import numpy as np
import joblib


app = Flask(__name__)


@app.route('/api/iris-predict', methods=['POST'])
def PredictIris():

    if request.method == 'POST':
        print(request.json)
        sepal_length = request.json['sepal_length']
        sepal_width = request.json['sepal_width']
        petal_length = request.json['petal_length']
        petal_width = request.json['petal_width']

        print(sepal_length, sepal_width, petal_length, petal_width)

        return {"data": "data"}


if __name__ == "__main__":
    app.run(debug=True)

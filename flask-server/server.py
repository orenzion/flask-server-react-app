from flask import Flask, request
from flask.json import jsonify
from flask_restful import Api, Resource
import numpy as np
import pickle


app = Flask(__name__)


@app.route('/api/iris-predict', methods=['POST'])
def PredictIris():

    if request.method == 'POST':
        data = request.json
        sepal_length = request.json['sepal_length']
        sepal_width = request.json['sepal_width']
        petal_length = request.json['petal_length']
        petal_width = request.json['petal_width']

        # put the data in an array
        sample_data = [sepal_length, sepal_width, petal_length, petal_width]
        # convert input to float
        clean_data = [float(i) for i in sample_data]

        ex1 = np.array(clean_data).reshape(1, -1)

        logit_model = pickle.load(open('ml-models/logit_iris.pkl', 'rb'))
        result_prediction = logit_model.predict(ex1)
        print(result_prediction[0])

        return {"res": result_prediction[0]}


if __name__ == "__main__":
    app.run(debug=True)

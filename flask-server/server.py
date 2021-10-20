from flask import Flask
from flask_restful import Api, Resource
import numpy as np
import joblib


app = Flask(__name__)
api = Api(app)


class PredictIris(Resource):
    def get(self, sepal_length, sepal_width, petal_length, petal_width):

        sample_data = [sepal_length, sepal_width, petal_length, petal_width]
        '''
        clean_data = [float(i) for i in sample_data]

        ex1 = np.array(clean_data).reshape(1, -1)

        logit_model = joblib.load('ml-models/logit_iris.pkl')
        result_prediction = logit_model.predict(ex1)
        '''

        return {"data": sample_data}


api.add_resource(
    PredictIris, "/api/predict-iris/<float:sepal_length>/<float:sepal_width>/<float:petal_length>/<float:petal_width>")


if __name__ == "__main__":
    app.run(debug=True)

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function IrisForm({ setPredictedIris }) {
  const [validated, setValidated] = useState(false);

  // set an initial value to the form attributes so that we can use them to send data later on to the server
  const [sepal_length, set_sepal_length] = useState("");
  const [sepal_width, set_sepal_width] = useState("");
  const [petal_length, set_petal_length] = useState("");
  const [petal_width, set_petal_width] = useState("");

  // function to handle form submit
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // create the data object from the info entered in the form
      const data = {
        sepal_length: sepal_length,
        sepal_width: sepal_width,
        petal_length: petal_length,
        petal_width: petal_width,
      };
      // send post request to the python api to predict the iris flower type
      // using async and await function
      async function fetchData() {
        const request = await axios.post("api/iris-predict", data);
        setPredictedIris(request.data["res"]);
      }
      fetchData();
      // prevent form from re-rendering
      event.preventDefault();
      // reset form fields and validation marks
      set_sepal_length("");
      set_sepal_width("");
      set_petal_length("");
      set_petal_width("");
      setValidated(false);
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="sepal_length">
        <Form.Label>Sepal Length</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Sepal Length"
          value={sepal_length}
          onChange={(e) => set_sepal_length(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sepal_width">
        <Form.Label>Sepal Width</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Sepal Width"
          value={sepal_width}
          onChange={(e) => set_sepal_width(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="petal_length">
        <Form.Label>Petal Length</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Petal Length"
          value={petal_length}
          onChange={(e) => set_petal_length(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="petal_width">
        <Form.Label>Petal Width</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Petal Width"
          value={petal_width}
          onChange={(e) => set_petal_width(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Predict
      </Button>
    </Form>
  );
}

export default IrisForm;

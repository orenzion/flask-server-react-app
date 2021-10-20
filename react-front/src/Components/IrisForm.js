import React from "react";
import { Form, Button } from "react-bootstrap";

function IrisForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="sepal_length">
          <Form.Label>Sepal Length</Form.Label>
          <Form.Control type="text" placeholder="Enter Sepal Length" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sepal_width">
          <Form.Label>Sepal Width</Form.Label>
          <Form.Control type="text" placeholder="Enter Sepal Width" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="petal_length">
          <Form.Label>Petal Length</Form.Label>
          <Form.Control type="text" placeholder="Enter Petal Length" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="petal_width">
          <Form.Label>Petal Width</Form.Label>
          <Form.Control type="text" placeholder="Enter Petal Width" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Predict
        </Button>
      </Form>
    </div>
  );
}

export default IrisForm;

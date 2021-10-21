import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function IrisForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="sepal_length">
        <Form.Label>Sepal Length</Form.Label>
        <Form.Control type="text" placeholder="Enter Sepal Length" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="sepal_width">
        <Form.Label>Sepal Width</Form.Label>
        <Form.Control type="text" placeholder="Enter Sepal Width" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="petal_length">
        <Form.Label>Petal Length</Form.Label>
        <Form.Control type="text" placeholder="Enter Petal Length" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="petal_width">
        <Form.Label>Petal Width</Form.Label>
        <Form.Control type="text" placeholder="Enter Petal Width" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Predict
      </Button>
    </Form>
  );
}

export default IrisForm;

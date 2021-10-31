import React from "react";
import { Card } from "react-bootstrap";

function IrisRes({ predictedIris }) {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>
          The Predicted Iris Type Is: {predictedIris}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default IrisRes;

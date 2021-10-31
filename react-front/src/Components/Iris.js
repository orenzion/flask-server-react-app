import React, { useState } from "react";
import IrisForm from "./IrisForm";
import IrisRes from "./IrisRes";

function Iris() {
  const [predictedIris, setPredictedIris] = useState("");
  return (
    <div>
      <h1>Iris</h1>
      <IrisForm setPredictedIris={setPredictedIris} />
      <IrisRes predictedIris={predictedIris} />
    </div>
  );
}

export default Iris;

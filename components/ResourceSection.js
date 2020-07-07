import { useState } from "react";
import TextField from "../components/TextField";
import OperationSubsection from "../components/OperationSubsection";
import AddButton from "../components/AddButton";

const resource = {
  name: "Resource",
  placeholder: "Article",
};

export default function ResourceSection() {
  const [operations, setOperations] = useState([<OperationSubsection />]);

  const handleAddOperation = (event) => {
    event.preventDefault();
    setOperations((operations) => [...operations, <OperationSubsection />]);
  };

  return (
    <>
      <div className="bg-green-100 rounded-md mt-1 py-10">
        <div className="flex justify-center mb-8">
          <TextField field={resource} width={230} />
        </div>
        <div className="flex justify-center">
          <div>
            {operations.map((operation) => (
              <div key={operations.indexOf(operation)}>{operation}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <AddButton buttonText="Operation" callback={handleAddOperation} />
        </div>
      </div>
    </>
  );
}

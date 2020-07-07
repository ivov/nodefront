import { useState } from "react";
import TextField from "./TextField";
import RequiredFieldNanosection from "../components/RequiredFieldNanosection";
import AddButton from "../components/AddButton";

const operationFields = {
  operationName: { name: "Operation name", placeholder: "Get article" },
  description: {
    name: "Description",
    placeholder: "Get a Hacker News article",
  },
  endpoint: { name: "Endpoint", placeholder: "items/$$articleId$$" },
  requestMethod: { name: "Method", placeholder: "GET" },
};

export default function OperationSubsection() {
  const {
    operationName,
    description,
    endpoint,
    requestMethod,
  } = operationFields;

  const [fields, setFields] = useState([<RequiredFieldNanosection />]);

  const handleAddField = (event) => {
    event.preventDefault();
    setFields((fields) => [...fields, <RequiredFieldNanosection />]);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col mt-5">
        <TextField field={operationName} width={200} />
        <TextField field={description} width={300} />
        <TextField field={requestMethod} width={150} />
        <TextField field={endpoint} />
      </div>
      <div>
        {fields.map((field) => (
          <div key={fields.indexOf(field)}>{field}</div>
        ))}
        <div className="flex justify-center mb-4 pb-4">
          <AddButton buttonText="Required field" callback={handleAddField} />
          {/* <AddButton buttonText="Optional field" callback={handleAddOptionalField} /> */}
        </div>
      </div>
    </div>
  );
}

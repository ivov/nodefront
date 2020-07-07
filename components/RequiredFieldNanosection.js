import TextField from "./TextField";
import OptionsField from "./OptionsField";

const requiredField = {
  fieldName: { name: "Field name", placeholder: "Article ID" },
  description: {
    name: "Description",
    placeholder: "ID of article to be returned",
  },
  type: {
    name: "Type",
    options: [
      "string",
      "number",
      "boolean",
      "collection",
      "fixedCollection",
      "options",
      "multiOptions",
    ],
  },
  defaultText: { name: "Default", placeholder: "..." },
};

export default function RequiredFieldNanosection() {
  const { fieldName, description, type, defaultText } = requiredField;
  return (
    <div className="flex flex-col rounded-md ml-10">
      <div className="p-5">
        <div className="flex text-sm mb-2 leading-5 font-semibold text-gray-700 bg-green-200 rounded-md">
          <div className="w-24 p-5">Required Field</div>
          <div>
            <TextField field={fieldName} />
            <TextField field={description} />
            <OptionsField field={type} />
            <TextField field={defaultText} />
          </div>
        </div>
      </div>
    </div>
  );
}

import TextField from "../components/TextField";
import OptionsField from "../components/OptionsField";

const metaFields = {
  service: {
    name: "Service",
    placeholder: "Hacker News",
  },
  color: {
    name: "Color",
    placeholder: "#ff6600",
  },
  apiUrl: {
    name: "Base URL for API",
    placeholder: "http://hn.algolia.com/api/v1/",
  },
  authType: {
    name: "Auth type",
    options: ["OAuth2", "Key", "None"],
  },
};

export default function MetaSection() {
  return (
    <div className="bg-blue-100 rounded-md py-10 mt-1">
      <div className="flex justify-center mb-6">
        <TextField field={metaFields.service} />
      </div>
      <div className="flex justify-center ml-10">
        <TextField field={metaFields.apiUrl} width={310} />
        <TextField field={metaFields.color} width={140} />
        <OptionsField field={metaFields.authType} />
      </div>
    </div>
  );
}

export default function OptionsField({ field }) {
  return (
    <div className="w-64 p-5">
      <label
        htmlFor={field.name}
        className="block text-sm mb-2 leading-5 font-semibold text-gray-700"
      >
        {field.name}
      </label>
      <div className="mt-1 relative rounded-md">
        <select className="form-select h-10 py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 bg-white sm:text-sm sm:leading-5 shadow-sm">
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {/* </div> */}
      </div>
    </div>
  );
}

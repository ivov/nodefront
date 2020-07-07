export default function TextField({ field, width }) {
  return (
    <div className="p-5" style={{ width: width + "px" }}>
      <label
        htmlFor={field.name}
        className="block text-sm mb-2 leading-5 font-semibold text-gray-700"
      >
        {field.name}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={field.name}
          className="form-input block w-full pl-3 sm:text-sm sm:leading-5"
          placeholder={field.placeholder}
        />
      </div>
    </div>
  );
}

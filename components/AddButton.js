export default function AddButton({ buttonText, callback }) {
  return (
    <button
      onClick={callback}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded no-underline text-center mx-2"
    >
      + {buttonText}
    </button>
  );
}

const Form: React.FC = () => {
  return (
    <form className="bg-gray-800/70 w-full max-w-lg bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border border-gray-600 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="email"
        >
          Temat
        </label>
        <input
          type="text"
          id="topic"
          className="shadow appearance-none border border-gray-600 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-white text-sm font-bold mb-2"
          htmlFor="message"
        >
          Wiadomość
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border border-gray-600 rounded-lg w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
        >
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default Form;

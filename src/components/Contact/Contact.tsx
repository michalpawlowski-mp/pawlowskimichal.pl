function Contact() {
  return (
    <section id="contact" className="w-full  p-4 flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
      <form className="bg-gray-900 w-1/2 bg-opacity-80 shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Wiadomość
          </label>
          <textarea
            id="message"
            className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Wyślij
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center w-full">
        <div className="w-6/12 h-px border-white bg-white rounded-full"></div>
        <p className="w-1/12 text-center">Oraz za pomocą</p>
        <div className="w-6/12 h-px border-white bg-white rounded-full"></div>
      </div>
      <div className="w-full m-5 flex justify-center">
        <a className="bg-white/20 p-4 m-4 rounded-full" href="mailto:">
          kontakt@pawlowskimichal.pl
        </a>
        <a className="bg-white/20 p-4 m-4 rounded-full" href="tel:+48728117024">
          728117024
        </a>
      </div>
    </section>
  );
}

export default Contact;

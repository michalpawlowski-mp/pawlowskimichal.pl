import React, { useState } from "react";
import copy from "/icons/any/copy.svg";
import Linkedin from "/icons/social/linkedin.svg";

const Contact: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setNotification("Skopiowano do schowka!");
        setTimeout(() => setNotification(null), 3000);
      },
      (err) => {
        console.error("Błąd podczas kopiowania: ", err);
      }
    );
  };

  return (
    <section id="contact" className="w-full p-2 flex flex-col items-center">
      <h2 className="text-4xl flex font-bold mb-4 text-white">Opcje kontaktu</h2>
      {/* <form className="bg-gray-800/70 w-full max-w-lg bg-opacity-90 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
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
      </form> */}
      {/* <div className="flex items-center justify-center w-full mb-4">
        <div className="w-5/12 h-px bg-white rounded-full"></div>
        <p className="md:w-2/12 w-1/3 text-center text-white">Oraz za pomocą</p>
        <div className="w-5/12 h-px bg-white rounded-full"></div>
      </div> */}
      <div className="w-full flex md:flex-row flex-col items-center justify-center m-2">
        <div className="bg-white/20 flex rounded-full overflow-hidden m-1">
          <a className="py-4 pl-4 pr-2 hover:bg-white/30 transition duration-300 ease-in-out" href="mailto:kontakt@pawlowskimichal.pl">
            kontakt@pawlowskimichal.pl
          </a>
          <div onClick={() => copyToClipboard("kontakt@pawlowskimichal.pl")}>
            <img src={copy} alt="skopiuj email" className="py-4 pr-4 pl-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>
        <div className="bg-white/20 flex rounded-full justify-center items-center overflow-hidden m-1 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer">
          <img src={Linkedin} alt="mój profil linkedin" className="py-3 pl-2 invert " />
          <a className="p-4 " target="_blank" href="https://www.linkedin.com/in/michalpawlowski-mp/">
            kontakt@pawlowskimichal.pl
          </a>
        </div>
        <div className="bg-white/20 flex rounded-full overflow-hidden m-1">
          <a className="py-4 pl-4 pr-2 hover:bg-white/30 transition duration-300 ease-in-out" href="tel:+48728117024">
            728 117 024
          </a>
          <div onClick={() => copyToClipboard("728 117 024")}>
            <img src={copy} alt="skopiuj numer telefonu" className="py-4 pr-4 pl-2 hover:bg-white/30 transition duration-300 ease-in-out cursor-pointer" />
          </div>
        </div>
      </div>
      {notification && <div className="fixed bottom-20 bg-white/30 text-white py-2 px-4 rounded">{notification}</div>}
    </section>
  );
};

export default Contact;

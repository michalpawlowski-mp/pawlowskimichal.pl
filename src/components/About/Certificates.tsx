import { useState } from "react";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <article id="certificates" className="flex flex-col items-center bg-gray-50/30 mx-2 mt-2 p-2 rounded-3xl w-1/3">
      <h6 className="text-3xl mb-2">Certyfikaty</h6>
      <button onClick={toggleVisibility} className="mb-4 py-2 px-5 bg-black/50 text-white rounded-full">
        Zobacz moje certyfikaty
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-black/70 p-4 rounded-lg max-w-3xl w-full">
            <button onClick={toggleVisibility} className="mb-4 p-2 bg-gray-500/50 text-white rounded">
              Zamknij
            </button>
            <div className="flex">
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">06.2018</li>
                <li className="text-sm">E12 Montaż i eksploatacja komputerów osobistych oraz urządzeń peryferyjnych</li>
              </ul>
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">06.2019</li>
                <li className="text-sm">E13 Projektowanie lokalnych sieci komputerowych i administrowanie sieciami</li>
              </ul>
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">01.2020</li>
                <li className="text-sm">
                  E14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Certificates;

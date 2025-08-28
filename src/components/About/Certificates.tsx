import { useState } from "react";

const Certificates: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article
      id="certificates"
      className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/3"
    >
      <h6 className="text-3xl mb-2">Certyfikaty</h6>
      <button
        onClick={toggleVisibility}
        className="mb-4 py-2 px-5 bg-white/10 text-white rounded-full shadow-sm shadow-gray-600"
      >
        Zobacz moje certyfikaty
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white/10 shadow-inner shadow-black p-4 rounded-2xl m-2 max-w-3xl w-max ">
            <button
              onClick={toggleVisibility}
              className="mb-4 p-2 bg-white/10 text-white rounded"
            >
              Zamknij
            </button>
            <div className="flex flex-col p-2">
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">06.2018</li>
                <li className="text-sm">
                  E12 Montaż i eksploatacja komputerów osobistych oraz urządzeń
                  peryferyjnych
                </li>
              </ul>
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">06.2019</li>
                <li className="text-sm">
                  E13 Projektowanie lokalnych sieci komputerowych i
                  administrowanie sieciami
                </li>
              </ul>
              <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">01.2020</li>
                <li className="text-sm">
                  E14 Tworzenie aplikacji internetowych i baz danych oraz
                  administrowanie bazami
                </li>
              </ul>
              {/* <ul className="m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">01.2023</li>
                <li className="text-sm">A1/A3</li>
              </ul> */}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Certificates;

import { useState } from "react";

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article
      id="carrier"
      className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/3"
    >
      <h2 className="text-3xl mb-2">Wykształcenie</h2>
      <button
        onClick={toggleVisibility}
        className="mb-4 py-2 px-5 bg-white/10 text-white rounded-full shadow-sm shadow-gray-600"
      >
        Zobacz moje wykształcenie
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white/10  shadow-inner shadow-black p-4 rounded-2xl  max-w-3xl w-max ">
            <button
              onClick={toggleVisibility}
              className="mb-4 p-2 bg-white/10 text-white rounded"
            >
              Zamknij
            </button>
            <div className="flex gap-4 flex-col md:flex-row">
              <ul className="ukw  p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">10.2020 – 03.2024 (3 lata 6 mies.)</li>
                <li className="">
                  Uniwersytet Kazimierza Wielkiego w Bydgoszczy
                </li>
                <li className="text-sm">Kierunek: Informatyka</li>
                <li className="text-sm">Poziom wykształcenia: Inżynier</li>
              </ul>
              <ul className="zsm  p-4 bg-black/50 rounded-3xl shadow shadow-white ">
                <li className="text-xs">09.2016 – 04.2020 (3 lata 8 mies.)</li>
                <li className="">
                  Zespół Szkół Mechanicznych nr. 1 w Bydgoszczy
                </li>
                <li className="text-sm">Kierunek: Informatyka</li>
                <li className="text-sm">Poziom wykształcenia: Technik</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Education;

import { useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <article id="carrier" className="flex flex-col items-center bg-gray-50/30 mx-2 mt-2 pt-2 rounded-3xl w-1/3">
      <h2 className="text-3xl mb-2">Wykształcenie</h2>
      <button onClick={toggleVisibility} className="mb-4 p-2 bg-black/50 text-white rounded">
        Zobacz moje wykształcenie
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-black/70 p-4 rounded-lg max-w-3xl w-max ">
            <button onClick={toggleVisibility} className="mb-4 p-2 bg-gray-500/50 text-white rounded">
              Zamknij
            </button>
            <div className="flex gap-4  ">
              <ul className="ukw  p-4 bg-black/50 rounded-3xl shadow shadow-white">
                <li className="text-xs">10.2020 – 03.2024 (3 lata 6 mies.)</li>
                <li className="">Uniwersytet Kazimierza Wielkiego w Bydgoszczy</li>
                <li className="">Kierunek: Informatyka</li>
                <li className="">Poziom wykształcenia: Inżynier</li>
              </ul>
              <ul className="zsm  p-4 bg-black/50 rounded-3xl shadow shadow-white ">
                <li className="text-xs">09.2016 – 04.2020 (3 lata 8 mies.)</li>
                <li className="">Zespół Szkół Mechanicznych nr. 1 w Bydgoszczy</li>
                <li className="">Kierunek: Informatyka</li>
                <li className=" ">Poziom wykształcenia: Technik</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Education;

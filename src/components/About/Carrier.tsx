import { useState } from "react";

const Carrier: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <article id="carrier" className="flex flex-col items-center bg-gray-50/30 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/3">
      <h2 className="text-3xl mb-2">Kariera</h2>
      <button onClick={toggleVisibility} className="mb-4 py-2 px-5 bg-black/50 text-white rounded-full">
        Zobacz moją kariere
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-black/70 p-4 rounded-lg max-w-3xl w-full">
            <button onClick={toggleVisibility} className="mb-4 p-2 bg-gray-500/50 text-white rounded">
              Zamknij
            </button>
            <div className="flex flex-col p-2">
              <p className="pb-3">Wsparcie IT</p>
              <div className="flex">
                <ul className="biziel m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className="date text-xs">08.2022 – 09.2022 (2 mies.)</li>
                  <li className="name">Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
                  <li className="position text-sm">Dział Samodzielnej Sekcji Łączności (STAŻ)</li>
                </ul>
                <ul className="iiukw m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className="date text-xs">12.2021 – 08.2022 (9 mies.)</li>
                  <li className="name">Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy</li>
                  <li className="position">Dział Techniczny</li>
                </ul>
                <ul className="bass m-2 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className="date text-xs">07.2021 – 09.2021 (3 mies.)</li>
                  <li className="name">
                    BELMA ACCESSORIES SYSTEMS
                    <i className="city"> | Bydgoszcz</i>
                  </li>
                  <li className="position">Referent ds. Informatycznych</li>
                </ul>
              </div>
              <p className="py-3">Frontend Developer</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Carrier;

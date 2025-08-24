import { useState } from "react";

const Carrier: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <article
      id="carrier"
      className="flex flex-col items-center bg-black/50 md:mx-2 mt-2 pt-2 rounded-3xl w-full md:w-1/3 "
    >
      <h2 className="text-3xl mb-2">Kariera</h2>
      <button
        onClick={toggleVisibility}
        className="mb-4 py-2 px-5 bg-black/50 text-white rounded-full shadow-sm shadow-gray-600"
      >
        Zobacz moją kariere
      </button>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
          <div className="bg-white/10  shadow-inner shadow-black p-1 rounded-2xl m-1 max-w-3xl w-max max-h-5/6 overflow-auto ">
            <button onClick={toggleVisibility} className="mb-4 p-2 bg-white/10 text-white rounded">
              Zamknij
            </button>
            <div className="flex flex-col p-2">
              <p className="pb-3">Wsparcie IT</p>
              <div className="flex flex-col md:flex-row">
                <ul className="biziel m-0 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className=" text-xs">08.2022 – 09.2022 (2 mies.)</li>
                  <li className="">Szpital Uniwersytecki nr 2 im. Jana Biziela w Bydgoszczy</li>
                  <li className="text-sm">Dział Samodzielnej Sekcji Łączności (STAŻ)</li>
                </ul>
                <ul className="iiukw my-3 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className="date text-xs">12.2021 – 08.2022 (9 mies.)</li>
                  <li className="">Instytut Informatyki Uniwersytetu Kazimierza Wielkiego w Bydgoszczy</li>
                  <li className="text-sm">Dział Techniczny</li>
                </ul>
                <ul className="bass m-0 p-4 bg-black/50 rounded-3xl shadow shadow-white">
                  <li className="date text-xs">07.2021 – 09.2021 (3 mies.)</li>
                  <li className="">
                    BELMA ACCESSORIES SYSTEMS
                    <i className=""> | Bydgoszcz</i>
                  </li>
                  <li className="text-sm">Referent ds. Informatycznych</li>
                </ul>
              </div>
              {/* <p className="py-3">Frontend Developer</p> */}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Carrier;

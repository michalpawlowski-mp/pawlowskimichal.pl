import React, { useState } from "react";
import HTML from "/icons/tech/html.svg";
import LESS from "/icons/tech/less.svg";
import JS from "/icons/tech/js.svg";
import ProjectThreePanel from "./projectThreePanel";

const ProjectThree: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h5 className="text-2xl mb-3">Aplikacja Pogodowa</h5>
        <p className="text-left text-sm p-2 mb-1">
          Moja aplikacja pogodowa wykorzystuje API OpenWeather do wyświetlania bieżącej pogody w wybranym mieście. Umożliwia użytkownikowi sprawdzenie aktualnej temperatury, wilgotności oraz ogólnych
          warunków pogodowych.
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2 ">
            <img src={HTML} alt="ikonka HTML" className=" m-2" />
            HTML
          </div>
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2 ">
            <img src={LESS} alt="ikonka LESS" className=" mx-2 my-3" />
            LESS
          </div>
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2 ">
            <img src={JS} alt="ikonka JavaScript" className="rounded-sm m-2" />
            JavaScript
          </div>
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2 ">inne</div>
        </div>
        <button onClick={toggleVisibility} className="mt-4 py-2 px-5 bg-black/50 text-white rounded-full">
          Zobacz szczegóły
        </button>
      </div>
      {isVisible && <ProjectThreePanel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ProjectThree;

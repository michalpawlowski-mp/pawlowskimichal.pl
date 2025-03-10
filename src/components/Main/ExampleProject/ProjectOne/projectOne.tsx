import React, { useState } from "react";
import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css.svg";
import JS from "/icons/tech/js.svg";
import ProjectOnePanel from "./projectOnePanel";

const ProjectOne: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/3 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h4 className="text-2xl mb-3">GamingHub</h4>
        <p className="text-sm text-left pb-1">
          Moja praca inżynierska to zbiór stron internetowych stworzonych z myślą o graczach, oferujących pomoc nowym graczom. Projekt obejmował strony z informacjami np. o budowie postaci,
          aktualnościami ze świata gier, poradnikami oraz sekcję, gdzie można kupić gry w formie kluczy lub stacjonarnie.
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2  ">
            <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
            HTML
          </div>
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 p-2  ">
            <img src={CSS} alt="ikonka CSS" className="w-[20px] m-2" />
            CSS
          </div>
          <div className="w-[120px] bg-black/50 rounded-full flex items-center justify-center m-1 py-2">
            <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
            JavaScript
          </div>
        </div>
        <button onClick={toggleVisibility} className="mt-4 py-2 px-5 bg-black/50 text-white rounded-full">
          Zobacz szczegóły
        </button>
      </div>
      {isVisible && <ProjectOnePanel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ProjectOne;

import React, { useState } from "react";
import HTML from "/icons/tech/html.svg";
import TS from "/icons/tech/ts.svg";
import SASS from "/icons/tech/sass.svg";
import ProjectTwoPanel from "./projectTwoPanel";

const ProjectTwo: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility: () => void = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/2 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h4 className="text-2xl mb-2">Gra w kółko i krzyżyk</h4>
        <p className="text-sm text-left">
          Mój mini projekt to klasyczna gra logiczna dla dwóch graczy. Pozwala na interaktywną rozgrywkę w przeglądarce, z automatycznym wykrywaniem zwycięzcy i możliwością restartu gry.
        </p>
        <div className="flex">
          <div className="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
            HTML
          </div>
          <div className="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center">
            <img src={SASS} alt="ikonka SASS/SCSS" className="w-[20px] m-2" />
            SCSS
          </div>
          <div className="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center">
            <img src={TS} alt="ikonka JavaScript" className="w-[20px] m-2" />
            TypeScript
          </div>
        </div>
        <button onClick={toggleVisibility} className="mt-4 py-2 px-5 bg-black/50 text-white rounded-full">
          Zobacz szczegóły
        </button>
      </div>
      {isVisible && <ProjectTwoPanel toggleVisibility={toggleVisibility} />}
    </>
  );
};

export default ProjectTwo;

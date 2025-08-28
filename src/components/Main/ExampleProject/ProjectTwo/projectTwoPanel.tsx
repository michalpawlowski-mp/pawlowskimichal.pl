import React from "react";
import HTML from "/icons/tech/html.svg";
import TS from "/icons/tech/ts.svg";
import SASS from "/icons/tech/sass.svg";
import npm from "/icons/tech/npm.svg";
import node from "/icons/tech/node.svg";
import web from "/icons/any/web.svg";
import github from "/icons/social/github.svg";
import xo from "/any/projects/XO/kik.svg";
import xor from "/any/projects/XO/kik-r.svg";

interface ProjectTwoProps {
  toggleVisibility: () => void;
}

const ProjectTwoPanel: React.FC<ProjectTwoProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-max h-5/6 overflow-auto">
        <div className="flex w-full items-center">
          <button
            onClick={toggleVisibility}
            className="p-2 bg-white/10 text-white rounded-xl "
          >
            Zamknij
          </button>
          <h5 className="text-2xl text-center m-auto">Kółko i krzyżyk</h5>
        </div>
        <div className="flex flex-col text-left  p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">
            ✅ Interaktywna plansza 3x3 do gry w „Kółko i Krzyżyk”
          </p>
          <p className="text-sm mt-1">✅ Dynamiczna zmiana gracza (X i O)</p>
          <p className="text-sm mt-1">
            ✅ Weryfikacja wygranej oraz możliwość remisu
          </p>
          <p className="text-sm mt-1">
            ✅ Komunikaty informujące o stanie gry (czyja kolej, kto wygrał)
          </p>
          <p className="text-sm mt-1">
            ✅ Możliwość restartu gry jednym przyciskiem
          </p>
        </div>
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Gra rozpoczyna się od planszy 3x3, na której gracze na zmianę
            umieszczają swoje symbole (X lub O). Po każdym ruchu aplikacja
            sprawdza, czy któryś z graczy wygrał lub czy nastąpił remis. Po
            zakończeniu gry można uruchomić nową rozgrywkę za pomocą przycisku
            „Restart”.
          </p>
          <p className="text-sm my-2">
            Projekt został zaprojektowany z myślą o prostocie i wygodzie
            użytkowania, oferując płynną animację oraz intuicyjne interakcje..
          </p>
        </div>
        <div className="flex mt-1 gap-1">
          <img
            src={xo}
            alt="ikona aplikacji pogodowej"
            className="w-1/2  rounded-xl shadow-md shadow-black"
          />
          <img
            src={xor}
            alt="ikona temperatury"
            className="w-1/2  rounded-xl shadow-md shadow-black "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">Użyte technologie:</p>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
              HTML
            </div>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img src={SASS} alt="ikonka SASS/SCSS" className="w-[20px] m-2" />
              SCSS
            </div>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img src={TS} alt="ikonka JavaScript" className="w-[20px] m-2" />
              TypeScript
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <p className="w-full text-left text-xl">
              Użyte narzędzia developerskie:
            </p>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={npm}
                alt="ikonka JavaScript"
                className="w-[40px] mx-2"
              />
              npm
            </div>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={node}
                alt="ikonka JavaScript"
                className="w-[25px] mx-2"
              />
              Node.js
            </div>
          </div>
          <div className="flex">
            <a
              target="_blank"
              href={"https://michalpawlowski-mp.github.io/X-O/"}
              className=" flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"
            >
              <img
                src={web}
                alt="zobacz projektu w praktyce"
                className="m-auto invert w-[25px]"
              />
              <p className="m-auto">Zobacz projekt</p>
            </a>
            <a
              target="_blank"
              href={"https://github.com/michalpawlowski-mp/X-O"}
              className="flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"
            >
              <img
                src={github}
                alt="zobacz kod projektu"
                className="m-auto invert w-[25px]"
              />
              <p className="m-auto">Zobacz kod</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTwoPanel;

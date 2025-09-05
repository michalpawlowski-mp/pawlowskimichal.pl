import React from "react";
import cal from "/any/projects/cal.svg";
import { html, js, sass, npm, node } from "../../../../../assets/index";
import LinksPanel from "../../Link/LinksPanel";
import ProjectsProps from "../../../../../types/ProjectsProps";

const CalcPanel: React.FC<ProjectsProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-max h-5/6 overflow-auto">
        {/* Header */}
        <div className="flex w-full items-center">
          <button
            onClick={toggleVisibility}
            className="p-2 bg-white/10 text-white rounded-xl "
          >
            Zamknij
          </button>
          <h5 className="text-2xl text-center m-auto">Kalkulator</h5>
        </div>

        {/* Funkcjonalności */}
        <div className="flex flex-col text-left p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">✅ Podstawowe operacje (+, -, *, /)</p>
          <p className="text-sm mt-1">✅ Operacje specjalne (%, √, x²)</p>
          <p className="text-sm mt-1">✅ Przycisk cofania (`undo`)</p>
          <p className="text-sm mt-1">✅ Przycisk czyszczenia (`clear all`)</p>
          <p className="text-sm mt-1">
            ✅ Obsługa liczb dziesiętnych i ujemnych
          </p>
          <p className="text-sm mt-1">✅ Zapisywanie stanu w localStorage</p>
        </div>

        {/* Opis */}
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Projekt przedstawia prosty **kalkulator** zbudowany w czystym
            JavaScript, HTML i SCSS. Aplikacja pozwala na wykonywanie
            podstawowych i specjalnych operacji matematycznych. Stan kalkulatora
            jest zapisywany w pamięci przeglądarki (`localStorage`), dzięki
            czemu po odświeżeniu strony sesja zostaje przywrócona.
          </p>
          <p className="text-sm my-2">
            Interfejs użytkownika jest responsywny i czytelny.
          </p>
        </div>

        {/* Screenshots */}
        <div className="flex items-center w-full mt-1">
          <img
            src={cal}
            alt="Zrzut ekranu kalkulatora"
            className="w-1/2 rounded-xl shadow-md shadow-black"
          />
        </div>

        {/* Technologie */}
        <div className="flex flex-col">
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">Użyte technologie:</p>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
              HTML
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={sass} alt="ikonka SASS/SCSS" className="w-[20px] m-2" />
              SCSS
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
              JavaScript
            </div>
          </div>

          {/* Narzędzia developerskie */}
          <div className="flex flex-wrap justify-center">
            <p className="w-full text-left text-xl">
              Użyte narzędzia developerskie:
            </p>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={npm} alt="ikonka npm" className="w-[40px] mx-2" />
              npm
            </div>
            <div className="w-[125px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={node} alt="ikonka Node.js" className="w-[25px] mx-2" />
              Node.js
            </div>
          </div>
          <LinksPanel
            githubLink="https://github.com/michalpawlowski-mp/Calculator"
            websiteLink="https://michalpawlowski-mp.github.io/Calculator/"
          />
        </div>
      </div>
    </div>
  );
};

export default CalcPanel;

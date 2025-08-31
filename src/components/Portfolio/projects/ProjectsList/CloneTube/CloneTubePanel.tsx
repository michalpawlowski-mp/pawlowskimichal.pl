import React from "react";
import clonetube from "/any/projects/CloneTube/clonetube.svg";
import clonetubeTwo from "/any/projects/CloneTube/clonetubeviewvideo.svg";
import {
  github,
  react,
  next,
  web,
  tw,
  npm,
  vercel,
  ts,
  node,
} from "../../../../../assets/index";

interface CloneTubeProps {
  toggleVisibility: () => void;
}

const CloneTubePanel: React.FC<CloneTubeProps> = ({ toggleVisibility }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm">
      <div className="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto">
        <div className="flex w-full items-center">
          <button
            onClick={toggleVisibility}
            className="p-2 bg-white/10 text-white rounded-xl"
          >
            Zamknij
          </button>
          <h4 className="text-2xl text-center m-auto">CloneTube</h4>
        </div>
        <div className="flex flex-col p-2">
          <div>
            <div className="flex flex-col text-left my-4">
              <p className="text-xl">Funkcjonalności:</p>
              <p className="text-sm mt-1">
                ✅ Wyświetlanie filmów z API YouTube
              </p>
              <p className="text-sm mt-1">
                ✅ Wyszukiwanie treści po wpisanym haśle
              </p>
              <p className="text-sm mt-1">
                ✅ Sortowanie i filtrowanie filmów według kategorii (muzyka,
                gry, sport itp.)
              </p>
              <p className="text-sm mt-1">
                ✅ Otwieranie filmu w modalnym odtwarzaczu
              </p>
              <p className="text-sm mt-1">
                ✅ Dynamiczna nawigacja i responsywny układ
              </p>
            </div>
            <div className="flex flex-col text-left">
              <p className="text-xl">Opis</p>
              <p className="text-sm mt-2">
                CloneTube to aplikacja stworzona jako klon YouTube,
                umożliwiająca przeglądanie filmów z różnych kategorii oraz
                wyszukiwanie treści za pomocą API YouTube. Użytkownik może łatwo
                otwierać wybrane wideo w odtwarzaczu oraz przełączać się
                pomiędzy interesującymi go kategoriami tematycznymi.
              </p>
              <p className="text-sm my-2">
                Projekt został zaprojektowany z myślą o prostocie i
                intuicyjności. Dzięki dynamicznemu filtrowaniu i wyszukiwaniu,
                użytkownik szybko znajdzie interesujące materiały. Całość oparta
                jest o React i Next.js, a interfejs został dostosowany do
                urządzeń mobilnych i desktopowych.
              </p>
              <p className="text-sm my-2 pb-2">
                CloneTube łączy w sobie podstawowe funkcje serwisu YouTube,
                zapewniając przejrzysty układ, responsywność i prosty system
                nawigacji. Projekt świetnie pokazuje wykorzystanie zewnętrznego
                API i obsługę dynamicznych komponentów w nowoczesnej aplikacji
                webowej.
              </p>
            </div>
          </div>
          <div className="relative w-full overflow-hidden flex gap-1">
            <img
              src={clonetube}
              alt="ikona aplikacji pogodowej"
              className="w-1/2  rounded-xl shadow-md "
            />
            <img
              src={clonetubeTwo}
              alt="ikona aplikacji pogodowej"
              className="w-1/2  rounded-xl shadow-md "
            />
          </div>
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">Użyte technologie:</p>
            <div className="w-[150px] bg-black/50 px-5 rounded-full m-1 flex items-center justify-center">
              <img src={react} alt="ikonka React" className="w-[25px] mx-2" />
              React
            </div>
            <div className="w-[150px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={ts} alt="ikonka CSS" className="w-[25px] mx-2" />
              Typescript
            </div>
            <div className="w-[150px] bg-black/50 p-1 rounded-full m-1 flex items-center justify-center">
              <img src={tw} alt="ikonka CSS" className="w-[25px] mx-2" />
              Tailwind
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <p className="w-full text-left text-xl">
              Użyte narzędzia developerskie:
            </p>
            <div className="w-[150px] bg-black/50 p-1 px-5 rounded-full m-1 flex items-center justify-center">
              <img
                src={next}
                alt="ikonka JavaScript"
                className="w-[25px] invert mx-2"
              />
              Next.js
            </div>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={vercel}
                alt="ikonka JavaScript"
                className="w-[25px] invert mx-2"
              />
              Vercel
            </div>
            <div className="w-[150px] p-1 bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={npm}
                alt="ikonka JavaScript"
                className="w-[25px] mx-2"
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
              href={"https://clone-tube-ecru.vercel.app/"}
              className="flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"
            >
              <img
                src={web}
                alt="zobacz projekt w praktyce"
                className="m-auto invert w-[25px]"
              />
              <p className="m-auto">Zobacz projekt</p>
            </a>
            <a
              target="_blank"
              href={"https://github.com/michalpawlowski-mp/CloneTube"}
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

export default CloneTubePanel;

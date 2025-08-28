import React from "react";
import HTML from "/icons/tech/html.svg";
import LESS from "/icons/tech/less.svg";
import JS from "/icons/tech/js.svg";
import npm from "/icons/tech/npm.svg";
import API from "/icons/web/OpenWeather.svg";
import VITE from "/icons/tech/vite.svg";
import node from "/icons/tech/node.svg";
import web from "/icons/any/web.svg";
import github from "/icons/social/github.svg";
import wApp from "/any/projects/WeatherApp/WeatherApp.svg";
import wAppTemp from "/any/projects/WeatherApp/WeatherApp-temp.svg";

interface ProjectThreeProps {
  toggleVisibility: () => void;
}

const ProjectThreePanel: React.FC<ProjectThreeProps> = ({
  toggleVisibility,
}) => {
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
          <h5 className="text-2xl text-center m-auto">Aplikacja Pogodowa</h5>
        </div>
        <div className="flex flex-col text-left  p-2 my-3">
          <p className="text-xl">Funkcjonalności:</p>
          <p className="text-sm mt-1">
            ✅ Wyszukiwanie pogody na podstawie nazwy miasta
          </p>
          <p className="text-sm mt-1">
            ✅ Pobieranie danych pogodowych z API OpenWeatherMap
          </p>
          <p className="text-sm mt-1">
            ✅ Wyświetlanie temperatury, opisu pogody oraz wilgotności
          </p>
          <p className="text-sm mt-1">
            ✅ Obsługa błędów i informowanie użytkownika o problemach
          </p>
          <p className="text-sm mt-1">
            ✅ Możliwość wyszukiwania zarówno przyciskiem, jak i klawiszem Enter
          </p>
        </div>
        <div className="flex flex-col text-left">
          <p className="text-xl">Opis</p>
          <p className="text-sm mt-2">
            Użytkownik wpisuje nazwę miasta w pole tekstowe i naciska przycisk
            "Pokaż pogodę" lub klawisz Enter. Aplikacja wysyła zapytanie do API
            OpenWeatherMap, pobiera aktualne dane pogodowe i wyświetla je na
            ekranie w przejrzystej formie. Jeśli miasto nie istnieje lub
            wystąpił problem z połączeniem, użytkownik otrzymuje odpowiedni
            komunikat.
          </p>
          <p className="text-sm my-2">
            Strona posiada nowoczesny i przyjazny interfejs, a dzięki
            gradientowemu tłu i animacjom zmiana danych odbywa się płynnie.
          </p>
        </div>
        <div className="flex mt-1 gap-1">
          <img
            src={wApp}
            alt="ikona aplikacji pogodowej"
            className="w-1/2  rounded-xl shadow-md shadow-black"
          />
          <img
            src={wAppTemp}
            alt="ikona temperatury"
            className="w-1/2  rounded-xl shadow-md shadow-black "
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">Użyte technologie:</p>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img src={HTML} alt="ikonka HTML" className="w-[20px] m-4" />
              HTML
            </div>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img src={LESS} alt="ikonka LESS" className="w-[40px] m-2" />
              LESS
            </div>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-centerr">
              <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-4" />
              JavaScript
            </div>
          </div>
          <div className="flex flex-wrap mt-5 justify-center">
            <p className="w-full text-left text-xl">
              Użyte narzędzia developerskie:
            </p>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={npm}
                alt="ikonka JavaScript"
                className="w-[40px] mx-2"
              />
              npm
            </div>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={node}
                alt="ikonka JavaScript"
                className="w-[25px] mx-2"
              />
              Node.js
            </div>
            <div className="w-[150px] bg-black/50 p-3  rounded-full m-1 flex items-center justify-center">
              <img
                src={VITE}
                alt="ikonka JavaScript"
                className="w-[20px] mr-2"
              />
              Vite
            </div>
            <div className="w-[150px] bg-black/50  rounded-full m-1 flex items-center justify-center">
              <img
                src={API}
                alt="ikonka JavaScript"
                className="w-[65px] mr-2"
              />
              API
            </div>
          </div>
          <div className="flex">
            <a
              target="_blank"
              href={"https://michalpawlowski-mp.github.io/WeatherApp/"}
              className=" flex items-center mt-4 mx-1 py-2  w-1/2 bg-black/50 text-white rounded-full"
            >
              <img
                src={web}
                alt="zobacz projektu w praktyce"
                className="m-auto invert w-[25px]"
              />
              <p className="m-auto ml-0">Zobacz projekt</p>
            </a>
            <a
              target="_blank"
              href={"https://github.com/michalpawlowski-mp/WeatherApp"}
              className="flex items-center mt-4 mx-1 py-2  w-1/2 bg-black/50 text-white rounded-full"
            >
              <img
                src={github}
                alt="zobacz kod projektu"
                className="m-auto invert w-[25px]"
              />
              <p className="m-auto ml-0">Zobacz kod</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectThreePanel;

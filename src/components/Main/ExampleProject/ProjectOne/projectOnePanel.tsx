import React, { useState } from "react";
import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css.svg";
import JS from "/icons/tech/js.svg";
import web from "/icons/any/web.svg";
import github from "/icons/social/github.svg";
import img1 from "/any/GamingHub/gaminghub-game.svg";
import img2 from "/any/GamingHub/gaminghub-any.svg";
import img3 from "/any/GamingHub/gaminghub-akt.svg";

interface ProjectOneProps {
  toggleVisibility: () => void;
}

const images = [img1, img2, img3];

const ProjectOnePanel: React.FC<ProjectOneProps> = ({ toggleVisibility }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

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
          <h4 className="text-2xl text-center m-auto">GamingHub</h4>
        </div>
        <div className="flex flex-col p-2">
          <div>
            <div className="flex flex-col text-left my-4">
              <p className="text-xl">Funkcjonalności:</p>
              <p className="text-sm mt-1">
                ✅ Sortowanie i filtrowanie treści według kategorii (gry,
                aktualności, poradniki itp.)
              </p>
              <p className="text-sm mt-1">
                ✅ Możliwość zapisania ulubionych elementów (np. linków do gier)
              </p>
              <p className="text-sm mt-1">
                ✅ Rotacja trójkąta wskazująca aktywną opcję sortowania
              </p>
              <p className="text-sm mt-1">✅ Obsługa wyszukiwania treści</p>
              <p className="text-sm mt-1">
                ✅ Dynamiczna nawigacja między różnymi sekcjami strony
              </p>
              <p className="text-sm mt-1">
                ✅ Lista linków do stron oferujących gry, recenzje i promocje
              </p>
              <p className="text-sm mt-1">
                ✅ Dostęp do informacji o nowościach i promocjach w sklepach
                gier
              </p>
            </div>
            <div className="flex flex-col text-left">
              <p className="text-xl">Opis</p>
              <p className="text-sm mt-2">
                Platforma umożliwia użytkownikom przeglądanie różnych kategorii
                treści, takich jak gry, aktualności i poradniki. Każdy
                użytkownik może filtrować, sortować i przeszukiwać te treści w
                prosty sposób. Użytkownicy mogą również zapisywać ulubione linki
                do stron z grami lub sklepów, co ułatwia szybki dostęp do
                interesujących ofert.{" "}
              </p>
              <p className="text-sm my-2">
                Dodatkowo, kod JavaScript umożliwia dynamiczną zmianę aktywnych
                opcji, takich jak sortowanie czy zmiana statusu "ulubione".
                Strona wykorzystuje również style CSS, aby była responsywna i
                dostosowana do wyświetlania na różnych urządzeniach (mobilnych,
                desktopowych).
              </p>
              <p className="text-sm my-2 pb-2">
                Strona została zaprojektowana w sposób prosty i intuicyjny,
                dostarczając użytkownikom przyjemne doświadczenie przeglądania.
                Dzięki dynamicznym interakcjom, użytkownicy mogą szybko znaleźć
                interesujące ich treści i łatwo przechodzić między kategoriami.
                Projekt ma na celu stworzenie centralnego źródła informacji,
                które będzie pełnić rolę bazy zasobów i linków dla każdego
                pasjonata gier.
              </p>
            </div>
          </div>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`slide ${index}`}
                  className="w-full flex-shrink-0"
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
          <div className="flex">
            <div className="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center">
              <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
              HTML
            </div>
            <div className="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center">
              <img src={CSS} alt="ikonka CSS" className="w-[20px] m-2" />
              CSS
            </div>
            <div className="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center">
              <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
              JavaScript
            </div>
          </div>
          <div className="flex">
            <a
              target="_blank"
              href={"https://michalpawlowski-mp.github.io/GamingHub/"}
              className="flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"
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
              href={"https://github.com/michalpawlowski-mp/GamingHub"}
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

export default ProjectOnePanel;

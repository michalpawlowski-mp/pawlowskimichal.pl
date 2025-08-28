import { gaminghub, html, css, js } from "../../../../assets/index";
import LinkPanel from "./LinkPanel/LinkPanel";

const GamingHub: React.FC = () => {
  return (
    <>
      <div className="w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5 shadow-lg ">
        <div className="flex w-full justify-center items-center border-b-2 border-white">
          <p className="text-2xl overflow-hidden w-full  p-2">GamingHub</p>
        </div>
        <img src={gaminghub} alt="Podglad strony GamingHub" className="" />
        <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
          <div className="flex">
            <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
            <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
            <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
          </div>
        </div>
        <LinkPanel
          githubLink="https://github.com/michalpawlowski-mp/GamingHub"
          websiteLink="https://michalpawlowski-mp.github.io/GamingHub/"
        />
      </div>
    </>
  );
};

export default GamingHub;

{
  /* <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-40 items-center backdrop-blur-sm"><div class="bg-white/10 shadow-inner shadow-black p-2 rounded-2xl mx-2 max-w-3xl w-full h-5/6 overflow-auto"><div class="flex w-full items-center"><button class="p-2 bg-white/10 text-white rounded-xl">Zamknij</button><h4 class="text-2xl text-center m-auto">GamingHub</h4></div><div class="flex flex-col p-2"><div><div class="flex flex-col text-left my-4"><p class="text-xl">Funkcjonalności:</p><p class="text-sm mt-1">✅ Sortowanie i filtrowanie treści według kategorii (gry, aktualności, poradniki itp.)</p><p class="text-sm mt-1">✅ Możliwość zapisania ulubionych elementów (np. linków do gier)</p><p class="text-sm mt-1">✅ Rotacja trójkąta wskazująca aktywną opcję sortowania</p><p class="text-sm mt-1">✅ Obsługa wyszukiwania treści</p><p class="text-sm mt-1">✅ Dynamiczna nawigacja między różnymi sekcjami strony</p><p class="text-sm mt-1">✅ Lista linków do stron oferujących gry, recenzje i promocje</p><p class="text-sm mt-1">✅ Dostęp do informacji o nowościach i promocjach w sklepach gier</p></div><div class="flex flex-col text-left"><p class="text-xl">Opis</p><p class="text-sm mt-2">Platforma umożliwia użytkownikom przeglądanie różnych kategorii treści, takich jak gry, aktualności i poradniki. Każdy użytkownik może filtrować, sortować i przeszukiwać te treści w prosty sposób. Użytkownicy mogą również zapisywać ulubione linki do stron z grami lub sklepów, co ułatwia szybki dostęp do interesujących ofert. </p><p class="text-sm my-2">Dodatkowo, kod JavaScript umożliwia dynamiczną zmianę aktywnych opcji, takich jak sortowanie czy zmiana statusu "ulubione". Strona wykorzystuje również style CSS, aby była responsywna i dostosowana do wyświetlania na różnych urządzeniach (mobilnych, desktopowych).</p><p class="text-sm my-2 pb-2">Strona została zaprojektowana w sposób prosty i intuicyjny, dostarczając użytkownikom przyjemne doświadczenie przeglądania. Dzięki dynamicznym interakcjom, użytkownicy mogą szybko znaleźć interesujące ich treści i łatwo przechodzić między kategoriami. Projekt ma na celu stworzenie centralnego źródła informacji, które będzie pełnić rolę bazy zasobów i linków dla każdego pasjonata gier.</p></div></div><div class="relative w-full overflow-hidden"><div class="flex transition-transform duration-500" style="transform: translateX(0%);"><img src="/any/GamingHub/gaminghub-game.svg" alt="slide 0" class="w-full flex-shrink-0"><img src="/any/GamingHub/gaminghub-any.svg" alt="slide 1" class="w-full flex-shrink-0"><img src="/any/GamingHub/gaminghub-akt.svg" alt="slide 2" class="w-full flex-shrink-0"></div><button class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full">❮</button><button class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/20 text-white p-2 rounded-full">❯</button></div><div class="flex"><div class="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center"><img src="/icons/tech/html.svg" alt="ikonka HTML" class="w-[20px] m-2">HTML</div><div class="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center"><img src="/icons/tech/css.svg" alt="ikonka CSS" class="w-[20px] m-2">CSS</div><div class="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center"><img src="/icons/tech/js.svg" alt="ikonka JavaScript" class="w-[20px] m-2">JavaScript</div></div><div class="flex"><a target="_blank" href="https://michalpawlowski-mp.github.io/GamingHub/" class="flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"><img src="/icons/any/web.svg" alt="zobacz projektu w praktyce" class="m-auto invert w-[25px]"><p class="m-auto">Zobacz projekt</p></a><a target="_blank" href="https://github.com/michalpawlowski-mp/GamingHub" class="flex items-center mt-4 mx-1 py-2 px-5 w-1/2 bg-black/50 text-white rounded-full"><img src="/icons/social/github.svg" alt="zobacz kod projektu" class="m-auto invert w-[25px]"><p class="m-auto">Zobacz kod</p></a></div></div></div></div> */
}

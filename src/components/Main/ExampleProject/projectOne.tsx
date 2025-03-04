import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css.svg";
import JS from "/icons/tech/js.svg";

const ProjectOne: React.FC = () => {
  return (
    <>
      <div className="flex flex-col text-center justify-between items-center w-full md:w-1/2 bg-gray-700/50 p-4 md:mx-2 my-2 rounded-xl shadow-inner shadow-black">
        <h4 className="text-2xl">GamingHub</h4>
        <p className="text-sm">
          Moja praca inżynierska to zbiór stron internetowych stworzonych z myślą o graczach, oferujących pomoc nowym graczom. Projekt obejmował strony z informacjami np. o budowie postaci,
          aktualnościami ze świata gier, poradnikami oraz sekcję, gdzie można kupić gry w formie kluczy lub stacjonarnie.
        </p>
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
        <a href="https://link-to-gaminghub.com">Zobacz projekt</a>
      </div>
    </>
  );
};

export default ProjectOne;

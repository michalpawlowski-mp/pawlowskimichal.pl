import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";
import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css.svg";
import SASS from "/icons/tech/sass.svg";
import LESS from "/icons/tech/less.svg";
import JS from "/icons/tech/js.svg";
import TS from "/icons/tech/ts.svg";

const ExampleProjectSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center w-full p-3">
        <h3 className="text-4xl">Wybrane projekty</h3>
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col text-center items-center  w-full md:w-1/2 bg-gray-700/50 p-5 m-2 rounded-xl shadow-inner shadow-black">
            <h4 className="text-2xl">GamingHub</h4>
            <p className="text-sm">Moja praca inżynierska to zbiór wszystkich niezbędnych stron internetowych, stworzonych z myślą o graczach.</p>
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
          <div className="flex flex-col text-center items-center w-full md:w-1/2 bg-gray-700/50 p-2 m-2 rounded-xl shadow-inner shadow-black">
            <h4 className="text-2xl">Gra w kółko i krzyżyk</h4>
            <p>Opis projektu 2, który pokazuje jego funkcjonalności i zastosowanie.</p>
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
            <a href="https://link-to-project2.com">Zobacz projekt</a>
          </div>
          <div className="flex flex-col text-center items-center w-full md:w-1/2 bg-gray-700/50 p-2 m-2 rounded-xl shadow-inner shadow-black">
            <h5 className="text-2xl">Aplikacja Pogodowa</h5>
            <p>Opis projektu 2, który pokazuje jego funkcjonalności i zastosowanie.</p>
            <div className="flex">
              <div className="w-1/3 bg-black/50 px-5 rounded-full m-2 flex items-center justify-center">
                <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
                HTML
              </div>
              <div className="w-1/3 bg-black/50 p-1 rounded-full m-2 flex items-center justify-center">
                <img src={LESS} alt="ikonka LESS" className="w-[20px] m-2" />
                LESS
              </div>
              <div className="w-1/3 bg-black/50 p-2 px-5 rounded-full m-2 flex items-center justify-center">
                <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
                JavaScript
              </div>
            </div>
            <a href="https://link-to-project2.com">Zobacz projekt</a>
          </div>
        </div>
        <Link to="/Portfolio" className="">
          <div className="flex text-center items-center group">
            <p className="transition-all duration-500 group-hover:translate-x-1">Zobacz wiecej moich projektów</p>
            <img className="invert m-2 transition-transform duration-500 group-hover:translate-x-2" src={arrow} alt="strzałka w prawo" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ExampleProjectSection;

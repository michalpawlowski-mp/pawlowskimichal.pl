import arrow from "/icons/any/arrow.svg";
import gaminghub from "/any/gaminghub.svg";
import me from "/icons/any/me-a.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <main>
        <div>
          <h2>Frontend Developer</h2>
          <p>console.log("Hello World!")</p>
        </div>
        <Link to="/contact" className="">
          <div className="flex text-center items-center border-2 w-max p-3 rounded-2xl border-white">
            <p>Kontakt ze mną</p>
            <img className="invert m-2" src={arrow} alt="strzałka w prawo" />
          </div>
        </Link>
        <div className="flex flex-col text-center items-center border-2 w-max p-3 rounded-2xl border-white">
          <h3>Wybrane projekty</h3>
          <div className="flex">
            <div className="flex flex-col text-center items-center w-1/2">
              <h4>GamingHub</h4>
              <p>
                Moja praca inżynierska to zbiór wszystkich niezbędnych stron internetowych, stworzonych z myślą o
                graczach.
              </p>
              <img src={gaminghub} alt="Pogladowe zdjecie strony GamingHub" />
              <a href="https://link-to-gaminghub.com">Zobacz projekt</a>
            </div>
            <div className="flex flex-col text-center items-center w-1/2">
              <h4>PROJEKT 2</h4>
              <p>Opis projektu 2, który pokazuje jego funkcjonalności i zastosowanie.</p>
              <img className="invert m-2" src="/path/to/project2-image.png" alt="Projekt 2" />
              <a href="https://link-to-project2.com">Zobacz projekt</a>
            </div>
          </div>
          <Link to="/Portfolio">
            <div className="flex text-center items-center">
              <p>Zobacz wiecej moich projektów</p>
              <img className="invert m-2" src={arrow} alt="strzałka w prawo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="rounded-full border-2 overflow-hidden p-2 m-2 w-32 h-32 relative">
            <img src={me} alt="Moje zdjęcie w wrsji animowanej" className="absolute z-10" />
            <div className="animate-spin duration-500 bg-gradient-to-r from-slate-900 to-neutral-800 w-full h-full absolute top-0 left-0"></div>
          </div>
          <div className="flex flex-col">
            <p>Więcej o mnie</p>
            <Link to="/about" className="p-3 bg-slate-700 rounded-full">
              O mnie
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;

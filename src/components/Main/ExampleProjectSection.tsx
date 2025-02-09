import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";

const ExampleProjectSection = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center w-max p-3">
        <h3 className="text-4xl">Wybrane projekty</h3>
        <div className="flex">
          <div className="flex flex-col text-center items-center w-1/2">
            <h4>GamingHub</h4>
            <p>
              Moja praca inżynierska to zbiór wszystkich niezbędnych stron internetowych, stworzonych z myślą o
              graczach.
            </p>
            <a href="https://link-to-gaminghub.com">Zobacz projekt</a>
          </div>
          <div className="flex flex-col text-center items-center w-1/2">
            <h4>PROJEKT 2</h4>
            <p>Opis projektu 2, który pokazuje jego funkcjonalności i zastosowanie.</p>
            <a href="https://link-to-project2.com">Zobacz projekt</a>
          </div>
        </div>
        <Link to="/Portfolio" className="">
          <div className="flex text-center items-center">
            <p>Zobacz wiecej moich projektów</p>
            <img className="invert m-2" src={arrow} alt="strzałka w prawo" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ExampleProjectSection;

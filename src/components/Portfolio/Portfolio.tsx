import github from "/icons/social/github.svg";
import codePen from "/icons/social/codepen.svg";
import uiverseIo from "/icons/social/uiverse-io.svg";
import GamingHub from "./Gaminghub";

const Portfolio = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center">
        <h2 className="text-3xl">Moje Portfolio</h2>
        <div className="flex items-center justify-center w-full">
          <div className="w-2/5 h-px border-white bg-white rounded-full"></div>
          <a href="" className="flex items-center p-2 m-2 rounded-full border border-white">
            <img className="invert rounded-full" src={github} alt="Link do mojego Linkedina" />
            <p className="m-1">Michał Pawłowski</p>
          </a>
          <div className="w-2/5 h-px border-white bg-white rounded-full"></div>
        </div>

        <div className="project flex flex-wrap items-center justify-center w-full m-5">
          <GamingHub />
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="w-2/5 h-px border-white bg-white rounded-full"></div>
          <p className="text-center mx-4">Tworzę i eksperymentuję</p>
          <div className="w-2/5 h-px border-white bg-white rounded-full"></div>
        </div>
        <div className="w-full m-5 flex justify-center">
          <a
            className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
            href="https://codepen.io/Michal-Pawlowski"
            target="_blank"
          >
            <img className="me-3" src={codePen} alt="Link do mojego profilu na CodePen" />
            MP.Dev
          </a>
          <a
            className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
            href="https://uiverse.io/profile/aJpaRmp"
            target="_blank"
          >
            <img className="rounded-full me-3" src={uiverseIo} alt="Link do mojego profilu na Uuverse.io" />
            MP.Dev
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

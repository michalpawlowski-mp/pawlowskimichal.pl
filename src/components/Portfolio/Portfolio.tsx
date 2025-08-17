import github from "/icons/social/github.svg";
import codePen from "/icons/social/codepen.svg";
import uiverseIo from "/icons/social/uiverse-io.svg";
import ProjectList from "./projects/Projects.tsx";

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center ">
        <h2 className="text-5xl pb-2">Moje Portfolio</h2>
        <div className="flex items-center justify-center w-full">
          <div className="w-1/4 md:w-2/5 h-px border-white bg-white rounded-full"></div>
          <a
            href={"https://github.com/michalpawlowski-mp"}
            className="flex items-center p-2 m-1 rounded-full border border-white hover:bg-white/20"
          >
            <img
              className="invert rounded-full"
              src={github}
              alt="Link do mojego Linkedina"
            />
            <p className="m-1">Michał Pawłowski</p>
          </a>
          <div className="w-1/4 md:w-2/5  h-px border-white bg-white rounded-full"></div>
        </div>
        <ProjectList />
        <div className="flex items-center justify-center w-full">
          <div className="w-1/4 md:w-2/5 h-px border-white bg-white rounded-full"></div>
          <p className="text-center mx-2">Tworzę i eksperymentuję</p>
          <div className="w-1/4 md:w-2/5 h-px border-white bg-white rounded-full"></div>
        </div>
        <div className="w-full m-5 flex justify-center">
          <a
            className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
            href={"https://codepen.io/Michal-Pawlowski"}
            target="_blank"
          >
            <img
              className="me-3"
              src={codePen}
              alt="Link do mojego profilu na CodePen"
            />
            MP.Dev
          </a>
          <a
            className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
            href={"https://uiverse.io/profile/aJpaRmp"}
            target="_blank"
          >
            <img
              className="rounded-full me-3"
              src={uiverseIo}
              alt="Link do mojego profilu na Uuverse.io"
            />
            MP.Dev
          </a>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

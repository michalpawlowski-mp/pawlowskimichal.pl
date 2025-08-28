import { github } from "../../assets/index.ts";
import ProjectList from "./projects/Projects.tsx";
import Experiments from "./Experiments/Experiments.tsx";

const Portfolio: React.FC = () => {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center ">
        <h2 className="text-5xl pb-10">Moje Portfolio</h2>
        <div className="flex items-center justify-center w-full">
          <div className="w-2/5 h-px border-white bg-white rounded-full"></div>
          <a
            href={"https://github.com/michalpawlowski-mp"}
            className="flex items-center p-2 mx-2 rounded-full border border-white hover:bg-white/20"
          >
            <img
              className="invert rounded-full"
              src={github}
              alt="Link do mojego Linkedina"
            />
            <p className="m-1">Michał Pawłowski</p>
          </a>
          <div className="w-2/5  h-px border-white bg-white rounded-full"></div>
        </div>
        <ProjectList />
        <Experiments />
      </section>
    </>
  );
};

export default Portfolio;

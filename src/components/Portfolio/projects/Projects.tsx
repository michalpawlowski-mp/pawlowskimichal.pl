import { useState } from "react";
import GamingHub from "./ProjectsList/Gaminghub";
import MEETIT from "./ProjectsList/MEET-IT";
import LogReg from "./ProjectsList/LogReg";
import Counter from "./ProjectsList/Counter";
import CV from "./ProjectsList/CV";
import XO from "./ProjectsList/XO";
import NSC from "./ProjectsList/NSC";
import Kenia from "./ProjectsList/Kenia";
import Weather from "./ProjectsList/Weather";
import Slider from "./ProjectsList/Slider";
import RNL from "./ProjectsList/RandomNL";
import Cal from "./ProjectsList/Calc";
import Todo from "./ProjectsList/Todo";
import DM from "./ProjectsList/DarkMode";
import CloneTube from "./ProjectsList/CloneTube";

const allProjects = [
  <CloneTube key="clonetube" />,
  <Weather key="weather" />,
  <GamingHub key="gaminghub" />,
  <XO key="xo" />,
  <Cal key="cal" />,
  <Todo key="todo" />,
  <CV key="cv" />,
  <MEETIT key="meetit" />,
  <Counter key="counter" />,
  <Slider key="slider" />,
  <DM key="dm" />,
  <NSC key="nsc" />,
  <RNL key="rnl" />,
  <LogReg key="logreg" />,
  <Kenia key="kenia" />,
];

const ProjectsList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allProjects.length));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-1">
      <div className="flex flex-wrap justify-center gap-4">
        {allProjects.slice(0, visibleCount)}
      </div>

      {visibleCount < allProjects.length && (
        <button
          type="button"
          className="w-full flex justify-center mb-5"
          onClick={handleShowMore}
        >
          Zobacz więcej
          <img
            src="/icons/any/arrow2.svg"
            alt=""
            className="-rotate-90 invert ms-1"
          />
        </button>
      )}
    </div>
  );
};

export default ProjectsList;

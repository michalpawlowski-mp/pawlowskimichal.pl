import { useState } from "react";
import GamingHub from "./ProjectsList/Gaminghub";
import MEETIT from "./ProjectsList/MEET-IT";
import CV from "./ProjectsList/CV";
import XO from "./ProjectsList/XO";
import Weather from "./ProjectsList/Weather";
import Cal from "./ProjectsList/Calc";
import Todo from "./ProjectsList/Todo";
import CloneTube from "./ProjectsList/CloneTube";
import ButtonGithub from "./ProjectsList/ButtonGithub.tsx";

const allProjects = [
  <CloneTube key="clonetube" />,
  <Weather key="weather" />,
  <GamingHub key="gaminghub" />,
  <XO key="xo" />,
  <Cal key="cal" />,
  <Todo key="todo" />,
  <CV key="cv" />,
  <MEETIT key="meetit" />,
  <ButtonGithub />,
];

const ProjectsList: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, allProjects.length));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full m-1">
      <div className="flex flex-wrap justify-center gap-4">{allProjects.slice(0, visibleCount)}</div>

      {visibleCount < allProjects.length && (
        <button type="button" className="w-full flex justify-center mb-5" onClick={handleShowMore}>
          Zobacz więcej
          <img src="/icons/any/arrow2.svg" alt="" className="-rotate-90 invert ms-1" />
        </button>
      )}
    </div>
  );
};

export default ProjectsList;

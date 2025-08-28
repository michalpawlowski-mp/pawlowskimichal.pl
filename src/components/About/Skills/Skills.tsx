import DeveloperTools from "./DeveloperTools/DeveloperTools";
import Technology from "./Technology/Technology";
import Programs from "./Programs/Programs";

const Skills: React.FC = () => {
  return (
    <article id="skills" className="w-full md:w-1/2 ">
      <Technology />
      <DeveloperTools />
      <Programs />
    </article>
  );
};

export default Skills;

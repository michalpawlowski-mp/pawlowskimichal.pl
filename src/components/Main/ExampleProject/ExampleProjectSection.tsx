import ProjectOne from "./ProjectOne/projectOne";
import ProjectTwo from "./ProjectTwo/projectTwo";
import ProjectThree from "./ProjectThree/projectThree";
import ButtonProject from "./ButtonProject";

const ExampleProjectSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col text-center items-center w-full p-3">
        <h3 className="text-4xl">Wybrane projekty</h3>
        <div className="flex flex-col md:flex-row w-full">
          <ProjectOne />
          <ProjectTwo />
          <ProjectThree />
        </div>
        <ButtonProject />
      </div>
    </>
  );
};

export default ExampleProjectSection;

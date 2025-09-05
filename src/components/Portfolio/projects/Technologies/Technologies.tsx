import TechnologiesProps from "../../../../../types/Technology";

const Technologies: React.FC<TechnologiesProps> = ({
  technologies,
  devTools,
}) => {
  return (
    <>
      <div className="flex flex-wrap mt-5 justify-center">
        <p className="w-full text-left text-xl">Użyte technologie:</p>
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="w-[125px] bg-black/50 px-5 rounded-full m-1 flex items-center justify-center"
          >
            <img
              src={tech.src}
              alt={`ikonka ${tech.name}`}
              className="h-[20px] mx-2"
            />
            {tech.name}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
        <p className="w-full text-left text-xl">
          Użyte narzędzia developerskie:
        </p>
        {devTools.map((tool) => (
          <div
            key={tool.name}
            className="w-[125px] p-1 bg-black/50 rounded-full m-1 flex items-center justify-center"
          >
            <img
              src={tool.src}
              alt={`ikonka ${tool.name}`}
              className={`h-[20px] mx-2 ${tool.invert ? "invert" : ""}`}
            />
            {tool.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Technologies;

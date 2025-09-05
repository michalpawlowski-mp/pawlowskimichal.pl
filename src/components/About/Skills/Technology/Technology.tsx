const Technology: React.FC = () => {
  const tech: string[] = [
    "HTML",
    "CSS",
    "RWD",
    "SASS/SCSS",
    "LESS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind",
    "Bootstrap",
    "jQuery",
  ];

  return (
    <div className="bg-black/50 rounded-3xl flex flex-col md:mx-2 my-2 p-1">
      <p className="text-2xl text-center pb-2">Znane mi technologie</p>
      <ul className="flex flex-wrap justify-center items-center ">
        {tech.map((tool) => (
          <li
            key={tool}
            className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600"
          >
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technology;

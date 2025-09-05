const DeveloperTools: React.FC = () => {
  const devTools: string[] = [
    "DevTools",
    "Git",
    "Next.js",
    "Vite",
    "npm",
    "Node.js",
    "Rest API",
    "Vercel",
  ];

  return (
    <div className="bg-black/50 rounded-3xl flex flex-col md:mx-2 my-2 p-1">
      <p className="text-2xl text-center py-2 mt-2 mx-2 ">
        Znane mi narzędzia developerskie
      </p>
      <ul className="flex flex-wrap justify-center items-center">
        {devTools.map((tool) => (
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

export default DeveloperTools;

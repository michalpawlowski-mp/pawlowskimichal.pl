const Skills = () => {
  return (
    <article id="skills" className="w-2/5 bg-gray-50/20 rounded-3xl flex flex-col m-3  p-2">
      <p className="text-3xl text-center pb-2">Znane mi technologie</p>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">HTML</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">CSS</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">SASS/SCSS</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">LESS</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">JavaScript</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">TypeScript</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">React</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Tailwind</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Bootstrap</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">jQuery</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">DevTools</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Git</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Vite</li>
      </ul>
      <p className="text-3xl text-center pb-2 ">Znane mi programy</p>
      <ul className="flex flex-wrap justify-center items-center ">
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">VS Code</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Photoshop</li>
        <li className="w-1/4 text-center m-1 p-2 bg-black/30 rounded-2xl">Gimp</li>
      </ul>
    </article>
  );
};

export default Skills;

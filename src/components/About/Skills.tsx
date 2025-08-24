const Skills: React.FC = () => {
  return (
    <article id="skills" className="w-full md:w-1/2 bg-black/50 rounded-3xl flex flex-col md:mx-2 my-2 p-1">
      <p className="text-2xl text-center pb-2">Znane mi technologie</p>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">HTML</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">CSS</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">RWD</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">SASS/SCSS</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">LESS</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">JavaScript</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">TypeScript</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">React</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Tailwind</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Bootstrap</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">jQuery</li>
      </ul>
      <p className="text-2xl text-center py-2 mt-2 mx-2 border-t-2 ">Znane mi narzędzia developerskie</p>
      <ul className="flex flex-wrap justify-center items-center">
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">DevTools</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Git</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Next.js</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Vite</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">npm</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Node.js</li>
      </ul>
      <p className="text-2xl text-center py-2 mt-2 mx-2 border-t-2 ">Znane mi programy</p>
      <ul className="flex flex-wrap justify-center items-center ">
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">VS Code</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Photoshop</li>
        <li className="w-[100px] text-center m-1 p-2 bg-black/30 rounded-2xl shadow-sm shadow-gray-600">Gimp</li>
      </ul>
    </article>
  );
};

export default Skills;

const Technology: React.FC = () => {
  return (
    <div className="bg-black/50 rounded-3xl flex flex-col md:mx-2 my-2 p-1">
      <p className="text-2xl text-center pb-2">Znane mi technologie</p>
      <ul className="flex flex-wrap justify-center items-center ">
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          HTML
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          CSS
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          RWD
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          SASS/SCSS
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          LESS
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          JavaScript
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          TypeScript
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          React
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          Tailwind
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          Bootstrap
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          jQuery
        </li>
      </ul>
    </div>
  );
};

export default Technology;

const Technology: React.FC = () => {
  return (
    <div className="bg-black/50 rounded-3xl flex flex-col md:mx-2 my-2 p-1">
      <p className="text-2xl text-center py-2 mt-2 mx-2  ">Znane mi programy</p>
      <ul className="flex flex-wrap justify-center items-center ">
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          VS Code
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          Photoshop
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          Photopea
        </li>
        <li className="w-[100px] text-center m-1 p-2 bg-white/10 rounded-2xl shadow-sm shadow-gray-600">
          Gimp
        </li>
      </ul>
    </div>
  );
};

export default Technology;

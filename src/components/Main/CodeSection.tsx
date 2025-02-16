const CodeSection: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 text-gray-300 font-mono overflow-hidden rounded-lg shadow-lg w-full max-w-max h-max">
        <div className="w-full pl-1 h-max bg-gray-700 items-center  flex ">
          <div className="bg-rose-700 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-amber-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-green-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <p className="m-auto">pawlowskimichal.pl</p>
        </div>
        <div className="p-2">
          <div className="flex">
            <p className="mr-3">1</p>
            <p className="text-blue-400">&lt;div&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">2</p>
            <p className="ml-3 text-blue-400">&lt;hi&gt;</p>
            <p className="s text-red-400">Witaj na mojej stronie portfolio!</p>
            <p className=" text-blue-400">&lt;/hi&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">3</p>
            <p className="ml-3 text-blue-400">&lt;name&gt;</p>
            <p className=" text-red-400">Nazywam się Michał Pawłowski.</p>
            <p className=" text-blue-400">&lt;/name&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">4</p>
            <p className="ml-3 text-blue-400">&lt;info&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">5</p>
            <p className="ml-7 text-red-400">Tworzę nowoczesne, dynamiczne oraz responsywne</p>
          </div>
          <div className="flex">
            <p className="mr-3">6</p>
            <p className="ml-7 text-red-400">strony internetowe.</p>
          </div>
          <div className="flex">
            <p className="mr-3">7</p>
            <p className="ml-3 text-blue-400">&lt;/info&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">8</p>
            <p className="text-blue-400">&lt;/div&gt;</p>
          </div>
          <div className="flex">
            <p className="mr-3">9</p>
            <p>
              <span className="text-white animate-ping">|</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSection;

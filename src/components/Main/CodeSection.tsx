const CodeSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="bg-gray-800 text-gray-300 font-mono overflow-hidden rounded-lg shadow-lg w-full">
          <div className="w-full pl-1 h-max bg-gray-700 items-center flex ">
            <div className="bg-rose-700 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
            <div className="bg-amber-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
            <div className="bg-green-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
            <p className="m-auto">pawlowskimichal.pl</p>
          </div>
          <div className="pl-1 pr-3 text-md md:text-md 2xl:text-lg">
            <div className="flex">
              <p className="mx-2">1</p>
              <p className="text-blue-400">&lt;div</p>
              <p className="ml-2 text-blue-200">class</p>
              <p className="text-white">=</p>
              <p className="text-amber-500">"strona"</p>
              <p className="text-blue-400">&gt;</p>
            </div>
            <div>
              <div className="flex">
                <p className="mx-2">2</p>
                <p className="ml-3 text-blue-400">&lt;hi </p>
                <p className="ml-2 text-blue-200">class</p>
                <p className="text-white">=</p>
                <p className="text-amber-500">"przywitanie"</p>
                <p className="text-blue-400">&gt;</p>
              </div>
              <div className="flex">
                <p className="mx-2">3</p>
                <p className="ml-7 text-red-400">Witaj na mojej stronie portfolio!</p>
              </div>
              <div className="flex">
                <p className="mx-2">4</p>
                <p className="ml-3 text-blue-400">&lt;/hi&gt;</p>
              </div>
            </div>
            <div>
              <div className="flex">
                <p className="mx-2">5</p>
                <p className="ml-3 text-blue-400">&lt;name</p>
                <p className="ml-2 text-blue-200">class</p>
                <p className="text-white">=</p>
                <p className="text-amber-500">"imie nazwisko"</p>
                <p className="text-blue-400">&gt;</p>
              </div>
              <div className="flex">
                <p className="mx-2">6</p>
                <p className="ml-7 text-red-400">Nazywam się Michał Pawłowski.</p>
              </div>
              <div className="flex">
                <p className="mx-2">7</p>
                <p className="ml-3 text-blue-400">&lt;/name&gt; </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <p className="mx-2">8</p>
                <p className="ml-3 text-blue-400">&lt;info</p>
                <p className="ml-2 text-blue-200">class</p>
                <p className="text-white">=</p>
                <p className="text-amber-500">"oMnie"</p>
                <p className="text-blue-400">&gt;</p>
              </div>
              <div className="flex">
                <p className="mx-2">9</p>
                <p className="ml-7 text-red-400">Tworzę nowoczesne, dynamiczne oraz</p>
              </div>
              <div className="flex">
                <p className="mr-2">10</p>
                <p className="ml-7 text-red-400">responsywne strony internetowe.</p>
              </div>
              <div className="flex">
                <p className="mr-2">11</p>
                <p className="ml-3 text-blue-400">&lt;/info&gt;</p>
              </div>
            </div>
            <div className="flex">
              <p className="mr-2">12</p>
              <p className="text-blue-400">&lt;/div&gt;</p>
            </div>
            <div className="flex">
              <p className="mr-2">13</p>
              <p>
                <span className="text-white animate-ping">|</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeSection;

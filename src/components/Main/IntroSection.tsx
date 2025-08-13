const IntroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-5 w-full md:w-1/2">
      {/* <h2 className="text-6xl my-10">Frontend Developer</h2> */}
      <div className="bg-gray-800 text-gray-300 font-mono overflow-hidden rounded-lg shadow-lg w-full">
        <div className="w-full pl-1 h-max bg-gray-700 items-center flex">
          <div className="bg-rose-700 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-amber-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-green-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <p className="m-auto">pawlowskimichal.pl</p>
        </div>
        <div className="flex items-center text-center pl-1 text-xl xl:text-3xl">
          <p className="mr-1">1</p>
          <p className="md:m-4 m-2 mr-0">
            <i className="not-italic text-vscodeBlue">console</i>
            <i className="not-italic text-white">.</i>
            <i className="not-italic text-yellow-200">log</i>
            <i className="not-italic text-lime-800">
              (<i className="not-italic text-vscodeOrange">"Hello World!"</i>)
            </i>
            <i className="not-italic text-white">;</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

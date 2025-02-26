const IntroSection: React.FC = () => {
  return (
    <div className="flex flex-col mb-3 items-center w-full justify-center">
      {/* <h2 className="text-6xl my-10">Frontend Developer</h2> */}
      <div className="bg-gray-800 text-gray-300 font-mono overflow-hidden rounded-lg shadow-lg w-full max-w-max h-max">
        <div className="w-full pl-1 h-max bg-gray-700 items-center flex">
          <div className="bg-rose-700 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-amber-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <div className="bg-green-500 w-[10px] h-[10px] rounded-full justify-start m-1"></div>
          <p className="m-auto">pawlowskimichal.pl</p>
        </div>

        <div className="flex items-center text-center pl-2 text-2xl 2xl:text-5xl">
          <p className="mr-3">1</p>
          <p className="m-5">
            <i className="not-italic text-vscodeBlue">console</i>
            <i className="not-italic text-white">.</i>
            <i className="not-italic text-yellow-200">log</i>
            <i className="not-italic text-lime-900">
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

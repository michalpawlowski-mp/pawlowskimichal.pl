import github from "/icons/social/github.svg";

const Github = () => {
  return [
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/3 md:w-2/5 h-px border-white bg-white rounded-full"></div>
        <p className="text-center mx-3">Więcej projektów</p>
        <div className="w-1/3 md:w-2/5 h-px border-white bg-white rounded-full"></div>
      </div>
      <div className="w-full m-5 flex justify-center">
        <a
          className="bg-white/20 p-2 pe-4 m-4 rounded-3xl flex items-center"
          href={"https://github.com/michalpawlowski-mp?tab=repositories"}
          target="_blank"
        >
          <img className="me-3 invert" src={github} alt="Link do mojego profilu na CodePen" />
          michalpawlowski-mp
        </a>
      </div>
    </>,
  ];
};

export default Github;

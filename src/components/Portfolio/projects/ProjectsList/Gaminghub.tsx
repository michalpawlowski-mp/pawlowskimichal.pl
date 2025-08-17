import web from "/icons/any/web.svg";
import gaminghub from "/any/GamingHub/gaminghub-game.svg";
import github from "/icons/social/github.svg";
import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css.svg";
import JS from "/icons/tech/js.svg";

const GamingHub: React.FC = () => {
  return (
    <>
      <div className="w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5 shadow-lg ">
        <div className="flex w-full justify-center items-center border-b-2 border-white">
          {/* <button className="bg-white w-[20px] h-[20px] text-black p-1 rounded-full flex items-center justify-center ml-2">i</button> */}
          <p className="text-2xl overflow-hidden w-full  p-2">GamingHub</p>
        </div>
        <img src={gaminghub} alt="Podglad strony GamingHub" className="" />
        <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
          {/* <p className="text-xl">Użyte przezemnie technologie</p> */}
          <div className="flex">
            <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
            <img src={CSS} alt="ikonka CSS" className="w-[20px] m-2" />
            <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <a
            href={"https://github.com/michalpawlowski-mp/GamingHub"}
            target="_blank"
            className="hover:bg-white/20 w-1/2 border-r-2 flex items-center justify-center"
          >
            <img
              src={github}
              alt=" link do GitHub"
              className="w-6 h-6 m-2 invert"
            />
          </a>
          <a
            href={"https://michalpawlowski-mp.github.io/GamingHub/"}
            target="_blank"
            className="hover:bg-white/20 w-1/2 flex items-center justify-center"
          >
            <img
              src={web}
              alt="link do strony"
              className="w-6 h-6 m-2 invert"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default GamingHub;

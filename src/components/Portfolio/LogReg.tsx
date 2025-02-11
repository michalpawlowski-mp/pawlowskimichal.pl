import web from "/icons/any/web.svg";
import logreg from "/any/logReg.svg";
import github from "/icons/social/github.svg";
import HTML from "/icons/tech/html.svg";
import CSS from "/icons/tech/css3.svg";
import JS from "/icons/tech/js.svg";

const LogReg = () => {
  return (
    <>
      <div className="w-[400px] text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5 shadow-lg">
        <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">Formularz Logowania/Rejestracji</p>
        <img src={logreg} alt="Podglad formularza Logowanie/Rejestracji" className="" />
        <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
          {/* <p className="text-xl">Użyte technologie :</p> */}
          <img src={HTML} alt="ikonka HTML" className="w-[20px] m-2" />
          <img src={CSS} alt="ikonka CSS" className="w-[20px] m-2" />
          <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
        </div>
        <div className="flex justify-center w-full">
          <a href="https://github.com/aJpaRmp/Login-Registration" target="_blank" className="hover:bg-white/20 w-1/2 border-r-2 flex items-center justify-center">
            <img src={github} alt=" link do GitHub" className="w-6 h-6 m-2 invert" />
          </a>
          <a href="https://ajparmp.github.io/Login-Registration/" target="_blank" className="hover:bg-white/20 w-1/2 flex items-center justify-center">
            <img src={web} alt="link do strony" className="w-6 h-6 m-2 invert" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LogReg;

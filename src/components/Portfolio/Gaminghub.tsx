import web from "/icons/any/web.svg";
import gaminghub from "/any/gaminghub.svg";
import github from "/icons/social/github.svg";

const GamingHub = () => {
  return (
    <>
      <div className="w-[400px] text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5">
        <p className="bg-slate-50/50 text-2xl overflow-hidden w-full">GamingHub</p>
        <img src={gaminghub} alt="Podglad strony GamingHub" className="" />
        <div className="flex justify-center w-full">
          <a
            href="https://github.com/aJpaRmp/GamingHub"
            className="bg-white/20 w-1/2 border-r-2 flex items-center justify-center"
          >
            <img src={github} alt=" link do GitHub" className="w-6 h-6 m-2 invert" />
          </a>
          <a href="https://ajparmp.github.io/GamingHub/" className="bg-white/20 w-1/2 flex items-center justify-center">
            <img src={web} alt="link do strony" className="w-6 h-6 m-2 invert" />
          </a>
        </div>
      </div>
    </>
  );
};

export default GamingHub;

import web from "/icons/any/web.svg";
import gaminghub from "/any/gaminghub.svg";
import github from "/icons/social/github.svg";

const GamingHub = () => {
  return (
    <>
      <div className="w-[10rem] text-center flex flex-col items-center justify-center border-2 border-white rounded-2xl m-5">
        <p className="bg-slate-50/50 w-full">GamingHub</p>
        <img src={gaminghub} alt="Podglad strony GamingHub" className="w-46" />
        <div className="flex justify-center w-full">
          <a
            href="https://github.com/aJpaRmp/GamingHub"
            className="bg-white/20 w-1/2 border-r-2 flex items-center justify-center"
          >
            <img src={github} alt="" />
          </a>
          <a href="https://ajparmp.github.io/GamingHub/" className="bg-white/20 w-1/2 flex items-center justify-center">
            <img src={web} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default GamingHub;

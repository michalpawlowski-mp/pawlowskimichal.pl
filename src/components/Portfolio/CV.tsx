import web from "/icons/any/web.svg";
import github from "/icons/social/github.svg";
import cv from "/any/cv.svg";
import SASS from "/icons/tech/sass.svg";
import JS from "/icons/tech/js.svg";
import Vite from "/icons/tech/vite.svg";
import React from "/icons/tech/react.svg";
import Bootstrap from "/icons/tech/Bootstrap.svg";

const CV: React.FC  = () => {
  return (
    <>
      <div className="w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5 shadow-lg">
        <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">Curriculum vitae</p>
        <img src={cv} alt="Podglad strony CV"/>
        <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
          {/* <p className="text-xl">Użyte technologie :</p> */}
          <img src={Vite} alt="ikonka Vite" className="w-[20px] m-2" />
          <img src={SASS} alt="ikonka SASS/SCSS" className="w-[20px] m-2" />
          <img src={Bootstrap} alt="ikonka CSS" className="w-[20px] m-2" />
          <img src={JS} alt="ikonka JavaScript" className="w-[20px] m-2" />
          <img src={React} alt="ikonka React" className="w-[20px] m-2" />
        </div>
        <div className="flex justify-center w-full">
          <a href="https://github.com/michalpawlowski-mp/Curriculum-Vitae" target="_blank" className="hover:bg-white/20 w-1/2 border-r-2 flex items-center justify-center">
            <img src={github} alt=" link do GitHub" className="w-6 h-6 m-2 invert" />
          </a>
          <a href="https://michalpawlowski-mp.github.io/Curriculum-Vitae/" target="_blank" className="hover:bg-white/20 w-1/2 flex items-center justify-center">
            <img src={web} alt="link do strony" className="w-6 h-6 m-2 invert" />
          </a>
        </div>
      </div>
    </>
  );
};

export default CV;

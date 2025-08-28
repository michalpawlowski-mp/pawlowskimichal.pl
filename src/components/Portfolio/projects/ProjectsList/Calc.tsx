import { html, cal, css, js } from "../../../../assets/index";
import LinkPanel from "./LinkPanel/LinkPanel";

const Calc: React.FC = () => {
  return (
    <>
      <div className="w-[400px] bg-black/70 text-center flex flex-col items-center justify-center border-2 overflow-hidden border-white rounded-2xl m-5 shadow-lg">
        <p className="text-2xl overflow-hidden w-full border-b-2 border-white p-2">
          Calculator
        </p>
        <img src={cal} alt="Podglad strony kólko i krzyżyk" />
        <div className="flex justify-center w-full items-center border-t-2 border-b-2 border-white">
          <img src={html} alt="ikonka HTML" className="w-[20px] m-2" />
          <img src={css} alt="ikonka CSS" className="w-[20px] m-2" />
          <img src={js} alt="ikonka JavaScript" className="w-[20px] m-2" />
        </div>

        <LinkPanel
          githubLink="https://github.com/michalpawlowski-mp/Calculator"
          websiteLink="https://michalpawlowski-mp.github.io/Calculator/"
        />
      </div>
    </>
  );
};

export default Calc;

import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";

const IntroSection = () => {
  return (
    <>
      <div className="m-6 flex flex-col items-center text-center">
        {/* <h2 className="text-6xl">Frontend Developer</h2> */}
        <p className="text-5xl m-5">
          <i className="not-italic text-cyan-400">console</i>
          <i className="not-italic text-white">.</i>
          <i className="not-italic text-yellow-200">log</i>
          <i className="not-italic text-">
            (<i className="not-italic text-orange-400">"Hello World!"</i>)
          </i>
          <i className="not-italic text-white">;</i>
        </p>
        <Link to="/contact" className="m-3">
          <div className="flex text-center items-center border-2 w-max p-3 rounded-2xl border-white">
            <p className="transition-all duration-500 group-hover:translate-x-1">Kontakt ze mną</p>
            <img className="invert m-2" src={arrow} alt="strzałka w prawo" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default IntroSection;

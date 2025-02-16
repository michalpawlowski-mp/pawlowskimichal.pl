import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";

const ButtonContact: React.FC = () => {
  return (
    <>
      <Link to="/contact" className="group w-full flex items-center justify-center mb-3">
        <div className="flex text-center items-center w-max px-3 my-5 rounded-full bg-slate-700 hover:bg-slate-600">
          <p className="transition-all duration-500 group-hover:translate-x-1">Kontakt ze mną</p>
          <img className="invert m-2 transition-transform duration-500 group-hover:translate-x-2" src={arrow} alt="strzałka w prawo" />
        </div>
      </Link>
    </>
  );
};

export default ButtonContact;

import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";

const ButtonContact: React.FC = () => {
  return (
    <>
      <Link to="/contact" className="">
        <div className="flex text-center items-center group">
          <p className="transition-all duration-500 group-hover:translate-x-1">Kontakt ze mną</p>
          <img className="invert m-2 transition-transform duration-500 group-hover:translate-x-2" src={arrow} alt="strzałka w prawo" />
        </div>
      </Link>
    </>
  );
};

export default ButtonContact;

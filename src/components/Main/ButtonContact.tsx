import { Link } from "react-router-dom";
import arrow from "/icons/any/arrow.svg";

const ButtonContact: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="inline-flex mx-auto items-center gap-2 rounded-2xl bg-slate-700 px-6 py-2 text-white font-medium shadow-lg transition-all duration-300 hover:bg-gray-800 hover:translate-x-1"
    >
      <span>Kontakt ze mną</span>
      <img
        src={arrow}
        alt="strzałka w prawo"
        className="w-5 h-5 invert transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default ButtonContact;

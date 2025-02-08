import me from "/icons/any/me-a.svg";
import { Link } from "react-router-dom";

const ConstactSection = () => {
  return (
    <>
      <div className="flex items-center p-4  m-4">
        <div className="rounded-full overflow-hidden p-2 m-2 w-32 h-32 relative">
          <img src={me} alt="Moje zdjęcie w wrsji animowanej" className="absolute z-10" />
          <div className="animate-spin duration-1000 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700  w-full h-full absolute top-0 left-0"></div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl mb-2">Więcej o mnie</p>
          <p className="text-sm">Przejdz do zakładki "O mnie" aby dowiedzieć się więcej</p>
          <Link to="/about" className="p-2 px-4 m-2 text-center bg-slate-700 hover:bg-slate-600 rounded-full">
            O mnie
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConstactSection;

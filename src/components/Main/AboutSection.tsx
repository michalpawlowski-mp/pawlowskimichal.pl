import me from "/any/mypicture/me-a.svg";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full p-0 md:p-4 m-0 md:m-4">
        <div className="flex">
          <div className="rounded-full overflow-hidden p-2 md:mr-10 m-2 w-[125px] h-[125px] relative shadow-lg shadow-orange-300">
            <div className="animate-spin duration-1000 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700  w-full h-full absolute top-0 left-0"></div>
            <img
              src={me}
              alt="Moje zdjęcie w wrsji animowanej"
              className="absolute"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl text-center mb-2">Więcej o mnie</p>
          <p className="text-sm text-center">
            Przejdz do zakładki "O mnie" aby dowiedzieć się więcej
          </p>
          <Link
            to="/about"
            className="p-2 px-4 m-2 text-center bg-slate-700 hover:bg-slate-600 rounded-full"
          >
            O mnie
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutSection;

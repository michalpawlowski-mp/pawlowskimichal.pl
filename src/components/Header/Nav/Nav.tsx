import { useState } from "react";
import { Link } from "react-router-dom";
import imgDownload from "/icons/any/downloads.svg";

const Nav = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex">
      <ul className="flex gap-6 text-lg">
        {" "}
        {/* Dodano text-lg dla zwiększenia rozmiaru czcionki */}
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">
            O mnie
          </Link>
        </li>
        <li>
          <Link to="/Portfolio" className="text-white hover:text-gray-400">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">
            Kontakt
          </Link>
        </li>
        <li
          className="flex items-center"
          id="cv"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Link to="/CurriculumVitae" className="text-white hover:text-gray-400 flex items-center">
            <p className="flex items-center">
              C<b className={`font-normal ${isHovered ? "" : "hidden"}`}>urriculum </b>V
              <b className={`font-normal ${isHovered ? "" : "hidden"}`}>itae</b>
            </p>
          </Link>
          <button id="dowloadCV" className="ml-3">
            <img className="invert" src={imgDownload} alt="ikonka pobrania (CV - Michał Pawłowski)" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

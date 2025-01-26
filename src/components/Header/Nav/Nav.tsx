import { useState } from "react";
import { Link } from "react-router-dom";
import imgDownload from "/icons/any/downloads.svg";

function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="flex w-full p-2">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="active-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="active-link">
            O mnie
          </Link>
        </li>
        <li>
          <Link to="/Portfolio" className="active-link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="active-link">
            Kontakt
          </Link>
        </li>
        <li className="flex" id="cv" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <Link to="/CurriculumVitae">
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
}

export default Nav;

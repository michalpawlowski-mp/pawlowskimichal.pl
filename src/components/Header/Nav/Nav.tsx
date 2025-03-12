import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const Nav: React.FC<NavProps> = ({ isOpen }) => {
  return (
    <nav
      className={`fixed top-0 right-0 h-full w-1/2 bg-gray-800 md:bg-gray-800/0 bg-opacity-85 z-20 p-2 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:relative md:translate-x-0 md:flex md:flex-grow md:justify-center md:w-auto md:bg-opacity-100`}
    >
      <ul className="flex flex-col items-center justify-center h-full md:gap-10 gap-24 md:text-xl text-3xl md:flex-row">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Strona Główna
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
      </ul>
    </nav>
  );
};

export default Nav;

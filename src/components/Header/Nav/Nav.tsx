import { Link } from "react-router-dom";
// import { useState } from "react";
// import imgDownload from "/icons/any/downloads.svg";

const Nav: React.FC  = () => {


  return (
    //685px
    <nav className="flex flex-grow justify-center sm:justify-end">

      <ul className="flex gap-10 text-xl sm:flex">
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
      </ul>
    </nav>
  );
};

export default Nav;

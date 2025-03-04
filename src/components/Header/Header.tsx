import React, { useState } from "react";
import Nav from "./Nav/Nav.tsx";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav: () => void = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-row items-center justify-between w-full p-4">
      <Link to="/" className="items-center w-[270px]">
        <h1 className="text-2xl text-white uppercase"></h1>
      </Link>
      <button className="text-white z-50 text-4xl sm:hidden" onClick={toggleNav}>
        {isNavOpen ? "\u00D7" : "\u2630"}
      </button>
      <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
    </header>
  );
};

export default Header;

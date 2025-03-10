import React from "react";
import Nav from "./Nav/Nav.tsx";
import { Link } from "react-router-dom";
import { useNavigation } from "./useNavigation.ts";

const Header: React.FC = () => {
  const { isNavOpen, navRef, buttonRef, toggleNav } = useNavigation();

  return (
    <header className="flex flex-row items-center justify-between w-full p-3">
      <Link to="/" className="items-center w-[270px]">
        <h1 className="text-2xl text-white uppercase"></h1>
      </Link>
      <button ref={buttonRef} className="text-white z-30 text-4xl sm:hidden absolute right-2 top-2" onClick={toggleNav}>
        {isNavOpen ? "\u00D7" : "\u2630"}
      </button>
      <div ref={navRef}>
        <Nav isOpen={isNavOpen} toggleNav={toggleNav} />
      </div>
    </header>
  );
};

export default Header;

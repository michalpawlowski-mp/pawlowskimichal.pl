import Nav from "./Nav/Nav.tsx";
// import img from "/icons/any/MP-logo.svg";
import "../../style/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex items-center w-screen">
        {/* <img src={img} alt="Moje logo `MP`(Michal Pawłowski)" /> */}
        <Link to="/" className="w-1/2">
          <h1 className="m-2 text-xl uppercase justify-start"></h1>
        </Link>
        <Nav />
      </header>
    </>
  );
}

export default Header;

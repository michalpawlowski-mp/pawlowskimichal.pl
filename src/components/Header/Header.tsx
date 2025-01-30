import Nav from "./Nav/Nav.tsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 ">
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl text-white uppercase"></h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;

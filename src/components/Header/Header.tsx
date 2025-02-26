import Nav from "./Nav/Nav.tsx";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between w-full p-4">
      <Link to="/" className="items-center  w-[270px]">
        <h1 className="text-2xl text-white uppercase"></h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;

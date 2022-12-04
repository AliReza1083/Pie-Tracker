import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

import { ReactComponent as Logo } from "../../assets/logo_dark.svg";
import { BsFillSunFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <Logo />
        </Link>

        <ul className="flex gap-8 items-center">
          <div className="bg-[#121212] text-lg p-2 rounded-md">
            <BsFillSunFill />
          </div>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <Link to="/counting">Start Eating</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";

import { ReactComponent as Logo } from "../../assets/logo_dark.svg";
import { BsFillSunFill } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isNavLinks, setIsNavLinks] = useState(false);

  return (
    <>
      <nav>
        <Link to={"/"}>
          <Logo />
        </Link>

        <ul
          data-navLinks={isNavLinks}
          className="flex gap-8 items-center md:gap-1 md:hidden"
        >
          <div className="bg-[#121212] text-lg p-2 rounded-md">
            <BsFillSunFill />
          </div>
          <li>
            <a href="#information">Info</a>
          </li>
          <li>
            <Link to="/counting">Start Eating</Link>
          </li>
        </ul>

        <div
          onClick={() => setIsNavLinks(!isNavLinks)}
          className="hidden md:block text-2xl"
        >
          <RiMenu3Line />
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;

import { Outlet, Link } from "react-router-dom";

import "./Navbar.css";
import useLocalStorage from "../../hooks/useLocalStorage";

import { ReactComponent as LogoDark } from "../../assets/logo_dark.svg";
import { ReactComponent as LogoWhite } from "../../assets/logo_light.svg";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isNavLinks, setIsNavLinks] = useState(false);
  const [logo, setLogo] = useState(<LogoDark />);
  const [darkIcon, setDarkIcon] = useState(<BsFillSunFill />);
  const [darkMode, setDarkMode] = useLocalStorage("Dark Mode", false);

  useEffect(() => {
    if (darkMode == true) {
      document.documentElement.classList.add("dark");
      setDarkIcon(<BsFillMoonFill />);
      setLogo(<LogoWhite />);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkIcon(<BsFillSunFill />);
      setLogo(<LogoDark />);
    }
  }, [darkMode]);

  return (
    <>
      <nav>
        <Link to={"/"}>{logo}</Link>

        <ul
          data-navLinks={isNavLinks}
          className="flex gap-8 items-center md:gap-1 md:hidden"
        >
          <div
            onClick={() => setDarkMode(darkMode == false ? true : false)}
            className="bg-[#121212] dark:bg-[#f2f2f2] text-lg p-2 rounded-md"
          >
            {darkIcon}
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

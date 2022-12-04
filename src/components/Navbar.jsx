import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Navbar</h1>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

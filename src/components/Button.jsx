import { Link } from "react-router-dom";

const Button = ({ path, value }) => {
  return (
    <Link
      to={path}
      className="bg-darkGreen text-white px-8 py-2 rounded-md hover:bg-opacity-70"
    >
      {value}
    </Link>
  );
};

export default Button;

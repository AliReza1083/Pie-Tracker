import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-darkGreen flex flex-col items-center gap-2 py-4">
      <div className="flex gap-4 text-3xl">
        <FaDiscord />
        <AiFillTwitterCircle />
      </div>
      <small>Copyright © Pie 2022</small>
    </div>
  );
};

export default Footer;

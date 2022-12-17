import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-white w-full bg-darkGreen flex flex-col items-center gap-2 py-4">
      <div className="flex gap-4 text-3xl">
        <a href="https://discord.gg/ZmAcReCx" target={"_blank"}>
          <FaDiscord />
        </a>
        <a href="https://twitter.com/askimlearning" target={"_blank"}>
          <AiFillTwitterCircle />
        </a>
      </div>
      <small>Copyright © Pie 2022</small>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex justify-center pb-12 px-4">
      <div
        id="background__gradient"
        className="relative w-full max-w-[1187px] h-[218px] rounded-xl overflow-hidden flex flex-col justify-center items-center"
      >
        <h1 className="text-5xl uppercase text-white">pie tracker</h1>
        <Link
          to={"/counting"}
          className="text-black px-6 py-2 bg-white mt-3 rounded-md"
        >
          Start Eating
        </Link>
      </div>
    </div>
  );
};

export default Banner;

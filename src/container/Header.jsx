import HeaderImg from "../assets/cristmas_tree.jpg";
import CristmasLight from "../assets/cristmas_light.png";

const Header = () => {
  return (
    <div>
      <div className="lg:mt-16 grid grid-cols-2 lg:grid-cols-1 items-center px-12 md:px-8 sm:px-4">
        <div className="flex flex-col items-start">
          <h1 className="relative text-7xl text-lightGreen">
            PIE TRACKER
            <img
              className="absolute top-[-30px] left-1/2 -z-50 -translate-x-1/2"
              width={"90%"}
              src={CristmasLight}
              alt=""
            />
          </h1>
          <p className="text-2xl text-lightGreen text-opacity-70">
            Eat pie and count one
          </p>
          <a href="/counting">Start Eating</a>
        </div>

        <div className="flex justify-center">
          <img
            className="w-full max-w-[500px] "
            width={"100%"}
            src={HeaderImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

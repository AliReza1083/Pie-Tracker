import { Button, BackgroundGradient } from "../components";

import HeaderImg from "../assets/cristmas_tree.jpg";
import CristmasLight from "../assets/cristmas_light.png";

const Header = () => {
  return (
    <div className="flex justify-center py-12 lg:py-[90px]">
      {/* Main Container */}
      <div className="relative w-full min2xl:max-w-[1500px] grid grid-cols-2 lg:grid-cols-1 items-center px-12 md:px-8 sm:px-4">
        <BackgroundGradient />
        {/* item 1 */}
        <div className="flex flex-col items-start gap-4 md:gap-2 lg:items-center">
          <h1 className="relative text-7xl lg:text-[5vw] sm:text-4xl text-lightGreen">
            PIE TRACKER
            <img
              className="absolute top-[-30px] left-1/2 -z-50 -translate-x-1/2 lg:hidden"
              width={"90%"}
              src={CristmasLight}
              alt=""
            />
          </h1>
          <p className="text-2xl text-opacity-70 md:text-base mb-4">
            Eat pie and count one
          </p>
          <Button path={"/counting"} value="Start Eating" />
        </div>

        {/* item 2 */}
        <div className="flex justify-center p-12">
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

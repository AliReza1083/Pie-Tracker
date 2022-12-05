import { ReactComponent as CountingSVG } from "../assets/Counting.svg";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

import { motion } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage";

const Counting = () => {
  const [counting, setCounting] = useLocalStorage("counts", 1);
  const [minusButton, setMinusButton] = useState(false);
  const [plusButton, setPlusButton] = useState(false);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div className="h-screen w-full min2xl:max-w-[1500px] grid grid-cols-2 items-center p-16 md:grid-cols-1">
        <CountingSVG className="w-full max-w-[500px] md:hidden" />
        <div className="flex flex-col items-center">
          <motion.h2
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-9xl ${
              minusButton && plusButton == false
                ? "text-red-600"
                : minusButton == false && plusButton
                ? "text-green-600"
                : "text-white dark:text-black"
            }`}
          >
            {counting}
          </motion.h2>
          <div className="flex items-center gap-44 md:gap-12 text-4xl mt-8">
            <motion.button
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onMouseEnter={() => setMinusButton(true)}
              onMouseLeave={() => setMinusButton(false)}
              onClick={() => setCounting(counting - 1)}
              className={`text-white bg-red-800 p-4 rounded-xl active:scale-90 hover:scale-105 duration-150 ${
                plusButton ? "opacity-30 scale-90" : ""
              }`}
            >
              <AiOutlineMinus />
            </motion.button>
            <motion.button
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onMouseEnter={() => setPlusButton(true)}
              onMouseLeave={() => setPlusButton(false)}
              onClick={() => setCounting(counting + 1)}
              className={`text-white bg-green-800 p-4 rounded-xl active:scale-90 hover:scale-105 duration-150 ${
                minusButton ? "opacity-30 scale-90" : ""
              }`}
            >
              <AiOutlinePlus />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Counting;

import React, { useContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";

const Card = () => {
  const [yes, setYes] = useState(false);
  const [position, setPosition] = useState({ top: "161px", left: "300px" });

  const handleYes = () => {
    console.log("its a yes");
    setYes((e) => !e);
  };

  const [theme, setTheme] = useContext(ThemeContext);
  console.log(theme);

  const handleTheme = () => {
    setTheme((data) => !data);
  };

  const handleNo = () => {
    function getRandom() {
      const number = Math.random() * 200;

      return Math.round(number + 20);
    }

    let a = getRandom();
    let b = getRandom();

    setPosition({
      top: `${a}px`,
      left: `${b}px`,
    });
  };

  return (
    <div
      className={`w-full flex item-center justify-center ${theme ? "bg-pink-200" : "bg-zinc-900"}  transition-all ease-in-out duration-1000 h-screen`}
    >
      <div className="theme text-white " onClick={() => handleTheme()}>
        {theme ? "Dark" : "light"}
      </div>
      <div className="flex items-center justify-center w-full h-full px-20">
        <div className=" relative rounded-xl bg-white flex flex-col px-20 py-10 ">
          {yes ? (
            <h1 className="text-2xl my-2 font-bold text-red-500 font-mono">
              Yeah! 💞 i knew it!😍
            </h1>
          ) : (
            <>
              <h1 className="text-2xl my-2 font-bold text-pink-500 font-mono">
                Will you be my Valentine
              </h1>
              <span className="text-4xl my-4 text-center">💞</span>

              <div className="btns ">
                <button
                  onClick={() => handleYes()}
                  className="px-4 hover:scale-[1.1] transition-all cursor-pointer py-2 text-xl bg-red-500/70 rounded-full font-bold text-taupe-50"
                >
                  Yes💖
                </button>
                <button
                  onClick={() => handleNo()}
                  style={{ top: position.top, left: position.left }}
                  className={`  px-4 absolute transition-all cursor-pointer py-2 text-xl bg-red-500/10 rounded-full font-bold text-zinc-800`}
                >
                  No💔
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

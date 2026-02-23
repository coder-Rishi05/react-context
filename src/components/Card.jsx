import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Card = () => {
  const [yes, setYes] = useState(false);
  const [position, setPosition] = useState({ top: "161px", left: "300px" });

  const [theme, setTheme] = useContext(ThemeContext);

  const handleYes = () => {
    setYes((e) => !e);
  };

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
      className={`w-full min-h-screen flex flex-col ${
        theme ? "bg-pink-200" : "bg-zinc-900"
      } transition-all ease-in-out duration-1000`}
    >
      {/* Navbar */}
      <nav
        className={`w-full flex justify-between items-center px-6 py-4 shadow-md ${
          theme ? "bg-pink-300 text-zinc-800" : "bg-zinc-800 text-white"
        }`}
      >
        <h1 className="font-bold text-lg">Valentine Card</h1>
        <button
          onClick={handleTheme}
          className="px-4 py-2 rounded-md font-semibold transition-all hover:scale-105"
        >
          {theme ? "Dark" : "Light"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-10">
        <div className="relative rounded-xl bg-white flex flex-col items-center px-6 sm:px-20 py-10 w-full max-w-md shadow-lg">
          {yes ? (
            <h1 className="text-xl sm:text-2xl my-2 font-bold text-red-500 font-mono text-center">
              Yeah! 💞 I knew it! 😍
            </h1>
          ) : (
            <>
              <h1 className="text-xl sm:text-2xl my-2 font-bold text-pink-500 font-mono text-center">
                Will you be my Valentine
              </h1>
              <span className="text-3xl sm:text-4xl my-4 text-center">💞</span>

              <div className="btns flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
                <button
                  onClick={handleYes}
                  className="px-4 py-2 text-lg sm:text-xl bg-red-500/70 rounded-full font-bold text-white cursor-pointer transition-all hover:scale-110"
                >
                  Yes💖
                </button>
                <button
                  onClick={handleNo}
                  style={{ top: position.top, left: position.left }}
                  className="absolute px-4 py-2 text-lg sm:text-xl bg-red-500/10 rounded-full font-bold text-zinc-800 cursor-pointer transition-all"
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

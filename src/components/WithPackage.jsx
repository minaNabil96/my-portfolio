import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
//
const mernWord = [
  { char: "M", icon: <SiMongodb /> },
  { char: "E", icon: <SiExpress /> },
  { char: "R", icon: <SiReact /> },
  { char: "N", icon: <SiNodedotjs /> },
];
const WithPackage = () => {
  const mernChars = mernWord.map(({ char }, idx, array) => (
    <p
      key={idx}
      className={` px-1 ${
        char === "M"
          ? "text-green-600"
          : char === "E"
          ? "text-orange-600"
          : char === "R"
          ? "text-blue-500"
          : "text-green-500"
      }`}
    >
      {`${char}${idx < array.length - 1 ? "." : ""}`}
    </p>
  ));

  const mernIcons = mernWord.map(({ char, icon }, idx) => (
    <div
      key={idx}
      className={`rounded-full bg-slate-100 p-10 m-4 shadow-sm shadow-slate-400 ring-1 ring-blue-500 transform hover:rotate-[-360deg] duration-500 `}
    >
      <span
        className={`text-[60px]  ${
          char === "M"
            ? "text-green-600"
            : char === "E"
            ? "text-orange-600"
            : char === "R"
            ? "text-blue-500"
            : "text-green-500"
        } `}
      >
        {icon}
      </span>
    </div>
  ));
  return (
    <div
      className={`min-h-screen bg-gradient-to-tr from-mainColor2/60 to-mainColor flex items-center justify-center`}
    >
      <div
        className={`container mx-auto grid grid-cols-1 md:cols-2 space-y-20 py-20`}
      >
        <div
          className={`flex  flex-col items-center justify-center space-y-20 py-10`}
        >
          <h2 className={`text-[30px] text-center font-semibold text-white`}>
            Front End Web Developer.
          </h2>
          <h2
            className={` flex text-[25px] text-center font-semibold text-white`}
          >
            With <span className={`px-2 flex`}>{mernChars}</span> Stack.
          </h2>
        </div>
        <div className={`flex items-center justify-evenly flex-wrap `}>
          {mernIcons}
        </div>
      </div>
    </div>
  );
};

export default WithPackage;

import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Landing = () => {
  return (
    <div className="min-h-screen max-lg:min-h-[700px]  relative mx-auto flex items-center justify-center bg-gradient-to-br from-white to-slate-300 overflow-hidden ">
      <div className=" z-10 absolute grid grid-cols-1 md:grid-cols-2 max-md:space-y-36 container max-md:py-10">
        <div className="flex flex-col items-center justify-start gap-6">
          <h2 className="text-[34px] font-bold text-black">Hello, Im Mina..</h2>
          <h3 className="text-[28px] text-black/95 font-semibold ">
            This is my Portfolio
          </h3>
        </div>
        <div className=" relative bg-slate-200 w-60 h-80 mx-auto rounded-ss-[4rem] rounded-ee-[4rem] flex items-center justify-center border-2 border-black shadow-md shadow-slate-600 ">
          <div
            className={`absolute -top-16 flex items-center justify-center w-24 h-24 rounded-full bg-slate-200 border-2 border-black shadow-sm shadow-slate-600 `}
          >
            <RiDoubleQuotesL className={`text-[40px] text-black  `} />
          </div>
          <b className=" absolute w-[80%] text-[20px] text-center leading-10  z-10 ">
            Tell me, and i forget. Teach me, and i remember. Involve me, and i
            learn.
          </b>
        </div>
      </div>
      <div className="absolute  bottom-40 my-auto w-full  max-w-3xl max-md:hidden  ">
        <div className={`relative w-full   `}>
          <div
            className={`  animate-blob1 shadow-md shadow-yellow-300 ring ring-yellow-300 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-0 -left-4   h-96 w-96 rounded-full bg-green-400`}
          ></div>
          <div
            className={`   animate-blob2 shadow-md shadow-yellow-300 ring ring-yellow-300 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-0 -right-4   h-96 w-96 rounded-full bg-red-300`}
          ></div>
          <div
            className={`  animate-blob3 shadow-md shadow-yellow-300 ring ring-yellow-300 absolute mix-blend-multiply filter blur-xl opacity-70  bottom-6 left-40   h-96 w-96 rounded-full bg-blue-300 blob1A `}
          ></div>
        </div>
      </div>
      <div className="absolute  bottom-100 my-auto w-full  max-w-2xl md:hidden  ">
        <div className={`relative w-full   `}>
          <div
            className={`  animate-blob1 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-8 -left-4   h-60 w-60 rounded-full bg-green-400`}
          ></div>
          <div
            className={`   animate-blob2 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-20 -right-4   h-60 w-60 rounded-full bg-red-300`}
          ></div>
          <div
            className={`  animate-blob3 absolute mix-blend-multiply filter blur-xl opacity-70  bottom-8 left-20   h-60 w-60 rounded-full bg-blue-300 `}
          ></div>
        </div>
        <div className={`relative w-full -bottom-96  `}>
          <div
            className={`   animate-blob2 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-24 -right-10   h-60 w-60 rounded-full bg-yellow-300`}
          ></div>
          <div
            className={`  animate-blob3 absolute mix-blend-multiply filter blur-xl opacity-70  bottom-10 left-32   h-60 w-60 rounded-full bg-purple-300`}
          ></div>
          <div
            className={`  animate-blob1 absolute mix-blend-multiply filter blur-xl opacity-70 bottom-12 -left-6   h-60 w-60 rounded-full bg-blue-400`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

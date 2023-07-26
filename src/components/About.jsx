import React, { useState, useEffect, useRef, useMemo } from "react";
import Button from "../reusable/Button";
import Feature from "../reusable/Feature.jsx";
import useDetectElement from "../reusable/useDetectElement";
//
const features = [
  { num: "1", prop: "fast as we can" },
  { num: "2", prop: "littel cost" },
  { num: "3", prop: "professional finish" },
];

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isIntersecting1 = useIsInViewport(ref1);
  const isIntersecting2 = useIsInViewport(ref2);
  const isIntersecting3 = useIsInViewport(ref3);
  const isIntersecting4 = useIsInViewport(ref4);

  return (
    <div className=" min-h-screen py-10  bg-gradient-to-br from-white to-slate-300 overflow-hidden ">
      <div
        className={` max-lg:space-y-40 container mx-auto  py-10 grid max-lg:grid-cols-1 grid-cols-2 place-items-center place-content-center  `}
      >
        {/* 1 */}
        <div
          ref={ref1}
          className={`w-1/2 h-40 m-10 bg-gradient-to-tr from-mainColor2/60 to-mainColor rounded-md relative  transform ${
            isIntersecting1 ? "" : "-translate-x-56 opacity-0 invisible "
          } duration-[1500ms] shadow-sm shadow-purple-600  `}
        >
          <div
            className={`h-10 w-10 flex justify-center items-center bg-slate-800 rounded-full absolute -top-8 -right-5 ring-1 ring-purple-600 `}
          >
            <p className={`text-white p-1`}>{1}</p>
          </div>
          <p
            className={`text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
          >
            {`COMPETITIVE PRICES`}
          </p>
        </div>
        {/* 2 */}
        <div
          ref={ref2}
          className={`w-1/2 h-40 m-10 bg-gradient-to-tr from-mainColor2/60 to-mainColor rounded-md relative transform ${
            isIntersecting2 ? "" : "translate-x-56 opacity-0 invisible "
          } duration-[1500ms] shadow-sm shadow-purple-600  `}
        >
          <div
            className={`h-10 w-10 flex justify-center items-center bg-slate-800 rounded-full absolute -top-8 -right-5 ring-1 ring-purple-600 `}
          >
            <p className={`text-white p-1`}>{2}</p>
          </div>
          <p
            className={`text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
          >
            {`RESPONSIVE DESIGNS`}
          </p>
        </div>
        {/* 3 */}
        <div
          ref={ref3}
          className={`w-1/2 h-40 m-10 bg-gradient-to-tr from-mainColor2/60 to-mainColor rounded-md relative transform ${
            isIntersecting3 ? "" : "-translate-x-56 opacity-0 invisible "
          } duration-[1500ms] shadow-sm shadow-purple-600  `}
        >
          <div
            className={`h-10 w-10 flex justify-center items-center bg-slate-800 rounded-full absolute -top-8 -right-5 ring-1 ring-purple-600 `}
          >
            <p className={`text-white p-1`}>{3}</p>
          </div>
          <p
            className={`text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
          >
            {`GUARANTED WORK`}
          </p>
        </div>
        {/* 4 */}
        <div
          ref={ref4}
          className={`w-1/2 h-40 m-10 bg-gradient-to-tr from-mainColor2/60 to-mainColor rounded-md relative transform ${
            isIntersecting4 ? "" : "translate-x-56 opacity-0 invisible "
          } duration-[1500ms] shadow-sm shadow-purple-600  `}
        >
          <div
            className={`h-10 w-10 flex justify-center items-center bg-slate-800 rounded-full absolute -top-8 -right-5 ring-1 ring-purple-600 `}
          >
            <p className={`text-white p-1`}>{4}</p>
          </div>
          <p
            className={`text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
          >
            {`LISTEN, AND UPDATE`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

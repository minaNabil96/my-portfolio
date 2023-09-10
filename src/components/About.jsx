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
  // const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const ref6 = useRef(null);
  // const isIntersecting1 = useIsInViewport(ref1);
  // const isIntersecting2 = useIsInViewport(ref2);
  // const isIntersecting3 = useIsInViewport(ref3);
  // const isIntersecting4 = useIsInViewport(ref4);
  // const isIntersecting5 = useIsInViewport(ref5);
  // const isIntersecting6 = useIsInViewport(ref6);

  return (
    <div className=" relative min-h-screen   py-10  bg-gradient-to-br from-white to-slate-300 overflow-hidden ">
      <div className="custom-shape-divider-top-1694372582">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className={`flex items-center justify-center`}>
        <div></div>
      </div>
    </div>
  );
};

export default About;

// function useIsInViewport(ref) {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//
//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) =>
//         setIsIntersecting(entry.isIntersecting),
//       ),
//     [],
//   );
//
//   useEffect(() => {
//     observer.observe(ref.current);
//
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref, observer]);
//
//   return isIntersecting;
// }

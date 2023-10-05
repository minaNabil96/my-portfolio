import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { findTheTopOfElement } from "../store/reducers/scrollingSlice";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import hseImage from "../assets/screencapture-minanabil96-github-io-hseClone-2023-10-05-20_30_28.jpg";
//
const myWorks = [
  {
    name: "hse.ru-LandingClone",
    link: `https://minanabil96.github.io/hseClone/`,
  },
  {
    name: "elfathrealestate",
    link: `https://elfathrealestate.vercel.app/`,
  },
  {
    name: "homeflix",
    link: `https://homeflix-pi.vercel.app/`,
  },
  {
    name: "e-commerce-sample",
    link: `https://laconic-e-commerce-sample.vercel.app/`,
  },
];

// const myWorksForButtons = [
//   { name: "commerce" },
//   { name: "blog" },
//   { name: "homeflix" },
// ];

const myWorksImgs = [
  {
    name: "hse.ru-LandingClone",
    url: hseImage,
  },
  // {
  //   name: "blog",
  //   url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/rdnqgtkp2nd9kffsz3wr.jpg`,
  // },
  // {
  //   name: "blog",
  //   url: `https://res.cloudinary.com/minatry/image/upload/v1689448411/myworks/luvofkxofl1x8yndkhdj.jpg`,
  // },
  // {
  //   name: "blog",
  //   url: `https://res.cloudinary.com/minatry/image/upload/v1689448412/myworks/gdnvhcntubmqdm2tgsuk.jpg`,
  // },
  // {
  //   name: "blog",
  //   url: `https://res.cloudinary.com/minatry/image/upload/v1689448414/myworks/nhr2bncolcf80ciq82wq.jpg`,
  // },
  // {
  //   name: "blog",
  //   url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/fywd1p9p8v6v46rr2jhm.jpg`,
  // },
  {
    name: "commerce",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693380402/tbk01ob8skz8ih9xfk5c.jpg`,
  },
  {
    name: "commerce",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693380401/sewxbfgwqeofzsv3k4pj.jpg`,
  },
  {
    name: "commerce",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693380400/ty7kqogphhmzsumnrjyu.jpg`,
  },
  {
    name: "homeflix",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693384693/xgpjrtay99nmabht1j2i.jpg`,
  },
  {
    name: "homeflix",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693384693/sivtgsa1klqbyai7k1br.jpg`,
  },
  {
    name: "homeflix",
    url: `https://res.cloudinary.com/minatry/image/upload/v1693384690/itt9sqbdpbbwldubr1xg.jpg`,
  },
  {
    name: "elfathrealestate",
    url: `https://res.cloudinary.com/minatry/image/upload/v1694200103/nvlrzvlgvokrlb1wnpmr.png`,
  },
];

//
const OurWorks = () => {
  const [project, setProject] = useState("hse.ru-LandingClone");
  const [isClicked, setIsClicked] = useState(false);
  const [hoverBack, setHoverBack] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const ourWorks = useRef();
  const { translate } = useSelector((state) => state.languageSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      findTheTopOfElement({
        top: ourWorks.current.offsetTop,
        name: "ourWorks",
      }),
    );
  }, [dispatch]);
  const myWorksMap = myWorks.map(({ name, link }) => (
    <Link key={name} to={link} relative={`path`} target="_blank">
      <div className="relative bg-gradient-to-tr from-mainColor2/60 to-mainColor p-1 my-3 rounded-md flex  items-center justify-start px-2 space-x-3 group shadow-sm shadow-slate-300 ">
        <h3 className=" text-[17px] font-light w-[65%] text-white mx-1 group-hover:text-yellow-400 duration-200">
          {name}
        </h3>
        <div className=" transform duration-300 group-hover:translate-x-5 ">
          <IoArrowForwardCircleSharp
            className={`text-white group-hover:text-yellow-400 text-[20px] duration-200 `}
          />
        </div>
      </div>
    </Link>
  ));
  const setmap = useMemo(
    () => [...new Set(myWorksImgs.map(({ name }) => name))],
    [],
  );

  const projectsMap = setmap.map(
    (peojectName, idx) =>
      peojectName === project && (
        <div
          key={idx}
          className={`relative w-[450px] max-sm:w-[350px] h-[250px] overflow-hidden  aspect-video group border-4 border-black bg-black `}
          onClick={() => {
            if (isClicked) {
              setIsClicked(false);
              setHoverBack(true);
            } else {
              setIsClicked(true);
              setHoverBack(false);
            }
          }}
          onMouseLeave={() => {
            setIsClicked(false);
            setHoverBack(true);
          }}
        >
          {hoverBack && (
            <div
              className={`absolute bg-black/50 min-w-full min-h-full z-10 flex items-center justify-center cursor-pointer`}
            >
              <h3
                className={`text-yellow-300 text-[20px] capitalize select-none  `}
              >
                click
              </h3>
            </div>
          )}
          <div
            className={`h-fit transform duration-[4400ms] ease-in-out ${
              isClicked ? "-translate-y-[calc(100%-250px)]" : ""
            }`}
          >
            {myWorksImgs
              .filter(({ name }) => name === project)
              .map(({ url, name }, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt="any"
                  className={`object-fill  w-full   `}
                />
              ))}
          </div>
        </div>
      ),
  );

  // onClick={() => {
  //                setProject(name);
  //                setIsClicked(false);
  //                setHoverBack(true);
  //              }}

  return (
    <div
      className={`min-h-screen max-lg:min-h-[700px]  bg-gradient-to-br from-white to-slate-300 overflow-hidden `}
      ref={ourWorks}
    >
      <div className={`grid grid-cols-2  my-10 max-lg:space-y-12 `}>
        <div className="max-lg:col-span-2 place-self-start mx-auto space-y-20 p-2 max-md:my-10 ">
          <h2 className="text-[32px] text-black text-center border-b-2 border-b-slate-700 py-2 ">
            {translate ? "عينات من أعمالي" : "Samples of my Work"}
          </h2>
          <div className="px-20 max-md:px-10">{myWorksMap}</div>
        </div>
        <div
          className={` max-lg:col-span-2  flex items-center justify-center flex-col space-y-12   `}
        >
          <div className={` flex items-center justify-center w-[70%]  `}>
            <div
              className={`relative h-10 bg-white border-2 border-mainColor min-w-[150px] rounded-md  flex items-center justify-center   hover:cursor-pointer `}
            >
              <div
                className={`flex flex-row-reverse items-center justify-between p-2 w-full `}
                onClick={() => setOpenMenu(!openMenu)}
              >
                {!openMenu ? (
                  <GoTriangleDown className={`text-[20px]`} />
                ) : (
                  <GoTriangleUp className={`text-[20px]`} />
                )}
                <p
                  className={` ${
                    openMenu ? "text-black/70" : "text-black"
                  } text-[17px] `}
                >
                  {project}
                </p>
              </div>
              {openMenu && (
                <div
                  className={` w-full absolute top-[8.2rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20  bg-white  rounded-md flex items-center justify-center flex-col space-y-1  `}
                  onMouseLeave={() => setOpenMenu(false)}
                >
                  {setmap.map((name, idx) => (
                    <p
                      key={idx}
                      className={` w-full cursor-default hover:cursor-pointer text-black text-[17px]  p-2  flex items-center justify-around duration-150 rounded-sm  hover:text-yellow-300  hover:bg-mainColor2 hover:shadow-sm hover:shadow-stone-400 group `}
                      onClick={() => {
                        setOpenMenu(!openMenu);
                        setProject(name);
                        setIsClicked(false);
                        setHoverBack(true);
                      }}
                    >
                      {name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          {projectsMap}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;

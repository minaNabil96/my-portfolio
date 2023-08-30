import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import SwiperComponent from "../reusable/SwiperComponent";
import { useSelector, useDispatch } from "react-redux";
import { findTheTopOfElement } from "../store/reducers/scrollingSlice";
//
const myWorks = [
  { name: "blog-sample", link: `https://laconic-blogsample.vercel.app/` },
  {
    name: "e-commerce-sample",
    link: `https://laconic-e-commerce-sample.vercel.app/`,
  },
  {
    name: "homeflix",
    link: `https://homeflix-pi.vercel.app/`,
  },
];

const myWorksForButtons = [
  { name: "e-commerce" },
  { name: "blog" },
  { name: "homeflix" },
];

const myWorksImgs = [
  {
    name: "blog",
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/rdnqgtkp2nd9kffsz3wr.jpg`,
  },
  {
    name: "blog",
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448411/myworks/luvofkxofl1x8yndkhdj.jpg`,
  },
  {
    name: "blog",
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448412/myworks/gdnvhcntubmqdm2tgsuk.jpg`,
  },
  {
    name: "blog",
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448414/myworks/nhr2bncolcf80ciq82wq.jpg`,
  },
  {
    name: "blog",
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/fywd1p9p8v6v46rr2jhm.jpg`,
  },
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
];

const tv =
  "https://res.cloudinary.com/minatry/image/upload/v1689518520/myworks/q3pkclqdicfng9xbmdhu.png";
//
const OurWorks = () => {
  const [project, setProject] = useState("e-commerce");
  const [isHoverd, setIsHoverd] = useState(false);
  const [hoverBack, setHoverBack] = useState(true);
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
      <div className="relative bg-gradient-to-tr from-mainColor2/60 to-mainColor p-1 my-3 rounded-md flex  items-center justify-start px-3 space-x-3 group shadow-sm shadow-slate-300 ">
        <h3 className=" text-[20px] w-[65%] text-white  group-hover:text-yellow-400 duration-200">
          {name.length <= 17 ? name : name.slice(0, 17)}
        </h3>
        <div className=" transform duration-300 group-hover:translate-x-5 ">
          <IoArrowForwardCircleSharp
            className={`text-white group-hover:text-yellow-400 h-8 w-8 duration-200 `}
          />
        </div>
      </div>
    </Link>
  ));

  const blogImages = myWorksImgs
    .filter(({ name }) => name === "blog")
    .map(({ name, url }) => url);
  const commerceImages = myWorksImgs
    .filter(({ name }) => name === "commerce")
    .map(({ name, url }) => url);
  const homeflixImages = myWorksImgs
    .filter(({ name }) => name === "homeflix")
    .map(({ name, url }) => url);

  console.log(isHoverd);
  return (
    <div
      className={`min-h-screen max-lg:min-h-[700px]  bg-gradient-to-br from-white to-slate-300 overflow-hidden `}
      ref={ourWorks}
    >
      <div className={`grid grid-cols-2  my-10 `}>
        <div className="max-lg:col-span-2 place-self-start mx-auto space-y-20 p-2 max-md:my-10 ">
          <h2 className="text-[32px] text-black text-center border-b-2 border-b-slate-700 py-2 ">
            {translate ? "عينات من أعمالنا" : "Samples of Our Work"}
          </h2>
          <div className="px-20 max-md:px-10">{myWorksMap}</div>
        </div>
        <div
          className={` max-lg:col-span-2  flex items-center justify-center flex-col space-y-20  `}
        >
          <div className={`flex items-center justify-around w-[70%]`}>
            {myWorksForButtons.map(({ name }, idx) => (
              <button
                type="button"
                key={idx}
                className={` p-2 bg-gradient-to-tr from-mainColor2/70 to-mainColor flex items-center justify-around duration-150 rounded-sm  h-[40px] w-fit  hover:bg-mainColor2 hover:shadow-sm hover:shadow-mainColor group `}
                onClick={() => setProject(name)}
              >
                <span
                  className={`text-white text-[12px]   uppercase  group-hover:text-yellow-200 duration-150 `}
                >
                  {name}
                </span>
              </button>
            ))}
          </div>
          {project === "blog" && (
            <div
              className={`w-[450px] max-sm:w-[350px] h-[250px] overflow-hidden aspect-video border-4 border-black bg-black `}
            >
              <SwiperComponent
                images={blogImages}
                slideNum={1}
                imagesStyle={` object-fill  w-full  h-[250px]     `}
                arrows={false}
                auto={true}
                pagination={false}
              />
            </div>
          )}
          {project === "e-commerce" && (
            <div
              className={`relative w-[450px] max-sm:w-[350px] h-[250px] overflow-hidden  aspect-video group border-4 border-black bg-black `}
              onMouseEnter={() => {
                setIsHoverd(true);
                setHoverBack(false);
              }}
              onMouseLeave={() => {
                setIsHoverd(false);
                setTimeout(() => {
                  setHoverBack(true);
                }, 4400);
              }}
              onTouchStart={() => {
                setIsHoverd(true);
                setHoverBack(false);
              }}
              onTouchEnd={() => {
                setIsHoverd(false);
                setTimeout(() => {
                  setHoverBack(true);
                }, 4400);
              }}
            >
              {hoverBack && (
                <div
                  className={`absolute bg-black/50 min-w-full min-h-full z-10 flex items-center justify-center `}
                >
                  <h3 className={`text-yellow-300 text-[20px] capitalize  `}>
                    hover
                  </h3>
                </div>
              )}
              <div
                className={`h-fit transform duration-[4400ms] ease-in-out ${
                  isHoverd ? "-translate-y-[calc(100%-250px)]" : ""
                }`}
              >
                {commerceImages &&
                  commerceImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt="any"
                      className={`object-fill  w-full   `}
                    />
                  ))}
              </div>
            </div>
          )}
          {project === "homeflix" && (
            <div
              className={` relative w-[450px] max-sm:w-[350px] h-[250px] overflow-hidden  aspect-video group border-4 border-black bg-black `}
              onMouseEnter={() => {
                setIsHoverd(true);
                setHoverBack(false);
              }}
              onMouseLeave={() => {
                setIsHoverd(false);
                setTimeout(() => {
                  setHoverBack(true);
                }, 6400);
              }}
              onTouchStart={() => {
                setIsHoverd(true);
                setHoverBack(false);
              }}
              onTouchEnd={() => {
                setIsHoverd(false);
                setTimeout(() => {
                  setHoverBack(true);
                }, 6400);
              }}
            >
              {hoverBack && (
                <div
                  className={`absolute bg-black/50 min-w-full min-h-full z-10 flex items-center justify-center `}
                >
                  <h3 className={`text-yellow-300 text-[20px] capitalize  `}>
                    hover
                  </h3>
                </div>
              )}
              <div
                className={`h-fit transform duration-[6400ms] ease-in-out ${
                  isHoverd ? "-translate-y-[calc(100%-250px)]" : ""
                }`}
              >
                {homeflixImages &&
                  homeflixImages.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt="any"
                      className={`object-fill  w-full   `}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;

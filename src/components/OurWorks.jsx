import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import SwiperComponent from "../reusable/SwiperComponent";
import { useSelector } from "react-redux";

//
const myWorks = [
  { name: "blog-sample", link: `https://laconic-blogsample.vercel.app/` },
  {
    name: "e-commerce-sample",
    link: `https://laconic-e-commerce-sample.vercel.app/`,
  },
];

const myWorksImgs = [
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/rdnqgtkp2nd9kffsz3wr.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448411/myworks/luvofkxofl1x8yndkhdj.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448412/myworks/gdnvhcntubmqdm2tgsuk.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448414/myworks/nhr2bncolcf80ciq82wq.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448410/myworks/fywd1p9p8v6v46rr2jhm.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448407/myworks/rak7dauqzqfuevibjpld.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448411/myworks/tftfegsjsbhhek4juzok.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448409/myworks/mzof1lvsmedwu4sqtmb8.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448417/myworks/u1cfoj7kokvbhcdvjs7s.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448416/myworks/bceh3rvgl4g1w75thvfj.jpg`,
  },
  {
    url: `https://res.cloudinary.com/minatry/image/upload/v1689448412/myworks/rt9avp1hao8zxzgzqqtm.jpg`,
  },
];

const tv =
  "https://res.cloudinary.com/minatry/image/upload/v1689518520/myworks/q3pkclqdicfng9xbmdhu.png";
//
const OurWorks = () => {
  const { translate } = useSelector((state) => state.languageSlice);

  const myWorksMap = myWorks.map(({ name, link }) => (
    <Link key={name} to={link} relative={`path`}>
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

  const myWorksImgsMap = myWorksImgs.map(({ url }) => url);
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-300 overflow-hidden `}
    >
      <div
        className={`grid grid-cols-2 place-items-center place-content-center my-10 `}
      >
        <div className="max-lg:col-span-2 place-self-start mx-auto space-y-20 p-2 max-md:my-10 ">
          <h2 className="text-[32px] text-black text-center border-b-2 border-b-slate-700 py-2 ">
            {translate ? "عينات من أعمالنا" : "Samples of Our Works"}
          </h2>
          <div className="px-20 max-md:px-10 ">{myWorksMap}</div>
        </div>
        <div
          className={` max-lg:col-span-2 relative flex items-center justify-center  `}
        >
          <img
            src={tv}
            alt={`tv`}
            className={`h-[400px]  max-w-xl max-md:max-w-sm z-10 `}
          />

          <div
            className={`max-w-xl  max-md:max-w-sm h-full  absolute px-1 py-5 `}
          >
            <SwiperComponent
              images={myWorksImgsMap}
              slideNum={1}
              imagesStyle={` object-fill  w-full  h-[340px]   `}
              arrows={false}
              auto={true}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;

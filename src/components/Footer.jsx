import React from "react";
import { useEffect } from "react";
import Button from "../reusable/Button.jsx";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { GiClover } from "react-icons/gi";
import { useSelector } from "react-redux";
//
const logo =
  "https://res.cloudinary.com/minatry/image/upload/v1689518523/myworks/cyataelepvlc9badi6dn.png";
//
const Footer = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const { translate } = useSelector((state) => state.languageSlice);

  const links = [
    { name: "facebook", icon: <FaSquareFacebook />, link: "#" },
    { name: "linkedin", icon: <FaLinkedin />, link: "#" },
    { name: "twitter", icon: <FaTwitterSquare />, link: "#" },
  ];

  const linksMap = links.map(({ name, icon, link }) => (
    <li key={name}>
      <Link
        className={` text-[30px] ${
          name === "facebook"
            ? "text-blue-600"
            : name === "linkedin"
            ? "text-blue-500"
            : "text-blue-400"
        } `}
        to={link}
      >
        {icon}
      </Link>
    </li>
  ));

  return (
    <footer className="py-5 bg-white  ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 max-md:space-y-10 text-center text-lg-start">
          <div className="col-span-2 md:col-span-1 ">
            <h4 className="text-black py-5  cursor-default font-semibold text-[18px]">
              {translate
                ? "للتواصل أو الطلبات من فضلك إضغط الزر أسفله"
                : "for contact please click the button below"}
            </h4>
            <div className={`flex items-center justify-center my-4`} >        
             <p className="text-black mx-2  cursor-default">
              Programing is Life 
            </p>
                              <GiClover className={`text-green-500`} />

            </div>
           
            <Link to="/contact">
              {/* <button */}
              {/*   className="bg-purple-500 rounded-lg py-1 px-4 my-4 ring-1 ring-slate-500 text-black  text-[14px] hover:ring-slate-400 hover:bg-purple-600   hover:shadow-md hover:shadow-slate-500 duration-150 " */}
              {/*   onClick={() => toTop()} */}
              {/* > */}
              {/*   {translate ? "Order" : "أطلب"} */}
              {/* </button> */}
              <Button
                btnstyle={`bg-purple-500 rounded-lg py-2 px-4 my-4 ring-1 ring-slate-500 text-white  text-[14px] hover:ring-slate-400 hover:bg-purple-600   hover:shadow-sm hover:shadow-slate-500 duration-150`}
              >
                {translate ? "التواصل" : "Contact"}
              </Button>
            </Link>

            <ul className="flex justify-center py-4 items-center gap-4">
              {linksMap}
            </ul>
          </div>
          <div className=" col-span-2 md:col-span-1 max-md:space-y-10 flex flex-col items-center py-4 justify-between ">
            <Link to="/">
              <img className="w-28 h-16" src={logo} alt="" />
            </Link>

            <div className=" gap-3 pb-10 cursor-default">
              <p className="text-black  cursor-default font-semibold text-[17px]">
                Created by{" "}
                <span className="info-span  cursor-default text-yellow-500">
                  {" "}
                  Mina Nabil
                </span>{" "}
              </p>

              <span className="text-slate-400  cursor-default">
                all rights resaved &copy;{` ${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Button from "../reusable/Button";
import { changeLanguage } from "../store/reducers/languageSlice";
import { useDispatch, useSelector } from "react-redux";
// imports
const logo =
  "https://res.cloudinary.com/minatry/image/upload/v1689518523/myworks/cyataelepvlc9badi6dn.png";

const tabs = [
  { name: "Home", arabicName: "الرئيسية", path: "/" },
  { name: "Contact", arabicName: "التواصل", path: "/contact" },
  { name: "About", arabicName: "عنا", path: "/about" },
];

const Header = () => {
  // english to arabic
  const [Translate, setTranslate] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const dispatch = useDispatch();
  const { translate } = useSelector((state) => state.languageSlice);

  const languageHandler = (e) => {
    e.preventDefault();
    dispatch(changeLanguage());
  };

  // scrolltotoponclick
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  // nav color changer
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const [NavBackground, setNavBackground] = useState(true);

  const scrollHandler = () => {
    if (window.scrollY >= 66) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
    window.addEventListener("scroll", scrollHandler);
  };

  const tabsMap = tabs.map(({ name, arabicName, path }, idx) => (
    <NavLink
      end
      className={({ isActive, isPending }) =>
        isActive
          ? "bg-purple-200 text-black md:mx-2 w-full md:text-center p-2 md:px-2 md:py-1 md:rounded-sm md:shadow-sm shadow-slate-600  duration-150  "
          : "md:mx-2 md:text-center text-yellow-100 w-full p-2 md:px-2 md:py-1 bg-inherit md:rounded-sm hover:shadow-sm hover:shadow-slate-600 hover:bg-purple-300/60 hover:text-black duration-150 "
      }
      to={path}
      key={idx}
    >
      {translate ? arabicName : name}
    </NavLink>
  ));

  return (
    <nav
      className={`  bg-mainColor z-30 sticky top-0  h-fit md:h-14 shadow-sm shadow-inherit  `}
      onScroll={() => scrollHandler()}
    >
      {/* start md screens */}
      <div className="container mx-auto hidden md:flex items-center justify-between px-20  h-full">
        <div className="flex items-center justify-center h-full    ">
          <img src={logo} alt={`logo`} className={`h-9 w-20 object-contain`} />
        </div>
        <div className="flex items-center justify-center h-full   ">
          {tabsMap}
          <Button
            btnstyle={`bg-purple-500 rounded-full mx-2 ring-1 ring-slate-500   hover:ring-slate-400 hover:bg-purple-600   hover:shadow-sm hover:shadow-slate-500 duration-150`}
          >
            <p
              className={`text-[14px] text-white p-2 `}
              onClick={(e) => languageHandler(e)}
            >
              {translate ? `EN` : `AR`}
            </p>
          </Button>
        </div>
      </div>
      {/* end md screens */}
      {/* start under sm screens */}
      <div className=" md:hidden flex flex-col items-start justify-start   h-full">
        <div className="flex items-center justify-between h-full w-full p-2    ">
          <img src={logo} alt={`logo`} className={`h-8 w-16 object-contain `} />
          {!openMenu && (
            <RxHamburgerMenu
              fontSize={18}
              className="text-white h-12 w-12 px-3 cursor-pointer hover:text-yellow-200 active:text-yellow-200 duration-150 "
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
          {openMenu && (
            <MdClose
              fontSize={18}
              className="text-white h-12 w-12 px-3 cursor-pointer hover:text-yellow-200 active:text-yellow-200 duration-150 "
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
        <div
          className={` ${
            openMenu ? "flex flex-col" : "hidden"
          }  w-full items-start justify-start h-full duration-150 `}
        >
          {tabsMap}
          <Button
            btnstyle={`bg-purple-500 rounded-full m-2 ring-1 ring-slate-500   hover:ring-slate-400 hover:bg-purple-600   hover:shadow-sm hover:shadow-slate-500 duration-150`}
          >
            <p
              className={`text-[14px] text-white p-2 `}
              onClick={(e) => languageHandler(e)}
            >
              {translate ? `EN` : `AR`}
            </p>
          </Button>
        </div>
      </div>
      {/* end uder sm screens */}
    </nav>
  );
};

export default Header;

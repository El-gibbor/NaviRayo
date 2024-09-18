import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuInfo, LuSearch } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiTicketDuotone } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoIosHelpCircleOutline, IoMdHelpCircleOutline } from "react-icons/io";

function MobileBottomNavbar({ guestEmail }) {
  const location = useLocation();
  const [profileMenu, setProfileMenu] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false)

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    setLoggingOut(true)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-transparent fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100 z-50"
            : "hidden"
        }`}
      ></div>
      <div className="h-[75px] w-full border-t-[1px] border-border-lines-light hidden max-md:grid grid-cols-4 px-20 max-md:px-2 fixed bottom-0 left-0 z-50 bg-white">
        <Link
          to={`/`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <TbBusStop
            className={`text-[23px] max-h-6 ${
              location.pathname === "/" ? "text-main-color" : ""
            }`}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Bus
          </p>
        </Link>
        <Link
          to={`/ticket`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <PiTicketDuotone
            className={`text-[23px] max-h-6 ${
              location.pathname === "/ticket" ? "text-main-color" : ""
            }`}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/ticket"
                ? "text-main-color"
                : "text-dark-text"
            }`}
          >
            Tickets
          </p>
        </Link>
        <Link
          to={`/search`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <LuSearch
            className={`text-[23px] max-h-6 ${
              location.pathname === "/search" ? "text-main-color" : ""
            } `}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/search"
                ? "text-main-color"
                : "text-dark-text"
            }`}
          >
            Search
          </p>
        </Link>
        <div
          onClick={showMenu}
          className="flex flex-col items-center justify-center gap-[2px] cursor-pointer"
        >
          <div
            className={`h-6 aspect-square select-none hover:bg-border-lines-light/50 rounded-full flex items-center justify-center
            }`}
          >
            <p className="bg-orange-500 text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              G
            </p>
          </div>
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Profile
          </p>
        </div>

        {/* dropdown */}
        <div
          className={`bg-white min-h-[180px] w-[90%] max-w-[250px] absolute bottom-[80px] rounded-xl right-3 overflow-clip border-[1px] border-border-lines-light flex flex-col items-center justify-start p-2 origin-bottom-right transition-all duration-200 ease-in-out ${
            profileMenu
              ? "opacity-100 visible z-30 translate-y-0"
              : "opacity-0 invisible -z-10 translate-y-2"
          }`}
        >
          <div className="h-[43px] min-h-[43px] w-full rounded-lg cursor-default flex items-center justify-start px-3 gap-3">
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm ">
              guest{guestEmail}@gmail.com
            </h1>
          </div>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <VscAccount className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize ">
              Profile
            </h1>
          </button>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <HiOutlineTicket className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize">
              My Tickets
            </h1>
          </button>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <FiSettings className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize ">
              Settings
            </h1>
          </button>
          <Link to={`/help`}  className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <FiHelpCircle className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-normal tracking-tight text-sm capitalize ">
                Help Center
              </h1>
            </Link>
            <Link
              to={`/info`}
              className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3"
            >
              <LuInfo className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-normal tracking-tight text-sm capitalize ">
                About
              </h1>
            </Link>
          <div className="w-full h-[1px] bg-border-lines-light my-2"></div>
          <button
            onClick={logMeOut}
            className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3"
          >
            {loggingOut ? <>
              <CgSpinner className="animate-spinLoader text-[23px] text-red-600/70" />
            <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
              Logging out..
            </h1>
            </> : <>
              <HiOutlineLogout className="text-[23px] text-red-600/70" />
            <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
              Log Out
            </h1>
            </>}

          </button>
        </div>
      </div>
    </>
  );
}

export default MobileBottomNavbar;

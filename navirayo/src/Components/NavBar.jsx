import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import {
  LuBell,
  LuCalendarPlus,
  LuMoon,
  LuSun,
} from "react-icons/lu";

function Navbar({ show, showPf, guestEmail, showPremiumModal }) {
    const [profileMenu, setProfileMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [loggingOut, setLoggingOut] = useState(false);
    const [theme, setTheme] = useState("Light");
    const { pathname } = useLocation()

    const showMenu = () => {
      setProfileMenu(!profileMenu);
    };

    const logMeOut = () => {
      localStorage.removeItem("visitedAs");
      setLoggingOut(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    // add dark on load
    useEffect(() => {
      const preferedTheme = localStorage.getItem('gerayoTheme')
      if(preferedTheme){
      document.documentElement.classList.add("dark");
      setTheme("Dark");
      }
    }, [pathname])

    const switchThemeDark = () => {
      document.documentElement.classList.add("dark");
      setTheme("Dark");
      localStorage.setItem('gerayoTheme', 'Dark')
    };

    const switchThemeLight = () => {
      document.documentElement.classList.remove("dark");
      setTheme("Light");
      localStorage.removeItem('gerayoTheme')
    };

    return (
      <div className="h-[70px] px-10 max-md:px-4 border-b-[0px] flex items-center justify-between max-md:hidden">
        {/* Profile Menu overlay */}
        <div
          onClick={() => setProfileMenu(false)}
          className={` fixed top-0 left-0 w-full  h-full min-h-svh ${
            profileMenu
              ? "transition ease-in-out duration-200 opacity-100  z-30"
              : "hidden"
          }`}
        ></div>

        {/* Menu */}
        <div className="flex items-center justify-start gap-2">
          <div className="w-fit h-fit flex items-center justify-start">
            <MdLocationOn className="text-[30px] text-main-color translate-y-[1px] translate-x-[3px]" />
            <h1 className=" font-bold text-[26px] tracking-tighter text-main-color pr-8 pointer-events-none select-none ">
              gerayo
            </h1>
          </div>

          <Link
            to={`/`}
            className={`font-medium text-sm  hover:bg-white dark:hover:bg-container-dark-2 py-2 px-5 rounded-full relative ${
              location.pathname === "/"
                ? "text-black dark:text-white bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40 "
                : "text-dark-text dark:text-light-text "
            }`}
          >
            Find my bus
          </Link>
          <Link
            to={`/ticket`}
            className={` font-medium text-sm hover:bg-white dark:hover:bg-container-dark-2 py-2 px-5 rounded-full relative ${
              location.pathname === "/ticket"
                ? "text-black dark:text-white bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40"
                : "text-dark-text dark:text-light-text"
            }`}
          >
            Buy Tickets
          </Link>
        </div>
        <div className="w-fit flex items-center justify-end gap-5">
          {theme === "Light" ? (
            <button
              onClick={switchThemeDark}
              className={`flex items-center gap-1 cursor-pointer font-semibold text-sm bg-white dark:bg-container-dark-2 dark:text-white/70 py-2 px-4 rounded-full relative`}
            >
              <LuMoon className="text-lg " />
              Dark
            </button>
          ) : (
            <button
              onClick={switchThemeLight}
              className={`flex items-center gap-1 cursor-pointer font-semibold text-sm bg-white dark:bg-container-dark-2 dark:text-white/70 py-2 px-4 rounded-full relative`}
            >
              <LuSun className="text-lg " />
              Light
            </button>
          )}
          <button
            // onClick={show}
            className=" flex items-center justify-center group active:scale-95 select-none"
            title="Book a Ticket"
          >
            <LuCalendarPlus className="text-xl text-dark-text dark:text-light-text group-hover:text-dark-text dark:group-hover:text-white " />
          </button>
          <button
            onClick={show}
            className=" flex items-center justify-center group active:scale-95 select-none"
            title="Notifications"
          >
            <LuBell className="text-xl text-dark-text dark:text-light-text group-hover:text-dark-text dark:group-hover:text-white " />
          </button>
          <div className="flex cursor-pointer select-none relative ml-1">
            <div
              onClick={showPf}
              className={`h-8 w-fit active:scale-95 rounded-full flex items-center justify-center ${
                profileMenu ? "z-30" : ""
              }`}
              title={`Guest${guestEmail}`}
            >
              <p
                className={`bg-orange-500 text-white w-auto h-full aspect-square font-bold rounded-full flex items-center justify-center `}
              >
                G
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Navbar;

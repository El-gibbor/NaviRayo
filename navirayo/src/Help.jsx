import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Ticket from "../Components/Ticket";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";
import MobileTopBar from "../Components/MobileTopBar";
import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import Notification from "../Components/Notification";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa6";
import { Faqs } from "../content/data";

function Help({ guestEmail }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const visitadAs = localStorage.getItem("visitedAs");
    if (!visitadAs) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const showNotificationPopup = () => {
    setShowNotification(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideNotificationPopup = () => {
    setShowNotification(false);
    document.documentElement.classList.remove("no-scroll");
  };

  return (
    <div className="bg-white dark:bg-white min-h-svh text-dark-text">
      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}

      {/* Helmet */}
      <Helmet>
        <title>Buy Tickets | gerayo.</title>
      </Helmet>
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-transparent fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "hidden"
        }`}
      ></div>
      <div className="w-full h-fit sticky top-0 z-20 backdrop-blur-md bg-white/80 dark:bg-white/80 max-md:hidden ">
        <Navbar show={showNotificationPopup} guestEmail={guestEmail} />
      </div>

      {/* phone Topbar */}
      <MobileTopBar show={showNotificationPopup} title={"Help center"} />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      <div className="w-full h-fit flex items-start justify-start flex-col max-lg:flex-col max-lg:items-center bg-body-color-light ">
        {/* header */}
        <div className="help-header flex justify-center items-center flex-col gap-1 min-h-[250px] w-full bg-stone-100 relative">
          <div className="w-fit h-fit flex items-center justify-start">
            <MdLocationOn className="text-[37px] text-main-color translate-y-[3px] translate-x-[3px]" />
            <h1 className=" font-bold text-[35px] tracking-tighter text-main-color pr-8 pointer-events-none select-none ">
              gerayo.
            </h1>
          </div>
          <p className="text-base font-semibold tracking-tight">
            How can we help?
          </p>
          <p className="px-4 py-2 bg-white rounded-xl text-sm font-semibold tracking-tight absolute bottom-5 right-5 shadow-xl shadow-stone-200 flex items-center justify-center gap-1">
            <IoIosCall className="text-xl text-main-color" />
            <span> +250785614800</span>
          </p>
        </div>
        <div className="w-full h-fit flex items-start justify-center bg-white">
          {/* Faqs */}
          <div className="w-full h-full bg-stone-100 px-10 max-md:px-3 pb-16 flex flex-col items-center justify-start text-dark-text ">
            <span className="flex items-center w-full max-w-[900px] justify-start my-5 font-medium capitalize text-project-green text-sm bg-project-green/10 px-1 ">
              Frequently asked questions (FAQs)
            </span>
            <div className="w-full h-fit flex flex-col items-center justify-start mb-3 max-w-[900px]">
              {Faqs.map((item, index) => (
                <div
                  key={item.index}
                  className=" py-4 px-5 bg-white text-dark-body-color rounded-xl w-full mb-2 flex justify-between items-start gap-5"
                >
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="font-medium tracking-tight text-base leading-5 min-h-[30px] w-full flex items-center justify-start">
                      {item.question}
                    </h1>
                    <p
                      className={`text-sm leading-5 font-medium text-dark-text/70 text-dark-body-color/70 transition-all duration-500 ease-in-out overflow-hidden ${
                        activeIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className=" h-[30px] aspect-square rounded-full transition duration-150 active:scale-90 text-dark-body-color/30 hover:bg-stone-200 flex items-center justify-center   "
                  >
                    <FaCaretDown className="text-[20px] opacity-45" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;

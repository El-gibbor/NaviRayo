import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineTicket } from "react-icons/hi2";
import { IoArrowBackOutline, IoCloseOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import {
    LuCalendarClock,
    LuCrown,
    LuHistory,
    LuInfo,
    LuMessagesSquare,
    LuSettings,
    LuTicket,
    LuUser2,
    LuUsers2,
} from "react-icons/lu";

function Profile({ hide, guestEmail }) {
    const [animate, setAnimate] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

    const logMeOut = () => {
        localStorage.removeItem("visitedAs");
        setLoggingOut(true);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    useEffect(() => {
        setAnimate(true);
    }, []);

    const hideNotificationPopup = () => {
        setAnimate(false);
        setTimeout(() => {
            hide();
        }, 200);
    };

    return (
        <>
            <div
                onClick={hideNotificationPopup}
                className={`w-full h-full fixed top-0 left-0 bg-black/40 z-40 transition-all ease-in-out duration-300 ${animate ? "opacity-100" : "opacity-0"
                    } `}
            ></div>
            <div
                className={`fixed top-0 right-0 bg-white shadow-xl dark:bg-body-color-dark text-dark-text dark:text-light-text w-full max-w-[320px] h-full z-[60] p-4 transition-all ease-in-out duration-300 flex flex-col gap-4 ${animate ? "translate-x-0" : "translate-x-full "
                    }`}
            >
                <div className="w-full flex items-center justify-between gap-4">
                    <div className="w-fit flex-1 h-fit flex items-start justify-start gap-2">
                        <p
                            className={`bg-orange-500 text-white w-auto h-8 aspect-square font-bold rounded-full flex items-center justify-center `}
                        >
                            G
                        </p>
                        <div className="flex items-start justify-start flex-col">
                            <p className="text-sm capitalize font-bold tracking-tight">
                                guest
                            </p>
                            <p className="text-sm tracking-tight opacity-75 truncate text-ellipsis max-w-[200px]">
                                guest{guestEmail}@gmail.com
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={hideNotificationPopup}
                        className="active:scale-75 transition w-fit flex items-center justify-center "
                    >
                        <IoCloseOutline className="text-xl" />
                    </button>
                </div>
                {/* All Links */}
                <div className="h-auto flex-1 w-full flex items-center justify-between flex-col overflow-y-auto">
                    <div className="w-full h-auto flex-1">
                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuUser2 className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Your profile
                            </h1>
                        </button>

                        {/* separator */}
                        <div className="w-full max-w-[95%] mx-auto h-[1px] bg-border-lines-light dark:bg-container-dark-2 my-2"></div>

                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuCalendarClock className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Manage Bookings
                            </h1>
                        </button>
                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuTicket className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Your Tickets
                            </h1>
                        </button>
                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuHistory className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Purchase history
                            </h1>
                        </button>
                        {/* separator */}
                        <div className="w-full max-w-[95%] mx-auto h-[1px] bg-border-lines-light dark:bg-container-dark-2 my-2"></div>

                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuSettings className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Settings
                            </h1>
                        </button>
                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuCrown className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Get Premium
                            </h1>
                        </button>
                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuInfo className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                About Gerayo
                            </h1>
                        </button>

                        {/* separator */}
                        <div className="w-full max-w-[95%] mx-auto h-[1px] bg-border-lines-light dark:bg-container-dark-2 my-2"></div>

                        {/* Link */}
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuUsers2 className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Gerayo Support
                            </h1>
                        </button>
                        <button className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2">
                            <LuMessagesSquare className="text-lg text-dark-text/70 dark:text-light-text" />
                            <h1 className="font-normal text-sm group-hover:text-main-color text-black dark:text-white ">
                                Gerayo Community
                            </h1>
                        </button>
                        <div className="w-full h-fit">
                            <button
                                onClick={logMeOut}
                                className="h-fit w-full hover:bg-stone-100 dark:hover:bg-container-dark rounded-lg flex items-center justify-start px-2 py-[6px] gap-2"
                            >
                                {loggingOut ? (
                                    <>
                                        <CgSpinner className="animate-spinLoader text-lg text-red-400" />
                                        <h1 className="font-medium dark:text-white text-sm group-hover:text-main-color ">
                                            Signing out..
                                        </h1>
                                    </>
                                ) : (
                                    <>
                                        <HiOutlineLogout className="text-lg text-red-400" />
                                        <h1 className="font-medium dark:text-white text-sm group-hover:text-main-color ">
                                            Sign Out
                                        </h1>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

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
            </div>
        </>
    );
}

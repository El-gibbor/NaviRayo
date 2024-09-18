import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";

function Notification({ hide }) {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    },[])

    const hideNotificationPopup = () => {
        setAnimate(false)
        setTimeout(() => {
            hide()
        }, 200);
    }

  return (
    <>
      <div onClick={hideNotificationPopup} className={`w-full h-full fixed top-0 left-0 bg-black/40 z-40 transition-all ease-in-out duration-300 ${animate ? 'opacity-100' : 'opacity-0'} `}></div>
      <div className={`fixed top-0 right-0 bg-white dark:bg-body-color-dark text-dark-text dark:text-light-text w-full max-w-[380px] h-full z-40 p-4 transition-all ease-in-out duration-300 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 '}`}>
        <div className="flex items-center justify-start gap-4">
          <button onClick={hideNotificationPopup} className="active:scale-75 transition flex items-center justify-center ">
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <h1 className="text-lg tracking-tight font-bold ">Notifications</h1>
        </div>

        {/* no notification */}
        <div className="h-full w-full flex items-center justify-center flex-col gap-3 opacity-40">
          <h1 className="text-sm tracking-tight font-semibold pb-10">No Notification</h1>
        </div>
      </div>
    </>
  );
}

export default Notification;

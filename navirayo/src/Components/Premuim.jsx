import React from "react";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { CiLocationOn, CiRoute } from "react-icons/ci";
import { GiMeepleCircle } from "react-icons/gi";
import { GrLocationPin } from "react-icons/gr";
import { PiBusLight, PiTicketLight } from "react-icons/pi";

function Premium({ hidePremiumModal }) {
  return (
    <>
      {/* Premium Overlay */}
      <div
        onClick={hidePremiumModal}
        className="fixed top-0 left-0 w-full h-full bg-black/40 z-[60]"
      ></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto h-[90%] max-h-[570px] w-[90%] max-w-[890px] bg-white dark:bg-body-color-dark z-[60] rounded-2xl shadow-2xl flex flex-col overflow-clip">
        <div className="w-full h-full flex items-start justify-start overflow-clip dark:text-container-dark-3 text-3xl">
          <div className="min-w-[350px] h-full bg-body-color-dark z-10 flex flex-col items-start justify-between">
            <div className="w-full flex-1 h-auto">d</div>
            <div className="w-full p-3 flex items-center justify-center">
              <button className="text-sm w-full text-white bg-main-color p-2 px-3 rounded-xl">
                Upgrade for just $3/mo
              </button>
            </div>
          </div>
          <div className=" w-full h-full flex-1 flex flex-wrap items-center justify-center">
            <div className="w-fit h-fit relative flex items-center justify-center text-main-color">
              <BsBoundingBoxCircles className="text-[150px] rotate-12" />
              <h1 className="font-extrabold tracking-tight text-[30px] absolute h-full w-full flex items-center justify-center top-0 bottom-0 my-auto">
                PRO
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[100px]"></div>
      </div>
    </>
  );
}

export default Premium;

import React, { useEffect, useState } from "react";
import {
  FaArrowRightArrowLeft,
  FaArrowRightLong,
  FaMapLocationDot,
} from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiInfoLarge, TiPin } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { LuAlarmClock, LuInfo } from "react-icons/lu";
import { MdEventSeat } from "react-icons/md";
import { FaRectangleAd } from "react-icons/fa6";
import { TbCreditCardPay, TbRadarFilled } from "react-icons/tb";
import { PiWavesThin } from "react-icons/pi";
import { GiHeavyRain } from "react-icons/gi";
import { VscPinned, VscPinnedDirty } from "react-icons/vsc";
import MoreInfo from "./MoreInfo";
import { Link } from "react-router-dom";

function Ticket({
  id,
  plateNumber,
  from,
  to,
  busType,
  departureAt,
  arrivalTime,
  price,
  moreInfo,
  watchPinnedChange,
  seatsLeft,
}) {
  const [pinnedBusIds, setPinnedBusIds] = useState([]);

  useEffect(() => {
    const storedPinnedBusIds =
      JSON.parse(localStorage.getItem("PinnedBusIds")) || [];
    setPinnedBusIds(storedPinnedBusIds);
  }, []);

  const PinBus = (id) => {
    if (watchPinnedChange) {
      const getRandomString = (length) => {
        const characters = "ABCDEFGHIJKLMabcdefghijklm";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };
      const randomToken = () => Math.floor(Math.random() * 10) + 1;
      watchPinnedChange(randomToken + getRandomString(5));
    }
    let pinnedBuses = JSON.parse(localStorage.getItem("PinnedBusIds")) || [];

    if (!pinnedBuses.includes(id)) {
      pinnedBuses.push(id);
      localStorage.setItem("PinnedBusIds", JSON.stringify(pinnedBuses));
      setPinnedBusIds(JSON.stringify(pinnedBuses));
    }
  };

  const UnPinBus = (id) => {
    if (watchPinnedChange) {
      const getRandomString = (length) => {
        const characters = "NOPQRSTUVWXYZnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        return result;
      };
      const randomToken = () => Math.floor(Math.random() * 20) + 1;
      watchPinnedChange(randomToken + getRandomString(5));
    }
    let pinnedBuses = JSON.parse(localStorage.getItem("PinnedBusIds")) || [];

    if (pinnedBuses.includes(id)) {
      pinnedBuses = pinnedBuses.filter((busId) => busId !== id);
      localStorage.setItem("PinnedBusIds", JSON.stringify(pinnedBuses));
      setPinnedBusIds(pinnedBuses);
    }
  };

  const isPinned = pinnedBusIds.includes(id);

  const showMoreInfo = (id) => {
    moreInfo(id);
  };

  return (
    <div className="w-full h-fit overflow-clip bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40 mt-0 rounded-xl flex flex-col text-start justify-start p-4 relative">

     {/* icon */}
      {/* <div className="h-[50px] aspect-square rounded-full absolute top-[-25px] right-8 z-10 bg-white p-2 ">
        <img
          src="https://img.icons8.com/?size=96&id=WuEAfdVu7ugL&format=png"
          alt=""
        />
      </div> */}
      <GiHeavyRain className="absolute -right-2 -top-8 rotate-[50deg] text-[90px] text-stone-100 dark:text-container-dark-2/40" />
      <div className="flex flex-col items-center justify-start max-md:items-start gap-2 z-10">
        <div className="w-full flex items-center justify-start gap-2 max-md:max-w-[90%] max-md:flex-wrap max-md:items-start ">
          <div
            title="Bus Plate Number"
            className=" py-2 px-4 bg-stone-100 dark:bg-container-dark-2 whitespace-nowrap flex items-center gap-2 justify-center rounded-full text-xs font-semibold text-dark-text dark:text-white/90"
          >
            <FaRectangleAd className="text-base opacity-30" />
            {plateNumber}
          </div>
          <div
            title="Bus Maximum Passengers"
            className=" py-2 px-4 bg-stone-100 dark:bg-container-dark-2 whitespace-nowrap flex items-center gap-2 justify-center rounded-full text-xs font-semibold text-dark-text dark:text-white/90"
          >
            <MdEventSeat className="text-base opacity-30" />
            {seatsLeft} Seats left
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-start gap-0 max-md:flex-col ">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <h1 className="text-dark-text dark:text-white/90 font-semibold text-xl capitalize pt-2 flex items-center gap-0">
            <MdLocationOn className="text-[26px] text-main-color pb-[2px] " />
              {from}{" "}
              <FaArrowRightLong className="text-lg mx-3 text-dark-text/60 dark:text-light-text" />{" "}
              {to}
            </h1>
            <p className="text-dark-text/50 dark:text-light-text capitalize font-medium tracking-tight text-sm pb-2">
              {busType}
            </p>
            <div className="h-[1px] w-full bg-stone-200 dark:bg-container-dark-2 mt-1"></div>
            <div className="w-full flex items-center justify-between max-md:items-start ga-2 mt-3 pr-4 max-md:gap-12">
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/50 dark:text-light-text capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] " />
                  departure time
                </p>
                <h1 className="text-dark-text dark:text-white font-medium text-base ">
                  {departureAt}
                </h1>
              </div>
              <div className="flex flex-col items-end justify-start gap-0">
                <p className="text-dark-text/50 dark:text-light-text capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] " />
                  Arrival Time
                </p>
                <h1 className="text-dark-text dark:text-white font-medium text-base ">
                  {arrivalTime}
                </h1>
              </div>
            </div>
          </div>
          <div className="min-w-fit w-fit min-h-full max-md:pt-10 max-md:w-full pl-4 pb-2 max-md:pl-0  flex flex-col justify-end items-center">
          <h1 className="text-dark-text dark:text-light-text font-bold text-base ">{price} rwf</h1>
            <p className="text-dark-text/70 dark:text-light-text capitalize font-medium tracking-tight text-sm mb-5 max-md:mb-3">
              Travel Cost
            </p>
            <Link to={`/purchaseticket/${id} `} className="h-[40px] w-[160px] max-md:w-full px-2 bg-main-color text-white font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 ">
              <TbCreditCardPay className="text-xl" />
              Buy Ticket
            </Link>
            <button
              onClick={() => showMoreInfo(id)}
              className="h-[40px] backdrop-blur-md w-[160px] mt-2 max-md:w-full px-2 bg-stone-200/50 dark:bg-container-dark-3 dark:hover:bg-container-dark-2 text-dark-text/60 dark:text-white font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 "
            >
              <LuInfo className="text-xl" />
              More info
            </button>
          </div>
        </div>
        <div className="w-full pt-3 flex items-center justify-between">
          <div className="w-fit h-full flex items-center justify-start gap-3">
            {isPinned ? (
              <>
                <button
                  onClick={() => UnPinBus(id)}
                  className="h-full rounded-md text-main-color flex items-center justify-center font-medium text-sm cursor-pointer gap-1 "
                >
                  <VscPinnedDirty className="text-lg " />
                  Pinned
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => PinBus(id)}
                  className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-sm cursor-pointer text-dark-text/60 dark:text-light-text gap-1 "
                >
                  <VscPinned className="text-lg " />
                  Pin
                </button>
              </>
            )}
          </div>
          <div className="w-fit h-full flex items-center justify-start gap-3 max-md:flex-wrap ">
            <button className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-xs text-dark-text/60 dark:text-light-text gap-1 ">
              <MdOutlineErrorOutline className="text-base " />
              Report a Problem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

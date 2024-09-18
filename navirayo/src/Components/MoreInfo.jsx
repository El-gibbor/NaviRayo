import React, { useEffect, useState, useMemo, useCallback } from "react";
import { IoArrowBackOutline, IoBusOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { KigaliBusJourney, busStopsImages } from "../content/data";
import { FaCircleCheck, FaMapLocationDot } from "react-icons/fa6";
import { BsFillBusFrontFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { PiBus } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

function MoreInfo({ hide, id }) {
  const [animate, setAnimate] = useState(false);
  const [load, setLoad] = useState(true);
  const [image, setImage] = useState("");
  const [showImageFull, setShowImageFull] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 800);
  }, []);

  const hideNotificationPopup = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      hide();
    }, 200);
  }, [hide]);

  const openedJourney = useMemo(
    () => KigaliBusJourney.find((journey) => journey.id === id),
    [id]
  );

  const imageFrom = useMemo(
    () => busStopsImages.find((image) => image.location === openedJourney.from),
    [openedJourney]
  );
  const imageTo = useMemo(
    () => busStopsImages.find((image) => image.location === openedJourney.to),
    [openedJourney]
  );

  const showImage = (url) => {
    setImage(url);
    setShowImageFull(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 m-auto w-full h-full z-40">
      {/* full screen image */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col items-center justify-center ${
          showImageFull ? "visible " : "invisible "
        }`}
      >
        <div
          onClick={() => setShowImageFull(false)}
          className={`absolute top-0 left-0 bg-black/10 w-full h-full backdrop-blur-sm transition-all ease-out ${
            showImageFull ? "opacity-100 " : "opacity-0 "
          } `}
        ></div>
        <img
          src={image}
          className={` max-h-[70%] h-[220px] brightness-[110%] min-w-[300px] max-w-[80%] object-cover shadow rounded-xl z-10 select-none transition-all ease-in ${
            showImageFull ? "opacity-100 " : "opacity-0 scale-95  "
          }`}
        />
      </div>
      <div
        onClick={hideNotificationPopup}
        className={`w-full h-full fixed top-0 left-0 bg-stone-600/10 z-40 transition-all ease-in-out duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        } `}
      ></div>
      <div
        className={`absolute right-0 bg-white dark:bg-body-color-dark shadow-2xl text-dark-text dark:text-light-text w-full max-w-[500px] h-full z-40 p-4 flex flex-col transition-all ease-in-out duration-200  ${
          animate
            ? " translate-x-0 opacity-100"
            : " translate-x-full opacity-0 "
        }`}
      >
        <div className="flex h-fit items-center justify-start gap-4 pb-3">
          <button
            onClick={hideNotificationPopup}
            className="active:scale-75 transition flex items-center justify-center "
          >
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <h1 className="text-lg tracking-tight font-bold capitalize  ">
            More info
          </h1>
        </div>

        {/* no notification */}
        {load ? (
          <div className="w-full h-full flex items-center justify-center pb-0">
            <CgSpinner className="animate-spinLoader text-2xl text-dark-text/50 dark:text-light-text" />
          </div>
        ) : (
          <div className="h-full w-full max-w-[500px] flex flex-col gap-5 max-md:px-3 px-7 pt-8 pb-14 max-md:pb-32 overflow-y-auto">
            <div className="w-full h-fit flex items-start justify-start gap-5">
              <div className="h-full w-[50%] relative">
                <h1 className="text-sm capitalize min-h-fit mb-2">
                  From: {openedJourney.from}
                </h1>
                <img
                  onClick={() => showImage(imageFrom.image)}
                  src={imageFrom.image}
                  className="w-full h-[130px] cursor-pointer bg-stone-100 rounded-xl shadow-md object-cover object-bottom"
                />
                <a
                  href={`https://www.google.com/maps/place/${openedJourney.from}`}
                  target="_blank"
                  className="group p-2 rounded-xl bg-white/90 dark:bg-container-dark transition active:scale-105 backdrop-blur-sm shadow-lg absolute bottom-2 right-2"
                >
                  <FaMapLocationDot className="text-sm transition group-hover:text-main-color" />
                </a>
              </div>
              <div className="h-full w-[50%] relative">
                <h1 className="text-sm capitalize min-h-fit mb-2">
                  to: {openedJourney.to}
                </h1>
                <img
                  onClick={() => showImage(imageTo.image)}
                  src={imageTo.image}
                  className="w-full h-[130px] cursor-pointer bg-stone-100 rounded-xl shadow-md object-cover object-bottom"
                />
                <a
                  href={`https://www.google.com/maps/place/${openedJourney.to}`}
                  target="_blank"
                  className="group p-2 rounded-xl bg-white/90 dark:bg-container-dark transition active:scale-105 backdrop-blur-sm shadow-lg absolute bottom-2 right-2"
                >
                  <FaMapLocationDot className="text-sm transition group-hover:text-main-color" />
                </a>
              </div>
            </div>
            <span className="border-b-[1px] border-border-lines-light dark:border-container-dark-2 mt-2 w-full max-w-[70%] mx-auto h-[1px]"></span>
            <h1 className="text-sm capitalize min-h-fit">Bus Stops</h1>
            <div className="flex items-start justify-start gap-2">
              <div className="h-full w-fit flex items-center justify-between flex-col gap-1">
                <span>
                  <PiBus className=" text-xl text-dark-text/80 dark:text-light-text/80" />
                </span>
                <span className="h-full w-[4px] rounded-sm bg-main-color"></span>
                <span>
                  <GrLocation className=" text-xl text-dark-text/80 dark:text-light-text/80" />
                </span>
              </div>
              <div className="flex flex-col items-start justify-start gap-4">
                {openedJourney.stops.map((stopName, index) => (
                  <p
                    key={index}
                    className="text-sm font-medium flex items-center gap-2"
                  >
                    <span className="text-dark-text/20 dark:text-light-text">
                      <FaCircleCheck className={`text-xs ${index < 3 ? 'text-main-color' : ''}`} />
                    </span>
                    <span className="">
                    {index === 0 && '8: 00 am'}
                    {index === 1 && '8: 10 am'}
                    {index === 2 && '8: 15 am'}
                    {index === 3 && '8: 23 am'}
                    {index === 4 && '8: 27 am'}
                    {index === 5 && '8: 30 am'}
                    </span>
                    <span className="dark:text-white/90 capitalize">{stopName}</span>
                  </p>
                ))}
              </div>
            </div>
            <h1 className="text-sm capitalize min-h-fit">
              Route ID:{" "}
              <span className="font-bold">{openedJourney.RouteId}</span>
            </h1>
            <h1 className="text-sm capitalize min-h-fit">
              Plate No:{" "}
              <span className="font-bold">{openedJourney.plateNumber}</span>
            </h1>
            <h1 className="text-sm capitalize min-h-fit">
              Bus Company:{" "}
              <span className="font-bold">{openedJourney.busType}</span>
            </h1>
            <h1 className="text-sm capitalize min-h-fit">
              Price:{" "}
              <span className="font-bold">{openedJourney.price} rwf</span>
            </h1>
            <Link
              to={`/map`}
              className="min-h-[40px] w-full px-2 bg-main-color text-white font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 "
            >
              <FaMapLocationDot className="text-xl" />
              Track Bus
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoreInfo;

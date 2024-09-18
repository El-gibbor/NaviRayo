import React, { useEffect, useState } from "react";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { BusStations, BusStops } from "../content/data";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineTrash } from "react-icons/hi";

function FilterTickets({ onFilterSubmit, mobileSearch }) {
  const [inputFrom, setInputFrom] = useState(false);
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputTo, setInputTo] = useState(false);
  const [inputValueTo, setInputValueTo] = useState("");
  const [formEmpty, setFormEmpty] = useState(false);
  const [animateShow, setAnimateShow] = useState(false);

  // submiting
  const submit = (e) => {
    e.preventDefault();
    if (onFilterSubmit) {
      if (inputValueFrom !== "" || inputValueTo !== "") {
        setFormEmpty(true);
      }
      setInputFrom(false);
      setInputTo(false);
      onFilterSubmit(inputValueFrom, inputValueTo);
    }
  };
  // clearing the form
  const clearForm = () => {
    setInputValueFrom("");
    setInputValueTo("");
    setInputFrom(false);
    setInputTo(false);
    if (onFilterSubmit) {
      setFormEmpty(false);
      onFilterSubmit("", "");
    }
  };

  // from
  const checkEmptyFrom = (e) => {
    const value = e.target.value;
    setInputValueFrom(value);
    setInputFrom(value !== "");
    setInputTo(false);
  };
  const choosenFrom = (bstop) => {
    setInputFrom(false);
    setInputValueFrom(bstop);
  };
  const filteredBusStopsFrom = BusStations.filter((bstop) =>
    bstop.toLowerCase().includes(inputValueFrom.toLowerCase())
  );
  // to
  const checkEmptyTo = (e) => {
    const value = e.target.value;
    setInputValueTo(value);
    setInputTo(value !== "");
    setInputFrom(false);
  };
  const choosenTo = (bstop) => {
    setInputTo(false);
    setInputValueTo(bstop);
  };
  const filteredBusStopsTo = BusStations.filter((bstop) =>
    bstop.toLowerCase().includes(inputValueTo.toLowerCase())
  );

  useEffect(() => {
    if (mobileSearch === true) {
      setAnimateShow(true);
    } else {
      setAnimateShow(false);
    }
  }, [mobileSearch]);

  const swapFields = () => {
    const temp = inputValueFrom;
    setInputValueFrom(inputValueTo);
    setInputValueTo(temp);
  };

  return (
    <div className="w-full h-fit px-10 mb-3">
      <div
        className={`bg-search-light relative dark:bg-search-dark bg-center-30 dark:bg-center-60 bg-cover bg-no-repeat h-fit max-md:h-fit max-md:absolute w-full rounded-[30px] flex flex-col items-center justify-start px-10 py-20 max-md:px-4 shadow-xl max-w-[1700px] mx-auto ${
          animateShow
            ? "max-md:opacity-100 max-md:relative "
            : "max-md:opacity-0 max-md:-translate-y-full"
        }`}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-stone-700/40 dark:bg-container-dark/60 rounded-[30px]"></div>
        <p className="text-white z-10 font-extrabold tracking-tight text-4xl pb-1 ">
          Get yourself a seat!
        </p>
        <p className="text-white/90 z-10 font-medium text-sm pb-3">
          {`If your ticket isn’t listed, it’s because we’re still working on it!`}
        </p>
        <form
          onSubmit={submit}
          className="h-[60px] w-fit flex items-center justify-center max-md:flex-col max-md:gap-4 py-2 max-md:py-4 gap-0 relative"
        >
          {/* from */}
          <div className="h-full w-fit max-md:w-full relative">
            <input
              placeholder="From"
              type="text"
              onChange={checkEmptyFrom}
              value={inputValueFrom}
              className="bg-white transition duration-300 ring-0 ring-stone-200/50 dark:placeholder:text-dark-text h-full max-md:h-[40px] w-full capitalize max-w-[240px] max-md:max-w-[100%] rounded-full px-5 font-medium tracking-tight text-sm"
            />
            <div
              className={`ring-1 ring-border-lines-light z-30 absolute top-[50px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl shadow-black/5  rounded-md overflow-clip flex flex-col ${
                inputFrom ? "visible " : "invisible"
              }`}
            >
              <div className="scb p-1 w-full h-fit overflow-y-auto overscroll-contain">
                {filteredBusStopsFrom.map((bstop, index) => (
                  <div
                    key={index}
                    onClick={() => choosenFrom(bstop)}
                    className=" px-4 text-sm py-1 hover:bg-stone-100 rounded-md select-none cursor-pointer"
                  >
                    {bstop}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={swapFields}
            title="Swap fields"
            className="cursor-pointer transition active:scale-90 hover:scale-105 bg-transparent max-md:hidden text-white h-full flex items-center justify-center aspect-square rounded-full z-10 "
          >
            <FaArrowRightArrowLeft className="text-md" />
          </div>
          {/* to */}
          <div className="h-full w-fit max-md:w-full relative">
            <input
              placeholder="To"
              type="text"
              onChange={checkEmptyTo}
              value={inputValueTo}
              className="bg-white transition duration-300 ring-0 ring-stone-200/50 dark:placeholder:text-dark-text h-full max-md:h-[40px] w-full capitalize max-w-[240px] max-md:max-w-[100%] rounded-full px-5 font-medium tracking-tight text-sm"
            />
            <div
              className={`ring-1 ring-border-lines-light z-30 absolute top-[50px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl shadow-black/5  rounded-md overflow-clip flex flex-col ${
                inputTo ? "visible " : "invisible"
              }`}
            >
              <div className="scb p-1 w-full h-fit overflow-y-auto overscroll-contain">
                {filteredBusStopsTo.map((bstop, index) => (
                  <div
                    key={index}
                    onClick={() => choosenTo(bstop)}
                    className=" px-4 text-sm py-1 hover:bg-stone-100 rounded-md select-none cursor-pointer"
                  >
                    {bstop}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:absolute left-[100%] py-2  flex h-full items-center justify-center max-md:w-full">
            <button
              type="submit"
              className="h-full max-md:h-[40px] max-md:w-full aspect-square bg-main-color ml-2 max-md:ml-0 rounded-full flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-90 whitespace-nowrap gap-1"
            >
              <RiSearchLine className="text-base max-md:text-xl" />
            </button>
            <button
              onClick={clearForm}
              className={`h-full max-md:h-[40px] max-md:w-full  aspect-square bg-white cursor-pointer ring-0 ring-stone-200 ml-2 rounded-full flex items-center justify-center text-red-400 font-semibold text-sm tracking-tight active:scale-90 whitespace-nowrap gap-1 transition-all ease-in-out duration-300 ${
                formEmpty
                  ? "opacity-100"
                  : "md:opacity-0 md:pointer-events-none md:-z-10"
              }`}
            >
              <HiOutlineTrash className="text-lg max-md:text-xl" />
            </button>
          </div>
        </form>

        {/* search by */}
        <div className="w-fit h-fit flex items-center text-white gap-2 dark:text-white absolute bottom-5 left-5">
          <div className="min-h-[34px] z-10 w-fit flex p-1 bg-dark-text/30 dark:bg-light-text/30 backdrop-blur-sm rounded-full ">
            <button className="text-xs font-semibold text-dark-text bg-white rounded-full py-1 px-3">Location</button>
            {/* <button className="text-xs font-semibold text-white rounded-full py-1 px-3">Route ID</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTickets;

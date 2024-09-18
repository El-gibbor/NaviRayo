import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
// import Logo from "../assets/logo.png";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="info-header w-full min-h-svh flex items-center justify-center flex-col text-dark-text">
      <div className="fixed top-0 left-0 w-full p-10 max-md:p-4">
        <Link to={"/"}>
          <IoArrowBackOutline className="text-2xl" />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="w-fit h-fit flex items-center justify-start">
          <MdLocationOn className="text-[50px] text-main-color translate-y-[1px] translate-x-[3px]" />
          <h1 className=" font-bold text-[46px] tracking-tighter text-main-color pr-3 pointer-events-none select-none ">
            gerayo
          </h1>
        </div>
        <p className="font-medium text-sm capitalize font-mono">version 1.01</p>
      </div>
    </div>
  );
}

export default Info;

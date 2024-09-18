import React, { useEffect, useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";
import { MdLocationOn } from "react-icons/md";

function Login() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [guestPending, setGuestPending] = useState(false);

  const handleShowPassword = () => {
    const input = document.getElementById("password");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  useEffect(() => {
    const visitedAs = localStorage.getItem("visitedAs");
    if (visitedAs) {
      navigate("/");
    }
  }, []);

  function randomCode() {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)).join(
      ""
    );
  }

  const LoginGuest = () => {
    setGuestPending(true);
    setTimeout(() => {
      try {
        localStorage.setItem("visitedAs", "guest");
        localStorage.setItem("guestEmailCode", randomCode());
        window.location.reload();
      } catch (err) {
        console.log("Failed to Login Guest");
      }
    }, 1000);
  };

  return (
    <div className="h-svh w-full overflow-x-clip overflow-y-auto flex items-center justify-between max-sm:justify-end p-8 max-sm:p-4 bg-white dark:bg-body-color-dark">
      {/* Helmet */}
      <Helmet>
        <title>Login | gerayo.</title>
      </Helmet>
      <div className="fixed top-0 left-0 p-8 max-[250px]:bg-white w-full h-fit flex justify-end items-center select-none ">
        {/* Skip */}
        <button
          onClick={LoginGuest}
          className="outline-none flex items-center justify-start text-main-color cursor-pointer h-fit w-fit active:scale-95 transition "
          title="Login as a Guest"
        >
          {guestPending ? (
            <>
              <CgSpinner className="animate-spinLoader text-2xl " />
            </>
          ) : (
            <>
              <p className=" font-medium text-sm ">Continue as Guest</p>
              <GrFormNext />
            </>
          )}
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center max-sm:justify-between max-sm:pt-[70px]">
        {/* <Fade
          duration={500}
          cascade
          damping={0.3}
          className="w-full flex flex-col items-center justify-center"
        > */}
        <div className="flex flex-col items-center justify-center w-full h-fit max-sm:mt-10">
          <div className="flex items-center justify-center py-3">
            <MdLocationOn className="text-[30px] text-main-color pb-[1px] translate-x-1" />
            <h1 className=" font-bold text-[25px] tracking-tighter text-main-color pr-3  ">
              gerayo.
            </h1>
          </div>
          <h1 className="font-bold tracking-tighter text-2xl text-left text-dark-text/90 dark:text-white">
            Let's Sign you in.
          </h1>
          <p className="text-sm text-left text-dark-text/80 dark:text-light-text  max-w-[400px] font-medium">
            Welcome back!
          </p>

          <form className="w-full pt-3 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col w-full items-start justify-start max-w-[350px]">
              <p className="text-sm font-medium py-1 text-dark-text dark:text-light-text">Email</p>
              <input
                type="text"
                name=""
                className="bg-[#F2F1F6] dark:bg-container-dark-2 text-dark-text dark:text-white text-sm  h-[40px] w-full flex items-center justify-start px-5 outline-none focus:ring-2 ring-main-color ring-offset-2 dark:ring-offset-body-color-dark dark:placeholder:text-light-text  rounded-full "
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col w-full items-start justify-start max-w-[350px]">
              <p className="text-sm font-medium py-1 text-dark-text dark:text-light-text">
                Password
              </p>
              <input
                type="password"
                id="password"
                className="bg-[#F2F1F6] dark:bg-container-dark-2 text-dark-text dark:text-white text-sm  h-[40px] w-full flex items-center justify-start px-5 outline-none focus:ring-2 ring-main-color ring-offset-2 dark:ring-offset-body-color-dark dark:placeholder:text-light-text  rounded-full "
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-start select-none py-2 w-full max-w-[350px]">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className=" accent-main-color h-4 w-4"
                  onClick={handleShowPassword}
                />
                <p className="text-dark-text dark:text-light-text font-medium text-sm capitalize">
                  Show password
                </p>
              </label>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <button
            // onClick={handleClick}
            className="bg-main-color my-4 outline-none text-white font-bold text-base transition active:scale-90 h-[40px] w-full max-w-[350px] rounded-full flex items-center justify-center gap-2"
          >
            {pending ? (
              <>
                <CgSpinner className="animate-spinLoader text-2xl " />
                Signing in..
              </>
            ) : (
              <>Sign in</>
            )}
          </button>
          <p className="flex items-center justify-center w-full text-sm gap-2 text-dark-text dark:text-light-text ">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-main-color font-semibold">
              Register
            </Link>
          </p>
        </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default Login;

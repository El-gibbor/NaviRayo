import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineTicket } from "react-icons/hi2";
import MobileTopBar from "../Components/MobileTopBar";
import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import Filter from "../Components/Filter";
import Notification from "../Components/Notification";
import Welcome from "../Components/Welcome";
import { BusPark, KigaliBusJourney } from "../content/data";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";

function TrackMap({ guestEmail }) {
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

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

  // check if this user has visited before
  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedGerayo");
    if (visitedBefore) {
      setVisited(true);
    }
  }, []);
  // notification
  const showNotificationPopup = () => {
    setShowNotification(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideNotificationPopup = () => {
    setShowNotification(false);
    document.documentElement.classList.remove("no-scroll");
  };

  const hideMoreInfoPopup = () => {
    setMoreInfo(false);
    document.documentElement.classList.remove("no-scroll");
  };

  const filterBusJourneys = (busJourneys, from, to) => {
    return busJourneys.filter(
      (journey) =>
        (from ? journey.from.toLowerCase() === from.toLowerCase() : true) &&
        (to ? journey.to.toLowerCase() === to.toLowerCase() : true)
    );
  };

  const handleFilterSubmit = (from, to) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setShowFilteredOnly(true);
    console.log("Filter submitted:", from, to);
    setFiltered(filterBusJourneys(KigaliBusJourney, from, to));
  };

  const showSearch = () => {
    setMobileSearch(!mobileSearch);
  };


  return (
    <div className="bg-stone-100 dark:bg-stone-100 min-h-svh max-md:pb-10 text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}

      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}

      {/* Helmet */}
      <Helmet>
        <title>Map | gerayo.</title>
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

      {/* phone Topbar */}
      <MobileTopBar
        showSearch={showSearch}
        title={"Find my bus"}
        show={showNotificationPopup}
      />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      {/* pc navBar */}
      <div className="w-full h-fit sticky max-md:relative top-0 z-20 bg-white dark:bg-white ">
        <Navbar show={showNotificationPopup} guestEmail={guestEmail} />
      </div>

      <div className="w-full h-fit flex bg-stone-100">
        <div className=" w-full min-h-svh">
          {/* content */}
          {loading ? (
            <div className="w-full h-full col-span-2 flex items-center gap-4 justify-start flex-col pt-16 pb-3">
            <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
            <p className="text-sm text-dark-text/50 ">Loading map...</p>
          </div>
          ) : (
            <div className="w-full h-full flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.263063069586!2d30.06110196744967!3d-1.9463600799124436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7257fefe277%3A0xf5e9ee91b1d71e4f!2sKibagabaga%2C%20Kigali!5e0!3m2!1sen!2srw!4v1721022259235!5m2!1sen!2srw"
                width="100%"
                height="100%"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TrackMap;

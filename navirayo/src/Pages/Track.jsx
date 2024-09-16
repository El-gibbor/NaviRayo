import { Helmet } from "react-helmet";
import Filter from "../Components/Filter";
import NavBar from "../Components/NavBar";
import Welcome from "../Components/Welcome";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";



function Track({ guestEmail }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [visited, setVisited] = useState(false);
  const [showProfile, setProfile] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("no-scroll");
  }, [pathname]);

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

  return (
    <div className="bg-stone-100 dark:bg-body-color-dark min-h-svh max-md:pb-10 text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}

      {/* profile */}
      {showProfile && <Profile hide={hideProfilePopup} guestEmail={guestEmail} />}


      {/* Helmet */}
      <Helmet>
        <title>Find my bus | gerayo.</title>
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

      {/* pc navBar */}
      <div className="w-full h-fit sticky max-md:relative top-0 z-20 backdrop-blur-md bg-stone-100/90 dark:bg-body-color-dark/80 ">
        <NavBar show={showNotificationPopup} showPremiumModal={showPremiumModal} showPf={showProfilePopup} guestEmail={guestEmail} />
      </div>
      <Filter mobileSearch={mobileSearch} onRouteFilter={handleRouteIdSubmit} onFilterSubmit={handleFilterSubmit} />

    </div>
  );
};

export default Track;

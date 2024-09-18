import React, { useEffect, useState } from "react";
import Navbar from "../Components/NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuListFilter, LuSearch } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiTicketDuotone } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { HiOutlineTicket } from "react-icons/hi2";
// import MobileTopBar from "../Components/MobileTopBar";
// import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import Filter from "../Components/Filter";
import Notification from "../Components/Notification";
import Welcome from "../Components/Welcome";
import { BusPark, KigaliBusJourney } from "../content/data";
import MoreInfo from "../Components/MoreInfo";
import Profile from "../Components/Profile";
// import Premium from "../Components/Premium";

function Track({ guestEmail }) {
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMoreInfo, setMoreInfo] = useState(false);
  const [showProfile, setProfile] = useState(false);
  const [showFilteredOnly, setShowFilteredOnly] = useState(false);
  const [showFilteredOnlyByRoute, setShowFilteredOnlyByRoute] = useState(false);
  const [filtered, setFiltered] = useState();
  const [moreInfoId, setMoreInfoId] = useState("0");
  const [mobileSearch, setMobileSearch] = useState(false);
  const [pinnedBuses, setPinnedBuses] = useState(false);
  const [pinnedBusIds, setPinnedBusIds] = useState([]);
  const [pinnedJourneys, setPinnedJourneys] = useState([]);
  const [watchPinned, setWatchPinned] = useState("");
  const { pathname } = useLocation();
  const [showPremium, setShowPremium] = useState(false)

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

  const hideNotificationPopup = () => {
    setShowNotification(false);
    document.documentElement.classList.remove("no-scroll");
  };

  // more info
  const showMoreInfoPopup = (id) => {
    setMoreInfo(true);
    setMoreInfoId(id);
    document.documentElement.classList.add("no-scroll");
  };

  const hideMoreInfoPopup = () => {
    setMoreInfo(false);
    document.documentElement.classList.remove("no-scroll");
  };

  // Profile
  const showProfilePopup = () => {
    setProfile(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideProfilePopup = () => {
    setProfile(false);
    document.documentElement.classList.remove("no-scroll");
  };

  const filterBusJourneys = (busJourneys, from, to) => {
    return busJourneys.filter(
      (journey) =>
        (from ? journey.from.toLowerCase() === from.toLowerCase() : true) &&
        (to ? journey.to.toLowerCase() === to.toLowerCase() : true)
    );
  };
  // filter by Route ID
  const filterBusJourneysByRouteId = (busJourneys, routeId) => {
    return busJourneys.filter(
      (journey) => (routeId ? journey.RouteId === routeId : true)
    );
  };
  // location Filter
  const handleFilterSubmit = (from, to) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setShowFilteredOnly(true);
    console.log("Filter submitted:", from, to);
    setFiltered(filterBusJourneys(KigaliBusJourney, from, to));
  };

  // Route Id Filter
  const handleRouteIdSubmit = (RouteId) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setShowFilteredOnly(true);
    console.log("Filter submitted:", RouteId);
    setFiltered(filterBusJourneysByRouteId(KigaliBusJourney, RouteId));
  };

  const showSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  const watchPinnedChange = (id) => {
    setWatchPinned(id);
  };

  useEffect(() => {
    const storedPinnedBusIds = JSON.parse(localStorage.getItem("PinnedBusIds"));
    if (storedPinnedBusIds) {
      setPinnedBusIds(storedPinnedBusIds);
    }
  }, [watchPinned]);

  useEffect(() => {
    const filteredJourneys = KigaliBusJourney.filter((journey) =>
      pinnedBusIds.includes(journey.id)
    );
    setPinnedJourneys(filteredJourneys);
  }, [pinnedBusIds]);

  const showPinned = () => {
    setPinnedBuses(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const hidePinned = () => {
    setPinnedBuses(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // show Premium
  const showPremiumModal = () => {
    setShowPremium(true)
    document.documentElement.classList.add("no-scroll");
  }

  const hidePremiumModal = () => {
    setShowPremium(false)
    document.documentElement.classList.remove("no-scroll");
  }

  return (
    <div className="bg-stone-100 dark:bg-body-color-dark min-h-svh max-md:pb-10 text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}

      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}
      {/* profile */}
      {showProfile && <Profile hide={hideProfilePopup} guestEmail={guestEmail} />}
      {/* MoreInfo */}
      {showMoreInfo && <MoreInfo id={moreInfoId} hide={hideMoreInfoPopup} />}
      {/* Premium */}
      {showPremium && <Premium hidePremiumModal={hidePremiumModal} />}

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

      {/* phone Topbar */}
      <MobileTopBar
        showSearch={showSearch}
        title={"Find my bus"}
        show={showNotificationPopup}
      />

      Phone navBar
      <MobileBottomNavbar guestEmail={guestEmail} />

      {/* pc navBar */}
      <div className="w-full h-fit sticky max-md:relative top-0 z-20 backdrop-blur-md bg-stone-100/90 dark:bg-body-color-dark/80 ">
        <Navbar show={showNotificationPopup} showPremiumModal={showPremiumModal} showPf={showProfilePopup} guestEmail={guestEmail} />
      </div>
      <Filter mobileSearch={mobileSearch} onRouteFilter={handleRouteIdSubmit} onFilterSubmit={handleFilterSubmit} />

      <div className="w-full h-fit flex ">
        <div className=" w-full min-h-full">
          {/* content */}
          <div className="w-full mx-auto max-w-[1700px] h-fit pb-10 pt-3 px-10 max-md:px-4 max-sm:py-7 max-md:mb-12">
            <p className="text-dark-text dark:text-white font-medium text-sm">
              Most known places
            </p>
            <div className="hidescrollbar w-full h-fit pt-2 overflow-y-hidden overflow-x-auto flex items-center justify-start gap-2 ">
              {BusPark.map((park, index) => (
                <div
                  key={index}
                  onClick={() => handleFilterSubmit(park, "")}
                  className="h-full ring-1 ring-slate-200/40 dark:ring-transparent w-fit hover:shadow-lg hover:text-main-color cursor-pointer bg-white dark:bg-container-dark text-dark-text/60 dark:text-light-text text-sm font-medium rounded-full flex items-center justify-center py-2 px-6 whitespace-nowrap"
                >
                  {park}
                </div>
              ))}
            </div>

            {/* tabs */}
            <div className="w-full h-fit flex items-center justify-between max-md:justify-start gap-2 py-3 mt-4 max-md:overflow-x-auto hidescrollbar">
              <div className="flex items-center justify-start gap-2">
                <button
                  onClick={hidePinned}
                  className={`text-dark-text dark:text-white whitespace-nowrap font-medium hover:bg-white dark:hover:bg-container-dark-2 text-sm py-2 px-4 rounded-full flex items-center justify-center cursor-pointer gap-1 ${
                    pinnedBuses
                      ? ""
                      : "bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40"
                  } `}
                >
                  <TbBusStop className="text-xl" />
                  All Buses
                </button>
                <button
                  onClick={showPinned}
                  className={`text-dark-text dark:text-white whitespace-nowrap font-medium hover:bg-white dark:hover:bg-container-dark-2 text-sm py-2 px-4 rounded-full flex items-center cursor-pointer justify-center gap-1 ${
                    pinnedBuses
                      ? "bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40"
                      : ""
                  }`}
                >
                  <TiPin className="text-xl" />
                  Pinned{" "}
                  {`(${pinnedBusIds.length > 0 ? pinnedBusIds.length : "0"})`}
                </button>
              </div>
            </div>

            {/* Buses */}
            <div className="grid grid-cols-2 2xl:grid-cols-3 max-lg:grid-cols-1 gap-5 h-fit w-full">
              {loading ? (
                <>
                  <div className="w-full h-fit col-span-2 flex items-start justify-center pt-16 pb-3">
                    <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 dark:text-light-text " />
                  </div>
                </>
              ) : (
                <>
                  {showFilteredOnly ? (
                    <>
                      {filtered.map((journey, index) => (
                        <Bus
                          moreInfo={showMoreInfoPopup}
                          watchPinnedChange={watchPinnedChange}
                          key={index}
                          id={journey.id}
                          plateNumber={journey.plateNumber}
                          numberOfSeats={journey.numberOfSeats}
                          from={journey.from}
                          to={journey.to}
                          busType={journey.busType}
                          departureAt={journey.departureAt}
                          arrivalTime={journey.arrivalTime}
                          price={journey.price}
                        />
                      ))}
                      <div
                        className={`flex items-center justify-center col-span-2 text-sm italic text-dark-text/70 dark:text-light-text font-medium pt-8 max-md:pb-8 ${
                          filtered.length <= 0 ? "visible " : "hidden"
                        } `}
                      >
                        Bus not found.
                      </div>
                    </>
                  ) : (
                    <>
                      {pinnedBuses ? (
                        <>
                          {loading ? (
                            <>
                              <div className="w-full h-fit col-span-2 flex items-start justify-center pt-16 pb-3">
                                <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
                              </div>
                            </>
                          ) : (
                            <>
                              {pinnedJourneys.map((journey, index) => (
                                <Bus
                                  moreInfo={showMoreInfoPopup}
                                  watchPinnedChange={watchPinnedChange}
                                  key={index}
                                  id={journey.id}
                                  plateNumber={journey.plateNumber}
                                  numberOfSeats={journey.numberOfSeats}
                                  from={journey.from}
                                  to={journey.to}
                                  busType={journey.busType}
                                  departureAt={journey.departureAt}
                                  arrivalTime={journey.arrivalTime}
                                  price={journey.price}
                                />
                              ))}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {KigaliBusJourney.map((journey, index) => (
                            <Bus
                              moreInfo={showMoreInfoPopup}
                              watchPinnedChange={watchPinnedChange}
                              key={index}
                              id={journey.id}
                              plateNumber={journey.plateNumber}
                              numberOfSeats={journey.numberOfSeats}
                              from={journey.from}
                              to={journey.to}
                              busType={journey.busType}
                              departureAt={journey.departureAt}
                              arrivalTime={journey.arrivalTime}
                              price={journey.price}
                            />
                          ))}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;

import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
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
import Premium from "../Components/Premium";

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
      {/* {showNotification && <Notification hide={hideNotificationPopup} />} */}
      {/* profile */}
      {showProfile && <Profile hide={hideProfilePopup} guestEmail={guestEmail} />}
      {/* MoreInfo */}
      {/* {showMoreInfo && <MoreInfo id={moreInfoId} hide={hideMoreInfoPopup} />} */}
      {/* Premium */}
      {/* {showPremium && <Premium hidePremiumModal={hidePremiumModal} />} */}

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

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      {/* pc navBar */}
      <div className="w-full h-fit sticky max-md:relative top-0 z-20 backdrop-blur-md bg-stone-100/90 dark:bg-body-color-dark/80 ">
        <Navbar show={showNotificationPopup} showPremiumModal={showPremiumModal} showPf={showProfilePopup} guestEmail={guestEmail} />
      </div>
      <Filter mobileSearch={mobileSearch} onRouteFilter={handleRouteIdSubmit} onFilterSubmit={handleFilterSubmit} />

    </div>
  );
}

export default Track;

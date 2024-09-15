import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Welcome from "../Components/Welcome";


function Track({ guestEmail }) {
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-stone-100 dark:bg-body-color-dark min-h-svh max-md:pb-10 text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}
    </div>
  )
}

export default Track;

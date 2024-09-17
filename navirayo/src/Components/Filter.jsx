import React, { useEffect, useState } from "react";

function Filter({ onFilterSubmit, onRouteFilter }) {
  const [inputFrom, setInputFrom] = useState(false);
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputValueRouteId, setInputValueRouteId] = useState("");
  const [inputTo, setInputTo] = useState(false);
  const [inputValueTo, setInputValueTo] = useState("");
  const [formEmpty, setFormEmpty] = useState(false);
  const [dropDownRoute, setDropDownRoute] = useState(false);
  const [inputRoute, setInputRoute] = useState(false);
  const [formEmptyRoute, setFormEmptyRoute] = useState(false);
  const [animateShow, setAnimateShow] = useState(false);
  const [searchBy, setSearchBy] = useState("location");

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
  // submiting Route
  const submitRoute = (e) => {
    e.preventDefault();
    if (onRouteFilter) {
      if (inputValueRouteId !== "") {
        setFormEmptyRoute(true);
      }
      onRouteFilter(inputValueRouteId);
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
    };
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
      const filteredBusStopsFrom = BusStops.filter((bstop) =>
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
      const filteredBusStopsTo = BusStops.filter((bstop) =>
        bstop.toLowerCase().includes(inputValueTo.toLowerCase())
      );
      // Route Id
      const checkEmptyRoute = (e) => {
        const value = e.target.value;
        setInputValueRouteId(value);
        setInputRoute(value !== "")
        setDropDownRoute(true)
      };
      const choosenRoute = (rId) => {
        setDropDownRoute(false);
        setInputValueRouteId(rId);
      };
      const filteredRoutes = RouteIds.filter((route) =>
        route.RouteId.includes(inputValueRouteId)
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
        <div>

        </div>
    );
}
export default Filter;

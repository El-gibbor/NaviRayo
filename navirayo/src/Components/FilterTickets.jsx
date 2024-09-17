import { BusStations, BusStops } from "../content/data";
import React, { useEffect, useState } from "react";

function FilterTickets({ onFilterSubmit }) {
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

return(
    <div>

    </div>
)};

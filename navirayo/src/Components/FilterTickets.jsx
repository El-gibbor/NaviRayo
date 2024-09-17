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

return(
    <div>

    </div>
)};

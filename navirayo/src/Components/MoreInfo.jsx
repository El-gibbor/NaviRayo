import React, { useEffect, useState, useMemo, useCallback } from "react";


function MoreInfo({ hide, id }) {

    useEffect(() => {
      setAnimate(true);
    }, []);

    useEffect(() => {
      setTimeout(() => {
        setLoad(false);
      }, 800);
    }, []);
}

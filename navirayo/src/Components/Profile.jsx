import React, { useEffect, useState } from "react";

function Profile({ hide, guestEmail }) {

    const logMeOut = () => {
        localStorage.removeItem("visitedAs");
        setLoggingOut(true);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div>

        </div>
    )}

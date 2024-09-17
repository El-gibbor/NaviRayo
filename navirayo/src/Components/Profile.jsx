import React, { useEffect, useState } from "react";

function Profile({ hide, guestEmail }) {
    const [animate, setAnimate] = useState(false);
    const [loggingOut, setLoggingOut] = useState(false);

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

    const hideNotificationPopup = () => {
        setAnimate(false);
        setTimeout(() => {
          hide();
        }, 200);
      };

    return (
        <div>

        </div>
    )}

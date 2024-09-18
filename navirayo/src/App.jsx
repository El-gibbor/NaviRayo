import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import BuyTicket from "./Pages/BuyTicket";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Track from "./Pages/Track";
import Help from "./Pages/Help";
import Info from "./Pages/Info";
import TrackMap from "./Pages/TrackMap";
import Purchase from "./Pages/Purchase";

function App() {
  const [visited, setVisited] = useState(false);
  const [guestEmail, setGuestEmail] = useState();

  useEffect(() => {
    const visitedAs = localStorage.getItem("visitedAs");
    const storedGuestEmail = localStorage.getItem("guestEmailCode");
    if (visitedAs) {
      setVisited(true);
    }
    if (storedGuestEmail) {
      setGuestEmail(storedGuestEmail)
    }
  }, []);
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Track guestEmail={guestEmail} />} />
          <Route path="/ticket" element={<BuyTicket guestEmail={guestEmail} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/help" element={<Help guestEmail={guestEmail} />} />
          <Route path="/info" element={<Info guestEmail={guestEmail} />} />
          <Route path="/map" element={<TrackMap guestEmail={guestEmail} />} />
          <Route path="/purchaseticket/:tid" element={<Purchase guestEmail={guestEmail} />} />
          {/* <Route path="/*" element={<PageError />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

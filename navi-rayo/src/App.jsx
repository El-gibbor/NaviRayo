import Login from "./Pages/Login";
import Track from "./Pages/Track"
import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/login" element={<Login />} />
          {/* <Route path="/*" element={<PageError />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

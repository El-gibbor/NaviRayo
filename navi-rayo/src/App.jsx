import Login from "./Pages/Login";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/*" element={<PageError />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

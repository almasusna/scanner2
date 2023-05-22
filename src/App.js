import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import AllScans from "./Components/All Scans/allScans";
import Scan from "./Components/All Scans/Scan/scan";
import { Settings } from "./Components/Settings/settings";
import { Profile } from "./Components/Profile/profile";

import { NotFound } from "./Components/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import OldNav from "./Components/navbar";

function App() {
  return (
    <>
      <OldNav />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scans" element={<AllScans />} />
          <Route path="/scans/:id" element={<Scan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

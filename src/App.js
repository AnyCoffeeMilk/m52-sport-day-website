import { Route, HashRouter, Routes } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import TimeTables from "./pages/TimeTables";
import Results from "./pages/Results";
import Photos from "./pages/Photos";
import About from "./pages/About";

function App() {
  return (
    <div>
      <div className="h-24 md:h-[9.5rem] bg-gradient-to-r from-red-500 to-indigo-500">
        {/* <img className='object-cover h-24 md:h-[9.5rem] w-full' alt='banner' src="https://m51.puiching.edu.mo/imgs/banner.png" /> */}
        <div className="h-full w-full p-4 flex gap-3 items-center">
          <img
            src="/pclogo.png"
            className="h-14 drop-shadow-lg"
            alt="Pui Ching Logo"
          />
          <div className="text-white font-bold drop-shadow-lg text-lg">
            <div>澳門培正中學</div>
            <div>第五十二屆田徑運動會</div>
          </div>
        </div>
      </div>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timetable" element={<TimeTables />} />
          <Route path="/results" element={<Results />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

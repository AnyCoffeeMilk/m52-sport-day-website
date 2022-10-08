import { Route, HashRouter, Routes } from 'react-router-dom';
import TagManager from 'react-gtm-module'

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import TimeTables from "./pages/TimeTables";
import Results from "./pages/Results";
import Photos from "./pages/Photos";
import About from "./pages/About";

const tagManagerArgs = {
  gtmId: 'G-QG4GY2V0TX'
};

TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div>
      <a href='/home' className='h-24 md:h-[9.5rem] cursor-pointer'>
        <div className='flex justify-between md:justify-center px-3 py-6 items-center h-24 md:h-[9.5rem] w-full bg-gradient-to-r from-red-500 to-blue-600'>
          <img alt='pcms-logo' className='object-contain h-20 md:h-24' src='https://m52.puiching.edu.mo/pcms-logo.png' />
          <div className='md:pl-4 text-white whitespace-nowrap sm:flex items-end'>
            <div className='text-lg sm:text-2xl font-extrabold '>
              澳門培正中學第五十二屆田徑運動會
            </div>
            <div className='font-bold text-end pl-4'>
              賽事資訊站
            </div>
          </div>
        </div>
        {/* <img className='object-cover h-24 md:h-[9.5rem] w-full' alt='banner' src="https://m51.puiching.edu.mo/imgs/banner.png" /> */}
      </a>
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

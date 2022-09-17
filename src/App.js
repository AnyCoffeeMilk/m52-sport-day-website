import './App.css';
import { Route, HashRouter, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './component/Home';
import Time from './component/Time';
import Result from './component/Result';
import Photos from './component/Photos';
import About from './component/About';

function App() {
  return (
    <div>
      <img src="https://m51.puiching.edu.mo/imgs/banner.png" />
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/timetable' element={<Time />} />
          <Route path='/result' element={<Result />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

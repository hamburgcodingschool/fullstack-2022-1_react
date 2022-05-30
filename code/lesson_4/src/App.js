import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import List from './components/list/List';
import List2 from './components/list/List2';
import Home from './components/list/Home';
import About from './components/list/About';

// SPA Single page application

const App = () => {
  return (
    <div className="App">
      {/* <List /> */}
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/list'>List</Link>
        <Link to='/second-list'>Second List</Link>
      </div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
        <Route path="about" element={<About />} />
        <Route path="second-list" element={<List2 />} />
      </Routes>
    </div>
  );
}

export default App;

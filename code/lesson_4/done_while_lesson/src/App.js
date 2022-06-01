import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import List from './components/list/List';
import Home from './components/home/Home';
import About from './components/about/About';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'list'}>List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;

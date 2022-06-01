import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import List from './components/list/List';
import Home from './components/home/Home';
import About from './components/about/About';
import UseEffectSession from './components/useEffectSession/UseEffectSession';

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'list'}>List</Link>
        <Link to={'use-effect'}>use Effect</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="list" element={<List />} />
        <Route path="use-effect" element={<UseEffectSession />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './style/App.css';
import NavBar from './components/navbar';
import Calc from './pages/calc';
import Home from './pages/home';
import Quote from './pages/quote';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

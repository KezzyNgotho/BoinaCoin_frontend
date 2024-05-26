import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './pages/LandingPage';
import AboutSection from './pages/AboutSection';
import TokenomicsSection from './pages/TokenomicsSection'

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="About" element={<AboutSection />} />
          <Route path="Tokenomics" element={<TokenomicsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

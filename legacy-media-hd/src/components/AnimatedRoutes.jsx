// src/components/AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Production from '../pages/Production';
import Rentals from '../pages/Rentals';

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/production" element={<Production />} />
        <Route path="/rentals" element={<Rentals />} />
        {/* ... other routes ... */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes
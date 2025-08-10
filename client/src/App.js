import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import './index.css';

// Wrapper component to use useLocation with AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here as needed */}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-center" />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;

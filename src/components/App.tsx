import './App.css'
import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Control from './Control';
import LandingPage from './LandingPage';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      {children}
    </React.Fragment>
  )
}

function App() {

  return (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<MainLayout><Control /></MainLayout>} />
    </Routes>
  </Router>
  )
}

export default App

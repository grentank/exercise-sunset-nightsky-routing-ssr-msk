import React from 'react';
import Home from './pages/Home';
import NavBar from './ui/NavBar';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
    </div>
  );
}

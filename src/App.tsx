import React from 'react';
import Home from './pages/Home';
import './index.css'; // Ensure your CSS is imported here

function App() {
  return (
    <>
      {/* Global Atom background should be visible across all sections */}
      <div className="atom-container">
        <div className="nucleus"></div>
        <div className="electron" style={{ animationDuration: '2.5s' }}></div>
        <div className="electron" style={{ animationDuration: '3.2s' }}></div>
        <div className="electron" style={{ animationDuration: '3.8s' }}></div>
        <div className="electron" style={{ animationDuration: '4.5s' }}></div>
      </div>

      {/* The Home component manages sections */}
      <Home />
    </>
  );
}

export default App;

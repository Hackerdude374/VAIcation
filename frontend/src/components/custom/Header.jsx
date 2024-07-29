import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className="p-3 shadow-md flex justify-between items-center px-5" style={{ backgroundColor: '#FF4136', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <img src="/Vacation.svg" style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%', // Makes the image round
        border: '3px solid white', // Adds a white border
        padding: '30px', // Decreased padding to keep the logo size large
        backgroundColor: 'white' // Ensures the background inside the circle is white
      }} alt="Logo" />
      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Header;
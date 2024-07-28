import React from 'react';
import {Button} from '../ui/button'
function Header() {
  return (
    <div className = "p-3 shadow-sm flex justify-between items-center px-5">
      <img src='/Vacation.png' style={{ width: '100px', height: '100px' }} alt="Logo"/>
      <div>
        <Button>Sign in Button</Button>
      </div>


    </div>
    
  );
}

export default Header;

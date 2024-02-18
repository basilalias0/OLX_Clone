import React from 'react';
import './Navbar.css'
import logo from './logoAndPics/OLX-logo.png'
import sLogo from'./logoAndPics/magnifying-glass-solid.svg'

function Navbar() {
  const handleChange = () =>{
    console.log("onChange acted")
  }
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo'></img>
        </div>
        <div className='searchbar'>
          <div className='icon'>
            <img src={sLogo}/>
          </div>
          <input type='text'
          placeholder='Find Cars,Mobile and more...'/>
        </div>
        <div className='logAndName'><button>
          LogIn/SignUp</button></div>
        <div className='sellBtn'><button>+ SELL</button></div>
      </div>
    </div>
  );
}

export default Navbar;

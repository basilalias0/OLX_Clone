import React from 'react';
import './Navbar.css'
import logo from './logoAndPics/OLX-logo.png'
import sLogo from'./logoAndPics/magnifying-glass-solid.svg'
import {useState} from 'react'
import Overlay from './Overlay';

function Navbar() {

  const [popup,setPopup] = useState(false)

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
          
          <input type='text'
          placeholder='Find Cars,Mobile and more...'/>
          <div className='icon'>
            <button><img src={sLogo}/></button>
            
          </div>
        </div>
        <div className='logAndName'>
        <button onClick={()=>setPopup(true)}>
          LogIn/SignUp
          </button></div>
        <div className='sellBtn'><button>+ SELL</button></div>
      </div>
      <div className='bottomSpace'></div>
      <Overlay trigger={popup} setTrigger={setPopup}/>
    </div>
  );
}

export default Navbar;

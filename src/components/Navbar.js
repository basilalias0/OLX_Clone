import React, { useContext } from 'react';
import './Navbar.css'
import logo from './logoAndPics/OLX-logo.png'
import sLogo from'./logoAndPics/magnifying-glass-solid.svg'
import {useState} from 'react'
import LoginOverlay from './LoginOverlay';
import LogOutOverlay from './LogOutOverlay';
import {authContext} from '../Store/Context'

function Navbar() {

  const [popup,setPopup] = useState(false)
  const {user} = useContext(authContext) 



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
        <div className='username'>
        {(user) ? `Welcome, ${user.displayName}`:""
        }
        </div>
        <div className='logAndName'>

        <button onClick={()=>setPopup(true)}>
        {(user) ? `Log out`:"LogIn/SignUp"
        }
          </button></div>
        <div className='sellBtn'><button>+ SELL</button></div>
      </div>
      <div className='bottomSpace'></div>

        {(user)?(<LogOutOverlay trigger={popup} setTrigger={setPopup}/>):(<LoginOverlay trigger={popup} setTrigger={setPopup}/>)}
      
    </div>
  );
}

export default Navbar;

import React from 'react';
import './Overlay.css'
import olxLogo from './logoAndPics/OLX-Logo-blue.jpg'
import {useState} from 'react'

function Overlay(props) {

    const [signupbtn,setSignupbtn] = useState(true)

  return (props.trigger) ? (
    <div>
        
        <div className='overlayPage'>
      <div className='overlay'>
        <div className='overlayHeader'>
        <div className='olxLogo'><img src={olxLogo}></img></div>
        <div className='closeBar'>
        <button onClick={()=>{props.setTrigger(false)}}></button>
        </div>
        </div>

        {(signupbtn) ? (
            <div className='signUpForm'>
            <div className='formTitle'></div>
            <div className='form'>
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='Password' placeholder='Password' />
                    <div className='btns'>
                    <button>Sign Up</button>
                    <button onClick={()=>{setSignupbtn(false)}}>Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
        ):(<div className='LoginForm'>
        <div className='formTitle'></div>
            <div className='form'>
                <form>
                    
                    <input type='email' placeholder='Email' />
                    <input type='Password' placeholder='Password' />
                    <div className='btns'>
                    <button>login</button>
                    <button onClick={()=>{setSignupbtn(true)}}>Sign Up</button>
                    </div>
                </form>
                
            </div>
        </div>)}
        
        
        
    
    
        
      </div>
      </div>
    </div>
  ) : "";
}

export default Overlay;

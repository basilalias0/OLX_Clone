import './Overlay.css'
import olxLogo from './logoAndPics/OLX-Logo-blue.jpg'
import {auth} from '../Firebase/config'
import React, { useContext,useState } from 'react';
import {authContext} from '../Store/Context'
import LoadingSpinner from './LoadingSpinner';

function LogOutOverlay(props) {

  const user = useContext(authContext)
  const [isLoading, setIsLoading] = useState(false);

  

  const handleLogOut = (event)=>{
    event.preventDefault()
    setIsLoading(true);

    auth.signOut().then(() => {
      setIsLoading(false) 
      props.setTrigger(false)
      console.log("Logout completed")
      console.log(user)
      
    }).catch((error) => {
      console.log(error)
    });

  }

    return (props.trigger) ? (
    <div>
      {(isLoading) ? <LoadingSpinner/> : "" }
        <div className='overlayPage'>
      <div className='overlay'>
        <div className='overlayHeader'>
        <div className='olxLogo'><img src={olxLogo}></img></div>
        <div className='closeBar'>
        <button onClick={()=>{props.setTrigger(false)}}></button>
        </div>
        
        </div>
        <div className='cardTitle'>Are You Sure sir?</div>
        <div className='logOutBtns'>
                    <button onClick={handleLogOut}>Yes</button>
                    <button onClick={()=>{props.setTrigger(false)}}>No</button>
                    </div>

        
      </div>
      </div>
      
    </div>
  ): "";
}

export default LogOutOverlay;




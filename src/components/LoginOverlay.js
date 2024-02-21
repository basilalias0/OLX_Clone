import React, { useContext } from 'react';
import './Overlay.css'
import olxLogo from './logoAndPics/OLX-Logo-blue.jpg'
import {useState} from 'react'
import {auth, db} from '../Firebase/config'
import LoadingSpinner from './LoadingSpinner';


function LoginOverlay(props) {

    const [signUpBtn,setSignUpBtn] = useState(true)
    const [username,setUsername] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [lPassword,setLPassword] =useState('')
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (event)=>{
      event.preventDefault()
      setIsLoading(true);
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => { 
    const user = userCredential.user
    props.setTrigger(false)
user.updateProfile({displayName:username}).then(()=>{
      db.collection('users').add({
        id:user.uid,
        name:username,
        email:email
      })
      console.log("Sign Up Completed")
      setPassword('')
      
      setIsLoading(false) 

    })
    
  })
  .catch((error) => {
    props.setTrigger(true)
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    alert(errorMessage)
    setIsLoading(false) 

  });
    }

  const handleSignIn =(e)=>{
    e.preventDefault()
    setIsLoading(true);
    auth.signInWithEmailAndPassword(email, lPassword)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log("Login Completed")
    setIsLoading(false) 
    props.setTrigger(false)
    setLPassword('')
  })
  .catch((error) => {
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    alert(errorMessage)
    setIsLoading(false) 
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

        {(signUpBtn) ? (
            <div className='signUpForm'>
            <div className='form'>
                <form onSubmit={handleSignUp}>
                    <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}  name='name' placeholder='Name'/>
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  name='email' placeholder='Email' />
                    <input type='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  name='password' placeholder='Password' />
                    <div className='btns'>
                    <button type='submit'>Sign Up</button>
                    <button onClick={()=>{setSignUpBtn(false)}}>Login</button>
                    </div>
                    
                </form>
            </div>
        </div>
        ):(<div className='LoginForm'>
        <div className='formTitle'>Welcome Back sir,</div>
            <div className='form'>
                <form onSubmit={handleSignIn}>
                    
                    <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder='Email' />
                    <input type='Password' value={lPassword} onChange={(e)=>{setLPassword(e.target.value)}}  name='password' placeholder='Password' />
                    <div className='btns'>
                    <button type='submit'>Login</button>
                    <button onClick={()=>{setSignUpBtn(true)}}>Sign Up</button>
                    </div>
                </form>
                
            </div>
        </div>)}
      </div>
      </div>
    </div>
  ) : "";
}

export default LoginOverlay;

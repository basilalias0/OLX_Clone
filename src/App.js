import React, {useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {auth} from './Firebase/config'
import { authContext } from './Store/Context';



function App() {

  const{setUser}=useContext(authContext)
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user)
    });
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>

      </Router>
      
      
    </div>
  )
  }

export default App;

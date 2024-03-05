import React, {useEffect,useContext} from 'react';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import {auth} from './Firebase/config'
import { authContext } from './Store/Context';
import SellPage from './Pages/SellPage';
import ViewPage from './Pages/ViewPage';
import PostContext from './Store/PostContext';




function App() {

  const{setUser}=useContext(authContext)
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      setUser(user)
    });
  })
  return (
    <div>
      <PostContext>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sellyourthing' element={<SellPage/>}/>
          <Route path='/post' element={<ViewPage/>}/>
        </Routes>

      </Router>
      </PostContext>
      
      
    </div>
  )
  }

export default App;

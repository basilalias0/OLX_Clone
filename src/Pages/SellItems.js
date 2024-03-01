import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import './SellItems.css'
import { authContext } from '../Store/Context';
import { useContext } from 'react';
import { db, storage } from '../Firebase/config';
import { useNavigate } from 'react-router-dom';

function SellItems() {

  const {user} = useContext(authContext)

  const [brand,setBrand] = useState("")
  const [year,setYear] = useState()
  const [KMDriven,setKMDriven] = useState()
  const [adTitle,setAdTitle] =useState("")
  const [description,setDescription] =useState("")
  const [price,setPrice] = useState()
  const [image ,setImage] = useState()
  const [state, setState] = useState("")
  const [district, setDistrict] = useState("")
  const [ locality, setLocality] = useState("")
  const [conNum, setConNum] = useState()

  const date = new Date()
  const day = date.getUTCDate()
  const month = date.toLocaleString("en-US", { month: "short" })

  const navigate = useNavigate()

  const handleSubmit = (event)=>{
    event.preventDefault()
  console.log("action started")                     
storage.ref(`/images/${image.name}`).put(image).then(({ref}) => {
      ref.getDownloadURL().then((url)=>{
        db.collection('products').add({
          brand,
          year,
          KMDriven,
          adTitle,
          description,
          price,
          url,
          userID : user.uid,
          state,
          district,
          locality,
          conNum,
          createdDate : `${day} ${month}`


        })
      })
    }).then(
      navigate('/')
    );


  }

  


  return (
    <div>
      <Navbar/>
      <div className='formContainer'>
        <div className='formBody'>
            <form onSubmit={handleSubmit}>
                <div className='section'>
                <h3>INCLUDE SOME DETAILS</h3>
                <input type='text' placeholder='Brand*' value={brand} onChange={(e)=>{setBrand(e.target.value)}} required></input>
                <input type='number' placeholder='Year' value={year} onChange={(e)=>{setYear(e.target.value)}} required></input>
                <input type='text' placeholder='Kilometer Driven*' value={KMDriven} onChange={(e)=>{setKMDriven(e.target.value)}} required></input>
                <input type='text' placeholder='Ad Title*' value={adTitle} onChange={(e)=>{setAdTitle(e.target.value)}} required></input>
                <input type='text' placeholder='Description*' value={description} onChange={(e)=>setDescription(e.target.value)} required></input>
                </div>
                <hr/>
                <div className='section'>
                <h3>SET A PRICE</h3>
                <input type='number' placeholder='Price*' value={price} onChange={(e)=>{setPrice(e.target.value)}} required></input>
                </div>
                <hr/>
                <div className='section'>
                <h3>UPLOAD A PHOTO</h3>
                <div className='imageDiv'>
                <img alt='Image not chose' src={image? URL.createObjectURL(image): ''} />
                <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
                </div>
                </div>
                <hr/>
                <div className='section'>
                <h3>CONFORM YOUR LOCATION</h3>
                <input type='text' placeholder='State*' value={state} onChange={(e)=>{setState(e.target.value)}} required></input>
                <input type='text' placeholder='District*' value={district} onChange={(e)=>{setDistrict(e.target.value)}} required></input>
                <input type='text' placeholder='Locality*' value={locality} onChange={(e)=>{setLocality(e.target.value)}} required></input>
                
                </div>
                <hr/>
                <div className='section'>
                <h3>REVIEW YOUR DETAILS</h3>
                <h2>{user.displayName}</h2>
                <input type='number' placeholder='Contact Number*' value={conNum} onChange={(e)=>{setConNum(e.target.value)}} required></input>
                
                </div>
                <hr/>
                <div className='section'>
                <div className='btn'>
                <button>Post Now</button>
                </div>
                </div>  
                
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SellItems;

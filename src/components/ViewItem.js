import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import './ViewItem.css'
import PostContext, { postContext } from '../Store/PostContext';

function ViewItem() {

  const {postDetails} = useContext(postContext)

  useEffect (()=>{
    console.log(postDetails)
    console.log(postDetails.url)
  })

  return (
    <div>
      <Container>
        <div className='fullPost'>
          
            <div className='image'>
             
              <img src={postDetails.url} alt='Image Not Found'/>
              
              
            </div>
            <div className='details'>
              <div className='subHead'>Details</div>
            <br/>
            <h3>Brand: {postDetails.brand}</h3>
            </div>
            <div className='description'>
            <div className='subHead'>Description</div>
            <h3> {postDetails.description}</h3>
            <h3>Kilomater Driven: {postDetails.KMDriven}</h3>
            <h3>Year: {postDetails.year}</h3>
            </div>
            <div className='priceAndTitle'>
                <div className='price'>₹ {postDetails.price}</div>
                <div className='title'>{postDetails.adTitle}</div>
                
            </div>
            <div className='sellerInfo'>
            <div className='subHead'>{postDetails.sellerName}</div>
            <div className='contact'>+91 {postDetails.contactNumber}</div>
            <div className='contact'>Email: {postDetails.mail}</div>
            </div>
            <div className='postedIn'>
              <div className='posted'>Posted on: {postDetails.createdDate}</div>
                <div className='posted'>{postDetails.locality}, {postDetails.district}, {postDetails.state}</div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default ViewItem;

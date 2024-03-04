import { Container } from '@mui/material';
import React from 'react';
import './ViewItem.css'

function ViewItem() {
  return (
    <div>
      <Container>
        <div className='fullPost'>
          
            <div className='image'></div>
            <div className='details'>
              <div className='subHead'>Details</div>
            <br/>
            <h3>Brand: "Iphone"</h3>
            </div>
            <div className='description'>
            <div className='subHead'>Description</div>
            <h3> "Description"</h3>
            <h3>Kilomater Driven: "KMDriven"</h3>
            <h3>Year: ""year"</h3>
            <h3>AD ID: "id"</h3>
            </div>
            <div className='priceAndTitle'>
                <div className='price'>₹10000</div>
                <div className='title'>title</div>
                
            </div>
            <div className='sellerInfo'>
            <div className='subHead'>Seller Name</div>
            <div className='contact'>+91 conNum</div>
            <div className='contact'>email</div>
            </div>
            <div className='postedIn'>
              <div className='posted'>postDate</div>
                <div className='posted'>Locaton</div>
            </div>
        </div>
      </Container>
    </div>
  );
}

export default ViewItem;

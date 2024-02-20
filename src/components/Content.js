import React from 'react';
import './Content.css'
import Container from "@mui/material/Container";

function Content() {
  return (
    <div>
      <Container>
      <div className='contain'>
        <div className='containHead'>Fresh recommendations</div>
        <div className='cards'>
          <div className='card'>
            <div className='proPic'></div>
            <div className='proPrice'>₹1000</div>
            <div className='proTitle'>Iphone 11pro max refurbished</div>
            <div className='proFooter'>
              <div className='proLocation'>Andaman & Nicobar Islands</div>
              <div className='proDate'>Jan 27</div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Content;

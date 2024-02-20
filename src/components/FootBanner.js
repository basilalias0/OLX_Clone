import React from 'react';
import './FootBanner.css'


function FootBanner() {
  return (
    <div>
      <div className='footBanner'>
        <div className='footIntro'>
            <div className='head'>TRY THE OLX APP</div>
            <div className='description'>Buy, sell and find just about anything using the app on your mobile.</div>
        </div>
        <div className='footLink'>
            <div className='head'>GET YOUR APP TODAY</div>
            <div className='links'>
            <a href='https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792'><button className='btn1'></button></a> 
         <a href='https://play.google.com/store/apps/details?id=com.olx.southasia&hl=en_IN&pli=1'><button className='btn2'></button></a>   
            </div>
        </div>
      </div>
    </div>
  );
}

export default FootBanner;

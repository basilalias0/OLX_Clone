import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import SellItem from '../components/SellItem';
function SellPage() {

  return (
    <div>
      <Navbar/>
      <SellItem/>
      <Footer/>
    </div>
  )
}

export default SellPage;

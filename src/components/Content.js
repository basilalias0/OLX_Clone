import React, { useEffect, useState,useContext } from 'react';
import './Content.css'
import Container from "@mui/material/Container";
import {db} from '../Firebase/config'
import { useNavigate } from 'react-router-dom';
import { postContext } from '../Store/PostContext';


function Content() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const {setPostDetails} = useContext(postContext)

  

  useEffect(()=>{
    db.collection('products').get().then((snapshot)=>{
      const posts = snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }

      })
      console.log(posts)
      setProducts(posts)
    })
  },[])

  const handleClick = (product)=>{
    console.log("You clicked this")
    console.log(product)
    setPostDetails(product)
    navigate('/post')
    
  }

  return (
    <div>
      <Container>
      <div className='contain'>
        <div className='containHead'>Fresh recommendations</div>
        <div className='cards'>

        {products.map(product=>{
          return(
          <div onClick={()=>{handleClick(product)}} className='card'>
          <div className='proPic'><img src={product.url} alt='image not found'></img></div>
          <div className='proPrice'>₹{product.price} </div>
          <div className='proTitle'>{product.adTitle}</div>
          <div className='proFooter'>
            <div className='proLocation'>{product.state}</div>
            <div className='proDate'>{product.createdDate} </div>
          </div>
        </div>)
        })
          
          }
        </div>
      </div>
      </Container>
    </div>
  );
}

export default Content;

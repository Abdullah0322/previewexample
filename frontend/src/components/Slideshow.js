import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom,Fade } from 'react-slideshow-image';
import Product from './Product';
const slideImages = [
 
    '/images/airpods.jpg',
    '/images/phone.jpg'

   
  ];
  
  const Slideshow = (productimage) => {
      console.log(productimage)
      return (
        <div>
            <img src={productimage}></img>
        </div>
      
      );
  }
  export default Slideshow
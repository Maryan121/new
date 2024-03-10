import React, { useState, useEffect } from 'react';
import './imageSlider.css';
import imagesData from './data';

export default function ImageSlider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImgIndex((prevIndex)=> (prevIndex + 1) % imagesData.length);
    },2000)
    return ()=> clearInterval(interval)
  },[])
  // Make sure to specify an empty dependency array to ensure the effect runs only once

  return (
    <div className='sliderContainer'>
     {
      imagesData.map((image,index)=>(
        <div key={index} style={{display: index === currentImgIndex? 'block': 'none'}}>
          <img src={image.coverImg} alt={image.title} />
          <div className="inf">
            <h4>{image.title}</h4>
            <a href={image.link}>link</a>
          </div>
        </div>
      ))
        
    }
    </div>
  );
}

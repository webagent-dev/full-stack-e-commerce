import React, { useState, useEffect  } from 'react';
import './slider.css'
import { data } from '../../one'
function Slider() {
  const [index, setIndex ] = useState(0)
  const { image, title, desc} = data[index]
  const checkError = (num) => { 
      if(num > data.length -1){
        return 0
      }
      if(num < 0){
        return data.length -1
      }
      return num
  }
  const prevSlider = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      return checkError(index)
    })
  }
  const nextSlider = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      return checkError( index)      
    })
  }
  useEffect(() => {
    const changeSlider = setInterval(() => {
        nextSlider()
    },5000)
    return () => clearInterval(changeSlider)
  },[index])
  return (
  <div className='slider__container'>
         <span onClick={prevSlider} className="  arrow left">{'<'}</span>
            <span onClick={nextSlider} className=" arrow right">{'>'}</span>
          <article className=''>
        <div className="slide__wrapper" >
            <div className="slider__image">
                <img src={image} alt="slider-pic" />
            </div>
            <div className="slider__text">
                <h1>{title}</h1>
                <p>{desc}</p>
                <button className="slider__btn">shop now *</button>
        </div>
        </div>
        </article>
       </div> 
  )
}

export default Slider;

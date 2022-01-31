import React, { useState, useEffect  } from 'react';
import './slider.style.js'
import { SliderContainer, Arrow, SliderWrapper, SliderImage, Image, SliderText,Title, Desc, Button,SliderMainWrapper} from './slider.style'
import { FaArrowLeft, FaArrowRight, FaAngleRight} from 'react-icons/fa'
import { data } from '../../one'
function Slider() {
  const [index, setIndex ] = useState(0)

  // handleSlider function
const handleSlider = (direction) => {
  if(direction === 'left'){
    setIndex(index > 0 ? index -1 : 3) 
  }else{
    setIndex(index < 3 ? index + 1 : 0)
  }
}
//  old ways and the way i know
// const nextSlider = (direction) => {
//   if(direction === 'right'){
//     setIndex((state) => {
//       let index = state + 1
//       if(index > data.length - 1){
//         index = 0
//       }
//       return index
//     })
//   }
// }

// const prevSlider = (direction) => {
//   if(direction === 'left'){
//     setIndex((state) => {
//       let index  = state - 1
//       if(index < 0){
//         index = data.length - 1
//       }
//       return index
//     })
//   }
// }
useEffect(() => {
  const slider = setInterval(() => {
  handleSlider('right')
  },5000)
  return () => clearInterval(slider)
},[index, handleSlider])

  return (
  <SliderContainer>
         < Arrow direction='left' onClick={() => handleSlider('left')}> <FaArrowLeft  size='20px' /></ Arrow>
            < Arrow direction='right' onClick={() => handleSlider('right')}> <FaArrowRight size='20px' /></ Arrow>
            <SliderMainWrapper index={index}>
          {
                data.map((data) => (
            <SliderWrapper key={data.id} bg={data.bg} >
            <SliderImage>
                <Image src={data.image} alt="slider-pic" />
            </SliderImage>
             <SliderText text={data.text}>
                <Title>{data.title}</Title>
                <Desc>{data.desc}</Desc>
                < Button>shop now <FaAngleRight /></ Button>
        </SliderText>
        </SliderWrapper>          
            ))
          }
          </SliderMainWrapper>
       </SliderContainer> 
  )
}

export default Slider;

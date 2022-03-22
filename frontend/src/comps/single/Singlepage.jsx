import React, { useState,  useEffect } from 'react';
import {SingleContainer, SingleWrapper, ImageWrapper, Image, SingleContent, Title, Text, Price, OtherContent, Button, Show, Counter, Header, Select, Option, Color, ColorWrapper } from './singlepage.style'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethod'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../feature/cartSlice'

function SingleProduct() {
  const location = useLocation()
const id = location.pathname.split('/')[2]
const [singleProduct, setSingleProduct] = useState({})
  const [que, setQue ] = useState(1)
  const [size, setSize] = useState()
    const [color, setColor] = useState()
const dispatch = useDispatch()

useEffect(() => {
const getData = async () => {
  const res = await publicRequest.get(`product/main_product/${id}`)
  setSingleProduct(res.data)

}
getData()
},[id])
const handleQue = (type) => {
if(type === 'dec'){
  que > 1 && setQue(que -1 )
}else{
  setQue(que + 1)
}

}
const addToCart = () => {
    dispatch(addProduct({
      product: {...singleProduct, color, size, que},
      price: singleProduct.price * que
    }))
}
  return (
    <SingleContainer>
      <SingleWrapper>
        <ImageWrapper>
          <Image src={singleProduct.photoURL} alt={singleProduct.name} />
        </ImageWrapper>
        <SingleContent>
          <Title>{singleProduct.name}</Title>
          <Text>{singleProduct.desc}</Text>
          < Price>${singleProduct.price}</Price>
          <OtherContent>
            <ColorWrapper>
            <Header>Color</Header>
            {
              singleProduct.color?.map((c) =>  <Color bg={c} key={c} onClick={() => setColor(c)}/>)
            }
            </ColorWrapper>
          <ColorWrapper>
           <Header>Size</Header>
            <Select onChange={(e) => setSize(e.target.value)}>
            {
              singleProduct.size?.map((s) =>  <Option key={s}>{s}</Option>)
            }
            </Select>
          </ColorWrapper>
          </OtherContent>
          {/* Second Other Container */}
          <OtherContent>
            <Counter>
              <FaMinus  onClick={() => handleQue('dec')}/>
              <Show>{que}</Show>
                     <FaPlus  onClick={() => handleQue('inc')}/>
            </Counter>
            <Button onClick={addToCart}>ADD TO CART</Button>
          </OtherContent>
        </SingleContent>
      </SingleWrapper>
    </SingleContainer>
  )
}

export default SingleProduct;

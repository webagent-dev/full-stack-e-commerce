import React, { useState,  useEffect } from 'react';
import {SingleContainer, SingleWrapper, ImageWrapper, Image, SingleContent, Title, Text, Price, OtherContent, Button, Show, Counter, Header, Select, Option, Color, ColorWrapper } from './singlepage.style'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethod'
function SingleProduct() {
  const location = useLocation()
const id = location.pathname.split('/')[2]
const [singleProduct, setSingleProduct] = useState({})
  const [que, setQue ] = useState(0)
useEffect(() => {
const getData = async () => {
  const res = await publicRequest.get(`product/main_product/${id}`)
  setSingleProduct(res.data)

}
getData()
},[id])
  return (
    <SingleContainer>
      <SingleWrapper>
        <ImageWrapper>
          <Image src={singleProduct.photoURL} alt={singleProduct.name} />
        </ImageWrapper>
        <SingleContent>
          <Title>{singleProduct.name}</Title>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quam est amet reprehenderit illum ad doloremque consequatur quod libero eaque?</Text>
          < Price>${singleProduct.price}</Price>
          <OtherContent>
            <ColorWrapper>
            <Header>Color</Header>
            {
              singleProduct.color?.map((c) =>  <Color bg={c} />)
            }
            </ColorWrapper>
          <ColorWrapper>
           <Header>Size</Header>
            <Select>
            {
              singleProduct.size?.map((s) =>  <Option>{s}</Option>)
            }
            </Select>
          </ColorWrapper>
          </OtherContent>
          {/* Second Other Container */}
          <OtherContent>
            <Counter>
              <FaMinus />
              <Show>3</Show>
                     <FaPlus />
            </Counter>
            <Button>ADD TO CART</Button>
          </OtherContent>
        </SingleContent>
      </SingleWrapper>
    </SingleContainer>
  )
}

export default SingleProduct;

import React from 'react';
import {SingleContainer, SingleWrapper, ImageWrapper, Image, SingleContent, Title, Text, Price, OtherContent, Button, Show, Counter, Header, Select, Option, Color, ColorWrapper } from './singlepage.style'
import { FaMinus, FaPlus } from 'react-icons/fa'
function SingleProduct() {
  return (
    <SingleContainer>
      <SingleWrapper>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <SingleContent>
          <Title>The Product Name</Title>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum quam est amet reprehenderit illum ad doloremque consequatur quod libero eaque?</Text>
          < Price>$20.00</Price>
          <OtherContent>
            <ColorWrapper>
            <Header>Color</Header>
        <Color bg='black' />
          <Color bg='blue' />
        <Color bg='gray'  />
            </ColorWrapper>
          <ColorWrapper>
           <Header>Size</Header>
            <Select>
      <Option>XS</Option>
      <Option>S</Option>
      <Option>M</Option>
      <Option>L</Option>
      <Option>XL</Option>
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

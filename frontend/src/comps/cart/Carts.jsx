import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { CartContainer, CartWrapper, Head, Button, Title, Content, CartContent, Summary,Text,Underline,Detail, Price, Total, CartListWrapper} from './cart.style'
import { CartList } from '../../one'
import { useSelector } from 'react-redux'
import  StripeCheckout  from 'react-stripe-checkout'
import { getProduct, getTotal } from '../../feature/cartSlice'
import { useNavigate } from 'react-router-dom'
import { privateRequest } from '../../requestMethod'
function Carts() {
  const cart = useSelector(getProduct)
  const total = useSelector(getTotal)
  const navigate = useNavigate()
  const [stripeToken, setStripeToken] = useState(null)
  const checkOutToken = (token) => {
    setStripeToken(token)
  }
useEffect(() => {
const submitToken = async () => {
  try{
    const res = await axios.post('http://localhost:8080/api/v1/gate/payment',{
      tokenId: stripeToken.id,
      amount: total * 100
    })
    console.log(res.data)
     navigate('/sucess',{data: res.data})
  }catch(err){
    console.log(err)
  }
}
stripeToken && submitToken()
},[stripeToken, total, navigate])
  return (
      <CartContainer>
        <Head>YOUR BAG</Head>
          <CartWrapper>
            <Button >CONTINUE SHOPPING</Button>
           < Content>
    <Underline>shopping (2) </Underline>
    <Underline>Your Wishlist (0)</Underline>
           </Content>
              <Button bg='black' text='white'>CHECKOUT NOW</Button>
          </CartWrapper>
          <Content>
            <CartListWrapper>
                {
            cart.map((item) =>(   <CartList key={item._id} data={item}/>))
          }
            </CartListWrapper>
        
            <Summary>
              <Head>ORDER SUMMERY</Head>
              <Detail>
        <Title>Subtotal</Title>
        <Price>${total}</Price>
              </Detail>
              <Detail>
        <Title>Estimated Shipping</Title>
        <Price>$ 50.0</Price>
              </Detail>
              <Detail>
        <Title> Shipping Discount</Title>
        <Price>- $50.0</Price>
              </Detail>
              <Detail>
      <Total>Total </Total>
        <Price text='black'>$ {total}</Price>
          <StripeCheckout 
            name= 'Shopy.'
            billingAddress
            shippingAddress
            description= {`your total amount is $${total}`}
            amount={total * 100}
            token={checkOutToken}
            stripeKey={process.env.REACT_APP_STRIPE}
           >
      <Button>CheckOut Now</Button>
      </StripeCheckout>
              </Detail>
            </Summary>
          </Content>
      </CartContainer>
  )
}

export default Carts;

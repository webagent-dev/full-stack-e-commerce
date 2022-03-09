import { PayContainer, PayBtn, } from './stripe'
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const myKey='pk_test_51KJQNSLZ9tjkQNv0poP35pWz6E3ubhrmHH9qXkOtoQmcJ30yqdjCBSGrN67r4yDp10tyXu9v0IX6Zr8wwGdTJMPv00EzXbHA1e'
const Pay = () => {
    const navigate = useNavigate()
    const [getToken, setGetToken ] = useState(null)
    const createToken = (token) => {
            setGetToken(token)
    }
    
    useEffect(() => {
        const createPayment = async () => {
        try{
               const res = await  axios.post('http://localhost:8080/api/v1/gate/payment',{
                   tokenId: getToken.id,
                   amount: 1000000
               })
               console.log(res.data)
        }catch(err){
            console.log(err.message)
        }
    }
       getToken && createPayment()
    },[getToken])
 
    return (
        <PayContainer>
            <StripeCheckout
                name='spopy test'
                description= 'we are testing the shop'
                 amount={1000000}
                 stripeKey={myKey}
                 currency="USD"
                 token={createToken}
                 image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
                 billingAddress
                 shippingAddress
            >
            <PayBtn>PAY</PayBtn>
               </StripeCheckout>
          </PayContainer>
    )
}
            //     description= 'we are testing our api end-point',
            //   panelLabel='paying only',
            //    amount={1000000}, 
            //     currency="USD",
            //     stripeKey={myKey}>


export default Pay
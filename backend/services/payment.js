const  express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_51KJQNSLZ9tjkQNv0Q2SaMmtdxgyz2xtFCCf7YqjESY7RpAfIROw5Y2ViVTnpDxNFK5Ym43mGGtqvvACbFWrEWND000srLuqDON')

router.post('/payment', async (req, res) => {
    try{
      await  stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
              currency: "usd"
        }, (stripeErr, stripeRec) => {
            if(stripeErr){
                res.status(402).json(stripeErr)
                console.log(stripeErr)
            }else{
                res.status(200).json(stripeRec)
            }
        })
    }catch(err){
        res.status(500).json(err.message)
    }
})

module.exports = router

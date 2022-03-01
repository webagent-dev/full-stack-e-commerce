require('dotenv').config()
const express = require('express')
const connectToDb = require('./db/database')
const app = express()
const port = process.env.PORT || 5000
const host = `server started at http://localhost:${port}`
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
// const cartRouter = require('./routes/cart')
// const orderRouter = require('./routes/order')

//  Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// routes
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/users', userRouter)
    app.use('/api/v1/product', productRouter)
    // app.use('/api/v1/cart', cartRouter)
    // app.use('/api/v1/order', orderRouter)
// Start 

const start = async () => {
    try{
          await connectToDb(process.env.MONGO_URL)
            app.listen(port, () => console.log(host))
    }catch(e){
        console.log(e.message)
    }
}


    start()
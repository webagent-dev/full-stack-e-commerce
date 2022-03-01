const jwt = require('jsonwebtoken')

const verifyToken = async (req,res,next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
       return  res.status(403).json('sorry you are not to acess this page')
    }else{
           try{
                const token = authHeader.split(' ')[2]
                console.log(token)
                jwt.verify(token, process.env.MY_CODE,(err, user) => {
                    if(err){
                        console.log(err.message)
                        return res.status(404).json('invalid token please try again')
                    }else{
                        req.user = user
                    next()
                    }
                })
        }catch(er){
            res.status(500).json(err.message)
        }
    }
}

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res, () => {
        if(!req.user.id === req.params.id ||!req.user.isAdmin){
             res.status(403).json('you are not allowed to access this page')
        }else{
                next()
        }
    })
}

const verifyTokenOnlyAdmin = (req,res,next) => {
    verifyToken(req,res,() => {
        if(!req.user.isAdmin){
            res.status(403).json('you are not allowed to access this page')
         
        }else{
                    next()
        }
    })
}



module.exports = {
    verifyTokenAndAdmin, verifyTokenOnlyAdmin, verifyToken
}
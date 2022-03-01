const mongoose = require('mongoose');

const connectToDb = (url ) => {
   return  mongoose.connect(url)
    .then(() => {
        console.log('Connected to Db')
    }).catch(err => console.log(err))
}

module.exports = connectToDb
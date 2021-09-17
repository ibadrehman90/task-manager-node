const mongoose = require('mongoose')

// move this to app.js

const connectDB = (url) => {
    return mongoose.connect(url,
        {useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology: true
        })
}

module.exports = connectDB



// mongoose.connect(connectionString,
//     {useNewUrlParser : true,
//     useCreateIndex : true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//     })
// .then(()=>console.log('Connected to the database...'))
// .catch(
//     (err)=>console.log(err))
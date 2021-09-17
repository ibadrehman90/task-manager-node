const express = require('express')
const app = express()

// importing tasks routes
const tasks = require('./routes/tasks')
// importing users routes
const users = require('./routes/users')
// DB connection
const connectDB = require('./db/connect')
require('dotenv').config()
// middlewear
app.use(express.json())

app.use('/api/v1/users',users)
app.use('/api/v1/tasks',tasks)


const port = 3000

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        
    }
}

start()



// routes
// app.get('/hello' , (req , res)=>{

//     res.send('Task manager ')
 
//  })
// get all the tasks
// app.get('/api/v1/tasks')

// post a new task
// app.post('/api/v1/tasks')

// get a single task
// app.get('/api/v1/tasks/:id')

// update task
// app.patch('/api/v1/tasks/:id')

// delete a task
// app.delete('/api/v1/tasks/:id')
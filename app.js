require('./db/connect')
const express = require('express')
const app = express()

// importing tasks routes
const tasks = require('./routes/tasks')

// middlewear
app.use(express.json())

app.use('/api/v1/tasks',tasks)


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

const port = 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


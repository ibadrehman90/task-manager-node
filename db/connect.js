const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://ibad:helloworld123@taskmanagerproject.j53er.mongodb.net/task-manager?retryWrites=true&w=majority'

mongoose.connect(connectionString,
    {useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
.then(()=>console.log('Connected to the database...'))
.catch(
    (err)=>console.log(err))
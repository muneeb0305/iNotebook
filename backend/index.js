const express = require('express')
var cors = require('cors')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inotebook',()=>{
    console.log("Connected to Mongo Successfully")
});
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
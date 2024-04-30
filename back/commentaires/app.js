const express = require('express')
const app = express()
const PORT = 3000;
const HOST = '0.0.0.0'


// MongoDB

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/commentaires')
//   .then(() => console.log('Connected!'));

// App
app.get('/', async(req, res)=>{
  res.status(200).json({message : 'Hello world'})
})

app.get("/db", (req, res) => {
  
  res.send("Hello World from db");
});

app.listen(PORT, HOST)



console.log(`Our app running on http://${HOST}:${PORT}`)
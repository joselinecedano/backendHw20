//DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');


//MIDDLEWARE
app.use(cors());

//ROUTES
app.get('/', (req,res)=>{
    res.send('HW 20 Express React App!!')
})


//LISTENER
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
})

//DEPENDENCIES
const express = require('express');
const app = express();
const cors = require('cors');

//IMPORT JSON FILES
const projects = require('./projects.json');
const about = require('./about.json');

//MIDDLEWARE
app.use(cors());

//ROUTES
    //home route
app.get('/', (req,res)=>{
    res.send('HW 20 Express React App!!')
});
    //projects route
app.get('/projects', (req,res)=>{
    res.json(projects) //<--retrieves and sends projects 
});
    //about route
app.get('/about', (req,res)=>{
    res.json(about) //<--retrieves and sends about  
});

//LISTENER
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
});

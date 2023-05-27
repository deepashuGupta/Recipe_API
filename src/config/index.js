require('dotenv').config()
const express = require('express');
const app = express();

// database connection file
require('./database');


// middleware for parsing data into json
app.use(express.json())
app.use(express.urlencoded({extended : true}));


// Routers configuration
app.use('/recipe',require('../api/routes/recipeRoutes'))
app.use('/user',require('../api/routes/userRoutes'))

// server configuration
app.listen(process.env.PORT,()=>{
    console.log(`Server started on ${process.env.PORT} !!`)
})
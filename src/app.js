const express = require('express');
const indexRoutes = require('./routes/index.routes');
const app = express();
app.use((rea,res,next)=>{
    console.log("this middlware is between ap and route");
    next()
})
app.use('/',indexRoutes)

module.exports = app
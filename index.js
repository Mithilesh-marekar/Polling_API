// Requiring Express
const express=require('express')
// express router
const Router=express.Router()

// this is the entry point of all the api named url's
console.log("i m in")
Router.use('/api',require('./routes/api/index'));
// exporting router
module.exports=Router
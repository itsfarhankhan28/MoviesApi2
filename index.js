const express = require('express')
const app = express()
const port = 5000   

app.get('/',(req,res)=>{
    res.send('This is the homepage')
})
app.get('/about',(req,res)=>{
    res.send('This is the about')
})

app.listen(port , ()=>{
    console.log("listening to port 5000")
})
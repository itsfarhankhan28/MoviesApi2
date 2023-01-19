const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

require('./db/conn')
const Movies = require('./models/schema')

app.post('/movies',async(req,res)=>{
    const movies = new Movies(req.body)
    const Newmovies = await movies.save()
    console.log(Newmovies)
})

app.listen(port , ()=>{
    console.log("listening to port 5000")
})
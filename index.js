const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

app.use(express.json())

require('./db/conn')
const Movies = require('./models/schema')

app.post('/movies',async(req,res)=>{
    const movies = new Movies(req.body)
    const Newmovies = await movies.save()
    console.log(Newmovies)
})

app.get('/movies',async(req,res)=>{
    const FoundMovies = await Movies.find()
    res.send(FoundMovies)
    console.log(FoundMovies)
})

app.get('/movies/:id',async(req,res)=>{
    const _id =  req.params.id
    const moviesData = await Movies.findById(_id)
    res.send(moviesData)
    console.log(moviesData)
})

app.delete('/movies/:id',async(req,res)=>{
    const _id = req.params.id
    const deletedMovies = await Movies.findByIdAndDelete(_id)
    console.log(deletedMovies)
    res.send(deletedMovies)
})

app.listen(port , ()=>{
    console.log("listening to port 5000")
})
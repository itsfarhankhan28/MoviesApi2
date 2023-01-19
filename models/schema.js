const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
    name:String,
    dateofRelease:Number,
    actors:String,
    description:String
})

const Movies = mongoose.model('Newmovies',MoviesSchema)

module.exports = Movies
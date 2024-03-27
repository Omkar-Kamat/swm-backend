const mongoose = require('mongoose')
const Schema = mongoose.Schema
const surveySchema = new Schema({
    name:{
        type:String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required: true
    },
    location:{
        type:String,
        required: true
    },
    Q1:{
        type:String,
        required: true
    },
    Q2:{
        type:String,
        required: true
    },
    Q3:{
        type:String,
        required: true
    },
    Q4:{
        type:String,
        required: false
    },
    Q5:{
        type:String,
        required: true
    },
    Q6:{
        type:String,
        required: false
    },
    Q7:{
        type:String,
        required: false
    },
    Q8:{
        type:String,
        required: false
    },
    Q9:{
        type:String,
        required: false
    }
})

module.exports = mongoose.model('Survey',surveySchema)

